'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuth } from './auth-provider'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-purple-600">Shopiko</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-purple-600 transition-colors">Products</Link>
            <Link href="/categories" className="text-gray-600 hover:text-purple-600 transition-colors">Categories</Link>
            <Link href="/deals" className="text-gray-600 hover:text-purple-600 transition-colors">Deals</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <form className="relative">
              <Input type="search" placeholder="Search products..." className="pl-10 pr-4 py-2 rounded-full bg-gray-100" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </form>
            <Link href="/cart" className="text-gray-600 hover:text-purple-600 transition-colors">
              <ShoppingBag className="h-6 w-6" />
            </Link>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center text-gray-600 hover:text-purple-600">
                    <User className="h-6 w-6 mr-2" />
                    <span>{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/account">My Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/account/orders">My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button variant="ghost" className="text-gray-600 hover:text-purple-600">Login</Button>
              </Link>
            )}
          </div>
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 space-y-4">
            <Link href="/products" className="block text-gray-600 hover:text-purple-600 transition-colors">Products</Link>
            <Link href="/categories" className="block text-gray-600 hover:text-purple-600 transition-colors">Categories</Link>
            <Link href="/deals" className="block text-gray-600 hover:text-purple-600 transition-colors">Deals</Link>
            <form className="relative">
              <Input type="search" placeholder="Search products..." className="pl-10 pr-4 py-2 rounded-full bg-gray-100 w-full" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </form>
            <Link href="/cart" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
              <ShoppingBag className="h-6 w-6 mr-2" />
              <span>Cart</span>
            </Link>
            {user ? (
              <>
                <Link href="/account" className="block text-gray-600 hover:text-purple-600 transition-colors">My Account</Link>
                <Link href="/account/orders" className="block text-gray-600 hover:text-purple-600 transition-colors">My Orders</Link>
                <Button variant="ghost" className="w-full justify-start" onClick={logout}>Logout</Button>
              </>
            ) : (
              <Link href="/login">
                <Button variant="ghost" className="w-full justify-start">Login</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

