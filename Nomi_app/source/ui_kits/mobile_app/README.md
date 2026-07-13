# Nomi — Mobile App UI kit

An interactive, click-through recreation of the Nomi mobile app: the core product where "the AI reads your data and tells you what it means."

## Run it
Open `index.html`. It starts on **onboarding** (choose Personal or Business), then lands on the dashboard. Use the bottom tab bar to move between Home, Insights, Activity, and Settings. The center **+** shows a confirmation toast. The Personal/Business **ModeSwitch** (on Home and Settings) swaps the entire dataset live.

## Files
- `index.html` — device frame + app state machine (onboarding → tabs), mounts everything.
- `data.js` — fake data for both modes (`window.NomiData.PERSONAL` / `.BUSINESS`), Swedish-krona figures.
- `screens.jsx` — the five screens, exported on `window.NomiScreens`:
  - **HomeScreen** — balance hero (inverse card), the top AI insight, cash-flow chart, savings goal, recent transactions.
  - **InsightsScreen** — the full insight feed, one card per observation (the product's core value).
  - **ActivityScreen** — spend-by-category breakdown + full transaction list, with a Week/Month/Year range switch.
  - **SettingsScreen** — profile, mode switch, notification toggles, and (Personal only) an upgrade card.
  - **OnboardingScreen** — the Personal/Business mode chooser.

## Composition
Screens are thin — they compose the design-system primitives (`Stat`, `InsightCard`, `TransactionRow`, `ProgressGoal`, `CategoryBreakdown`, `CashflowChart`, `Card`, `ModeSwitch`, `TabBar`, `Button`, `Switch`, `Toast`, `Icon`) from the bundle. No component logic is re-implemented here.

## Notes
- Personal mode = Alex (freelance designer, irregular income). Business mode = Priya's 3-person studio. Data and insight tone differ per the brand strategy.
- This is a visual/interaction recreation, not production code (no real accounts, no persistence).
