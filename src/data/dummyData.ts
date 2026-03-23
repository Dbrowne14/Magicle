import dummyImg from "../assets/ltr-172-last-march-of-the-ents.jpg";

export type Card = {
  name: string;
  img: string;
  CMC: number;
  Print?: string;
  Rarity: "C" | "U" | "R" | "M";
  CardType: string;
  Pip: string;
  Year?: number;
  Colours?: number;
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
};

export const cardList = ["Last March of the Ents"];
