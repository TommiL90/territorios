import Map from '@/components/Map'
import { ITerritory, territories } from '../../data/territories'
import dynamic from 'next/dynamic'

interface IPageProps {
  params: { id: string }
}

export const revalidate = 180

// export async function generateStaticParams() {
//     const response = await api.get<IPost[]>("/posts", {
//       params: {
//         _limit: 5,
//         _page: 1
//       }
//     });

//     return response.data.map(post => ({ id: post.id + "" }));
// }

// Import the appropriate type for Territory

export async function generateStaticParams() {
  const territoriesData = territories

  return territoriesData.map((territory: ITerritory) => ({
    id: territory.id.toString(),
    params: {
      _limit: 5,
      _page: 1,
    },
  }))
}

const DynamicMap = dynamic(() => import('../../components/Map'), {
  ssr: false,
  loading: () => <div>Loading Map...</div>,
})

const TerritoryPage = ({ params }: IPageProps) => {
  const territory: ITerritory = territories.find((e) => e.id === Number(params.id))!
  return (
    <div>
      <h1>{territory.title}</h1>
      <div>
        <DynamicMap />
      </div>
    </div>
  )
}

export default TerritoryPage
