import React, { useState, useEffect } from 'react';
import { ARTICLES } from './data/articles';
import { Article, Category } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ArticleCard } from './components/ArticleCard';
import { SundayMoodSection } from './components/SundayMoodSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { ArticleView } from './components/ArticleView';
import { JournalPage } from './components/JournalPage';
import { AboutPage } from './components/AboutPage';
import { SearchModal } from './components/SearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { soundscapes } from './utils/soundscapes';
import { Sparkles, ArrowRight, Heart, BookOpen, Coffee, Feather } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'journal' | 'about' | 'article'>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
  // Bookmarks persistence
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('sunday_club_bookmarks') || '[]');
    } catch {
      return ['1', '4'];
    }
  });

  // Ambient soundscape state
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  // Sync bookmarks with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sunday_club_bookmarks', JSON.stringify(savedArticleIds));
    } catch {
      // ignore
    }
  }, [savedArticleIds]);

  const toggleBookmark = (id: string) => {
    setSavedArticleIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearAllBookmarks = () => {
    setSavedArticleIds([]);
  };

  const handleToggleAmbient = () => {
    if (isAmbientPlaying) {
      soundscapes.stop();
      setIsAmbientPlaying(false);
    } else {
      soundscapes.play('rain', 0.25);
      setIsAmbientPlaying(true);
    }
  };

  const handleNavigate = (tab: 'home' | 'journal' | 'about', categoryFilter?: Category) => {
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
    } else if (tab === 'journal') {
      setSelectedCategory('All');
    }
    setActiveTab(tab);
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    setActiveTab('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const latestArticles = ARTICLES.filter((a) => a.id !== featuredArticle.id).slice(0, 6);
  const savedArticlesList = ARTICLES.filter((a) => savedArticleIds.includes(a.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2723] selection:bg-[#E8DCCF]">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        savedCount={savedArticleIds.length}
        isAmbientPlaying={isAmbientPlaying}
        onToggleAmbient={handleToggleAmbient}
      />

      {/* Main View Switcher */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection
              onExploreClick={() => handleNavigate('journal')}
              onReadFeatured={() => handleSelectArticle(featuredArticle)}
            />

            {/* Featured Lead Story Section */}
            <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#EAE1D7]">
                <div className="flex items-center gap-2">
                  <Feather className="w-4 h-4 text-[#8C7665]" />
                  <span className="text-xs uppercase tracking-widest text-[#8C7665] font-sans font-semibold">
                    Editor’s Choice Story
                  </span>
                </div>
                <button
                  onClick={() => handleNavigate('journal')}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#5E5144] hover:text-[#241F1B] hover:underline cursor-pointer font-sans"
                >
                  View all 10 stories <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <ArticleCard
                article={featuredArticle}
                onSelect={handleSelectArticle}
                isBookmarked={savedArticleIds.includes(featuredArticle.id)}
                onToggleBookmark={toggleBookmark}
                variant="featured"
              />
            </section>

            {/* Pinterest-Inspired Scrapbook Mood Gallery Strip */}
            <section className="py-16 sm:py-20 bg-[#F5EFEB]/70 border-y border-[#EAE0D3] relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
                  <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest text-[#8C7665] font-sans font-semibold">
                    <span className="text-[#C78278]">✦</span>
                    <span>Scrapbook of Slow Moments</span>
                    <span className="text-[#637F5E]">✦</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl text-[#221C18]">
                    A Quiet Visual Diary
                  </h3>
                  <p className="font-handwriting text-xl text-[#7A6A5C]">
                    ~ little snapshots of warm coffee, sunlight, and soft thoughts ~
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Polaroid 1: Coffee & Croissant */}
                  <div className="bg-white p-3.5 pb-6 rounded-2xl shadow-polaroid border border-[#ECE2D8] rotate-[-2deg] hover:rotate-0 hover:shadow-soft-lift transition-all duration-300 relative group">
                    <div className="w-20 h-5 bg-[#F7ECE9]/90 border-x border-[#E3C2BC] absolute -top-2.5 left-1/2 -translate-x-1/2 rotate-1 shadow-2xs z-10" />
                    <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-[#EAE1D7]">
                      <img
                        src="/src/assets/images/article_coffee_morning_1791190676570.jpg"
                        alt="Breakfast with croissant and coffee"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="font-handwriting text-center text-lg text-[#52473D]">
                      Fresh brew &amp; buttery croissant
                    </p>
                  </div>

                  {/* Polaroid 2: Cozy Corner */}
                  <div className="bg-white p-3.5 pb-6 rounded-2xl shadow-polaroid border border-[#ECE2D8] rotate-[1.5deg] hover:rotate-0 hover:shadow-soft-lift transition-all duration-300 relative group">
                    <div className="w-20 h-5 bg-[#E8EFE6]/90 border-x border-[#BFD1BC] absolute -top-2.5 left-1/2 -translate-x-1/2 -rotate-1 shadow-2xs z-10" />
                    <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-[#EAE1D7]">
                      <img
                        src="/src/assets/images/article_cozy_corner_1791190689327.jpg"
                        alt="Cozy reading chair and lamp"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="font-handwriting text-center text-lg text-[#52473D]">
                      My afternoon sanctuary
                    </p>
                  </div>

                  {/* Polaroid 3: Sunset Bedroom */}
                  <div className="bg-white p-3.5 pb-6 rounded-2xl shadow-polaroid border border-[#ECE2D8] rotate-[-1.5deg] hover:rotate-0 hover:shadow-soft-lift transition-all duration-300 relative group">
                    <div className="w-20 h-5 bg-[#FBF4E4]/90 border-x border-[#DFCCA7] absolute -top-2.5 left-1/2 -translate-x-1/2 rotate-2 shadow-2xs z-10" />
                    <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-[#EAE1D7]">
                      <img
                        src="/src/assets/images/article_sunset_bedroom_1791191274458.jpg"
                        alt="Golden hour bedroom with peonies"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="font-handwriting text-center text-lg text-[#52473D]">
                      Golden hour &amp; peonies
                    </p>
                  </div>

                  {/* Polaroid 4: Sidewalk Cafe */}
                  <div className="bg-white p-3.5 pb-6 rounded-2xl shadow-polaroid border border-[#ECE2D8] rotate-[2deg] hover:rotate-0 hover:shadow-soft-lift transition-all duration-300 relative group">
                    <div className="w-20 h-5 bg-[#F7ECE9]/90 border-x border-[#E3C2BC] absolute -top-2.5 left-1/2 -translate-x-1/2 -rotate-2 shadow-2xs z-10" />
                    <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-[#EAE1D7]">
                      <img
                        src="/src/assets/images/article_cafe_street_1791191294313.jpg"
                        alt="Sidewalk café with matcha and roses"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="font-handwriting text-center text-lg text-[#52473D]">
                      Café mornings in the sun
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Latest Journal Entries Grid */}
            <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#EAE1D7]">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#8C7665] font-sans font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#B08970]" />
                    <span>The Journal Collection</span>
                    <span>·</span>
                    <span>Autumn Reads</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl text-[#221C18]">
                    Recent Editions for Slow Living
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleNavigate('journal')}
                    className="px-5 py-2.5 rounded-xl border border-[#D9CEBF] bg-white hover:bg-[#FAF6F0] text-xs font-medium text-[#382F27] transition-all cursor-pointer inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Explore All Stories</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {latestArticles.map((article, idx) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onSelect={handleSelectArticle}
                    isBookmarked={savedArticleIds.includes(article.id)}
                    onToggleBookmark={toggleBookmark}
                    tapeStyle={idx % 3 === 0 ? 'blush' : idx % 3 === 1 ? 'sage' : 'butter'}
                  />
                ))}
              </div>
            </section>

            {/* Sunday Mood Section */}
            <SundayMoodSection
              isAmbientPlaying={isAmbientPlaying}
              onToggleAmbient={handleToggleAmbient}
            />

            {/* Newsletter Section */}
            <NewsletterSection />
          </>
        )}

        {/* Journal / Blog Page */}
        {activeTab === 'journal' && (
          <JournalPage
            articles={ARTICLES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectArticle={handleSelectArticle}
            savedArticleIds={savedArticleIds}
            onToggleBookmark={toggleBookmark}
          />
        )}

        {/* About Page */}
        {activeTab === 'about' && (
          <AboutPage onExploreJournal={() => handleNavigate('journal')} />
        )}

        {/* Article Full Detail View */}
        {activeTab === 'article' && selectedArticle && (
          <ArticleView
            article={selectedArticle}
            allArticles={ARTICLES}
            onBack={() => handleNavigate('journal')}
            onSelectArticle={handleSelectArticle}
            isBookmarked={savedArticleIds.includes(selectedArticle.id)}
            onToggleBookmark={toggleBookmark}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={ARTICLES}
        onSelectArticle={handleSelectArticle}
      />

      {/* Bookmarks Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedArticles={savedArticlesList}
        onSelectArticle={handleSelectArticle}
        onRemoveBookmark={toggleBookmark}
        onClearAll={clearAllBookmarks}
      />

    </div>
  );
}
