const LastFM = require('last-fm');
const lastFmCreds = new LastFM('6311ac59f1d672532ee24a972e653aab',
  { userAgent: 'Tunesoftheweek/1.0.0 (http://tunesoftheweek.com)' })

let countryInput = "United States";
let topArtists = [];
let countryForm;


export const lastFmArtistCall = new Promise((resolve, reject) => {
  lastFmCreds.geoTopArtists({ country: countryInput }, (err, data) => {
    let apiResp;
    err ? console.log(err) : apiResp = Object.assign({}, data)
    
    apiResp.artist.forEach(artist => {
      topArtists.push(artist);
    });
    
    resolve(topArtists);
  }) 
});

let topTracks = [];
export const lastFmTunesCall = new Promise((resolve, reject) => {
  lastFmCreds.geoTopTracks({ country: countryInput }, (err, data) => {
    let apiResp;
    err ? console.log(err) : apiResp = Object.assign({}, data)

    apiResp.track.forEach(track => {
      topTracks.push(track);
    });

    resolve(topTracks);
  })
});
