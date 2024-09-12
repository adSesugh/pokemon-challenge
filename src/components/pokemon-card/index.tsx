'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './card.module.css'
import Badge from './Badge'
import { useRouter } from 'next/navigation'
import { Pokemon } from '@/graphql/__generated__/graphql'
import { RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal } from "flowbite-react";

interface PokemonProps  {
    pokemon: any
}

const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false);
    const pokemons = useSelector((state: RootState) => state.pokemen).pokemons

    const gotoDetail = (name: string) => router.push(`/pokemon/${name}`) 

    const handleSelectedPoken = (pokemon: any) => {
        if(pokemons.length === 0) {
            dispatch({ type: 'pokemon/setPokemons', payload: pokemon })
        } else if (pokemons.length < 2) {
            dispatch({ type: 'pokemon/setPokemons', payload: pokemon })
            setOpenModal(!openModal)
        }
        return
    }

    const findPokemon = () => pokemons?.find((pok) => pok.id === pokemon.id)


    return (
        <button className={`${styles.card} ${findPokemon() ? 'border-2 border-blue-500' : '' }`} onClick={() => {
            handleSelectedPoken(pokemon)
        }}>
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
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Compare two Pokemon</Modal.Header>
                <Modal.Body>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Would you like to compare the selected Pokemon?
                    </p>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        router.push('/pokemon/comparison')
                        setOpenModal(false)
                    }}>Yes</Button>
                    <Button color="gray" onClick={() => {
                        dispatch({ type: 'pokemon/resetPokemons' })
                        setOpenModal(false)
                    }}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </button>
    )
}

export default PokemonCard