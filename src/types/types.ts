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
  icon_svg_uri: string;
  oracle_text:string
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
  isLatest: boolean;
};
