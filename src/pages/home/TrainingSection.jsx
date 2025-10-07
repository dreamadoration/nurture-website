import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Package, Users, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"

const tokenPackages = [
  { id: "basic", name: "Basic", amount: 1000 },
  { id: "intermediate", name: "Intermediate", amount: 3000 },
  { id: "advance", name: "Advance", amount: 5000 },
]

export default function TrainingSection({ bgColor = "bg-gray-50" }) {
  const [days, setDays] = useState("")
  const [products, setProducts] = useState("")
  const [members, setMembers] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("basic")
  const [calculated, setCalculated] = useState(false)

  const PRICE_PER_DAY = 2500
  const PRICE_PER_PRODUCT = 200
  const PRICE_PER_MEMBER = 200

  const selectedTokenPackage = tokenPackages.find((pkg) => pkg.id === selectedPackage)

  const numDays = Number(days) || 0
  const numProducts = Number(products) || 0
  const numMembers = Number(members) || 0

  const tokenCost = selectedTokenPackage?.amount || 0
  const daysCost = numDays * PRICE_PER_DAY
  const productsCost = numProducts * PRICE_PER_PRODUCT
  const membersCost = numMembers * PRICE_PER_MEMBER
  const totalCost = tokenCost + daysCost + productsCost + membersCost

  const handleCalculate = () => {
    setCalculated(true)
  }

  return (
    <section id="training" className={`relative py-8 md:py-12 overflow-hidden ${bgColor}`}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center  mb-4 md:mb-8">
          <Badge className="bg-purple-100 rounded-[6px] text-purple-800 font-heebo hover:bg-purple-200 text-sm md:text-md px-4 py-1.5 mb-4">
            Expert Training Module
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heebo font-bold mb-4 text-gray-900">
            Customized Training{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Solutions
            </span>
          </h2>
          <p className="text-lg font-rubik text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Tailor your training packages according to your business needs and requirements. Each package includes a fixed token amount plus DPM-based costs for maximum flexibility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 pt-8">
          {/* Left: Inputs */}
          <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-heebo font-semibold text-gray-800">
                Customize Your Training Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Token Package */}
              <div className="space-y-2">
                <Label className="text-md font-medium flex items-center gap-2">
                  <Coins className="h-4 w-4 text-orange-500" />
                  Token Package
                </Label>
                <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                  <SelectTrigger className="w-full p-6 text-md border border-gray-300 rounded-lg bg-white text-gray-700 focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400">
                    <SelectValue placeholder="Choose a package" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {tokenPackages.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.id}>
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium">{pkg.name}</span>
                          <Badge variant="secondary" className="text-md rounded-full bg-gray-100 text-gray-800">
                            ₹{pkg.amount.toLocaleString()}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Days */}
              <div className="space-y-2">
                <Label className="text-md font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-purple-500" />
                  Training Days
                </Label>
                <Input
                  type="text"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  placeholder="Enter number of days"
                  className={`w-full p-6 text-md border border-gray-300 rounded-lg focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400 ${!days ? "text-gray-400" : "text-gray-800"}`}
                />
              </div>

              {/* Products */}
              <div className="space-y-2">
                <Label className="text-md font-medium flex items-center gap-2">
                  <Package className="h-4 w-4 text-pink-500" />
                  Products Covered
                </Label>
                <Input
                  type="text"
                  value={products}
                  onChange={(e) => setProducts(e.target.value)}
                  placeholder="Enter number of products"
                  className={`w-full p-6 text-md border border-gray-300 rounded-lg focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400 ${!products ? "text-gray-400" : "text-gray-800"}`}
                />
              </div>

              {/* Members */}
              <div className="space-y-2">
                <Label className="text-md font-medium flex items-center gap-2">
                  <Users className="h-4 w-4 text-green-500" />
                  Team Members
                </Label>
                <Input
                  type="text"
                  value={members}
                  onChange={(e) => setMembers(e.target.value)}
                  placeholder="Enter number of members"
                  className={`w-full p-6 text-md border border-gray-300 rounded-lg focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400 ${!members ? "text-gray-400" : "text-gray-800"}`}
                />
              </div>

              {/* Calculate Button */}
              <div className="pt-2">
                <Button
                  onClick={handleCalculate}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white cursor-pointer font-semibold text-lg py-6 rounded-[6px] shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Calculate Cost
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right: Breakdown */}
          <Card className="p-8 bg-white shadow-lg border border-gray-100 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-heebo font-semibold text-gray-800">
                {calculated ? "Cost Breakdown" : "Awaiting Calculation"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!calculated ? (
                <p className="text-gray-500 font-rubik text-lg mt-8 text-center">
                  Enter your details and click <span className="font-semibold text-blue-600">Calculate Cost</span> to see your estimate.
                </p>
              ) : (
                <>
                  <div className="mb-4 rounded-md border border-dashed border-gray-300 bg-gray-50 p-3 text-md leading-6 text-gray-700 font-rubik">
                    <span className="font-medium text-gray-900">Pricing Formula:</span>{" "}
                    Token + (Days × ₹2,500) + (Products × ₹200) + (Members × ₹200)
                  </div>

                  <div className="space-y-3 text-lg font-rubik text-gray-800">
                    <div className="flex justify-between">
                      <span>Token ({selectedTokenPackage?.name})</span>
                      <span className="font-medium">₹{tokenCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Days ({numDays} × ₹{PRICE_PER_DAY.toLocaleString()})</span>
                      <span className="font-medium">₹{daysCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Products ({numProducts} × ₹{PRICE_PER_PRODUCT})</span>
                      <span className="font-medium">₹{productsCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Members ({numMembers} × ₹{PRICE_PER_MEMBER})</span>
                      <span className="font-medium">₹{membersCost.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-300 font-heebo mt-4 pt-6">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Cost:</span>
                      <span className="text-gray-900">₹{totalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
