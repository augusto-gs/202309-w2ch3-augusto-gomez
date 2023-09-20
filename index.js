const songs = [
  {
    id: 1,
    title: "Rush",
    artist: "Troye Sivan",
    genre: "Pop",
    duration: 400,
    year: 2023,
    hit: true,
  },
  {
    id: 2,
    title: "Flowers",
    artist: "Miley Cyrus",
    genre: "Pop",
    duration: 200,
    year: 2023,
    hit: true,
  },
  {
    id: 3,
    title: "On My Love",
    artist: "Zara Larsson",
    genre: "Electronic",
    duration: 300,
    year: 2022,
    hit: false,
  },
  {
    id: 4,
    title: "Jolene",
    artist: "Dolly Parton",
    genre: "Country",
    duration: 180,
    year: 1980,
    hit: false,
  },
  {
    id: 5,
    title: "Creep",
    artist: "Radiohead",
    genre: "Rock",
    duration: 180,
    year: 1993,
    hit: true,
  },
];

const addToPlaylist = (song) => songs.push(song);

const removeFromPlaylist = (title) => {
  const removedSong = songs.find(
    (song) => song.title.toLowerCase() === title.toLowerCase()
  );

  const positionOfRemovedSong = songs.indexOf(removedSong);

  songs.splice(positionOfRemovedSong, 1);
};

const getSongByTitle = (title) => songs.find((song) => song.title === title);

const getSongsByGenre = (songs, genre) =>
  songs.filter((song) => song.genre.toLowerCase() === genre.toLowerCase());

const getTotalOfSongsThatWereHits = (songs) => {
  const hitSong = songs.filter((song) => song.hit);
  return hitSong.length;
};

const getSongListByYear = (songs) =>
  songs.toSorted((number1, number2) => number1.year - number2.year);

const getSongsByTitle = (songs) => songs.map((song) => song.title);
