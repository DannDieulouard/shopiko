import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/product/${id}`}>
        <Image src={image} alt={name} width={300} height={300} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
        <Button asChild className="w-full">
          <Link href={`/product/${id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  )
}

