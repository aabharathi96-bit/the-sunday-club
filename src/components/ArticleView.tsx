import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  Heart, 
  Share2, 
  Sparkles, 
  Clock, 
  Calendar, 
  Check, 
  MessageSquare, 
  Send 
} from 'lucide-react';
import { Article, ReaderComment } from '../types';
import { ArticleCard } from './ArticleCard';

interface ArticleViewProps {
  article: Article;
  allArticles: Article[];
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  allArticles,
  onBack,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(article.likesCount || 150);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState<ReaderComment[]>([
    {
      id: 'c1',
      articleId: article.id,
      name: 'Audrey Sinclair',
      date: '2 days ago',
      text: 'Reading this with a warm cup of Earl Grey on my balcony. Thank you for this breath of fresh air; I am keeping my phone in the drawer all day today.'
    },
    {
      id: 'c2',
      articleId: article.id,
      name: 'Sophie Laurent',
      date: 'Yesterday',
      text: 'The ritual of pre-warming the ceramic mug changed everything for me. It’s funny how the smallest mindfulness transforms a rushed chore into a quiet sanctuary.'
    }
  ]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [submittedComment, setSubmittedComment] = useState(false);

  // Track reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newEntry: ReaderComment = {
      id: Date.now().toString(),
      articleId: article.id,
      name: newCommentName.trim() || 'A Gentle Reader',
      date: 'Just now',
      text: newCommentText.trim(),
    };

    setComments([newEntry, ...comments]);
    setNewCommentName('');
    setNewCommentText('');
    setSubmittedComment(true);
    setTimeout(() => setSubmittedComment(false), 3000);
  };

  // Find related articles
  const relatedArticles = allArticles.filter(
    (a) => article.relatedIds.includes(a.id) || (a.category === article.category && a.id !== article.id)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-24">
      {/* Reading Progress Line */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#8C7665] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Article Controls Bar */}
      <div className="sticky top-20 z-30 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EAE1D7] py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#6B5F54] hover:text-[#26201B] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLike}
              className={`p-2 rounded-full border transition-colors cursor-pointer flex items-center gap-1.5 text-xs ${
                hasLiked
                  ? 'border-[#DEB0AD] bg-[#FAF0EF] text-[#B85750]'
                  : 'border-[#E3D8CC] text-[#695D51] hover:bg-[#F2EAE0]'
              }`}
              title="Like"
            >
              <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-current' : ''}`} />
              <span>{likes}</span>
            </button>

            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'border-[#B8A291] bg-[#EFE7DE] text-[#544336]'
                  : 'border-[#E3D8CC] text-[#695D51] hover:bg-[#F2EAE0]'
              }`}
              title={isBookmarked ? 'Saved to Sunday List' : 'Save article'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full border border-[#E3D8CC] text-[#695D51] hover:bg-[#F2EAE0] transition-colors cursor-pointer relative"
              title="Copy share link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              {copied && (
                <span className="absolute -bottom-8 right-0 whitespace-nowrap bg-[#26201B] text-white text-[10px] px-2 py-1 rounded shadow-md font-sans">
                  Link copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
        
        {/* Header Metadata */}
        <header className="space-y-6 text-center max-w-2xl mx-auto">
          {/* Zero Pill unboxed category and date */}
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest font-sans text-[#8C7665]">
            <span className="font-semibold text-[#8C7665]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#241F1B] leading-[1.14] [text-wrap:balance]">
            {article.title}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#63574C] leading-relaxed">
            {article.subtitle}
          </p>

          {/* Author Badge */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-11 h-11 rounded-full object-cover border border-[#DFD5C7]"
            />
            <div className="text-left">
              <p className="text-sm font-medium text-[#241F1B]">{article.author.name}</p>
              <p className="text-xs text-[#827568]">{article.author.role}</p>
            </div>
          </div>
        </header>

        {/* Hero Image Spread (Polaroid Style) */}
        <div className="my-10 sm:my-14 rounded-3xl overflow-hidden shadow-soft-lift border border-[#EBE1D6] bg-white p-3 sm:p-4 relative washi-tape-blush">
          <div className="aspect-[16/10] sm:aspect-[21/10] relative rounded-2xl overflow-hidden bg-[#F0E8DD]">
            <img
              src={article.heroImage}
              alt={article.imageAlt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="pt-3 pb-1 text-center text-xs text-[#7A6E63] font-handwriting text-lg">
            ~ {article.imageAlt} ~
          </div>
        </div>

        {/* Prose Body */}
        <div className="max-w-2xl mx-auto space-y-8 text-[#362E27] font-sans text-base sm:text-lg leading-[1.8] sm:leading-[1.85]">
          
          {/* Introduction Section */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F3EC] border-l-4 border-[#8C7665] border-y border-r border-[#EAE0D3] space-y-2 shadow-xs">
            <span className="text-[11px] uppercase tracking-widest text-[#8C7665] font-sans font-semibold">
              Introduction
            </span>
            <p className="font-serif text-base sm:text-lg text-[#383028] leading-relaxed">
              {article.introduction || article.excerpt}
            </p>
          </div>

          {/* Dynamic Content Blocks (Multiple Sections) */}
          {article.content.map((block, idx) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={idx}
                  className="font-display text-2xl sm:text-3xl text-[#241F1B] pt-6 pb-1 leading-snug border-b border-[#EAE0D3]"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'paragraph') {
              return (
                <p key={idx} className="text-[#362E27]">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'quote') {
              return (
                <figure
                  key={idx}
                  className="my-8 pl-6 border-l-2 border-[#8C7665] py-2 space-y-2 bg-[#F6EFE6]/60 rounded-r-2xl pr-6"
                >
                  <blockquote className="font-serif italic text-xl sm:text-2xl text-[#26201B] leading-snug">
                    “{block.text}”
                  </blockquote>
                  {block.author && (
                    <figcaption className="text-xs uppercase tracking-wider text-[#8A7565] font-sans">
                      — {block.author}
                    </figcaption>
                  )}
                </figure>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={idx} className="my-6 space-y-3 pl-4">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C7665] mt-2.5 shrink-0" />
                      <span className="text-[#362E27]">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}

          {/* Practical Tips Box */}
          {article.practicalTips.length > 0 && (
            <div className="my-10 p-6 sm:p-8 rounded-3xl bg-[#F6EFE6] border border-[#E6DBCE] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7D6A5A] font-sans font-semibold">
                <Sparkles className="w-4 h-4 text-[#A88874]" />
                <span>Practical Rituals to Try Today</span>
              </div>
              <ul className="space-y-3">
                {article.practicalTips.map((tip, tipIdx) => (
                  <li key={tipIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#3A322B]">
                    <span className="font-serif font-bold text-[#8C7665] shrink-0 text-base">
                      {tipIdx + 1}.
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Conclusion */}
          <div className="pt-8 pb-8 border-t border-[#EAE1D7] space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#8C7665] font-sans font-semibold">
              Conclusion
            </span>
            <p className="font-serif italic text-lg sm:text-xl text-[#2E2721] leading-relaxed">
              {article.conclusion}
            </p>
          </div>

          {/* Article Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-[#EFE8DF] text-[#5C5247] font-sans"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="my-10 p-6 rounded-2xl bg-[#FCFAF7] border border-[#E8DFD3] flex items-center gap-4">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-14 h-14 rounded-full object-cover border border-[#D9CFC1]"
            />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#241F1B]">{article.author.name}</p>
              <p className="text-xs text-[#7A6E63] font-serif italic">
                Writes for The Sunday Club on slow living, analog rituals, and peaceful mindsets. Based between cozy cafes and quiet libraries.
              </p>
            </div>
          </div>

          {/* Reader Reflections / Comments Section */}
          <section className="pt-10 border-t border-[#EAE1D7] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl text-[#241F1B] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#8C7665]" />
                <span>Reader Reflections ({comments.length})</span>
              </h3>
            </div>

            {/* Comment Submission Form */}
            <form onSubmit={handleAddComment} className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#E8DFD3] space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)}
                  placeholder="Your Name (optional)"
                  className="px-3.5 py-2.5 rounded-xl border border-[#DCD1C4] text-xs sm:text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#8C7665]"
                />
              </div>
              <textarea
                required
                rows={3}
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Share your quiet thought or how this ritual resonated with you..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD1C4] text-xs sm:text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#8C7665] resize-none font-serif"
              />
              <div className="flex items-center justify-between">
                {submittedComment ? (
                  <span className="text-xs text-emerald-700 font-medium">Thank you for your gentle reflection!</span>
                ) : (
                  <span className="text-xs text-[#8A7E72] font-serif italic">Kindness is our house rule</span>
                )}
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#29221D] text-white text-xs font-medium hover:bg-[#473B33] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> Post Reflection
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-3">
              {comments.map((c) => (
                <div key={c.id} className="p-4 rounded-xl bg-[#FAF5EE] border border-[#EBE1D6] space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#29221D]">{c.name}</span>
                    <span className="text-[#857B70] font-serif italic">{c.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A4138] font-serif leading-relaxed">
                    “{c.text}”
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-20 pt-12 border-t border-[#EAE1D7] space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8C7665] font-sans">
                Continue Reading
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#241F1B]">
                More for Your Slow Afternoon
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <ArticleCard
                  key={rel.id}
                  article={rel}
                  onSelect={onSelectArticle}
                  isBookmarked={false}
                  onToggleBookmark={onToggleBookmark}
                />
              ))}
            </div>
          </section>
        )}

      </article>
    </div>
  );
};
