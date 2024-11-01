import { Link, NavLink } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { LogoutButton } from '@ui';
import { navigation } from '@constants';
import { checkRole } from '@utils';
import type { InavigationType } from '@ttypes';
import { RootState } from '@store';
import './_style.scss';

let role = localStorage.getItem('role') || 'admin';

export const Aside = () => {

const {isOpen}=useSelector((state:RootState)=>state.toggle);

 const asideStyle={
    transform:isOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition:"all 0.4s ease"
    
 }

  return (
    <aside style={asideStyle}>
      <Link to="/" className="logo">
        <img src="/icon.png" alt="img" />
        <p>ZETMARKET B2B</p>
      </Link>
      <ul className="list">
        {checkRole(navigation, role).map((item: InavigationType) => (
          <li key={item.path}>
            <NavLink to={item.path} className="list-item">
              <i className={item.icon}></i>
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="settings">
        <img
          className="avatar"
          src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2364"
          alt="user"
        />
        <h3>Super Admin</h3>
        <LogoutButton />
      </div>
    </aside>
  );
};
