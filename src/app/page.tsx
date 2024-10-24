'use client'

import SearchBar from "@/components/search-bar";
import { usePokemonLazyQuery, usePokemonsLazyQuery } from "@/graphql/__generated__/graphql";
import { useEffect, useState } from "react";
import styles from '@/styles/common.module.css'
import PokemonCard from "@/components/pokemon-card";
import logo from '@/app/assets/logo.png'
import Image from "next/image";
import Loader from "@/components/loader";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/redux/store";
import { resetSelectedPokemons, setPokemons, setSelectedPokemons } from "@/redux/slices/pokemonSlice";
import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const totalPageSize = 15;
    const [limit, setLimit] = useState<number>(totalPageSize)
    const [value, setValue] = useState<string>('')
    const [openModal, setOpenModal] = useState(false);
    const [loadMore, setLoadMore] = useState<boolean>(false)
    const pokemons = useSelector((state: RootState) => state.pokemen).pokemons
    const selectedPokemons = useSelector((state: RootState) => state.pokemen).selectedPokemons

    const [getPokemons, {loading, fetchMore }] = usePokemonsLazyQuery({fetchPolicy: 'no-cache'})
    const [searchPokemons, {loading: searchPokemonLoading }] = usePokemonLazyQuery({fetchPolicy: 'no-cache'})

    useEffect(() => {
        dispatch(resetSelectedPokemons());
    }, [])

    useEffect(() => {
        getAllPokemon()
    }, [])


    const getAllPokemon = async () => {
        const res = (await getPokemons({
            variables: {
                first: limit
            }
        })).data
        setLimit(prev => prev + totalPageSize)
        dispatch(setPokemons(res?.pokemons))
    }

    const fetchMorePokemons = async () => {
        setLoadMore(!loadMore)
        const morePokemons = (await getPokemons({
            variables: {
                first: limit
            }
        })).data

        setLimit(prev => prev + totalPageSize)
        setLoadMore(false)
        dispatch(setPokemons(morePokemons?.pokemons))
    }

    const handleSearch = async () => {
        dispatch({type: "pokemon/resetPokemons"})
        const res = (await searchPokemons({
            variables: {
                name: value
            }
        })).data

        if(res?.pokemon){
            setValue('')
            return dispatch(setPokemons([res?.pokemon]))
        }
        setValue('')
    }

    const handleSelectedPoken = (pokemon: any) => {
        if(selectedPokemons.length === 0) {
            dispatch(setSelectedPokemons(pokemon))
        } else if (selectedPokemons.length < 2) {
            dispatch(setSelectedPokemons(pokemon))
            setOpenModal(!openModal)
        }
        return
    }

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
                value={value}
                setValue={setValue}
                placeholder="Search eg, Ditto or Pikachu"
                handleOnChange={handleSearch}
                name="query"
            />
            {(loading || searchPokemonLoading) && !loadMore ? (
                <div className={styles.loader}>
                    <Loader />
                </div>
            ): !pokemons?.length ? (
                <div className={styles.emptyState}>
                    <span>No record found</span>
                </div>
            ) : (
                <div className={styles.wrapper}>
                    {pokemons?.map((pokemon, index: number) => (
                        <div key={index}>
                            <PokemonCard 
                                pokemon={pokemon} 
                                handleSelectedPoken={handleSelectedPoken}
                                router={router}
                            />
                        </div>
                    ))}
                </div>
            )}
            {pokemons?.length > 0 && (
                <div className="">
                    <Button 
                        size="md" 
                        isProcessing={loadMore} 
                        outline 
                        className="border-blue-600/40"
                        pill
                        onClick={fetchMorePokemons}
                    >
                        {loadMore ? 'Loading' : 'Load more'}
                    </Button>
                </div>
            )}
            <Modal dismissible={false} size={'sm'} show={openModal} onClose={() => {
                setOpenModal(false)
                dispatch({ type: 'pokemon/resetSelectedPokemons' })
            }}>
                <Modal.Header>Compare two Pokemon</Modal.Header>
                <Modal.Body>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Would you like to compare the selected Pokemon?
                    </p>
                </div>
                <div className="flex pt-8 float-end gap-3">
                    <Button onClick={() => {
                        setOpenModal(false)
                        return router.push('/pokemon/comparison')
                    }}>Yes</Button>
                    <Button color="gray" onClick={() => {
                        setOpenModal(false)
                        return dispatch({ type: 'pokemon/resetSelectedPokemons' })
                    }}>
                        Decline
                    </Button>
                </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Home;