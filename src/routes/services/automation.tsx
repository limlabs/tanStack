import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/automation')({
  component: Automation,
})

function Automation() {
  return <div>Automation Services</div>
}
