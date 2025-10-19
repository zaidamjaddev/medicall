'use client'

import { useEffect, useState } from "react";
import { TeamMember } from "@/components/team-member";

export default function TeamGrid() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former healthcare CTO with 15 years of experience building patient communication systems.",
      image: "/professional-woman-ceo.png",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "AI researcher and engineer with expertise in natural language processing and conversational AI.",
      image: "/professional-man-cto.png",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "Emily Watson",
      role: "VP of Product",
      bio: "Product leader who has shipped healthcare software used by thousands of clinics nationwide.",
      image: "/professional-woman-vp.png",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      name: "David Park",
      role: "VP of Sales",
      bio: "Healthcare sales veteran with deep relationships across dental and medical practices.",
      image: "/professional-man-sales.jpg",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      name: "Jessica Martinez",
      role: "Head of Customer Success",
      bio: "Passionate about ensuring every customer gets maximum value from MediCall AI.",
      image: "/professional-woman-customer-success.jpg",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      name: "James Thompson",
      role: "Lead AI Engineer",
      bio: "Machine learning expert focused on building conversational AI that understands healthcare context.",
      image: "/professional-engineer.png",
      gradient: "from-amber-500 to-orange-500"
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      
      {/* Floating background blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <TeamMember key={idx} member={member} index={idx} />
        ))}
      </div>
    </section>
  );
}
