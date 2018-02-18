// Работа с сокетами
const io = require('../index').io;
const {getArtistAlbums, getTopTrecksArtist} = require('../API/spotify')


module.exports = function(socket) {
    // console.log('\x1bc'); //clears console
    console.log('Connected with Socket Id: ' + socket.id);

    getTopTrecksArtist('3SXDCIdqI1AR686ukKtKCq');

      //User disconnects
    socket.on('disconnect', () => {
    
      console.log('Disconnect:', socket.id);
    
  });
}