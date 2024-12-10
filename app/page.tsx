import { Hero } from '../components/hero'
import { ProductCard } from '../components/product-card'
import { SpecialOffers } from '../components/special-offers'
import { Button } from "@/components/ui/button"

const featuredProducts = [
  { id: 1, name: "Wireless Earbuds", price: 79.99, image: "/placeholder.svg?height=300&width=300", category: "Electronics" },
  { id: 2, name: "Smart Watch", price: 199.99, image: "/placeholder.svg?height=300&width=300", category: "Electronics" },
  { id: 3, name: "4K Ultra HD TV", price: 599.99, image: "/placeholder.svg?height=300&width=300", category: "Electronics" },
  { id: 4, name: "Laptop Pro", price: 1299.99, image: "/placeholder.svg?height=300&width=300", category: "Electronics" },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <a href="/products">View All Products</a>
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

