import { territories } from '@/data/territories'
import Link from 'next/link'

export interface ITerritory {
  id: number
  title: string
  center: {
    lat: number
    lng: number
  }
  poligono: number[][]
}

export default function Home() {
  return (
    <main className=''>
      <h1>Territorios</h1>
      <ul>
        {territories.map((e: ITerritory) => (
          <li key={e.id}>
            <Link href={`/${e.id}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
