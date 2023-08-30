import Image from "next/image";
import MenuItem from "./MenuItem";

export default function TopMenu() {
    return (
        <menu className="fixed top-0 left-0 right-0 h-14 w-full bg-emerald-50 z-30 " style={{borderBottom:"1px solid lightgrey"}}>
            <div className="flex h-full justify-end gap-x-8">
                <MenuItem title="Booking" pageRef="./booking"/>
                <div className="h-[100%] w-14 relative">
                    <Image src="/img/vaccine-6017110_1280.png" alt="Logo" fill={true} className="object-cover" priority/>
                </div>
            </div>
        </menu>
    );
}