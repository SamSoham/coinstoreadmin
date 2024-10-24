import { useState } from 'react';
import { ChevronLeft, House, Settings } from 'lucide-react';


const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Home", src: House },
        { title: "Settings", src: Settings },
    ];
    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } bg-[#00000090] h-screen p-5 pt-8 relative duration-300`}
            >
                <ChevronLeft color='#38BDF8'
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
 border-2 rounded-full ${!open && "rotate-180"} bg-[#fff]`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    {/* <img
                        src="/assets/smiley.svg"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    /> */}
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Shadow Games
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
 ${index === 0 && "bg-light-white"
                                } `}
                        >
                            <Menu.src />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Sidebar