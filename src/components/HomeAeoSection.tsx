import React from 'react';
import { Sparkles, ArrowRight, HelpCircle } from 'lucide-react';

interface HomeAeoSectionProps {
  onNavigateArticle: (slug: string) => void;
}

export const HomeAeoSection: React.FC<HomeAeoSectionProps> = ({ onNavigateArticle }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF5EE] border-y border-[#EAE0D3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#8C7665] font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B08970]" />
            <span>Slow Living Insights &amp; Quick Answers</span>
            <span className="text-[#C78278]">✦</span>
          </div>
          <p className="font-display text-3xl sm:text-4xl text-[#221C18]">
            Questions on Slow Living &amp; Mindful Habits
          </p>
          <p className="font-serif italic text-base sm:text-lg text-[#6B5E52]">
            Concise answers and thoughtful guidance to help you cultivate an unhurried, peaceful life.
          </p>
        </div>

        {/* Q&A Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Question 1 */}
          <div className="bg-white border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 shadow-polaroid space-y-4 flex flex-col justify-between relative group hover:shadow-soft-lift transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#8C7665] font-semibold">
                <HelpCircle className="w-4 h-4 text-[#A88874]" />
                <span>Frequently Asked Question · Core Concepts</span>
              </div>

              {/* Question-based H2 Heading */}
              <h2 className="font-display text-2xl text-[#241F1B] leading-snug">
                What is slow living?
              </h2>

              {/* Concise Direct Answer Callout */}
              <div className="p-4 rounded-2xl bg-[#F6EFE6] border-l-4 border-[#8C6D58] space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-widest text-[#8C6D58] font-bold">
                  <Sparkles className="w-3 h-3" />
                  <span>Direct Answer</span>
                </div>
                <p className="font-serif text-sm sm:text-base text-[#2E2620] leading-relaxed italic">
                  Slow living is an intentional lifestyle approach that prioritizes presence over pace, quality over quantity, and mindful connection to everyday moments rather than chronic multitasking and urgency.
                </p>
              </div>

              {/* Expanded Explanation with Internal Link */}
              <p className="font-sans text-sm sm:text-base text-[#4F4439] leading-relaxed">
                Rather than performing tasks at a sluggish speed, slow living means doing things at the right speed—savoring your morning brew, giving single-minded attention to meaningful projects, and protecting quiet space for restorative rest. When you intentionally decelerate, you reclaim your mental clarity and reduce burnout. Discover practical{' '}
                <a
                  href="/blog/slow-living-tips/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateArticle('slow-living-tips');
                  }}
                  className="text-[#8C6D58] underline decoration-[#CDBBB0] decoration-1 underline-offset-4 hover:text-[#574335] hover:decoration-[#8C6D58] font-medium transition-colors cursor-pointer"
                >
                  slow living tips for a peaceful everyday life
                </a>{' '}
                to transform your daily rhythm.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F2ECE3]">
              <a
                href="/blog/slow-living-tips/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateArticle('slow-living-tips');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7D6350] hover:text-[#2E2620] hover:underline font-sans cursor-pointer transition-colors"
              >
                <span>slow living tips for a peaceful everyday life</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 shadow-polaroid space-y-4 flex flex-col justify-between relative group hover:shadow-soft-lift transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#8C7665] font-semibold">
                <HelpCircle className="w-4 h-4 text-[#A88874]" />
                <span>Frequently Asked Question · Practical Guidance</span>
              </div>

              {/* Question-based H2 Heading */}
              <h2 className="font-display text-2xl text-[#241F1B] leading-snug">
                How can I start living a slower life?
              </h2>

              {/* Concise Direct Answer Callout */}
              <div className="p-4 rounded-2xl bg-[#F6EFE6] border-l-4 border-[#8C6D58] space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-widest text-[#8C6D58] font-bold">
                  <Sparkles className="w-3 h-3" />
                  <span>Direct Answer</span>
                </div>
                <p className="font-serif text-sm sm:text-base text-[#2E2620] leading-relaxed italic">
                  You can start living a slower life by simplifying your morning schedule, creating designated screen-free time blocks, practicing single-tasking, and cultivating simple slow living habits like brewing loose-leaf tea or taking unhurried daily walks.
                </p>
              </div>

              {/* Expanded Explanation with Internal Links */}
              <p className="font-sans text-sm sm:text-base text-[#4F4439] leading-relaxed">
                Start with micro-habits rather than an overwhelming life overhaul. Choose one tactile morning ritual, establish an analog evening boundary, and give yourself permission to leave white space on your weekly calendar. Learn how to{' '}
                <a
                  href="/blog/self-care-routine/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateArticle('self-care-routine');
                  }}
                  className="text-[#8C6D58] underline decoration-[#CDBBB0] decoration-1 underline-offset-4 hover:text-[#574335] hover:decoration-[#8C6D58] font-medium transition-colors cursor-pointer"
                >
                  create a simple self-care routine
                </a>{' '}
                that replenishes your inner reserves, and bring tactile comfort into your home with{' '}
                <a
                  href="/blog/cozy-lifestyle-ideas/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateArticle('cozy-lifestyle-ideas');
                  }}
                  className="text-[#8C6D58] underline decoration-[#CDBBB0] decoration-1 underline-offset-4 hover:text-[#574335] hover:decoration-[#8C6D58] font-medium transition-colors cursor-pointer"
                >
                  cozy lifestyle ideas for a relaxing home
                </a>
                . Small, consistent rituals gradually shift your nervous system from frantic urgency into lasting calm.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F2ECE3] flex flex-wrap gap-4 items-center justify-between">
              <a
                href="/blog/self-care-routine/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateArticle('self-care-routine');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7D6350] hover:text-[#2E2620] hover:underline font-sans cursor-pointer transition-colors"
              >
                <span>create a simple self-care routine</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/blog/cozy-lifestyle-ideas/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateArticle('cozy-lifestyle-ideas');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7D6350] hover:text-[#2E2620] hover:underline font-sans cursor-pointer transition-colors"
              >
                <span>cozy lifestyle ideas for a relaxing home</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
