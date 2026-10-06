import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Leaf, Menu, Sparkles } from "lucide-react";
import heroImage from "../assets/anel-sausage-hero.jpg";
import curedMeatsImage from "../assets/anel-cured-meats.jpg";
import cheeseImage from "../assets/anel-cheese.jpg";
import produceImage from "../assets/anel-produce.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ANEL 007 — Fine foods, warmly served" },
      {
        name: "description",
        content:
          "Discover artisan sausages, cured meats, fine cheeses, and fresh produce at ANEL 007.",
      },
      { property: "og:title", content: "ANEL 007 — Fine foods, warmly served" },
      {
        property: "og:description",
        content: "A neighborhood grocery for artisan meats, fine cheeses, and market-fresh produce.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = [
  {
    title: "Cured meats",
    note: "Slow-aged & hand-sliced",
    image: curedMeatsImage,
    imageAlt: "Selection of artisan cured meats and salami",
    tone: "bg-rose-soft",
  },
  {
    title: "Fine cheeses",
    note: "Creamy, aged & full of character",
    image: cheeseImage,
    imageAlt: "Selection of artisan soft and aged cheeses",
    tone: "bg-gold-soft",
  },
  {
    title: "Fresh produce",
    note: "Colorful, crisp & in season",
    image: produceImage,
    imageAlt: "Wooden crate filled with fresh seasonal vegetables",
    tone: "bg-green-soft",
  },
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-20 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3" aria-label="ANEL 007 home">
          <span className="grid size-10 place-items-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
            A
          </span>
          <span className="font-display text-xl font-semibold">ANEL 007</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main navigation">
          <a className="transition-colors hover:text-primary" href="#assortment">Assortment</a>
          <a className="transition-colors hover:text-primary" href="#favorites">Favorites</a>
          <a className="transition-colors hover:text-primary" href="#our-story">Our story</a>
        </nav>

        <a
          href="#favorites"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex"
        >
          Order now <ArrowRight className="size-4" aria-hidden="true" />
        </a>
        <a href="#assortment" className="grid size-10 place-items-center rounded-full border border-border md:hidden" aria-label="Browse our selection">
          <Menu className="size-5" aria-hidden="true" />
        </a>
      </header>

      <section id="top" className="mx-auto max-w-[1440px] px-5 pb-10 sm:px-8 lg:px-12">
        <div className="relative min-h-[720px] overflow-hidden rounded-[2rem] bg-hero md:min-h-[760px]">
          <img
            src={heroImage}
            alt="Smoked artisan sausage with rosemary and mustard seeds"
            width={1600}
            height={1104}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-hero-overlay" />

          <div className="relative z-10 flex min-h-[720px] max-w-3xl flex-col justify-between p-7 sm:p-12 md:min-h-[760px] lg:p-16">
            <div className="animate-rise flex w-fit items-center gap-2 rounded-full border border-foreground/15 bg-background/75 px-4 py-2 text-xs font-semibold uppercase backdrop-blur-md">
              <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
              Good food, close to home
            </div>

            <div className="animate-rise max-w-2xl [animation-delay:120ms]">
              <p className="mb-4 font-display text-xl italic text-primary sm:text-2xl">Your neighborhood delicatessen</p>
              <h1 className="font-display text-7xl leading-[0.82] font-semibold sm:text-8xl lg:text-[9rem]">
                ANEL <span className="text-primary">007</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
                Honest flavors, thoughtfully chosen. Discover handmade sausages, characterful cheeses, and the freshest market produce.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#favorites" className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5">
                  View our selection <ArrowDownRight className="size-4" aria-hidden="true" />
                </a>
                <span className="text-sm font-medium text-foreground/65">Chosen daily · Served warmly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="assortment" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-accent">From our counters</p>
            <h2 className="max-w-2xl font-display text-5xl leading-tight sm:text-6xl">Simple things, exceptionally good.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Every item earns its place on our shelves—selected for flavor, freshness, and the people who make it.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category, index) => (
            <article key={category.title} className={`group overflow-hidden rounded-[1.5rem] ${category.tone} p-3 shadow-soft`}>
              <div className="overflow-hidden rounded-[1rem]">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  loading="lazy"
                  width={1008}
                  height={1008}
                  className="aspect-[4/4.6] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-end justify-between gap-4 px-3 pb-2 pt-5">
                <div>
                  <span className="mb-2 block text-xs font-bold text-muted-foreground">0{index + 1}</span>
                  <h3 className="font-display text-3xl font-semibold">{category.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{category.note}</p>
                </div>
                <ArrowDownRight className="mb-1 size-6 shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="favorites" className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="mb-4 text-xs font-bold uppercase text-primary-foreground/60">A local favorite</p>
              <h2 className="font-display text-5xl leading-tight sm:text-7xl">Made for the table, meant to be shared.</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-primary-foreground/20 pt-6 text-sm">
              <p className="text-primary-foreground/60">Our signature</p>
              <p className="font-semibold">Traditional smoked sausage</p>
              <p className="text-primary-foreground/60">Best enjoyed</p>
              <p className="font-semibold">Warm bread, pickles & good company</p>
            </div>
          </div>
          <div className="relative min-h-[480px] overflow-hidden rounded-[1.5rem]">
            <img src={heroImage} alt="Traditional smoked sausage ready to share" loading="lazy" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover object-right" />
          </div>
        </div>
      </section>

      <section id="our-story" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-lg rounded-full bg-green-soft p-8">
            <img src={produceImage} alt="Fresh produce selected for the ANEL 007 market" loading="lazy" width={1008} height={1008} className="h-full w-full rounded-full object-cover" />
            <span className="absolute right-3 top-8 grid size-24 rotate-6 place-items-center rounded-full bg-accent text-center text-xs font-bold uppercase text-accent-foreground shadow-soft">Freshly<br />selected</span>
          </div>
          <div className="max-w-xl">
            <Leaf className="mb-6 size-8 text-secondary" aria-hidden="true" />
            <p className="mb-3 text-xs font-bold uppercase text-accent">Welcome to our table</p>
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">Your everyday shop, with a little more care.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">ANEL 007 brings together the foods we love to eat and share. Familiar favorites sit beside new discoveries, all chosen with a sharp eye for quality and a warm sense of hospitality.</p>
            <a href="#assortment" className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-bold text-primary">Explore the counter <ArrowRight className="size-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <footer className="mx-5 mb-5 rounded-[1.5rem] bg-foreground px-6 py-10 text-background sm:mx-8 lg:mx-12">
        <div className="mx-auto flex max-w-[1344px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-4xl font-semibold">ANEL 007</p>
            <p className="mt-2 text-sm text-background/60">Fine foods, warmly served.</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm" aria-label="Footer navigation">
            <a href="#assortment" className="hover:text-accent">Assortment</a>
            <a href="#favorites" className="hover:text-accent">Favorites</a>
            <a href="#our-story" className="hover:text-accent">Our story</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
