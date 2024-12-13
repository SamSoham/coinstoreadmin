import axios from "axios"
import { useState, useEffect } from 'react'
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
import {Trash} from 'lucide-react'


export default function Announcement() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [data, setData] = useState([])
    const {toast} = useToast()

    async function handleClick() {
        
        try {
            if(!title || !description) return
            const {data} = await axios.post('https://coinstore-backend.onrender.com/api/admin/add-announcement',{
                title,
                description
            },{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(data);
            toast({title: "Announcement added", description: data.message})
        } catch (error) {
            console.log(error);
        }
    }
    
    async function handleDelete(id: string) {
        
        try {
            const {data} = await axios.post('https://coinstore-backend.onrender.com/api/admin/delete-announcement',{
                id
            },{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            // console.log(data);
            toast({title: "Announcement deleted", description: data.message})
        } catch (error) {
            console.log(error);
        }
    }

    async function getData() {
        try {

            const {data} = await axios.get('https://coinstore-backend.onrender.com/api/buyer/get-announcement')
            if(data.success){
                setData(data.data)
                console.log(data);
                
            }
        } catch (err: any) {
            toast({
                description: err.message
            })
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="w-full min-h-screen flex flex-col gap-4 items-center pt-12">
            <div className="flex flex-col gap-4 border p-4 rounded-sm">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="title">Title</Label>
                    <Input type="text" id="title" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="description">Description</Label>
                    <textarea className="bg-white" id="number" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
                
                <Button onClick={handleClick}>Add</Button>
            </div>
            <div className="flex flex-col gap-4 w-full p-4">
                {
                    data && data.length > 0 ?
                    data.map((announcement, index)=>{
                        return (
                            <div key={index} className="flex flex-col p-2 border rounded-sm gap-2">
                                <p className="font-bold">{announcement['title']}</p>
                                <p>{announcement['description']}</p>
                                <Button size="icon" variant="outline" onClick={()=>{handleDelete(announcement['_id'])}}><Trash/></Button>
                            </div>
                        )
                    })
                    :
                    <p>No previous announcements</p>
                }
            </div>
        </div>
    )
}
