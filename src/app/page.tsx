import Blog from '@/components/Blog'
import Brands from '@/components/Brands'
import ScrollUp from '@/components/Common/ScrollUp'

import Features from '@/components/Features'
import Initial from '@/components/Initial'
import Pricing from '@/components/Pricing'


export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Initial />
      <Blog />
    </main>
  )
}
