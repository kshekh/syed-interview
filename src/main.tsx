import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import GoogleFontLoader from 'react-google-font-loader';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleFontLoader
      fonts={[
        {
          font: 'Poppins',
          weights: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
        } 
      ]}
      subsets={['cyrillic-ext', 'greek']}
    />
    <App />
  </React.StrictMode>,
)
