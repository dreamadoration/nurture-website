import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { ArrowRight, ChevronRight} from "lucide-react";
import member1 from "../../assets/images/member1.jpg"
import member2 from "../../assets/images/member2.jpg"
import member3 from "../../assets/images/member3.jpg"
import { useNavigate } from 'react-router-dom';

export default function Team() {
  const navigate = useNavigate();
 const teamMembers = [
    {
      id: 1,
       name: "Mohd Imran Khan",
      designation: "Co-founder & Chief of Training and Client Strategy",
      image: member1,
      content: "With over 15 years of experience in pharmaceutical sales and team leadership, Imran co-founded Nurture to bridge the gap between academic learning and real-world performance. A Pharmacy graduate, he’s worked closely with medical reps, doctors, and pharma leaders, giving him deep insight into what it takes to thrive in the industry.",
    },
    {
      id: 2,
      name: "Noopur Sharma",
      designation: "Co-founder & Director – Program Delivery & Pharmacovigilance",
      image:member3,
      content: "With over 13 years of experience in pharmaceutical sales, marketing, and pharmacovigilance, Noopur blends academic rigor with practical industry insight. A Master’s in Pharmacy, she brings a dynamic, real-world approach to training that connects deeply with learners.",
    },
    {
      id: 3,
      name: "Anamika Tripathi",
      designation: "Co-founder & Director – Quality & Operations",
      image: member2,
      content: "With 13 years of experience across quality control, teaching, and pharmaceutical sales, Anamika brings a rare 360-degree perspective to pharma training. A Master’s in Pharmacy and current PhD scholar, she combines academic depth with real-world insight.",
    }
  ];

  return (
     <section className="py-10 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-purple-100 rounded-[6px] w-full md:w-auto text-sm text-purple-800 font-heebo hover:bg-purple-200 md:text-md px-4 py-1.5 mb-4">
            We are driven by our mission and fuelled by our team
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heebo font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-rubik max-w-3xl mx-auto">
            Our team of experienced pharmaceutical professionals brings decades of combined expertise, dedicated to your success and growth.
          </p>
        </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card 
              key={member.id} 
              className="overflow-hidden p-0 border-white hover:shadow-medical transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image and Basic Info Row */}
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#ddd] group-hover:border-[#1c398e] transition-colors"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold  font-heebo text-card-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-heebo font-medium text-sm">
                      {member.designation}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-4 font-rubik leading-relaxed">
                  {member.content}
                </p>

                {/* Expanded Bio */}
                {/* {expandedMember === member.id && (
                  <div className="mb-4 p-4 bg-muted/50 rounded-lg border-l-4 border-l-primary">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.fullBio}
                    </p>
                  </div>
                )} */}

                {/* Actions */}
                <div className="flex items-center justify-between">
                  {/* <div className="flex space-x-2">
                    {member.linkedin && (
                      <Button variant="outline" size="sm" className="text-primary hover:bg-primary hover:text-white">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    )}
                    {member.email && (
                      <Button variant="outline" size="sm" className="text-primary hover:bg-primary hover:text-white">
                        <Mail className="h-4 w-4" />
                      </Button>
                    )}
                  </div> */}
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => navigate("/team")}
                    className="text-[#1c398e] group-hover:bg-[#1c398e] cursor-pointer text-lg py-2 px-3 font-heebo group-hover:text-white transition-all group-hover:rounded-[6px]"
                  >
                      Read More
                       <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}