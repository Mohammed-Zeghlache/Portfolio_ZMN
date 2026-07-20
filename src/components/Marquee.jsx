import { marqueeItems } from '../data/data';

function Marquee() {
  return (
    <div className="marquee-band">
      <div className="marquee-track">
        {marqueeItems.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
        {marqueeItems.map((item, i) => (
          <span key={`dup-${i}`} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;