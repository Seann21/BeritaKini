import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaginationRekom from './PaginationRekom';
import SearchInput from './SearchInput';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
}

const Rekom: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);  // Mengatur jumlah item per halaman menjadi 8
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api-berita-indonesia.vercel.app/cnn/nasional');
        const fetchedNews = response.data.data.posts.map((item: { title: string; category?: string; pubDate: string; thumbnail?: string }, index: number) => ({
            id: index,
          title: item.title,
          category: item.category || 'Nasional',
          date: new Date(item.pubDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
          imageUrl: item.thumbnail || 'https://via.placeholder.com/150',
        }));
        setNewsData(fetchedNews);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, []);

  // Filter and Pagination logic
  const filteredNews = newsData.filter(news =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8 mx-5">
      <h2 className="text-2xl font-inter font-semibold text-gray-900 border-l-4 rounded-l-sm h-16 px-5 py-4 border-primary">
          Rekomendasi Untuk Anda
        </h2>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-5">  {/* Mengatur grid menjadi 4 kolom */}
        {currentItems.map((news: NewsItem) => (
          <div key={news.id} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md cursor-pointer">
            <div className="w-full h-[180px]">  {/* Sesuaikan tinggi gambar */}
              <img src={news.imageUrl} alt={news.title} className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col justify-between p-4 flex-grow"> {/* Tambahkan flex-grow */}
              <div>
                <h3 className="text-md font-semibold mb-2">{news.title}</h3>  {/* Menambahkan margin bawah untuk judul */}
              </div>
              <div className="flex justify-between items-center text-xs text-grayskin mt-4"> {/* Pastikan elemen ini tetap di bagian bawah */}
                <span className="font-semibold text-primary font-inter">{news.category}</span>
                <span className="font-bold font-inter">{news.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PaginationRekom
        itemsPerPage={itemsPerPage}
        totalItems={filteredNews.length}
        paginate={(pageNumber: number) => setCurrentPage(pageNumber)}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Rekom;
