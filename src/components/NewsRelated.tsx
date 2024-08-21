import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface NewsRelatedItem {
  id: number;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
}

interface ApiResponseItem {
  title: string;
  category?: string;
  pubDate: string;
  thumbnail?: string;
}

const NewsRelated: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsRelatedItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api-berita-indonesia.vercel.app/cnn/nasional/');
        const fetchedNews = response.data.data.posts.map((item: ApiResponseItem, index: number) => ({
          id: index,
          title: item.title,
          category: item.category || 'Nasional',
          date: new Date(item.pubDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
          imageUrl: item.thumbnail || 'https://via.placeholder.com/150',
        }));
        setNewsData(fetchedNews.slice(0, 3)); // Adjust the number of related news items
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-28">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-NunitoSans font-bold mb-4 border-l-4 pl-3 border-primary">Berita Terkait</h2>
        <Link
          to="/nasional"
          className="bg-gradient-to-br from-cyan-700 to-indigo-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none text-sm text-center me-2 px-4 py-3 rounded-lg self-start mx-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-inter font-semibold text-white"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news: NewsRelatedItem) => (
          <div key={news.id} className="bg-white rounded-xl overflow-hidden shadow-md font-inter">
            <img src={news.imageUrl} alt={news.title} className="w-full h-[200px] object-cover" />
            <div className="p-4">
              <h3 className="text-md font-semibold mb-11">{news.title}</h3>
              <div className="flex justify-between items-center text-xs text-grayskin">
                <span className="font-semibold text-primary font-inter">{news.category}</span>
                <span className="font-bold font-inter">{news.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsRelated;
