import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TurnList from '../components/TurnList';

const RequestTurn = () => {
  const [name, setName] = useState('');
  const [assignedTurn, setAssignedTurn] = useState('');
  const [turns, setTurns] = useState([]);
  const [categories, setCategories] = useState([
    { letter: 'A', turnNumber: 1 },
    { letter: 'B', turnNumber: 1 },
    { letter: 'C', turnNumber: 1 },
  ]);

  const handleAssignTurn = () => {
    if (!name.trim()) {
      toast.error('Por favor ingresa tu nombre.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          fontSize: '16px',
          fontWeight: '500'
        }
      });
      return;
    }

    const category = categories.find((cat) => cat.turnNumber <= 2);
    if (!category) {
      toast.warning('No hay más turnos disponibles en este momento.', {
        position: "top-center",
        autoClose: 4000,
        theme: "colored"
      });
      return;
    }

    const newTurn = `${category.letter}${category.turnNumber}`;
    setAssignedTurn(newTurn);
    setTurns([...turns, { name, turn: newTurn }]);

    const updatedCategories = categories.map((cat) => {
      if (cat.letter === category.letter) {
        return { ...cat, turnNumber: cat.turnNumber + 1 };
      }
      return cat;
    });

    setCategories(updatedCategories);
    setName('');

    // Notificación de éxito con el turno asignado
    toast.success(`Turno ${newTurn} asignado correctamente!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      icon: "✅",
      style: {
        fontSize: '16px',
        fontWeight: '500'
      }
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-2 rounded-lg shadow-md h-auto min-h-[300px]">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      <h2 className="max-w-6xl pl-4 mx-auto text-xl md:text-3xl font-bold text-black-800 text-center p-2  dark:text-neutral-500 font-sans">Solicitar Turno</h2>

      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa tu nombre"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-2">
        <button
          onClick={handleAssignTurn}
          className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        >
          Obtener Turno
        </button>
      </div>

      {assignedTurn && (
        <div className="text-center mt-2 p-2 bg-blue-50 rounded-lg">
          <p className="text-xl text-blue-800 font-semibold">
            Tu turno: <span className="text-xl font-bold">{assignedTurn}</span>
          </p>
        </div>
      )}

      <TurnList turns={turns} />
    </div>
  );
};

export default RequestTurn;