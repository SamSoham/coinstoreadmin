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
import { useToast } from "@/hooks/use-toast"


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
                <TopupDisplay name="MLBB" data={data.filter((x) => x['game'] == "Mobile Legends")} img="/mlbblarge.png"
                    update={() => getTopupList()} />
                <TopupDisplay name="PUBG" data={data.filter((x) => x['game'] == "PUBG Global")} img="/mlbblarge.png"
                    update={() => getTopupList()} />
                <TopupDisplay name="Supersus" data={data.filter((x) => x['game'] == "Supersus")} img="/mlbblarge.png"
                    update={() => getTopupList()} />
                <TopupDisplay name="Clash of Clans" data={data.filter((x) => x['game'] == "Clash of Clans")} img="/mlbblarge.png"
                    update={() => getTopupList()} />
                <TopupDisplay name="Clash Royale" data={data.filter((x) => x['game'] == "Clash Royale")} img="/mlbblarge.png"
                    update={() => getTopupList()} />
                <TopupDisplay name="Farlight" data={data.filter((x) => x['game'] == "Farlight")} img="/mlbblarge.png"
                    update={() => getTopupList()} />
                <TopupDisplay name="Honkai: Star Rail" data={data.filter((x) => x['game'] == "Honkai: Star Rail")} img="/mlbblarge.png"
                    update={() => getTopupList()} />
                <TopupDisplay name="Genshin Impact" data={data.filter((x) => x['game'] == "Genshin Impact")} img="/mlbblarge.png"
                    update={() => getTopupList()} />
                <TopupDisplay name="Brawl Stars" data={data.filter((x) => x['game'] == "Brawl Stars")} img="/mlbblarge.png"
                    update={() => getTopupList()} />
                <TopupDisplay name="Honor of Kings" data={data.filter((x) => x['game'] == "Honor of Kings")} img="/mlbblarge.png"
                    update={() => getTopupList()} />
            </div>
        </div>
    )
}

const TopupDisplay = ({ name, data, img, update }: { name: string, data: any, img: string, update: any }) => {

    const [open, setOpen] = useState(false)
    const [quantity, setQuantity] = useState('')
    const [desc, setDesc] = useState('')
    const [comm, setComm] = useState('')
    const [game, setGame] = useState('')
    const [code, setCode] = useState('')
    const [provider, setProvider] = useState('')
    const [topup, setTopup] = useState('')
    const [active, setActive] = useState(false)
    const [id, setId] = useState('')

    const { toast } = useToast()

    function editInfo(inf: any) {
        setOpen(true)
        setDesc(inf['description'])
        setQuantity(inf['amount'])
        setCode(inf['gameCode'])
        setComm(inf['commission'])
        setGame(inf['game'])
        setTopup(inf['topupCode'])
        setProvider(inf['provider'])
        setActive(inf['isActive'])
        setId(inf['_id'])
        console.log(inf)
    }

    function reset() {
        setOpen(false)
        setDesc('')
        setQuantity('')
        setCode('')
        setComm('')
        setGame('')
        setTopup('')
        setProvider('')
        setId('')
    }

    async function updateIsActive(id: string, isActive: boolean) {
        try {
            await axios.post('https://coinstore-backend.onrender.com/api/topup/update-status-topup', {
                topupId: id,
                isActive: isActive
            })
            setActive(isActive)
            toast({ title: 'Active Mode changed successfully' })
            update()
        } catch (err) {
            console.log(err)
        }
    }

    async function saveInfo() {
        try {
            await axios.post('https://coinstore-backend.onrender.com/api/topup/update-topup', {
                topupId: id,
                amount:quantity,
                commission:comm,
                description:desc,
                game:game,
                gameCode:code,      
                provider:provider,
                topupCode:topup
            })
            toast({ title: 'Information updated successfully' })
            update()
            setOpen(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="p-4">
            <p className="text-xl font-bold">{name}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  max-h-[50vh] overflow-auto no-scrollbar">
                {
                    data.map((inf: any, index: number) => (
                        <div key={index} className={`flex flex-row gap-2 border border-black rounded ${inf.isActive ? "bg-slate-200 w-[250px] hover:bg-slate-100" : "bg-red-200 w-[250px] hover:bg-red-100"} transition-colors p-2 cursor-pointer`} onClick={() => editInfo(inf)}>
                            <img src={img} height={'50px'} width={'50px'} />
                            <div className="flex flex-col">
                                <p>{inf['description']}</p>
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
                            <Input id="username" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="col-span-3" placeholder="2000" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Commission
                            </Label>
                            <Input id="username" value={comm} onChange={(e) => setComm(e.target.value)} className="col-span-3" placeholder="2000" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Description
                            </Label>
                            <Input id="name" value={desc} onChange={(e) => setDesc(e.target.value)} className="col-span-3" placeholder="12" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Game
                            </Label>
                            <Input disabled id="name" value={game} onChange={(e) => setGame(e.target.value)} className="col-span-3" placeholder="12" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Game Code
                            </Label>
                            <Input disabled id="name" value={code} onChange={(e) => setCode(e.target.value)} className="col-span-3" placeholder="12" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Provider
                            </Label>
                            <Input disabled id="name" value={provider} onChange={(e) => setProvider(e.target.value)} className="col-span-3" placeholder="12" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Topup Code
                            </Label>
                            <Input disabled id="name" value={topup} onChange={(e) => setTopup(e.target.value)} className="col-span-3" placeholder="12" />
                        </div>
                    </div>
                    <DialogFooter>
                        <div className="flex items-center space-x-2">
                            <Switch id="airplane-mode" checked={active} onCheckedChange={() => updateIsActive(id, !active)} />
                            <Label htmlFor="airplane-mode">Active</Label>
                        </div>
                        <Button type="submit" onClick={saveInfo}>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
