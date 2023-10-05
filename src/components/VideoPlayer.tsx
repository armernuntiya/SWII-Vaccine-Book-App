'use client'

import { useRef, useEffect } from "react"

export default function VideoPlayer({vdosrc,isPlaying}: {vdosrc:string,isPlaying:boolean}){
    
    const vdoRef=useRef<HTMLVideoElement>(null)
    
    useEffect(()=>{
        if(isPlaying){
            vdoRef.current?.play();
        }else{
            vdoRef.current?.pause();
        }
    },[isPlaying])

    return(

        <video className="w-[40%]" src={vdosrc} ref={vdoRef} controls loop muted/>
    )
}