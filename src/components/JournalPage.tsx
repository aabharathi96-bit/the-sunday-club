import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';
import { Article, Category } from '../types';
import { ArticleCard } from './ArticleCard';

interface JournalPageProps {
  articles: Article[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  onSelectArticle: (article: Article) => void;
  savedArticleIds: string[];
  onToggleBookmark: (articleId: string) => void;
}

const CATEGORIES: Category[] = [
  'All',
  'Slow Living',
  'Self-Care',
  'Lifestyle',
  'Journal',
  'Culture',
  'Inspiration',
];

export const JournalPage: React.FC<JournalPageProps> = ({
  articles,
  selectedCategory,
  onSelectCategory,
  onSelectArticle,
  savedArticleIds,
  onToggleBookmark,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'quick'>('latest');

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => {
        const matchesCategory =
          selectedCategory === 'All' || article.category === selectedCategory;
        const matchesSearch =
          searchQuery.trim() === '' ||
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') {
          return (b.likesCount || 0) - (a.likesCount || 0);
        }
        if (sortBy === 'quick') {
          const timeA = parseInt(a.readTime) || 5;
          const timeB = parseInt(b.readTime) || 5;
          return timeA - timeB;
        }
        // Default: latest by date/id
        return parseInt(b.id) - parseInt(a.id);
      });
  }, [articles, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Title & Intro */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7565] font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#A68A78]" />
            <span>The Complete Collection</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-[#26201B]">
            The Sunday Journal
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#61564C] leading-relaxed">
            Essays, rituals, and thoughtful guides to help you cultivate an unhurried, beautiful rhythm of living.
          </p>
        </div>

        {/* Filter & Search Bar Toolbar */}
        <div className="space-y-6">
          
          {/* Search bar and Sort selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FCFAF7] border border-[#E8DFD3] rounded-2xl p-3 sm:p-4 shadow-sm">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#8C8072] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stories, rituals, tags..."
                className="w-full pl-10 pr-9 py-2 rounded-xl bg-white border border-[#DDD3C6] text-xs sm:text-sm text-[#26201B] placeholder-[#9E9385] focus:outline-none focus:ring-1 focus:ring-[#8C7665]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C8072] hover:text-[#26201B] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs text-[#6B5F52]">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="font-sans">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular' | 'quick')}
                className="px-3 py-1.5 rounded-lg border border-[#DDD3C6] bg-white text-[#26201B] text-xs cursor-pointer focus:outline-none"
              >
                <option value="latest">Latest Stories</option>
                <option value="popular">Most Loved</option>
                <option value="quick">Quickest Reads</option>
              </select>
            </div>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#29221D] text-white shadow-sm'
                      : 'bg-[#FCFAF7] border border-[#DDD3C6] text-[#595045] hover:bg-[#F2EAE0]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#807466] border-b border-[#EAE1D7] pb-3">
          <span className="font-serif italic">
            Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'edition' : 'editions'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                onSelectCategory('All');
                setSearchQuery('');
              }}
              className="text-[#8C7665] hover:underline cursor-pointer font-sans"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Article Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredArticles.map((article, idx) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={onSelectArticle}
                isBookmarked={savedArticleIds.includes(article.id)}
                onToggleBookmark={onToggleBookmark}
                tapeStyle={idx % 3 === 0 ? 'blush' : idx % 3 === 1 ? 'sage' : 'butter'}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#FCFAF7] rounded-3xl border border-[#EAE1D7] space-y-4 max-w-md mx-auto p-8">
            <p className="font-display text-2xl text-[#2B231D]">No stories found</p>
            <p className="font-serif italic text-sm text-[#73685C]">
              We couldn’t find any articles matching “{searchQuery}”. Try clearing your search query or picking another category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('All');
              }}
              className="px-4 py-2 rounded-xl bg-[#29221D] text-white text-xs font-medium cursor-pointer"
            >
              View All Articles
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
