import { useState } from 'react';
import { House, Settings, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const Menus = [
        { title: "Dashboard", icon: House, src: '/' },
        { title: "Topup List", icon: Settings, src: '/topuplist' },
        { title: "Wallet Action", icon: Wallet, src: '/wallet-action' },
    ];
    const nav = useNavigate()
    return (
        <div>
            <div className="hidden sm:flex h-full" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                <div
                    className={` ${open ? "w-52" : "w-20 "
                        } bg-[#fff] p-5 pt-8 relative duration-300 shadow-lg h-full`}
                >
                    <div className="flex gap-x-4 items-center">
                        <img
                            src="logo.jpeg"
                            style={{ borderRadius: '50%', width: '80px' }}
                        />
                    </div>
                    <ul className="pt-6">
                        {Menus.map((Menu, index) => (
                            <li
                                key={index}
                                className={`flex rounded-md p-2 cursor-pointer 
                            hover:bg-light-white text-black text-sm items-center gap-x-4 
                                    ${index === 0 && "bg-light-white"
                                    } `}
                            >
                                <Menu.icon />
                                <span className={`${!open && "hidden"} origin-left duration-200`} onClick={() => nav(`${Menu.src}`)}>
                                    {Menu.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sidebar