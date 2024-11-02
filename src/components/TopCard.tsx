import { Banknote, User, Wallet, WalletCards } from "lucide-react"

export default function TopCard(){
     return (
        <div className="flex flex-row gap-4 flex-wrap">
        <div className="w-[280px] flex flex-row gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="bg-[#EEF4FF] w-fit rounded-full p-4">
            <User color={'#5B93FF'} />
          </div>
          <div>
            <p className="text-[20px] font-[600]">1000</p>
            <p className="text-[16px]">Total Users</p>
          </div>
        </div>
        <div className="w-[280px] flex flex-row gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="bg-[#FFFBF0] w-fit rounded-full p-4">
            <Wallet color={'#FFD66B'} />
          </div>
          <div>
            <p className="text-[20px] font-[600]">1000</p>
            <p className="text-[16px]">Total Deposit</p>
          </div>
        </div>
        <div className="w-[280px] flex flex-row gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="bg-[#FFF4F0] w-fit rounded-full p-4">
            <WalletCards color={'#FF8F6B'} />
          </div>
          <div>
            <p className="text-[20px] font-[600]">1000</p>
            <p className="text-[16px]">Total Purchase</p>
          </div>
        </div>
        <div className="w-[280px] flex flex-row gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="bg-[#EFEEFF] w-fit rounded-full p-4">
            <Banknote color={'#605BFF'} />
          </div>
          <div>
            <p className="text-[20px] font-[600]">1000</p>
            <p className="text-[16px]">Total Balance</p>
          </div>
        </div>
      </div>

     )
}