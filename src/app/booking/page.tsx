import VaccineBookingForm from "@/components/VaccineBookingForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {

  const session = await getServerSession(authOptions)

  if(!session||!session.user.token) return null

  const profile = await getUserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt)

    return (
      <main className="m-5 flex flex-col items-center space-y-5 text-l">
        {profile?
        <table className="table-auto border-separate border-spacing-2">
        <tbody>
            <tr>Name :<td></td><td>{profile.data.name}</td></tr>  
            <tr>Email :<td></td><td>{profile.data.email}</td></tr>
            <tr>Tel. :<td></td><td>{profile.data.tel}</td></tr>
            <tr>Member Since :<td></td><td>{createdAt.toString()}</td></tr>
        </tbody>
        </table>
        :null}
        <div className="font-mono text-3xl font-semibold">Booking Vaccine</div>
        <VaccineBookingForm/>
      </main>
    );
}