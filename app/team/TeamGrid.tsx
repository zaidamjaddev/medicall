'use client'

import { useEffect, useState } from "react";
import { TeamMember } from "@/components/team-member";

export default function TeamGrid({ darkTheme = true }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const team = [
    { name: "Mark Andrews", role: "CEO & Co-Founder", image: "/CEO.jpg", gradient: "from-blue-500 to-cyan-500" },
    { name: "Helen Taylor", role: "Billing Department", image: "/hellen.jpg", gradient: "from-indigo-500 to-purple-500" },
    { name: "Sarah Smith", role: "HR", image: "/sarah-smith.jpg", gradient: "from-emerald-500 to-teal-500" },
    { name: "Rachel Gordon", role: "Business Development Manager", image: "/gordon.png", gradient: "from-violet-500 to-purple-500" },
    { name: "Ashley Bridge", role: "Senior Business Development Manager", image: "/ashley.png", gradient: "from-rose-500 to-pink-500" },
    { name: "Sara Khan", role: "Senior Business Development Manager", image: "/saarah.jpg", gradient: "from-amber-500 to-orange-500" },
    { name: "Rebecca Pope", role: "Senior Business Development Manager", image: "/rebecca.jpg", gradient: "from-amber-500 to-orange-500" },
    { name: "Claire Hunter", role: "Administration assistant", image: "/claire.jpg", gradient: "from-amber-500 to-orange-500" },
    { name: "Andrea Smith", role: "Sales Consultant", image: "/andrea.jpg", gradient: "from-amber-500 to-orange-500" },
    { name: "Andy Brown", role: "Sales consultant", image: "/andy.jpg", gradient: "from-amber-500 to-orange-500" },
    { name: "James Smith", role: "Business Development Manager", image: "/james.png", gradient: "from-amber-500 to-orange-500" },
    { name: "Michelle Taylor", role: "Sales Manager", image: "/taylor.jpeg", gradient: "from-amber-500 to-orange-500" },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-emerald-500/10 to-indigo-500/10"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      
      {/* Floating background blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <TeamMember key={idx} member={member} index={idx} darkTheme />
        ))}
      </div>
    </section>
  );
}
