"use client"
import Image from "next/image"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Sun',
        present: 40,
        absent: 10,
    },
    {
        name: 'Mon',
        present: 47,
        absent: 3,
    },
    {
        name: 'Tues',
        present: 38,
        absent: 12,
    },
    {
        name: 'Wed',
        present: 40,
        absent: 10,
    },
    {
        name: 'Thus',
        present: 44,
        absent: 6,
    },
];

const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* Title */}
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt='More options' height={20} width={20} />
            </div>
            {/* Chart */}
            <div className="w-full h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        barSize={20}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend
                            align="left"
                            verticalAlign="top"
                            wrapperStyle={{
                                paddingTop: "20px",
                                paddingBottom: "40px"
                            }} />
                        <Bar
                            dataKey="present"
                            fill="#FCA5A5"
                            legendType="circle"
                            radius={[10, 10, 0, 0]}
                        />
                        <Bar dataKey="absent"
                            fill="#D1D5DB"
                            legendType="circle"
                            radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AttendanceChart;
