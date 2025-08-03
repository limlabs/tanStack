import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/story')({
  component: Story,
})

function Story() {
  return <div>Our Story</div>
}
