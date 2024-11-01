import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Aside, Header } from '@components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store';
import { setSearchAction } from '../../stores/search-slice';
import './_style.scss';

export const Dashboard = () => {
  const { isOpen } = useSelector((state: RootState) => state.toggle);
  const dispatch = useDispatch();
  const { pathname }: { pathname: any } = useLocation();

  const wrapperStyle = {
    minWidth: isOpen ? 'calc(100vw-320px)' : '100vw',
    transform: isOpen ? 'translateX(0)' : 'translateX(-320px)',
    transition: 'all 0.4s ease',
  };

  useEffect(() => {
    dispatch(setSearchAction(pathname));
  }, [pathname]);

  return (
    <>
      <main>
        <Aside />
        <section className="wrapper" style={wrapperStyle}>
          <Header />
          <section id="route">
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};
