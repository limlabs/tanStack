import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resources/webinars')({
  component: Webinars,
})

function Webinars() {
  return <div>Webinars</div>
}
