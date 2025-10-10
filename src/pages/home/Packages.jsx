import { useState } from "react"
import { CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const packages = [
  {
    id: "demo",
    name: "Demo",
    price: "Free",
    description: "Includes access for 2 users and 2 products",
    popular: false,
    features: [
      {
        heading: "Pharmaceutical Knowledge",
        points: ["Product Knowledge", "Therapeutic Area Knowledge"],
      },
      {
        heading: "In-Clinic Effectiveness",
        points: [
          "Effective Communication & Presentation skills",
          "Basic Working Etiquettes",
          "Roles and Responsibilities",
        ],
      },
    ],
  },
  {
    id: "basic",
    name: "Basic",
    price: "₹1000",
    tokenAmount: "Token Amount",
    popular: false,
    features: [
      {
        heading: "Pharmaceutical Knowledge",
        points: ["Product Knowledge", "Therapeutic Area Knowledge"],
      },
      {
        heading: "In-Clinic Effectiveness",
        points: [
          "Effective Communication & Presentation skills",
          "Basic Working Etiquettes",
          "Roles and Responsibilities",
        ],
      },
      {
        heading: "Understanding of Market and Competitor Landscape",
      },
      {
        heading: "Effective Reporting and Feedback",
      },
    ],
  },
  {
    id: "intermediate",
    name: "Intermediate",
    price: "₹3000",
    tokenAmount: "Token Amount",
   
    popular: true,
    features: [
      {
        heading: "Pharmaceutical & Therapeutic Knowledge",
        points: ["Product Knowledge", "Therapeutic Area Understanding"],
      },
      {
        heading: "In-Clinic Effectiveness",
        points: [
          "Effective Communication & Presentation skills",
          "Basic Working Etiquettes",
          "Roles and Responsibilities",
        ],
      },
      {
        heading: "Clinical Data & Evidence-Based Selling",
        points: ["Interpreting Clinical Data", "Engaging in Scientific Dialogue"],
      },
      {
        heading: "Customer Relationship & Key Account Management",
        points: [
          "Building Long-Term Relationships",
          "HCP Segmentation & KAM",
          "Sales Cycle & Territory Management",
        ],
      },
      { heading: "Market Awareness & Competitor Analysis" },
      { heading: "Effective Reporting & Feedback Skills" },
    ],
  },
  {
    id: "advance",
    name: "Advance",
    price: "₹5000",
    tokenAmount: "Token Amount",
    popular: false,
    features: [
      {
        heading: "Pharmaceutical & Therapeutic Knowledge",
        points: ["Product Knowledge", "Therapeutic Area Expertise"],
      },
      {
        heading: "In-Clinic Effectiveness",
        points: [
          "Effective Communication & Presentation skills",
          "Basic Working Etiquettes",
          "Roles and Responsibilities",
        ],
      },
      {
        heading: "Clinical Data & Evidence-Based Selling",
        points: ["Interpreting Clinical Data", "Engaging in Scientific Dialogue"],
      },
      {
        heading: "Sales & Communication Mastery",
        points: ["Effective Communication", "Presentation Skills"],
      },
      {
        heading: "Customer Relationship & Key Account Management",
        points: [
          "Building Long-Term Relationships",
          "HCP Segmentation",
          "Key Account Management (KAM)",
          "Sales Cycle Management",
        ],
      },
      {
        heading: "Soft Skills & Professional Development",
        points: [
          "Time & Territory Management",
          "Conflict Resolution",
          "Ethical Selling & Brand Representation",
        ],
      },
      {
        heading: "Handling Challenges & Negotiations",
        points: ["Crisis Management", "Objection Handling & Negotiation Skills"],
      },
      {
        heading: "Market Strategy & Competitive Edge",
        points: ["Market Access Strategy", "Competitor Landscape Awareness"],
      },
      {
        heading: "Continuous Learning & Team Development",
        points: ["Regular Refresher Courses", "Motivational & Team-Building Activities"],
      },
      { heading: "Effective Reporting & Feedback" },
    ],
  },
]

export default function Packages() {
  const [expandedPackages, setExpandedPackages] = useState(new Set())

  const togglePackage = (id) => {
    const newExpanded = new Set(expandedPackages)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedPackages(newExpanded)
  }

  return (
   <section className="py-10 md:py-20 bg-gray-50"  id ="packages">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-16">
          <Badge className="-full md:w-auto rounded-[6px] bg-purple-100 text-purple-800 font-heebo hover:bg-purple-200 text-sm md:text-md px-4 py-1.5 mb-4">
            Meeting all your pharma training needs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heebo font-bold mb-6 text-gray-900">
            Our Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Packages
            </span>
          </h2>
          <p className="text-lg md:text-xl font-rubik text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect solution for your team with our tailored packages designed to meet
            diverse professional needs.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
          {packages.map((pkg) => {
            const isExpanded = expandedPackages.has(pkg.id)

            return (
              <Card
                key={pkg.id}
                className={`relative h-[520px] flex flex-col transition-all sm:pt-4 duration-300 hover:shadow-xl border-[#ddd] ${
                  pkg.popular ? "ring-2 sm:pt-4 ring-cyan-500 shadow-lg scale-105" : "hover:scale-102"
                }`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <Badge className="absolute -top-3 rounded-[6px] left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white px-4 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </Badge>
                )}

                {/* Header */}
                <CardHeader className="flex-none text-center pb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-0">{pkg.name}</h3>
                  <div className="mb-0">
                      {pkg.tokenAmount && (
                      <div className="text-sm text-cyan-600 font-medium">{pkg.tokenAmount}</div>
                    )}
                    <div className="text-3xl font-bold text-cyan-600">{pkg.price}</div>
      
                  </div>
                  {pkg.description && (
             <p className="text-sm text-gray-600 ">{pkg.description}</p>
                  )}
                 
                </CardHeader>

                {/* Scrollable content */}
                <CardContent className="flex-1 min-h-0 px-4 py-2">
                  <div
                    className={
                      isExpanded
                        ? "h-full overflow-auto pr-2"
                        : "max-h-68 overflow-hidden pr-2"
                    }
                  >
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">{feature.heading}</h4>
                        {feature.points && (
                          <ul className="space-y-2">
                            {feature.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm font-rubik">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Footer button */}
                <CardFooter className="pt-4 flex-none">
                  <Button
                    onClick={() => togglePackage(pkg.id)}
                    variant={pkg.popular ? "default" : "outline"}
                    className={`w-full transition-all duration-200 rounded-[6px] ${
                      pkg.popular
                        ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                        : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
                    }`}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
