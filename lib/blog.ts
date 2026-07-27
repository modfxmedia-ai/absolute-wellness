// Blog data source for Absolute Wellness Center.
//
// Each post is fully self-contained (no external CMS). Add new posts to the
// `POSTS` array below. Content is expressed as a small, typed block schema so
// posts render with consistent typography, spacing, and accessibility without
// any HTML sanitization concerns.
//
// To add a post:
//   1. Duplicate an entry in POSTS.
//   2. Give it a unique `slug` (kebab-case, no leading/trailing slash).
//   3. Fill in title, description, category, author, dates, cover image.
//   4. Compose `content` as an array of BlogBlock objects.
//
// The list is intentionally exported in publish-date-descending order.

export type BlogCategory =
  | "Chiropractic"
  | "Weight Loss"
  | "Hormone Therapy"
  | "Neuropathy"
  | "IV Therapy"
  | "Auto Injury"
  | "Wellness";

export type BlogBlock =
  | { type: "heading"; level: 2 | 3; text: string; id?: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; style?: "bullet" | "number"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | {
      type: "callout";
      title?: string;
      text: string;
      links?: { label: string; href: string }[];
    }
  | { type: "divider" };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  tags?: string[];
  author: string;
  authorRole?: string;
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  readMinutes: number;
  cover: string;
  coverAlt?: string;
  excerpt: string;
  content: BlogBlock[];
  featured?: boolean;
  relatedSlugs?: string[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "signs-you-may-benefit-from-semaglutide-weight-loss",
    title: "Lifestyle Clues You're Ready for Semaglutide in Eugene",
    description:
      "Discover everyday lifestyle clues that signal you're ready for medical weight loss semaglutide in Eugene and learn what to expect from treatment.",
    category: "Weight Loss",
    tags: [
      "Semaglutide",
      "Medical Weight Loss",
      "Eugene, OR",
      "GLP-1",
      "Lifestyle",
    ],
    author: "Absolute Wellness Center",
    authorRole: "Care Team",
    publishedAt: "2026-07-27",
    readMinutes: 7,
    cover: "/images/blogs-images/signs-you-may-benefit-from-semaglutide-weight-loss.jpg",
    coverAlt:
      "Person walking a trail in Eugene, OR — lifestyle signs you may benefit from semaglutide medical weight loss.",
    excerpt:
      "If you are doing many of the right things and still feel stuck, your body may be sending signals that it needs more than willpower. Here are the everyday clues that medical weight loss semaglutide in Eugene may be a good fit.",
    featured: true,
    relatedSlugs: ["semaglutide-weight-loss-myths-and-facts-in-eugene"],
    content: [
      {
        type: "paragraph",
        text: "Weight can shape a lot of daily choices, from what you wear to what you say yes or no to. When you live in a place like Eugene, with trails, rivers, and parks all around, it is easy to notice when your body is holding you back from the life you want.",
      },
      {
        type: "paragraph",
        text: "This is especially true if you feel like you are doing many things right but still not seeing results. You may be cooking at home, walking, drinking more water, and trying to cut back on late-night snacks, yet the scale barely moves. Those struggles are not personal failures. They can be important clues that your body needs medical support, not just more willpower.",
      },
      {
        type: "paragraph",
        text: "Medical weight loss semaglutide in Eugene can be one of those next-level tools. It is often most helpful for people who already have some healthy habits but feel stuck. At a clinic that looks at the whole person, including metabolism, hormones, joints, and energy levels, it can be part of a bigger plan to help your body finally respond.",
      },

      {
        type: "heading",
        level: 2,
        text: "Your Daily Routine Is \u201CHealthy\u201D but the Scale Will Not Move",
      },
      {
        type: "paragraph",
        text: "If your lifestyle already looks pretty \u201Cgood on paper,\u201D yet your weight is stuck, that is a strong sign something deeper may be going on. Many people reach a point where they feel like they have tried everything and their body just says no.",
      },
      {
        type: "paragraph",
        text: "You might recognize yourself in a few of these patterns:",
      },
      {
        type: "list",
        items: [
          "You cook most meals at home and try to include protein and vegetables",
          "You walk or work out several times a week",
          "You try to watch portions and avoid constant grazing",
          "You limit sugary drinks and only have alcohol once in a while",
        ],
      },
      {
        type: "paragraph",
        text: "Even with all that effort, you may still notice:",
      },
      {
        type: "list",
        items: [
          "The scale barely changes from month to month",
          "Any small \u201Coff\u201D day leads to quick weight gain",
          "You feel like you have to be perfect just to maintain, not lose",
        ],
      },
      {
        type: "paragraph",
        text: "This can point to metabolic or hormonal roadblocks, not a lack of discipline. Semaglutide is a prescription medicine that works in a few key ways, at a simple level:",
      },
      {
        type: "list",
        items: [
          "It helps you feel full longer by slowing stomach emptying",
          "It can reduce appetite and constant hunger",
          "It supports more steady blood sugar control",
        ],
      },
      {
        type: "paragraph",
        text: "For people who have already worked on \u201Ceat less, move more\u201D and still feel stuck, medical weight loss semaglutide in Eugene can be an evidence-based option through a supervised program. The goal is to match your consistent effort with results that finally make sense.",
      },

      {
        type: "heading",
        level: 2,
        text: "Everyday Tasks and Summer Fun Feel Physically Harder",
      },
      {
        type: "paragraph",
        text: "Another clue that medical support might help is when normal movement becomes a struggle. Eugene has so many ways to be outside, but weight-related strain can make even simple activities feel like a workout.",
      },
      {
        type: "paragraph",
        text: "You might notice things like:",
      },
      {
        type: "list",
        items: [
          "Feeling winded walking up the Butte or climbing a small hill",
          "Turning down hikes or bike rides with friends",
          "Having a hard time keeping up with kids at the park or river",
          "Dreading long days at outdoor events because your body hurts",
        ],
      },
      {
        type: "paragraph",
        text: "There are also quieter signs, such as:",
      },
      {
        type: "list",
        items: [
          "Knee, hip, or low back pain after simple errands",
          "Choosing elevators over stairs any time you can",
          "Needing a lot of recovery time after mild activity",
          "Picking the couch over social plans because moving feels exhausting",
        ],
      },
      {
        type: "paragraph",
        text: "Extra weight can put pressure on joints and stress on the heart and lungs. When your body hurts or feels heavy, it is natural to pull back from activity, which can then make weight even harder to manage.",
      },
      {
        type: "paragraph",
        text: "A blended approach that addresses weight and physical comfort at the same time can be helpful. Care that includes things like chiropractic support, joint injections when appropriate, and medical weight loss tools can work together to:",
      },
      {
        type: "list",
        items: [
          "Reduce pain so you can move more",
          "Support safer, more comfortable activity",
          "Help you enjoy local trails, parks, and events again",
        ],
      },
      {
        type: "paragraph",
        text: "If physical discomfort is regularly deciding how you spend your time, that is a strong signal that it may be time to look at medical options like semaglutide as part of a larger plan.",
      },

      {
        type: "heading",
        level: 2,
        text: "Food Cravings and Emotional Eating Are Running the Show",
      },
      {
        type: "paragraph",
        text: "You can have the best meal plan in the world, but if cravings and emotions run the show, sticking with it feels almost impossible. Many people feel like food is always on their mind.",
      },
      {
        type: "paragraph",
        text: "Lifestyle clues that cravings are in control include:",
      },
      {
        type: "list",
        items: [
          "Constant evening snacking, even after a full dinner",
          "Strong urges for sweets, bread, or chips",
          "Using food to ease stress, boredom, or anxiety",
          "Frequent drive-thru stops, especially on busy days",
        ],
      },
      {
        type: "paragraph",
        text: "This might show up as:",
      },
      {
        type: "list",
        items: [
          "Hiding what you eat from family or friends",
          "Feeling guilty or ashamed after overeating",
          "Saying you will \u201Cstart over on Monday\u201D week after week",
          "Swinging between strict dieting and rebound overeating",
        ],
      },
      {
        type: "paragraph",
        text: "Semaglutide may help lower hunger signals and reduce intense cravings for many people. When the body is not shouting for food all the time, it can feel easier to:",
      },
      {
        type: "list",
        items: [
          "Make calmer choices around food",
          "Follow a realistic, balanced eating plan",
          "Stop eating when you are comfortably full",
        ],
      },
      {
        type: "paragraph",
        text: "Medical weight loss works best when it does not just focus on the scale. Pairing semaglutide with support for eating patterns, lifestyle habits, and, when needed, hormone or metabolic checks, can help address the root of why food feels so hard in the first place.",
      },

      {
        type: "heading",
        level: 2,
        text: "You Have Weight-Related Health Concerns or Red Flags",
      },
      {
        type: "paragraph",
        text: "Sometimes the clues are not just about how you feel in your clothes or on the trail. They show up in health checkups and daily energy. If you have been told you have, or are at risk for, certain conditions, medical weight loss may be worth looking at more closely.",
      },
      {
        type: "paragraph",
        text: "Common red flags include:",
      },
      {
        type: "list",
        items: [
          "Prediabetes or type 2 diabetes",
          "High blood pressure",
          "High cholesterol",
          "Sleep apnea",
          "Polycystic ovary syndrome (PCOS)",
          "Strong family history of metabolic disease",
        ],
      },
      {
        type: "paragraph",
        text: "These medical issues often match up with everyday struggles such as:",
      },
      {
        type: "list",
        items: [
          "Daytime fatigue, even after a full night in bed",
          "Poor sleep quality or waking up unrefreshed",
          "Low energy and brain fog at work",
          "Heavy use of caffeine just to stay alert",
        ],
      },
      {
        type: "paragraph",
        text: "In a supervised setting, medical weight loss semaglutide in Eugene can be part of a plan to lower long-term health risks. When combined with personalized nutrition, gentle activity guidance, and sometimes hormone or other wellness support, it can help move your health in a better direction over time.",
      },
      {
        type: "paragraph",
        text: "A regenerative and wellness-focused clinic can keep an eye on labs, adjust other medications when needed, and make sure weight loss is supporting your overall quality of life, not just changing a number on the scale.",
      },

      {
        type: "heading",
        level: 2,
        text: "Take the Next Step Toward a Healthier Eugene Summer",
      },
      {
        type: "paragraph",
        text: "If any of these clues sound familiar, it may be time to look at your weight struggle with more compassion and curiosity. Stalled progress despite solid effort, avoiding activities you used to enjoy, feeling like cravings run your life, or seeing early health red flags are all signs that your body might need more than another strict diet.",
      },
      {
        type: "paragraph",
        text: "At Absolute Wellness Center in Eugene, we approach medical weight loss as part of your bigger health story. A first visit for medical weight loss semaglutide in Eugene typically includes a detailed health review, a conversation about your current habits and challenges, and, when appropriate, lab testing to understand what your body is doing behind the scenes. From there, we work with you on a clear plan that may include semaglutide, practical nutrition guidance, movement recommendations that fit your life, and supportive therapies for joint health and overall wellness so you can feel more comfortable, confident, and energized as you enjoy all that our area has to offer.",
      },

      {
        type: "heading",
        level: 2,
        text: "Take the Next Step Toward Confident, Lasting Weight Loss",
      },
      {
        type: "callout",
        title: "Ready when you are",
        text: "If you are ready to approach weight loss with medical guidance and a clear plan, we are here to help. Learn how our personalized program using medical weight loss semaglutide in Eugene can support your goals safely and effectively. At Absolute Wellness Center, we take time to understand your health history, lifestyle, and priorities so we can tailor your care.",
        links: [
          { label: "Learn about Medical Weight Loss", href: "/medical-weight-loss/" },
          { label: "Contact Us", href: "/contact/" },
        ],
      },
    ],
  },
  {
    slug: "semaglutide-weight-loss-myths-and-facts-in-eugene",
    title: "Clear Facts About Semaglutide for Summer Weight Loss",
    description:
      "Learn the facts behind medical weight loss semaglutide in Eugene, including safety, results, eligibility, and what to expect from guided care.",
    category: "Weight Loss",
    tags: [
      "Semaglutide",
      "Medical Weight Loss",
      "Eugene, OR",
      "GLP-1",
      "Metabolic Health",
    ],
    author: "Absolute Wellness Center",
    authorRole: "Care Team",
    publishedAt: "2026-07-15",
    readMinutes: 7,
    cover: "/images/blogs-images/semaglutide-weight-loss-myths-and-facts-in-eugene.jpg",
    coverAlt:
      "Semaglutide medical weight loss guidance in Eugene, OR — myths and facts.",
    excerpt:
      "Semaglutide gets a lot of attention — and a lot of misinformation. Here's what medical weight loss with semaglutide actually looks like at our Eugene clinic, and how we build it into a whole-person plan.",
    content: [
      {
        type: "paragraph",
        text: "Medical weight loss can feel confusing, especially when you hear about new medications everywhere you turn. Semaglutide is one of the most talked-about options, and many people are curious but also a little unsure. If you are trying to feel lighter, move with less pain, and enjoy more activity, it helps to know what is real and what is not.",
      },
      {
        type: "paragraph",
        text: "At Absolute Wellness Center in Eugene, we focus on non-surgical, drug-free, and integrative care whenever possible. For some people, a medication like semaglutide can be one tool within a bigger plan. It is not a quick cosmetic trick, and it is not the right answer for everyone. Our goal is always to support whole-body health, not just a number on the scale.",
      },
      {
        type: "paragraph",
        text: "Semaglutide has become popular because it can help control appetite and support blood sugar regulation under medical supervision. In a place like Eugene, where many people enjoy outdoor activity, that can make it easier to join in and stay moving. Still, medical weight loss semaglutide in Eugene should be part of a guided program that includes nutrition, movement, and overall wellness.",
      },

      {
        type: "heading",
        level: 2,
        text: "Myth One: Semaglutide Is Just a Quick Fix",
      },
      {
        type: "paragraph",
        text: "One of the biggest myths is that semaglutide is a magic shot that melts off fat while you keep the same habits. That is not how it works. Semaglutide affects signals in the body that relate to appetite and blood sugar. Many people feel full sooner and have fewer cravings, which can make it easier to eat in a way that supports weight loss.",
      },
      {
        type: "paragraph",
        text: "But if someone expects to take a weekly shot and eat anything in any amount, they are likely to be disappointed. Long-term results still depend on:",
      },
      {
        type: "list",
        items: [
          "What you eat most days",
          "How much you move your body",
          "How well you sleep at night",
          "How you manage stress and recovery",
        ],
      },
      {
        type: "paragraph",
        text: "At Absolute Wellness Center, we look at the whole picture. We talk about realistic nutrition changes that fit your life, not strict rules that are impossible to follow. We also consider your daily activity, even if it is something simple like walking in your neighborhood or enjoying local parks. We want any weight you lose to support less pain, better function, and more comfort in your joints and spine.",
      },
      {
        type: "paragraph",
        text: "So while semaglutide can help lower appetite, real success comes from pairing it with steady, healthy habits you can keep doing over time.",
      },

      {
        type: "heading",
        level: 2,
        text: "Myth Two: Semaglutide Works the Same for Everyone",
      },
      {
        type: "paragraph",
        text: "Another common misunderstanding is that semaglutide works exactly the same for every person. Bodies are different. Health histories are different. Results will be different too.",
      },
      {
        type: "paragraph",
        text: "Your experience with medical weight loss semaglutide in Eugene can depend on several factors, such as:",
      },
      {
        type: "list",
        items: [
          "Starting weight and body composition",
          "Metabolic health and blood sugar patterns",
          "Hormone balance",
          "Current medications",
          "Underlying conditions and pain levels",
        ],
      },
      {
        type: "paragraph",
        text: "This is why a personalized plan is so important. At a thorough first visit, we take time with your health history and talk through your goals. We may recommend lab work to better understand what is happening inside your body, especially around hormones and metabolic health.",
      },
      {
        type: "paragraph",
        text: "Because we are a regenerative medicine and wellness clinic, we can also look beyond medication. For example, your plan might include:",
      },
      {
        type: "list",
        items: [
          "Hormone support when appropriate",
          "Chiropractic care to address alignment and pain",
          "Spinal decompression if you have disc or nerve issues",
          "IV therapy to support hydration and overall wellness",
        ],
      },
      {
        type: "paragraph",
        text: "By combining these tools, we can build a plan that respects your unique body instead of forcing you into a one-size-fits-all.",
      },

      {
        type: "heading",
        level: 2,
        text: "Myth Three: Semaglutide Is Always Unsafe or Addictive",
      },
      {
        type: "paragraph",
        text: "You may see headlines that make semaglutide sound scary or unsafe in all cases. That does not match how it is used in a careful, medical setting. Like any prescription medication, semaglutide has possible side effects, and not everyone is a good candidate. This is why medical supervision matters.",
      },
      {
        type: "paragraph",
        text: "Some people notice digestive changes when they start, such as nausea or changes in bowel habits. At a reputable clinic, dosing is usually adjusted slowly. This gives your body time to adapt and allows your provider to keep a close eye on how you feel.",
      },
      {
        type: "paragraph",
        text: "We focus on safety by:",
      },
      {
        type: "list",
        items: [
          "Reviewing your full medical history",
          "Checking for possible medication interactions",
          "Starting with conservative doses when appropriate",
          "Monitoring your response over time",
        ],
      },
      {
        type: "paragraph",
        text: "Many people also worry about becoming \u201Cdependent\u201D on semaglutide. The goal at Absolute Wellness Center is not to keep you on the highest dose forever. Instead, we think ahead about:",
      },
      {
        type: "list",
        items: [
          "How to support healthy habits while you are on the medication",
          "When and how to adjust doses if that becomes appropriate",
          "How to support weight stabilization with lifestyle and other therapies",
        ],
      },
      {
        type: "paragraph",
        text: "The focus is always on protecting your health and building a stable plan you can live with. Semaglutide is a tool, not a trap.",
      },

      {
        type: "heading",
        level: 2,
        text: "Myth Four: You Will Regain All the Weight Later",
      },
      {
        type: "paragraph",
        text: "Rapid, unsupervised weight loss often leads to quick rebound. The body fights back, hunger surges, and old habits return. That is where the fear of \u201Cgaining it all back\u201D comes from. With guided care, the approach is slower and more thoughtful.",
      },
      {
        type: "paragraph",
        text: "When medical weight loss is supervised, the focus is not just speed. It is stability. At Absolute Wellness Center, we spend time helping you build new routines over months, not weeks. That can include:",
      },
      {
        type: "list",
        items: [
          "Simple, sustainable changes to what and how you eat",
          "A movement plan that respects your joints and spine",
          "Strategies to support sleep, energy, and mood",
        ],
      },
      {
        type: "paragraph",
        text: "In a city with so many ways to be active, like walking paths, water activities, and local parks, we often encourage people to find movement that actually feels good. When your back, hips, or knees hurt, this can be hard. That is why we also pay attention to joint support, spinal health, and pain relief options like chiropractic care and spinal decompression.",
      },
      {
        type: "paragraph",
        text: "When your body feels better, it is easier to stay active and keep weight off. The goal is not just a smaller body, but a body that works better for your daily life.",
      },

      {
        type: "heading",
        level: 2,
        text: "How to Choose Semaglutide Support That Fits You",
      },
      {
        type: "paragraph",
        text: "If you are thinking about medical weight loss semaglutide in Eugene, it helps to know what to look for. Not every option offers the same level of care or follow-up. Before you start, you might ask a clinic questions like:",
      },
      {
        type: "list",
        items: [
          "Will I meet with a medical provider in person?",
          "Do you review my full health history and medications?",
          "What kind of lab work is recommended?",
          "How often will you check in with me?",
          "What other services do you offer to support my health?",
        ],
      },
      {
        type: "paragraph",
        text: "At Absolute Wellness Center, a first visit typically includes time to talk through your health background, current symptoms, and personal goals. We look at pain, energy, digestion, sleep, and movement, not only weight. Together, we discuss if semaglutide is a good fit and what an integrative plan might look like.",
      },
      {
        type: "paragraph",
        text: "Because we offer services like chiropractic care, spinal decompression, IV therapy, and hormone therapy, we can build a plan that supports your whole system. For some people, that might mean focusing first on pain relief so that movement is even possible. For others, it may mean addressing hormone imbalances that are slowing progress.",
      },
      {
        type: "paragraph",
        text: "As you think about your next steps, remember that safe, effective weight loss is rarely about one single thing. It is about a caring team, a clear plan, and steady support over time so you can feel better, move better, and enjoy more of your life.",
      },

      {
        type: "heading",
        level: 2,
        text: "Take The Next Step Toward Lasting Weight Loss Results",
      },
      {
        type: "callout",
        title: "Ready when you are",
        text: "If you are ready to move beyond fad diets and see what evidence-based care can do for you, explore how our approach to medical weight loss semaglutide in Eugene can fit your goals and lifestyle. At Absolute Wellness Center, we take time to understand your health history, daily routines, and concerns so your plan feels realistic and sustainable.",
        links: [
          { label: "Learn about Medical Weight Loss", href: "/medical-weight-loss/" },
          { label: "Contact Us", href: "/contact/" },
        ],
      },
    ],
  },
];

// ─── helpers ────────────────────────────────────────────────────────────────

export const BLOG_BASE_URL = "https://awceugene.com/blog";

export function getAllPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return getAllPosts().find((p) => p.featured) ?? getAllPosts()[0];
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const all = getAllPosts().filter((p) => p.slug !== post.slug);
  if (post.relatedSlugs?.length) {
    const explicit = post.relatedSlugs
      .map((s) => all.find((p) => p.slug === s))
      .filter((p): p is BlogPost => !!p);
    if (explicit.length >= limit) return explicit.slice(0, limit);
  }
  const sameCategory = all.filter((p) => p.category === post.category);
  const rest = all.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getCategories(): BlogCategory[] {
  const set = new Set<BlogCategory>();
  for (const p of POSTS) set.add(p.category);
  return Array.from(set);
}

export function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
