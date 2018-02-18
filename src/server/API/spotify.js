var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: '',
    clientSecret: ''
});

exports.initSpotifyApi = async function() {
    await spotifyApi.clientCredentialsGrant().then(
        function(data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);
            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body['access_token']);
        },
        function(err) {
            console.log('Something went wrong when retrieving an access token', err.message);
        }
    );
};

exports.getArtistAlbums = async function() {
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
        function(data) {
            console.log('Artist albums', data.body);
        },
        function(err) {
            console.error(err);
        }
    );
};

exports.getTopTrecksArtist = async function(id) {
    await spotifyApi
        .getArtistTopTracks(id, 'US')
        .then(function(data) {
            console.log('The most popular tracks for Bi-2 is..');
            console.log('Drum roll..');
            console.log('...');

            data.body.tracks.forEach(function(track, index) {
                console.log(
                    index + 1 + '. ' + track.name + ' (popularity is ' + track.popularity + ')'
                );
            });
        })
        .catch(function(err) {
            console.log('Unfortunately, something has gone wrong.', err.message);
        });
};
