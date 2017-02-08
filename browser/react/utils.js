export const convertSong = (song) => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

export const convertAlbum = (album) => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
};

// export const convertArtist = (artist) => {

//   artist.albums = artist.getAlbums();  
//   console.log(artist.albums); 
//   // artist.songs = artist.albums.map(function(album){
//   //     var songs = album.songs; 
//   //     songs.filter(function(song){
//   //       return song.artists 
//   //     })
//   // }
//   // artist.imageUrl = `/api/albums/${album.id}/image`;
//   // album.songs = album.songs.map(convertSong);
//   // return album;
// };



export const convertAlbums = (albums) =>
  albums.map(album => convertAlbum(album));

const mod = (num, m) => ((num % m) + m) % m;

export const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id);
  idx = mod(idx + interval, currentSongList.length);
  const next = currentSongList[idx];
  return [next, currentSongList];
};
