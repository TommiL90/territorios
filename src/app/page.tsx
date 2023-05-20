import Image from 'next/image'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../components/Map'), { ssr: false })

export default function Home() {
  return (
    <main className=''>
      <h1>Map</h1>
      <DynamicMap />
    </main>
  )
}
