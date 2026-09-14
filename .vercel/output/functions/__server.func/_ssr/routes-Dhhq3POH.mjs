import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PenLine, c as Landmark, d as ChevronRight, i as ShoppingBag, l as IdCard, o as MapPin, r as Store, s as Mail, t as Truck, u as FileText } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dhhq3POH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useInView(options) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setInView(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setInView(true);
				io.disconnect();
			}
		}, {
			threshold: .18,
			rootMargin: "0px 0px -8% 0px",
			...options
		});
		io.observe(el);
		return () => io.disconnect();
	}, [options]);
	return {
		ref,
		inView
	};
}
function useScrollProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const update = () => {
			const el = document.documentElement;
			const max = el.scrollHeight - el.clientHeight;
			setProgress(max > 0 ? el.scrollTop / max : 0);
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);
	return progress;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Invitation() {
	const progress = useScrollProgress();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 bg-teal-mist/60",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full origin-left bg-teal",
					style: { transform: `scaleX(${progress})` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 right-[-12%] size-96 rounded-full bg-teal/8 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[36%] left-[-18%] size-80 rounded-full bg-gold/12 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[8%] right-[8%] size-72 rounded-full bg-teal-mist/70 blur-3xl" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TheIdea, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TheProblem, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyYou, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSplit, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatTheyProvide, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Principles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Security, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeCommitment, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Closing, {})
		]
	});
}
function Ornament({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center justify-center gap-3", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-gold-soft" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rotate-45 bg-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-gold-soft" })
		]
	});
}
function Reveal({ children, className, delay = 0 }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", inView && "is-in", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function Section({ children, className, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative mx-auto w-full max-w-3xl px-6 py-20 md:py-28", className),
		children
	});
}
function Eyebrow({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("mb-4 font-sans text-xs font-medium tracking-[0.22em] text-gold uppercase", className),
		children
	});
}
function Heading({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-section leading-tight font-semibold text-ink",
		children
	});
}
function Body({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("mt-5 text-base leading-relaxed text-ink-soft md:text-lg", className),
		children
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative mx-auto flex min-h-[100dvh] w-full max-w-3xl flex-col justify-center px-6 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hero-enter font-sans text-xs font-medium tracking-[0.22em] text-gold uppercase",
				children: "An invitation, from us to you"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "hero-enter hero-enter-delay-1 mt-6 font-display text-hero leading-[1.08] font-semibold text-ink",
				children: "Let’s begin something together."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hero-enter hero-enter-delay-2 mt-7 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl",
				children: "A small, honest family venture — not a pitch, and not a favour. An idea we would like to build with the people we already trust."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-enter hero-enter-delay-3 mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hero-enter hero-enter-delay-4 mt-16 text-sm tracking-wide text-muted",
				children: "Scroll when you are ready"
			})
		]
	});
}
var FLOW = [
	{
		label: "Design",
		detail: "We make the product",
		Icon: PenLine
	},
	{
		label: "List on Etsy",
		detail: "The shop is listed",
		Icon: Store
	},
	{
		label: "Someone buys",
		detail: "A customer pays",
		Icon: ShoppingBag
	},
	{
		label: "It is delivered",
		detail: "At once, or posted",
		Icon: Truck
	}
];
function TheIdea() {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "idea",
		className: "max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The idea, in plain language" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, { children: "We would like to sell useful things online." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "Some of them are digital: printable planners, Notion templates, Canva templates, and simple spreadsheets. The buyer downloads a file. Nothing needs posting." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "Others are physical — a mug, a t-shirt, a tote — made only when someone orders it. A company called Printify prints the item and posts it to the customer. We never hold stock, and we never pack a box." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "All of this lives on Etsy: a well-known marketplace where millions of people already shop for handmade, digital, and creative goods. We design. Etsy handles the till. Printify handles the printing and the post." })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "mt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-8 md:grid-cols-4",
				children: FLOW.map((step, i) => {
					const Icon = step.Icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative flex gap-4 py-3 sm:flex-col sm:gap-3 sm:py-0",
						children: [
							i < FLOW.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "absolute top-14 left-6 h-[calc(100%-3.5rem)] w-px bg-line sm:hidden"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								"aria-hidden": "true",
								className: "absolute top-4 -right-5 hidden size-4 text-gold-soft md:block",
								strokeWidth: 1.6
							})] }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("flow-step flex size-12 shrink-0 items-center justify-center rounded-lg bg-surface text-teal shadow-[var(--shadow-border)]", inView && "is-in"),
								style: { transitionDelay: inView ? `${i * 140}ms` : "0ms" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									strokeWidth: 1.6,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("flow-step", inView && "is-in"),
								style: { transitionDelay: inView ? `${i * 140 + 50}ms` : "0ms" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-ink",
									children: step.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-sm text-muted",
									children: step.detail
								})]
							})
						]
					}, step.label);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm leading-relaxed text-muted",
				children: "Digital files go to the buyer at once. Physical items are printed and shipped by Printify. From our side, the shop largely runs itself once it is set up."
			})]
		})]
	});
}
function TheProblem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "problem",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The one problem" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, { children: "Etsy does not let us open a seller account from Bangladesh." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "That is the whole of it. Not a lack of skill, and not a lack of willingness to do the work. Etsy currently requires the shop to be registered in a country it supports — and Bangladesh is not one of them." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "We can design the products. We can write the listings. We can look after customers and run the shop, day after day. What we cannot do, from here, is put the account in our own name." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 border-l-2 border-gold pl-5 font-display text-xl leading-snug text-teal-deep italic md:text-2xl",
				children: "We are not looking for someone to do the work. We are looking for a partner in a country Etsy already welcomes — so the shop can exist at all."
			})
		] })
	});
}
function WhyYou() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "why",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why you" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, { children: "Because you are trusted, and because you are there." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "You are close to us. You live in the United Kingdom — a country where Etsy is happy to have sellers. That combination is rare, and it is why this letter is for you, and not for a stranger." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "We are not asking you to do us a favour. We are asking you to stand as a founding partner: with a real share, a real say, and a name on something we would be proud to run honestly." })
		] })
	});
}
function WorkSplit() {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "split",
		className: "max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How the work is split" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, { children: "You would not be taking on a job." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "Almost everything sits with us. Your part is occasional, and it stays in your own hands." })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: cn("reveal rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-7", inView && "is-in"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-teal uppercase",
						children: "Our side · Bangladesh"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-3 text-2xl font-semibold text-ink",
						children: "The running of the shop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5 text-base leading-relaxed text-ink-soft",
						children: [
							"Product design",
							"Store setup and listings",
							"Marketing",
							"Customer service",
							"Coordinating orders",
							"All day-to-day running of the business"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 size-1.5 shrink-0 rounded-full bg-teal",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: cn("reveal rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-7", inView && "is-in"),
				style: { transitionDelay: inView ? "120ms" : "0ms" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-gold uppercase",
						children: "Your side · United Kingdom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-3 text-2xl font-semibold text-ink",
						children: "The legal home of the shop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5 text-base leading-relaxed text-ink-soft",
						children: [
							"Being the legal account holder",
							"Occasional identity checks with Etsy",
							"Occasional withdrawals from Etsy to your own bank",
							"Occasional UK tax reporting on the income"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 size-1.5 shrink-0 rounded-full bg-gold",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 rounded-xl bg-cream px-4 py-3 text-sm leading-relaxed text-ink-soft",
						children: "This is occasional, not a role. A few short actions in a month — sometimes none at all. We will keep clear records so that tax reporting is as straightforward as it can be."
					})
				]
			})]
		})]
	});
}
var CHECKLIST = [
	{
		Icon: MapPin,
		title: "Your legal name and UK address",
		note: "As they appear on official documents."
	},
	{
		Icon: IdCard,
		title: "A government ID",
		note: "A passport or driving licence, for Etsy’s own check."
	},
	{
		Icon: Mail,
		title: "An email and a phone number",
		note: "So Etsy can verify the account with you directly."
	},
	{
		Icon: Landmark,
		title: "Your own bank account",
		note: "For payouts. It stays fully in your control."
	},
	{
		Icon: FileText,
		title: "Basic tax details, if needed",
		note: "Only if HMRC reporting is required for the income."
	}
];
function WhatTheyProvide() {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "provide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What you would need to provide" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, { children: "A short list. And it never comes to us." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "Etsy and your bank will ask for these in your own accounts. We will never collect them, store them, or ask you to send them on." })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			ref,
			className: "mt-10 space-y-3",
			children: CHECKLIST.map((item, i) => {
				const Icon = item.Icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("check-row flex gap-4 rounded-2xl bg-surface px-4 py-4 shadow-[var(--shadow-border)] sm:px-5", inView && "is-in"),
					style: { transitionDelay: inView ? `${i * 90}ms` : "0ms" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-11 shrink-0 items-center justify-center rounded-lg bg-teal-mist text-teal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							strokeWidth: 1.6,
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-ink",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 block text-sm text-muted",
						children: item.note
					})] })]
				}, item.title);
			})
		})]
	});
}
var SHARES = [
	{
		label: "You",
		share: "30%",
		flex: 3,
		tone: "bg-teal-deep"
	},
	{
		label: "Founding partner",
		share: "30%",
		flex: 3,
		tone: "bg-teal"
	},
	{
		label: "Founding partner",
		share: "30%",
		flex: 3,
		tone: "bg-teal/70"
	},
	{
		label: "Sadaqah",
		share: "10%",
		flex: 1,
		tone: "bg-gold"
	}
];
function Principles() {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "principles",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How we intend to run this" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, { children: "In the spirit of honest trade." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "We want to build this following Islamic business principles — in the spirit of the Prophet Muhammad (peace be upon him), who was known for his honesty and fairness as a merchant. Not as a slogan. As the way the numbers, and the decisions, actually work." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-4 gap-1",
					role: "img",
					"aria-label": "Ownership: three partners at 30 percent each, 10 percent for charity",
					children: SHARES.map((seg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full overflow-hidden rounded-sm",
						style: { flex: seg.flex },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("bar-seg h-full w-full", seg.tone, inView && "is-in"),
							style: { transitionDelay: inView ? `${i * 140}ms` : "0ms" }
						})
					}, `${seg.label}-${i}`))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4",
					children: SHARES.map((seg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold text-ink tabular-nums",
						children: seg.share
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm text-muted",
						children: seg.label
					})] }, `${seg.label}-label-${i}`))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-5",
				children: [
					{
						title: "Equal founding partners",
						text: "Three people, each holding 30% ownership and 30% of the profits — including you. No silent junior share."
					},
					{
						title: "A tenth given, automatically",
						text: "The remaining 10% of profits is set aside for sadaqah (charity). It is a standing commitment, not an afterthought and not a gesture we make when we remember."
					},
					{
						title: "Everyone sees the numbers",
						text: "Profit-sharing is transparent. When there is something to share, everyone sees the same figures, every time."
					},
					{
						title: "Nothing without consent",
						text: "Honesty, fairness, and mutual agreement in every decision. No one is bounced into a choice, and no one is left in the dark."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-ink",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-base leading-relaxed text-ink-soft",
						children: item.text
					})]
				}) }, item.title))
			})
		]
	});
}
function ShieldMark({ drawn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: "size-14 text-gold-soft",
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			className: cn("shield-draw", drawn && "is-in"),
			d: "M24 6.5c4.2 2.4 8.4 3.6 14 3.6v14.2c0 8.4-5.4 13.2-14 16.7-8.6-3.5-14-8.3-14-16.7V10.1c5.6 0 9.8-1.2 14-3.6z",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			className: cn("shield-draw", drawn && "is-in"),
			d: "M17.5 24.2l4.2 4.2 8.8-9",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			style: { transitionDelay: drawn ? "0.45s" : "0s" }
		})]
	});
}
function Security() {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "trust",
		className: "relative my-6 bg-teal-deep text-cream md:my-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl px-6 py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("reveal", inView && "is-in"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldMark, { drawn: inView }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs font-medium tracking-[0.22em] text-gold-soft uppercase",
							children: "Security, said plainly"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-4 text-section leading-tight font-semibold text-cream",
							children: "Your accounts stay yours."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 space-y-6",
					children: [
						"We will never ask for your bank login, card details, one-time codes, passwords, or any sensitive credentials. Not now, and not later.",
						"You keep full, personal control of your own Etsy account and your own bank account at all times.",
						"Any verification or withdrawal is something you do yourself, in your own account, in your own time.",
						"Our only ask is your trust and occasional availability — never your sensitive information."
					].map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("reveal flex gap-4", inView && "is-in"),
						style: { transitionDelay: inView ? `${180 + i * 100}ms` : "0ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 size-1.5 shrink-0 rounded-full bg-gold-soft",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base leading-relaxed text-cream/90 md:text-lg",
							children: text
						})]
					}, i))
				})]
			})
		})
	});
}
var CALENDAR_MARKS = /* @__PURE__ */ new Set([6, 18]);
function TimeCommitment() {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "time",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Your time, honestly" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, { children: "A few minutes. A few times a month." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "Some months it may be nothing at all. When Etsy needs you to confirm who you are, or when money is ready to be withdrawn, we will let you know — and you will do it when you can." })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "mt-10 rounded-2xl bg-surface px-5 py-6 shadow-[var(--shadow-border)] sm:px-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "An ordinary month"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-7 gap-2.5",
					role: "img",
					"aria-label": "A month of days, with two short moments marked",
					children: Array.from({ length: 28 }, (_, i) => {
						const mark = CALENDAR_MARKS.has(i);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("cal-dot block aspect-square rounded-full bg-teal-mist", inView && "is-in", mark && "mark"),
							style: { transitionDelay: inView ? `${i * 18}ms` : "0ms" }
						}, i);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-center gap-2 text-sm text-ink-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-2.5 shrink-0 rounded-full bg-gold",
						"aria-hidden": "true"
					}), "The gold days are the sort of moments we mean — short, and rare."]
				})
			]
		})]
	});
}
function Closing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative mx-auto flex min-h-[80dvh] w-full max-w-3xl flex-col justify-center px-6 pt-24 pb-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The invitation" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-close leading-[1.12] font-semibold text-ink",
				children: "Come in as a founding partner."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "Not as a helper, and not as a name on a form. As someone with an equal share in something we hope will be modest, halal, and built to last — a small business, yes, but also a thing we make together as family." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { children: "If this sits well with you, we would be honoured to begin. If you would like time, or to ask anything at all, there is no hurry. This letter will still be here." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-12" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display mt-10 text-xl text-teal-deep italic",
				children: "With love and respect, from us."
			})
		] })
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Invitation, {});
}
//#endregion
export { Home as component };
