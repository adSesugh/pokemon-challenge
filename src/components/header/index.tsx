import React from 'react'
import styles from './header.module.css'
import logo from '@/app/assets/logo.png'
import Image from 'next/image'
import { List } from '@phosphor-icons/react'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image 
                    src={logo}
                    width={150}
                    height={80}
                    alt='Logo'
                    sizes='100vw'
                    className="sm:w-1/12 xs:w-1/4 h-auto"
                />
                <List size={24} color='#0c0c0c' />
            </div>
            <div className={styles.centerLogo}>
                <Image 
                    src={logo}
                    width={400}
                    height={250}
                    alt='Main logo'
                    sizes='100vw'
                />
            </div>
        </div>
    )
}

export default Header