import { useState } from "react";

const IngredientInput = ({ onGenerate }: { onGenerate: (ingredients: string[]) => void }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");

  const addIngredient = () => {
    if (currentIngredient.trim() && !ingredients.includes(currentIngredient.trim())) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient("");
    }
  };

  const removeIngredient = (index: number) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addIngredient();
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">What’s in Your Kitchen?</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter an ingredient..."
          value={currentIngredient}
          onChange={(e) => setCurrentIngredient(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow border rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
        />
        <button
          onClick={addIngredient}
          className="bg-secondary text-white px-4 py-2 rounded transition-all"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient, index) => (
          <span
            key={index}
            className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full shadow transition-colors"
          >
            {ingredient}
            <button
              onClick={() => removeIngredient(index)}
              className="ml-2 text-error transition-colors"
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <button
        onClick={() => onGenerate(ingredients)}
        className="mt-6 w-full bg-primary text-white py-2 rounded transition-all"
      >
        Generate Recipe
      </button>
    </div>
  );
};

export default IngredientInput;
