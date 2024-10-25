const announcements = [
  {
    id: 1,
    title: 'Announcements 1',
    time: '2024-03-01T10:00:00',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus dolorem dignissimos!"
  },
  {
    id: 2,
    title: 'Announcements 2',
    time: '2024-03-01T10:00:00',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus dolorem dignissimos!"
  },
  {
    id: 3,
    title: 'Announcements 3',
    time: '2024-03-01T10:00:00',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus dolorem dignissimos!"
  },
]

const Announcements = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 my-2">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className='text-lg font-semibold'>Announcements</h1>
        <span className="text-xs text-gray-700">View All</span>
      </div>
      <div className="">
        <div className="flex flex-col gap-4">
          {announcements.map(announcement => (
            <div className="border-b-2 bg-gray-50 p-2" key={announcement.id}>
              <div className="flex justify-between items-center">
                <div className="">
                  <div className="flex flex-col mb-1">
                    <h2 className="text-lg font-bold">{announcement.title}</h2>
                    <h2 className="text-sm">{announcement.time}</h2>
                  </div>
                  <p className="text-sm text-gray-500">
                    {announcement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Announcements