// Programmatic SEO data: services × Oregon cities served by Absolute Wellness Center.
// Used by /areas, /areas/[city], /areas/[city]/[service] routes.

export type Service = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  badge: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  image: string;
};

export type City = {
  slug: string;
  name: string;
  county: string;
  region: "Lane County" | "Linn–Benton" | "Mid–Willamette Valley" | "Oregon Coast" | "Central Oregon" | "Southern Oregon";
  distanceMiles: number;
  driveMinutes: number;
  population?: string;
  intro: string;
};

export const ORIGIN = {
  city: "Eugene",
  state: "OR",
  street: "2286 Oakmont Way",
  zip: "97401",
  phone: "(541) 484-5777",
  telLink: "tel:+15414845777",
};

export const SERVICES: Service[] = [
  {
    slug: "medical-weight-loss",
    name: "Medical Weight Loss",
    short: "Doctor-supervised weight loss plans built around your body, labs, and goals.",
    hero: "Lose weight the medical way — with semaglutide, phentermine, and personalized coaching from clinicians who actually listen.",
    badge: "Weight Loss",
    benefits: [
      "GLP-1 medications (Semaglutide / Wegovy / Ozempic) for 15–20% body-weight reduction",
      "Phentermine, Contrave, and Topiramate options for targeted appetite control",
      "Lipolean vitamin injections that support metabolism and energy",
      "Lab work, nutrition guidance, and accountability check-ins included",
    ],
    faqs: [
      { q: "Do you prescribe semaglutide (Ozempic / Wegovy)?", a: "Yes — semaglutide is our preferred GLP-1 option for sustained 15–20% body weight loss." },
      { q: "How quickly can I start?", a: "Most patients begin medication within 1–2 visits after labs and a quick consult." },
      { q: "Is the program covered by insurance?", a: "We accept self-pay and offer transparent pricing. Some labs may be billable to insurance." },
    ],
    related: ["bioidentical-hormones", "nutritional-ivs", "hormonal-imbalance"],
    image: "/images/weightloss_img.jpg",
  },
  // semaglutide
  {
    slug: "semaglutide-weight-loss",
    name: "Semaglutide Weight Loss",
    short: "GLP-1 weight loss with semaglutide (Wegovy / Ozempic) for sustained results.",
    hero: "Semaglutide can deliver 15–20% body weight loss when paired with the right coaching — we make it medically safe and personal.",
    badge: "GLP-1 Program",
    benefits: [
      "Compounded and brand-name semaglutide options",
      "Weekly injection schedule with dose titration",
      "Clinical monitoring for side effects and labs",
      "Bundled with nutrition + exercise guidance",
    ],
    faqs: [
      { q: "How much weight will I lose on semaglutide?", a: "Clinical trials show 15–20% body weight loss over 12 months with proper coaching." },
      { q: "What are the common side effects?", a: "Mild nausea or GI changes during dose titration — managed with slow ramp-up." },
      { q: "Do you offer compounded GLP-1?", a: "Yes — compounded semaglutide options are available when clinically appropriate." },
    ],
    related: ["medical-weight-loss", "nutritional-ivs", "bioidentical-hormones"],
    image: "/images/weight-loss-3-1.jpg",
  },
  {
    slug: "bioidentical-hormones",
    name: "Bioidentical Hormone Replacement Therapy",
    short: "BHRT customized to your labs — restore energy, mood, sleep, and libido.",
    hero: "Plant-derived, body-identical hormones tailored to your physiology, not a one-size protocol.",
    badge: "BHRT",
    benefits: [
      "Pellet, cream, and oral delivery options",
      "Comprehensive hormone panels — estrogen, progesterone, testosterone, thyroid, cortisol",
      "Designed for perimenopause, menopause, andropause, and adrenal fatigue",
      "Ongoing optimization based on follow-up labs",
    ],
    faqs: [
      { q: "Is BHRT safer than synthetic HRT?", a: "Bioidentical molecules match what your body produces, with a strong safety profile in current research." },
      { q: "How fast will I feel results?", a: "Most patients notice changes in sleep, mood, and energy within 2–4 weeks." },
      { q: "Do you treat both men and women?", a: "Yes — BHRT for women (peri/menopause) and testosterone optimization for men." },
    ],
    related: ["hormonal-imbalance", "medical-weight-loss", "nutritional-ivs"],
    image: "/images/hormonal-couple.jpg",
  },
  {
    slug: "hormonal-imbalance",
    name: "Hormonal Imbalance Treatment",
    short: "Root-cause workup for fatigue, brain fog, weight gain, hot flashes, and low libido.",
    hero: "Symptoms are real. We test, don't guess — then build a hormone plan around your lab values.",
    badge: "Hormones",
    benefits: [
      "Full thyroid + sex hormone + adrenal panels",
      "Personalized BHRT, peptides, or lifestyle prescription",
      "Coordinated with weight loss and nutrition programs",
      "Same-clinic follow-ups — no fragmented care",
    ],
    faqs: [
      { q: "What symptoms suggest a hormone imbalance?", a: "Fatigue, weight gain, mood swings, low libido, hot flashes, poor sleep, brain fog." },
      { q: "Do you treat thyroid issues?", a: "Yes — we evaluate full thyroid panels including Free T3, Free T4, and reverse T3." },
      { q: "Are pellets included?", a: "Hormone pellets are one of several delivery options we offer based on your goals." },
    ],
    related: ["bioidentical-hormones", "medical-weight-loss", "nutritional-ivs"],
    image: "/images/young-couple-running.jpg",
  },
  {
    slug: "neuropathy",
    name: "Neuropathy Treatment",
    short: "Non-surgical neuropathy treatment for numbness, tingling, and burning pain.",
    hero: "We combine nerve regeneration therapy, lifestyle medicine, and targeted nutrients to give nerves a chance to heal.",
    badge: "Nerve Care",
    benefits: [
      "Detailed nerve screening — small-fiber, peripheral, and diabetic neuropathies",
      "Combination therapy: electrotherapy, nutrition, and trigger-point support",
      "No-surgery, no-opioid pathway",
      "Programs sized for severity (mild to advanced)",
    ],
    faqs: [
      { q: "Can neuropathy actually be reversed?", a: "Many patients see meaningful nerve regeneration when treatment starts before complete fiber loss." },
      { q: "Do you treat diabetic neuropathy?", a: "Yes — diabetic peripheral neuropathy is one of our most common cases." },
      { q: "Is this covered by insurance?", a: "We offer transparent packages; some labs and visits may be billable to insurance." },
    ],
    related: ["peripheral-neuropathy", "diabetic-neuropathy", "trigger-point-injections"],
    image: "/images/neuropathy_img.jpg",
  },
  {
    slug: "peripheral-neuropathy",
    name: "Peripheral Neuropathy Treatment",
    short: "Targeted care for peripheral nerve damage in feet, legs, hands, and arms.",
    hero: "Comprehensive peripheral neuropathy treatment without surgery or long-term opioids.",
    badge: "Peripheral Nerves",
    benefits: [
      "Specialized nerve screening and severity grading",
      "Combination electrotherapy + nutrient protocols",
      "Same-day starts available for qualifying patients",
      "Coordinated with primary care or endocrinology",
    ],
    faqs: [
      { q: "How long until I notice less burning or tingling?", a: "Most patients report symptom changes within 4–8 weeks of consistent treatment." },
      { q: "Do you accept new patients with severe neuropathy?", a: "Yes — we assess severity first to set realistic outcome expectations." },
      { q: "Is treatment painful?", a: "No — our protocols are non-invasive and well tolerated." },
    ],
    related: ["neuropathy", "diabetic-neuropathy", "pain-relief"],
    image: "/images/walking-women-1920-web-2.jpg",
  },
  {
    slug: "diabetic-neuropathy",
    name: "Diabetic Neuropathy Treatment",
    short: "Slow, halt, and in many cases reverse diabetic nerve damage in feet and hands.",
    hero: "A medical, non-surgical pathway designed for patients with type 2 diabetes and prediabetes.",
    badge: "Diabetic Nerve Care",
    benefits: [
      "Nerve regeneration protocols backed by clinical evidence",
      "Coordinated with blood-sugar optimization",
      "Foot screening and fall-risk evaluation",
      "Education for partners and caregivers",
    ],
    faqs: [
      { q: "Is this the same as just controlling my blood sugar?", a: "It's complementary — we target the nerves directly while you manage A1c." },
      { q: "Do I need a referral?", a: "No referral needed — call us directly to book a screening." },
      { q: "Is treatment lifelong?", a: "No — most patients complete a defined treatment program then move to maintenance." },
    ],
    related: ["neuropathy", "peripheral-neuropathy", "medical-weight-loss"],
    image: "/images/woman-running-1920-web.jpg",
  },
  {
    slug: "chiropractic-care",
    name: "Chiropractic Care",
    short: "Gentle, targeted spinal adjustments to relieve pain and restore mobility.",
    hero: "Modern chiropractic care from licensed providers — adjustments paired with rehab so results actually last.",
    badge: "Chiropractic",
    benefits: [
      "Diversified, instrument, and low-force techniques",
      "Combined with physical therapy and home exercise plans",
      "Auto-injury and worker's comp friendly",
      "Same-clinic imaging when needed",
    ],
    faqs: [
      { q: "Do you take walk-ins?", a: "We strongly prefer appointments to minimize wait time — call ahead." },
      { q: "Will adjustments hurt?", a: "Adjustments are generally comfortable; we adapt force level to each patient." },
      { q: "How many visits before I feel better?", a: "Many patients report relief within the first 3–6 visits." },
    ],
    related: ["spinal-decompression", "physical-therapy", "back-pain"],
    image: "/images/chiropracticcare_img-2.jpg",
  },
  {
    slug: "spinal-decompression",
    name: "Spinal Decompression",
    short: "Non-surgical decompression for herniated discs, sciatica, and chronic back pain.",
    hero: "Gentle, computer-controlled spinal decompression that takes pressure off discs and nerve roots.",
    badge: "Disc Care",
    benefits: [
      "FDA-cleared decompression tables",
      "Effective for herniated, bulging, and degenerative discs",
      "Paired with rehab and core stabilization",
      "Alternative to surgery for many candidates",
    ],
    faqs: [
      { q: "Is decompression the same as traction?", a: "No — true decompression uses computer-controlled, intermittent force for negative disc pressure." },
      { q: "How long is a typical program?", a: "Most patients complete 20–24 sessions over 6–8 weeks." },
      { q: "Will I need surgery after?", a: "Most patients who complete a full program avoid surgery." },
    ],
    related: ["chiropractic-care", "back-pain", "physical-therapy"],
    image: "/images/spinaldecompression_img-1.jpg",
  },
  {
    slug: "physical-therapy",
    name: "Physical Therapy",
    short: "Hands-on rehab and targeted exercise to rebuild strength after injury or surgery.",
    hero: "Therapist-led recovery built around how you actually move at home, work, and play.",
    badge: "Rehab",
    benefits: [
      "Post-surgical and post-injury recovery",
      "Manual therapy, dry needling, and corrective exercise",
      "Auto accident and worker's comp ready",
      "Home program designed for real schedules",
    ],
    faqs: [
      { q: "Do I need a referral for PT?", a: "Oregon allows direct access — no referral required in most cases." },
      { q: "How long are sessions?", a: "Typically 45–60 minutes depending on plan of care." },
      { q: "Will my insurance cover this?", a: "We verify benefits before your first visit and offer transparent self-pay rates." },
    ],
    related: ["chiropractic-care", "spinal-decompression", "joint-pain"],
    image: "/images/physical-therapy-9-1.jpg",
  },
  {
    slug: "joint-injections",
    name: "Joint Injections",
    short: "Targeted joint injections for knee, shoulder, hip, and small-joint pain.",
    hero: "Image-guided joint injections from clinicians who treat the cause, not just the flare.",
    badge: "Injections",
    benefits: [
      "Cortisone, hyaluronic acid, and regenerative options",
      "Knee, shoulder, hip, ankle, wrist, and finger joints",
      "Coordinated with rehab and decompression",
      "Most appointments under 30 minutes",
    ],
    faqs: [
      { q: "How long does relief last?", a: "Varies by joint and substance — many patients get 3–6 months of meaningful relief." },
      { q: "Can I have injections in multiple joints?", a: "Yes, when clinically indicated and safe." },
      { q: "Will I need rest after?", a: "Plan for 24–48 hours of reduced activity following an injection." },
    ],
    related: ["trigger-point-injections", "knee-pain", "shoulder-pain"],
    image: "/images/medical-injections.jpg",
  },
  {
    slug: "trigger-point-injections",
    name: "Trigger Point Injections",
    short: "Direct relief for stubborn muscle knots and myofascial pain.",
    hero: "Quick, targeted injections that release tight muscle bands the rest of your routine just can't reach.",
    badge: "Myofascial",
    benefits: [
      "Effective for neck, shoulder, and low-back trigger points",
      "Helpful for tension headaches and TMJ-related pain",
      "Often combined with chiropractic and PT",
      "Same-day appointments commonly available",
    ],
    faqs: [
      { q: "How fast will I feel relief?", a: "Many patients feel relief within minutes to hours." },
      { q: "How many injections per session?", a: "Typically 1–6 points based on exam findings." },
      { q: "Are these the same as Botox?", a: "No — trigger point injections usually use lidocaine or saline, not Botox." },
    ],
    related: ["joint-injections", "neck-pain", "back-pain"],
    image: "/images/medical-injections.jpg",
  },
  {
    slug: "nutritional-ivs",
    name: "Nutritional IV Therapy",
    short: "IV vitamin, mineral, and amino acid blends for energy, immunity, and recovery.",
    hero: "Clinically dosed IV therapy — not a wellness fad, but a clinical tool for real deficiencies and recovery.",
    badge: "IV Therapy",
    benefits: [
      "Myers cocktail, glutathione, B-complex, NAD+ options",
      "Hydration and recovery drips",
      "Pre/post athletic event support",
      "Clean infusion room with comfortable recliners",
    ],
    faqs: [
      { q: "How long does an IV take?", a: "Most drips take 30–60 minutes." },
      { q: "Is there a clinician on site?", a: "Yes — every drip is medically supervised." },
      { q: "Can I do IVs alongside other treatments?", a: "Yes — IVs pair well with weight loss, BHRT, and recovery from injury." },
    ],
    related: ["medical-weight-loss", "bioidentical-hormones", "hormonal-imbalance"],
    image: "/images/IV-Therapy-2.jpg",
  },
  {
    slug: "back-pain",
    name: "Back Pain Treatment",
    short: "Targeted relief for low back pain, herniated discs, and sciatica.",
    hero: "From the first visit, we map out a plan that combines spinal care, decompression, and rehab.",
    badge: "Back Pain",
    benefits: [
      "Decompression for herniated and bulging discs",
      "Chiropractic adjustments and PT rehab",
      "Sciatica and radiculopathy expertise",
      "Imaging coordination when needed",
    ],
    faqs: [
      { q: "When should I worry about back pain?", a: "Bowel/bladder changes, leg weakness, or fevers warrant urgent evaluation." },
      { q: "Do I need an MRI first?", a: "Not always — we'll evaluate and refer for imaging only if it changes the plan." },
      { q: "Can you help me avoid surgery?", a: "Many candidates for surgery successfully avoid it with a structured program." },
    ],
    related: ["spinal-decompression", "chiropractic-care", "physical-therapy"],
    image: "/images/Back-Pain-new-1.jpg",
  },
  {
    slug: "neck-pain",
    name: "Neck Pain Treatment",
    short: "Care for stiff necks, tension headaches, and cervical disc issues.",
    hero: "Targeted treatment for chronic neck stiffness, whiplash, and cervicogenic headaches.",
    badge: "Neck Pain",
    benefits: [
      "Gentle cervical adjustments and traction",
      "Trigger point injections for stubborn knots",
      "Posture and ergonomics coaching",
      "Whiplash and auto-injury experience",
    ],
    faqs: [
      { q: "Can you help with tension headaches?", a: "Yes — many headaches stem from cervical and trigger point issues." },
      { q: "How many visits before relief?", a: "Most patients see change within 3–6 visits." },
      { q: "Is neck adjustment safe?", a: "Yes — we use evidence-based, low-force methods tailored to each patient." },
    ],
    related: ["chiropractic-care", "trigger-point-injections", "whiplash"],
    image: "/images/neckpain_img.jpg",
  },
  {
    slug: "knee-pain",
    name: "Knee Pain Treatment",
    short: "Joint injections, regenerative options, and rehab for chronic knee pain.",
    hero: "Whether it's arthritis, bursitis, or post-injury — we map your knee to the right combination of care.",
    badge: "Knee Pain",
    benefits: [
      "Cortisone and hyaluronic acid (gel) injections",
      "Bursitis and tendinopathy management",
      "PT to restore strength and stability",
      "Alternative to long-term NSAIDs",
    ],
    faqs: [
      { q: "Do you inject hyaluronic acid for knee arthritis?", a: "Yes — HA / viscosupplementation is one of our options for knee osteoarthritis." },
      { q: "Can I avoid knee replacement?", a: "Many patients delay or avoid replacement with the right combination of care." },
      { q: "Do you treat patellar tracking?", a: "Yes — we manage patellar tracking, tendinopathy, and bursitis." },
    ],
    related: ["joint-injections", "physical-therapy", "joint-pain"],
    image: "/images/Knee-Pain-new.jpg",
  },
  {
    slug: "shoulder-pain",
    name: "Shoulder Pain Treatment",
    short: "Care for frozen shoulder, rotator cuff issues, and chronic shoulder pain.",
    hero: "From frozen shoulder to rotator cuff strain — we restore range and rebuild strength.",
    badge: "Shoulder",
    benefits: [
      "Joint and bursa injections",
      "Adhesive capsulitis (frozen shoulder) programs",
      "PT for rotator cuff and scapular control",
      "Coordinated imaging when warranted",
    ],
    faqs: [
      { q: "Can you treat frozen shoulder?", a: "Yes — adhesive capsulitis responds well to combined injection + PT approaches." },
      { q: "Do I need an MRI first?", a: "Not initially — exam findings often guide the first round of care." },
      { q: "How long is recovery?", a: "Varies — frozen shoulder typically improves over 3–6 months with treatment." },
    ],
    related: ["joint-injections", "physical-therapy", "joint-pain"],
    image: "/images/shoulder-pain-new-1.jpg",
  },
  {
    slug: "joint-pain",
    name: "Joint Pain Treatment",
    short: "Whole-body joint pain care — knees, shoulders, hips, hands, ankles, and more.",
    hero: "Joint pain rarely has a single cause. We assess, treat, and rebuild so you can move freely again.",
    badge: "Joint Pain",
    benefits: [
      "Multi-joint evaluation and treatment plans",
      "Injection options, decompression, and rehab",
      "Arthritis, bursitis, and tendinopathy management",
      "Alternatives to long-term opioids and NSAIDs",
    ],
    faqs: [
      { q: "What causes joint pain?", a: "Common causes include arthritis, bursitis, tendinopathy, post-injury, and autoimmune conditions." },
      { q: "Do you treat rheumatoid arthritis?", a: "We provide symptom and mobility care; we coordinate with rheumatology when needed." },
      { q: "Can you help if I've had surgery?", a: "Yes — post-surgical joint pain is one of our core areas of focus." },
    ],
    related: ["joint-injections", "knee-pain", "shoulder-pain"],
    image: "/images/knee-pain-1-2-1.jpg",
  },
  {
    slug: "auto-injury",
    name: "Auto Accident Injury Care",
    short: "Same-day care after a car accident — chiropractic, PT, and imaging coordination.",
    hero: "After a crash, the right first appointment can change everything. We document, treat, and bill correctly.",
    badge: "Auto Injury",
    benefits: [
      "PIP and third-party claim friendly",
      "Same-day post-accident evaluations",
      "Coordinated chiropractic + PT + injections",
      "Detailed documentation for legal use",
    ],
    faqs: [
      { q: "Do you bill auto insurance?", a: "Yes — we work with PIP and third-party carriers regularly." },
      { q: "How soon after the accident should I come in?", a: "As soon as possible — ideally within 72 hours." },
      { q: "Do you work with attorneys?", a: "Yes — we provide records and documentation as needed." },
    ],
    related: ["whiplash", "chiropractic-care", "physical-therapy"],
    image: "/images/Auto-Injuri.jpg",
  },
  {
    slug: "whiplash",
    name: "Whiplash Treatment",
    short: "Specialized care for whiplash, concussion symptoms, and post-MVA neck pain.",
    hero: "Targeted whiplash care that addresses the soft tissue, the joints, and the nervous system together.",
    badge: "Whiplash",
    benefits: [
      "Gentle cervical care + soft tissue therapy",
      "Concussion symptom support",
      "PIP and third-party billing",
      "Coordinated with auto-injury documentation",
    ],
    faqs: [
      { q: "How long does whiplash recovery take?", a: "Most cases improve within 6–12 weeks with consistent care." },
      { q: "Can whiplash cause headaches?", a: "Yes — cervicogenic headaches are common after whiplash injuries." },
      { q: "Do you treat children with whiplash?", a: "We treat adolescents; younger pediatric cases are referred appropriately." },
    ],
    related: ["auto-injury", "neck-pain", "chiropractic-care"],
    image: "/images/whiplash.jpg",
  },
  {
    slug: "regenerative-medicine",
    name: "Regenerative Medicine",
    short: "Non-surgical regenerative options for joints, nerves, and chronic pain.",
    hero: "We focus on giving your body what it needs to heal — without rushing to surgery.",
    badge: "Regenerative",
    benefits: [
      "Combined injection, decompression, and rehab pathways",
      "Personalized to your imaging and exam findings",
      "Long-term outcomes over short-term shortcuts",
      "Same-clinic continuity of care",
    ],
    faqs: [
      { q: "What is regenerative medicine?", a: "An approach that supports the body's own healing rather than masking symptoms." },
      { q: "Is it covered by insurance?", a: "Coverage varies; we offer transparent self-pay packages." },
      { q: "Is it safe?", a: "Yes — protocols are evidence-informed and clinician-supervised." },
    ],
    related: ["joint-injections", "spinal-decompression", "neuropathy"],
    image: "/images/man-running.jpg",
  },
  {
    slug: "pain-relief",
    name: "Pain Relief",
    short: "Multi-modality pain relief without long-term opioids or rushed surgery.",
    hero: "A pain-relief team that treats the cause — combining injections, rehab, and lifestyle medicine.",
    badge: "Pain Relief",
    benefits: [
      "Combined chiropractic, PT, and injection care",
      "Non-opioid, non-surgical first-line approach",
      "Auto-injury, sports, and chronic pain experience",
      "One clinic, one coordinated plan",
    ],
    faqs: [
      { q: "Do you prescribe opioids?", a: "We focus on non-opioid pathways and coordinate with prescribers when truly indicated." },
      { q: "How fast can I get in?", a: "Most new patients are seen within 1–3 business days." },
      { q: "What if I've already tried PT elsewhere?", a: "Bring records — our integrated approach often unlocks progress when single-modality care stalled." },
    ],
    related: ["chiropractic-care", "joint-injections", "spinal-decompression"],
    image: "/images/meditation-1920.jpg",
  },
];

export const CITIES: City[] = [
  // Lane County
  { slug: "eugene", name: "Eugene", county: "Lane County", region: "Lane County", distanceMiles: 0, driveMinutes: 0, population: "175,000+", intro: "Our home city — Eugene is where every Absolute Wellness Center patient is treated, but we proudly serve families from across the region." },
  { slug: "springfield", name: "Springfield", county: "Lane County", region: "Lane County", distanceMiles: 5, driveMinutes: 12, population: "62,000+", intro: "Springfield neighbors Eugene and reaches our clinic in under 15 minutes via I-105 or Franklin Boulevard." },
  { slug: "cottage-grove", name: "Cottage Grove", county: "Lane County", region: "Lane County", distanceMiles: 21, driveMinutes: 25, population: "10,000+", intro: "Cottage Grove patients drive about 25 minutes north on I-5 to reach our Eugene office." },
  { slug: "creswell", name: "Creswell", county: "Lane County", region: "Lane County", distanceMiles: 11, driveMinutes: 15, population: "5,800+", intro: "Creswell is a short hop up I-5 to our Eugene clinic." },
  { slug: "junction-city", name: "Junction City", county: "Lane County", region: "Lane County", distanceMiles: 14, driveMinutes: 20, population: "6,500+", intro: "Junction City residents reach Absolute Wellness Center via Highway 99 in about 20 minutes." },
  { slug: "veneta", name: "Veneta", county: "Lane County", region: "Lane County", distanceMiles: 14, driveMinutes: 22, population: "5,000+", intro: "Veneta sits just west of Eugene on Highway 126." },
  { slug: "florence", name: "Florence", county: "Lane County", region: "Oregon Coast", distanceMiles: 60, driveMinutes: 75, population: "9,500+", intro: "Florence patients make the scenic drive over the coast range for specialty care at our Eugene clinic." },
  { slug: "coburg", name: "Coburg", county: "Lane County", region: "Lane County", distanceMiles: 8, driveMinutes: 12, population: "1,300+", intro: "Coburg is minutes from Eugene via I-5." },
  { slug: "pleasant-hill", name: "Pleasant Hill", county: "Lane County", region: "Lane County", distanceMiles: 12, driveMinutes: 18, population: "1,300+", intro: "Pleasant Hill families reach our Eugene clinic via Highway 58." },
  { slug: "oakridge", name: "Oakridge", county: "Lane County", region: "Lane County", distanceMiles: 42, driveMinutes: 55, population: "3,300+", intro: "Oakridge residents drive in along Highway 58 for specialty services not offered locally." },
  { slug: "lowell", name: "Lowell", county: "Lane County", region: "Lane County", distanceMiles: 22, driveMinutes: 30, population: "1,100+", intro: "Lowell sits along Highway 58 with a short drive into Eugene." },
  { slug: "dexter", name: "Dexter", county: "Lane County", region: "Lane County", distanceMiles: 18, driveMinutes: 25, population: "1,000+", intro: "Dexter is a short Highway 58 drive to our Eugene office." },
  { slug: "walterville", name: "Walterville", county: "Lane County", region: "Lane County", distanceMiles: 16, driveMinutes: 25, population: "2,400+", intro: "Walterville residents head west on Highway 126 to reach us." },
  { slug: "marcola", name: "Marcola", county: "Lane County", region: "Lane County", distanceMiles: 17, driveMinutes: 25, population: "1,000+", intro: "Marcola sits northeast of Springfield with easy access to our Eugene clinic." },
  { slug: "mapleton", name: "Mapleton", county: "Lane County", region: "Oregon Coast", distanceMiles: 45, driveMinutes: 55, population: "900+", intro: "Mapleton patients drive Highway 126 east through the coast range to Eugene." },
  { slug: "westfir", name: "Westfir", county: "Lane County", region: "Lane County", distanceMiles: 40, driveMinutes: 52, population: "270+", intro: "Westfir sits along the upper Willamette near Oakridge." },
  { slug: "vida", name: "Vida", county: "Lane County", region: "Lane County", distanceMiles: 24, driveMinutes: 35, population: "1,100+", intro: "Vida is along the scenic McKenzie River corridor on Highway 126." },
  { slug: "blue-river", name: "Blue River", county: "Lane County", region: "Lane County", distanceMiles: 42, driveMinutes: 55, population: "200+", intro: "Blue River sits up the McKenzie River corridor about an hour from our Eugene clinic." },
  { slug: "mckenzie-bridge", name: "McKenzie Bridge", county: "Lane County", region: "Lane County", distanceMiles: 55, driveMinutes: 70, population: "150+", intro: "McKenzie Bridge patients make the scenic Highway 126 drive to Eugene." },
  { slug: "crow", name: "Crow", county: "Lane County", region: "Lane County", distanceMiles: 16, driveMinutes: 25, population: "500+", intro: "Crow sits southwest of Eugene with a quick drive in." },
  { slug: "harrisburg", name: "Harrisburg", county: "Linn–Benton", region: "Linn–Benton", distanceMiles: 16, driveMinutes: 22, population: "3,700+", intro: "Harrisburg patients hop down Highway 99E to reach our Eugene clinic." },
  { slug: "monroe", name: "Monroe", county: "Linn–Benton", region: "Linn–Benton", distanceMiles: 24, driveMinutes: 30, population: "650+", intro: "Monroe residents drive Highway 99W south into Eugene." },
  { slug: "brownsville", name: "Brownsville", county: "Linn–Benton", region: "Linn–Benton", distanceMiles: 35, driveMinutes: 40, population: "1,800+", intro: "Brownsville patients drive about 40 minutes south on I-5 to Eugene." },
  { slug: "halsey", name: "Halsey", county: "Linn–Benton", region: "Linn–Benton", distanceMiles: 28, driveMinutes: 35, population: "1,100+", intro: "Halsey is a short I-5 drive south to Eugene." },
  { slug: "tangent", name: "Tangent", county: "Linn–Benton", region: "Linn–Benton", distanceMiles: 35, driveMinutes: 42, population: "1,300+", intro: "Tangent residents drive south on I-5 to our Eugene clinic." },
  { slug: "albany", name: "Albany", county: "Linn–Benton", region: "Linn–Benton", distanceMiles: 45, driveMinutes: 50, population: "57,000+", intro: "Albany residents drive south on I-5 for specialty regenerative care at our Eugene clinic." },
  { slug: "corvallis", name: "Corvallis", county: "Linn–Benton", region: "Linn–Benton", distanceMiles: 47, driveMinutes: 55, population: "59,000+", intro: "Corvallis patients drive Highway 99W south to Eugene for specialty hormone and weight loss care." },
  { slug: "philomath", name: "Philomath", county: "Linn–Benton", region: "Linn–Benton", distanceMiles: 52, driveMinutes: 65, population: "5,500+", intro: "Philomath residents drive in via Corvallis and Highway 99W." },
  { slug: "lebanon", name: "Lebanon", county: "Linn–Benton", region: "Linn–Benton", distanceMiles: 56, driveMinutes: 65, population: "18,000+", intro: "Lebanon patients head down I-5 about an hour to our Eugene office." },
  { slug: "sweet-home", name: "Sweet Home", county: "Linn–Benton", region: "Linn–Benton", distanceMiles: 60, driveMinutes: 75, population: "9,800+", intro: "Sweet Home residents drive Highway 20 west to I-5 south for our clinic." },
  { slug: "stayton", name: "Stayton", county: "Mid–Willamette Valley", region: "Mid–Willamette Valley", distanceMiles: 80, driveMinutes: 95, population: "8,500+", intro: "Stayton patients head down I-5 and Highway 22 to reach our Eugene clinic." },
  { slug: "salem", name: "Salem", county: "Mid–Willamette Valley", region: "Mid–Willamette Valley", distanceMiles: 65, driveMinutes: 70, population: "177,000+", intro: "Salem patients drive I-5 south about an hour to Eugene for specialty care." },
  { slug: "keizer", name: "Keizer", county: "Mid–Willamette Valley", region: "Mid–Willamette Valley", distanceMiles: 70, driveMinutes: 75, population: "39,000+", intro: "Keizer sits just north of Salem along I-5, with a one-hour drive to our Eugene clinic." },
  { slug: "dallas", name: "Dallas", county: "Mid–Willamette Valley", region: "Mid–Willamette Valley", distanceMiles: 75, driveMinutes: 85, population: "17,000+", intro: "Dallas residents drive Highway 22 and I-5 south to reach Eugene." },
  { slug: "independence", name: "Independence", county: "Mid–Willamette Valley", region: "Mid–Willamette Valley", distanceMiles: 75, driveMinutes: 85, population: "10,000+", intro: "Independence patients reach our Eugene clinic via Highway 99W south." },
  { slug: "monmouth", name: "Monmouth", county: "Mid–Willamette Valley", region: "Mid–Willamette Valley", distanceMiles: 73, driveMinutes: 85, population: "11,000+", intro: "Monmouth residents drive Highway 99W south through the valley to Eugene." },
  { slug: "newport", name: "Newport", county: "Lincoln County", region: "Oregon Coast", distanceMiles: 90, driveMinutes: 110, population: "10,000+", intro: "Newport patients make the coastal drive over Highway 20 to Eugene for specialty care." },
  { slug: "toledo", name: "Toledo", county: "Lincoln County", region: "Oregon Coast", distanceMiles: 88, driveMinutes: 105, population: "3,500+", intro: "Toledo sits along Highway 20 east of Newport." },
  { slug: "lincoln-city", name: "Lincoln City", county: "Lincoln County", region: "Oregon Coast", distanceMiles: 105, driveMinutes: 130, population: "9,000+", intro: "Lincoln City patients travel south through the coast range to our Eugene clinic." },
  { slug: "newberg", name: "Newberg", county: "Yamhill County", region: "Mid–Willamette Valley", distanceMiles: 95, driveMinutes: 105, population: "26,000+", intro: "Newberg patients drive Highway 99W south to our Eugene office." },
  { slug: "mcminnville", name: "McMinnville", county: "Yamhill County", region: "Mid–Willamette Valley", distanceMiles: 90, driveMinutes: 105, population: "35,000+", intro: "McMinnville residents reach our Eugene clinic via Highway 99W." },
  { slug: "sheridan", name: "Sheridan", county: "Yamhill County", region: "Mid–Willamette Valley", distanceMiles: 95, driveMinutes: 115, population: "6,200+", intro: "Sheridan patients head south on Highway 99W to Eugene." },
  { slug: "roseburg", name: "Roseburg", county: "Douglas County", region: "Southern Oregon", distanceMiles: 70, driveMinutes: 75, population: "24,000+", intro: "Roseburg patients drive I-5 north to reach our Eugene clinic in about 75 minutes." },
  { slug: "sutherlin", name: "Sutherlin", county: "Douglas County", region: "Southern Oregon", distanceMiles: 58, driveMinutes: 65, population: "8,300+", intro: "Sutherlin sits along I-5 about an hour south of Eugene." },
  { slug: "myrtle-creek", name: "Myrtle Creek", county: "Douglas County", region: "Southern Oregon", distanceMiles: 85, driveMinutes: 95, population: "3,400+", intro: "Myrtle Creek patients drive I-5 north to Eugene for specialty regenerative care." },
  { slug: "canyonville", name: "Canyonville", county: "Douglas County", region: "Southern Oregon", distanceMiles: 100, driveMinutes: 110, population: "1,900+", intro: "Canyonville is along I-5 in southern Douglas County." },
  { slug: "bend", name: "Bend", county: "Deschutes County", region: "Central Oregon", distanceMiles: 130, driveMinutes: 155, population: "100,000+", intro: "Bend residents drive Highway 20 west across the Cascades for our Eugene clinic's hormone and weight loss programs." },
  { slug: "redmond", name: "Redmond", county: "Deschutes County", region: "Central Oregon", distanceMiles: 145, driveMinutes: 175, population: "37,000+", intro: "Redmond patients drive through Bend and over the Cascades to reach our Eugene clinic." },
  { slug: "medford", name: "Medford", county: "Jackson County", region: "Southern Oregon", distanceMiles: 170, driveMinutes: 165, population: "85,000+", intro: "Medford patients drive I-5 north to Eugene for specialty neuropathy and BHRT programs." },
  { slug: "ashland", name: "Ashland", county: "Jackson County", region: "Southern Oregon", distanceMiles: 180, driveMinutes: 180, population: "21,000+", intro: "Ashland residents drive I-5 north to Eugene for specialty regenerative care." },
  { slug: "westlake", name: "Westlake", county: "Lane County", region: "Oregon Coast", distanceMiles: 55, driveMinutes: 70, population: "300+", intro: "Westlake sits along the central Oregon coast near Florence." },
  { slug: "drain", name: "Drain", county: "Douglas County", region: "Southern Oregon", distanceMiles: 40, driveMinutes: 50, population: "1,200+", intro: "Drain patients drive I-5 north about 50 minutes to our Eugene clinic." },
];

export const REGIONS = [
  "Lane County",
  "Linn–Benton",
  "Mid–Willamette Valley",
  "Oregon Coast",
  "Southern Oregon",
  "Central Oregon",
] as const;

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
}

export function nearbyCities(city: City, limit = 6): City[] {
  return CITIES.filter((c) => c.slug !== city.slug)
    .sort((a, b) => Math.abs(a.distanceMiles - city.distanceMiles) - Math.abs(b.distanceMiles - city.distanceMiles))
    .slice(0, limit);
}
