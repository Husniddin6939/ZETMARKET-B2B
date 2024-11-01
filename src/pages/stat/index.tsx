import { StatCard } from '@ui';
import { CardStats } from '@constants';
import { BarChart } from '@charts';
import './_style.scss';

export const Stat = () => {
  return (
    <section className="stat">
      <div className="containe">
        <div className="card-grid">
          {CardStats.map((card) => (
            <StatCard key={card.title} {...card} />
          ))}
        </div>
        <div className="chart">
          <BarChart/>
        </div>
      </div>
    </section>
  );
};
