"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

interface HighlightItem {
  title: string
  desc: string
}

interface StandardsAccordionProps {
  items: HighlightItem[]
}

export default function StandardsAccordion({ items }: StandardsAccordionProps) {
  // Allow toggling multiple items or single item; default first item open or all toggleable
  const [openIndexes, setOpenIndexes] = useState<number[]>([0])

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    )
  }

  return (
    <div className="flex flex-col divide-y divide-[#E5E0D8]">
      {items.map((item, idx) => {
        const isOpen = openIndexes.includes(idx)

        return (
          <div key={idx} className="py-6 first:pt-0 last:pb-0">
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full grid grid-cols-12 gap-4 items-center text-left focus:outline-none group cursor-pointer"
              aria-expanded={isOpen}
            >
              <h3 className="col-span-10 sm:col-span-11 font-heading text-base uppercase font-semibold text-[#0F0F10] tracking-wide group-hover:text-[#C9B07A] transition-colors">
                {item.title}
              </h3>
              <div className="col-span-2 sm:col-span-1 flex justify-end text-[#0F0F10] group-hover:text-[#C9B07A] transition-colors">
                {isOpen ? (
                  <Minus className="w-4 h-4 transition-transform duration-300" />
                ) : (
                  <Plus className="w-4 h-4 transition-transform duration-300" />
                )}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 sm:pt-4 sm:pl-0">
                    <p className="text-[13.5px] leading-[1.85] text-neutral-600 font-light max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
