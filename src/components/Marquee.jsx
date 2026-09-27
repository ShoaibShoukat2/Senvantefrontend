import { ticker } from '../data'

export default function Marquee() {
  const items = [...ticker, ...ticker]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <i />
          </span>
        ))}
      </div>
    </div>
  )
}
