import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: Blog,
})

function Blog() {
  return <div>Blog Page</div>
}
