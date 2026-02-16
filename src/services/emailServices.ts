import emailjs from '@emailjs/browser';

export interface EmailData {
  from_name: string;
  from_email: string;
  message: string;
}

// Configuration EmailJS (à mettre dans .env)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Envoie un email via EmailJS
 * @param data - Données du formulaire
 * @returns Promise avec la réponse
 */
export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    // Initialiser EmailJS avec la clé publique
    emailjs.init(PUBLIC_KEY);

    // Envoyer l'email
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: data.from_name,
      from_email: data.from_email,
      message: data.message,
      to_name: 'Leslie Elimby', // Votre nom
    });

    console.log('Email envoyé avec succès:', response);
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw new Error('Échec de l\'envoi du message. Veuillez réessayer.');
  }
};

/**
 * Valide les données du formulaire
 * @param data - Données à valider
 * @returns true si valide, sinon lance une erreur
 */
export const validateEmailData = (data: EmailData): boolean => {
  if (!data.from_name || data.from_name.trim().length < 2) {
    throw new Error('Le nom doit contenir au moins 2 caractères');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.from_email || !emailRegex.test(data.from_email)) {
    throw new Error('Veuillez entrer une adresse email valide');
  }

  if (!data.message || data.message.trim().length < 10) {
    throw new Error('Le message doit contenir au moins 10 caractères');
  }

  return true;
};