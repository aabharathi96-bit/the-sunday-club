import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Heart } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setIsSubscribed(true);
  };

  return (
    <section className="py-24 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Envelope / Scrapbook Paper Card */}
        <div className="relative bg-white border border-[#E5DACD] rounded-3xl p-8 sm:p-14 shadow-polaroid text-center space-y-6 washi-tape-sage">
          
          {/* Aesthetic Postage Stamp Detail in top-right */}
          <div className="hidden sm:flex absolute top-6 right-8 w-16 h-20 border-2 border-dashed border-[#D2C2B2] bg-[#FAF5EE] rounded p-1 flex-col items-center justify-center text-[#7A6B60] rotate-3 shadow-2xs select-none">
            <span className="text-[#C78278] text-xs">✦</span>
            <span className="text-[9px] font-sans uppercase font-bold tracking-wider text-[#6B5A4D]">SUNDAY</span>
            <span className="text-[10px] font-serif font-bold text-[#221C18]">CLUB</span>
            <span className="text-[8px] text-[#A6978A]">PAR AVION</span>
          </div>

          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#8A7565] font-sans font-semibold">
            <Mail className="w-3.5 h-3.5 text-[#B08970]" />
            <span>The Weekly Dispatch · Curated Every Sunday</span>
          </div>

          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl text-[#221C18] leading-tight">
              Wake Up With “The Sunday Letter”
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#5E5247] leading-relaxed">
              Every Sunday morning at 8:00 AM, we send a quiet digital letter filled with essays on slow living, our favorite playlists, cozy book recommendations, and seasonal rituals.
            </p>
            <p className="font-handwriting text-xl text-[#8E7866] pt-1">
              ~ join 12,000+ gentle readers across the globe ~
            </p>
          </div>

          {isSubscribed ? (
            <div className="p-6 rounded-2xl bg-[#EFF5ED] border border-[#C6DCBF] max-w-md mx-auto space-y-2 text-[#2C4A27]">
              <div className="flex items-center justify-center gap-2 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>You’re on the guest list!</span>
              </div>
              <p className="text-xs font-serif italic text-[#3B5935]">
                We’ve reserved a quiet corner in our inbox for you. Your first cozy Sunday letter will arrive this weekend.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-3 rounded-xl border border-[#D9CEBF] bg-white text-sm text-[#2E2822] placeholder-[#A3978A] focus:outline-none focus:ring-1 focus:ring-[#8E7868]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#29221D] text-white text-sm font-medium hover:bg-[#473B33] transition-colors cursor-pointer shrink-0 shadow-sm inline-flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-[#82776C] pt-2">
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3 text-[#B06760]" /> No spam, ever
                </span>
                <span>·</span>
                <span>Unsubscribe anytime</span>
                <span>·</span>
                <span>Only warm thoughts</span>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
