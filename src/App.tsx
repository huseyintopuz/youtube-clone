import { useState } from "react";
import "./App.css";
import CategoryPills from "./components/CategoryPills";
import Header from "./components/Header";
import { categories, videos } from "./data/categories";
import VideoGridItem from "./components/VideoGridItem";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="w-full max-h-screen flex flex-col px-4 py-2">
      <Header />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto mt-4">
        <div>Sidebar</div>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map((video) => {
              return <VideoGridItem key={video.id} {...video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
