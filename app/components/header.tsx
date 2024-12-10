'use client'

import Link from 'next/link'
import { ShoppingCart, Search, User, Menu } from 'lucide-react'
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

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-purple-600">Shopiko</Link>
        <div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
          <form className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Search products..." className="bg-gray-100" />
            <Button type="submit" variant="ghost">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="flex items-center text-gray-600 hover:text-purple-600">
            <ShoppingCart className="h-6 w-6" />
            <span className="ml-2 hidden md:inline">Cart</span>
          </Link>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-gray-600 hover:text-purple-600">
                  <User className="h-6 w-6" />
                  <span className="ml-2 hidden md:inline">{user.name}</span>
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
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}

