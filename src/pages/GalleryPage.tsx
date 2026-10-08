import React, { useState } from 'react';
import { PageId } from '../types';
import { GALLERY_ITEMS } from '../data/mockData';
import { Heart, MapPin, Calendar, X, Eye } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenDonate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const categories = ['All', 'Food Aid', 'Water Projects', 'Education', 'Medical Care', 'Emergency Relief'];

  const filtered = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <span>Visual Field Archive</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            Humanitarian Photo & Field Gallery
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            Portraying the dignity, resilience, and compassion of our communities across the globe. Each photograph documents real lives transformed by your generosity.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-stone-200">
          <span className="text-xs uppercase font-bold tracking-wider text-stone-500 mr-2 shrink-0">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-emerald-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 text-stone-900 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3.5 h-3.5 text-emerald-800" />
                    <span>View Story</span>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="text-emerald-800 font-semibold">{item.category}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-stone-400">
                  <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200">
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 bg-stone-900/80 hover:bg-stone-900 text-white p-2 rounded-full cursor-pointer transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-100">
                <span className="text-emerald-800 font-bold">{activePhoto.category}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  {activePhoto.location} · {activePhoto.year}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900">{activePhoto.title}</h3>
                <p className="text-sm text-stone-700 leading-relaxed mt-2">{activePhoto.caption}</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const cause = activePhoto.title;
                    setActivePhoto(null);
                    onOpenDonate(cause);
                  }}
                  className="flex-1 py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Donate to this Cause</span>
                </button>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="py-3 px-6 border border-stone-300 hover:bg-stone-50 text-stone-700 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
