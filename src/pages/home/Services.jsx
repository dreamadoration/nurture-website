import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Award, BookOpen, Database, Heart, Microscope, Shield, Target, TrendingUp, User, Users } from 'lucide-react'
import React from 'react'

const services = [
                  {
                    icon: Microscope,
                    title: "Products Briefing",
                    description:
                      "Detailed training on product features, benefits, composition, and therapeutic applications to ensure reps communicate effectively with healthcare professionals.",
                    color: "cyan",
                    gradient: "from-cyan-500 to-teal-500",
                    bgGradient: "from-cyan-50 to-cyan-100",
                  },
                  {
                    icon: TrendingUp,
                    title: "Sales Training",
                    description:
                      "Practical training focused on developing persuasive selling techniques, objection handling, and closing strategies tailored for the pharma sector.",
                    color: "blue",
                    gradient: "from-blue-500 to-indigo-500",
                    bgGradient: "from-blue-50 to-blue-100",
                  },
                  {
                    icon: Shield,
                    title: "Regulatory Compliance",
                    description:
                      "Guidance on adhering to pharmaceutical regulations, industry standards, and ethical practices to ensure legal and professional compliance.",
                    color: "green",
                    gradient: "from-green-500 to-emerald-500",
                    bgGradient: "from-green-50 to-green-100",
                  },
                  {
                    icon: Users,
                    title: "Soft Skill Development",
                    description:
                      "Enhancing communication, interpersonal skills, confidence, and emotional intelligence to build strong relationships with clients and colleagues.",
                    color: "purple",
                    gradient: "from-purple-500 to-violet-500",
                    bgGradient: "from-purple-50 to-purple-100",
                  },
                  {
                    icon: Target,
                    title: "Sales Strategies & Techniques",
                    description:
                      "Training on modern sales tactics including territory planning, data-driven selling, and goal-setting to boost performance.",
                    color: "orange",
                    gradient: "from-orange-500 to-red-500",
                    bgGradient: "from-orange-50 to-orange-100",
                  },
                  {
                    icon: Database,
                    title: "CRM Training",
                    description:
                      "Hands-on training in using Customer Relationship Management tools to manage leads, track interactions, and build long-term customer engagement.",
                    color: "indigo",
                    gradient: "from-indigo-500 to-blue-500",
                    bgGradient: "from-indigo-50 to-indigo-100",
                  },
                  {
                    icon: Award,
                    title: "Field Etiquettes",
                    description:
                      "Best practices for professional behaviour, punctuality, dress code, and approach when visiting clinics, hospitals, or chemists.",
                    color: "pink",
                    gradient: "from-pink-500 to-rose-500",
                    bgGradient: "from-pink-50 to-pink-100",
                  },
                  {
                    icon: Heart,
                    title: "In-Clinic Effectiveness",
                    description:
                      "Coaching to maximize impact during limited in-clinic interaction time, focusing on confidence, clarity, and value-driven conversations.",
                    color: "teal",
                    gradient: "from-teal-500 to-cyan-500",
                    bgGradient: "from-teal-50 to-teal-100",
                  },
                ]
export default function Services() {
  return (
   <section id="services" className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-950 relative overflow-hidden">
  {/* Decorative subtle pattern */}
  <div className="absolute inset-0 opacity-10">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    ></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 text-sm font-semibold shadow-lg font-rubik">
        <Shield className="w-4 h-4 mr-2" />
        Comprehensive Solutions
      </Badge>
      <h2 className="text-4xl lg:text-5xl font-heebo font-bold text-white mb-6">
        Our Pharmaceutical Services
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl font-rubik mx-auto leading-relaxed">
        Empowering pharma companies with tailored training and expert consulting to overcome challenges, streamline operations, and accelerate growth.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <Card
          key={index}
          className="group border-0 bg-white shadow-lg rounded-2xl relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <CardHeader className="pb-4 relative z-10">
            <div className="relative mb-4">
              <div
                className={`bg-gradient-to-r ${service.gradient} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} w-14 h-14 rounded-2xl opacity-20 blur-xl group-hover:scale-150 transition-all duration-500`}
              ></div>
            </div>
            <CardTitle className="text-lg font-heebo font-bold text-gray-900 leading-tight">
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <p className="text-gray-600 font-rubik leading-relaxed text-sm">
              {service.description}
            </p>

            <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <Button
                variant="outline"
                size="sm"
                className={`border-2 text-${service.color}-600 font-rubik hover:bg-gradient-to-r ${service.gradient} hover:text-white hover:border-transparent transition-all duration-300 text-xs`}
              >
                Learn More
                <ArrowRight className="ml-1 w-3 h-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

  )
}
