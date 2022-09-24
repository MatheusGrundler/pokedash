// export type Ability = {
//   name: string
//   text: string
//   type: string
// }
export type Attack = {
  cost: string[]
  name: string
  text: string
  damage: string
  convertedEnergyCost: string | number
}

export type Resistance = {
  type: string
  value: string
}

export type Weakness = {
  type: string
  value: string
}

// export interface SetImage {
//   symbol: string
//   logo: string
// }

export interface CardImage {
  small: string
  large: string
}

// export enum ELegality {
//   LEGAL = 'Legal',
//   BANNED = 'Banned'
// }
// export interface Legality {
//   expanded?: ELegality | undefined
//   standard?: ELegality | undefined
//   unlimited?: ELegality | undefined
// }

// export type Set = {
//   id: string
//   images: SetImage
//   legalities: Legality
//   name: string
//   printedTotal: number
//   ptcgoCode: string
//   releaseDate: string
//   series: string
//   total: number
//   updatedAt: string
// }

// export type AncientTrait = {
//   name: string
//   text: string
// }

// export type Price = {
//   low: number | null
//   mid: number | null
//   high: number | null
//   market: number | null
//   directLow: number | null
// }

// export type TCGPlayer = {
//   url: string
//   updatedAt: string
//   prices: {
//     normal: Price | undefined
//     holofoil: Price | undefined
//     reverseHolofoil: Price | undefined
//     '1stEditionNormal': Price | undefined
//     '1stEditionHolofoil': Price | undefined
//   }
// }

// export type Query = { name: string; value: string | number }

// export type Cardmarket = {
//   url: string
//   updatedAt: string
//   prices: {
//     averageSellPrice: number | null
//     lowPrice: number | null
//     trendPrice: number | null
//     germanProLow: number | null
//     suggestedPrice: number | null
//     reverseHoloSell: number | null
//     reverseHoloLow: number | null
//     reverseHoloTrend: number | null
//     lowPriceExPlus: number | null
//     avg1: number | null
//     avg7: number | null
//     avg30: number | null
//     reverseHoloAvg1: number | null
//     reverseHoloAvg7: number | null
//     reverseHoloAvg30: number | null
//   }
// }

export type Card = {
  id: string
  name: string
  images: CardImage
  subtypes?: string[]
  resistances?: Resistance[]
  weaknesses?: Weakness[]
  attacks?: Attack[]
  supertype?: string
}
