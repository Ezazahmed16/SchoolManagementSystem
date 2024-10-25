import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountCharts from "@/components/CountCharts"
import EventCalender from "@/components/EventCalender"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* Left */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* UserCard */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="Student" />
                    <UserCard type="Teacher" />
                    <UserCard type="Parent" />
                    <UserCard type="Staff" />
                </div>

                {/* Middle Chart */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* CountChart */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountCharts />
                    </div>
                    {/* Attandance Chart */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                {/* Bottom Chart */}
                <div className="w-full h-[500px] ">
                    <FinanceChart />
                </div>
            </div>

            {/* Right */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalender />
                <Announcements />
            </div>

        </div>
    )
}

export default AdminPage