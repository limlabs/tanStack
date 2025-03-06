import { createFileRoute } from '@tanstack/react-router'
import axios from 'redaxios'
import type { User } from '~/utils/users'
import { DEPLOY_URL } from '~/utils/users'
import { NotFound } from '~/components/NotFound'
import { UserErrorComponent } from '~/components/UserError'

export const Route = createFileRoute('/users/$userId')({
  loader: async ({ params: { userId } }) => {
    return await axios
      .get<User>(DEPLOY_URL + '/api/users/' + userId)
      .then((r) => r.data)
      .catch(() => {
        throw new Error('Failed to fetch user')
      })
  },
  errorComponent: UserErrorComponent,
  component: UserComponent,
  notFoundComponent: () => {
    return <NotFound>User not found</NotFound>
  },
})

function UserComponent() {
  const user = Route.useLoaderData()

  return (
    <div className="space-y-2">
      <img src={`/images/silhouette.svg`} alt={user.name} className="w-24 h-24 rounded-full mx-auto" />
      <h4 className="text-xl font-bold underline">{user.name}</h4>
      <div className="text-sm">{user.email}</div>
    </div>
  )
}
