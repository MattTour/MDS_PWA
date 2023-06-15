import React from 'react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import Navbar from './componant/Navbar';
import Accueil from './pages/Accueil';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import './css/index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const App = () => {

  return  <Router>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Accueil />}></Route>
                    <Route path="/page1" element={<Page1 />}></Route>
                    <Route path="/page2" element={<Page2 />}></Route>
                    <Route path="/page3" element={<Page3 />}></Route>
                </Routes>
            </div>
          </Router>
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
