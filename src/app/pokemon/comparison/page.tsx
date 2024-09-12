'use client'

import React, { useEffect } from 'react'
import styles from './comparison.module.css'
import Image from 'next/image'
import pokemon from '@/app/assets/pokemon.jpeg'
import Badge from '@/components/pokemon-card/Badge'
import circle from '@/app/assets/circle.png'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'

const PokemonComparison = () => {
    const router = useRouter()
    const pokemons = useSelector((state: RootState) => state.pokemen).pokemons

    useEffect(() => {
        if(pokemons.length === 0) {
            router.push('/')
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.circle}>
                <Image
                    src={circle}
                    alt='Pokemon Circle'
                    width={200}
                    height={200}
                    sizes='100vw'
                    className='sm:w-1/12 md:w-1/6 xs:w-2/6 lg:w-1/12'
                />
            </div>
            <div className={styles.wrapper}>
                {pokemons.map((pokemon, index) => (
                    <div className={styles.card}>
                        <div className={styles.card_header}>
                            <Image 
                                src={pokemon.image}
                                width={150}
                                height={150}
                                alt={pokemon?.name as string}
                            />
                        </div>
                        <div className={styles.card_body}>
                            <div className={styles.detail}>
                                <div>
                                    <div className={styles.pokemon_number}>
                                        <h1>#{pokemon.number}</h1>
                                    </div>
                                    <div className={styles.pokemon_name}>
                                        <span>{pokemon.name}</span>
                                    </div>
                                    <div className={styles.badge_section}>
                                        {pokemon?.types?.map((type: any, index: number) => (
                                            <Badge key={index} name={type as string} bgColor='bg-gray-400/10' />
                                        ))}
                                    </div>
                                    <p>A strange seed was planted on its back at birth, the plant sprouts and grow with this pokemon.</p>
                                    <div className={styles.dimension}>
                                        <div className={styles.small_card}>
                                            <div>
                                                <span className='font-semibold'>Height</span>
                                            </div>
                                            <h1>{pokemon?.height?.maximum}</h1>
                                        </div>
                                        <div className={styles.small_card}>
                                            <div>
                                                <span className='font-semibold'>Weight</span>
                                            </div>
                                            <h1>{pokemon?.weight?.maximum}</h1>
                                        </div>
                                    </div>
                                    {/* Stats section */}
                                    <div className='pb-8'> 
                                        <h1 className={styles.stats}>Stats</h1>
                                        <div className='space-y-3'>
                                            <div className={styles.stats_row}>
                                                <div className={styles.small_card_red}>
                                                    <div>
                                                        <span className='font-semibold'>HP</span>
                                                    </div>
                                                    <h1>{pokemon?.maxHP}</h1>
                                                </div>
                                                <div className={styles.small_card_orange}>
                                                    <div>
                                                        <span className='font-semibold'>ATK</span>
                                                    </div>
                                                    <h1>{'0'}</h1>
                                                </div>
                                            </div>
                                            <div className={styles.stats_row}>
                                                <div className={styles.small_card_yellow}>
                                                    <div>
                                                        <span className='font-semibold'>DEF</span>
                                                    </div>
                                                    <h1>47</h1>
                                                </div>
                                                <div className={styles.small_card_sky}>
                                                    <div>
                                                        <span className='font-semibold'>SpA</span>
                                                    </div>
                                                    <h1>47</h1>
                                                </div>
                                            </div>
                                            <div className={styles.stats_row}>
                                                <div className={styles.small_card_green}>
                                                    <div>
                                                        <span className='font-semibold'>SpD</span>
                                                    </div>
                                                    <h1>47</h1>
                                                </div>
                                                <div className={styles.small_card_light_red}>
                                                    <div>
                                                        <span className='font-semibold'>SpD</span>
                                                    </div>
                                                    <h1>47</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Pokemon Ability */}
                                    <div>
                                        <h1 className={styles.abilities}>Abilities</h1>
                                        <div className={styles.dimension}>
                                            <div className={styles.small_card_abilities}>
                                                <span className='font-semibold'>Overgrow</span>
                                            </div>
                                            <div className={styles.small_card_abilities}>
                                                <span className='font-semibold'>Chlorophyll</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PokemonComparison