import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Pokemon } from "@/graphql/__generated__/graphql"
import { mergeArraysWithoutDuplicates } from "@/lib/utils"

const pokemenObj: Record<string, any>[] = []

const initialState = {
    pokemons: pokemenObj,
    selectedPokemons: pokemenObj
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setSelectedPokemons: (state, action) => {
            state.selectedPokemons.push(action.payload)
        },
        resetPokemons: (state) => {
            state.pokemons = []
        },
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },
        resetSelectedPokemons: (state) => {
            state.selectedPokemons = []
        },
    },
})

export const { setPokemons, resetPokemons, setSelectedPokemons, resetSelectedPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer