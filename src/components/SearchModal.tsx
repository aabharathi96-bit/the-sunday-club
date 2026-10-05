import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

const POPULAR_SEARCHES = [
  'Slow Morning',
  'Romanticize Life',
  'Digital Detox',
  'Cozy Corner',
  'Journal Prompts',
  'Rituals',
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query, articles]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm transition-opacity">
      <div
        className="w-full max-w-2xl bg-[#FCFAF7] border border-[#E6DCCE] rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Input */}
        <div className="p-4 sm:p-6 border-b border-[#EAE1D7] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8A7A6C] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, rituals, ideas..."
            className="flex-1 bg-transparent text-base sm:text-lg text-[#26201B] placeholder-[#9E9182] focus:outline-none font-serif"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-[#8A7A6C] hover:text-[#26201B] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#7A6D60] hover:bg-[#F2E8DC] transition-colors cursor-pointer border border-[#DDD2C4]"
          >
            ESC
          </button>
        </div>

        {/* Content Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {query.trim() === '' ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7565] font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#A68A78]" />
                <span>Popular Explorations</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 rounded-full text-xs bg-[#F4ECE3] text-[#54483C] hover:bg-[#EAE0D3] transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#8A7A6C] font-sans font-medium">
                Found {searchResults.length} story matches
              </span>
              <div className="space-y-2">
                {searchResults.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="p-3.5 rounded-xl border border-[#E8DFD3] hover:border-[#C4B4A2] bg-white hover:bg-[#FAF6F0] transition-colors cursor-pointer flex items-center justify-between gap-4 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[11px] text-[#8C7665] font-sans">
                        <span className="font-semibold">{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h4 className="font-display text-base text-[#241F1B] group-hover:text-[#6E5848] transition-colors">
                        {article.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#A19485] group-hover:text-[#26201B] group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-10 space-y-2 text-[#7A6D60]">
              <BookOpen className="w-8 h-8 mx-auto text-[#C2B2A3]" />
              <p className="font-display text-lg text-[#26201B]">No stories found</p>
              <p className="font-serif italic text-xs">
                We couldn’t find an article matching “{query}”. Try another keyword.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
