import React, { useState } from 'react'
import TopNav from './components/TopNav'
import SideMenu from './components/SideMenu'
import HomeDashboard from './pages/HomeDashboard'
import GalleryPage from './pages/GalleryPage'
import VirtualTour from './pages/VirtualTour'
import ArtworkDetailModal from './components/ArtworkDetailModal'
import { mockArtworks } from './data/mock'
import Login from './pages/Login'

export default function App(){
  const [role, setRole] = useState(null) // null means not logged in
  const [menuOpen, setMenuOpen] = useState(true)
  const [route, setRoute] = useState('home')
  const [selected, setSelected] = useState(null)

  const openArtwork = (art) => setSelected(art)
  const closeArtwork = () => setSelected(null)

  if(!role){
    return <Login onLogin={(r)=>{ setRole(r); setRoute('home') }} />
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <TopNav role={role} onOpenMenu={() => setMenuOpen(!menuOpen)} onLogout={() => setRole(null)} />
      <div className="flex">
        {menuOpen && <SideMenu active={route} onNavigate={setRoute} role={role} />}
        <main className="flex-1">
          {route === 'home' && <HomeDashboard featured={mockArtworks.slice(0,2)} onOpenArtwork={openArtwork} />}
          {route === 'gallery' && <GalleryPage artworks={mockArtworks} onOpen={openArtwork} />}
          {route === 'tour' && <VirtualTour artworks={mockArtworks} />}
          {route === 'admin' && <div className="p-6">Admin Panel (placeholder)</div>}
          {route === 'artistDash' && <div className="p-6">Artist Dashboard (placeholder)</div>}
          {route === 'curator' && <div className="p-6">Curator Panel (placeholder)</div>}
        </main>
      </div>

      <ArtworkDetailModal art={selected} onClose={closeArtwork} onBuy={(a)=>alert(`Buy ${a.title} - ${a.artist}`)} />
    </div>
  )
}
