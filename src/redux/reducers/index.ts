import { combineReducers } from "@reduxjs/toolkit";
import { pokemonReducer } from "../slices";

export default combineReducers({
    pokemen: pokemonReducer
})