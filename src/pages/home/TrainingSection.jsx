import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Calculator, Calendar, Package, Users } from 'lucide-react'
import React from 'react'

export default function TrainingSection() {
  return (
    <section id="training" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://elite-themes.com/html/medicoz/images/icons/pattern-3.png"
          alt="Modern pharmaceutical laboratory"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 font-heebo hover:bg-purple-200 text-sm font-semibold px-4 py-1.5 mb-4">
            Expert Training Module
          </Badge>
           <h2 className="text-4xl md:text-5xl font-heebo font-bold mb-6 text-gray-900">
            Customized Training
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}Solutions
            </span>
          </h2>
          <p className="text-lg md:text-xl font-rubik text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Tailor your training packages according to your business needs and requirements.
            Each package includes a fixed token amount plus DPM-based costs for maximum flexibility.
          </p>
        </div>

        {/* Content Grid */}
     <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Formula Box */}
          <Card className="p-8 bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.06),_0px_16px_48px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10 text-gray-900 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.1),_0px_24px_64px_rgba(0,0,0,0.12)]">
            <h3 className="text-2xl font-bold mb-2 font-heebo text-center">Total Cost Calculation</h3>
            <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-cyan-500">
              <div className="text-xl font-mono text-cyan-700 font-bold mb-2">
                Token Amount + DPM Cost
              </div>
              <p className="text-sm text-gray-600 mb-4">Where DPM is calculated as:</p>
              <div className="text-lg font-semibold text-blue-700">
                (Days × ₹2,500) + (Products × ₹200) + (Members × ₹200)
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700 font-rubik flex items-center gap-2"><Calendar className="w-5 h-5 text-purple-600"/> Days Training</span>
                <span className="font-semibold text-gray-900">₹2,500 per day</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700 font-rubik flex items-center gap-2"><Package className="w-5 h-5 text-red-600"/> Products Covered</span>
                <span className="font-semibold text-gray-900">₹200 per product</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700 font-rubik flex items-center gap-2"><Users className="w-5 h-5 text-indigo-600"/> Team Members</span>
                <span className="font-semibold text-gray-900">₹200 per member</span>
              </div>
            </div>
          </Card>

          {/* Sample Config */}
          <Card className="p-8 bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.06),_0px_16px_48px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10 text-gray-900 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.1),_0px_24px_64px_rgba(0,0,0,0.12)]">
            <h3 className="text-2xl font-bold mb-2 font-heebo text-center">Example: Intermediate Package</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 rounded-xl bg-gray-50 shadow-sm border border-gray-200">
                <Calendar className="w-6 h-6 text-cyan-600 mx-auto mb-1" />
                <div className="text-2xl font-bold text-cyan-700 font-heebo">2</div>
                <div className="text-xs text-gray-600 font-rubik">Days</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-50 shadow-sm border border-gray-200">
                <Package className="w-6 h-6 text-pink-600 mx-auto mb-1" />
                <div className="text-2xl font-bold text-pink-700 font-heebo">8</div>
                <div className="text-xs text-gray-600 font-rubik">Products</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-50 shadow-sm border border-gray-200">
                <Users className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                <div className="text-2xl font-bold text-purple-700 font-heebo">10</div>
                <div className="text-xs text-gray-600 font-rubik">Members</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-50 shadow-sm border border-gray-200">
                <Calculator className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
                <div className="text-2xl font-bold text-yellow-700 font-heebo">₹3,000</div>
                <div className="text-xs text-gray-600 font-rubik">Token</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700 font-rubik">Token Amount:</span>
                <span className="font-semibold text-cyan-600">₹3,000</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700 font-rubik">Days (2 × ₹2,500):</span>
                <span className="font-semibold text-cyan-600">₹5,000</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700 font-rubik">Products (8 × ₹200):</span>
                <span className="font-semibold text-pink-600">₹1,600</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700 font-rubik">Members (10 × ₹200):</span>
                <span className="font-semibold text-purple-600">₹2,000</span>
              </div>
              <div className="border-t-2 border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="text-gray-900 font-heebo">Total Cost:</span>
                  <span className="text-cyan-600 font-heebo">₹11,600</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  )
}
