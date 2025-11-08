import React from 'react'

export default function TopNav({ role, onOpenMenu, onLogout }){
  return (
    <header className="w-full bg-white border-b border-gray-100 p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button onClick={onOpenMenu} className="p-2 rounded-md hover:bg-gray-100">☰</button>
        <div className="flex items-baseline gap-2">
          <h1 className="text-xl font-serif">Museo</h1>
          <span className="text-xs text-gray-400">Virtual Gallery</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a className="hover:text-gray-900">Exhibitions</a>
          <a className="hover:text-gray-900">Tours</a>
          <a className="hover:text-gray-900">About</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-3 py-1 text-sm rounded-md border border-gray-200">Explore</button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-600">{role?.[0]}</div>
            <div className="hidden sm:block text-sm text-gray-700">{role}</div>
          </div>
          <button onClick={onLogout} className="text-sm text-gray-500 hover:text-gray-900">Logout</button>
        </div>
      </div>
    </header>
  )
}
