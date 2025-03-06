import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2 flex justify-center items-center style={{ marginTop: '100px' }}">
      <h1 className="text-center">Liminal TanStack Application</h1>
    </div>
  )
}
