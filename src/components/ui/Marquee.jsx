export function Marquee({ items }) {
  const row = [...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-10">
        {row.map((it, i) => (
          <span key={i} className="whitespace-nowrap text-sm font-medium text-fg-subtle">{it}</span>
        ))}
      </div>
    </div>
  )
}
