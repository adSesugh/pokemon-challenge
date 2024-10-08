import React from 'react'
import styles from './header.module.css'
import logo from '@/app/assets/logo.png'
import Image from 'next/image'
import { List } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header_img} onClick={() => router.replace('/')}>
                    <Image 
                        src={logo}
                        width={150}
                        height={80}
                        alt='Logo'
                        sizes='100vw'
                        className="sm:w-1/12 xs:w-1/4 h-auto"
                    />
                </div>
                <List size={24} color='#0c0c0c' />
            </div>
        </div>
    )
}

export default Header