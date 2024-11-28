import axios from "axios"
import { useState } from 'react'
// import {
//     Dialog,
//     DialogContent,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
// } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



export default function WalletAction() {

    const [phone, setPhone] = useState("")
    const [amount, setAmount] = useState(0)
    const [action, setAction] = useState("")
    const [reason, setReason] = useState("")
    const {toast} = useToast()
    async function handleClick() {
        
        try {
            const {data} = await axios.post('https://coinstore-backend.onrender.com/api/admin/wallet-action',{
                phone,
                amount,
                reason,
                action
            },{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(data);
            toast({title: "Wallet updated", description: data.message})
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="flex flex-col gap-4 border p-4 rounded-sm">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input type="text" id="phone" placeholder="phone number" onChange={(e)=>{setPhone(e.target.value)}}/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="amount">Amount</Label>
                    <Input type="number" id="number" placeholder="Amount" onChange={(e)=>{setAmount(parseFloat(e.target.value))}}/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="action">Action</Label>
                    <Select onValueChange={(value: string)=>{setAction(value)}}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select action" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="credit">Credit</SelectItem>
                            <SelectItem value="debit">Debit</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                {
                    action === "credit" ?
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="reason">Reason</Label>
                        <Select onValueChange={(value: string)=>{setReason(value)}}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select action" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="credit">Reward</SelectItem>
                                <SelectItem value="debit">Add money</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    :
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="reason">Reason</Label>
                        <Input type="text" id="reason" placeholder="reason" onChange={(e)=>{setReason(e.target.value)}}/>
                    </div>
                }
                <Button onClick={handleClick}>Update</Button>
            </div>
        </div>
    )
}
