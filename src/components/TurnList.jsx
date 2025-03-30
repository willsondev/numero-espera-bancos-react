import React from 'react';

const TurnList = ({ turns }) => {
  // Agrupar turnos por su letra inicial
  const groupedTurns = turns.reduce((acc, turn) => {
    const firstLetter = turn.turn.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(turn);
    return acc;
  }, {});

  // Ordenar las letras alfabéticamente
  const sortedLetters = Object.keys(groupedTurns).sort();

  return (
    <div className="mt-6">
      <h3 className="text-xl text-center font-semibold text-gray-800 mb-4">Turnos Asignados</h3>
      
      {turns.length === 0 ? (
        <p className="text-gray-500 text-center">No hay turnos asignados aún.</p>
      ) : (
        <div className="flex flex-nowrap overflow-x-auto pb-2 -mx-4 px-4">
          {sortedLetters.map((letter) => {
            // Determinar el color según la letra
            let bgColor = 'bg-gray-200';
            let textColor = 'text-gray-800';
            
            if (['A', 'B', 'C'].includes(letter)) {
              bgColor = letter === 'A' ? 'bg-red-100' : 
                        letter === 'B' ? 'bg-blue-100' : 
                        'bg-green-100';
              textColor = letter === 'A' ? 'text-red-800' : 
                          letter === 'B' ? 'text-blue-800' : 
                          'text-green-800';
            }

            return (
              <div 
                key={letter} 
                className={`p-4 rounded-lg ${bgColor} flex-shrink-0 w-24 mr-4`}
              >
                <h4 className={`text-sm font-bold mb-3 ${textColor}`}>Letra {letter}</h4>
                <div className="flex flex-col space-y-2">
                  {groupedTurns[letter].map((turn, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 rounded-full ${textColor} ${bgColor.replace('100', '300')} font-medium text-center`}
                    >
                      {turn.turn}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TurnList;