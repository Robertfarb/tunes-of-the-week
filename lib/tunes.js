//Auth information for API Call
import { lastFmCall } from './api_util';
const d3 = require('D3');

lastFmCall.then(console.log)

let svgContainerDiv = document.getElementById("svgcontainer")

const svgContainer = d3.select("body").append("svg")
                                      .attr("width", 200)
                                      .attr("height", 200)
                    
