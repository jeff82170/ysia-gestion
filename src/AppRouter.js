import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './AccueilNavigation';

const Placeholder = ({ title }) => <div style={{ padding: 20 }}><h2>{title}</h2></div>;

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/perimes" element={<Placeholder title="Produits périmés" />} />
        <Route path="/promos" element={<Placeholder title="Opérations commerciales" />} />
        <Route path="/planning" element={<Placeholder title="Planning collaborateurs" />} />
        <Route path="/taches" element={<Placeholder title="Tâches collaboratives" />} />
        <Route path="/agenda" element={<Placeholder title="Agenda Google" />} />
        <Route path="/mail" element={<Placeholder title="Messagerie Gmail" />} />
      </Routes>
    </Router>
  );
}