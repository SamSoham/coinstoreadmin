import axios from "axios"
import { useEffect, useState } from 'react'

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
                <TopupDisplay name="MLBB" data={data.filter((x) => x['game'] == "Mobile Legends")} img="/mlbblarge.png"/>
                <TopupDisplay name="PUBG" data={data.filter((x) => x['game'] == "PUBG Global")} img="/mlbblarge.png"/>
                <TopupDisplay name="Supersus" data={data.filter((x) => x['game'] == "Supersus")} img="/mlbblarge.png"/>
                <TopupDisplay name="Clash of Clans" data={data.filter((x) => x['game'] == "Clash of Clans")} img="/mlbblarge.png"/>
                <TopupDisplay name="Clash Royale" data={data.filter((x) => x['game'] == "Clash Royale")} img="/mlbblarge.png"/>
                <TopupDisplay name="Farlight" data={data.filter((x) => x['game'] == "Farlight")} img="/mlbblarge.png"/>
                <TopupDisplay name="Honkai: Star Rail" data={data.filter((x) => x['game'] == "Honkai: Star Rail")} img="/mlbblarge.png"/>
                <TopupDisplay name="Genshin Impact" data={data.filter((x) => x['game'] == "Genshin Impact")} img="/mlbblarge.png"/>
                <TopupDisplay name="Brawl Stars" data={data.filter((x) => x['game'] == "Brawl Stars")} img="/mlbblarge.png"/>
                <TopupDisplay name="Honor of Kings" data={data.filter((x) => x['game'] == "Honor of Kings")} img="/mlbblarge.png"/>
            </div>
        </div>
    )
}

const TopupDisplay = ({name, data, img}: {name: string, data: any, img: string})=>{
    // console.log(data);
    
    return (
        <div className="p-4">
            <p className="text-xl font-bold">{name}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  max-h-[50vh] overflow-auto no-scrollbar">
                {
                    data.map((inf: any, index: number) => (
                        <div key={index} className="flex flex-row gap-2 border border-black rounded bg-slate-200 w-[250px] cursor-pointer hover:bg-slate-100 transition-colors p-2">
                            <img src={img} height={'50px'} width={'50px'} />
                            <div className="flex flex-col">
                                <p>{Number.isNaN(parseInt(inf['description'])) ? inf['description'] : `${inf['description']} Diamonds`}</p>
                                <p>₹ {inf['amount']}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}