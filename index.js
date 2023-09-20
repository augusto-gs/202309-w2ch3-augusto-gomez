const songs = [
  {
    title: "Rush",
    artist: "Troye Sivan",
    genre: "Pop",
    year: 2023,
    hit: true,
  },
  {
    title: "Flowers",
    artist: "Miley Cyrus",
    genre: "Pop",
    year: 2023,
    hit: true,
  },
  {
    title: "On My Love",
    artist: "Zara Larsson",
    genre: "Electronic",
    year: 2022,
    hit: false,
  },
  {
    title: "Jolene",
    artist: "Dolly Parton",
    genre: "Country",
    year: 1980,
    hit: false,
  },
  {
    title: "Creep",
    artist: "Radiohead",
    genre: "Rock",
    year: 1993,
    hit: true,
  },
];

const addToPlaylist = (song) => songs.push(song);
