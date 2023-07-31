function songs(arr) {
   class Song {
      constructor(typeList, name, time) {
         this.typeList = typeList;
         this.name = name;
         this.time = time;
      }
   }

   let songs = [];
   let numOfSongs = arr.shift();
   let type = arr.pop();

   for (let i = 0; i < numOfSongs; i++) {
      let [command, name, time] = arr[i].split('_');
      songs.push(new Song(command, name, time));
   }

   if (type === 'all') {
      songs.forEach((song) => console.log(song.name));
   } else {
      let filtered = songs.filter((song) => song.typeList === type);
      filtered.forEach((song) => console.log(song.name));
   }
}
songs([
   3,
   'favourite_DownTown_3:14',
   'favourite_Kiss_4:16',
   'favourite_Smooth Criminal_4:01',
   'favourite',
]);
