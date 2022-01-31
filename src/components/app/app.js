import React from 'react';
import AppClass from './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';
import AllHeroes from '../all-heroes/all-heroes';
import NavigationBar from '../navigation-bar/navigation-bar';

export default function App() {
    return (
      <BrowserRouter>
        <div className={AppClass.container}>
          <NavigationBar />
          <Routes>
            <Route exact="true" path="/" element={<Dashboard/>} />
            <Route exact="true" path="/heroes" element={<AllHeroes/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }