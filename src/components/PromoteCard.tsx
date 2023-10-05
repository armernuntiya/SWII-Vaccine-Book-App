'use client'

import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"

export default function PromoteCard(){
    
    const [playing, setPlaying]=useState(true)
    
    useWindowListener('contextmenu',((e)=>{
        e.preventDefault()
    }))

    return(
        <div className="w-[80%] shadow-xl rounded-lg mx-[10%] my-10 p-5 bg-sky-200
            flex flex-row">
            <VideoPlayer vdosrc="/vdo/getvaccine.mp4" isPlaying={playing}/>
            <div className="m-5 relative">
                <div className="text-2xl font-semibold font-sans">
                    Get your vaccine today.
                </div>
                <button className="block rounded-full bg-rose-600 text-xl
                                    hover:bg-pink-400 px-12 py-2 
                                    shadow-sm text-white absolute bottom-0" 
                        onClick={()=>{setPlaying(!playing)}}>
                    {playing?'Play':'Pause'}
                </button>
            </div>
        </div>
    )
}