/* Nomi — Spacing, radii, shadows, layout, motion
   Calm system: soft radii, low-contrast shadows, unhurried motion. */

:root {
  /* Spacing scale (4px base) */
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 40px;
  --space-9: 48px;
  --space-10: 64px;
  --space-11: 80px;
  --space-12: 96px;
  --space-13: 128px;

  /* Radii — soft, matches the app-icon's generous corner */
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 12px; /* default card / UI radius */
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-2xl: 32px;
  --radius-pill: 999px;
  --radius-icon: 22.5%; /* the logo squircle ratio */

  /* Shadows — soft, indigo-tinted, low contrast (calm) */
  --shadow-xs: 0 1px 2px rgba(22, 18, 58, 0.05);
  --shadow-sm: 0 1px 3px rgba(22, 18, 58, 0.06), 0 1px 2px rgba(22, 18, 58, 0.04);
  --shadow-md: 0 4px 12px rgba(22, 18, 58, 0.07), 0 2px 4px rgba(22, 18, 58, 0.04);
  --shadow-lg: 0 12px 28px rgba(22, 18, 58, 0.10), 0 4px 8px rgba(22, 18, 58, 0.05);
  --shadow-xl: 0 24px 56px rgba(22, 18, 58, 0.14), 0 8px 16px rgba(22, 18, 58, 0.06);
  --shadow-focus: var(--focus-ring);

  /* Layout */
  --container-sm: 640px;
  --container-md: 820px;
  --container-lg: 1080px;
  --container-xl: 1280px;
  --page-gutter: 24px;
  --app-max: 420px; /* mobile app frame width */

  /* Motion — calm, no bounce; gentle ease */
  --ease-standard: cubic-bezier(0.32, 0.08, 0.24, 1); /* @kind other */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1); /* @kind other */
  --ease-in: cubic-bezier(0.4, 0, 1, 1); /* @kind other */
  --dur-fast: 130ms;   /* @kind other */
  --dur-normal: 220ms; /* @kind other */
  --dur-slow: 380ms;   /* @kind other */

  /* Z-index */
  --z-nav: 100;      /* @kind other */
  --z-sticky: 200;   /* @kind other */
  --z-overlay: 800;  /* @kind other */
  --z-modal: 900;    /* @kind other */
  --z-toast: 1000;   /* @kind other */
}
