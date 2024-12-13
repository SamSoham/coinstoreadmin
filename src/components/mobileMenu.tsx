import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Banknote, CreditCard, House, List, Settings, Wallet, MicVocal } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Menus = [
    { title: "Dashboard", icon: House, src: '/' },
    { title: "Topup List", icon: Settings, src: '/topuplist' },
    { title: "Wallet Action", icon: Wallet, src: '/wallet-action' },
    { title: "Payment", icon: Banknote, src: '/payment'},
    { title: "Purchase", icon: CreditCard, src: '/payment'},
    { title: "Announcement", icon: MicVocal, src: '/announcement'}
];


export default function MobileMenu(){
    const nav = useNavigate()
    return(
        <div>
        <Sheet>
        <SheetTrigger className='bg-inherit block sm:hidden'><List/></SheetTrigger>
        <SheetContent side={'left'}>
            <SheetHeader>
                <SheetTitle>
                    <img
                    src="logo.jpeg"
                    style={{ borderRadius: '50%', width: '80px' }}
                /></SheetTitle>
            </SheetHeader>
            <SheetDescription>
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
                        <span onClick={() => nav(`${Menu.src}`)}>
                            {Menu.title}
                        </span>
                    </li>
                ))}
            </ul>
                </SheetDescription>
        </SheetContent>
    </Sheet>
        </div>
    )
}