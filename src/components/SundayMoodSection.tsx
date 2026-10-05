import React, { useState } from 'react';
import { SUNDAY_MOODS } from '../data/articles';
import { Sparkles, Quote, Music, Heart, Send, Check } from 'lucide-react';

interface SundayMoodSectionProps {
  isAmbientPlaying: boolean;
  onToggleAmbient: () => void;
}

export const SundayMoodSection: React.FC<SundayMoodSectionProps> = ({
  isAmbientPlaying,
  onToggleAmbient,
}) => {
  const [selectedMoodId, setSelectedMoodId] = useState('gentle');
  const [userNote, setUserNote] = useState('');
  const [savedNotes, setSavedNotes] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('sunday_club_reflections') || '[]');
    } catch {
      return [];
    }
  });
  const [justSaved, setJustSaved] = useState(false);

  const activeMood = SUNDAY_MOODS.find((m) => m.id === selectedMoodId) || SUNDAY_MOODS[0];

  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userNote.trim()) return;

    const updated = [userNote.trim(), ...savedNotes];
    setSavedNotes(updated);
    try {
      localStorage.setItem('sunday_club_reflections', JSON.stringify(updated));
    } catch {
      // ignore
    }
    setUserNote('');
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2500);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F5EFEB]/90 border-y border-[#EAE0D3] relative overflow-hidden">
      {/* Background soft pastel ambient blur */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-[#F7ECE9]/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-[#E8EFE6]/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#8A7565] font-sans font-semibold">
            <span className="text-[#C78278]">✦</span>
            <span>Weekly Sanctuaries</span>
            <span className="text-[#637F5E]">✧</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-[#221C18]">
            The Sunday Mood &amp; Reflection
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-[#7A6A5C]">
            ~ choose the atmosphere your spirit craves today ~
          </p>
        </div>

        {/* Mood Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {SUNDAY_MOODS.map((mood) => {
            const isSelected = mood.id === selectedMoodId;
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMoodId(mood.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium font-sans transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#221C18] text-white shadow-sm'
                    : 'bg-white border border-[#E0D5C7] text-[#595046] hover:bg-[#FAF6F0]'
                }`}
              >
                {mood.name}
              </button>
            );
          })}
        </div>

        {/* Mood Display Card: Scrapbook & Paper Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Quote & Ritual Container */}
          <div className="lg:col-span-7 bg-white border border-[#E5DACD] rounded-3xl p-8 sm:p-12 shadow-polaroid space-y-8 relative washi-tape-blush">
            <Quote className="w-10 h-10 text-[#E0D2C2] absolute top-8 right-8" />

            <div className="space-y-4 pt-2">
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#8C7665] font-semibold">
                Sunday Inspiration
              </span>
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#221C18] leading-[1.3] italic [text-wrap:balance]">
                “{activeMood.quote}”
              </blockquote>
              <p className="font-sans text-xs tracking-wider uppercase text-[#73685C] font-semibold">
                — {activeMood.author}
              </p>
            </div>

            {/* Ritual suggestion */}
            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8DDD0] space-y-2.5">
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#8A7565] font-semibold flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#C78278]" /> Gentle Sunday Ritual
              </span>
              <p className="font-serif text-base sm:text-lg text-[#38312B] leading-relaxed">
                {activeMood.ritual}
              </p>
            </div>

            {/* Ambient Soundscape & Playlist */}
            <div className="pt-4 border-t border-[#EFE8DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-[#F5ECE1] text-[#4A3F35]">
                  <Music className="w-4 h-4 text-[#8C7665]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#221C18]">Curated Soundscape</p>
                  <p className="text-xs text-[#7A6E63] font-serif italic">{activeMood.playlistName}</p>
                </div>
              </div>

              <button
                onClick={onToggleAmbient}
                className={`px-5 py-2.5 rounded-xl text-xs font-medium font-sans transition-all cursor-pointer border ${
                  isAmbientPlaying
                    ? 'bg-[#E8EFE6] border-[#BFD1BC] text-[#2F442C] shadow-2xs'
                    : 'bg-[#FAF6F0] border-[#DDD2C4] text-[#4A3F35] hover:bg-white'
                }`}
              >
                {isAmbientPlaying ? '✦ Pause Rain Soundscape' : '▶ Play Cozy Rain Audio'}
              </button>
            </div>
          </div>

          {/* Interactive Quiet Reflection Notepad */}
          <div className="lg:col-span-5 bg-white border border-[#E5DACD] rounded-3xl p-6 sm:p-10 shadow-polaroid space-y-6 relative washi-tape-sage">
            <div className="space-y-1.5 pt-2">
              <span className="text-[11px] uppercase tracking-widest text-[#8C7665] font-sans font-semibold">
                Quiet Reflection Pad
              </span>
              <h3 className="font-display text-2xl text-[#221C18]">
                A Whisper for Yourself
              </h3>
              <p className="font-serif italic text-sm text-[#5E5347] leading-relaxed">
                {activeMood.prompt}
              </p>
            </div>

            <form onSubmit={handleSaveReflection} className="space-y-3">
              <textarea
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder="Pen a quiet thought, gratitude, or intention here..."
                rows={3}
                className="w-full p-4 rounded-xl border border-[#D9CFC2] bg-[#FCFAF7] text-sm text-[#2E2822] placeholder-[#A3998D] focus:outline-none focus:ring-1 focus:ring-[#8E7868] resize-none font-serif leading-relaxed"
              />
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#8C8176] font-handwriting text-base">saved privately to browser</span>
                <button
                  type="submit"
                  disabled={!userNote.trim()}
                  className="px-5 py-2 rounded-xl bg-[#221C18] text-white text-xs font-medium hover:bg-[#3D332A] disabled:opacity-40 transition-colors cursor-pointer inline-flex items-center gap-1.5 font-sans"
                >
                  {justSaved ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" /> Saved!
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Save Reflection
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Recent Reflections List */}
            {savedNotes.length > 0 && (
              <div className="pt-3 border-t border-[#EAE0D3] space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#8A7565] font-sans font-semibold">
                  Recent Little Notes ({savedNotes.length})
                </span>
                <div className="max-h-28 overflow-y-auto space-y-2 pr-1">
                  {savedNotes.slice(0, 3).map((note, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-[#FAF6F0] border border-[#EAE0D3] text-xs text-[#3D352E] font-serif italic"
                    >
                      “{note}”
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
