export interface ReturnStructure {
  id: number;
  scryfall_id: string;
  name: string;
  cmc: number;
  type: string[];
  islegendary: boolean;
  img: string;
  year: number;
  rarity: string;
  set_code: string;
  set_name: string;
  price: number;
  pips: string[];
  colors: number;
  edhrec_rank: number;
}

export interface TodaysWord {
  name: string;
  img: string;
}

export type Value = string | number | boolean | string[];
export type CardKey = keyof ReturnStructure;

export type Input = {
  cardKey: CardKey;
  value: Value;
  label: string;
  answer: ReturnStructure;
  isLatest: boolean;
};
