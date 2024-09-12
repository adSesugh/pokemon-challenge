import { ReactNode } from "react"

export type LayoutProp = {
    children: ReactNode
}

export type SearchProps = {
    searchQuery: string
    setSearchQuery: (value: string) => void
}

export type TextFieldType = {
    value: string
    setValue: (val: string) => void
    handleOnChange: () => void
    className?: string
    name: string,
    placeholder?: string
}