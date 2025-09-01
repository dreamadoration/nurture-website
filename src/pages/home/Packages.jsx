import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import React from 'react'

const PackagesData = [
  {
    name: "Demo",
    price: "Free",
    description: "Perfect for individuals or small teams exploring Nurtue’s pharmacy learning tools.",
    features: [
      {
        heading: "Pharmaceutical Knowledge",
        points: ["Basic product knowledge", "Therapeutic area overview"],
      },
      {
        heading: "Sales & Communication",
        points: ["Effective communication", "Presentation basics"],
      },
      {
        heading: "Clinical Insights",
        points: ["Understanding clinical data"],
      },
      {
        heading: "Customer Engagement",
        points: ["Intro to relationship building"],
      },
      {
        heading: "Support",
        points: ["Community forums & FAQs"],
      },
    ],
    popular: false,
  },
  {
    name: "Basic",
    price: "₹1000/month",
    description: "Essential features for small practices to grow with structured pharma learning.",
    features: [
      {
        heading: "Pharmaceutical Knowledge",
        points: ["Product expertise", "Therapeutic knowledge"],
      },
      {
        heading: "Sales & Communication",
        points: ["Sales cycle awareness", "Presentation skills"],
      },
      {
        heading: "Clinical Insights",
        points: ["Interpreting data", "Evidence-based selling"],
      },
      {
        heading: "Market Awareness",
        points: ["Competitor overview"],
      },
      {
        heading: "Reporting",
        points: ["Basic feedback tools"],
      },
    ],
    popular: false,
  },
  {
    name: "Intermediate",
    price: "₹3000/month",
    description: "Most popular plan — advanced tools for professionals to drive sales and customer engagement.",
    features: [
      {
        heading: "Pharmaceutical Knowledge",
        points: ["In-depth product expertise", "Therapeutic specialization"],
      },
      {
        heading: "Sales & Communication",
        points: ["Advanced communication", "Sales cycle mastery"],
      },
      {
        heading: "Customer Engagement",
        points: ["Key account management", "Long-term partnerships"],
      },
      {
        heading: "Clinical Insights",
        points: ["Data interpretation", "Scientific dialogue"],
      },
      {
        heading: "Market Awareness",
        points: ["Competitive trends", "Territory management"],
      },
      {
        heading: "Reporting",
        points: ["Detailed tracking & feedback"],
      },
    ],
    popular: true,
  },
  {
    name: "Advance",
    price: "₹5000/month",
    description: "Enterprise-grade solution with compliance, analytics, integrations, and premium support.",
    features: [
      {
        heading: "Enterprise Platform",
        points: ["Unlimited users", "Multi-facility support", "Scalable infrastructure"],
      },
      {
        heading: "Compliance Suite",
        points: ["Regulatory automation", "Custom workflows", "Change management"],
      },
      {
        heading: "Premium Support",
        points: ["24/7 assistance", "Dedicated account manager", "On-site training"],
      },
      {
        heading: "Analytics",
        points: ["Custom dashboards", "AI-powered insights", "Executive reports"],
      },
      {
        heading: "Security & Integrations",
        points: ["Advanced protocols", "Unlimited integrations", "Custom APIs"],
      },
    ],
    popular: false,
  },
];


export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <Badge className="bg-purple-100 text-purple-800 font-heebo hover:bg-purple-200 text-sm font-semibold px-4 py-1.5 mb-4">
              Choose Your Perfect Plan
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heebo font-bold mb-6 text-gray-900">
            Our Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}Packages
            </span>
          </h2>
            <p className="text-lg md:text-xl font-rubik text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect solution for your healthcare practice with our tailored packages designed to meet
              diverse professional needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {console.log(PackagesData)}
            {PackagesData.map((pkg, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  pkg.popular
                    ? "border-2 border-cyan-500 shadow-xl scale-105 bg-gradient-to-b from-cyan-50 to-white"
                    : "border border-gray-200 hover:border-gray-300"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="font-heebo bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-heebo font-bold text-gray-900">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-2xl font-heebo font-bold text-cyan-600">{pkg.price}</div>
                    <div className="text-sm  font-rubik text-gray-500 font-medium">{pkg.period}</div>
                  </div>
                  <CardDescription className="font-rubik text-gray-600 font-medium">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-5">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="space-y-2">
                        <h4 className="font-bold text-sm text-gray-900 border-b border-gray-100 pb-2">
                          {feature.heading}
                        </h4>
                        <ul className="space-y-1 ml-1">
                          {feature.points.map((point, pointIdx) => (
                            <li key={pointIdx} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600 leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  {/* <Button
                    className={`w-full font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
                        : "border-2 border-gray-300 text-gray-700 hover:border-cyan-500 hover:text-cyan-600 bg-white"
                    }`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
