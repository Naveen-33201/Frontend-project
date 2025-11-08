import React from 'react'
const Roles = { ADMIN: 'Admin', ARTIST: 'Artist', VISITOR: 'Visitor', CURATOR: 'Curator' }
export default function SideMenu({ active, onNavigate, role }){
  const common = [ { id: 'home', label: 'Home' }, { id: 'gallery', label: 'Gallery' }, { id: 'tour', label: 'Virtual Tour' } ]
  const adminLinks = [ { id: 'admin', label: 'Admin Panel' }, { id: 'users', label: 'Manage Users' }, { id: 'settings', label: 'Settings' } ]
  const artistLinks = [ { id: 'artistDash', label: 'Artist Dashboard' }, { id: 'upload', label: 'Upload Artwork' }, { id: 'sales', label: 'Sales' } ]
  const curatorLinks = [ { id: 'curator', label: 'Curator Panel' }, { id: 'exhibitions', label: 'Exhibitions' }, { id: 'history', label: 'Cultural History' } ]

  let links = [...common]
  if(role === Roles.ADMIN) links = links.concat(adminLinks)
  if(role === Roles.ARTIST) links = links.concat(artistLinks)
  if(role === Roles.CURATOR) links = links.concat(curatorLinks)

  return (
    <aside className="w-72 bg-white border-r border-gray-100 min-h-[calc(100vh-64px)] p-4 hidden md:block">
      <div className="mb-6">
        <h2 className="text-lg font-serif">Dashboard</h2>
        <p className="text-xs text-gray-500">Role: {role}</p>
      </div>
      <nav className="flex flex-col gap-2">
        {links.map(l=> (
          <button key={l.id} onClick={() => onNavigate(l.id)} className={`text-left p-3 rounded-md hover:bg-gray-50 ${active===l.id ? 'bg-gray-50' : ''}`}>
            {l.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
