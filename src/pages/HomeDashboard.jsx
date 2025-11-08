import React from 'react'
import ArtworkCard from '../components/ArtworkCard'

export default function HomeDashboard({ featured, onOpenArtwork }){
  return (
    <div className="space-y-6 p-6">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-gradient-to-tr from-white via-gray-50 to-beige rounded-xl p-6 shadow-sm border border-gray-50">
          <h2 className="font-serif text-3xl mb-2">Featured Exhibition</h2>
          <p className="text-gray-600">A curated glimpse of our current highlights. Take the virtual tour or explore pieces below.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map(a=> (
              <div key={a.id} className="p-4 rounded-md bg-white border"> 
                <div className="flex items-start gap-4">
                  <img src={a.image} className="w-24 h-16 object-cover rounded" />
                  <div>
                    <div className="font-semibold">{a.title}</div>
                    <div className="text-xs text-gray-500">{a.artist}</div>
                    <div className="mt-2 text-sm">{new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(a.price)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-50">
          <h3 className="font-serif text-lg">Quick Actions</h3>
          <div className="mt-4 grid gap-3">
            <button className="text-left p-3 rounded-md hover:bg-gray-50">Start Virtual Tour</button>
            <button className="text-left p-3 rounded-md hover:bg-gray-50">Organize Exhibition</button>
            <button className="text-left p-3 rounded-md hover:bg-gray-50">Upload Artwork</button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-serif text-xl mb-4">Ongoing Exhibitions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...featured].map(a=> (
            <ArtworkCard key={a.id} art={a} onOpen={onOpenArtwork} />
          ))}
        </div>
      </section>
    </div>
  )
}
