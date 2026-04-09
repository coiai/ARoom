import { useRef, useEffect } from 'react';
import { categoryIcons } from '../data/categoryIcons';

export default function BottomNav({
  furniture,
  categories,
  selectedCategory,
  onCategoryChange,
  selectedFurniture,
  onFurnitureSelect,
}) {
  const stripRef = useRef(null);

  const filtered =
    selectedCategory === 'all'
      ? furniture
      : furniture.filter((f) => f.category === selectedCategory);

  // Scroll selected item into view
  useEffect(() => {
    if (!stripRef.current || !selectedFurniture) return;
    const el = stripRef.current.querySelector(`[data-id="${selectedFurniture.id}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [selectedFurniture?.id]);

  return (
    <nav className="bottom-nav" aria-label="家具ナビゲーション">
      {/* Category tabs */}
      <div className="bottom-nav-categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`bottom-nav-cat-btn${selectedCategory === cat.id ? ' active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Furniture strip */}
      <div className="bottom-nav-strip" ref={stripRef}>
        {filtered.map((item) => (
          <button
            key={item.id}
            data-id={item.id}
            className={`bottom-nav-thumb${selectedFurniture?.id === item.id ? ' active' : ''}`}
            onClick={() => onFurnitureSelect(item)}
            aria-label={`${item.name}を表示`}
          >
            <div className="thumb-preview" style={{ background: item.gradient }}>
              <span className="thumb-icon" style={{ color: item.iconColor }}>
                {categoryIcons[item.category]}
              </span>
            </div>
            <span className="thumb-name">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
