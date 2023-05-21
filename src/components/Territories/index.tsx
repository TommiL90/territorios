import { ITerritory, territories } from "@/data/territories"
import Container from "../Container"
import Link from "next/link"

const Territories = () => {
  return (
    <Container>
    <ul>
      {territories.map((e: ITerritory) => (
        <li key={e.id}>
          <Link href={`/${e.id}`}>{e.title}</Link>
        </li>
      ))}
    </ul>
  </Container>
  )
}

export default Territories