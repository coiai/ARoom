const categoryIcons = {
  chair: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4"/>
      <path d="M4 11h16a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1z"/>
      <path d="M6 16v4M18 16v4"/>
    </svg>
  ),
  table: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="3" rx="1"/>
      <path d="M5 11v9M19 11v9M10 11v9M14 11v9"/>
    </svg>
  ),
  sofa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12V8a2 2 0 012-2h12a2 2 0 012 2v4"/>
      <path d="M2 12h20v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z"/>
      <path d="M4 19v2M20 19v2"/>
    </svg>
  ),
  light: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v3M9 21h6M10 17.5A6 6 0 1118 9a6 6 0 01-4 5.66V17a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1.34A6 6 0 0110 17.5z"/>
    </svg>
  ),
  shelf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="1"/>
      <path d="M4 9h16M4 15h16M12 3v18"/>
    </svg>
  ),
  decor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c-4-4-8-7.5-8-11a8 8 0 0116 0c0 3.5-4 7-8 11z"/>
      <circle cx="12" cy="11" r="2"/>
    </svg>
  ),
};

export default function Catalog({
  furniture,
  categories,
  selectedCategory,
  onCategoryChange,
  onFurnitureSelect,
}) {
  const filtered =
    selectedCategory === 'all'
      ? furniture
      : furniture.filter((f) => f.category === selectedCategory);

  return (
    <main className="catalog">
      <section className="catalog-hero">
        <h1>
          あなたの部屋に
          <br />
          家具を配置しよう
        </h1>
        <p>3Dプレビューとカメラで、お部屋に合うか確認できます</p>
      </section>

      <nav className="category-filter" aria-label="カテゴリフィルター">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn${selectedCategory === cat.id ? ' active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <div className="furniture-grid">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="furniture-card"
            onClick={() => onFurnitureSelect(item)}
            tabIndex={0}
            role="button"
            aria-label={`${item.name}を3Dで見る`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onFurnitureSelect(item);
              }
            }}
          >
            <div className="card-preview" style={{ background: item.gradient }}>
              <span className="card-icon" style={{ color: item.iconColor }}>
                {categoryIcons[item.category]}
              </span>
            </div>
            <div className="card-info">
              <h3 className="card-name">{item.name}</h3>
              <p className="card-dimensions">
                W{item.dimensions.w} x D{item.dimensions.d} x H{item.dimensions.h} cm
              </p>
              <p className="card-price">&yen;{item.price.toLocaleString()}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
