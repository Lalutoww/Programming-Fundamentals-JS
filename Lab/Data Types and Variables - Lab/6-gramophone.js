function gramophone(bandName, albumName, songName) {
  let songDuration = (albumName.length * bandName.length * songName.length) / 2;
  let plateRotation = songDuration / 2.5;
  console.log(`The plate was rotated ${Math.ceil(plateRotation)} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
