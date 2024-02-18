import { supabase } from "./Config";

const queryDisease = async (disease_id) => {
    const { data, error } = await supabase
      .from('Disease')
      .select('*')
      .eq('id',disease_id);
  
    if (error) {
      console.error('Error querying disease table:', error);
    } else {
      console.log('Disease data:', data);
    }
  };

  const queryPatients = async (patient_id) => {
    const { data, error } = await supabase
      .from('Patients')
      .select('*')
      .eq('id',patient_id);
  
    if (error) {
      console.error('Error querying patient table:', error);
    } else {
      console.log('Patient data:', data);
    }
  };

  const queryDoctors = async (doctor_id) => {
    const { data, error } = await supabase
      .from('Doctors')
      .select('*')
      .eq('id',doctor_id);
  
    if (error) {
      console.error('Error querying doctor table:', error);
    } else {
      console.log('Doctor data:', data);
    }
  };

  const queryMedicine = async (medicine_id) => {
    const { data, error } = await supabase
      .from('Medicines')
      .select('*')
      .eq('id',medicine_id);
  
    if (error) {
      console.error('Error querying medicine table:', error);
    } else {
      console.log('Medicine data:', data);
    }
  };

queryDisease();
queryPatients();
queryDoctors();
queryMedicine();
