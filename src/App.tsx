import { useState } from "react";
import "./App.css";
import CategoryPills from "./components/CategoryPills";
import Header from "./components/Header";
import { categories } from "./data/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="w-full max-h-screen flex flex-col px-4 py-2">
      <Header />
      <div className="grid grid-cols-[auto, 1fr] flex-grow-1 overflow-auto">
        <div>Sidebar</div>
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
