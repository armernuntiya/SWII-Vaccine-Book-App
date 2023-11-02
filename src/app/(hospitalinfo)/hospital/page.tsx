import HospitalCatalog from '@/components/HospitalCatalog';
import { LinearProgress } from '@mui/material';
import { Suspense } from 'react';
import getHospitals from '@/libs/getHospitals';
import AddHospitalForm from '@/components/AddHospitalForm';

export default function Hospital(){
    
    const hospitals = getHospitals()
    
    
    return(
        <main className='text-center p-5'>
            <h1 className='text-xl font-medium'>Select Hospital</h1>
            <Suspense fallback={<p>Loading..<LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
                <AddHospitalForm/>
            </Suspense>
            
        </main>
    );
}