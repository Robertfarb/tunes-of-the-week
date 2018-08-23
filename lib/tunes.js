import { lastFmArtistCall, lastFmTunesCall } from './api_util';
import * as d3 from "d3";
import Force from 'd3-force';
import { showBubbles } from './artists';

document.addEventListener("DOMContentLoaded", () => {
  const topArtists = document.getElementById("show-top-artists");
  const topTunes = document.getElementById("show-top-tunes");

  topArtists.addEventListener("click", () => {
    showBubbles('artists');
  })

  topTunes.addEventListener("click", () => {
    showBubbles('tunes');
  })
});

