import React from 'react'
import Image from 'next/image'
import styles from './card.module.css'
import Badge from './Badge'
import { useRouter } from 'next/navigation'

interface PokemonProps  {
    pokemon: any
}

const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
    const router = useRouter()

    const gotoDetail = (name: string) => router.push(`/pokemon/${name}`) 

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.badgeWrapper}>
                    {pokemon.types.map((name: string, index: number) => (
                        <Badge key={index} name={name} bgColor='bg-lime-600/70' />
                    ))}
                </div>
                <span className='font-semibold'>#{pokemon.number}</span>
            </div>
            <div className={styles.cardBody}>
                <div className={`${styles.pokemonContent} -pt-5`}>
                    <h1>{pokemon.name}</h1>
                    <p>A strange seed was planted on its back at birth, the plant sprouts and grow with this pokemon.</p>
                    <button onClick={() => gotoDetail(pokemon.name)}>
                        <span className={styles.more}>Know more</span>
                    </button>
                </div>
                <div className={styles.pokemonImage}>
                    <Image
                        src={pokemon?.image}
                        alt={pokemon?.name || 'Pokemon image'}
                        priority
                        width={350}
                        height={100}
                        loading={'eager'}
                        className='w-full h-3/4'
                    />
                </div>
            </div>
        </div>
    )
}

export default PokemonCard