import Card from '@/components/dashboard/Card'
import Chart from '@/components/dashboard/Chart'
import Rightbar from '@/components/dashboard/Rightbar'
import Transactions from '@/components/dashboard/Transactions'

export default function Home() {
  return (
       <main className="flex gap-5 mt-5">
        <div className="gap-5 flex flex-col flex-[3]">
        <div className='flex justify-between gap-5'>
            <Card  />
            <Card  />
            <Card  />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className='flex-1'>
        <Rightbar />
      </div>
    </main>
  )
}
