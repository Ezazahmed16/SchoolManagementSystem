"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'total',
        count: 106,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 53,
        fill: '#FCA5A5',
    },
    {
        name: 'Boys',
        count: 53,
        fill: '#D1D5DB',
    },
];

const CountCharts = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* Title */}
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt='' height={20} width={20} />
            </div>
            {/* Chart */}
            <div className="w-full h-[75%] relative">
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={40} data={data}>
                        <RadialBar
                            // label={{ position: 'insideStart', fill: '#fff' }}
                            background

                            dataKey="count"
                        />
                        {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src='/maleFemale.png' alt='' height={50} width={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            {/* Bottom */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 rounded-full bg-red-300"></div>
                    <h1 className='font-bold'>1.456</h1>
                    <h2 className='text-sm text-gray-300'>Boys (45%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 rounded-full bg-gray-300"></div>
                    <h1 className='font-bold'>1.456</h1>
                    <h2 className='text-sm text-gray-300'>Girls (55%)</h2>
                </div>
            </div>
        </div>
    )
}

export default CountCharts