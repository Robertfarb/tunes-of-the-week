const LastFM = require('last-fm');

const lastFmCreds = new LastFM('40df4b439a223e6f5122f7cb61037b4f',
  { userAgent: 'Tunesoftheweek/1.0.0 (http://tunesoftheweek.com)' })

let topArtists = [];

export const lastFmCall = new Promise((resolve, reject) => {
  lastFmCreds.geoTopArtists({ country: 'United States' }, (err, data) => {
    let apiResp;
    err ? console.log(err) : apiResp = Object.assign({}, data)

    apiResp.artist.forEach(artist => {
      topArtists.push(artist);
    });
    
    resolve(topArtists);
  })
})
