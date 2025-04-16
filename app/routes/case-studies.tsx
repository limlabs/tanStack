import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/case-studies')({
  component: CaseStudies,
})

function CaseStudies() {
  return <div>Case Studies Page</div>
}
