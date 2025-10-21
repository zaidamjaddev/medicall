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
      name: "Mark Andrews",
      role: "CEO & Co-Founder",
      // bio: "Former healthcare CTO with 15 years of experience building patient communication systems.",
      image: "/CEO.jpg",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Helen Taylor",
      role: "Billing Department",
      // bio: "AI researcher and engineer with expertise in natural language processing and conversational AI.",
      image: "/hellen.jpg",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "Sarah Smith",
      role: "HR",
      // bio: "Product leader who has shipped healthcare software used by thousands of clinics nationwide.",
      image: "/sarah-smith.jpg",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      name: "Rachel Gordon",
      role: "Business Development Manager",
      // bio: "Healthcare sales veteran with deep relationships across dental and medical practices.",
      image: "/gordon.png",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      name: "Ashley Bridge",
      role: "Senior Business Development Manager",
      // bio: "Passionate about ensuring every customer gets maximum value from MediCall AI.",
      image: "/ashley.png",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      name: "Sara Khan",
      role: "Senior Business Development Manager",
      // bio: "Machine learning expert focused on building conversational AI that understands healthcare context.",
      image: "/saarah.jpg",
      gradient: "from-amber-500 to-orange-500"
    },
     {
      name: "Rebecca Pope",
      role: "Senior Business Development Manager",
      // bio: "Machine learning expert focused on building conversational AI that understands healthcare context.",
      image: "/rebecca.jpg",
      gradient: "from-amber-500 to-orange-500"
    },
     {
      name: "Claire Hunter",
      role: "Administration assistant",
      // bio: "Machine learning expert focused on building conversational AI that understands healthcare context.",
      image: "/claire.jpg",
      gradient: "from-amber-500 to-orange-500"
    },
     {
      name: "Andrea Smith",
      role: "Sales Consultant",
      // bio: "Machine learning expert focused on building conversational AI that understands healthcare context.",
      image: "/andrea.jpg",
      gradient: "from-amber-500 to-orange-500"
    },
     {
      name: "Andy Brown",
      role: "Sales consultant",
      // bio: "Machine learning expert focused on building conversational AI that understands healthcare context.",
      image: "/andy.jpg",
      gradient: "from-amber-500 to-orange-500"
    },
     {
      name: "James Smith",
      role: "Business Development Manager",
      // bio: "Machine learning expert focused on building conversational AI that understands healthcare context.",
      image: "/james.png",
      gradient: "from-amber-500 to-orange-500"
    },
     {
      name: "Michelle Taylor",
      role: "Sales Manager",
      // bio: "Machine learning expert focused on building conversational AI that understands healthcare context.",
      image: "/taylor.jpeg",
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

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <TeamMember key={idx} member={member} index={idx} />
        ))}
      </div>
    </section>
  );
}
