import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import i18n from "i18next";
import HttpApi from 'i18next-http-backend'
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
i18n
    .use(initReactI18next)     
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs:['en','ar'],
        fallbackLng: "eng",
        detection:{
            order: ['htmlTag', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'querystring', 'path', 'subdomain'],
            caches:['cookie']
        },
        backend: {
            loadPath: '/assets/locals/{{lng}}/translation.json'
        },
        react:{useSuspense: false}
    })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App name="App React" />
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
