'use client'
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 1000,
        expense: 2400,
    },
    {
        name: 'Feb',
        income: 2300,
        expense: 2500,
    },
    {
        name: 'Mar',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Apr',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'May',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'June',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'July',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Aug',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Sep',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Oct',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Nov',
        income: 3000,
        expense: 2400,
    },
    {
        name: 'Dec',
        income: 4500,
        expense: 2000,
    },

];

const FinanceChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* title */}
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt='' height={20} width={20} />
            </div>
            {/* Finance Chart */}
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#8884d8" />
                    <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart