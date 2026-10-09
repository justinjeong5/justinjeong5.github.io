import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { RECOMMENDED_READS } from '../../lib/work-paths';

function ReadingStart() {
  return (
    <section className="reading-start" aria-labelledby="reading-start-title">
      <h2 id="reading-start-title">처음이라면 이 세 편부터</h2>
      <ol>
        {RECOMMENDED_READS.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>
              <span>{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ReadingStart;
