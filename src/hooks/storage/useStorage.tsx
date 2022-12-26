import React from 'react'

interface Props {}

interface Hook {
    saveItem:(key:string, value:any) => void
    getItem:(key:string) => any | null
    deleteItem: (key:string) => void
}

const useStorage = (props?: Props):Hook => {

    const saveItem = React.useCallback((key:string, value:any) => {
        localStorage.setItem(key, JSON.stringify(value))
    },[])

    const getItem = React.useCallback((key:string) =>{
        const item = localStorage.getItem(key)
        if(item !== null){
            return JSON.parse(item)
        }
        return null
    },[])

    const deleteItem = React.useCallback((key:string) => {
        localStorage.removeItem(key)
    },[])

    return {
        deleteItem,getItem,saveItem
    }
}

export default useStorage
