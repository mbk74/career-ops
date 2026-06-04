# Interview Intel: Tandem — Senior iOS Engineer

**Report:** [041](../reports/041-tandem-senior-ios-engineer-2026-05-21.md)
**Applied:** 2026-05-21 via Personio
**Researched:** 2026-05-21
**Sources:** Glassdoor (blocked via direct fetch, partial via SERP), Tandem corporate blog (no engineering blog found), 1 adjacent Berlin-scaleup process write-up (N26 iOS), 1 adjacent Berlin scaleup (GetYourGuide). **Tandem-specific iOS interview data is thin** — process inferred from JD and Berlin-scaleup norms.

---

## Process Overview

- **Rounds:** unknown — **not enough Tandem-specific data**. Berlin-scaleup norm at this size (~150-300 employees, established product) is **4-5 rounds over 3-5 weeks**.
- **Format (best-effort, NOT confirmed):** recruiter screen → technical screen (likely take-home or live coding) → code/architecture review with iOS team → team fit / hiring manager → optional values/leadership round
- **Difficulty:** unknown — not enough data
- **Positive experience rate:** unknown — not enough data
- **Known quirks:** none confirmed
- **Sources:** Glassdoor Tandem page returned mixed entities (multiple unrelated "Tandem" companies — Tandem Diabetes, Tandem HR, etc.). The Berlin language-exchange Tandem (tandem.net) has minimal public interview data. Adjacent reference: N26 iOS process (Berlin fintech) and GetYourGuide Senior SWE process (Berlin scaleup) — both 5-stage, ~6-week processes with take-home + technical deep-dive + team fit.

**Why the data is thin:** Tandem the language-exchange app is mid-sized (~150-300 employees vs. N26's 1500+), has not built a public engineering brand (no engineering blog, minimal Glassdoor signal), and hires iOS at low volume. Most signal will come from the actual rounds, not from prep research.

---

## Round-by-Round Breakdown

### Round 1: Recruiter Screen (inferred, ~30-45 min)
- **Likely conducted by:** People / Talent Acquisition
- **What they evaluate:** career trajectory, motivation, location/availability fit, comp expectations, English fluency
- **Reported questions:** none publicly attributed to Tandem specifically
- **How to prepare:**
  - 60-second self-pitch leading with archetype (Senior iOS, 20+ yrs, SAP Concur enterprise scale)
  - Location framing rehearsed: "Based in BW, open to hybrid Berlin cadence or planned relocation"
  - Comp anchor: €90K minimum, push toward €100-110K for senior Berlin band
  - "Why Tandem?" — product (you're a German learner, this is relevant), scale (30M users), team (English-friendly + German classes)

### Round 2: Technical Screen / Take-Home (inferred, 4-8 hours of work)
- **Likely format:** small iOS app or feature challenge — could be 24-72h take-home OR 90-min live coding. Tandem's iOS focus suggests a take-home is more likely than a generic algorithm screen.
- **Likely topics (inferred from JD):**
  - Swift + UIKit or SwiftUI feature build
  - REST API integration
  - Clean Architecture / modularization
  - Unit tests + UI tests
  - Maybe a reactive flow (Combine or RxSwift)
- **Reported questions:** none Tandem-specific
- **Adjacent reference:** N26 iOS take-home tests architectural decisions, API handling, error states, Swift best practices (source: medium.com/@ios-interview, OphyAI N26 guide)
- **How to prepare:**
  - **Build a small sandbox iOS app this week** to refresh Combine + SwiftUI mechanics — even a one-screen chat client over WebSocket would double as Tandem-domain-relevant practice
  - Have a Clean Architecture template you can scaffold in 30 minutes
  - Write tests as you go — Tandem JD explicitly asks for "iOS accessibility optimization" and "modularization", both shipped via testing discipline

### Round 3: Take-Home Review / Architecture Deep-Dive (inferred, ~60-90 min)
- **Likely conducted by:** 1-2 senior iOS engineers (likely Martin Deville or Kiarash Vosough whom you'd potentially LinkedIn-messaged — be aware they may see your peer note before this round)
- **What they evaluate:** how you defend architectural decisions, trade-off reasoning, code-quality discipline, ability to discuss alternatives
- **Reported questions:** none Tandem-specific
- **How to prepare:**
  - Pre-prepare a 5-minute walkthrough of your take-home — start with the constraint set, then architecture, then trade-offs
  - Be ready to defend your choices but also acknowledge alternatives (e.g. "I went MVVM here; could have gone Redux but the surface area didn't justify it")
  - Practice the "I'd do this differently if I had more time" honesty — interviewers reward self-critique

### Round 4: Team Fit / Hiring Manager (inferred, ~45-60 min)
- **Likely conducted by:** Engineering Manager or Tech Lead, possibly hiring manager
- **What they evaluate:** how you lead technical decisions, cross-functional collaboration, mentoring, handling of ambiguity, Berlin-hybrid cadence fit
- **How to prepare:**
  - 3-5 prepared STAR+R stories (see Story Bank Mapping below — currently a gap)
  - "How do you approach code review?" answer — teach-through-review, not policing
  - Concrete answer on hybrid cadence ("I'd come to Berlin Tue-Thu, or relocate within X months if the role lands")

### Round 5 (if exists): Values / Leadership (inferred)
- Some Berlin scaleups add a values / leadership / cross-functional round. Tandem may or may not.
- **Prepare:** stories about conflict, failure, advocating for an unpopular decision

---

## Likely Questions

### Technical — `[inferred from JD]`

| # | Question | Why they'd ask | Strong answer hook |
|---|---|---|---|
| 1 | Walk us through maturing or modernizing an existing iOS codebase. | JD: "Mature and modernize the existing iOS codebase" | SAP Concur legacy modernization arc — ReSwift state management, Swinject DI, modular feature boundaries, Apollo GraphQL migration. Concrete refactor example with metric or stability win. |
| 2 | How do you compose reactive programming at production scale? | JD: "Reactive programming expertise with scalable solutions" | Combine + RxSwift + ReSwift composition on SAP Concur. Concrete example: race condition you killed via reactive flow. |
| 3 | Tell us about a production performance or reliability issue you solved on iOS. | JD: "performance/reliability focus" | Pick a specific SAP Concur stability or perf bullet — be ready with symptom → diagnosis → fix arc and (if possible) a number. |
| 4 | How do you approach iOS accessibility? | JD preferred qual: "iOS accessibility optimization" | **Strong slot.** VoiceOver labels, Dynamic Type, semantic structure, contrast — be specific. Mention which SAP Concur flows you improved. |
| 5 | How do you handle multithreading / concurrency on iOS? | JD: "leverage iOS platform capabilities" + Tandem realtime context | async/await migration from completion handlers, Combine reactive flows for race-safe state, actor isolation if you've used Swift 6 concurrency. |
| 6 | What's your KMP experience? | JD preferred qual: Kotlin Multiplatform | **Honest framing.** "Kotlin + Spring Boot backend project in active development; haven't shipped KMP shared modules but the Kotlin foothold + iOS architecture intuition make the ramp short." |
| 7 | How would you approach realtime chat or media services on iOS? | JD preferred qual: realtime chat/media | **Honest ramp framing.** Closest parallel = async/await + Combine reactive work on SAP Concur. Acknowledge a few-week dive into WebRTC/socket stack would be needed. |
| 8 | How do you ensure code quality on a small team? | JD: "lead technical decisions, drive engineering excellence" | CI gates (SwiftLint, SonarQube, CheckmarxOne, Black Duck Detect), Slather coverage, code review as teaching not policing, pair programming for cross-pollination. |

### Behavioral — `[inferred]`

| # | Question | Map to story bank |
|---|---|---|
| 1 | Tell me about yourself. | **Gap — no story bank entry yet.** See Story Bank Mapping below. |
| 2 | Tell me about a project you're most proud of. | Gap — should map to SAP Concur Mobile or to a specific modernization win |
| 3 | Describe a technical disagreement you had. How did you resolve it? | Gap — likely candidates: code-review-driven architectural decision at SAP Concur |
| 4 | Tell me about a time you mentored someone. | Gap — code-review and technical discussion leadership at SAP Concur |
| 5 | What's a mistake you made and what you learned? | Gap — useful to have one |
| 6 | How do you decide what NOT to build? | Gap — adjacent to legacy modernization decisions |

### Role-Specific

| # | Question | Likely framing |
|---|---|---|
| 1 | Why Tandem? | Product (language learning, you're a German learner — authentic angle), scale (30M users), team (English + German classes), Berlin tech scene. **Avoid** generic platitudes about "mission". |
| 2 | Why are you looking to leave SAP Concur / current role? | Frame forward: looking for senior IC with tech-leadership scope at a product company with consumer scale (Tandem ✓). **Do not** badmouth SAP or current employer — Berlin tech is a small world. |
| 3 | How do you feel about Berlin-Mitte hybrid from BW? | Direct, prepared answer: "Open to either regular Berlin presence (Tue-Thu cadence) or planned relocation in 3-6 months if the role and team land well. Let's talk about what works for your team." |
| 4 | What's your salary expectation? | Anchor at €90-110K base for senior iOS Berlin band. Mention German market reference points if pressed. Do not undershoot. |

### Background Red Flags

| # | Likely question | Why it comes up | Recommended framing |
|---|---|---|---|
| 1 | "20+ years experience but no Lead/Staff/Manager title?" | Your tenure is unusually long for an IC profile. | Honest: deliberate IC track; enjoy depth-focused engineering; have led informally via code review + technical decisions, but not titled. Frame it as "Senior IC with technical-leadership behaviors" — exactly the JD's ask. |
| 2 | "You used ReSwift, not MVVM. Are you comfortable with MVVM?" | JD asks UIKit/SwiftUI but doesn't pin MVVM specifically. Some interviewers will probe. | "Pattern fluency over framework dogma. ReSwift solves state mgmt; MVVM solves view-state binding. Different layers; I'm comfortable across both." |
| 3 | "Why no open-source contributions?" | Tandem may screen for community engagement. | Honest: not your historical focus; GitHub presence at github.com/mbk74; framing forward — "open to contributing to Tandem-adjacent projects in onboarding." |
| 4 | "Realm vs Core Data — why?" | If your take-home uses Realm. | At SAP Concur it was the house pattern; have used Core Data in earlier work; Realm's threading model is the bigger learning curve, not Core Data adoption. |
| 5 | "You haven't worked at consumer mobile at this scale recently." | SAP Concur is B2B enterprise. | True — SAP Concur is B2B, but Run Sausage Run was consumer at millions of downloads. Frame as: "enterprise rigor + consumer instinct, with the discipline that scales 30M+ user products." |
| 6 | "Your German level?" | EN-only environment but the role is in DE. Inevitable. | "B1/B2, actively progressing. I noticed Tandem offers German classes — that's exactly the supportive setup I need. English is professional level; happy to operate in English-first day one and ramp German alongside." |

---

## Story Bank Mapping

| # | Likely question/topic | Best story from story-bank.md | Fit | Gap? |
|---|---|---|---|---|
| 1 | Tell me about yourself | **none — story bank is empty** | none | YES |
| 2 | Most impactful project | none | none | YES |
| 3 | Technical disagreement / conflict | none | none | YES |
| 4 | Mentoring story | none | none | YES |
| 5 | Mistake / failure | none | none | YES |
| 6 | Cross-functional collaboration | none | none | YES |

**Story bank is empty.** Critical gap — before the Tandem screening call, you should have 5-6 prepared STAR+R stories. The good news: report #041 Block F sketched concrete story arcs from your CV. Suggested raw material below — these need to be written up as proper STAR+R stories.

### Suggested stories to draft (drawn from cv.md + report #041)

1. **"SAP Concur legacy modernization"** (covers: modernization arc, architecture, technical decisions, code review)
   - S: large legacy iOS codebase with technical debt
   - T: modernize feature areas without breaking enterprise customers
   - A: modular boundaries, ReSwift state, Swinject DI, gradual rollout
   - R: ___ (you fill in concrete result)
   - Reflection: pattern fluency over framework worship; the right tool for the scope

2. **"Accessibility shipping at SAP Concur"** (covers: accessibility — Tandem's preferred qual)
   - S: enterprise app, users with diverse accessibility needs (Dynamic Type, VoiceOver)
   - T: ship accessibility improvements without regression
   - A: VoiceOver labels, Dynamic Type support, semantic structure, contrast checks
   - R: ___ (specific flow you improved, ideally with a metric)
   - Reflection: accessibility is engineering discipline, not afterthought

3. **"CI/CD ownership at scale"** (covers: technical leadership, mature processes)
   - S: SAP Concur's release cadence + quality gates
   - T: build / own Fastlane + Azure DevOps + SAP Piper pipeline
   - A: specific gates (SwiftLint, SonarQube, CheckmarxOne, Black Duck), Slather coverage thresholds
   - R: ___ (faster releases? fewer hotfixes? cite something)
   - Reflection: quality gates have to teach, not just block

4. **"Reactive programming bug-fix arc"** (covers: multithreading, reactive, performance)
   - S: race condition or deadlock in SAP Concur
   - T: diagnose and fix without rewriting
   - A: traced via Instruments, applied right Combine/Rx pattern
   - R: ___
   - Reflection: reactive is precision tool, not religion

5. **"Code review as teaching"** (covers: technical leadership, mentoring)
   - S: junior engineer + tricky PR
   - T: get the right code shipped while growing the engineer
   - A: Socratic comments, suggest alternatives, walk through trade-offs in person
   - R: ___
   - Reflection: review velocity vs. teaching depth trade-off

6. **"Hardware-attached systems → mobile transfer"** (covers: career arc, unusual background, breadth)
   - S: early-career PLC / CAN bus / industrial
   - T: now applying real-time-systems intuition to mobile architecture
   - A: how that intuition shows up in mobile work (threading, error budgets)
   - R: ongoing pattern — most useful when iOS work touches peripherals or perf-critical paths
   - Reflection: breadth compounds late-career

**Action:** ask the user if they want to co-author 2-3 of these stories now — most useful are #1 (SAP Concur modernization), #2 (Accessibility), and #4 (Reactive bug-fix arc). With those three you can answer most behavioral questions Tandem will throw.

---

## Technical Prep Checklist

Max 10 items, prioritized by JD relevance:

- [ ] **Build a small Combine + SwiftUI sandbox app** — why: most likely take-home shape; refresh muscle memory on the reactive flow Tandem asks for
- [ ] **Refresh Objective-C interop syntax + bridging** — why: JD lists Obj-C explicitly; "ideally" but probable interview probe
- [ ] **Prepare a Clean Architecture scaffold you can spin up in 30 min** — why: Tandem JD names Clean Architecture + modularization; this is a high-frequency interview pattern
- [ ] **Review iOS accessibility APIs (VoiceOver, Dynamic Type, UIAccessibility)** — why: JD's strongest preferred qual you can already own; over-prepare here
- [ ] **Review WebSocket / URLSession streaming basics + briefly explore WebRTC at conceptual level** — why: Tandem is realtime chat/media; you flagged this as ramp; one hour of background reading lifts your confident-ramp framing
- [ ] **Write up 3 STAR+R stories** (modernization, accessibility, reactive bug-fix) — why: story bank is empty
- [ ] **Build a 60-second self-pitch** — why: recruiter screen opener; rehearse aloud 3 times
- [ ] **Rehearse Berlin-hybrid + comp anchor responses** — why: both are guaranteed questions; under-preparing leads to defensive answers
- [ ] **Refresh KMP and SwiftUI/Combine intersection** — why: JD bonus; honest framing supported by 30 min of background
- [ ] **Skim Tandem's iOS app yourself + take 5 notes on UX choices** — why: shows you actually use the product; native talking point

---

## Company Signals

### Values they likely screen for (inferred from JD + careers page)

- **Collaboration / cross-functional discipline** — JD: "lead technical decisions" + Tandem's small team
- **Engineering excellence** — explicit in JD wording
- **Inclusivity / accessibility** — preferred qual + product values (language exchange = inherently inclusive)
- **Honest self-assessment** — JD signals technical-leadership + maturity over ego

### Vocabulary to use

- "Mature and modernize" (their words from JD — quote it back when describing what you'd do)
- "Reactive programming composed at production scale" (their phrase + your reality)
- "Accessibility as engineering discipline, not afterthought"
- "Clean Architecture as a working pattern, not religion"
- "Honest framing" / "ramp" (signal calibration when admitting gaps — better than evasion)

### Things to avoid

- **Don't oversell KMP.** You have a Kotlin foothold, not shipped KMP modules. Overclaim → trust loss.
- **Don't oversell realtime chat/media.** Acknowledge ramp; closest adjacency is reactive flows.
- **Don't mention Lightspeed or other active applications** — Berlin tech is small, comparison-shopping signals badly.
- **Don't badmouth SAP or any past employer.** German-tech-scene network effect; small world.
- **Don't dance around the German level.** "B1/B2 actively progressing, ready to ramp" is the honest, strong frame.

### Questions to ask them (2-3 sharp ones)

1. *"How does the iOS team divide ownership between the existing codebase modernization work and shipping new features? What's the current ratio, and where would a new senior engineer plug in first?"* — signals you've read "mature and modernize" and want to know which side of that line you'd live on
2. *"Tandem's realtime chat and media work — what does the WebRTC / socket layer look like internally? Built in-house or off a vendor like Daily/Twilio?"* — signals technical depth and honest curiosity about the gap you flagged
3. *"What's the hybrid cadence in practice? Is it 'come to Berlin a few times a quarter for off-sites' or 'in office Tue-Thu'?"* — clarifies location reality before deeper rounds

**Avoid asking:** "What's the culture like?" (too generic) or "What's your tech stack?" (it's in the JD)

---

## Post-Research Notes

- **Tandem-specific interview data is genuinely thin.** Plan for ambiguity in early rounds — they're a smaller, less-documented company than N26 or Spotify. Treat the recruiter screen as a chance to surface their actual process.
- **Story bank gap is your biggest prep priority.** Pick 3 stories above and draft proper STAR+R versions. I can help — just ask.
- **Your peer outreach (Kiarash / Martin) may surface before formal rounds.** If you've sent or send those notes, expect they could see them before a code review round. Frame any technical question from peer chat the same way you would in interviews — that conversation is also being read.
- **If Tandem progresses to Interview status,** update applications.md and the cadence script will flag follow-up windows automatically.

### Sources

- [Glassdoor — Tandem interview questions (mixed entities)](https://www.glassdoor.com/Interview/Tandem-Interview-Questions-E1018130.htm) (direct fetch returned 403; SERP only)
- [Tandem language exchange — careers page](https://tandem.net/pages/careers/jobs)
- [Tandem (app) — Wikipedia](https://en.wikipedia.org/wiki/Tandem_(app))
- [Tandem blog (consumer product, not engineering)](https://tandem.net/blog)
- [Kiarash Vosough — Tandem iOS Engineer, LinkedIn](https://www.linkedin.com/in/kiarashvosough/)
- [Martin Deville — Senior iOS Engineer, Tandem, LinkedIn](https://www.linkedin.com/in/martin-deville-ba63789a/)
- [N26 iOS Engineer interview write-up (adjacent reference)](https://medium.com/@ios-interview/n26-ios-engineer-interview-experience-with-questions-90d76f95d752)
- [N26 interview guide 2026 (adjacent reference)](https://ophyai.com/blog/company-guides/n26-interview-guide)
- [GetYourGuide Senior SWE Glassdoor (adjacent reference)](https://www.glassdoor.com/Interview/GetYourGuide-Senior-Software-Engineer-Interview-Questions-EI_IE695237.0,12_KO13,37.htm)
- [Evaluation report #041 — Tandem Senior iOS Engineer](../reports/041-tandem-senior-ios-engineer-2026-05-21.md)
