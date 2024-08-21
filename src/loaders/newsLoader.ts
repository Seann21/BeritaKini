import axios from 'axios';

export const newsLoader = async () => {
  try {
    const response = await axios.get('https://api-berita-indonesia.vercel.app/cnn/nasional');
    return response.data.data.posts.slice(0, 5);
  } catch (error) {
    throw new Error('Failed to fetch news data');
  }
};
