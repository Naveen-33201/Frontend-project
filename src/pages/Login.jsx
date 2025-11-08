import React, { useState } from 'react'

const Roles = ['Admin','Artist','Visitor','Curator']

export default function Login({ onLogin }){
  const [role, setRole] = useState('Visitor')
  const [name, setName] = useState('')

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--beige)] p-6">
      <div className="max-w-md w-full bg-white rounded-2xl p-6 shadow-lg">
        <h1 className="font-serif text-2xl mb-2">Welcome to Museo</h1>
        <p className="text-sm text-gray-500 mb-4">Sign in with your role to continue.</p>

        <label className="block text-xs text-gray-600">Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} className="w-full p-3 rounded-md border my-2" placeholder="Your name" />

        <label className="block text-xs text-gray-600 mt-2">Role</label>
        <select value={role} onChange={e=>setRole(e.target.value)} className="w-full p-3 rounded-md border my-2">
          {Roles.map(r=> <option key={r} value={r}>{r}</option>)}
        </select>

        <div className="mt-4 flex gap-2">
          <button onClick={()=>onLogin(role)} className="flex-1 bg-[var(--accent-deep)] text-white p-3 rounded-md">Sign in</button>
          <button onClick={()=>{ setName(''); setRole('Visitor') }} className="px-4 py-3 border rounded-md">Reset</button>
        </div>

        <p className="text-xs text-gray-400 mt-4">This demo includes simple client-side role selection for preview. Replace with real auth in production.</p>
      </div>
    </div>
  )
}
