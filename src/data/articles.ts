import { Article, SundayMood } from '../types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    slug: '10-little-things-that-make-a-sunday-feel-special',
    title: '10 Little Things That Make a Sunday Feel Special',
    subtitle: 'From warm ceramic mugs and morning music to aimless neighborhood walks: gentle touches to honor the end of the week.',
    category: 'Slow Living',
    author: {
      name: 'Clara Vance',
      role: 'Founding Editor & Essayist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Oct 4, 2026',
    readTime: '7 min read',
    heroImage: '/src/assets/images/hero_sunday_morning_1791190663579.jpg',
    imageAlt: 'Serene sunlit Sunday morning with ceramic coffee cup, vintage book, and warm linen sheets',
    excerpt: 'There is a sacred, unhurried cadence to a Sunday when we choose to step off the conveyor belt of urgency and let the morning gently unfold.',
    introduction: 'There is a quiet, tender magic unique to Sunday mornings. Unlike Saturdays, which often buzz with errands, chores, and social commitments, Sunday carries an unspoken permission to soften. When we deliberately cultivate small, tactile rituals, ordinary hours transform into a personal sanctuary where we can breathe deeply and replenish our inner reserves.',
    content: [
      {
        type: 'heading',
        text: '1. The Unhurried Awakening in Soft Sheets'
      },
      {
        type: 'paragraph',
        text: 'Banishing the sharp ring of an alarm clock is Sunday’s first gift. Allow your eyes to open naturally as daylight filters through curtains. Spend ten unhurried minutes stretching your limbs, listening to the muffled street sounds, and sinking into the texture of washed linen before your feet ever meet the floorboards.'
      },
      {
        type: 'heading',
        text: '2. The Mindful Hand-Brewed Coffee or Tea'
      },
      {
        type: 'paragraph',
        text: 'Instead of pushing a button on an automatic machine, turn your beverage into a sensory meditation. Pre-warm your favorite handmade ceramic mug with hot tap water. Grind fresh coffee beans or measure whole chamomile blossoms into a glass pot. Savoring the bloom of aromas grounds you instantly in the present moment.'
      },
      {
        type: 'heading',
        text: '3. A Soft, Nostalgic Acoustic Playlist'
      },
      {
        type: 'paragraph',
        text: 'Sound sets the emotional architecture of a home. Play low acoustic guitar, gentle French cafe accordion, or delicate neo-classical piano at a whisper volume. It fills the rooms with warmth, buffering against any persistent thoughts of the coming week.'
      },
      {
        type: 'quote',
        text: 'Rest is not the reward for finished labor; it is the natural, rhythmic pulse of an intentional life.',
        author: 'May Sarton'
      },
      {
        type: 'heading',
        text: '4. Stream-of-Consciousness Journaling'
      },
      {
        type: 'paragraph',
        text: 'Before checking emails or social feeds, open a notebook with smooth, heavy paper. Write two pages of whatever rises to the surface: a dream you remember, gratitude for the autumn crispness, or gentle intentions for the coming days. Unfiltered writing clears mental cobwebs.'
      },
      {
        type: 'heading',
        text: '5. An Uninterrupted Reading Chapter'
      },
      {
        type: 'paragraph',
        text: 'Give your freshest morning attention to art rather than digital algorithms. Curl into your favorite armchair with a physical novel or volume of poetry. Reading just twenty pages before noon expands the mind and slows racing thoughts.'
      },
      {
        type: 'heading',
        text: '6. Nourishing, Slow Skincare'
      },
      {
        type: 'paragraph',
        text: 'Transform your morning bathroom routine from a hurried checklist into a soothing ritual. Press a warm botanical washcloth over your face, gently massage with rosehip seed oil, and apply a hydrating mask while you sip your tea. Caring for your skin is a tangible expression of kindness to your physical vessel.'
      },
      {
        type: 'heading',
        text: '7. The Tactile Pleasure of Slow Cooking'
      },
      {
        type: 'paragraph',
        text: 'Bake sourdough focaccia dimpled with fresh rosemary and flaky Maldon salt, or let a pot of rich tomato soup simmer on the back burner. The repetitive motions of kneading, stirring, and seasoning offer a peaceful grounding that screen work can never provide.'
      },
      {
        type: 'heading',
        text: '8. An Aimless Neighborhood Walk'
      },
      {
        type: 'paragraph',
        text: 'Leave your smartwatch and step trackers on your nightstand. Step outside with no destination, pace, or deadline. Notice the changing foliage, admire neighbors’ vintage window displays, and allow your gaze to wander freely toward the sky.'
      },
      {
        type: 'heading',
        text: '9. Bathing in Afternoon Window Solitude'
      },
      {
        type: 'paragraph',
        text: 'In the golden hours of late afternoon, sit near a sunlit window. Watch how dust motes drift in the amber beams and how shadows slowly stretch across the floorboards. Doing absolutely nothing for thirty minutes is a sacred, radical luxury.'
      },
      {
        type: 'heading',
        text: '10. Twilight Candle Glow and Deep Relaxation'
      },
      {
        type: 'paragraph',
        text: 'As dusk settles, systematically switch off harsh overhead lights. Light a soy candle scented with sandalwood, amber, or vanilla. Slip into comfortable wool socks, draw a warm bath with Epsom salts, and let the gentle close of Sunday cradle you to sleep.'
      }
    ],
    practicalTips: [
      'Pre-warm your ceramic mug with boiling water before pouring your morning brew.',
      'Place your smartphone inside a hallway drawer until at least 11:00 AM.',
      'Light a wooden-wick candle at 5:00 PM to signal the transition into evening calm.',
      'Write down three micro-joys from the day rather than an exhaustive Monday to-do list.'
    ],
    conclusion: 'Sundays do not require lavish vacations or expensive escapes. They only require our presence, our willingness to unclench our shoulders, and an appreciation for the quiet poetry dwelling inside everyday rituals.',
    tags: ['Slow Living', 'Morning Rituals', 'Cozy Life', 'Self-Care'],
    featured: true,
    relatedIds: ['2', '3', '8'],
    likesCount: 264
  },
  {
    id: '2',
    slug: 'how-to-romanticize-your-everyday-life',
    title: 'How to Romanticize Your Everyday Life',
    subtitle: 'Seeing poetry in grocery runs, rainy commutes, and the quiet act of brewing morning tea.',
    category: 'Inspiration',
    author: {
      name: 'Eleanor Brooks',
      role: 'Creative Director & Author',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Oct 3, 2026',
    readTime: '6 min read',
    heroImage: '/src/assets/images/article_cafe_street_1791191294313.jpg',
    imageAlt: 'Chic Parisian sidewalk café with marble table, matcha latte, croissant, and fresh roses',
    excerpt: 'To romanticize your life is not about living in delusion; it is about deliberately bestowing value, tenderness, and aesthetic care upon the moments you are already living.',
    introduction: 'Somewhere between childhood wonder and adulthood responsibilities, many of us fall into the trap of viewing life as a marathon of tasks to survive between weekends. We rush through breakfast, stare blankly during commutes, and scroll endlessly before sleep. But romanticizing your life is the quiet antidote: it is the art of treating your ordinary Tuesday like a scene from an indie film worth cherishing.',
    content: [
      {
        type: 'heading',
        text: '1. Upgrading Everyday Objects You Touch Most'
      },
      {
        type: 'paragraph',
        text: 'Why keep the linen napkins tucked away only for holidays? Why drink water from plastic cups when you own vintage crystal glassware? Romanticizing life begins by using what you love right now. Decant olive oil into amber glass bottles, write grocery lists with a brass fountain pen, and wear your softest silk pajama set on an ordinary evening.'
      },
      {
        type: 'heading',
        text: '2. Soundtracking Your Domestic Routines'
      },
      {
        type: 'paragraph',
        text: 'Chores lose their tedious weight when accompanied by evocative music. Put on French café jazz when chopping vegetables for dinner. Play nostalgic cello concertos while folding laundry. The music reframes domestic care as a graceful, cinematic meditation.'
      },
      {
        type: 'quote',
        text: 'The secret of happiness is to see all the marvels of the world, and never to forget the drops of oil on the spoon.',
        author: 'Paulo Coelho'
      },
      {
        type: 'heading',
        text: '3. The Sacred Solitude of Local Cafés'
      },
      {
        type: 'paragraph',
        text: 'Take yourself on a weekly solo date to a charming bakery. Sit by a window, order a velvety latte and a fresh almond croissant, and leave your laptop zipped in your bag. Watch passersby, sketch, or read. Claiming quiet public space solely for your own delight builds profound confidence and calm.'
      },
      {
        type: 'heading',
        text: '4. Tuning Into Natural Light and Seasonal Weather'
      },
      {
        type: 'paragraph',
        text: 'Notice how the morning light cuts through your blinds, casting stripes across the wooden floor. Listen to the rhythmic percussion of raindrops on the tin awning. When you pay close attention to light and shadow, the world reveals layers of beauty previously obscured by haste.'
      }
    ],
    practicalTips: [
      'Buy yourself a modest bunch of eucalyptus or daisies on an ordinary weekday.',
      'Eat dinner by candlelight twice a week rather than under overhead electric lights.',
      'Curate a dedicated "Main Character Walk" playlist filled with warm indie acoustics.',
      'Sip your morning water from a stemmed vintage goblet.'
    ],
    conclusion: 'Your life is not waiting for you at some distant milestone, graduation, or promotion. It is unfolding right now in the steam rising from your teacup and the laughter shared with a neighbor. Treat it like the masterpiece it already is.',
    tags: ['Mindfulness', 'Romanticize Life', 'Everyday Aesthetics', 'Gratitude'],
    featured: true,
    relatedIds: ['1', '8', '10'],
    likesCount: 320
  },
  {
    id: '3',
    slug: 'the-ultimate-slow-sunday-routine',
    title: 'The Ultimate Slow Sunday Routine',
    subtitle: 'A gentle dawn-to-dusk companion from sunrise blankets to evening candles.',
    category: 'Lifestyle',
    author: {
      name: 'Clara Vance',
      role: 'Founding Editor & Essayist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Oct 1, 2026',
    readTime: '8 min read',
    heroImage: '/src/assets/images/about_slow_living_1791190709151.jpg',
    imageAlt: 'Peaceful woman in chunky knit cardigan looking out a warm sunlit window',
    excerpt: 'Step away from alarms and frantic schedules. Here is a peaceful, restorative blueprint for spending your Sunday with absolute tenderness.',
    introduction: 'A slow Sunday routine is not a rigid military schedule; rather, it is a gentle rhythm of intentional transitions that honors both your physical exhaustion and your spiritual need for spaciousness. By giving structure to your rest, you protect your hours from slipping away into an anxious blur of social media scrolling.',
    content: [
      {
        type: 'heading',
        text: 'Phase I: The Gentle Awakening (8:00 AM – 9:30 AM)'
      },
      {
        type: 'paragraph',
        text: 'Wake without alarms. Sip a tall glass of room-temperature water with a squeeze of fresh lemon to rehydrate after sleep. Wrap yourself in a soft wool cardigan, open the window a crack to invite crisp morning air into the bedroom, and linger with your thoughts before looking at any digital screen.'
      },
      {
        type: 'heading',
        text: 'Phase II: Tactile Breakfast & Mindful Brew (9:30 AM – 11:00 AM)'
      },
      {
        type: 'paragraph',
        text: 'Prepare a breakfast that feels celebratory yet simple: soft-scrambled eggs with fresh chives and toasted sourdough, or steel-cut oats topped with warm caramelized pears and toasted walnuts. Savor each bite seated at a clean table, free from distractions.'
      },
      {
        type: 'quote',
        text: 'A clean room and fresh sheets are the quietest, most dignified form of self-respect.',
        author: 'The Sunday Club'
      },
      {
        type: 'heading',
        text: 'Phase III: Gentle Nesting & Space Clearing (11:00 AM – 1:00 PM)'
      },
      {
        type: 'paragraph',
        text: 'Tending your home shouldn’t feel like an exhausting chore. Put on an upbeat folk playlist, water the houseplants, shake out the entryway rugs, and change your bed linens. Crawling into crisp, fresh sheets on Sunday night will feel like an absolute gift to your future self.'
      },
      {
        type: 'heading',
        text: 'Phase IV: Afternoon Drift & Analog Curiosity (1:00 PM – 5:00 PM)'
      },
      {
        type: 'paragraph',
        text: 'Dedicate the afternoon to zero-pressure recreation. Visit your local library, browse a quiet neighborhood bookshop, sketch botanical shapes with watercolor, or bake a loaf of cinnamon banana bread. Engage with tasks where the process itself is the only goal.'
      },
      {
        type: 'heading',
        text: 'Phase V: Evening Hearth & Weekly Alignment (5:00 PM – 9:30 PM)'
      },
      {
        type: 'paragraph',
        text: 'As twilight deepens, dim the overhead lamps. Draw an Epsom salt bath with a few drops of lavender essential oil. Afterward, spend twenty minutes reviewing your calendar for the coming week—not in a state of panic, but calmly identifying your three most meaningful priorities. End with herbal tea and early sleep.'
      }
    ],
    practicalTips: [
      'Switch your phone to Do Not Disturb mode for the entire morning.',
      'Lay out your Monday morning outfit in advance to eliminate dawn friction.',
      'Prepare a simple comfort soup on Sunday afternoon that provides effortless lunches.',
      'Keep a bedside notepad to catch any lingering work worries so your mind can rest.'
    ],
    conclusion: 'When you treat Sunday as a sanctuary rather than a ticking countdown to Monday, you reclaim agency over your days. You discover that real replenishment doesn’t come from escape, but from presence.',
    tags: ['Routines', 'Slow Mornings', 'Evening Reset', 'Sanctuary'],
    featured: false,
    relatedIds: ['1', '5', '8'],
    likesCount: 215
  },
  {
    id: '4',
    slug: 'creating-your-perfect-cozy-corner',
    title: 'Creating Your Perfect Cozy Corner',
    subtitle: 'How to curate an intentional reading and daydreaming nook that feels like a warm embrace.',
    category: 'Lifestyle',
    author: {
      name: 'Eleanor Brooks',
      role: 'Creative Director & Author',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Sep 29, 2026',
    readTime: '6 min read',
    heroImage: '/src/assets/images/article_cozy_corner_1791190689327.jpg',
    imageAlt: 'Cozy bouclé armchair with glowing amber lamp, stacked books, and soft throw blanket',
    excerpt: 'You do not need a sprawling home to experience sanctuary. All you need is one small, deliberate corner devoted exclusively to comfort, reflection, and quiet solace.',
    introduction: 'Every home needs an anchor of calm—a dedicated spot where work cannot follow you, where you never open spreadsheets, and where your nervous system instantly recognizes that it is safe to unwind. A cozy corner is not just home decor; it is an architectural invitation to breathe.',
    content: [
      {
        type: 'heading',
        text: '1. Finding the Quietest Pocket of Natural Light'
      },
      {
        type: 'paragraph',
        text: 'Scout your living space for a nook that catches gentle morning or late afternoon light. It could be an underutilized corner beside a bedroom window, the alcove beneath the stairs, or a sunny spot in the living room away from television screens.'
      },
      {
        type: 'heading',
        text: '2. Layering Tactile Textures for Maximum Warmth'
      },
      {
        type: 'paragraph',
        text: 'The true secret of coziness lies in tactile variation. Choose an armchair with generous depth, upholstered in textured bouclé, soft corduroy, or brushed velvet. Layer it with a chunky cable-knit wool blanket and linen throw pillows. The contrast of materials creates an instinctive feeling of shelter.'
      },
      {
        type: 'quote',
        text: 'To be cozy is to create an inner weather that remains warm regardless of the storm outside.',
        author: 'Danish Hygge Proverb'
      },
      {
        type: 'heading',
        text: '3. Layering 2700K Ambient Glow and Candlelight'
      },
      {
        type: 'paragraph',
        text: 'Never illuminate your sanctuary with harsh, overhead recessed lighting. Instead, invest in a pleated paper lampshade or vintage brass floor lamp fitted with an ultra-warm (2200K–2700K) LED bulb. Add a beeswax candle on a nearby coaster to provide gentle flickering motion.'
      },
      {
        type: 'heading',
        text: '4. The Companion Side Table and The Book Stack'
      },
      {
        type: 'paragraph',
        text: 'A sturdy small wooden table is essential. It must be large enough to hold your steaming mug of tea, a brass coaster, a fountain pen, and a stack of three books currently inspiring you. Keep a small basket nearby to tuck away journals and reading glasses when not in use.'
      },
      {
        type: 'heading',
        text: '5. Greenery and Meaningful Heirlooms'
      },
      {
        type: 'paragraph',
        text: 'Introduce a trailing satin pothos or a small potted ficus to bring living oxygen into the nook. Frame a favorite postcard from an art gallery visit or place a smooth river stone from a memorable summer walk on the shelf.'
      }
    ],
    practicalTips: [
      'Declare this specific chair or corner a strict "laptop and work email free" zone.',
      'Keep a linen pillow spray scented with cedarwood and chamomile nearby.',
      'Rotate your reading stack monthly so the space constantly sparks curiosity.',
      'Use a small woven footstool to elevate your feet and improve spinal relaxation.'
    ],
    conclusion: 'When the modern world feels frantic and demands constant connectivity, having a physical corner that expects nothing from you is one of the greatest kindnesses you can grant your soul.',
    tags: ['Home Decor', 'Hygge', 'Cozy Spaces', 'Reading Nook'],
    featured: false,
    relatedIds: ['1', '3', '7'],
    likesCount: 295
  },
  {
    id: '5',
    slug: 'things-to-do-when-you-need-a-little-reset',
    title: 'Things to Do When You Need a Little Reset',
    subtitle: 'Gentle, zero-pressure steps to reclaim your equilibrium when life feels heavy or scattered.',
    category: 'Self-Care',
    author: {
      name: 'Clara Vance',
      role: 'Founding Editor & Essayist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Sep 26, 2026',
    readTime: '7 min read',
    heroImage: '/src/assets/images/article_sunset_bedroom_1791191274458.jpg',
    imageAlt: 'Golden hour sunset glowing across cozy cream linen bedsheets with peonies in ceramic vase',
    excerpt: 'When mental fog creeps in and overwhelm threatens your peace, you don’t need an extreme makeover. You simply need a gentle reset.',
    introduction: 'We all inevitably reach points of emotional congestion: unanswered texts piling up, laundry draped across chairs, and a tight, low-grade hum of overwhelm buzzing behind our eyes. When this happens, forcing yourself to hustle harder only compounds the exhaustion. What you need is not a rigorous self-improvement regime, but a compassionate, physical reset.',
    content: [
      {
        type: 'heading',
        text: '1. The 15-Minute Surface Sweep'
      },
      {
        type: 'paragraph',
        text: 'Do not attempt a deep spring clean. Simply grab an empty laundry basket and walk through your bedroom and kitchen, clearing horizontal surfaces. Put mugs in the sink, fold blankets, and clear bedside clutter. Visual breathing room communicates immediate safety to your nervous system.'
      },
      {
        type: 'heading',
        text: '2. The Unfiltered Mental Brain Dump'
      },
      {
        type: 'paragraph',
        text: 'Take a sheet of blank paper and write down every single thought, obligation, worry, and task swirling in your mind without filtering or categorizing. Once thoughts are trapped in black ink on paper, they lose their vague, terrifying power.'
      },
      {
        type: 'quote',
        text: 'Almost everything will work again if you unplug it for a few minutes, including you.',
        author: 'Anne Lamott'
      },
      {
        type: 'heading',
        text: '3. The Grounding Thermal Shower or Bath'
      },
      {
        type: 'paragraph',
        text: 'Water has ancient reset properties. Take a hot shower using a botanical eucalyptus soap, then turn the water cool for the final thirty seconds. The thermal shift activates your parasympathetic nervous system, resetting your heart rate and easing tension.'
      },
      {
        type: 'heading',
        text: '4. Going Outside to Connect with the Earth'
      },
      {
        type: 'paragraph',
        text: 'Step out the door without headphones. Feel the cool air against your cheeks, look up at the expansive sky, and observe trees swaying in the wind. Reconnecting with the natural world reminds us that we are biological creatures living in a physical reality, not disembodied brains inside smartphones.'
      },
      {
        type: 'heading',
        text: '5. Radical Unapologetic Solitude'
      },
      {
        type: 'paragraph',
        text: 'Give yourself permission to decline social calls for a single evening. Put your phone in another room, curl under a duvet with warm chamomile tea, and let yourself be completely unreachable for four hours.'
      }
    ],
    practicalTips: [
      'Drink 16 ounces of cool water infused with a pinch of Celtic sea salt and lemon.',
      'Change your pillowcases—clean cotton against your face feels like a fresh beginning.',
      'Lie flat on the floor with your legs elevated vertically against a wall for ten minutes.',
      'Mute notifications on all group chats until tomorrow morning.'
    ],
    conclusion: 'A reset is never about achieving perfection. It is about returning home to your own skin and remembering that you are worthy of peace before, during, and after your tasks are finished.',
    tags: ['Mental Health', 'Reset', 'Self-Care', 'Mindfulness'],
    featured: false,
    relatedIds: ['6', '7', '9'],
    likesCount: 238
  },
  {
    id: '6',
    slug: '7-journaling-prompts-for-your-next-quiet-morning',
    title: '7 Journaling Prompts for Your Next Quiet Morning',
    subtitle: 'Thoughtful inquiries to peel back surface chatter and explore gratitude, dreams, and personal truth.',
    category: 'Journal',
    author: {
      name: 'Eleanor Brooks',
      role: 'Creative Director & Author',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Sep 23, 2026',
    readTime: '6 min read',
    heroImage: '/src/assets/images/article_journal_flatlay_1791190699297.jpg',
    imageAlt: 'Mindful journaling flat lay with brass fountain pen, tea, and botanical florals',
    excerpt: 'Blank pages are patient listeners. Pour a hot drink and explore these seven reflective inquiries to reacquaint yourself with your inner voice.',
    introduction: 'Journaling in the stillness of dawn is not about writing polished prose for an audience. It is about holding an honest, unhurried conversation with yourself before the demands, expectations, and opinions of the external world begin their daily clamor.',
    content: [
      {
        type: 'heading',
        text: 'Prompt 1: What am I currently carrying that does not belong to me?'
      },
      {
        type: 'paragraph',
        text: 'We unconsciously absorb the anxieties, deadlines, and emotional moods of colleagues, partners, and strangers on the internet. Identify what emotional burdens you picked up this past week that are not yours to solve, and consciously write down your decision to lay them down.'
      },
      {
        type: 'heading',
        text: 'Prompt 2: What brought me unexpected micro-delight recently?'
      },
      {
        type: 'paragraph',
        text: 'Look beyond grand accomplishments. Recall the quiet pleasures: the exact warmth of morning coffee, hearing rain tap the window, a kind smile from a postal worker, or the smell of old paper in a second-hand bookshop.'
      },
      {
        type: 'quote',
        text: 'In the journal I am at ease. I am both the visitor and the host.',
        author: 'Anaïs Nin'
      },
      {
        type: 'heading',
        text: 'Prompt 3: If my body could speak without judgment, what would it ask for today?'
      },
      {
        type: 'paragraph',
        text: 'Does your physical body crave an afternoon nap? More water? A long walk beneath autumn trees? Softer clothing? Listen with compassion rather than discipline.'
      },
      {
        type: 'heading',
        text: 'Prompt 4: What is one boundary that would protect my peace this month?'
      },
      {
        type: 'paragraph',
        text: 'Where are you feeling drained or resentful? Resentment is almost always a sign of a missing boundary. Explore what polite "no" you need to offer to someone—or to your own screen habits.'
      },
      {
        type: 'heading',
        text: 'Prompt 5: What would my days look like if I stopped trying to prove my worth?'
      },
      {
        type: 'paragraph',
        text: 'Imagine waking up already knowing that your value as a human is complete and non-negotiable. What would you stop doing? How would you spend your morning hours?'
      },
      {
        type: 'heading',
        text: 'Prompts 6 & 7: Dreams and Authentic Connection'
      },
      {
        type: 'list',
        items: [
          'Prompt 6: What is a tender dream I have whispered to myself but felt too vulnerable to share aloud?',
          'Prompt 7: Who makes me feel like my most grounded, authentic self, and how can I spend more time in their presence?'
        ]
      }
    ],
    practicalTips: [
      'Use a fountain pen or smooth gel pen that reduces hand fatigue.',
      'Never cross out sentences or worry about neat handwriting—let the thoughts spill freely.',
      'Set a gentle ten-minute timer so journaling feels like a gift rather than an obligation.',
      'Date every entry in the top corner to look back on your personal evolution over time.'
    ],
    conclusion: 'Your journal is a sacred container of unconditional acceptance. When you write honestly on paper, you clarify your heart, honor your feelings, and reclaim your inner compass.',
    tags: ['Journaling', 'Writing', 'Inner Work', 'Self-Discovery'],
    featured: false,
    relatedIds: ['5', '8', '10'],
    likesCount: 356
  },
  {
    id: '7',
    slug: 'the-art-of-doing-nothing',
    title: 'The Art of Doing Nothing',
    subtitle: 'Reclaiming the Italian wisdom of "il dolce far niente" in an era obsessed with perpetual productivity.',
    category: 'Culture',
    author: {
      name: 'Clara Vance',
      role: 'Founding Editor & Essayist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Sep 20, 2026',
    readTime: '6 min read',
    heroImage: '/src/assets/images/hero_sunday_morning_1791190663579.jpg',
    imageAlt: 'Serene sunlit room with linen textures and warm shadows',
    excerpt: 'Why does sitting still feel like a radical act? Exploring the sweet art of doing nothing and why idleness is the secret cradle of creative joy.',
    introduction: 'Modern culture has conditioned us with a pervasive illness: the guilt of stillness. Even during our designated hours of leisure, we feel compelled to optimize: listening to educational podcasts at 1.5x speed, cataloging workouts, or documenting our leisure for social approval. But doing nothing is not wasted time; it is the fertile soil where the soul renews itself.',
    content: [
      {
        type: 'heading',
        text: '1. The Philosophy of "Il Dolce Far Niente"'
      },
      {
        type: 'paragraph',
        text: 'The Italians have long practiced "il dolce far niente"—the sweetness of doing nothing. It is not sluggish apathy; it is the active, sensory savoring of idleness. Sitting on a stone bench watching pigeons bathe in a fountain, leaning against a sun-warmed brick wall, or watching clouds wander across the horizon without any agenda.'
      },
      {
        type: 'heading',
        text: '2. What Happens to the Brain in Deep Stillness'
      },
      {
        type: 'paragraph',
        text: 'Neuroscientists have discovered that when we disengage from goal-oriented tasks, the brain activates the Default Mode Network (DMN). This network is responsible for autobiographical memory, deep empathy, and novel creative synthesis. Breakthrough ideas rarely strike when staring at spreadsheets; they arrive when daydreaming in a warm bath.'
      },
      {
        type: 'quote',
        text: 'Idleness is not doing nothing. Idleness is being free, which is quite a different thing.',
        author: 'Robert Louis Stevenson'
      },
      {
        type: 'heading',
        text: '3. Breaking the Conditioning of Constant Optimization'
      },
      {
        type: 'paragraph',
        text: 'Notice the immediate discomfort that arises when you sit with nothing in your hands for five minutes. That itch to grab your phone is cultural withdrawal. Acknowledge the phantom urgency, breathe through the restlessness, and remember that you were born to exist, not merely to produce output.'
      },
      {
        type: 'heading',
        text: '4. Protecting Fallow Seasons'
      },
      {
        type: 'paragraph',
        text: 'In agriculture, fields must lie fallow periodically to replenish soil nutrients before the next harvest. If a field were forced to produce wheat year-round, the earth would turn to barren dust. Human beings are biological organisms subject to the exact same seasonal rhythms.'
      }
    ],
    practicalTips: [
      'Schedule a recurring 20-minute block called "Sweet Idleness" in your weekly planner.',
      'Sit on your porch or window ledge with no headphones, book, or screen.',
      'Notice thoughts of guilt as they arise and label them kindly: "That is just cultural noise."',
      'Watch a rainstorm from start to finish without multitasking.'
    ],
    conclusion: 'You are a human being, not a human doing. You do not need to earn your rest through exhaustive exhaustion; rest is your birthright, your medicine, and the foundation of all genuine beauty.',
    tags: ['Slow Living', 'Rest', 'Mindfulness', 'Philosophy'],
    featured: false,
    relatedIds: ['1', '3', '9'],
    likesCount: 288
  },
  {
    id: '8',
    slug: 'little-rituals-that-can-change-your-mood',
    title: 'Little Rituals That Can Change Your Mood',
    subtitle: 'From tactile morning brews to evening candle extinguishing: how tiny habits rewire our emotional state.',
    category: 'Self-Care',
    author: {
      name: 'Eleanor Brooks',
      role: 'Creative Director & Author',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Sep 17, 2026',
    readTime: '7 min read',
    heroImage: '/src/assets/images/article_coffee_morning_1791190676570.jpg',
    imageAlt: 'Morning coffee, pastry, and warm breakfast atmosphere',
    excerpt: 'A routine is something you have to do; a ritual is something you choose to savor. Here are seven tiny micro-rituals that can soften even the hardest days.',
    introduction: 'The difference between an empty routine and a transformative ritual lies entirely in intention and attention. Washing your face can be a rushed chore before collapsing into bed, or it can be a loving, mindful baptism marking the official conclusion of your workday. When we imbue micro-moments with awareness, we anchor our emotional state in peace.',
    content: [
      {
        type: 'heading',
        text: '1. The Olfactory Anchor'
      },
      {
        type: 'paragraph',
        text: 'Our sense of smell connects directly to the limbic system, the ancient brain region governing emotion and memory. Keep a signature essential oil mist—such as bergamot, cedarwood, or lavender—that you spritz only when initiating a period of rest. Over time, that fragrance triggers an instant, involuntary release of muscle tension.'
      },
      {
        type: 'heading',
        text: '2. The Four-Minute Loose-Leaf Steep'
      },
      {
        type: 'paragraph',
        text: 'Brewing loose tea in a clear glass or ceramic pot forces a mandatory four-minute pause. Watch the curled tea leaves unfurl slowly in swirling amber water. For those four minutes, you are prohibited from working. Those minutes belong exclusively to you.'
      },
      {
        type: 'quote',
        text: 'Ritual is the bridge we build between our chaotic outer reality and our quiet inner sanctuary.',
        author: 'The Sunday Club'
      },
      {
        type: 'heading',
        text: '3. Dressing Up to Honor Yourself'
      },
      {
        type: 'paragraph',
        text: 'Even if spending the entire day working or reading from home, take time to dress in garments that feel dignified and comfortable—washed linen trousers, a crisp cotton shirt, or a favorite cardigan. You are dressing to honor your own company, not for the gaze of spectators.'
      },
      {
        type: 'heading',
        text: '4. The Sunset Light Shift'
      },
      {
        type: 'paragraph',
        text: 'When the sun sinks below the horizon, perform a ceremonial lighting shift. Turn off all harsh fluorescent and overhead lighting in your home. Switch on amber bedside lamps and light candles. This simple visual cue cues your circadian rhythm for restorative sleep.'
      },
      {
        type: 'heading',
        text: '5. The Evening Scented Hand Massage'
      },
      {
        type: 'paragraph',
        text: 'Before reading your bedtime book, massage a dollop of nourishing botanical cream into your palms and fingers. Pay attention to the joints and knuckles that typed and worked all day. It takes thirty seconds, yet honors your hard-working body with deep gratitude.'
      }
    ],
    practicalTips: [
      'Designate a single "transition song" to play when shutting down your computer for the evening.',
      'Place a fresh sprig of eucalyptus in your shower head for steam aromatherapy.',
      'Snuff your evening candle with a brass snuffer rather than blowing it out, marking quiet closure.',
      'Whisper one thing you navigated gracefully before closing your eyes at night.'
    ],
    conclusion: 'When you stitch small, intentional rituals into the fabric of your days, ordinary life ceases to be an unmemorable blur and becomes a tapestry of quiet delight.',
    tags: ['Rituals', 'Self-Care', 'Everyday Aesthetics', 'Habits'],
    featured: false,
    relatedIds: ['1', '2', '3'],
    likesCount: 204
  },
  {
    id: '9',
    slug: 'your-guide-to-a-digital-detox-weekend',
    title: 'Your Guide to a Digital Detox Weekend',
    subtitle: 'How to step away from screens, quiet the notification buzz, and rediscover the tangible textures of real life.',
    category: 'Slow Living',
    author: {
      name: 'Clara Vance',
      role: 'Founding Editor & Essayist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Sep 14, 2026',
    readTime: '7 min read',
    heroImage: '/src/assets/images/article_digital_detox_1791191318044.jpg',
    imageAlt: 'Vintage cream bicycle with wicker basket of wildflowers and sourdough bread in golden afternoon sun',
    excerpt: 'Constant connectivity fractures our attention and leaves our nervous systems chronically frayed. Here is how to plan a gentle, restorative 48-hour unplug.',
    introduction: 'We belong to the first generation in human history expected to be reachable every second of every day. But human consciousness was never engineered to carry the collective tragedies, hot takes, and curated successes of billions of strangers simultaneously. Stepping away for a weekend is not anti-technology; it is a vital act of cognitive hygiene.',
    content: [
      {
        type: 'heading',
        text: '1. Announcing Your Absence and Creating Physical Distance'
      },
      {
        type: 'paragraph',
        text: 'A successful detox requires clear boundaries rather than spontaneous willpower. On Friday evening, notify close family and friends that you will be offline until Monday morning. Power your phone down completely and tuck it inside a decorative wooden box or high cabinet out of sight.'
      },
      {
        type: 'heading',
        text: '2. Surviving the Phantom Vibration Syndrome'
      },
      {
        type: 'paragraph',
        text: 'During the first four hours of disconnection, you will experience phantom pocket vibrations and a persistent reflex to reach for a glowing screen. This is simply dopamine withdrawal. Acknowledge the reflex without judgment, take three slow belly breaths, and direct your hands toward a physical object.'
      },
      {
        type: 'quote',
        text: 'We do not remember days; we remember moments. And moments require our undivided presence.',
        author: 'Cesare Pavese'
      },
      {
        type: 'heading',
        text: '3. Reclaiming Analog Tactile Hobbies'
      },
      {
        type: 'paragraph',
        text: 'Fill the void of screen time with rich sensory experiences: working on a 1000-piece jigsaw puzzle, baking cinnamon sourdough bread, sketching pressed flowers, or listening to a vinyl record all the way through without skipping tracks.'
      },
      {
        type: 'heading',
        text: '4. Immersing in Real-World Geography'
      },
      {
        type: 'paragraph',
        text: 'Navigate your city or neighborhood using paper maps, street signs, and your own intuition. Walk through a botanical conservatory, visit a farmers’ market, and strike up spontaneous conversations with bakers and florists. Real human interaction nourishes parts of our biology that digital interfaces starve.'
      }
    ],
    practicalTips: [
      'Buy an inexpensive analog battery alarm clock so your phone never enters your bedroom.',
      'Keep a pocket paper notebook for sudden reminders instead of opening a phone app.',
      'Plan your weekend logistics and meet-up times on Friday so you don’t need messaging apps.',
      'Notice how much deeper and more uninterrupted your sleep becomes when screens are gone.'
    ],
    conclusion: 'When you turn off the glowing screens, the physical world turns back on: the aroma of woodsmoke, the warmth of soup, and the irreplaceable joy of being entirely where your feet are planted.',
    tags: ['Digital Detox', 'Mental Clarity', 'Slow Living', 'Analog Life'],
    featured: false,
    relatedIds: ['3', '5', '7'],
    likesCount: 279
  },
  {
    id: '10',
    slug: 'building-a-life-that-feels-like-you',
    title: 'Building a Life That Feels Like You',
    subtitle: 'Cultivating authentic style, sacred boundaries, and daily routines that reflect who you truly are.',
    category: 'Inspiration',
    author: {
      name: 'Eleanor Brooks',
      role: 'Creative Director & Author',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Sep 10, 2026',
    readTime: '8 min read',
    heroImage: '/src/assets/images/article_botanical_flowers_1791191306434.jpg',
    imageAlt: 'Curated hand-tied floral bouquet of cream ranunculus, sweet peas and silk ribbon',
    excerpt: 'It is easy to build a life that looks good from the outside while feeling hollow on the inside. Here is how to construct a reality rooted in genuine resonance.',
    introduction: 'In an era dominated by hyper-curated social algorithms, our desires can easily become copied. We buy clothes matching viral aesthetics, visit cafés designed for photos, and adopt productivity routines crafted by strangers. But the truest luxury in existence is building a quiet life that fits your spirit like a custom linen coat.',
    content: [
      {
        type: 'heading',
        text: '1. Conducting an "Authenticity Audit"'
      },
      {
        type: 'paragraph',
        text: 'Sit quietly with a journal and ask yourself: What do I love when nobody is watching? Do I genuinely enjoy loud weekend brunches, or would I rather spend three hours reading in bed? Identify which habits are performed for social approval and which truly nourish your heart.'
      },
      {
        type: 'heading',
        text: '2. Curating Personal Taste Over Fleeting Trends'
      },
      {
        type: 'paragraph',
        text: 'Develop your own aesthetic vocabulary. Decorate your home with heirlooms, thrifted ceramics, and art that stirs emotion in you, rather than conforming to whatever decor trend dominates online feeds. True personal style is timeless because it is anchored in memory.'
      },
      {
        type: 'quote',
        text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
        author: 'Ralph Waldo Emerson'
      },
      {
        type: 'heading',
        text: '3. The Sacred Discipline of Saying No'
      },
      {
        type: 'paragraph',
        text: 'You cannot build a life that feels authentic while saying yes to every obligation. Every time you accept an invitation out of guilt, you say no to your evening solitude, your creative projects, and your peace of mind. A gentle, polite "no" is an act of self-preservation.'
      },
      {
        type: 'heading',
        text: '4. Honoring Your Unique Energy Architecture'
      },
      {
        type: 'paragraph',
        text: 'Are you an early riser who comes alive in dawn silence, or a night owl inspired by lamplight and quiet midnight hours? Do you need extensive quiet recovery after social gatherings? Structure your life around your real biological rhythms rather than generic advice.'
      }
    ],
    practicalTips: [
      'Audit your wardrobe: keep only items that make you feel like your most grounded self.',
      'Decorate with items that tell your personal story—travel postcards, heirlooms, pressed flowers.',
      'Protect one evening every single week reserved exclusively for your personal curiosity.',
      'Practice saying: "Thank you so much for thinking of me, but I won’t be able to make it."'
    ],
    conclusion: 'Your life does not need to make sense to anyone else. If it brings you peace, fills your cup, and feels deeply, unapologetically like you, you have already succeeded in the most important assignment of all.',
    tags: ['Authenticity', 'Personal Growth', 'Boundaries', 'Intentional Living'],
    featured: false,
    relatedIds: ['2', '4', '6'],
    likesCount: 395
  }
];

export const SUNDAY_MOODS: SundayMood[] = [
  {
    id: 'gentle',
    name: 'Soft & Gentle',
    quote: 'Rest is not a luxury, but the soil from which our gentlest thoughts grow.',
    author: 'Eleanor Brooks',
    playlistName: 'Acoustic Morning & Warm Amber',
    ritual: 'Brew hot loose-leaf tea and read 10 pages in bed before stepping onto the floor.',
    prompt: 'What is one thing my heart needs to hear today without any judgment?'
  },
  {
    id: 'nostalgic',
    name: 'Golden Nostalgia',
    quote: 'In the gentle quiet of Sunday, we remember the beauty of ordinary days gone by.',
    author: 'Clara Vance',
    playlistName: 'Vintage French Accordion & Soft Piano',
    ritual: 'Light an amber candle, open old photo albums or write a letter to someone you miss.',
    prompt: 'What is a childhood memory of peace that still warms me today?'
  },
  {
    id: 'creative',
    name: 'Quiet Creative Spark',
    quote: 'Inspiration arrives on quiet feet when the mind is no longer shouting.',
    author: 'May Sarton',
    playlistName: 'Ambient Neo-Classical & Rain',
    ritual: 'Sketch, watercolor, or free-write without judging the outcome.',
    prompt: 'If fear were absent, what small creative curiosity would I explore today?'
  },
  {
    id: 'reset',
    name: 'Mindful Cleanse',
    quote: 'Clutter cleared from the table is peace restored to the mind.',
    author: 'The Sunday Club',
    playlistName: 'Warm Folk & Sunday Drift',
    ritual: 'Open the windows for fresh breeze, shake the rugs, and take an Epsom salt bath.',
    prompt: 'What mental weight can I gently release before the new week begins?'
  }
];
