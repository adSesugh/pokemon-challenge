import { ReactNode } from "react"

export type LayoutProp = {
    children: ReactNode
}

export type SearchProps = {
    searchQuery: string
    setSearchQuery: (value: string) => void
}