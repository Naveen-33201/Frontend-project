import React from 'react'

export default function VirtualTour({ artworks }){
  return (
    <div className="p-6">
      <h2 className="font-serif text-2xl mb-4">Virtual Tour</h2>
      <p className="text-gray-600 mb-6">An immersive 3D-like walkthrough simulator (placeholder). In a real app this would use WebGL / Three.js / A-Frame for an interactive experience.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map(a=> (
          <div key={a.id} className="p-4 bg-white rounded shadow-sm">
            <img src={a.image} className="w-full h-56 object-cover rounded" />
            <div className="mt-3">
              <div className="font-semibold">{a.title}</div>
              <div className="text-xs text-gray-500">{a.artist}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
