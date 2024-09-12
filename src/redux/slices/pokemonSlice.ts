import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Pokemon } from "@/graphql/__generated__/graphql"

const pokemenObj: Record<string, any>[] = []

const initialState = {
    pokemons: pokemenObj
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons.push(action.payload)
        },
        resetPokemons: (state) => {
            state.pokemons = []
        }
    },
})

export const { setPokemons, resetPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer