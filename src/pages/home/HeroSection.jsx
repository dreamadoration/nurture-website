import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'
import React, { useState } from 'react'
import { Dialog } from "@/components/ui/dialog"
import { Payment } from '@/components/ui/Payment'

export default function HeroSection() {
  const [open, setOpen] = useState(false)
  return (
     <section className="relative  bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-20 md:min-h-screen">
          <div className="max-w-3xl space-y-8 text-white">
            <div className="flex items-center gap-3">
              <Badge className="bg-white/20 text-white font-rubik hover:bg-white/30 px-4 py-2 text-md  backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                Empower your talent to drive your business forward
              </Badge>
            </div>
            <h1 className="text-5xl lg:text-6xl font-heebo font-bold leading-tight">
             Advancing Pharma Workforce with Expert 
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent block">
                Training Solutions
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

                {/* <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 
                text-white font-bold px-2 py-1 text-sm rounded-lg cursor-pointer
                shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
                onClick={() => setOpen(true)}
                >
                  Pay Now
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button> */}

            </div>
          </div>
        </div>
      {/* <Dialog open={open} onOpenChange={setOpen}>
        <Payment />
      </Dialog> */}

      </section>
  )
}
