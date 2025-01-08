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
    const prompt = `Create a recipe using these ingredients: ${ingredients.join(', ')}.`;
    console.log('Prompt:', prompt);
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 300,
    });

    console.log('OpenAI response:', response);
    const recipe = response.choices[0].message.content.trim();
    console.log('Recipe generated:', recipe);

    const imageResponse = await openai.images.generate({
      prompt: `A delicious dish made with ${ingredients.join(', ')}`,
      n: 1,
      size: '512x512',
    });

    const imageUrl = imageResponse.data[0].url;
    console.log('Image URL generated:', imageUrl);

    res.status(200).json({ recipe, imageUrl });
  } catch (error) {
    console.error('Error generating recipe or image:', error);
    res.status(500).json({ error: 'Failed to generate recipe or image' });
  }
}
