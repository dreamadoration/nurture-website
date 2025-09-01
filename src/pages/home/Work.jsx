import { useRef, useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {
  Search,
  ClipboardCheck,
  Users,
  FileCheck,
  PlayCircle,
  BarChart3,
  TrendingUp,
} from "lucide-react"

export default function Work() {
  const [api, setApi] = useState(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (api) {
      intervalRef.current = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext()
        } else {
          api.scrollTo(0)
        }
      }, 3500)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [api])

  const steps = [
    { id: 1, icon: <Search className="w-8 h-8" />, title: "Needs Analysis", description: "Understanding your unique training needs to design tailored programs." },
    { id: 2, icon: <ClipboardCheck className="w-8 h-8" />, title: "Planning", description: "Strategic planning to align training goals with pharma objectives." },
    { id: 3, icon: <Users className="w-8 h-8" />, title: "Collaboration", description: "Partnering closely with your teams for seamless implementation." },
    { id: 4, icon: <FileCheck className="w-8 h-8" />, title: "Agreement", description: "Ensuring clarity with mutual agreement on scope and goals." },
    { id: 5, icon: <PlayCircle className="w-8 h-8" />, title: "Delivery", description: "Executing engaging training sessions with proven methodologies." },
    { id: 6, icon: <BarChart3 className="w-8 h-8" />, title: "Debrief", description: "Reviewing results and gathering insights to refine programs." },
    { id: 7, icon: <TrendingUp className="w-8 h-8" />, title: "Next Steps", description: "Planning future improvements for continuous growth." },
  ]

  return (
    <section
      id="how-we-work"
      className="relative py-24 bg-gray-50 text-gray-900"
    //   style={{
    //     backgroundImage: "url('https://placehold.co/1920x1080/f3f4f6/000000?text=Light+Geometric+Pattern')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundAttachment: "fixed",
    //   }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heebo font-bold mb-6 text-gray-900">
            How We
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}Work
            </span>
          </h2>
          <p className="text-lg md:text-xl font-rubik text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our proven 7-step methodology ensures success at every stage of pharmaceutical training and consulting.
          </p>
        </div>

        {/* Carousel */}
        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="flex">
            {steps.map((step) => (
              <CarouselItem
                key={step.id}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-6 py-5"
              >
                <div className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl transition-transform hover:scale-105 hover:shadow-2xl">
                  {/* Step Number in background */}
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-bold text-gray-200 opacity-50 z-0 select-none pointer-events-none">
                    {step.id}
                  </span>

                  {/* Icon Container */}
                  <div className="relative z-10 w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gray-100/90 border border-cyan-500/50">
                      <span className="text-[#0077f5] bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600">
                        {step.icon}
                      </span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h5 className="mt-4 text-xl font-bold font-heebo text-gray-900">
                    {step.title}
                  </h5>

                  {/* Description */}
                  <p className="text-gray-600 font-rubik text-sm md:text-base mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
