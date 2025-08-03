import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/transformation')({
  component: Transformation,
})

function Transformation() {
  return <div>Digital Transformation Services</div>
}
