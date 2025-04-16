import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/team')({
  component: Team,
})

function Team() {
  return <div>Our Team</div>
}
