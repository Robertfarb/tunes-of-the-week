//Auth information for API Call
import { lastFmArtistCall, lastFmTunesCall } from './api_util';
import * as d3 from "d3";
import Force from 'd3-force';
import { showLastFmArtists } from './artists';

document.addEventListener("DOMContentLoaded", () => {
  const topArtists = document.getElementById("show-top-artists");
  debugger;

  topArtists.addEventListener("click", () => {
    showLastFmArtists();
  })
});

