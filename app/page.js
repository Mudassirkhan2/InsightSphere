import Card from '@/components/dashboard/Card'
import Chart from '@/components/dashboard/Chart'
import Rightbar from '@/components/dashboard/Rightbar'
import Transactions from '@/components/dashboard/Transactions'
import { cards } from '@/constants'

export default function Home() {
  return (
      <main className="flex flex-col gap-5 mt-5 md:flex-row">
        <div className="gap-5 flex flex-col flex-[3] md:w-3/4 xl:w-4/5">
          <div className='flex flex-col justify-between gap-5 md:flex-row'>
            {
              cards.map((item) => (
                <Card key={item.id} item={item} />
              ))
            }
          </div>
          <Transactions />
          <Chart />
       </div>
        <div className='flex-1 md:block'>
          <Rightbar />
        </div>
    </main>
  )
}
