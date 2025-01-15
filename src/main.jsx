import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { Buttons, Cards, Dialogs, BasicTab, TextField, BasicModal, MyTypography } from './components/exporter.js';
import './Index.css';

const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />

      <Route path="/TextField" element={<TextField />} />
      <Route path="/Buttons" element={<Buttons />} />
      <Route path="/Cards" element={<Cards />} />
      <Route path="/Dialogs" element={<Dialogs />} />
      <Route path="/Tabs" element={<BasicTab />} />
      <Route path="/Modal-Chip" element={<BasicModal />} />
      <Route path="/Typography-Colors" element={<MyTypography />} />
    </>
  
);

const router = createBrowserRouter(routes, {
    basename: "/mui-task" //comment this if you want to eun this locally
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);