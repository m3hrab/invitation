import type { ReactNode } from "react";
import {
  ChevronRight,
  Download,
  FileText,
  IdCard,
  Landmark,
  Mail,
  MapPin,
  PenLine,
  Shirt,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";
import { useInView, useScrollProgress } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function Invitation() {
  const progress = useScrollProgress();

  return (
    <main className="relative">
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 bg-teal-mist/60"
        aria-hidden="true"
      >
        <div
          className="h-full origin-left bg-teal"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 right-[-12%] size-96 rounded-full bg-teal/8 blur-3xl" />
        <div className="absolute top-[36%] left-[-18%] size-80 rounded-full bg-gold/12 blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] size-72 rounded-full bg-teal-mist/70 blur-3xl" />
      </div>

      <Hero />
      <TheIdea />
      <HowItWorks />
      <TheProblem />
      <WhyYou />
      <WorkSplit />
      <WhatTheyProvide />
      <Principles />
      <Security />
      <TimeCommitment />
      <Closing />
    </main>
  );
}

function Ornament({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-3", className)}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-gold-soft" />
      <span className="size-1.5 rotate-45 bg-gold" />
      <span className="h-px w-10 bg-gold-soft" />
    </div>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto w-full max-w-3xl px-6 py-20 md:py-28", className)}
    >
      {children}
    </section>
  );
}

function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "mb-4 font-sans text-xs font-medium tracking-[0.22em] text-gold uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-section leading-tight font-semibold text-ink">
      {children}
    </h2>
  );
}

function Body({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mt-5 text-base leading-relaxed text-ink-soft md:text-lg", className)}>
      {children}
    </p>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[100dvh] w-full max-w-3xl flex-col justify-center px-6 py-24">
      <p className="hero-enter font-sans text-xs font-medium tracking-[0.22em] text-gold uppercase">
        An invitation, from us to you
      </p>
      <h1 className="hero-enter hero-enter-delay-1 mt-6 font-display text-hero leading-[1.08] font-semibold text-ink">
        Let’s begin something together.
      </h1>
      <p className="hero-enter hero-enter-delay-2 mt-7 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
        A small, honest family venture — not a pitch, and not a favour. An idea we
        would like to build with the people we already trust.
      </p>
      <div className="hero-enter hero-enter-delay-3 mt-10">
        <Ornament />
      </div>
      <p className="hero-enter hero-enter-delay-4 mt-16 text-sm tracking-wide text-muted">
        Scroll when you are ready
      </p>
    </section>
  );
}

const FLOW = [
  { label: "We design it", detail: "A planner, a mug, a shirt — on a screen", Icon: PenLine },
  { label: "It is listed on Etsy", detail: "The stall goes live in the marketplace", Icon: Store },
  { label: "Someone buys", detail: "They pay Etsy, in their own currency", Icon: ShoppingBag },
  { label: "It is delivered", detail: "A download, or Printify posts it", Icon: Truck },
] as const;

const ETSY_POINTS = [
  {
    title: "A marketplace, not a website we have to build",
    text: "Think of a giant indoor market, but online. Etsy provides the building, the aisles, and the till. We would open a stall inside it.",
  },
  {
    title: "The shoppers are already there",
    text: "People in the UK, Europe, the US and beyond already go to Etsy to buy gifts, prints, planners, clothes and homeware. We do not have to invent an audience from nothing.",
  },
  {
    title: "Etsy takes the money, and a small fee",
    text: "The customer pays Etsy, not us. Etsy keeps a modest cut for the stall and the payment, and passes the rest on. There is no till for us to manage.",
  },
] as const;

function TheIdea() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section id="idea" className="max-w-4xl">
      <Reveal>
        <Eyebrow>The idea, in plain language</Eyebrow>
        <Heading>A small shop, in a marketplace that already has customers.</Heading>
        <Body>
          We would like to sell useful, well-made things online. Not from a high-street
          unit, and not from a complicated website we would have to build ourselves.
          From a stall on a well-known site called Etsy.
        </Body>
      </Reveal>

      <Reveal className="mt-12">
        <p className="text-xs font-medium tracking-[0.18em] text-teal uppercase">
          First — what Etsy is
        </p>
        <h3 className="font-display mt-3 text-2xl font-semibold text-ink">
          A global market for handmade and creative goods.
        </h3>
        <Body>
          If you have not used it, that is all right. Etsy is simply a shopping website
          — used by millions — where people buy things that feel personal: prints,
          planners, jewellery, clothes, homeware, digital downloads. It is ordinary,
          established, and already trusted in the UK.
        </Body>
        <ul className="mt-8 space-y-4">
          {ETSY_POINTS.map((point) => (
            <li
              key={point.title}
              className="rounded-2xl bg-surface px-5 py-5 shadow-[var(--shadow-border)]"
            >
              <p className="font-medium text-ink">{point.title}</p>
              <p className="mt-1.5 text-base leading-relaxed text-ink-soft">{point.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <div ref={ref} className="mt-14">
        <p className="text-xs font-medium tracking-[0.18em] text-teal uppercase">
          Then — what we would sell
        </p>
        <h3 className="font-display mt-3 text-2xl font-semibold text-ink">
          Two kinds of product. Both start with a design we make.
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          One is a file, sent at once. The other is a physical object, made only when
          someone orders it. We never buy stock in advance, and we never pack a box.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <article
            className={cn(
              "reveal rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-7",
              inView && "is-in",
            )}
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-teal-mist text-teal">
              <Download className="size-5" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <p className="mt-5 text-xs font-medium tracking-[0.18em] text-teal uppercase">
              Digital products
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-ink">
              A file the buyer downloads
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Printable planners, Notion templates, Canva templates, simple
              spreadsheets. The customer pays on Etsy, and they receive a download
              immediately. Nothing is printed. Nothing is posted. There is no parcel,
              and no cupboard of stock.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Once the design is made, it can be sold again and again — the same file,
              to as many people as want it.
            </p>
          </article>

          <article
            className={cn(
              "reveal rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-7",
              inView && "is-in",
            )}
            style={{ transitionDelay: inView ? "120ms" : "0ms" }}
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-teal-mist text-teal">
              <Shirt className="size-5" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <p className="mt-5 text-xs font-medium tracking-[0.18em] text-gold uppercase">
              Print-on-demand
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-ink">
              A physical item, made to order
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              A mug, a t-shirt, a tote bag. “Print-on-demand” only means this: the
              item is manufactured after it is bought, not before. We do not order a
              hundred mugs and hope they sell. We upload a design. When someone
              orders, it is made.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              A company called Printify does the printing, the packing, and the
              posting — to the customer’s door. They charge for the blank item, the
              print, and the postage. Etsy takes its small fee. What remains is the
              profit.
            </p>
          </article>
        </div>
      </div>
    </Section>
  );
}

function HowItWorks() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section id="how" className="max-w-4xl">
      <Reveal>
        <Eyebrow>How one order actually works</Eyebrow>
        <Heading>We design. Etsy is the shopfront. Printify is the workshop.</Heading>
        <Body>
          Once the stall is set up, a sale does not need anyone to be standing by
          the door. This is the whole path, from a design on a screen to something
          in a customer’s hands.
        </Body>
      </Reveal>

      <div ref={ref} className="mt-12">
        <ol className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-8 md:grid-cols-4">
          {FLOW.map((step, i) => {
            const Icon = step.Icon;
            return (
              <li key={step.label} className="relative flex gap-4 py-3 sm:flex-col sm:gap-3 sm:py-0">
                {i < FLOW.length - 1 ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute top-14 left-6 h-[calc(100%-3.5rem)] w-px bg-line sm:hidden"
                    />
                    <ChevronRight
                      aria-hidden="true"
                      className="absolute top-4 -right-5 hidden size-4 text-gold-soft md:block"
                      strokeWidth={1.6}
                    />
                  </>
                ) : null}
                <div
                  className={cn(
                    "flow-step flex size-12 shrink-0 items-center justify-center rounded-lg bg-surface text-teal shadow-[var(--shadow-border)]",
                    inView && "is-in",
                  )}
                  style={{ transitionDelay: inView ? `${i * 140}ms` : "0ms" }}
                >
                  <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <div
                  className={cn("flow-step", inView && "is-in")}
                  style={{ transitionDelay: inView ? `${i * 140 + 50}ms` : "0ms" }}
                >
                  <p className="font-medium text-ink">{step.label}</p>
                  <p className="mt-0.5 text-sm text-muted">{step.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="mt-8 text-sm leading-relaxed text-muted">
          Digital files go out at once. Physical items are printed and posted by
          Printify. From our side, once the shop is live, much of it runs without
          anyone packing a box.
        </p>
      </div>
    </Section>
  );
}

function TheProblem() {
  return (
    <Section id="problem">
      <Reveal>
        <Eyebrow>The one problem</Eyebrow>
        <Heading>Etsy does not let us open a seller account from Bangladesh.</Heading>
        <Body>
          That is the whole of it. Not a lack of skill, and not a lack of willingness
          to do the work. Etsy currently requires the shop to be registered in a
          country it supports — and Bangladesh is not one of them.
        </Body>
        <Body>
          We can design the products. We can write the listings. We can look after
          customers and run the shop, day after day. What we cannot do, from here, is
          put the account in our own name.
        </Body>
        <p className="mt-8 border-l-2 border-gold pl-5 font-display text-xl leading-snug text-teal-deep italic md:text-2xl">
          We are not looking for someone to do the work. We are looking for a partner
          in a country Etsy already welcomes — so the shop can exist at all.
        </p>
      </Reveal>
    </Section>
  );
}

function WhyYou() {
  return (
    <Section id="why">
      <Reveal>
        <Eyebrow>Why you</Eyebrow>
        <Heading>Because you are trusted, and because you are there.</Heading>
        <Body>
          You are close to us. You live in the United Kingdom — a country where Etsy
          is happy to have sellers. That combination is rare, and it is why this
          letter is for you, and not for a stranger.
        </Body>
        <Body>
          We are not asking you to do us a favour. We are asking you to stand as a
          founding partner: with a real share, a real say, and a name on something
          we would be proud to run honestly.
        </Body>
      </Reveal>
    </Section>
  );
}

function WorkSplit() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section id="split" className="max-w-4xl">
      <Reveal>
        <Eyebrow>How the work is split</Eyebrow>
        <Heading>You would not be taking on a job.</Heading>
        <Body>
          Almost everything sits with us. Your part is occasional, and it stays in
          your own hands.
        </Body>
      </Reveal>

      <div ref={ref} className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        <article
          className={cn(
            "reveal rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-7",
            inView && "is-in",
          )}
        >
          <p className="text-xs font-medium tracking-[0.18em] text-teal uppercase">
            Our side · Bangladesh
          </p>
          <h3 className="font-display mt-3 text-2xl font-semibold text-ink">
            The running of the shop
          </h3>
          <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-ink-soft">
            {[
              "Product design",
              "Store setup and listings",
              "Marketing",
              "Customer service",
              "Coordinating orders",
              "All day-to-day running of the business",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article
          className={cn(
            "reveal rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-7",
            inView && "is-in",
          )}
          style={{ transitionDelay: inView ? "120ms" : "0ms" }}
        >
          <p className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
            Your side · United Kingdom
          </p>
          <h3 className="font-display mt-3 text-2xl font-semibold text-ink">
            The legal home of the shop
          </h3>
          <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-ink-soft">
            {[
              "Being the legal account holder",
              "Occasional identity checks with Etsy",
              "Occasional withdrawals from Etsy to your own bank",
              "Occasional UK tax reporting on the income",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl bg-cream px-4 py-3 text-sm leading-relaxed text-ink-soft">
            This is occasional, not a role. A few short actions in a month —
            sometimes none at all. We will keep clear records so that tax reporting
            is as straightforward as it can be.
          </p>
        </article>
      </div>
    </Section>
  );
}

const CHECKLIST = [
  {
    Icon: MapPin,
    title: "Your legal name and UK address",
    note: "As they appear on official documents.",
  },
  {
    Icon: IdCard,
    title: "A government ID",
    note: "A passport or driving licence, for Etsy’s own check.",
  },
  {
    Icon: Mail,
    title: "An email and a phone number",
    note: "So Etsy can verify the account with you directly.",
  },
  {
    Icon: Landmark,
    title: "Your own bank account",
    note: "For payouts. It stays fully in your control.",
  },
  {
    Icon: FileText,
    title: "Basic tax details, if needed",
    note: "Only if HMRC reporting is required for the income.",
  },
] as const;

function WhatTheyProvide() {
  const { ref, inView } = useInView<HTMLUListElement>();

  return (
    <Section id="provide">
      <Reveal>
        <Eyebrow>What you would need to provide</Eyebrow>
        <Heading>A short list. And it never comes to us.</Heading>
        <Body>
          Etsy and your bank will ask for these in your own accounts. We will never
          collect them, store them, or ask you to send them on.
        </Body>
      </Reveal>

      <ul ref={ref} className="mt-10 space-y-3">
        {CHECKLIST.map((item, i) => {
          const Icon = item.Icon;
          return (
            <li
              key={item.title}
              className={cn(
                "check-row flex gap-4 rounded-2xl bg-surface px-4 py-4 shadow-[var(--shadow-border)] sm:px-5",
                inView && "is-in",
              )}
              style={{ transitionDelay: inView ? `${i * 90}ms` : "0ms" }}
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-teal-mist text-teal">
                <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-medium text-ink">{item.title}</span>
                <span className="mt-0.5 block text-sm text-muted">{item.note}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

const SHARES = [
  { label: "You", share: "30%", flex: 3, tone: "bg-teal-deep" },
  { label: "Founding partner", share: "30%", flex: 3, tone: "bg-teal" },
  { label: "Founding partner", share: "30%", flex: 3, tone: "bg-teal/70" },
  { label: "Sadaqah", share: "10%", flex: 1, tone: "bg-gold" },
] as const;

function Principles() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section id="principles">
      <Reveal>
        <Eyebrow>How we intend to run this</Eyebrow>
        <Heading>In the spirit of honest trade.</Heading>
        <Body>
          We want to build this following Islamic business principles — in the
          spirit of the Prophet Muhammad (peace be upon him), who was known for his
          honesty and fairness as a merchant. Not as a slogan. As the way the
          numbers, and the decisions, actually work.
        </Body>
      </Reveal>

      <div ref={ref} className="mt-10">
        <div
          className="flex h-4 gap-1"
          role="img"
          aria-label="Ownership: three partners at 30 percent each, 10 percent for charity"
        >
          {SHARES.map((seg, i) => (
            <div
              key={`${seg.label}-${i}`}
              className="h-full overflow-hidden rounded-sm"
              style={{ flex: seg.flex }}
            >
              <div
                className={cn("bar-seg h-full w-full", seg.tone, inView && "is-in")}
                style={{ transitionDelay: inView ? `${i * 140}ms` : "0ms" }}
              />
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SHARES.map((seg, i) => (
            <div key={`${seg.label}-label-${i}`}>
              <p className="font-display text-2xl font-semibold text-ink tabular-nums">
                {seg.share}
              </p>
              <p className="mt-0.5 text-sm text-muted">{seg.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-5">
        {[
          {
            title: "Equal founding partners",
            text: "Three people, each holding 30% ownership and 30% of the profits — including you. No silent junior share.",
          },
          {
            title: "A tenth given, automatically",
            text: "The remaining 10% of profits is set aside for sadaqah (charity). It is a standing commitment, not an afterthought and not a gesture we make when we remember.",
          },
          {
            title: "Everyone sees the numbers",
            text: "Profit-sharing is transparent. When there is something to share, everyone sees the same figures, every time.",
          },
          {
            title: "Nothing without consent",
            text: "Honesty, fairness, and mutual agreement in every decision. No one is bounced into a choice, and no one is left in the dark.",
          },
        ].map((item) => (
          <Reveal key={item.title}>
            <div className="border-t border-line pt-5">
              <p className="font-medium text-ink">{item.title}</p>
              <p className="mt-1.5 text-base leading-relaxed text-ink-soft">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ShieldMark({ drawn }: { drawn: boolean }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-14 text-gold-soft"
      fill="none"
      aria-hidden="true"
    >
      <path
        className={cn("shield-draw", drawn && "is-in")}
        d="M24 6.5c4.2 2.4 8.4 3.6 14 3.6v14.2c0 8.4-5.4 13.2-14 16.7-8.6-3.5-14-8.3-14-16.7V10.1c5.6 0 9.8-1.2 14-3.6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        className={cn("shield-draw", drawn && "is-in")}
        d="M17.5 24.2l4.2 4.2 8.8-9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transitionDelay: drawn ? "0.45s" : "0s" }}
      />
    </svg>
  );
}

function Security() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="trust" className="relative my-6 bg-teal-deep text-cream md:my-10">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div ref={ref}>
          <div className={cn("reveal", inView && "is-in")}>
            <ShieldMark drawn={inView} />
            <p className="mt-6 text-xs font-medium tracking-[0.22em] text-gold-soft uppercase">
              Security, said plainly
            </p>
            <h2 className="font-display mt-4 text-section leading-tight font-semibold text-cream">
              Your accounts stay yours.
            </h2>
          </div>

          <ul className="mt-10 space-y-6">
            {[
              "We will never ask for your bank login, card details, one-time codes, passwords, or any sensitive credentials. Not now, and not later.",
              "You keep full, personal control of your own Etsy account and your own bank account at all times.",
              "Any verification or withdrawal is something you do yourself, in your own account, in your own time.",
              "Our only ask is your trust and occasional availability — never your sensitive information.",
            ].map((text, i) => (
              <li
                key={i}
                className={cn("reveal flex gap-4", inView && "is-in")}
                style={{ transitionDelay: inView ? `${180 + i * 100}ms` : "0ms" }}
              >
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-soft"
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-cream/90 md:text-lg">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const CALENDAR_MARKS = new Set([6, 18]);

function TimeCommitment() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section id="time">
      <Reveal>
        <Eyebrow>Your time, honestly</Eyebrow>
        <Heading>A few minutes. A few times a month.</Heading>
        <Body>
          Some months it may be nothing at all. When Etsy needs you to confirm who
          you are, or when money is ready to be withdrawn, we will let you know —
          and you will do it when you can.
        </Body>
      </Reveal>

      <div
        ref={ref}
        className="mt-10 rounded-2xl bg-surface px-5 py-6 shadow-[var(--shadow-border)] sm:px-7"
      >
        <p className="text-sm text-muted">An ordinary month</p>
        <div
          className="mt-4 grid grid-cols-7 gap-2.5"
          role="img"
          aria-label="A month of days, with two short moments marked"
        >
          {Array.from({ length: 28 }, (_, i) => {
            const mark = CALENDAR_MARKS.has(i);
            return (
              <span
                key={i}
                className={cn(
                  "cal-dot block aspect-square rounded-full bg-teal-mist",
                  inView && "is-in",
                  mark && "mark",
                )}
                style={{ transitionDelay: inView ? `${i * 18}ms` : "0ms" }}
              />
            );
          })}
        </div>
        <div className="mt-5 flex items-center gap-2 text-sm text-ink-soft">
          <span className="size-2.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
          The gold days are the sort of moments we mean — short, and rare.
        </div>
      </div>
    </Section>
  );
}

function Closing() {
  return (
    <section className="relative mx-auto flex min-h-[80dvh] w-full max-w-3xl flex-col justify-center px-6 pt-24 pb-36">
      <Reveal>
        <Eyebrow>The invitation</Eyebrow>
        <h2 className="font-display text-close leading-[1.12] font-semibold text-ink">
          Come in as a founding partner.
        </h2>
        <Body>
          Not as a helper, and not as a name on a form. As someone with an equal
          share in something we hope will be modest, halal, and built to last — a
          small business, yes, but also a thing we make together as family.
        </Body>
        <Body>
          If this sits well with you, we would be honoured to begin. If you would
          like time, or to ask anything at all, there is no hurry. This letter will
          still be here.
        </Body>
        <Ornament className="mt-12" />
        <p className="font-display mt-10 text-xl text-teal-deep italic">
          With love and respect, from us.
        </p>
      </Reveal>
    </section>
  );
}
