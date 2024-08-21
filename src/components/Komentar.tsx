import React, { useState } from 'react';

const Komentar: React.FC = () => {
  const [komentar, setKomentar] = useState('');
  const maxCharacters = 150;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxCharacters) {
      setKomentar(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (komentar.trim()) {
      alert('Komentar berhasil dikirim!');
      setKomentar(''); // Reset input field after submission
    } else {
      alert('Komentar tidak boleh kosong');
    }
  };

  return (
    <div className="mt-[400px]">
      <h2 className="text-2xl font-semibold mb-4 border-l-4 pl-3 border-primary font-NunitoSans">Komentar</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 pt-7">
      <div className="flex items-start space-x-4">
        {/* Profile Image */}
        <img
          src="/person.png"
          alt="Profile"
          className="w-12 h-12 rounded-lg object-cover"
        />
        {/* Textarea */}
        <div className="flex-grow">
          <textarea
            value={komentar}
            onChange={handleChange}
            placeholder="Apa yang ingin anda tanyakan?"
            rows={4}
            className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="text-right text-gray-400 text-xs mt-1">{komentar.length}/{maxCharacters}</div>
          </div>
          </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800 text-sm text-center me-2 px-4 py-3 rounded-lg self-start mx-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-inter font-semibold"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Komentar;
