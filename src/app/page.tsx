'use client'

import SearchBar from "@/components/search-bar";
import { usePokemonsQuery } from "@/graphql/__generated__/graphql";
import { Fragment, useState } from "react";
import styles from '@/styles/common.module.css'
import PokemonCard from "@/components/pokemon-card";
import logo from '@/app/assets/logo.png'
import Image from "next/image";
import Loader from "@/components/loader";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')

    const { data, loading} = usePokemonsQuery({
        fetchPolicy: 'no-cache',
        variables: {
            first: 15
        }
    })  

    console.log(data)

    return (
        <div className={styles.homeContainer}>
            <div className={styles.centerLogo}>
                <Image 
                    src={logo}
                    width={400}
                    height={250}
                    alt='Main logo'
                    sizes='100vw'
                />
            </div>
            <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            {loading ? (
                <div className="px-32 py-8">
                    <Loader />
                </div>
            ): (
                <div className={styles.wrapper}>
                    {data?.pokemons?.map((pokemon, index) => (
                        <div key={index}>
                            <PokemonCard pokemon={pokemon} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home;