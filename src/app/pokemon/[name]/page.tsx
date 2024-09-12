'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ArrowRight, SpeakerHigh } from '@phosphor-icons/react'
import Badge from '@/components/pokemon-card/Badge'
import { useParams, useRouter } from 'next/navigation'
import { 
    Pokemon, 
    PokemonAttack, 
    usePokemonAttackLazyQuery, 
    usePokemonEvolutionsLazyQuery, 
    usePokemonLazyQuery 
} from '@/graphql/__generated__/graphql'
import styles from './page.module.css'

const PokemonDetail = () => {
    const {name } = useParams()
    const router = useRouter()
    const [pokemon, setPokemon] = useState<Pokemon | null>()
    const [evolutions, setEvolutions] = useState<any>([])
    const [attacks, setAttacks] = useState<PokemonAttack | null>()

    const [getPokemon, {}] = usePokemonLazyQuery()
    const [getPokemonEvolutions] = usePokemonEvolutionsLazyQuery()
    const [getAttacks] = usePokemonAttackLazyQuery()

    useEffect(() => {
        (async () => {
            const res = await getPokemon({
                variables: {
                    name: name as string
                }
            })
            setPokemon(res.data?.pokemon)
        })()
        getEvolutions()
        getPokemonAttacks()
    }, [name])

    const getEvolutions = async () => {
        const res = (await getPokemonEvolutions({
            variables: {
                name: name as string
            }
        })).data
        setEvolutions(res?.pokemon?.evolutions)
    }

    const getPokemonAttacks = async () => {
        const res  = (await getAttacks({
            variables: {
                name: name as string
            }
        })).data
        setAttacks(res?.pokemon?.attacks)
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    <div className={styles.imgContainer}>
                        <div>
                            <Image 
                                src={pokemon?.image as string}
                                alt={pokemon?.name as string}
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className={styles.detail}>
                        <div>
                            <div className={styles.pokemon_number}>
                                <h1>#{pokemon?.number}</h1>
                                <SpeakerHigh size={24} className='xs:block sm:hidden' />
                            </div>
                            <div className={styles.pokemon_name}>
                                <span>{pokemon?.name}</span>
                                <SpeakerHigh size={24} className='sm:block xs:hidden' />
                            </div>
                            <div className={styles.badge_section}>
                                {pokemon?.types?.map((type, index) => (
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
                                            <h1>{0}</h1>
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
            {/* Evolution section */}
            {evolutions?.length > 0 && (
                <div className={styles.evolution_container}>
                    <h1>Evolutions</h1>
                    <div>
                        {evolutions?.map((evolution: any, index: number) => (
                            <div className={styles.evolution_img}>
                                <button key={index} onClick={() => router.push(`/pokemon/${evolution.name}`)}>
                                    <Image 
                                        src={evolution.image as string}
                                        alt={evolution?.name as string}
                                        width={100}
                                        height={100}
                                        className={`${index === 0 ? 'sm:w-2/4' : index === 1 ? 'sm:w-5/6' : 'sm:w-5/12'} xs:w-2/5 h-auto`}
                                    />
                                </button>
                                <div className={`mr-10 -ml-0 `}>
                                    {index !== (evolutions.length - 1) && <ArrowRight size={32} className={`text-black font-bold`} />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default PokemonDetail