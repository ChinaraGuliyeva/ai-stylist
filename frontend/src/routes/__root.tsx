import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Wrapper } from '../components/Wrapper';
import { Header } from '../components/Header';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  ),
})