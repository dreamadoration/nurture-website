import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export default function Team() {
  const teamData = [
    {
      name: "Mohd Imran Khan",
      role: "Co-founder & Chief of Training and Client Strategy",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Male_Avatar.jpg", // Man's portrait
      bio: "Imran leverages 15+ years in pharma sales to design training that drives real-world success.",
    },
    {
      name: "Noopur Sharma",
      role: "Co-founder & Director – Program Delivery & Pharmacovigilance",
      image: "https://static.vecteezy.com/system/resources/previews/024/766/959/non_2x/default-female-avatar-profile-icon-social-media-chatting-online-user-free-vector.jpg", // Woman's portrait
      bio: "Noopur's 15+ years in pharma sales and marketing ensure our programs blend academic rigor with practical expertise.",
    },
    {
      name: "Anamika Tripathi",
      role: "Co-founder & Director – Quality & Operations",
      image: "https://static.vecteezy.com/system/resources/previews/024/766/959/non_2x/default-female-avatar-profile-icon-social-media-chatting-online-user-free-vector.jpg", // Woman's portrait
      bio: "Anamika's 15 years in quality control and pharma sales guarantee our operations and programs are efficient and compliant.",
    },
  ]

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-purple-100 text-purple-800 font-heebo hover:bg-purple-200 text-sm font-semibold px-4 py-1.5 mb-4">
            Meet Our Experts
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heebo font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-rubik max-w-3xl mx-auto">
            Our team of experienced pharmaceutical professionals brings decades of combined expertise, dedicated to your success and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <Card
              key={index}
              className="text-center group p-4 hover:shadow-xl transition-all duration-300 border-gray-100 border-2"
            >
              <CardContent className="pt-6 pb-4">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-full h-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold font-heebo text-gray-900 mb-1">{member.name}</h3>
                <p className="text-cyan-600 font-rubik font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 font-rubik leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}