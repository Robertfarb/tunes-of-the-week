//Auth information for API Call
import { lastFmCall } from './api_util';
import * as d3 from "d3";

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

  let tickTrue = () => {
    circles.attr("cx", d => d.x).attr("cy", d => d.y)
  }


  let svgContainer = d3.select("#svg-container"),
  circles = d3.select("#svg-container").selectAll("circle")
                                        .data(artistData),
  i = Math.floor(Math.random() * 1),
  height = 500,
  width = 1000,
  forceStrength = 0.09,
  center = { x: (width/2), y: (height/2) };

  let collisionPadding = 4,
  clipPadding = 4,
  minRadius = 16,
  maxRadius = 65;
  
  let forceMovement = d3.forceSimulation(topHits)
      .force("x", d3.forceX(center.x).strength(.08))
      .force("y", d3.forceY(center.y).strength(forceStrength))
      .force("collide", d3.forceCollide(100))
      .on("tick", tickTrue)

  circles.enter().append("circle")
    .attr("class", "circle")
    .attr("cx", (d, i) => 0 + (i * 25))
    .attr("cy", (d, i) => 0 + (i * 25))
    .attr("r", function (d) { return d.listeners / 93000})
    .attr("fill", "teal")
    // // .attr('transform', 'translate(' + [width / 2, height / 2] + ')')
    .on('mouseover', function (d, i) {
    d3.select(this)
      .transition()
      .duration(100)
      .attr('r', d.listeners / 80000)
      .attr('fill', 'blue');
      console.log(d.name)
    })
    .on('mouseout', function (d, i) {
      d3.select(this)
        .transition()
        .duration(100)
        .attr('r', d.listeners / 93000)
        .attr('fill', 'teal');
    })
});
