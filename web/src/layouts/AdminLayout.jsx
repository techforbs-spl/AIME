import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function navLinkClass(active){
  return `px-3 py-2 rounded-lg text-sm font-medium ${active ? 'bg-white text-black' : 'text-white/80 hover:text-white hover:bg-white/10'}`
}

export default function AdminLayout(){
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">🤖</div>
            <div className="text-lg font-semibold">AIME Admin</div>
          </div>
          <nav className="flex items-center gap-1">
            <NavLink end to="/admin" className={({isActive})=>navLinkClass(isActive)}>Dashboard</NavLink>
            <NavLink to="/admin/personas" className={({isActive})=>navLinkClass(isActive)}>Personas</NavLink>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-6">
        <Outlet />
      </main>
    </div>
  )
}
