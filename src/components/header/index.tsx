import React from 'react'
import styles from './header.module.css'
import logo from '@/app/assets/logo.png'
import Image from 'next/image'
import { List } from '@phosphor-icons/react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href={'/'} className={styles.header_img}>
                    <Image 
                        src={logo}
                        width={150}
                        height={80}
                        alt='Logo'
                        sizes='100vw'
                        className="sm:w-1/12 xs:w-1/4 h-auto"
                    />
                </Link>
                <List size={24} color='#0c0c0c' />
            </div>
        </div>
    )
}

export default Header