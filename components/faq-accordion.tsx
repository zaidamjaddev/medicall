"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQAccordionProps {
  question: string
  answer: string
}

export function FAQAccordion({ question, answer }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted transition-colors text-left"
      >
        <span className="font-semibold text-foreground">{question}</span>
        <ChevronDown
          size={20}
          className={`text-primary flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-background border-t border-border">
          <p className="text-foreground/70">{answer}</p>
        </div>
      )}
    </div>
  )
}
