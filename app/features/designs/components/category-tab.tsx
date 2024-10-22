import { Button } from "@/components/ui/button";

export const CategoryTabs: React.FC<{
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8 text-black">
      <Button
        variant={activeCategory === "All" ? "default" : "outline"}
        onClick={() => onCategoryChange("All")}
        className="text-sm"
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="text-sm"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
