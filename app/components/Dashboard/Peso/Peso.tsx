import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const data = [
  { name: 'Jun', peso: 0 },
  { name: 'Jul', peso: 13 },
  { name: 'Aug', peso: 18 },
  { name: 'Sep', peso: 19 },
  { name: 'Oct', peso: 22 },
  { name: 'Nov', peso: 23 },
  { name: 'Dez', peso: 19 },
  { name: 'Jan', peso: 23 },
  { name: 'Feb', peso: 24 },
  { name: 'Mar', peso: 27 },
];

const Peso = () => {

    const cores = ['#1e86dc', '#417da0', '#5da5aa', '#69aaa1', '#78ab9b',
                  '#9bb28a', '#ee9b50', '#f49a4b', '#e6794a', '#f5914a'];
    
  return (
    <div className="w-full h-96 p-4 bg-white rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Peso Descartado Mensal</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="1 0" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="peso" className='cursor-pointer' barSize={30}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Peso;
