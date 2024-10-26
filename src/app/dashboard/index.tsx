import { Outlet } from 'react-router';
import { Aside, Header } from '@components';
import './_style.scss';

export const Dashboard = () => {
  return (
    <>
      <main>
        <Aside />
        <section className="wrapper">
          <Header />
          <section id="route">
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};
