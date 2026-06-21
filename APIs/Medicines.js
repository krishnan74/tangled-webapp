import { supabase } from "./Config";

const insertNewMedicine = async (newMedicineData) => {
    const { data, error } = await supabase
        .from('Medicine')
        .insert([newMedicineData]);

    if (error) {
        console.error('Error inserting new medicine:', error);
        return null;
    }

    return data[0];
};

const getMedicines = async () => {
    const { data, error } = await supabase
        .from('Medicine')
        .select('*');

    if (error) {
        console.error('Error getting medicines:', error);
        return [];
    }

    return data;
};

const updateMedicine = async (medicineId, updatedMedicineData) => {
    const { data, error } = await supabase
        .from('Medicine')
        .update(updatedMedicineData)
        .eq('id', medicineId);

    if (error) {
        console.error('Error updating medicine:', error);
        return null;
    }

    return data[0];
};

const deleteMedicine = async (medicineId) => {
    const { data, error } = await supabase
        .from('Medicine')
        .delete()
        .eq('id', medicineId);

    if (error) {
        console.error('Error deleting medicine:', error);
        return null;
    }

    return data[0];
};