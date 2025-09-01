import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'
import React from 'react'

export default function HeroSection() {
  return (
     <section className="relative min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Full background image */}
        <div className="absolute inset-0">
          <img
            src="https://agshovpharma.com/wp-content/uploads/2019/06/inner_banner.jpg"
            alt="Modern pharmaceutical laboratory"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 via-blue-900/70 to-transparent"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="max-w-3xl space-y-8 text-white">
            <div className="flex items-center gap-3">
              <Badge className="bg-white/20 text-white font-rubik hover:bg-white/30 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 10,000+ Healthcare Professionals
              </Badge>
            </div>
            <h1 className="text-5xl lg:text-7xl font-heebo font-bold leading-tight">
              Advancing Pharma Expertise &
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent block">
                Workforce
              </span>
            </h1>
            <p className="text-xl font-rubik text-cyan-100 leading-relaxed max-w-2xl">
             Empowering pharma professionals with expert-led, customized training solutions designed for pharmaceutical companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-white text-cyan-900 hover:bg-cyan-50 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Request for Demo
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>

            </div>
          </div>
        </div>


      </section>
  )
}
