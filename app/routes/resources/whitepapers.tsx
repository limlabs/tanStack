import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resources/whitepapers')({
  component: Whitepapers,
})

function Whitepapers() {
  return <div>Whitepapers</div>
}
