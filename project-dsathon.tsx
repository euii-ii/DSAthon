"use client"

// Import necessary hooks and icons
import { useState, useEffect } from "react"
import { Menu, Instagram, Twitter, Linkedin, MessageCircle, Calendar, BookOpen, CheckCircle } from "lucide-react"
import Link from "next/link"

// Internal imports
import Countdown from "./components/basicComponents/CountDown"
import CurvedTimeline from "./components/basicComponents/CurvedTimeLine"
import HeroSection from "./components/basicComponents/HeroSection"
import FAQSection from "./components/basicComponents/FaqSection"
import "./styles/globals.css"

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ProjectDSAthon: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const projectStartDate = new Date("2025-03-01").getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = projectStartDate - now

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [projectStartDate])

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* Fullscreen Background Gradient */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-gradient-to-br from-green-500 via-blue-400 to-blue-600" />

      {/* Main Content */}
      <main className="w-full pt-16">
        <div id="hero">
          <HeroSection />
        </div>

        {/* Project Tracks Section */}
        <section className="py-20 px-4 w-full bg-gradient-to-r from-green-500 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-bold bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6">
              JOIN US ON DSA-THON
            </h2>
            <p className="text-xl mb-12">Level up your DSA skills with expert-led sessions!</p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Live Sessions */}
              <div className="bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-blue-600 mb-6">
                  <Calendar size={48} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Weekend Live Sessions</h3>
                <p>Mentor-led sessions covering essential DSA concepts like Arrays, Stacks, and Queues.</p>
              </div>

              {/* Practice */}
              <div className="bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-blue-600 mb-6">
                  <BookOpen size={48} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Practice & Reinforcement</h3>
                <p>Solve 35+ beginner-friendly coding problems to strengthen problem-solving skills.</p>
              </div>

              {/* Confidence Boost */}
              <div className="bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-blue-600 mb-6">
                  <CheckCircle size={48} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Build Confidence</h3>
                <p>Strengthen your DSA foundation to easily transition to advanced topics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <div id="timeline">
          <CurvedTimeline />
        </div>

        {/* FAQ Section */}
        <div id="faq">
          <FAQSection />
        </div>

        {/* Community Section */}
        <section className="py-20 px-4 w-full bg-gradient-to-b from-blue-600 to-green-500 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6">Join GFG Community</h2>

            <div className="flex justify-center space-x-8 mb-12">
              <a href="https://chat.whatsapp.com/FJX8ucNavszCQlTzYqRPFB" className="text-white hover:text-gray-200 transform hover:scale-110 transition-transform">
                <MessageCircle size={36} />
              </a>
              <a href="https://www.instagram.com/gfgsnuofficial" className="text-white hover:text-gray-200 transform hover:scale-110 transition-transform">
                <Instagram size={36} />
              </a>
              <a href="https://x.com/gfgsnuofficial" className="text-white hover:text-gray-200 transform hover:scale-110 transition-transform">
                <Twitter size={36} />
              </a>
              <a href="https://www.linkedin.com/company/geeksforgeeks-snu-chapter/" className="text-white hover:text-gray-200 transform hover:scale-110 transition-transform">
                <Linkedin size={36} />
              </a>
            </div>

            <p className="text-lg">Organized by GeeksforGeeks Chapters SNU x SKEPSIS</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProjectDSAthon
