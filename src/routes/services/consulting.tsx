import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/consulting')({
  component: Consulting,
})

function Consulting() {
  return <div>Consulting Services</div>
}
