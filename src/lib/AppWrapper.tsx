'use client'

import { LayoutProp } from '@/types/common'
import React, { useEffect } from 'react'
import ApolloWrapper from "@/lib/ApolloProvider";
import { Provider as ReduxProvider } from 'react-redux';
import store from '@/redux/store';

const AppWrapper: React.FC<LayoutProp> = ({ children }) => {
    return (
        <div className='select-none'>
            <ApolloWrapper>
                <ReduxProvider store={store}>
                    {children}
                </ReduxProvider>
            </ApolloWrapper>
        </div>
    )
}

export default AppWrapper