import React, { useState } from 'react';
import { Search, Bookmark, Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { Category } from '../types';

interface NavbarProps {
  activeTab: 'home' | 'journal' | 'about' | 'article';
  onNavigate: (tab: 'home' | 'journal' | 'about', categoryFilter?: Category) => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  savedCount: number;
  isAmbientPlaying: boolean;
  onToggleAmbient: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenSearch,
  onOpenBookmarks,
  savedCount,
  isAmbientPlaying,
  onToggleAmbient,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'home' | 'journal' | 'about', category?: Category) => {
    onNavigate(tab, category);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner / Announcement */}
      <div className="bg-[#F5ECE3] border-b border-[#E6D9CB] px-4 py-2 text-center text-[11px] sm:text-xs tracking-wider text-[#665749] font-serif italic flex items-center justify-center gap-2">
        <span className="text-[#C78278] text-xs">✦</span>
        <span>Vol. XIV · The Autumn Art of Slowing Down · A quiet digital magazine for soft thoughts</span>
        <span className="text-[#637F5E] text-xs">✧</span>
      </div>

      {/* Main Top Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#EAE0D3] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Wordmark */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group cursor-pointer"
            >
              <span className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#221C18] group-hover:text-[#685545] transition-colors">
                The Sunday Club
              </span>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Text with underline hover) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5E574F]">
            <button
              onClick={() => handleNavClick('home')}
              className={`pb-1 transition-all hover:text-[#2C2723] cursor-pointer ${
                activeTab === 'home'
                  ? 'text-[#2C2723] border-b-2 border-[#2C2723]'
                  : 'hover:border-b-2 hover:border-[#8E8478]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('journal', 'Lifestyle')}
              className="pb-1 transition-all hover:text-[#2C2723] cursor-pointer hover:border-b-2 hover:border-[#8E8478]"
            >
              Lifestyle
            </button>
            <button
              onClick={() => handleNavClick('journal', 'Self-Care')}
              className="pb-1 transition-all hover:text-[#2C2723] cursor-pointer hover:border-b-2 hover:border-[#8E8478]"
            >
              Self-Care
            </button>
            <button
              onClick={() => handleNavClick('journal', 'Culture')}
              className="pb-1 transition-all hover:text-[#2C2723] cursor-pointer hover:border-b-2 hover:border-[#8E8478]"
            >
              Culture
            </button>
            <button
              onClick={() => handleNavClick('journal', 'All')}
              className={`pb-1 transition-all hover:text-[#2C2723] cursor-pointer ${
                activeTab === 'journal'
                  ? 'text-[#2C2723] border-b-2 border-[#2C2723]'
                  : 'hover:border-b-2 hover:border-[#8E8478]'
              }`}
            >
              Journal
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`pb-1 transition-all hover:text-[#2C2723] cursor-pointer ${
                activeTab === 'about'
                  ? 'text-[#2C2723] border-b-2 border-[#2C2723]'
                  : 'hover:border-b-2 hover:border-[#8E8478]'
              }`}
            >
              About
            </button>
          </nav>

          {/* Zone 3: Interactive Affordances (Search, Ambient, Bookmarks) */}
          <div className="flex items-center gap-3">
            {/* Ambient Soundscape Toggle */}
            <button
              onClick={onToggleAmbient}
              title={isAmbientPlaying ? 'Pause Ambient Rain & Soundscape' : 'Play Cozy Ambient Rain & Soundscape'}
              className={`p-2.5 rounded-full transition-colors cursor-pointer border ${
                isAmbientPlaying
                  ? 'bg-[#E5ECE3] border-[#C4D5C1] text-[#3D5239]'
                  : 'bg-transparent border-[#E3D9CE] text-[#6E645A] hover:bg-[#F2EAE0]'
              }`}
            >
              {isAmbientPlaying ? (
                <Volume2 className="w-4 h-4 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full border border-[#E3D9CE] text-[#6E645A] hover:bg-[#F2EAE0] transition-colors cursor-pointer"
              title="Search articles..."
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Saved Articles Drawer Trigger */}
            <button
              onClick={onOpenBookmarks}
              className="relative p-2.5 rounded-full border border-[#E3D9CE] text-[#6E645A] hover:bg-[#F2EAE0] transition-colors cursor-pointer"
              title="Saved reading list"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8E7060] text-white text-[10px] font-sans font-medium flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full border border-[#E3D9CE] text-[#6E645A] hover:bg-[#F2EAE0] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#EAE1D7] px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3 text-base font-serif text-[#3C3630]">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left py-2 hover:text-[#8E7060] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('journal', 'Lifestyle')}
                className="text-left py-2 hover:text-[#8E7060] transition-colors"
              >
                Lifestyle
              </button>
              <button
                onClick={() => handleNavClick('journal', 'Self-Care')}
                className="text-left py-2 hover:text-[#8E7060] transition-colors"
              >
                Self-Care
              </button>
              <button
                onClick={() => handleNavClick('journal', 'Culture')}
                className="text-left py-2 hover:text-[#8E7060] transition-colors"
              >
                Culture
              </button>
              <button
                onClick={() => handleNavClick('journal', 'All')}
                className="text-left py-2 hover:text-[#8E7060] transition-colors"
              >
                Journal &amp; Archive
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-left py-2 hover:text-[#8E7060] transition-colors"
              >
                About The Sunday Club
              </button>
            </div>
            <div className="pt-4 border-t border-[#EAE1D7] flex items-center justify-between text-xs text-[#7B7166]">
              <span className="flex items-center gap-1.5 font-serif italic">
                <Sparkles className="w-3.5 h-3.5 text-[#A68A78]" /> Slow mornings &amp; soft living
              </span>
              <button
                onClick={onToggleAmbient}
                className="text-[#8E7060] font-medium underline"
              >
                {isAmbientPlaying ? 'Pause Ambient' : 'Play Ambient'}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
