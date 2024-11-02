import Chart1 from "@/components/Chart1"
import TopCard from "@/components/TopCard"
import axios from "axios"
import { useEffect } from 'react'


export default function Dashboard() {


  async function getData() {
    try {
      const res = await axios.get('https://coinstore-backend.onrender.com/api/admin/transaction/getall')
      console.log(res)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="p-4">
      <TopCard/>
      <Chart1/>
    </div>
  )
}