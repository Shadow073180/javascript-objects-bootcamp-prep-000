var playlist = {artist_name: "song title"}

function updatePlaylist(playlist, artistName, songTitle){
<<<<<<< HEAD
  return Object.assign(playlist, {[artistName]: songTitle})
  
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
  
=======
  playlist.artistName = 'songTitle'
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
>>>>>>> ead72d531c153380489c081d4a6d7707924f931a
}