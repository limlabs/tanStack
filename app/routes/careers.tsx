import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/careers')({
  component: Careers,
})

function Careers() {
  return <div>Careers</div>
}
