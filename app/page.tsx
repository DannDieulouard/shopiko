import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ProductCard } from './components/product-card'
import { SpecialOffers } from './components/special-offers'

const featuredProducts = [
  { id: 1, name: "Wireless Earbuds", price: 79.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "Smart Watch", price: 199.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "4K Ultra HD TV", price: 599.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 4, name: "Laptop Pro", price: 1299.99, image: "/placeholder.svg?height=300&width=300" },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Shopiko</h1>
              <p className="text-xl mb-6">Discover amazing deals on a wide range of products.</p>
              <Button asChild>
                <Link href="/products">Shop Now</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg?height=400&width=600" alt="Hero Image" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Special Offers</h2>
          <SpecialOffers />
        </div>
      </section>
    </div>
  )
}

