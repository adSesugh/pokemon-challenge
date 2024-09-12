import React from 'react'
import Image from 'next/image'
import styles from './card.module.css'
import Badge from './Badge'

interface PokemonProps  {
    pokemon: any
}

const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.badgeWrapper}>
                    {pokemon.types.map((name: string, index: number) => (
                        <Badge key={index} name={name} />
                    ))}
                    {/* <div className='flex items-center px-4 py-2 bg-lime-600/70 text-black rounded-full'>
                        <span className='text-sm'>Grass</span>
                    </div> */}
                    {/* <div className='flex items-center px-4 py-2 bg-sky-700/80 text-black rounded-full'>
                        <span className='text-sm'>Poison</span>
                    </div> */}
                </div>
                <span className='font-semibold'>#{pokemon.number}</span>
            </div>
            <div className={styles.cardBody}>
                <div className={`${styles.pokemonContent} -pt-5`}>
                    <h1>{pokemon.name}</h1>
                    <p>A strange seed was planted on its back at birth, the plant sprouts and grow with this pokemon</p>
                    <button>
                        <span className='font-semibold text-pretty text-gray-600'>Know more</span>
                    </button>
                </div>
                <div className={styles.pokemonImage}>
                    <Image 
                        src={pokemon?.image}
                        alt={pokemon?.name}
                        width={350}
                        height={100}
                        className='w-full h-3/4'
                    />
                </div>
            </div>
        </div>
    )
}

export default PokemonCard