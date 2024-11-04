import Chart1 from "@/components/Chart1"
import TopCard from "@/components/TopCard"
import axios from "axios"
import { useEffect } from 'react'


export default function Dashboard() {


  async function getData() {
    try {
      const token = localStorage.getItem("token");
      
      const res = await axios.get('http://localhost:8000/api/admin/transaction/getall', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      console.log(res.data)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="p-4 min-h-screen">
      <TopCard/>
      <Chart1/>
    </div>
  )
}