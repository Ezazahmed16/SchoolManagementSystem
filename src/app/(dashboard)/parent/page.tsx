import Announcements from "@/components/Announcements"
import BigCalender from "@/components/BigCalender"

const ParentPage = () => {
    return (
        <div>
            <div className="p-4 flex gap-4 flex-col xl:flex-row">
                {/* Left */}
                <div className="w-full lg:w-2/3">
                    <div className="h-full bg-white p-4 rounded-xl">
                        <h1 className='text-lg font-semibold'>Schedule (3A)</h1>
                        <BigCalender />
                    </div>
                </div>
                {/* Left */}
                <div className="w-full lg:w-1/3 flex flex-col gap-8">
                    <Announcements />
                </div>

            </div>
        </div>
    )
}

export default ParentPage   