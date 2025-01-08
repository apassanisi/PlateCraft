"use client";

import { useState } from "react";
import IngredientInput from "../components/IngredientInput";
import RecipeCard from "../components/RecipeCard";
import LoadingSpinner from "../components/LoadingSpinner";
import '../app/globals.css';

// Main Page
const Home = () => {
  const [recipeData, setRecipeData] = useState({
    recipe: null,
    imageUrl: null,
    title: null,
    tasteDescription: null,
    ingredients: null,
    instructions: null,
  });
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const generateRecipe = async (ingredients: string[]) => {
    setLoading(true);
    setRecipeData({
      recipe: null,
      imageUrl: null,
      title: null,
      tasteDescription: null,
      ingredients: null,
      instructions: null,
    });
    setImageLoaded(false);

    try {
      console.log('Sending ingredients:', ingredients);
      const response = await fetch("/api/generate-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients }),
      });
      console.log('Response received:', response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Data received:', data);
      setRecipeData({
        recipe: data.recipe,
        imageUrl: data.imageUrl,
        title: data.title,
        tasteDescription: data.tasteDescription,
        ingredients: data.ingredients,
        instructions: data.instructions,
      });
    } catch (error) {
      console.error("Error generating recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  const { recipe, imageUrl, title, tasteDescription, ingredients, instructions } = recipeData;

  return (
    <div className="min-h-screen bg-background p-6">
      <IngredientInput onGenerate={generateRecipe} />
      {loading && <LoadingSpinner />}
      {recipe && imageUrl && title && tasteDescription && ingredients && instructions && (
        <div>
          <img src={imageUrl} alt="Recipe" onLoad={() => setImageLoaded(true)} style={{ display: 'none' }} />
          {imageLoaded && (
            <RecipeCard recipe={recipe} imageUrl={imageUrl} title={title} tasteDescription={tasteDescription} ingredients={ingredients} instructions={instructions} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
