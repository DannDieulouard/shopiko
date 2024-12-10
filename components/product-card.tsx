import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  category: string
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link href={`/product/${id}`}>
        <div className="relative h-64">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/category/${category.toLowerCase().replace(/ /g, '-')}`}>
          <span className="text-xs text-gray-500 uppercase tracking-wider">{category}</span>
        </Link>
        <h3 className="text-lg font-semibold mt-2 mb-2">
          <Link href={`/product/${id}`} className="text-gray-800 hover:text-purple-600 transition-colors">
            {name}
          </Link>
        </h3>
        <p className="text-purple-600 font-bold mb-4">${price.toFixed(2)}</p>
        <Button className="w-full flex items-center justify-center">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </div>
    </div>
  )
}

