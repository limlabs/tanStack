import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/faq')({
  component: FAQ,
})

function FAQ() {
  return <div>FAQ Page</div>
}
