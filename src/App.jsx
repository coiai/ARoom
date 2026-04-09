import { useState } from 'react';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Viewer from './components/Viewer';
import { furniture, categories } from './data/furniture';
import './App.css';

export default function App() {
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const [category, setCategory] = useState('all');

  return (
    <>
      <Header onLogoClick={() => setSelectedFurniture(null)} />
      {selectedFurniture ? (
        <Viewer
          furniture={selectedFurniture}
          onBack={() => setSelectedFurniture(null)}
        />
      ) : (
        <Catalog
          furniture={furniture}
          categories={categories}
          selectedCategory={category}
          onCategoryChange={setCategory}
          onFurnitureSelect={setSelectedFurniture}
        />
      )}
    </>
  );
}
