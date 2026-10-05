import React from 'react';
import { BookOpen, Coffee, Sparkles, Heart } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onReadFeatured: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onReadFeatured,
}) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Delicate Pinterest pastel ambient glow */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[300px] bg-gradient-to-br from-[#FBF4E4]/60 via-[#F7ECE9]/50 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[500px] h-[250px] bg-gradient-to-bl from-[#E8EFE6]/50 via-[#F5EFEB]/40 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Intro Lockup */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16 relative">
          
          {/* Handwritten top note */}
          <div className="flex items-center justify-center gap-2">
            <span className="font-handwriting text-xl sm:text-2xl text-[#8E7866] rotate-[-2deg]">
              ~ pour a warm cup &amp; linger awhile ~
            </span>
          </div>

          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#8A7361] font-sans font-semibold">
            <span className="text-[#BD9148]">✦</span>
            <span>Digital Lifestyle Magazine</span>
            <span aria-hidden="true">·</span>
            <span>Autumn Volume XIV</span>
            <span className="text-[#C78278]">✧</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#221C18] leading-[1.08] [text-wrap:balance]">
            The Sunday Club
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-[#5C5044] max-w-2xl mx-auto leading-relaxed">
            “A little corner for slow days, soft thoughts &amp; beautiful living.”
          </p>
        </div>

        {/* Hero Visual Card: Polaroid Magazine Spread */}
        <div className="relative rounded-3xl overflow-hidden shadow-soft-lift border border-[#ECE0D3] bg-white p-3 sm:p-4">
          
          {/* Subtle Washi Tape Accent on the frame */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-32 h-6 bg-[#F7ECE9]/90 border-x border-[#DEBDB6] -rotate-1 shadow-xs pointer-events-none hidden sm:block" />

          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/10] bg-[#EFE7DE]">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80"
              alt="Cozy sunlit Sunday morning with ceramic mug of coffee, open vintage poetry book, and linen sheets"
              className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Ambient vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

            {/* Bottom Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="max-w-xl space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] tracking-widest uppercase font-sans text-[#F7ECE1] drop-shadow-sm font-semibold">
                    Curated Sunday Essay · Lead Feature
                  </span>
                  <span className="text-xs text-[#F2DFD8]">✦</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white leading-snug drop-shadow-md">
                  10 Little Things That Make a Sunday Feel Special
                </h2>
                <p className="text-xs sm:text-sm text-[#EFE4D6] font-sans line-clamp-2 drop-shadow">
                  From pre-warmed ceramic mugs and acoustic melodies to leaving the linen curtains drifting in the gentle autumn breeze.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={onReadFeatured}
                  className="px-5 py-3 rounded-xl bg-white text-[#221C18] hover:bg-[#F9F3EB] transition-colors text-xs sm:text-sm font-medium shadow-md cursor-pointer inline-flex items-center gap-2 font-sans"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Story
                </button>
                <button
                  onClick={onExploreClick}
                  className="px-5 py-3 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors text-xs sm:text-sm font-medium border border-white/30 cursor-pointer inline-flex items-center gap-2 font-sans"
                >
                  <Coffee className="w-4 h-4" />
                  Explore Journal
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pinterest Editorial Micro Cards */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white border border-[#ECE2D7] shadow-2xs space-y-1 hover:border-[#D5C7B8] transition-colors">
            <span className="block text-[11px] uppercase tracking-wider text-[#8A7565] font-sans font-semibold">
              Curated For
            </span>
            <p className="font-serif italic text-sm text-[#38312B]">Slow mornings &amp; soft light</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#ECE2D7] shadow-2xs space-y-1 hover:border-[#D5C7B8] transition-colors">
            <span className="block text-[11px] uppercase tracking-wider text-[#8A7565] font-sans font-semibold">
              The Philosophy
            </span>
            <p className="font-serif italic text-sm text-[#38312B]">Il dolce far niente · Rest</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#ECE2D7] shadow-2xs space-y-1 hover:border-[#D5C7B8] transition-colors">
            <span className="block text-[11px] uppercase tracking-wider text-[#8A7565] font-sans font-semibold">
              The Ritual
            </span>
            <p className="font-serif italic text-sm text-[#38312B]">Warm brews &amp; open paper</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#ECE2D7] shadow-2xs space-y-1 hover:border-[#D5C7B8] transition-colors">
            <span className="block text-[11px] uppercase tracking-wider text-[#8A7565] font-sans font-semibold">
              The Vibe
            </span>
            <p className="font-serif italic text-sm text-[#38312B]">Quiet joy &amp; no rush</p>
          </div>
        </div>

      </div>
    </section>
  );
};
