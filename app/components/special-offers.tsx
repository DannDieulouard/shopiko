import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const offers = [
  { id: 1, title: "Summer Sale", description: "Get up to 50% off on selected items", color: "bg-red-100" },
  { id: 2, title: "Free Shipping", description: "On orders over $100", color: "bg-blue-100" },
  { id: 3, title: "Bundle Discount", description: "Buy 3 items, get 1 free", color: "bg-green-100" },
]

export function SpecialOffers() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {offers.map((offer) => (
        <Card key={offer.id} className={`${offer.color} border-none`}>
          <CardHeader>
            <CardTitle className="text-xl font-bold">{offer.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{offer.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

