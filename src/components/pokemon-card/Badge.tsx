import React from 'react'
import { BadgeType } from './types'
import styles from './card.module.css'

const Badge: React.FC<BadgeType> = ({ name, bgColor = '' }) => {
    return (
        <div className={`${styles.badge} ${bgColor}`}>
            <span>{name}</span>
        </div>
    )
}

export default Badge