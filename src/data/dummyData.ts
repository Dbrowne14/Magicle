import dummyImg from "../assets/ltr-172-last-march-of-the-ents.jpg";

export type data = {
  name: string;
  img: string;
  cmc: number;
  recentPrint: string;
  rarity: "C" | "U" | "R" | "M";
  cardType: string;
  pip: string;
  printYear: number;
  colorCount: number;
  price: number;
};

export const dummyData = {
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
};

export const cardsData = {
  "Last March of the Ents": {
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
    img: dummyImg,
    CMC: 5,
    RecentPrint: "LOTR",
    Rarity: "R",
    CardType: "creature",
    Pip: "Green",
    PrintYear: 2022,
    ColorCount: 2,
    Price: 15.0,
  },
    "Mast larch": {
    img: dummyImg,
    CMC: 5,
    RecentPrint: "LOTR",
    Rarity: "R",
    CardType: "creature",
    Pip: "Green",
    PrintYear: 2022,
    ColorCount: 2,
    Price: 15.0,}
};

export const cardList = ["Last March of the Ents"];
