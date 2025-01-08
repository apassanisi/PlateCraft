"use client";

import { useState } from "react";
import IngredientInput from "../components/IngredientInput";
import RecipeCard from "../components/RecipeCard";
import LoadingSpinner from "../components/LoadingSpinner";
import '../app/globals.css';

// Main Page
const Home = () => {
  const [recipe, setRecipe] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [tasteDescription, setTasteDescription] = useState<string | null>(null);
  const [instructions, setInstructions] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const generateRecipe = async (ingredients: string[]) => {
    setLoading(true);
    setRecipe(null);
    setImageUrl(null);
    setTitle(null);
    setTasteDescription(null);
    setIngredients(null);
    setInstructions(null);
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
      setRecipe(data.recipe);
      setImageUrl(data.imageUrl);
      setTitle(data.title);
      setTasteDescription(data.tasteDescription);
      setIngredients(data.ingredients);
      setInstructions(data.instructions);
    } catch (error) {
      console.error("Error generating recipe:", error);
    } finally {
      setLoading(false);
    }
  };

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
