const movies = [
    {
      "_id" : "d192ed99-b7ae-4689-82fa-d41e9b957fc5", 
      "titre" : "13: Game of Death",
      "realisateur" : "Chookiat Sakveerakul",
      "description" : "After losing his job, his car and his money, Phuchit, Krissada Sukosol, races against time to complete 13 tasks ordered by an anonymous caller who promised 100,000,000 Thai Baht upon completion.",
      "dureeTotale" : 114,
      "imageUrl" : "13_game_of_death.jpg"
    },
    {
        "_id" : "915d3693-f57c-4770-981a-b71990bdd707",
      "titre" : "Alien",
      "realisateur" : "Ridley Scott",
      "description" : "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      "dureeTotale" : 117,
      "imageUrl" : "alien.jpg"
    },
    {
        "_id" : "336d87a7-4765-449e-ac18-116412ef9e43",
      "titre" : "Magnolia",
      "realisateur" : "Paul Thomas Anderson",
      "description" : "An epic mosaic of interrelated characters in search of love, forgiveness and meaning in the San Fernando Valley.",
      "dureeTotale" : 188,
      "imageUrl" : "magnolia.jpg"
    },
    {
        "_id" : "b05eb63b-8e5e-4b6e-a600-c19f2cbb44f7",
      "titre" : "Donnie Darko",
      "realisateur" : "Richard Kelly",
      "description" : "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
      "dureeTotale" : 113,
      "imageUrl" : "donnie_darko.jpg"
    },
    {
        "_id" : "b637be35-f49e-46ed-9d7c-20c84504f37d",
      "titre" : "Dobermann",
      "realisateur" : "Jan Kounen",
      "description" : "Dobermann is the world's most ruthless bank robber and with his gang rob bank after bank, now in Paris. What can the police do but to let the mad, morally bankrupt police commissioner loose on him?",
      "dureeTotale" : 94,
      "imageUrl" : "dobermann.jpg"
    },
    {
        "_id" : "dddcbf1d-7485-46f1-94ca-2da89794d7e8",
      "titre" : "Starship Troopers",
      "realisateur" : "Paul Verhoeven",
      "description" : "Humans in a fascist, militaristic future wage war with giant alien bugs.",
      "dureeTotale" : 129,
      "imageUrl" : "starship_troopers.jpg",
    //   "bgUrl" : "starship_troopers.jpg"
    }
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}




