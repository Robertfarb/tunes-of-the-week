//Auth information for API Call
import { lastFmCall } from './api_util';
import * as d3 from "d3";
import Force from 'd3-force';

let artistData = [];

lastFmCall.then(callResponse => {
  let topHits = Array.from(callResponse)

  for (let i = 0; i < 25; i++) {
    artistData[i] = {
      name: topHits[i].name,
      listeners: topHits[i].listeners,
      url: topHits[i].url,
      artistImg: topHits[i].image[4].text
    }
  }

  let circles = d3.select("#svg-container").selectAll("circle")
                                              .data(artistData),
  i = Math.floor(Math.random() * 1),
  height = 500,
  width = 1000,
  forceStrength = 0.09,
  center = { x: (width/2), y: (height/2) };

  let tooltip = d3.select("body")
    .append("div")
    .attr("class", "info-box")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("");

  let force = d3.forceSimulation(artistData)
    .force("center", d3.forceCenter())
    .force('charge', d3.forceManyBody(5))
    .force('collide', d3.forceCollide().radius(40).strength(1))
    .force('x', d3.forceX(center.x).strength(0.1))
    .force('y', d3.forceY(center.y).strength(0.1));

  circles.enter().append("circle")
    .attr("class", "circle")
    .attr("cx", center.x)
    .attr("cy", center.y)
    .attr("r", function (d) { return d.listeners / 93000})
    .attr("fill", "hsl(" + Math.random() * 360 + ",100%,50%)")
    .attr("stroke", "black")
    .on('mouseover', function (d, i) {
    d3.select(this)
      .transition()
      .duration(100)
      .attr('r', d.listeners / 80000)
      .attr('fill', "hsl(" + Math.random() * 360 + ",100%,50%)")
      tooltip.html("<div>" + d.name + "<br>" + "Listeners: " + d.listeners +"</div>")
      return tooltip.style("visibility", "visible");
    })
    .on("mousemove", function () { 
      return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px"); 
    })
    .on('mouseout', function (d, i) {
      d3.select(this)
        .transition()
        .duration(100)
        .attr('r', d.listeners / 93000)
        .attr('fill', "hsl(" + Math.random() * 360 + ",100%,50%)")
      return tooltip.style("visibility", "hidden")
    })
  
  force.on('tick', function () {
    d3.select('#svg-container').selectAll('.circle')
      .attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')'
      })
    d3.select('#svg-container').selectAll('.circle')
      .attr('x1', function (d) { return d.x })
      .attr('x2', function (d) { return d.x })
      .attr('y1', function (d) { return d.y })
      .attr('y2', function (d) { return d.y })
  })
})

