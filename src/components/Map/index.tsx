'use client'
import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface LatLangExpression {
  lat: number
  lng: number
}

interface ChangeViewProps {
  coords: LatLangExpression
}

function ChangeView({ coords }: ChangeViewProps) {
  const map = useMap()
  map.setView([coords.lat, coords.lng], 12)
  return null
}

export default function Map() {
  const [geoData, setGeoData] = useState<LatLangExpression>({ lat: -27.4466, lng: -48.3839 })
  const center = { lat: geoData.lat, lng: geoData.lng }

  return (
    <MapContainer center={center} zoom={20} scrollWheelZoom={true} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {geoData.lat && geoData.lng && (
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
      <ChangeView coords={center} />
    </MapContainer>
  )
}
