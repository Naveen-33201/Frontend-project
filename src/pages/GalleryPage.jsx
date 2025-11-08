import React from 'react'
import ArtworkCard from '../components/ArtworkCard'

export default function GalleryPage({ artworks, onOpen }){
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-2xl">Gallery</h3>
        <div className="text-sm text-gray-500">Grid view • Sort • Filters</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map(a=> <ArtworkCard key={a.id} art={a} onOpen={onOpen} />)}
      </div>
    </div>
  )
}
