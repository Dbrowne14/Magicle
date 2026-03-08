export type data ={
    cmc: number;
    recentPrint: string,
    rarity: "C" | "U" | "R" | "M",
    cardType: string,
    pip: string,
    printYear: number,
    colorCount: number,
    price: number
}

export const dummyData = {
    CMC: 7,
    Print: "LOTR",
    Rarity: "M",
    CardType: "sorcery",
    Pip: "Green",
    Year: 2023,
    Colours: 1,
    Price: 20.00,
    
}