import { type Card as CardData } from '..'

export type Card = Omit<CardData, 'expansionId' | 'blacklisted'>
