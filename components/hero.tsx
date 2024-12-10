import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Amazing Deals at Shopiko</h1>
          <p className="text-xl mb-8">Your one-stop destination for trendy products and unbeatable prices.</p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

