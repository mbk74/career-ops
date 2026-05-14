# Deep Research: JetBrains — Customer Success Engineer (Kotlin Multiplatform)

**Linked report:** `reports/001-jetbrains-cse-kmp-2026-05-12.md`
**Compiled:** 2026-05-12
**Sources:** Levels.fyi, Glassdoor, JetBrains Annual Highlights 2026, JetBrains AI/Kotlin blogs, Blind, Greenhouse JD

---

## 1. Business & strategy snapshot

- **Revenue:** $252.1M (2026). EMEA fastest-growing region (+39.8% YoY), and EMEA is the largest revenue contributor at $464.1M.
- **Pricing model:** licensed IDEs + Kotlin ecosystem. Moving to a **single unified distribution** for IntelliJ IDEA and PyCharm (consolidating community/ultimate lines).
- **AI strategy:** big bet. AI offerings grew +101.3% QoQ in Q2 2025. **Junie** (AI coding agent inside IDEs) is the flagship — launched 2025. Six-figure paid AI users by Q4 2025.
- **No equity** — JetBrains is privately held by employees/founders; comp is base + bonus only, no stock options. This matters for the comp negotiation.

**Implication for the CSE-KMP role:** JetBrains is investing where this role lives (AI + KMP + EMEA). Tailwind, not headwind.

---

## 2. Kotlin Multiplatform — production state (2026)

This is the entire premise of the role, so worth being fluent on:

- **Compose Multiplatform for iOS: stable as of May 2025.** Shared UI code Android↔iOS with production support. KMP itself stable for shared business logic since 2023.
- **2026 roadmap focus:** idiomatic Swift↔Kotlin interop is the stated stable-release goal. This is the precise pain point a CSE will be helping customers navigate.
- **Memory model:** Native 2.0 GC complete — old "frozen objects" / "worker" limitations gone. Seamless data passing Kotlin↔Swift.
- **Enterprise reference customers:**
  - Google Workspace (Google Docs iOS app — KMP in production)
  - Netflix, McDonald's, Cash App (years of KMP in production)
  - Duolingo (40M+ weekly users, ships KMP features weekly)
  - AWS Kotlin SDK (300+ services, 8 platforms)
- **JetBrains content piece:** "Helping Decision-Makers Say Yes to KMP" (April 2026 Kotlin blog) — this is essentially the CSE role's brochure. Read before the interview.

**Talking point for interview:** "Compose for iOS being stable is the inflection point. The interesting CSE work now isn't 'should we adopt' — it's 'how do you sequence migration without freezing iOS feature delivery.' That's the SAP Concur ReSwift→modular pattern I've been running for years on Swift; the same playbook on the Kotlin side."

---

## 3. Compensation — your negotiation anchor

### JetBrains Germany — Software Engineer comp bands (Levels.fyi):

| Level | Range | Median |
|-------|-------|--------|
| L2 | €64.4K | — |
| L5 (Senior) | up to €122K | — |
| **Germany overall (all levels)** | €64.4K–€122K | **€112K** |
| **Berlin Metro (all levels)** | €85.7K–€114K | **€106K** |

### What CSE likely maps to:
- CSE at JetBrains is paid as a Senior Engineer (no explicit CSE band public). Expect base in the **€95-115K** range for someone with your seniority. Bonus exists but modest. **No equity.**
- "Strong base salary" language in the JD aligns with the JetBrains pattern of leading with base, not packages.

### Negotiation script (based on this data + your `_profile.md`):

> "Levels.fyi shows L5 Software Engineer in Germany topping out at ~€122K with a median around €112K. For a CSE role with the customer-facing scope and 25% travel, I'd anchor to €115-130K base. Given JetBrains' no-equity model, the entire conversation is base — happy to negotiate signing bonus or relocation if I'm at the edge of the band."

### Red flag to verify in HR call:
- Is there a 13. Monatsgehalt or quarterly bonus structure? Germany-specific.
- Probezeit length (standard 6 months).
- Remote-DE specifics: company-of-record, tax setup, equipment.

---

## 4. Engineering culture — Glassdoor + Blind signals (4.3/5, 77% recommend)

### Strong positives:
- Exceptional engineering bench — "hyper-independent problem-solving" if you thrive on it.
- Real work-life balance, flexible hours.
- "Inspiring atmosphere", strong professionals.

### Friction points to be aware of:
1. **"Managers are also developers, so they don't spend enough time with their reports."** Implication: low people-management overhead, high autonomy, but also less coaching. For a CSE role this is mixed — you'll be reasonably independent but expect to drive your own visibility.
2. **"Career growth depends on personal connections."** Implication: internal networking matters. The Sebastian/Márton peer messaging strategy is doubly relevant.
3. **"Only 30 days of Work Remote Abroad per year."** Implication: Remote-DE is fine, but if you ever wanted to spend a month working from elsewhere it's capped. Probably non-issue for Rainau-based.
4. **Russian-speaking dominance in informal communication.** Cited by non-Russian employees as a barrier in some offices. For Maxym: Ukrainian/Russian native means this is a *neutral-to-positive* for you, not a friction point — culturally readable.

### Implication for fit:
- High autonomy + strong tech bench + KMP-adjacent product investment is a strong match for your "20+ years senior IC who likes architecture work" profile.
- Career growth via connections + non-pure-CSE title means: lean into the Sebastian/Márton outreach AND get sponsored advocacy from internal champions early.

---

## 5. Interview process — what to expect

- **Total cycle:** ~36 days average across all JetBrains roles (Glassdoor, 70 interview samples).
- **CV review:** up to 2 weeks. Don't follow up before 14 days unless silence.
- **Stage 1 — HR Call:** experience, comp expectations. **Be ready with the €115-130K anchor.**
- **Stage 2 — Technical Interview** (~60-75 min):
  - 20 min: deep-dive on a project of your choice
  - 15-20 min: follow-up questions on that project
  - 20 min: questions about a programming language (likely Kotlin for this role — they will probe how recent your Kotlin is)
  - Remaining: databases, message queues, infra
- **CSE-specific (inferred from JD):** expect a role-play / scenario question. "A customer team has a 3-year-old iOS app, wants to add Android via KMP, what do you advise on sequencing?" — exactly the question your SAP Concur arc answers.

### Your interview prep priorities:
1. **Reread `reports/001-jetbrains-cse-kmp-2026-05-12.md` Section F (STAR+R stories).** Story #1 (ReSwift → modern state mgmt at SAP Concur) is your strongest opener for the project deep-dive.
2. **Be honest about Kotlin depth.** You have Spring Boot side project and KMP literacy, not 5 years shipping KMP. The CSE role doesn't require KMP-shipping experience — it requires (a) mobile architecture chops, (b) ability to learn and convey KMP fast, (c) stakeholder fluency. Don't fake the first; demonstrate the latter two.
3. **Build a tiny KMP demo before the technical interview.** Even 1 day on a shared module + iOS framework + Android consumer — shows initiative AND fixes the "limited hands-on KMP" gap surfaced in the report.
4. **Prepare the customer-scenario answer.** Use SAP Concur as the canonical "long-lived iOS codebase under modernization" story — same structural problem KMP customers face.

---

## 6. Competitors / differentiation

- **For developer-tooling business:** Microsoft (VS Code + GitHub Copilot), Google (Android Studio is built on IntelliJ — co-opetition), Cursor/Windsurf/Zed (new wave AI IDEs).
- **JetBrains' moat:** depth across Java/Kotlin/Python/etc. ecosystems + the Kotlin language itself (which they own). Junie + Kotlin AI work is their answer to the Cursor wave.
- **Strategic question to ask in interview:** "Where do you see the line between Junie and Claude Code/Cursor for the next 18 months — IDE-embedded vs. agent-driven workflows?" Shows you track the space.

---

## 7. Your candidate angle (use literally in cover/intro)

Three sentences that compress your fit:

1. **Architecture vocabulary that transfers:** "I've spent the last decade running ReSwift, Apollo GraphQL, Swinject, and modular feature design on SAP Concur — the exact patterns customers translate into MVI, shared modules, and KMP integration when they move to a multiplatform codebase."
2. **Stakeholder fluency at enterprise scale:** "Enterprise iOS at SAP meant explaining architecture trade-offs to product, security, and senior engineering stakeholders — same conversation a CSE has with customer engineering orgs, just with more companies."
3. **AI-assisted developer practice as daily habit:** "I'm a daily user of Claude Code, OpenAI Codex, and GitHub Copilot — Junie's design space is the workflow I already live in."

---

## 8. Pre-application checklist

- [ ] Apply via Greenhouse: https://job-boards.eu.greenhouse.io/jetbrains/jobs/4847592101
- [ ] Send LinkedIn connect to Sebastian Aigner (template in this thread)
- [ ] Build a 1-day KMP demo (shared business-logic module + iOS framework + Android consumer)
- [ ] Read "Helping Decision-Makers Say Yes to KMP" (April 2026 Kotlin blog) end-to-end
- [ ] Update LinkedIn headline to surface "interested in cross-platform / KMP" line
- [ ] Confirm comp anchor (€115-130K base, no equity at JetBrains) before HR call

---

## Sources

- [Levels.fyi — JetBrains Germany SWE compensation](https://www.levels.fyi/companies/jetbrains/salaries/software-engineer/locations/germany)
- [Levels.fyi — JetBrains Berlin SWE compensation](https://www.levels.fyi/companies/jetbrains/salaries/software-engineer/locations/berlin-metropolitan-region)
- [Glassdoor — JetBrains overview (4.3/5, 244 reviews)](https://www.glassdoor.com/Overview/Working-at-JetBrains-EI_IE222299.11,20.htm)
- [Glassdoor — JetBrains interview experiences](https://www.glassdoor.com/Interview/JetBrains-Interview-Questions-E222299.htm)
- [Blind — JetBrains discussions](https://www.teamblind.com/company/JetBrains)
- [JetBrains Annual Highlights 2026](https://www.jetbrains.com/lp/annualreport-2026/)
- [JetBrains AI direction 2026](https://blog.jetbrains.com/ai/2026/04/our-2026-direction-ai-and-classic-workflows-in-jetbrains-ides/)
- [Kotlin blog — Helping Decision-Makers Say Yes to KMP (Apr 2026)](https://blog.jetbrains.com/kotlin/2026/04/helping-decision-makers-say-yes-to-kmp/)
- [Kotlin Multiplatform Roadmap (Aug 2025 update)](https://blog.jetbrains.com/kotlin/2025/08/kmp-roadmap-aug-2025/)
- [JetBrains CSE KMP — Greenhouse JD](https://job-boards.greenhouse.io/jetbrains/jobs/4847592101)
