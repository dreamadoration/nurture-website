"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Enhanced dot pattern */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            animation: "float 20s ease-in-out infinite",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Enhanced introduction */}
          <div className="space-y-8">
             <Badge className="mb-4 font-heebo text-md bg-blue-100 text-blue-800 hover:bg-blue-200">We exist to spark change, empower minds, and build excellence</Badge>
             <h3 className="text-4xl font-bold font-heebo text-slate-900 leading-tight">
              Welcome to NURTURE<br/>
              <span className=" text-md font-heebo text-blue-600"> Your Partner in Pharma Excellence</span>
            </h3>
              <p className="text-xl font-rubik text-slate-600 leading-relaxed">
                At NURTURE, we are passionate about driving success in the pharmaceutical industry through
                <span className="font-semibold text-slate-700"> specialized training</span>,
                <span className="font-semibold text-slate-700"> strategic consulting</span>, and
                <span className="font-semibold text-slate-700"> innovative solutions</span>.
              </p>
              <p className="text-lg font-rubik text-slate-600 leading-relaxed">
                Whether you're an individual looking for business guidance or a company seeking to improve your team's
                performance, we offer tailored services to meet your unique needs.
              </p>
            <Button
                size="lg"
                className="bg-gradient-to-r yext-md from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 
                        text-white font-bold px-2 py-1 text-sm rounded-lg cursor-pointer
                        shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
            >
               Read More About Us
            </Button>
          </div>

          <div className="grid gap-6">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/50 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heebo text-slate-900 mb-3">Our Vision</h4>
                    <p className="text-slate-600 font-rubik leading-relaxed">
                      We envision a world where anyone, anywhere has the power to
                    transform their lives through learning.
                   <span className="font-semibold text-slate-700"> We believe learning is the engine of human progress.</span> 
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/50 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">💡</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heebo text-slate-900 mb-3">Why We Exist</h4>
                    <p className="text-slate-600 font-rubik leading-relaxed">
                   Founded by seasoned pharmaceutical professionals, NURTURE was created to bridge industry challenges with practical solutions. With deep domain expertise, we empower individuals and organizations through continuous learning and expert guidance, helping them thrive in an ever-evolving pharmaceutical landscape.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
