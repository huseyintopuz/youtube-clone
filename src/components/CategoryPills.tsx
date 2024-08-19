import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};
const CategoryPills = ({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);

  const TRANSLATE_AMOUNT = 300;
  const handleLeftClick = () => {
    setTranslate((translate) => {
      const newTranslate = translate - TRANSLATE_AMOUNT;
      if (newTranslate <= 0) return 0;
      return newTranslate;
    });
  };

  const handleRightClick = () => {
    setTranslate((translate) => {
      if (containerRef.current === null) translate;

      const newTranslate = translate + TRANSLATE_AMOUNT;
      const edge = containerRef.current?.scrollWidth ?? 0;
      const width = containerRef.current?.clientWidth ?? 0;

      console.log(edge, width, newTranslate);

      if (newTranslate + width >= edge) {
        return edge - width;
      }
      return newTranslate;
    });
  };

  useEffect(() => {
    if (containerRef.current === null) return;
    const observer = new ResizeObserver((entries) => {
      const constainer = entries[0].target;
      if (constainer === null) return;
      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + constainer.clientWidth < constainer.scrollWidth
      );
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [translate, categories]);
  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div
        className="flex gap-3 whitespace-nowrap transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === selectedCategory ? "dark" : "default"}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
            onClick={() => onSelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r
       from-white from-50% to-transparent w-24 h-full"
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={handleLeftClick}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l
       from-white from-50% to-transparent w-24 h-full flex justify-end"
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={handleRightClick}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryPills;
