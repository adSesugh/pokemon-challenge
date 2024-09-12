import { combineReducers } from "@reduxjs/toolkit";
import pokemonSlice from "../slices/pokemonSlice";

export default combineReducers({
    pokemen: pokemonSlice
})