'use client'

import Header from "@/components/header";
import SearchBar from "@/components/search-bar";
import { usePokemonQuery, usePokemonsQuery } from "@/graphql/__generated__/graphql";
import { useState } from "react";
import styles from '@/styles/common.module.css'
import PokemonCard from "@/components/pokemon-card";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')

    const { data} = usePokemonsQuery({
        fetchPolicy: 'no-cache',
        variables: {
            first: 15
        }
    })

    console.log(data?.pokemons)
    return (
        <div className={styles.appContainer}>
            <Header />
            <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <div className="grid sm:grid-cols-3 xs:grid-cols-1 py-6 gap-4 sm:px-32 xs:px-0">
                {data?.pokemons?.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>
        </div>
    )
}

export default Home;