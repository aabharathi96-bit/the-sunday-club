import React, { useState } from 'react';
import { Bookmark, ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onSelect: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  variant?: 'standard' | 'polaroid' | 'compact' | 'featured';
  tapeStyle?: 'blush' | 'sage' | 'butter' | 'none';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  isBookmarked,
  onToggleBookmark,
  variant = 'standard',
  tapeStyle = 'none',
}) => {
  const [imageError, setImageError] = useState(false);
  const [likes, setLikes] = useState(article.likesCount || 140);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleBookmark(article.id);
  };

  // Tape class mapping
  const tapeClass =
    tapeStyle === 'blush'
      ? 'washi-tape-blush'
      : tapeStyle === 'sage'
      ? 'washi-tape-sage'
      : tapeStyle === 'butter'
      ? 'washi-tape-butter'
      : '';

  if (variant === 'featured') {
    return (
      <article
        onClick={() => onSelect(article)}
        className="group relative bg-white border border-[#E8DFD3] rounded-3xl overflow-hidden shadow-polaroid transition-all duration-500 hover:shadow-soft-lift hover:-translate-y-1 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
      >
        {/* Subtle decorative stamp in corner */}
        <div className="absolute top-4 left-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E3D7CA] text-[10px] uppercase tracking-widest font-sans text-[#705F51] shadow-2xs">
          <Sparkles className="w-3 h-3 text-[#B08970]" />
          <span>Editor’s Lead Story</span>
        </div>

        {/* Visual Zone: Polaroid framing */}
        <div className="lg:col-span-7 relative overflow-hidden aspect-[16/10] lg:aspect-auto bg-[#F2EAE0]">
          {!imageError ? (
            <img
              src={article.heroImage}
              alt={article.imageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-[#EFE8DE] flex items-center justify-center p-8 text-center text-[#73685C] font-serif italic">
              {article.title}
            </div>
          )}
          {/* Subtle gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Editorial Text Zone */}
        <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-[#FDFCFA]">
          <div className="space-y-4">
            {/* Zero Pill clean unboxed metadata with pastel dot */}
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-[#8C7665]">
              <span className="font-semibold text-[#8C7665]">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{article.date}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#221C18] leading-[1.18] group-hover:text-[#6E5848] transition-colors">
              {article.title}
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#5E544A] leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>

            {/* Handwritten note detail */}
            <p className="font-handwriting text-lg text-[#8A7565] pt-1">
              ~ savor this slow morning ritual ~
            </p>
          </div>

          <div className="pt-8 border-t border-[#EFE8DF] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-[#DFD3C6] shadow-2xs"
              />
              <div className="text-left">
                <p className="text-xs font-semibold text-[#221C18]">{article.author.name}</p>
                <p className="text-[11px] text-[#85796E]">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleLike}
                className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
                  hasLiked
                    ? 'border-[#DEB0AD] bg-[#FAF0EF] text-[#B85750]'
                    : 'border-[#EAE1D7] text-[#7A7167] hover:bg-[#F4ECE3]'
                }`}
                title="Savor this article"
              >
                <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-current' : ''}`} />
              </button>

              <button
                type="button"
                onClick={handleBookmark}
                className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'border-[#B8A291] bg-[#EFE7DE] text-[#544336]'
                    : 'border-[#EAE1D7] text-[#7A7167] hover:bg-[#F4ECE3]'
                }`}
                title={isBookmarked ? 'Saved to Sunday List' : 'Save for later'}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(article);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#221C18] text-white hover:bg-[#3D332A] text-xs font-medium font-sans shadow-sm transition-all ml-1 cursor-pointer"
              >
                <span>Read Story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Polaroid Scrapbook Card Layout
  return (
    <article
      onClick={() => onSelect(article)}
      className={`group relative bg-white border border-[#EBE2D7] rounded-2xl p-3.5 pb-5 shadow-polaroid hover:shadow-soft-lift hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer ${tapeClass}`}
    >
      {/* Photo Frame */}
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-[#F0E8DD]">
        {!imageError ? (
          <img
            src={article.heroImage}
            alt={article.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-[#EAE1D7] flex items-center justify-center p-6 text-center text-[#736A60] font-serif italic text-sm">
            {article.title}
          </div>
        )}

        {/* Floating Quick Bookmark */}
        <div className="absolute top-2.5 right-2.5 opacity-90 transition-opacity">
          <button
            type="button"
            onClick={handleBookmark}
            className={`p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
              isBookmarked
                ? 'bg-white text-[#574435] shadow-sm'
                : 'bg-white/80 text-[#544D45] hover:bg-white'
            }`}
            title="Bookmark"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Editorial Content Below Photo */}
      <div className="pt-4 px-1 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          {/* Zero Pill clean metadata */}
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-sans text-[#8C7665]">
            <span className="font-semibold text-[#8C7665]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="font-display text-xl text-[#221C18] leading-snug group-hover:text-[#685343] transition-colors">
            {article.title}
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[#665B51] leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>

        {/* Footer with date and Read More button */}
        <div className="pt-3 border-t border-[#F2ECE3] flex items-center justify-between text-xs text-[#80756A]">
          <span className="font-serif italic">{article.date}</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(article);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF5EE] border border-[#E4D9CC] font-sans font-medium text-[#3B322A] group-hover:bg-[#221C18] group-hover:text-white group-hover:border-[#221C18] transition-all cursor-pointer shadow-2xs"
          >
            <span>Read More</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
