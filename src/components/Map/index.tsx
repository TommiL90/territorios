'use client'
import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap, Tooltip, Polygon } from 'react-leaflet'
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

interface IMapProps {
  zoom: number
  geolocation: LatLangExpression
  polygonCoors: number[][]
}

function ChangeView({ coords }: ChangeViewProps) {
  const map = useMap()
  map.setView([coords.lat, coords.lng], 17)
  return null
}

// const center = [-27.425786, -48.403245]

// const PolygonCoors = [
//   [-27.415565, -48.411421],
//   [-27.434488, -48.411802],
//   [-27.43438, -48.394232],
//   [-27.433644, -48.393082],
//   [-27.415783, -48.40351],
// ]

export default function Map({ geolocation, polygonCoors, zoom }: IMapProps) {
  const [geoData, setGeoData] = useState<LatLangExpression>(geolocation) // ex. { lat: -27.425786, lng: -48.403245 }
  const center = { lat: geoData.lat, lng: geoData.lng }

  const icon = divIcon({
    className: 'icono-personalizado',
    html: ReactDOMServer.renderToString(<FaMapMarker size={24} color='red' />),
  })

  return (
    <MapContainer
      center={center}
      zoom={zoom ? zoom : 17}
      minZoom={zoom ? zoom : 17}
      scrollWheelZoom={true}
      style={{ height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {geoData.lat && geoData.lng && (
        <>
          <Marker position={center} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Polygon
            pathOptions={{ color: 'purple' }}
            positions={polygonCoors.map(([lat, lng]) => [lat, lng])}
          >
            <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
          </Polygon>
        </>
      )}

      <ChangeView coords={center} />
    </MapContainer>
  )
}
