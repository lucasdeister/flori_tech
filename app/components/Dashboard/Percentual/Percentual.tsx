import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface PercentualProps {
  isMobile: boolean;
}

const data = [
  { name: 'Categoria A', value: 36 },
  { name: 'Categoria B', value: 21 },
  { name: 'Categoria C', value: 19 },
  { name: 'Categoria D', value: 24 },
];

const cores = ['#ffa528', '#1e86dc', '#4bb9b9', '#fd6f37'];

const LegendaPersonalizada = (props: any) => {
  const { payload } = props;

  return (
    <ul className="flex flex-wrap max-w-fit relative gap-3 bottom-7 left-10">
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center mx-4">
          <div
            className="w-2 h-2 rounded-full mx-4"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span className="text-sm text-gray-700">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

const Percentual = ({ isMobile }: PercentualProps) => {

  return (
    <div className="w-full h-96 p-4 bg-white rounded-lg flex flex-wrap">
      <h2 className="text-xl font-semibold mb-4">Percentual de Faixa Etária</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            className='cursor-pointer'
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={!isMobile ? 80 : 60}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
            ))}
          </Pie>
          <Tooltip />
          {!isMobile && <Legend content={<LegendaPersonalizada />} />}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Percentual;
