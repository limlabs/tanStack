import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="pb-4 pt-0">{children}</div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: Array<{
    title: string
    content: React.ReactNode
  }>
  defaultOpenIndex?: number
}

export function Accordion({ items, defaultOpenIndex = -1 }: AccordionProps) {
  return (
    <div className="divide-y rounded-lg border">
      {items.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          defaultOpen={index === defaultOpenIndex}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}
