import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div
      className="w-[100%] h-[70px] border-b flex justify-center
    items-center"
    >
      <div></div>
      <div className="w-[85%] flex justify-between items-center">
        <div className="font-[600] text-[20px]">
          LMS <span className="text-orange-400 cursor-pointer">Mart</span>
        </div>
        <div className="flex justify-between w-[30%] font-bold text-[16px] text-gray-400 cursor-pointer ">
          <nav className="hover:text-gray-300">Home</nav>
          <nav className="hover:text-gray-300">About</nav>
          <nav className="hover:text-gray-300">Courses</nav>
          <nav className="hover:text-gray-300">Contact</nav>
        </div>
        <div className="w-[15%] flex justify-between items-center">
          <FaSearch className="cursor-pointer text-gray-400 hover:text-gray-300" />
          <button className="w-[120px] h-11 border rounded-[12px] bg-[#8dc5b7] text-[17px] font-[500] text-gray-100  hover:text-white hover:bg-[#a2cec2] ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
