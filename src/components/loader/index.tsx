import React from 'react'
import styles from './loader.module.css'
import { ArrowDown } from '@phosphor-icons/react'

const Loader = () => {
    return (
        <div className={styles.card}>
            <div>
                <div className={styles.arrow_down}>
                    <ArrowDown  size={24} className='text-gray-700' />
                </div>
                <h1 className='xs:hidden sm:block'>Please wait...</h1>
            </div>
        </div>
    )
}

export default Loader