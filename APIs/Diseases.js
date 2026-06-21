import { supabase } from "./Config";

const insertNewDisease = async (newDiseaseData) => {
    const { data, error } = await supabase
        .from('Disease')
        .insert([newDiseaseData]);

    if (error) {
        console.error('Error inserting new disease:', error);
        return null;
    }

    return data[0];
};

const getDiseases = async () => {
    const { data, error } = await supabase
        .from('Disease')
        .select('*');

    if (error) {
        console.error('Error getting diseases:', error);
        return [];
    }

    return data;
};

const updateDisease = async (diseaseId, updatedDiseaseData) => {
    const { data, error } = await supabase
        .from('Disease')
        .update(updatedDiseaseData)
        .eq('id', diseaseId);

    if (error) {
        console.error('Error updating disease:', error);
        return null;
    }

    return data[0];
};

const deleteDisease = async (diseaseId) => {
    const { data, error } = await supabase
        .from('Disease')
        .delete()
        .eq('id', diseaseId);

    if (error) {
        console.error('Error deleting disease:', error);
        return null;
    }

    return data[0];
};