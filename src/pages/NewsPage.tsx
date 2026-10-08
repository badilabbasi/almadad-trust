import React, { useState } from 'react';
import { PageId } from '../types';
import { NEWS_ARTICLES } from '../data/mockData';
import { Heart, Calendar, ArrowRight, Search, X, User } from 'lucide-react';

interface NewsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate, onOpenDonate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<(typeof NEWS_ARTICLES)[0] | null>(null);

  const categories = ['All', 'Field Dispatch', 'Press Release', 'Impact Story', 'Emergency Alert'];

  const filtered = NEWS_ARTICLES.filter((item) => {
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <span>Official Communications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            News, Field Dispatches & Media Updates
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            Stay informed on our emergency deployments, annual audit releases, and frontline achievements directly from ALMADAD TRUST field teams.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-emerald-900 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search news & field updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-stone-100 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="text-emerald-800 font-semibold">{article.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-stone-400" />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between text-xs">
                <span className="text-stone-400">{article.readTime}</span>
                <button
                  onClick={() => setReadingArticle(article)}
                  className="font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 my-6">
            <div className="relative aspect-[21/9] bg-stone-900">
              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-90"
              />
              <button
                onClick={() => setReadingArticle(null)}
                aria-label="Close reader"
                className="absolute top-4 right-4 bg-stone-950/80 hover:bg-stone-950 text-white p-2 rounded-full cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <div className="space-y-3 pb-4 border-b border-stone-200">
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                  <span className="font-bold text-emerald-800">{readingArticle.category}</span>
                  <span>·</span>
                  <span>{readingArticle.date}</span>
                  <span>·</span>
                  <span>{readingArticle.readTime}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-stone-700">
                    <User className="w-3.5 h-3.5" />
                    {readingArticle.author}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight">
                  {readingArticle.title}
                </h2>
              </div>

              {/* Prose Content */}
              <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                {readingArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const cause = readingArticle.title;
                    setReadingArticle(null);
                    onOpenDonate(cause);
                  }}
                  className="flex-1 py-3.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Support this Field Mission</span>
                </button>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="py-3 px-6 border border-stone-300 hover:bg-stone-50 text-stone-700 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
