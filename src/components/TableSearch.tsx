import Image from "next/image"

const TableSearch = () => {
    return (
        <div className="w-full md:w-full md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-red-300 px-2 ml-2">
            <Image className="" src='/search.png' alt="" height={16} width={24} />
            <input className="w-[200px] p-2 bg-transparent outline-none" type="text" placeholder="Search..." />
        </div>
    )
}

export default TableSearch