import { lastFmArtistCall, lastFmTunesCall } from './api_util';
import * as d3 from "d3";
import Force from 'd3-force';
import { showBubbles } from './artists';

showBubbles('artists');

document.addEventListener("DOMContentLoaded", () => {
  const topArtists = document.getElementById("show-top-artists");
  const topTunes = document.getElementById("show-top-tunes");
  const infoModalIcon = document.getElementById("info-modal-toggle");
  const modal = document.getElementById("modal");

  //Default call to TopArtists to populate page with data on initial load
  showBubbles('artists');

  topArtists.addEventListener("click", () => {
    showBubbles('artists');
  })

  topTunes.addEventListener("click", () => {
    showBubbles('tunes');
  })

  infoModalIcon.addEventListener("click", (e) => {
    e.preventDefault();
    
  });
  
});

