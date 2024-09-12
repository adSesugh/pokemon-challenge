'use client'

import { LayoutProp } from '@/types/common'
import Header from '@/components/header'
import React from 'react'
import styles from '@/styles/common.module.css'

const AppWrapper: React.FC<LayoutProp> = ({ children }) => {
    return (
        <div className={styles.appContainer}>
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default AppWrapper