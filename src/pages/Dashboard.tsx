// import Chart1 from "@/components/Chart1"
import TopCard from "@/components/TopCard"

export default function Dashboard() {


  return (
    <div className="p-4 min-h-screen">
      <TopCard />
      {/* <Chart1/> */}
      {/* <div className="w-[90vw] h-[60vh] overflow-auto">
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div> */}
    </div>
  )
}