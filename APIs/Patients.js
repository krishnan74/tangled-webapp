import { supabase } from "./Config";

const insertNewPatient = async (newPatientData) => {
    const { data, error } = await supabase
        .from('Patients')
        .insert([newPatientData]);

    if (error) {
        console.error('Error inserting new patient:', error);
        return null;
    }

    return data[0];
};

const getPatients = async () => {
    const { data, error } = await supabase
        .from('Patients')
        .select('*');

    if (error) {
        console.error('Error getting patients:', error);
        return [];
    }

    return data;
};

const updatePatient = async (patientId, updatedPatientData) => {
    const { data, error } = await supabase
        .from('Patients')
        .update(updatedPatientData)
        .eq('id', patientId);

    if (error) {
        console.error('Error updating patient:', error);
        return null;
    }

    return data[0];
};

const deletePatient = async (patientId) => {
    const { data, error } = await supabase
        .from('Patients')
        .delete()
        .eq('id', patientId);

    if (error) {
        console.error('Error deleting patient:', error);
        return null;
    }

    return data[0];
};
