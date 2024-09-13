// hooks/useContactForm.ts
import { supabase } from '../lib/supabaseClient';

interface ContactFormData {
  name: string;
  email: string;
  reason: string[];
  message: string;
}

export const useContactForm = () => {
  const submitForm = async (formData: ContactFormData) => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            reason: formData.reason.join(', '), // Convert array to string
            message: formData.message,
          },
        ]);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error; // Propagate error to the component
    }
  };

  return { submitForm };
};
