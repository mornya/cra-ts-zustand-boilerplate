import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { axiosDefaultConfig } from '@mornya/restful-libs';
import reportWebVitals from '@/reportWebVitals';
import App from '@/components/App';
import PageNotFound from '@/components/PageNotFound';
import './index.scss';

axiosDefaultConfig({ isShowLog: process.env.NODE_ENV !== 'production' });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  //<React.StrictMode>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />} />
      {/* FALLBACK */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>,
  //</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
