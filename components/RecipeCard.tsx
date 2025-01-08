const RecipeCard = ({ recipe, imageUrl, title, tasteDescription, ingredients, instructions }: { recipe: string, imageUrl: string, title: string, tasteDescription: string, ingredients: string, instructions: string }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl mx-auto mt-8 flex flex-col lg:flex-row">
      <div className="lg:w-1/3 lg:pr-6 mb-4 lg:mb-0">
        <img src={imageUrl} alt="Recipe" className="w-full h-full object-cover rounded-lg lg:h-auto lg:w-auto" />
      </div>
      <div className="lg:w-2/3">
        <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
        <p className="text-lg mb-4 text-gray-700">{tasteDescription}</p>
        <div className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
          <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
          <pre className="whitespace-pre-wrap text-lg mb-4">{ingredients}</pre>
          <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
          <pre className="whitespace-pre-wrap text-lg">{instructions}</pre>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
