import { FC } from 'react';
import type { TCardPropsType } from '@ttypes';
import './_style.scss';

export const StatCard: FC<TCardPropsType> = ({ title, icon, value, color }) => {
  const cardStyle = {
    backgroundColor: color,
  };

  return (
    <div className="stat-card" style={cardStyle}>
      <h3>{title}</h3>
      <div className="count">
        <h1>{value}</h1>
        <small>count</small>
      </div>
      <div className="circle">
        <i className={icon}></i>
      </div>
    </div>
  );
};
