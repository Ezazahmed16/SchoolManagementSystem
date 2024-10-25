import Image from "next/image"

const UserCard = ({ type }: { type: string }) => {
    return (
        <div className="rounded-2xl odd:bg-red-300 even:bg-gray-300 p-4 flex-1 min-w-[130px]">
            <div className="">
                <div className="flex justify-between items-center">
                    <h3 className="text-[10px] bg-white px-2 py-1 rounded-full text-red-200">
                        2024/10/8
                    </h3>
                    <Image src="/more.png" alt="" height={20} width={20} />
                </div>
                <h1 className="text-xl  font-semibold my-4">1.659</h1>
                <h2 className="capitalize text-sm font-medium text-gray-900">{type}</h2>
            </div>
        </div>
    )
}

export default UserCard