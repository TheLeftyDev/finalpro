import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            ///////NAVBAR///////
            projects:"Projects",
            details:"Details",
            lists:"Lists",
            choices:"Choices",
            requests:"Requests",
            contacts:"Contacts",
            custom:"Custom",


            findoutmore: "Find Out More",


            welcome: "Welcome",
            contact: "Contact",
            address: "3341 Farland Avenue, Smiley, Texas",
            email: "info@outdorra.com",
            phone: "830-587-9492"


        }
    },
    az: {
        translation: {
            ///////NAVBAR///////
            projects:"Proyektlər",
            details:"Detallar",
            lists:"Listlər",
            choices:"Seçimlər",
            requests:"Sifarişlər",
            contacts:"Əlaqə",
            custom:"Fərdiləşmiş",


            findoutmore: "Daha Çox Öyrən",


            welcome: "Xoş gəlmişsiniz",
            contact: "Əlaqə",
            address: "3341 Farland Küçəsi, Smiley, Teksas",
            email: "info@outdorra.com",
            phone: "830-587-9492"
        }
    }
};

i18n.use(initReactI18next).init({
    lng: 'en',
    resources
});

export default i18n;
