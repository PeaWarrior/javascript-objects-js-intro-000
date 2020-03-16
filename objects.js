var playlist = {
  petitBiscuit : "Sunset Lover",
  shakira : "Try Everything"
}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function removeFromPlayList(playlist, artist){
  delete playlist[artist]
  return playlist
}
