import { getFinalTokens } from '../../lib/getFinalTokens';

export default async function handler(req, res) {
  try {
    const tokens = await getFinalTokens();
    res.status(200).json(tokens);
  } catch (error) {
    console.error('Failed to fetch tokens:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
