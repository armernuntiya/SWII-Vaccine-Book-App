import Image from "next/image";
import MenuItem from "./MenuItem";
import { Link } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <menu className="fixed top-0 left-0 h-14 w-full bg-emerald-50 z-30 " style={{borderBottom:"1px solid lightgrey"}}>
            <div className="flex h-full gap-x-8">
            {session? <Link href="/api/auth/signout">
                    <div className="flex items-center h-full px-8 font-medium text-lg font-mono">
                    Sign-Out of {session.user.name}</div></Link>
                : <Link href="/api/auth/signin">
                    <div className="flex items-center h-full px-8 font-medium text-lg font-mono">
                    Sign-In</div></Link>}
                <div className="mx-[auto]"></div>
                <MenuItem title="Booking" pageRef="./booking"/>
                <div className="h-full w-14 relative">
                    <Image src="/img/vaccine-6017110_1280.png" alt="Logo" fill={true} className="object-cover" priority/>
                </div>
            </div>
        </menu>
    );
}