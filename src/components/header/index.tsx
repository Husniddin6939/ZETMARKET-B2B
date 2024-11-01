import { useSelector } from 'react-redux';
import type { RootState } from '@store';
import { ToggleSwitch } from '@ui';
import './_style.scss';

export const Header = () => {
  const { placeholder } = useSelector((state: RootState) => state.search);

  return (
    <header>
      <ToggleSwitch />
      <div className="search">
        <input type="text" placeholder={placeholder} />
        <i className="bi bi-search"></i>
      </div>
    </header>
  );
};
