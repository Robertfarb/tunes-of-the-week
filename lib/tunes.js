import { lastFmArtistCall, lastFmTunesCall } from './api_util';
import * as d3 from "d3";
import Force from 'd3-force';
import { showBubbles } from './circles';

document.addEventListener("DOMContentLoaded", () => {
  const topArtists = document.getElementById("show-top-artists");
  const topTunes = document.getElementById("show-top-tunes");
  const infoModalIcon = document.getElementById("info-modal-toggle");
  const modal = document.getElementById("modal");
  const header = document.getElementById("tunes-header");
  const modalScreen = document.getElementById("modal-screen");
  const modalX = document.getElementById("modal-x");

  //Default call to TopArtists to populate page with data on initial load
  showBubbles('artists');

  console.log(modalX);

  topArtists.addEventListener("click", () => {
    showBubbles('artists');
    header.textContent = "Last Week's Top Artist's in the United States";
  })

  topTunes.addEventListener("click", () => {
    showBubbles('tunes');
    header.textContent = "Last Week's Top Tunes in the United States";
  })

  infoModalIcon.addEventListener("click", (e) => {
    modal.classList.toggle("is-open");
  });

  modalScreen.addEventListener("click", (e) => {
    modal.classList.remove("is-open");
  })

  modalX.addEventListener("click", (e) => {
    modal.classList.remove("is-open")
  })
});

