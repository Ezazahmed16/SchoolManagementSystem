'use client'
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: 'Event 1',
        time: '2024-03-01T10:00:00',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus dolorem dignissimos!"
    },
    {
        id: 2,
        title: 'Event 2',
        time: '2024-03-01T10:00:00',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus dolorem dignissimos!"
    },
    {
        id: 3,
        title: 'Event 3',
        time: '2024-03-01T10:00:00',
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus dolorem dignissimos!"
    },
]

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div>
            <Calendar onChange={onChange} value={value} />

            {/* Events */}
            <div className="flex justify-between items-center bg-white p-4 mt-2">
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt='' height={20} width={20} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map(event => (
                    <div className="p-4 border-b-2 bg-gray-100" key={event.id}>
                        <div className="flex justify-between items-center">
                            <div className="">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-bold">{event.title}</h2>
                                    <h2 className="text-sm">{event.time}</h2>
                                </div>
                                <p className="text-sm text-gray-500">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalender