import VaccineBookingForm from "@/components/VaccineBookingForm";

export default function Booking() {
    return (
      <main className="m-5 flex flex-col items-center space-y-5">
        <div className="font-mono text-3xl font-semibold">Booking Vaccine</div>
        <VaccineBookingForm/>
      </main>
    );
}