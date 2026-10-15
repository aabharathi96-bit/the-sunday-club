import React from 'react';
import { Sparkles, ArrowRight, HelpCircle, Sun, Coffee, BookOpen, Compass, Heart } from 'lucide-react';
import slowLivingTipsImg from '../assets/images/slow-living-tips-morning.webp';
import selfCareRoutineImg from '../assets/images/self-care-routine-ritual.webp';
import cozyLifestyleIdeasImg from '../assets/images/cozy-lifestyle-ideas-home.webp';

interface HomeAeoSectionProps {
  onNavigateArticle: (slug: string) => void;
}

export const HomeAeoSection: React.FC<HomeAeoSectionProps> = ({ onNavigateArticle }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF5EE] border-y border-[#EAE0D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Lead Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#8C7665] font-sans font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B08970]" />
            <span>Slow Living Guide &amp; AEO Insights</span>
            <span className="text-[#C78278]">✦</span>
          </div>
          <p className="font-display text-3xl sm:text-4xl text-[#221C18]">
            Intentional Habits, Questions &amp; Everyday Wisdom
          </p>
          <p className="font-serif italic text-base sm:text-lg text-[#6B5E52] leading-relaxed">
            Welcome to The Sunday Club slow living blog, your dedicated space for mindful living, simple living inspiration, and practical rituals for everyday calm.
          </p>
        </div>

        {/* ============================================================== */}
        {/* Core Concepts Q&A Grid: H2 What Is Slow Living? & H2 How Can You Start Living a Slower Life? */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Question 1: What Is Slow Living? */}
          <div className="bg-white border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 shadow-polaroid space-y-5 flex flex-col justify-between relative group hover:shadow-soft-lift transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#8C7665] font-semibold">
                <HelpCircle className="w-4 h-4 text-[#A88874]" />
                <span>Frequently Asked Question · Foundations</span>
              </div>

              {/* Semantic Question-Based H2 Heading */}
              <h2 className="font-display text-2xl sm:text-3xl text-[#241F1B] leading-snug">
                What Is Slow Living?
              </h2>

              {/* Clear, Direct Answer Callout for AEO & Featured Snippets */}
              <div className="p-4 rounded-2xl bg-[#F6EFE6] border-l-4 border-[#8C6D58] space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-widest text-[#8C6D58] font-bold">
                  <Sparkles className="w-3 h-3" />
                  <span>Direct Answer</span>
                </div>
                <p className="font-serif text-sm sm:text-base text-[#2E2620] leading-relaxed italic">
                  Slow living is an intentional lifestyle approach that prioritizes presence over pace, quality over quantity, and mindful connection to everyday moments rather than chronic multitasking and urgency.
                </p>
              </div>

              {/* Natural Explanatory Paragraph */}
              <p className="font-sans text-sm sm:text-base text-[#4F4439] leading-relaxed">
                At its heart, slow living encourages people to decelerate and truly enjoy everyday moments—from savoring a warm morning brew to unhurried conversations with loved ones. Rather than performing tasks at a sluggish speed, it means doing things at the right speed. By cultivating simple living inspiration and creating meaningful daily routines, you can step back from frantic rushing and live more intentionally with clarity, calm, and purpose.
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
                <span>Read slow living tips for a peaceful everyday life</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Question 2: How Can You Start Living a Slower Life? */}
          <div className="bg-white border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 shadow-polaroid space-y-5 flex flex-col justify-between relative group hover:shadow-soft-lift transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#8C7665] font-semibold">
                <Compass className="w-4 h-4 text-[#A88874]" />
                <span>Frequently Asked Question · Practical Guidance</span>
              </div>

              {/* Semantic Question-Based H2 Heading */}
              <h2 className="font-display text-2xl sm:text-3xl text-[#241F1B] leading-snug">
                How Can You Start Living a Slower Life?
              </h2>

              {/* Clear, Direct Answer Callout for AEO & Featured Snippets */}
              <div className="p-4 rounded-2xl bg-[#F6EFE6] border-l-4 border-[#8C6D58] space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-widest text-[#8C6D58] font-bold">
                  <Sparkles className="w-3 h-3" />
                  <span>Direct Answer</span>
                </div>
                <p className="font-serif text-sm sm:text-base text-[#2E2620] leading-relaxed italic">
                  You can start living a slower life by simplifying daily routines, reducing digital distractions, spending unhurried time in nature, and deliberately making time for meaningful, restorative activities.
                </p>
              </div>

              {/* Practical Suggestions Breakdown */}
              <div className="space-y-2 text-sm sm:text-base text-[#4F4439] leading-relaxed font-sans">
                <p>
                  To begin living a slower life, start with small, manageable shifts rather than an overwhelming lifestyle overhaul:
                </p>
                <ul className="space-y-1.5 pl-1 text-xs sm:text-sm text-[#43382F]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D58] mt-2 shrink-0" />
                    <span><strong>Simplifying daily routines:</strong> Streamline your morning and evening commitments so your days begin and end without rushed panic.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D58] mt-2 shrink-0" />
                    <span><strong>Reducing distractions:</strong> Establish designated screen-free intervals and turn off non-urgent phone notifications.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D58] mt-2 shrink-0" />
                    <span><strong>Enjoying nature:</strong> Step outside for unmeasured daily walks under open skies to ground your thoughts and regulate your nervous system.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D58] mt-2 shrink-0" />
                    <span><strong>Making time for meaningful activities:</strong> Protect quiet time blocks for reading, journaling, brewing loose-leaf tea, or creative hobbies.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2ECE3]">
              <a
                href="/blog/self-care-routine/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateArticle('self-care-routine');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7D6350] hover:text-[#2E2620] hover:underline font-sans cursor-pointer transition-colors"
              >
                <span>Learn how to create a simple self-care routine</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* Practical Habits Section: H2 Simple Slow Living Habits for Everyday Life */}
        {/* With Subsections: H3 Create a Peaceful Morning Routine & H3 Make Time for Mindful Moments */}
        {/* ============================================================== */}
        <div className="bg-white border border-[#E8DFD3] rounded-3xl p-6 sm:p-10 shadow-polaroid space-y-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#8C7665] font-semibold">
              <Sun className="w-4 h-4 text-[#A88874]" />
              <span>Everyday Rhythms &amp; Rituals</span>
            </div>
            
            {/* Semantic H2 Heading */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#241F1B] leading-snug">
              Simple Slow Living Habits for Everyday Life
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-[#4F4439] leading-relaxed">
              Sustainable transformation happens through repeatable, gentle rituals rather than rigid rules. Incorporating simple slow living habits into your everyday life helps soothe your nervous system, reduces stress, and invites mindful living into every corner of your day.
            </p>
          </div>

          {/* Subsections Grid (H3s) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Subsection 1 (H3) */}
            <div className="p-6 rounded-2xl bg-[#FCFAF7] border border-[#ECE2D6] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] flex items-center justify-center text-[#8C6D58]">
                <Coffee className="w-5 h-5" />
              </div>
              
              <h3 className="font-display text-xl sm:text-2xl text-[#241F1B] font-medium leading-snug">
                Create a Peaceful Morning Routine
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-[#54483E] leading-relaxed">
                How you begin your morning sets the emotional tone for your entire day. Creating a simple, peaceful morning routine—such as drinking a glass of water before checking your phone, stretching in natural sunlight, or savoring a warm cup of coffee without screens—helps you begin your day more intentionally. By protecting the first hour from work notifications and digital noise, you anchor yourself in calm and approach your daily responsibilities with steady focus.
              </p>
            </div>

            {/* Subsection 2 (H3) */}
            <div className="p-6 rounded-2xl bg-[#FCFAF7] border border-[#ECE2D6] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] flex items-center justify-center text-[#8C6D58]">
                <BookOpen className="w-5 h-5" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl text-[#241F1B] font-medium leading-snug">
                Make Time for Mindful Moments
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#54483E] leading-relaxed">
                Throughout busy days, making time for mindful moments allows you to hit pause and reset your mental energy. You can slow down by practicing single-tasking—devoting your full attention to one activity, whether washing the dishes, preparing lunch, or listening to ambient acoustic music. Taking regular breaks from digital distractions by stepping away from screens, gazing out a window, or taking three deep breaths helps you stay grounded, notice sensory beauty, and fully enjoy everyday activities.
              </p>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* AEO Question 3: H2 How Can Mindful Living Improve Your Daily Routine? */}
        {/* ============================================================== */}
        <div className="bg-white border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 shadow-polaroid space-y-5">
          <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#8C7665] font-semibold">
            <Heart className="w-4 h-4 text-[#A88874]" />
            <span>Frequently Asked Question · Daily Impact</span>
          </div>

          {/* Semantic Question-Based H2 Heading */}
          <h2 className="font-display text-2xl sm:text-3xl text-[#241F1B] leading-snug">
            How Can Mindful Living Improve Your Daily Routine?
          </h2>

          {/* Direct Answer Callout */}
          <div className="p-4 rounded-2xl bg-[#F6EFE6] border-l-4 border-[#8C6D58] space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-widest text-[#8C6D58] font-bold">
              <Sparkles className="w-3 h-3" />
              <span>Direct Answer</span>
            </div>
            <p className="font-serif text-sm sm:text-base text-[#2E2620] leading-relaxed italic">
              Mindful living improves your daily routine by helping you pay closer attention to your habits, surroundings, and everyday experiences, transforming automatic, rushed tasks into intentional, grounding moments.
            </p>
          </div>

          {/* Concise Explanatory Paragraph */}
          <p className="font-sans text-sm sm:text-base text-[#4F4439] leading-relaxed">
            When you practice mindful living, you step out of autopilot and develop greater awareness of how you spend your time and energy. It helps you recognize unproductive habits—such as reactive screen scrolling or rushing through meals—and replaces them with intentional choices that foster peace. Paying attention to your physical surroundings and sensory details cultivates gratitude, lowers everyday anxiety, and ensures your daily routine supports your physical and emotional well-being.
          </p>
        </div>

        {/* ============================================================== */}
        {/* Curated Library Guides: H2 Explore Our Slow Living and Lifestyle Articles */}
        {/* ============================================================== */}
        <div className="space-y-8 pt-4">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#8C7665] font-semibold">
              <BookOpen className="w-4 h-4 text-[#A88874]" />
              <span>Editorial Articles &amp; Complete Guides</span>
            </div>

            {/* Semantic H2 Heading */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#241F1B] leading-snug">
              Explore Our Slow Living and Lifestyle Articles
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#52463C] leading-relaxed">
              Explore our curated slow living and lifestyle articles to discover actionable habits, self-care routines, and cozy home ideas designed to bring peace to your everyday life. Each guide provides practical steps and simple living inspiration to help you cultivate an unhurried, nourishing lifestyle:
            </p>
          </div>

          {/* 3 Featured Guides Cards with Exact Visible Link Text */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Article 1 */}
            <div className="bg-white border border-[#E8DFD3] rounded-2xl p-4 sm:p-5 shadow-polaroid flex flex-col justify-between space-y-4 hover:shadow-soft-lift hover:-translate-y-1 transition-all">
              <div className="space-y-3">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#EFE8DD]">
                  <img
                    src={slowLivingTipsImg}
                    alt="Person enjoying a quiet morning with a book and a cup of tea"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-[11px] font-sans uppercase tracking-widest text-[#8C7665] font-semibold">
                  Slow Living · Guide 01
                </div>
                <p className="font-display text-xl text-[#221C18] leading-snug">
                  <a
                    href="/blog/slow-living-tips/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateArticle('slow-living-tips');
                    }}
                    className="hover:text-[#8C6D58] hover:underline decoration-[#CDBBB0] underline-offset-4 transition-colors cursor-pointer"
                  >
                    Slow Living Tips for a Peaceful Everyday Life
                  </a>
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                  Discover practical guidance and mindset shifts to help you slow down, lower stress, and cultivate lasting peace throughout your day.
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2ECE3]">
                <a
                  href="/blog/slow-living-tips/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateArticle('slow-living-tips');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7D6350] hover:text-[#2E2620] hover:underline font-sans cursor-pointer transition-colors"
                >
                  <span>Read full guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white border border-[#E8DFD3] rounded-2xl p-4 sm:p-5 shadow-polaroid flex flex-col justify-between space-y-4 hover:shadow-soft-lift hover:-translate-y-1 transition-all">
              <div className="space-y-3">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#EFE8DD]">
                  <img
                    src={selfCareRoutineImg}
                    alt="Simple self-care routine with daily self-care habits, journaling, and tea for beginners"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-[11px] font-sans uppercase tracking-widest text-[#8C7665] font-semibold">
                  Self-Care · Guide 02
                </div>
                <p className="font-display text-xl text-[#221C18] leading-snug">
                  <a
                    href="/blog/self-care-routine/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateArticle('self-care-routine');
                    }}
                    className="hover:text-[#8C6D58] hover:underline decoration-[#CDBBB0] underline-offset-4 transition-colors cursor-pointer"
                  >
                    How to Create a Simple Self-Care Routine
                  </a>
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                  A realistic, compassionate blueprint for nurturing daily self-care habits, calming rituals, and emotional restoration without overwhelm.
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2ECE3]">
                <a
                  href="/blog/self-care-routine/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateArticle('self-care-routine');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7D6350] hover:text-[#2E2620] hover:underline font-sans cursor-pointer transition-colors"
                >
                  <span>Read full guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white border border-[#E8DFD3] rounded-2xl p-4 sm:p-5 shadow-polaroid flex flex-col justify-between space-y-4 hover:shadow-soft-lift hover:-translate-y-1 transition-all">
              <div className="space-y-3">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#EFE8DD]">
                  <img
                    src={cozyLifestyleIdeasImg}
                    alt="Cozy reading nook with bouclé chair, soft warm lighting, and linen throw representing cozy home ideas"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-[11px] font-sans uppercase tracking-widest text-[#8C7665] font-semibold">
                  Lifestyle · Guide 03
                </div>
                <p className="font-display text-xl text-[#221C18] leading-snug">
                  <a
                    href="/blog/cozy-lifestyle-ideas/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateArticle('cozy-lifestyle-ideas');
                    }}
                    className="hover:text-[#8C6D58] hover:underline decoration-[#CDBBB0] underline-offset-4 transition-colors cursor-pointer"
                  >
                    Cozy Lifestyle Ideas for a More Relaxing Home
                  </a>
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                  Warm aesthetics, comforting textiles, and hygge inspiration to transform your living space into a soothing, deeply relaxing sanctuary.
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2ECE3]">
                <a
                  href="/blog/cozy-lifestyle-ideas/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateArticle('cozy-lifestyle-ideas');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7D6350] hover:text-[#2E2620] hover:underline font-sans cursor-pointer transition-colors"
                >
                  <span>Read full guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
