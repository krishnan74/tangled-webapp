import { supabase } from "./Config";

const insertNewDoctor = async (newDoctorData) => {
    const { data, error } = await supabase
        .from('Dcotors')
        .insert([newDoctorData]);

    if (error) {
        console.error('Error inserting new doctor:', error);
        return null;
    }

    return data[0];
};

const getDoctors = async () => {
    const { data, error } = await supabase
        .from('Dcotors')
        .select('*');

    if (error) {
        console.error('Error getting doctors:', error);
        return [];
    }

    return data;
};

const updateDoctor = async (doctorId, updatedDoctorData) => {
    const { data, error } = await supabase
        .from('Dcotors')
        .update(updatedDoctorData)
        .eq('id', doctorId);

    if (error) {
        console.error('Error updating doctor:', error);
        return null;
    }

    return data[0];
};

const deleteDoctor = async (doctorId) => {
    const { data, error } = await supabase
        .from('Dcotors')
        .delete()
        .eq('id', doctorId);

    if (error) {
        console.error('Error deleting doctor:', error);
        return null;
    }

    return data[0];
};


