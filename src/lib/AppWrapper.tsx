'use client'

import { LayoutProp } from '@/types/common'
import Header from '@/components/header'
import React from 'react'
import styles from '@/styles/common.module.css'
import ApolloWrapper from "@/lib/ApolloProvider";
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/redux/store'

const AppWrapper: React.FC<LayoutProp> = ({ children }) => {
    return (
        <div className={styles.appContainer}>
            <Header />
            <ApolloWrapper>
                <ReduxProvider store={store}>
                    {children}
                </ReduxProvider>
            </ApolloWrapper>
        </div>
    )
}

export default AppWrapper