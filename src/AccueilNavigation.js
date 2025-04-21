import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, Mail, ClipboardList, Clock4, AlertTriangle, Percent } from 'lucide-react';

const modules = [
  { icon: <AlertTriangle size={32} />, title: 'Périmés', path: '/perimes' },
  { icon: <Percent size={32} />, title: 'Promotions', path: '/promos' },
  { icon: <Clock4 size={32} />, title: 'Planning', path: '/planning' },
  { icon: <ClipboardList size={32} />, title: 'Tâches', path: '/taches' },
  { icon: <CalendarDays size={32} />, title: 'Agenda', path: '/agenda' },
  { icon: <Mail size={32} />, title: 'Messagerie', path: '/mail' }
];

export default function Accueil() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      <header className="bg-[#187980] text-white py-4 px-8 text-xl font-semibold shadow">
        YSIA Gestion Facile
      </header>
      <main className="p-10">
        <h1 className="text-3xl font-bold text-[#187980] mb-10 text-center">Tableau de bord</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <div
              key={i}
              onClick={() => navigate(mod.path)}
              className="cursor-pointer bg-white hover:bg-[#e6f7f4] transition-all duration-200 shadow-md p-6 rounded-2xl flex flex-col items-center justify-center text-center border border-gray-200"
            >
              <div className="mb-3 text-[#187980]">{mod.icon}</div>
              <div className="text-lg font-medium">{mod.title}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}