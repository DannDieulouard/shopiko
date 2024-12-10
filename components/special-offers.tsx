import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const offers = [
  { id: 1, title: "Winter Sale", description: "Get up to 50% off on selected items", badge: "Limited Time" },
  { id: 2, title: "Free Shipping", description: "On orders over $100", badge: "All Products" },
  { id: 3, title: "Bundle Discount", description: "Buy 3 items, get 1 free", badge: "Mix & Match" },
]

export function SpecialOffers() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {offers.map((offer) => (
        <Card key={offer.id} className="bg-white border-2 border-purple-200 transition-all duration-300 hover:border-purple-400 hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">{offer.title}</CardTitle>
            <Badge variant="secondary">{offer.badge}</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{offer.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

