import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resources')({
  component: Resources,
})

function Resources() {
  return <div>Resources Page</div>
}
