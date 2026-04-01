interface MenuItem {
  name: string
  description?: string
  price: string
  badge?: string
}

interface MenuCategoryProps {
  label: string
  items: MenuItem[]
}

export default function MenuCategory({ label, items }: MenuCategoryProps) {
  return (
    <div>
      <h3 className="font-cormorant text-2xl font-light italic text-dark mb-8 pb-4 border-b border-sand-dark/40">
        {label}
      </h3>
      <div className="space-y-0">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-baseline py-5 border-b border-sand-dark/20 group"
          >
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-3">
                <span className="font-cormorant text-xl italic text-dark group-hover:text-sea transition-colors duration-300">
                  {item.name}
                </span>
                {item.badge && (
                  <span className="font-jost text-[10px] tracking-[0.15em] uppercase bg-gold/20 text-gold px-2 py-0.5">
                    {item.badge}
                  </span>
                )}
              </div>
              {item.description && (
                <p className="font-jost text-sm font-light text-dark/80 mt-1.5 leading-relaxed max-w-xl">
                  {item.description}
                </p>
              )}
            </div>
            <span className="font-jost text-base font-light text-dark/60 ml-8 shrink-0">
              € {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
