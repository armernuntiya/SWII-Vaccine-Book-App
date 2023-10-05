'use client'

import { useEffect } from "react"

export function useWindowListener(event:string, listener:EventListener){
    
    useEffect(()=>{

        window.addEventListener(event, listener)

        return()=>{
            window.removeEventListener(event, listener)
        }

    }, [])
}