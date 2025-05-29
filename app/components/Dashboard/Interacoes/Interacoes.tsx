import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

function Interacoes() {

    const data = [
        { name: 'Jun', valor: 1000 },
        { name: 'Jul', valor: 2000 },
        { name: 'Aug', valor: 4000 },
        { name: 'Sep', valor: 3700 },
        { name: 'Oct', valor: 5700 },
        { name: 'Nov', valor: 3850 },
        { name: 'Dez', valor: 2300 },
        { name: 'Jan', valor: 6600 },
        { name: 'Feb', valor: 5700 },
        { name: 'Mar', valor: 7800 },
    ];

    return (
        <div className="w-full h-96 p-4 bg-white rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Interações Mensais</h2>
            <ResponsiveContainer width="100%" height="100%" >
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="1 0" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        className='cursor-pointer'
                        type="natural"
                        dataKey="valor"
                        stroke="#3471eb"
                        strokeWidth={4}
                        dot={{ r: 2 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Interacoes
