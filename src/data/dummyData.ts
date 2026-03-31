import dummyImg from "../assets/ltr-172-last-march-of-the-ents.jpg";

export type Card = {
  name: string;
  img: string;
  CMC: number;
  Print: string;
  Rarity: "C" | "U" | "R" | "M";
  CardType: string;
  Pip: string;
  Year: number;
  Colours: number;
  Price: number;
};

export type CardData = Record<string, Card>;



export const cardsData: CardData = {
  "Last March of the Ents": {
    name: "Last March of the Ents",
    img: dummyImg,
    CMC: 7,
    Print: "LOTR",
    Rarity: "M",
    CardType: "sorcery",
    Pip: "Green",
    Year: 2023,
    Colours: 1,
    Price: 20.0,
  },
  "Ents March Again": {
    name: "Ents March Again",
    img: dummyImg,
    CMC: 5,
    Print: "LOTR",
    Rarity: "R",
    CardType: "creature",
    Pip: "Green",
    Year: 2022,
    Colours: 2,
    Price: 15.0,
  },
  "Mast larch": {
    name: "Mast larch",
    img: dummyImg,
    CMC: 5,
    Print: "LOTR",
    Rarity: "R",
    CardType: "creature",
    Pip: "Green",
    Year: 2022,
    Colours: 2,
    Price: 15.0,
  },
  "Treebeard Awakens": {
  name: "Treebeard Awakens",
  img: dummyImg,
  CMC: 6,
  Print: "LOTR",
  Rarity: "R",
  CardType: "creature",
  Pip: "Green",
  Year: 2023,
  Colours: 1,
  Price: 18.5,
},

"Fangorn Patrol": {
  name: "Fangorn Patrol",
  img: dummyImg,
  CMC: 4,
  Print: "LOTR",
  Rarity: "U",
  CardType: "creature",
  Pip: "Green",
  Year: 2021,
  Colours: 2,
  Price: 6.0,
},

"Roots of Power": {
  name: "Roots of Power",
  img: dummyImg,
  CMC: 3,
  Print: "LOTR",
  Rarity: "C",
  CardType: "enchantment",
  Pip: "Green",
  Year: 2020,
  Colours: 1,
  Price: 2.5,
},

"Entwood Guardian": {
  name: "Entwood Guardian",
  img: dummyImg,
  CMC: 8,
  Print: "LOTR",
  Rarity: "M",
  CardType: "creature",
  Pip: "Green",
  Year: 2024,
  Colours: 2,
  Price: 25.0,
},

"Whispering Canopy": {
  name: "Whispering Canopy",
  img: dummyImg,
  CMC: 2,
  Print: "LOTR",
  Rarity: "C",
  CardType: "enchantment",
  Pip: "Green",
  Year: 2019,
  Colours: 1,
  Price: 1.5,
},

"Overgrowth Surge": {
  name: "Overgrowth Surge",
  img: dummyImg,
  CMC: 5,
  Print: "LOTR",
  Rarity: "U",
  CardType: "instant",
  Pip: "Green",
  Year: 2022,
  Colours: 1,
  Price: 4.0,
},

"Barkskin Colossus": {
  name: "Barkskin Colossus",
  img: dummyImg,
  CMC: 7,
  Print: "LOTR",
  Rarity: "R",
  CardType: "creature",
  Pip: "Green",
  Year: 2023,
  Colours: 2,
  Price: 16.0,
},

"Verdant Echoes": {
  name: "Verdant Echoes",
  img: dummyImg,
  CMC: 4,
  Print: "LOTR",
  Rarity: "U",
  CardType: "sorcery",
  Pip: "Green",
  Year: 2021,
  Colours: 1,
  Price: 5.5,
},

"Shiny Impetus": {
  name: "Shiny Impetus",
  img: dummyImg,
  CMC: 4,
  Print: "LOTR",
  Rarity: "U",
  CardType: "sorcery",
  Pip: "Green",
  Year: 2021,
  Colours: 1,
  Price: 5.5,
}
};

export const todaysName = Object.keys(cardsData)[0];
export const todaysAnswer = cardsData[todaysName];

export const cardList = ["Last March of the Ents"];
