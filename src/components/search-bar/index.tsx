'use client'

import React, { ChangeEvent } from 'react'
import styles from './searchbar.module.css'
import { Field, Form, Formik } from 'formik'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchProps } from '@/types/common'

const SearchBar: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className={styles.container}>
            <Formik
                initialValues={{query: ''}}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({values, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className={styles.form} autoComplete='off'>
                        <div className={styles.searchWrapper}>
                            <Field 
                                name='query' 
                                className={styles.inputField}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    handleChange(e)
                                    setSearchQuery(e.target.value)
                                }}
                                placeholder='Search eg, Ditto or Pikachu'
                            />
                            <button className={styles.searchButton}>
                                <MagnifyingGlass size={24} />
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SearchBar