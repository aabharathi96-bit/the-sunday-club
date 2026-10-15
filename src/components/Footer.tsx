import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { Category } from '../types';

interface FooterProps {
  onNavigate: (tab: 'home' | 'journal' | 'about', categoryFilter?: Category) => void;
  onNavigateArticle?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateArticle }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241F1B] text-[#D8CEBF] border-t border-[#3B332C] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3B332C]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl text-[#FAF7F2] font-medium tracking-tight">
              The Sunday Club
            </h3>
            <p className="font-serif italic text-base text-[#B2A696] max-w-sm leading-relaxed">
              “A slow living blog and gentle sanctuary for unhurried days &amp; soft thoughts.”
            </p>
            <p className="text-xs text-[#8F8374] leading-relaxed max-w-md font-sans">
              Inspired by slow mornings, self-care routines, cozy home aesthetics, books, and quiet rituals. Created for readers who cherish an intentional life.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#BDB09F] font-sans font-medium">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-[#A89C8E]">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/journal"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('journal', 'All');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Journal
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About The Club
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Guides (Internal Links with Descriptive Anchors) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#BDB09F] font-sans font-medium">
              Featured Guides
            </span>
            <ul className="space-y-2 text-sm text-[#A89C8E]">
              <li>
                <a
                  href="/blog/slow-living-tips/"
                  onClick={(e) => {
                    if (onNavigateArticle) {
                      e.preventDefault();
                      onNavigateArticle('slow-living-tips');
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  Slow living tips for a peaceful everyday life
                </a>
              </li>
              <li>
                <a
                  href="/blog/self-care-routine/"
                  onClick={(e) => {
                    if (onNavigateArticle) {
                      e.preventDefault();
                      onNavigateArticle('self-care-routine');
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  Create a simple self-care routine
                </a>
              </li>
              <li>
                <a
                  href="/blog/cozy-lifestyle-ideas/"
                  onClick={(e) => {
                    if (onNavigateArticle) {
                      e.preventDefault();
                      onNavigateArticle('cozy-lifestyle-ideas');
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  Cozy lifestyle ideas for a relaxing home
                </a>
              </li>
            </ul>
          </div>

          {/* Editorial Pillars */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#BDB09F] font-sans font-medium">
              Topics &amp; Community
            </span>
            <ul className="space-y-1.5 text-xs text-[#A89C8E]">
              <li>
                <button
                  onClick={() => onNavigate('journal', 'Slow Living')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Slow Living Essays
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal', 'Self-Care')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Self-Care Rituals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal', 'Lifestyle')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cozy Lifestyle &amp; Home
                </button>
              </li>
            </ul>
          </div>

          {/* Socials & Community */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#BDB09F] font-sans font-medium">
              Community &amp; Savor
            </span>
            <p className="text-xs text-[#8F8374] font-serif italic">
              Join our cozy circles across the digital realm:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="#pinterest"
                onClick={(e) => e.preventDefault()}
                className="px-3 py-1.5 rounded-lg bg-[#2E2823] hover:bg-[#3D352F] text-xs text-[#D1C6B8] transition-colors border border-[#3D352E]"
              >
                Pinterest
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="px-3 py-1.5 rounded-lg bg-[#2E2823] hover:bg-[#3D352F] text-xs text-[#D1C6B8] transition-colors border border-[#3D352E]"
              >
                Instagram
              </a>
              <a
                href="#spotify"
                onClick={(e) => e.preventDefault()}
                className="px-3 py-1.5 rounded-lg bg-[#2E2823] hover:bg-[#3D352F] text-xs text-[#D1C6B8] transition-colors border border-[#3D352E]"
              >
                Spotify
              </a>
              <a
                href="#substack"
                onClick={(e) => e.preventDefault()}
                className="px-3 py-1.5 rounded-lg bg-[#2E2823] hover:bg-[#3D352F] text-xs text-[#D1C6B8] transition-colors border border-[#3D352E]"
              >
                Substack
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#85796C]">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B89F8B]" />
            <span>© {new Date().getFullYear()} The Sunday Club Magazine. Crafted with care for slow living.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Soft thoughts <Heart className="w-3 h-3 text-[#A8645C]" /> Gentle mornings
            </span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#2E2823] border border-[#3E352E] text-[#D8CEBF] hover:bg-[#3D352F] hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 px-3"
              title="Return to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
