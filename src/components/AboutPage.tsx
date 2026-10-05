import React, { useState } from 'react';
import { Sparkles, Heart, Coffee, BookOpen, Sun, Feather, Check } from 'lucide-react';

interface AboutPageProps {
  onExploreJournal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onExploreJournal }) => {
  const [checklist, setChecklist] = useState<{ id: number; text: string; done: boolean }[]>([
    { id: 1, text: 'Waking up without an alarm and greeting the daylight softly', done: true },
    { id: 2, text: 'Pre-warming your ceramic mug for tea or morning brew', done: true },
    { id: 3, text: 'Reading at least one chapter of beloved literature in bed', done: false },
    { id: 4, text: 'Lighting a woody botanical candle as dusk settles', done: false },
    { id: 5, text: 'A walk without destination, headphones, or step counters', done: false },
    { id: 6, text: 'Writing down 3 tiny delights from the past seven days', done: false },
  ]);

  const toggleCheck = (id: number) => {
    setChecklist(
      checklist.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Masthead */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7565] font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#A68A78]" />
            <span>The Concept &amp; Story</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl text-[#241F1B] leading-tight">
            About The Sunday Club
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-[#63574C] max-w-xl mx-auto leading-relaxed">
            “A little corner for slow days, soft thoughts &amp; beautiful living.”
          </p>
        </div>

        {/* Hero Visual Scrapbook */}
        <div className="relative rounded-3xl overflow-hidden shadow-soft-lift border border-[#EBE1D6] bg-white p-3.5 sm:p-5 washi-tape-butter">
          <div className="aspect-[16/9] relative rounded-2xl overflow-hidden bg-[#EFE7DE]">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
              alt="Founders enjoying a tranquil morning by an open window"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white max-w-lg">
              <span className="text-[11px] uppercase tracking-widest font-sans drop-shadow-sm font-semibold">
                ✦ Founders’ Note · Clara &amp; Eleanor
              </span>
              <p className="font-serif italic text-base sm:text-xl text-[#F5EDE3] drop-shadow leading-relaxed">
                “We created this digital sanctuary to remind ourselves that quiet days are not empty days.”
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Letter */}
        <section className="bg-white border border-[#E8DFD3] rounded-3xl p-8 sm:p-14 shadow-polaroid space-y-6 relative washi-tape-blush">
          <div className="flex items-center gap-3 border-b border-[#EFE8DF] pb-4">
            <Feather className="w-5 h-5 text-[#8C7665]" />
            <span className="text-[11px] uppercase tracking-widest text-[#8C7665] font-sans font-semibold">
              The Editor’s Letter · Autumn Reverie
            </span>
          </div>

          <div className="space-y-4 font-serif text-base sm:text-lg text-[#3A322B] leading-relaxed">
            <p className="drop-cap">
              Welcome to our little corner. The Sunday Club was born out of a simple, shared fatigue with the relentless speed of modern living. In a world that glorifies chronic hustle, 5:00 AM grinding, and endless digital notifications, we found ourselves desperately craving the exact opposite: stillness, tactile warmth, and the permission to linger.
            </p>

            <p>
              We wanted a digital publication that felt like sitting across from an old friend in a sun-drenched café, sipping cappuccino while the afternoon rain drummed against the windowpane. A place where you don’t feel urged to optimize yourself, but rather invited to soften, to romanticize your ordinary Tuesday, and to make space for the quiet poetry waiting in your everyday life.
            </p>

            <p>
              Whether you are reading from an armchair piled high with blankets, waiting for water to boil on the stove, or stealing a gentle five-minute pause during a busy work week, we hope The Sunday Club feels like a warm exhale for your mind.
            </p>
          </div>

          <div className="pt-6 border-t border-[#EFE8DF] flex items-center justify-between text-xs text-[#7B6F63]">
            <span className="font-handwriting text-2xl text-[#8E7866]">With love &amp; soft thoughts,</span>
            <span className="font-sans font-semibold text-[#221C18]">Clara Vance &amp; Eleanor Brooks</span>
          </div>
        </section>

        {/* The 4 Tenets of The Sunday Club */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#8C7665] font-sans">
              Our Core Philosophy
            </span>
            <h2 className="font-display text-3xl text-[#241F1B]">
              The Four Pillars of Slow Living
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FCFAF7] border border-[#E8DFD3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0E6D8] flex items-center justify-center text-[#5E4D3E]">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl text-[#241F1B]">1. The Unhurried Cadence</h3>
              <p className="text-xs sm:text-sm text-[#61574C] font-sans leading-relaxed">
                Allowing days to breathe. We reject the false notion that productivity defines human worth. Resting is not laziness; it is replenishment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FCFAF7] border border-[#E8DFD3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0E6D8] flex items-center justify-center text-[#5E4D3E]">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl text-[#241F1B]">2. Sacred Micro-Rituals</h3>
              <p className="text-xs sm:text-sm text-[#61574C] font-sans leading-relaxed">
                Transforming mundane habits into nourishing rituals—from the scent of fresh ground beans to the warm glow of evening candlelight.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FCFAF7] border border-[#E8DFD3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0E6D8] flex items-center justify-center text-[#5E4D3E]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl text-[#241F1B]">3. Tactile &amp; Analog Pleasures</h3>
              <p className="text-xs sm:text-sm text-[#61574C] font-sans leading-relaxed">
                Reconnecting with paper books, handwritten journals, vinyl music, home baking, and muddy nature trails away from glowing screens.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FCFAF7] border border-[#E8DFD3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0E6D8] flex items-center justify-center text-[#5E4D3E]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl text-[#241F1B]">4. Gentle Ambition</h3>
              <p className="text-xs sm:text-sm text-[#61574C] font-sans leading-relaxed">
                Chasing dreams with grace rather than desperation. Building a life that genuinely feels like you, honoring your boundaries and unique rhythm.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Slow Sunday Checklist */}
        <section className="bg-[#F6EFE6] border border-[#E6DCCE] rounded-3xl p-8 sm:p-10 shadow-polaroid space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#8C7665] font-sans font-semibold">
              Interactive Savoring
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-[#241F1B]">
              Your Personal Slow Sunday Checklist
            </h2>
            <p className="font-serif italic text-sm text-[#6E6255]">
              Tap each intention to mark off moments you want to savor this coming weekend:
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {checklist.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`w-full p-3.5 rounded-xl border text-left flex items-center gap-3 transition-colors cursor-pointer ${
                  item.done
                    ? 'bg-[#EBF2E9] border-[#C2D6BF] text-[#2F442C]'
                    : 'bg-white border-[#E0D5C7] text-[#423A31] hover:bg-[#FAF7F2]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors shrink-0 ${
                    item.done
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-[#B8AB9B] bg-white'
                  }`}
                >
                  {item.done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className={`text-xs sm:text-sm font-serif ${item.done ? 'line-through text-[#637560]' : ''}`}>
                  {item.text}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-[#E2D6C8]">
            <span className="text-xs text-[#7A6E62] font-serif italic">
              {checklist.filter((i) => i.done).length} of {checklist.length} intentions embraced
            </span>
            <button
              onClick={onExploreJournal}
              className="px-5 py-2.5 rounded-xl bg-[#29221D] text-white text-xs font-medium hover:bg-[#473B33] transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              Explore Journal Stories
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
