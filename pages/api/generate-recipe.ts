import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API called');
  if (req.method !== 'POST') {
    console.log('Invalid method');
    return res.status(405).json({ error: 'Only POST requests are allowed' });
  }

  const { ingredients } = req.body;
  console.log('Ingredients received:', ingredients);

  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    console.log('Invalid ingredients');
    return res.status(400).json({ error: 'Ingredients are required' });
  }

  try {
    const prompt = `Create a recipe using these ingredients: ${ingredients.join(', ')}. Include a creative and funny name for the recipe and describe how good it might taste.`;
    console.log('Prompt:', prompt);
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 300,
    });

    console.log('OpenAI response:', response);
    const recipe = response.choices[0]?.message?.content?.trim() ?? 'No recipe generated';
    const [title, ...rest] = recipe.split('\n');
    const ingredientsIndex = rest.findIndex(line => line.toLowerCase().includes('ingredients:'));
    const instructionsIndex = rest.findIndex(line => line.toLowerCase().includes('instructions:'));
    const tasteDescriptionIndex = rest.findIndex(line => line.toLowerCase().includes('this'));
    
    const ingredientsList = rest.slice(ingredientsIndex + 1, instructionsIndex).join('\n').trim();
    const instructions = rest.slice(instructionsIndex + 1, tasteDescriptionIndex).join('\n').trim();
    const tasteDescription = rest.slice(tasteDescriptionIndex).join('\n').trim();
    
    console.log('Recipe generated:', recipe);
    console.log('Title:', title);
    console.log('Ingredients:', ingredientsList);
    console.log('Instructions:', instructions);
    console.log('Taste description:', tasteDescription);

    const imageResponse = await openai.images.generate({
      prompt: `A delicious dish made with ${ingredients.join(', ')}`,
      n: 1,
      size: '512x512',
    });

    const imageUrl = imageResponse.data[0].url;
    console.log('Image URL generated:', imageUrl);

    res.status(200).json({ recipe, imageUrl, title, ingredients: ingredientsList, instructions, tasteDescription });
  } catch (error) {
    console.error('Error generating recipe or image:', error);
    res.status(500).json({ error: 'Failed to generate recipe or image' });
  }
}
