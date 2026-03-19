import { createFileRoute, redirect } from '@tanstack/react-router';
import { Profile } from '../components/Profile';

export const Route = createFileRoute('/profile')({
  beforeLoad: () => {
    const isAuth = false;
    //TO DO: Auth check logic here
    if (!isAuth) {
      throw redirect({ to: '/' })
    }
  },
  component: () => <Profile/>,
})