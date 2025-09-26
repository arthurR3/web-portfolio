"use client"

import Link from "next/link"
import { NavbarListItem } from "./NavbarList"

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-10 w-full bg-[#000205] backdrop-blur-md border-b border-gray-500/10">
      <div className="container mx-auto flex h-[66px] items-center justify-between px-4 lg:px-0">
        <div className="relative">
          <div className="h-10 w-10 bg-[#00b162] hover:bg-green-700 transition-colors font-bold rounded-xl flex items-center justify-center shadow-lg">
            AR
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-white text-sm md:text-lg">
          {NavbarListItem.map((item) => (
            <Link href={item.url} key={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block bg-[#00b162] hover:bg-green-700 transition-colors px-4 py-2 rounded-lg">
            <Link href="/login" className="font-semibold text-sm md:text-lg">
              Descargar CV
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
