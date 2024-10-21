'use client'

import React, { ChangeEvent } from 'react'
import styles from './searchbar.module.css'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchProps, TextFieldType } from '@/types/common'

const SearchBar: React.FC<TextFieldType> = ({ value, setValue, handleOnChange, className, ...rest }) => {

    return (
        <div className={styles.container}>
            <div className={styles.searchWrapper}>
                <input 
                    name={rest.name}
                    value={value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    className={`${className} ${styles.inputField}`}
                    placeholder={rest.placeholder}
                    autoComplete='off'
                    cy-data="input"
                />
                <button className={styles.searchButton} onClick={handleOnChange} cy-data='search' id='search'>
                    <MagnifyingGlass size={24} />
                </button>
            </div>
        </div>
    )
}

export default SearchBar