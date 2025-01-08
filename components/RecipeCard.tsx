const RecipeCard = ({ recipe, imageUrl }: { recipe: string, imageUrl: string }) => {
  const [title, ...rest] = recipe.split('\n');
  const ingredientsIndex = rest.findIndex(line => line.toLowerCase().includes('ingredients:'));
  const ingredients = rest.slice(ingredientsIndex, rest.findIndex((line, i) => i > ingredientsIndex && line.trim() === ''));
  const instructions = rest.slice(ingredientsIndex + ingredients.length);

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
      <img src={imageUrl} alt="Recipe" className="w-full h-64 object-cover rounded-lg mb-4" />
      <div className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside mb-4">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
        <pre>{instructions.join('\n')}</pre>
      </div>
    </div>
  );
};

export default RecipeCard;
