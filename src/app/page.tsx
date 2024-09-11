'use client'

import Header from "@/components/header";
import SearchBar from "@/components/search-bar";
import { usePokemonQuery, usePokemonsQuery } from "@/graphql/__generated__/graphql";
import { useState } from "react";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const { data} = usePokemonQuery({
        fetchPolicy: 'no-cache',
        variables: {
            id: "001"
        }
    })

    const { data: pokemons} = usePokemonsQuery({
        fetchPolicy: 'no-cache',
        variables: {
            first: 5
        }
    })

    console.log(searchQuery)
    return (
        <div>
            <Header />
            <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
        </div>
    )
}

export default Home;