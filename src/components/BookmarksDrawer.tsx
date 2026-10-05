import React from 'react';
import { X, Bookmark, Trash2, ArrowUpRight, BookOpen } from 'lucide-react';
import { Article } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveBookmark: (articleId: string) => void;
  onClearAll: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FCFAF7] border-l border-[#E5DBCE] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-[#EAE1D7] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-[#8C7665]" />
              <h3 className="font-display text-xl text-[#241F1B]">
                Your Sunday Reading List
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#8C8072] hover:text-[#26201B] hover:bg-[#F2E8DC] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedArticles.length > 0 ? (
              savedArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-4 rounded-2xl bg-white border border-[#E8DFD3] hover:border-[#C7B5A2] shadow-sm transition-all flex flex-col justify-between gap-3 group"
                >
                  <div
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="cursor-pointer space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-[11px] text-[#8C7665] font-sans">
                      <span className="font-semibold">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h4 className="font-display text-base text-[#241F1B] group-hover:text-[#6E5848] transition-colors leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-xs text-[#73685C] line-clamp-2 font-sans">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F2ECE3] flex items-center justify-between text-xs">
                    <button
                      onClick={() => {
                        onSelectArticle(article);
                        onClose();
                      }}
                      className="inline-flex items-center gap-1 font-medium text-[#4D3F33] hover:underline cursor-pointer"
                    >
                      Read Now <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onRemoveBookmark(article.id)}
                      className="text-[#96897B] hover:text-rose-700 transition-colors p-1 cursor-pointer"
                      title="Remove from saved list"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 space-y-3">
                <BookOpen className="w-8 h-8 mx-auto text-[#C9BAAB]" />
                <p className="font-display text-lg text-[#26201B]">Your list is empty</p>
                <p className="font-serif italic text-xs text-[#7A6D60] max-w-xs mx-auto">
                  Click the bookmark icon on any article card to save stories for your lazy Sunday morning read.
                </p>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          {savedArticles.length > 0 && (
            <div className="p-4 border-t border-[#EAE1D7] bg-[#FAF5EE] flex items-center justify-between text-xs text-[#73675A]">
              <span>{savedArticles.length} {savedArticles.length === 1 ? 'story' : 'stories'} saved</span>
              <button
                onClick={onClearAll}
                className="text-[#8C7665] hover:text-rose-700 font-sans cursor-pointer underline"
              >
                Clear all
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
