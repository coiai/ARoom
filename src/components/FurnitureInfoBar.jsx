export default function FurnitureInfoBar({ furniture }) {
  if (!furniture) return null;

  return (
    <div className="furniture-info-bar">
      <div className="info-bar-text">
        <span className="info-bar-name">{furniture.name}</span>
        <span className="info-bar-dim">
          W{furniture.dimensions.w} x D{furniture.dimensions.d} x H{furniture.dimensions.h} cm
        </span>
      </div>
      <span className="info-bar-price">&yen;{furniture.price.toLocaleString()}</span>
    </div>
  );
}
