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
    featured: true,
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
