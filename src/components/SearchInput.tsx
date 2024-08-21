import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Cari disini..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full sm:w-[492px] h-[52px] p-4 font-inter font-medium border border-gray-300 rounded-lg" // Menambahkan padding kiri untuk ruang ikon
      />
      <FaSearch className="absolute right-5 text-gray-500" />  {/* Posisi ikon di dalam input */}
    </div>
  );
};

export default SearchInput;
