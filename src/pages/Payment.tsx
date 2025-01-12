import { useToast } from "@/hooks/use-toast"
import axios from "axios"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export default function Payment() {

    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [logs, setLogs] = useState()
    const { toast } = useToast()

    async function getData() {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get('https://coinstore-backend.onrender.com/api/admin/transaction/getall', {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            setData(res.data.transactions)
            // console.log(res.data.transactions);
            
        } catch (err: any) {
            toast({
                description: err.message
            })
            console.log(err)
        }
    }

    const handleOpen = (index: number)=>{
        setOpen(true)
        setLogs(data[index]['logs'])
        console.log(data[index]['logs']);
        
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="p-4 min-h-screen">
            <Dialog open={open} onOpenChange={() => setOpen(false)}>
                <DialogContent className="min-w-fit overflow-auto max-h-[70vh]">
                    <DialogHeader>
                        <DialogTitle>Logs</DialogTitle>
                        {/* <DialogDescription>
                        </DialogDescription> */}
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        Payment Log
                        <pre className="bg-slate-400 p-2 overflow-auto">
                            {logs && JSON.stringify(JSON.parse(logs!['paymentLog']), null, 2)}
                        </pre>
                        Provider Log
                        <pre className="bg-slate-400 p-2 overflow-auto">
                            {logs && JSON.stringify(JSON.parse(logs!['providerLog']), null, 2)}
                        </pre>
                        
                    </div>
                </DialogContent>
            </Dialog>
            <div className="w-[90vw] h-[60vh] overflow-auto">
                <Table className="w-full border border-gray-200 rounded-lg shadow ">
                    <TableHeader className="bg-slate-400">
                        <TableRow>
                            <TableHead className="w-12" />
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone Number</TableHead>
                            <TableHead>Game Name</TableHead>
                            <TableHead>Item Name</TableHead>
                            <TableHead>Transaction Date</TableHead>
                            <TableHead>Order ID</TableHead>
                            <TableHead>User ID</TableHead>
                            <TableHead>Payment Status</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead>Logs</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.map((invoice: any, index: any) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell className="font-medium">{invoice['customerName']}</TableCell>
                                <TableCell>{invoice['customerEmail']}</TableCell>
                                <TableCell>{invoice['customerPhone']}</TableCell>
                                <TableCell>{invoice['game']}</TableCell>
                                <TableCell>{invoice['itemName']}</TableCell>
                                <TableCell>{new Date(invoice['transactionDate']).toLocaleDateString()}</TableCell>
                                <TableCell>{invoice['orderid']}</TableCell>
                                <TableCell>{invoice['userid']}</TableCell>
                                <TableCell>{invoice['paymentStatus']}</TableCell>
                                <TableCell className="text-right">{invoice['amount']}</TableCell>
                                {invoice['logs'] && <TableCell className="underline cursor-pointer" onClick={() => handleOpen(index)}>View</TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}