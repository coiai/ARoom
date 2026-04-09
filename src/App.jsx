import { useState } from 'react';
import Header from './components/Header';
import Viewer from './components/Viewer';
import FurnitureInfoBar from './components/FurnitureInfoBar';
import BottomNav from './components/BottomNav';
import { furniture, categories } from './data/furniture';
import './App.css';

export default function App() {
  const [selectedFurniture, setSelectedFurniture] = useState(furniture[0]);
  const [category, setCategory] = useState('all');

  return (
    <div className="app-shell">
      <Viewer furniture={selectedFurniture} />
      <Header />
      <FurnitureInfoBar furniture={selectedFurniture} />
      <BottomNav
        furniture={furniture}
        categories={categories}
        selectedCategory={category}
        onCategoryChange={setCategory}
        selectedFurniture={selectedFurniture}
        onFurnitureSelect={setSelectedFurniture}
      />
    </div>
  );
}
