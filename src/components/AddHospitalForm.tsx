import { dbConnect } from "@/db/dbconnect"
import Hospital from "@/db/models/Hospital"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function AddHospitalForm(){

    const addHospital = async(addHospitalForm:FormData)=>{
        "use server"
        const name = addHospitalForm.get("name")
        const address = addHospitalForm.get("address")
        const district = addHospitalForm.get("district")
        const province = addHospitalForm.get("province")
        const postalcode = addHospitalForm.get("postalcode")
        const tel = addHospitalForm.get("tel")
        const picture = addHospitalForm.get("picture")
        try {  
            await dbConnect()
            const hospital = await Hospital.create({
                "name": name,
                "address": address,
                "district": district,
                "province": province,
                "postalcode": postalcode,
                "tel": tel,
                "picture": picture
            })
        }
        catch(error){
            console.log(error)
        }

        revalidateTag("hospitals")
        redirect("/hospital")
    }

    const session = await getServerSession(authOptions)

    if(!session||!session.user.token) return null

    const profile = await getUserProfile(session.user.token)

    return(
        <>
        {(profile.data.role=="admin")?<form className="w-[100%] flex flex-col mt-16" action={addHospital}>
            <div className="text-2xl text-green-600 font-semibold">Add Hospital</div>
                <div className="flex items-center w-1/2 my-2 mx-auto">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="name">
                        Name
                    </label>
                    <input type="text" required id="name" name="name" placeholder="Hospital Name"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2
                    text-gray-700 focus:outline-none focus:border-blue-400"/>
                </div>
                <div className="flex items-center w-1/2 my-2 mx-auto">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="address">
                        Address
                    </label>
                    <input type="text" required id="address" name="address" placeholder="Hospital Address"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2
                    text-gray-700 focus:outline-none focus:border-blue-400"/>
                </div>
                
                <div className="flex items-center w-1/2 my-2 mx-auto">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="district">
                        District
                    </label>
                    <input type="text" required id="district" name="district" placeholder="Hospital District"
                    className="bg-white border-2 border-gray-200 rounded w-auto p-2
                    text-gray-700 focus:outline-none focus:border-blue-400"/>
                    <label className="w-auto block text-gray-700 pr-4 ml-5" htmlFor="province">
                        Province
                    </label>
                    <input type="text" required id="province" name="province" placeholder="Hospital Province"
                    className="bg-white border-2 border-gray-200 rounded w-auto p-2
                    text-gray-700 focus:outline-none focus:border-blue-400"/>
                </div>
                <div className="flex items-center w-1/2 my-2 mx-auto">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="postalcode">
                        Postalcode
                    </label>
                    <input type="text" required id="postalcode" name="postalcode" placeholder="5-Digits"
                    className="bg-white border-2 border-gray-200 rounded w-auto p-2
                    text-gray-700 focus:outline-none focus:border-blue-400"/>
                    <label className="w-auto block text-gray-700 pr-4 ml-5" htmlFor="tel">
                        Tel
                    </label>
                    <input type="text" required id="tel" name="tel" placeholder="10-Digits"
                    className="bg-white border-2 border-gray-200 rounded w-auto p-2
                    text-gray-700 focus:outline-none focus:border-blue-400"/>
                </div>
                <div className="flex items-center w-1/2 my-2 mx-auto">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">
                        Picture
                    </label>
                    <input type="text" required id="picture" name="picture" placeholder="URL"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2
                    text-gray-700 focus:outline-none focus:border-blue-400"/>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white mt-6 mx-auto p-2 w-[30%] rounded">Add New Hospital</button>
        </form>:null}
        </>
    )
}