import axios from "axios"
import { useEffect, useState } from 'react'

export default function TopupList(){

    const [data,setData] = useState([])

    async function getTopupList(){
        await axios.get('https://coinstore-backend.onrender.com/api/topup/get-all-topup').then((res)=>setData(res.data.topup))
    }

   useEffect(() => {
     getTopupList()
   }, [])
   
    
    return(
        <div className="w-full">
            TopupList
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-items-center">
            {
                data.filter((x)=>x['game']=="Mobile Legends").map((inf)=>(
                    <div className="flex flex-row gap-2 border border-black w-[250px] p-2">
                        <img src="/mlbblarge.png" height={'50px'} width={'50px'} />
                        <div className="flex flex-col">
                        <p>{Number.isNaN(parseInt(inf['description']))?inf['description']:`${inf['description']} Diamonds`}</p>
                        <p>₹ {inf['amount']}</p>
                    </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}