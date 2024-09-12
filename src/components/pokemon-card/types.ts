export type BadgeType = {
    name: string
    bgColor: string
}

export type PokemonCardType = {
    id: string
    number: string
    name: string
    types: Array<string>
    image: string
}

export type PokemonType = {
    id: string
    number: string
    name: string
    weight: {
        minimum: string
        maximum: string
    },
    height: {
        minimum: string,
        maximum: string
    },
    classification: string
    types: Array<string>
    resistant: Array<string>
    weaknesses: Array<string>
    fleeRate: number
    maxCP: number
    maxHP: number
    image: string
}