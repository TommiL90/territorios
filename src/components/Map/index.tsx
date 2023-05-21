'use client'
import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap, Tooltip, Rectangle, Polygon } from 'react-leaflet'
import { FaMapMarker } from 'react-icons/fa'
import 'leaflet/dist/leaflet.css'
import { divIcon } from 'leaflet'
import ReactDOMServer from 'react-dom/server'

interface LatLangExpression {
  lat: number
  lng: number
}

interface ChangeViewProps {
  coords: LatLangExpression
}

function ChangeView({ coords }: ChangeViewProps) {
  const map = useMap()
  map.setView([coords.lat, coords.lng], 17)
  return null
}

const center = [-27.437166, -48.391627]

const PolygonCoors = [
  [-27.436327, -48.393192],
  [-27.438480, -48.393131],
  [-27.438566, -48.391615],
  [-27.438846, -48.390341],
  [-27.437231, -48.389334],
  [-27.435810, -48.390826]
]

const territorios = [
  {
    id: 1,
    nombre: 'territorio 1',
    centro: { lat: -27.436649, lng: -48.406116 },
    poligono: [
      [-27.434474, -48.411853],
      [-27.438738, -48.412617],
      [-27.438275, -48.410676],
      [-27.438059, -48.409039],
      [-27.437575, -48.40016],
      [-27.436757, -48.400051],
      [-27.436401, -48.399893],
      [-27.435637, -48.399747],
      [-27.434431, -48.399893],
    ],
    ultimoCensoCompletado: null,
    ultimaPrediCompletada: null,
  },
  {
    id: 2,
    nombre: 'territorio 2',
    centro: { lat: -27.435648, lng: -48.396036 },
    poligono: [
      [-27.434464, -48.399917],
      [-27.435648, -48.399735],
      [-27.436218, -48.399808],
      [-27.436983, -48.400123],
      [-27.437596, -48.400172],
      [-27.437360, -48.397916],
      [-27.435637, -48.391099],
      [-27.433660, -48.393036],
      [-27.434398, -48.394211],
      [-27.434494, -48.397222]
    ],
    ultimoCensoCompletado: null,
    ultimaPrediCompletada: null,
  },
  {
    id: 3,
    nombre: 'territorio 3',
    centro: { lat: -27.437166, lng: -48.391627 },
    poligono: [
      [-27.436327, -48.393192],
      [-27.438480, -48.393131],
      [-27.438566, -48.391615],
      [-27.438846, -48.390341],
      [-27.437231, -48.389334],
      [-27.435810, -48.390826]
    ],
    ultimoCensoCompletado: null,
    ultimaPrediCompletada: null,
  },
]

export default function Map() {
  const [geoData, setGeoData] = useState<LatLangExpression>({ lat: -27.437166, lng: -48.391627 })
  const center = { lat: geoData.lat, lng: geoData.lng }

  const icon = divIcon({
    className: 'icono-personalizado',
    html: ReactDOMServer.renderToString(<FaMapMarker size={24} color='red' />),
  })

  return (
    <MapContainer
      center={center}
      zoom={17}
      minZoom={17}
      scrollWheelZoom={true}
      style={{ height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {geoData.lat && geoData.lng && (
        <Marker position={center} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
       <Polygon pathOptions={{ color: 'purple' }} positions={PolygonCoors.map(([lat, lng]) => [lat, lng])} >
      <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
    </Polygon>
      <ChangeView coords={center} />
    </MapContainer>
  )
}
