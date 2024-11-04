import axios from "axios"
import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function TopupList() {

    const [data, setData] = useState([])

    async function getTopupList() {
        try {
            await axios.get('https://coinstore-backend.onrender.com/api/topup/get-all-topup').then((res) => setData(res.data.topup))

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getTopupList()
    }, [])

    return (
        <div className="w-full min-h-screen">
            <div>
                <TopupDisplay name="MLBB" data={data.filter((x) => x['game'] == "Mobile Legends")} img="/mlbblarge.png" />
                <TopupDisplay name="PUBG" data={data.filter((x) => x['game'] == "PUBG Global")} img="/mlbblarge.png" />
                <TopupDisplay name="Supersus" data={data.filter((x) => x['game'] == "Supersus")} img="/mlbblarge.png" />
                <TopupDisplay name="Clash of Clans" data={data.filter((x) => x['game'] == "Clash of Clans")} img="/mlbblarge.png" />
                <TopupDisplay name="Clash Royale" data={data.filter((x) => x['game'] == "Clash Royale")} img="/mlbblarge.png" />
                <TopupDisplay name="Farlight" data={data.filter((x) => x['game'] == "Farlight")} img="/mlbblarge.png" />
                <TopupDisplay name="Honkai: Star Rail" data={data.filter((x) => x['game'] == "Honkai: Star Rail")} img="/mlbblarge.png" />
                <TopupDisplay name="Genshin Impact" data={data.filter((x) => x['game'] == "Genshin Impact")} img="/mlbblarge.png" />
                <TopupDisplay name="Brawl Stars" data={data.filter((x) => x['game'] == "Brawl Stars")} img="/mlbblarge.png" />
                <TopupDisplay name="Honor of Kings" data={data.filter((x) => x['game'] == "Honor of Kings")} img="/mlbblarge.png" />
            </div>
        </div>
    )
}

const TopupDisplay = ({ name, data, img }: { name: string, data: any, img: string }) => {

    const [open, setOpen] = useState(false)
    const [quantity,setQuantity] = useState('')
    const [desc,setDesc] = useState('')
    const [comm,setComm] = useState('')
    const [game,setGame] = useState('')
    const [code,setCode] = useState('')
    const [provider,setProvider] = useState('')
    const [topup,setTopup] = useState('')
    const [active,setActive] = useState(false)

    function editInfo(inf:any){
        setOpen(true)
        setDesc(inf['amount'])
        setQuantity(inf['description'])
        setCode(inf['gameCode'])
        setComm(inf['commission'])
        setGame(inf['game'])
        setTopup(inf['topupCode'])
        setProvider(inf['provider'])
        setActive(inf['isActive'])
        console.log(inf)
    }

    function reset(){
        setOpen(false)
        setDesc('')
        setQuantity('')
    }

    return (
        <div className="p-4">
            <p className="text-xl font-bold">{name}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  max-h-[50vh] overflow-auto no-scrollbar">
                {
                    data.map((inf: any, index: number) => (
                        <div key={index} className="flex flex-row gap-2 border border-black rounded bg-slate-200 w-[250px] cursor-pointer hover:bg-slate-100 transition-colors p-2" onClick={()=>editInfo(inf)}>
                            <img src={img} height={'50px'} width={'50px'} />
                            <div className="flex flex-col">
                                <p>{Number.isNaN(parseInt(inf['description'])) ? inf['description'] : `${inf['description']} Diamonds`}</p>
                                <p>₹ {inf['amount']}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Dialog open={open} onOpenChange={reset}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Information</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Amount
                            </Label>
                            <Input id="username" value={desc} onChange={(e)=>setDesc(e.target.value)} className="col-span-3" placeholder="2000"  />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Commission
                            </Label>
                            <Input id="username" value={comm} onChange={(e)=>setComm(e.target.value)} className="col-span-3" placeholder="2000"  />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Description
                            </Label>
                            <Input id="name" value={quantity} onChange={(e)=>setQuantity(e.target.value)} className="col-span-3" placeholder="12" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Game
                            </Label>
                            <Input id="name" value={game} onChange={(e)=>setGame(e.target.value)} className="col-span-3" placeholder="12" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Game Code
                            </Label>
                            <Input id="name" value={code} onChange={(e)=>setCode(e.target.value)} className="col-span-3" placeholder="12" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Provider
                            </Label>
                            <Input id="name" value={provider} onChange={(e)=>setProvider(e.target.value)} className="col-span-3" placeholder="12" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                               Topup Code
                            </Label>
                            <Input id="name" value={topup} onChange={(e)=>setTopup(e.target.value)} className="col-span-3" placeholder="12" />
                        </div>
                    </div>
                    <DialogFooter>
                    <div className="flex items-center space-x-2">
                            <Switch id="airplane-mode" checked={active} onCheckedChange={()=>setActive(!active)} />
                            <Label htmlFor="airplane-mode">Active</Label>
                    </div>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
