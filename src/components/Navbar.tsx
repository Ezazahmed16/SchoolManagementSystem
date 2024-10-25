import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-1">
      {/* SearchBar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-red-300 px-2 ml-2">
        <Image className="" src='/search.png' alt="" height={16} width={24} />
        <input className="w-[200px] p-2 bg-transparent outline-none" type="text" placeholder="Search..." />
      </div>
      {/* Icons */}
      <div className="w-full flex justify-end items-center gap-2">
        <div className="bg-white hover:bg-red-100 rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
          <Image src='/message.png' alt="" height={20} width={20} />
        </div>
        <div className="bg-white hover:bg-red-100 rounded-full w-7 h-7 flex justify-center items-center cursor-pointer relative">
          <Image src='/announcement.png' alt="" height={20} width={20} />
          <span className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs">
            1
          </span>
        </div>
        <div className="flex flex-col ml-3">
          <span className="text-xs leading-3 font-medium">
            Ezaz Ahmed
          </span>
          <span className="text-gray-500 text-[10px] text-right">Admin</span>
        </div>
        <Image src='/avatar.png' alt="" height={36} width={36} className="rounded-full px-1" />
      </div>
    </div>
  )
}

export default Navbar