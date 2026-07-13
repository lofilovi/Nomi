/* @ds-bundle: {"format":4,"namespace":"NomiDesignSystem_3ea5bf","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ModeSwitch","sourcePath":"components/core/ModeSwitch.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"CashflowChart","sourcePath":"components/finance/CashflowChart.jsx"},{"name":"CategoryBreakdown","sourcePath":"components/finance/CategoryBreakdown.jsx"},{"name":"InsightCard","sourcePath":"components/finance/InsightCard.jsx"},{"name":"InsightChip","sourcePath":"components/finance/InsightChip.jsx"},{"name":"ProgressGoal","sourcePath":"components/finance/ProgressGoal.jsx"},{"name":"Stat","sourcePath":"components/finance/Stat.jsx"},{"name":"TransactionRow","sourcePath":"components/finance/TransactionRow.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"34d38b474315","components/core/Button.jsx":"a6da74db49b9","components/core/Card.jsx":"016380a618cf","components/core/Icon.jsx":"808a33eb740e","components/core/IconButton.jsx":"91b3be66119c","components/core/ModeSwitch.jsx":"e653840ec62f","components/feedback/Dialog.jsx":"22fdadbb413c","components/feedback/Toast.jsx":"47ab2e14ae94","components/feedback/Tooltip.jsx":"7e3ce8386de2","components/finance/CashflowChart.jsx":"ca35b705edb0","components/finance/CategoryBreakdown.jsx":"e95596c9d774","components/finance/InsightCard.jsx":"04d665e10ad9","components/finance/InsightChip.jsx":"9036f536e328","components/finance/ProgressGoal.jsx":"7719b10a3ea1","components/finance/Stat.jsx":"4d95e6050a8f","components/finance/TransactionRow.jsx":"9a3834d212e7","components/forms/Checkbox.jsx":"1665ea661606","components/forms/Input.jsx":"e4f58d4d8bb1","components/forms/Select.jsx":"cafe2ada7450","components/forms/Switch.jsx":"92b4dabeefee","components/navigation/TabBar.jsx":"0f49d5a92272","design_handoff_nomi_app/source/ui_kits/mobile_app/data.js":"2a7856d38b2f","design_handoff_nomi_app/source/ui_kits/mobile_app/i18n.js":"9d478115b7a1","design_handoff_nomi_app/source/ui_kits/mobile_app/screens.jsx":"123ddd159863","ui_kits/mobile_app/data.js":"2a7856d38b2f","ui_kits/mobile_app/i18n.js":"9d478115b7a1","ui_kits/mobile_app/screens.jsx":"123ddd159863","ui_kits/website/site.jsx":"f479aa75818a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NomiDesignSystem_3ea5bf = window.NomiDesignSystem_3ea5bf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Nomi Card — the base surface. White, soft radius, low-contrast shadow.
   `tone` shifts the fill for accent/brand/inverse cases. `pad` controls
   inner spacing. Compose everything else inside. */

const TONES = {
  default: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-subtle)'
  },
  sunken: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-body)',
    border: '1px solid transparent'
  },
  brand: {
    background: 'var(--surface-brand-soft)',
    color: 'var(--indigo-900)',
    border: '1px solid var(--indigo-100)'
  },
  accent: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--green-800)',
    border: '1px solid var(--green-100)'
  },
  inverse: {
    background: 'var(--surface-inverse)',
    color: 'var(--white)',
    border: '1px solid transparent'
  }
};
const PADS = {
  none: 0,
  sm: 'var(--space-4)',
  md: 'var(--space-6)',
  lg: 'var(--space-7)'
};
const RADII = {
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)'
};
function Card({
  children,
  tone = 'default',
  pad = 'md',
  radius = 'md',
  elevation = 'sm',
  interactive = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.default;
  const [hover, setHover] = React.useState(false);
  const shadow = elevation === 'none' ? 'none' : `var(--shadow-${elevation})`;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      background: t.background,
      color: t.color,
      border: t.border,
      borderRadius: RADII[radius] || RADII.lg,
      padding: PADS[pad] ?? PADS.md,
      boxShadow: interactive && hover ? 'var(--shadow-md)' : shadow,
      transform: interactive && hover ? 'translateY(-1px)' : 'none',
      transition: 'box-shadow var(--dur-normal) var(--ease-standard), transform var(--dur-normal) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Nomi icon set — Tabler Icons (MIT, © Paweł Kuna), embedded so components
   stay self-contained. 24px grid, 2px stroke, round caps/joins — the official
   Nomi glyph style. The finance glyphs (wallet, coin, credit-card, receipt,
   pig-money, report-money, building-bank, chart-line, trending-*) are the
   provided brand set in assets/icons/. Recolor via `color` / CSS currentColor;
   size with the `size` prop. */

const PATHS = {
  /* ---- UI / navigation ---- */
  home: '<path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>',
  'arrow-up-right': '<path d="M17 7l-10 10"/><path d="M8 7l9 0l0 9"/>',
  'arrow-down-right': '<path d="M7 7l10 10"/><path d="M17 8l0 9l-9 0"/>',
  'arrow-right': '<path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/>',
  'arrow-left': '<path d="M5 12l14 0"/><path d="M5 12l6 6"/><path d="M5 12l6 -6"/>',
  plus: '<path d="M12 5l0 14"/><path d="M5 12l14 0"/>',
  settings: '<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>',
  bell: '<path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/><path d="M9 17v1a3 3 0 0 0 6 0v-1"/>',
  search: '<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/>',
  'chevron-right': '<path d="M9 6l6 6l-6 6"/>',
  'chevron-down': '<path d="M6 9l6 6l6 -6"/>',
  check: '<path d="M5 12l5 5l10 -10"/>',
  x: '<path d="M18 6l-12 12"/><path d="M6 6l12 12"/>',
  ellipsis: '<path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>',
  calendar: '<path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/>',
  user: '<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>',
  briefcase: '<path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"/><path d="M12 12l0 .01"/><path d="M3 13a20 20 0 0 0 18 0"/>',
  download: '<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 11l5 5l5 -5"/><path d="M12 4l0 12"/>',
  eye: '<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/>',
  repeat: '<path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"/><path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"/>',
  /* ---- Insight / signal ---- */
  sparkles: '<path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2z"/><path d="M16 6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2z"/><path d="M9 18a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"/>',
  lightbulb: '<path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/>',
  alert: '<path d="M12 9v4"/><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.28 0z"/><path d="M12 16h.01"/>',
  target: '<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>',
  /* ---- Finance (provided Tabler brand set — assets/icons/) ---- */
  wallet: '<path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"/><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"/>',
  'credit-card': '<path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8"/><path d="M3 10l18 0"/><path d="M7 15l.01 0"/><path d="M11 15l2 0"/>',
  card: '<path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8"/><path d="M3 10l18 0"/><path d="M7 15l.01 0"/><path d="M11 15l2 0"/>',
  coin: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1"/><path d="M12 7v10"/>',
  receipt: '<path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"/><path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"/>',
  'pig-money': '<path d="M15 11v.01"/><path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377"/><path d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3"/>',
  'report-money': '<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"/><path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"/><path d="M12 17v1m0 -8v1"/>',
  'building-bank': '<path d="M3 21l18 0"/><path d="M3 10l18 0"/><path d="M5 6l7 -3l7 3"/><path d="M4 10l0 11"/><path d="M20 10l0 11"/><path d="M8 14l0 3"/><path d="M12 14l0 3"/><path d="M16 14l0 3"/>',
  'chart-line': '<path d="M4 19l16 0"/><path d="M4 15l4 -6l4 2l4 -5l4 4"/>',
  chart: '<path d="M4 19l16 0"/><path d="M4 15l4 -6l4 2l4 -5l4 4"/>',
  'chart-pie': '<path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8"/><path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"/>',
  'trending-up': '<path d="M3 17l6 -6l4 4l8 -8"/><path d="M14 7l7 0l0 7"/>',
  'trending-down': '<path d="M3 7l6 6l4 -4l8 8"/><path d="M21 10l0 7l-7 0"/>',
  /* ---- Category tiles ---- */
  coffee: '<path d="M3 8h14v4a4 4 0 0 1 -4 4h-6a4 4 0 0 1 -4 -4z"/><path d="M17 9h1a2 2 0 0 1 0 4h-1"/><path d="M6 4v-1"/><path d="M10 4v-1"/><path d="M14 4v-1"/>',
  'shopping-bag': '<path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"/><path d="M9 11v-5a3 3 0 0 1 6 0v5"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style,
  className,
  ...rest
}) {
  const inner = PATHS[name];
  if (!inner) {
    if (typeof console !== 'undefined') console.warn(`Icon: unknown name "${name}"`);
    return null;
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      display: 'inline-block',
      flexShrink: 0,
      verticalAlign: 'middle',
      ...style
    },
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }, rest));
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Nomi Badge — small status/label pill. Semantic tones map to the finance
   vocabulary: positive (money in), negative (money out / risk), warning,
   info, neutral, plus solid brand/accent. */

const TONES = {
  neutral: {
    bg: 'var(--neutral-100)',
    fg: 'var(--neutral-700)'
  },
  positive: {
    bg: 'var(--positive-100)',
    fg: 'var(--positive-600)'
  },
  negative: {
    bg: 'var(--negative-100)',
    fg: 'var(--negative-600)'
  },
  warning: {
    bg: 'var(--warning-100)',
    fg: 'var(--warning-600)'
  },
  info: {
    bg: 'var(--info-100)',
    fg: 'var(--info-500)'
  },
  brand: {
    bg: 'var(--indigo-800)',
    fg: 'var(--white)'
  },
  accent: {
    bg: 'var(--green-500)',
    fg: 'var(--white)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  icon,
  dot = false,
  size = 'md',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const small = size === 'sm';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: small ? 4 : 5,
      height: small ? 20 : 24,
      padding: small ? '0 8px' : '0 10px',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: small ? 'var(--fs-micro)' : 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-snug)',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: small ? 12 : 13
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Nomi Button.
   Variants: primary (indigo), accent (green — the single CTA), secondary
   (outline), ghost, danger. Sizes sm/md/lg. Calm interactions: subtle lift,
   no bounce. */

const SIZES = {
  sm: {
    height: 36,
    padding: '0 14px',
    font: 'var(--fs-body-sm)',
    gap: 6,
    icon: 16,
    radius: 'var(--radius-sm)'
  },
  md: {
    height: 44,
    padding: '0 20px',
    font: 'var(--fs-body)',
    gap: 8,
    icon: 18,
    radius: 'var(--radius-md)'
  },
  lg: {
    height: 54,
    padding: '0 28px',
    font: 'var(--fs-body-lg)',
    gap: 9,
    icon: 20,
    radius: 'var(--radius-md)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--white)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--action-primary-hover)',
    '--active-bg': 'var(--action-primary-active)',
    boxShadow: 'var(--shadow-xs)'
  },
  accent: {
    background: 'var(--action-accent)',
    color: 'var(--white)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--action-accent-hover)',
    '--active-bg': 'var(--action-accent-active)',
    boxShadow: 'var(--shadow-xs)'
  },
  secondary: {
    background: 'var(--white)',
    color: 'var(--indigo-800)',
    border: '1px solid var(--border-default)',
    '--hover-bg': 'var(--neutral-50)',
    '--active-bg': 'var(--neutral-100)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--indigo-800)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--indigo-50)',
    '--active-bg': 'var(--indigo-100)'
  },
  danger: {
    background: 'var(--negative-500)',
    color: 'var(--white)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--negative-600)',
    '--active-bg': 'var(--negative-600)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  loading = false,
  disabled = false,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const isDisabled = disabled || loading;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const bg = active ? v['--active-bg'] : hover ? v['--hover-bg'] : v.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: isDisabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-sans)',
      fontSize: s.font,
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-snug)',
      whiteSpace: 'nowrap',
      color: v.color,
      background: bg || v.background,
      border: v.border,
      borderRadius: s.radius,
      boxShadow: v.boxShadow || 'none',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.5 : 1,
      transform: active && !isDisabled ? 'translateY(0.5px)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, {
    size: s.icon
  }), !loading && iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, !loading && iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
function Spinner({
  size
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'nomi-spin 0.7s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes nomi-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Nomi IconButton — square, icon-only control. Variants match Button but
   tuned for toolbar/nav use. */

const SIZES = {
  sm: 34,
  md: 40,
  lg: 46
};
const ICON = {
  sm: 18,
  md: 20,
  lg: 22
};
const VARIANTS = {
  soft: {
    bg: 'var(--neutral-100)',
    color: 'var(--indigo-800)',
    hover: 'var(--neutral-200)',
    border: '1px solid transparent'
  },
  ghost: {
    bg: 'transparent',
    color: 'var(--neutral-600)',
    hover: 'var(--neutral-100)',
    border: '1px solid transparent'
  },
  outline: {
    bg: 'var(--white)',
    color: 'var(--indigo-800)',
    hover: 'var(--neutral-50)',
    border: '1px solid var(--border-default)'
  },
  solid: {
    bg: 'var(--action-primary)',
    color: 'var(--white)',
    hover: 'var(--action-primary-hover)',
    border: '1px solid transparent'
  }
};
function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  rounded = false,
  label,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      padding: 0,
      color: v.color,
      background: hover ? v.hover : v.bg,
      border: v.border,
      borderRadius: rounded ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: ICON[size] || ICON.md
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/ModeSwitch.jsx
try { (() => {
/* Nomi ModeSwitch — the signature Personal / Business segmented control, and
   a general-purpose segmented control. Sliding thumb, calm ease. Pass
   `options` as [{value,label,icon?}]. Controlled via `value`/`onChange`. */

function ModeSwitch({
  options = [{
    value: 'personal',
    label: 'Personal',
    icon: 'user'
  }, {
    value: 'business',
    label: 'Business',
    icon: 'briefcase'
  }],
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  style
}) {
  const idx = Math.max(0, options.findIndex(o => o.value === value));
  const count = options.length;
  const heights = {
    sm: 34,
    md: 42,
    lg: 48
  };
  const h = heights[size] || heights.md;
  const pad = 4;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      padding: pad,
      background: 'var(--neutral-100)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: pad,
      bottom: pad,
      left: pad,
      width: `calc((100% - ${pad * 2}px) / ${count})`,
      transform: `translateX(${idx * 100}%)`,
      background: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--dur-normal) var(--ease-out)'
    }
  }), options.map(o => {
    const selected = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      role: "tab",
      "aria-selected": selected,
      onClick: () => onChange && onChange(o.value),
      style: {
        position: 'relative',
        zIndex: 1,
        flex: fullWidth ? 1 : 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        height: h,
        padding: '0 18px',
        border: 'none',
        background: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: size === 'sm' ? 'var(--fs-body-sm)' : 'var(--fs-body)',
        fontWeight: 'var(--fw-medium)',
        letterSpacing: 'var(--ls-snug)',
        color: selected ? 'var(--indigo-900)' : 'var(--neutral-600)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'color var(--dur-normal) var(--ease-standard)'
      }
    }, o.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: o.icon,
      size: 16
    }), o.label);
  }));
}
Object.assign(__ds_scope, { ModeSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ModeSwitch.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/* Nomi Dialog — centered modal with scrim, calm scale-in. Controlled via
   `open`. Compose content as children; optional title + footer. */

function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  width = 440,
  icon,
  iconTone = 'brand'
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === 'Escape' && onClose && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const toneMap = {
    brand: {
      bg: 'var(--indigo-100)',
      fg: 'var(--indigo-700)'
    },
    accent: {
      bg: 'var(--green-100)',
      fg: 'var(--green-700)'
    },
    warning: {
      bg: 'var(--warning-100)',
      fg: 'var(--warning-600)'
    }
  };
  const it = toneMap[iconTone] || toneMap.brand;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-modal)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'color-mix(in srgb, var(--indigo-950) 45%, transparent)',
      backdropFilter: 'blur(3px)',
      WebkitBackdropFilter: 'blur(3px)',
      animation: 'nomi-fade var(--dur-normal) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'var(--space-7)',
      animation: 'nomi-pop var(--dur-normal) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes nomi-fade{from{opacity:0}to{opacity:1}}@keyframes nomi-pop{from{opacity:0;transform:translateY(8px) scale(0.98)}to{opacity:1;transform:none}}`), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-lg)',
      background: it.bg,
      color: it.fg,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h2)',
      marginBottom: description ? 8 : 16
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-muted)',
      marginBottom: 20,
      lineHeight: 'var(--lh-normal)'
    }
  }, description), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/* Nomi Toast — a single transient confirmation. Calm, low-key. Render one at
   a time. `tone` maps to the status vocabulary. */

const TONES = {
  neutral: {
    icon: 'check',
    bg: 'var(--indigo-800)',
    fg: 'var(--white)',
    accent: 'var(--green-400)'
  },
  positive: {
    icon: 'check',
    bg: 'var(--white)',
    fg: 'var(--text-strong)',
    accent: 'var(--green-500)'
  },
  warning: {
    icon: 'alert',
    bg: 'var(--white)',
    fg: 'var(--text-strong)',
    accent: 'var(--warning-500)'
  }
};
function Toast({
  children,
  tone = 'neutral',
  icon,
  action,
  onAction,
  onDismiss,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  const dark = tone === 'neutral';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      minWidth: 260,
      maxWidth: 400,
      padding: '12px 14px',
      background: t.bg,
      color: t.fg,
      border: dark ? 'none' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      animation: 'nomi-toast var(--dur-normal) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes nomi-toast{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 26,
      height: 26,
      flexShrink: 0,
      borderRadius: 'var(--radius-sm)',
      background: dark ? 'color-mix(in srgb, var(--green-400) 22%, transparent)' : 'color-mix(in srgb, currentColor 0%, transparent)',
      color: t.accent
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 17,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)'
    }
  }, children), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: dark ? 'var(--green-300)' : 'var(--text-link)'
    }
  }, action), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: dark ? 'var(--indigo-200)' : 'var(--neutral-400)',
      display: 'inline-flex',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/* Nomi Tooltip — small hover/focus label. Calm dark indigo bubble. CSS-driven
   show/hide via a wrapper; `content` on top/bottom/left/right. */

function Tooltip({
  content,
  placement = 'top',
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && content && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 'var(--z-toast)',
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      background: 'var(--indigo-900)',
      color: 'var(--white)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1.3,
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none',
      animation: 'nomi-tip var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes nomi-tip{from{opacity:0;transform:${pos.transform || 'none'} scale(0.96)}to{opacity:1}}`), content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/finance/CashflowChart.jsx
try { (() => {
/* Nomi CashflowChart — income vs spend (or any series) over periods.
   Two variants, pure SVG/divs, no library, calm colors:
   • 'bars'  — grouped/single bar chart (default).
   • 'area'  — smooth line + soft area fill for money-in, line for money-out.
*/

function CashflowChart({
  data = [],
  height = 140,
  currency = 'kr',
  mode = 'grouped',
  variant = 'bars',
  colorIn = 'var(--green-500)',
  colorOut = 'var(--indigo-300)',
  style,
  legendInLabel = 'Money in',
  legendOutLabel = 'Money out'
}) {
  const max = Math.max(1, ...data.flatMap(d => [d.in || 0, d.out || 0]));
  if (variant === 'area') {
    return /*#__PURE__*/React.createElement(AreaChart, {
      data: data,
      height: height,
      max: max,
      mode: mode,
      currency: currency,
      colorIn: colorIn,
      colorOut: colorOut,
      style: style,
      legendInLabel: legendInLabel,
      legendOutLabel: legendOutLabel
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      height
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      gap: 3,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: mode === 'grouped' ? '38%' : '56%',
      height: `${(d.in || 0) / max * 100}%`,
      minHeight: d.in ? 4 : 0,
      background: colorIn,
      borderRadius: '5px 5px 0 0',
      transition: 'height var(--dur-slow) var(--ease-out)'
    }
  }), mode === 'grouped' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '38%',
      height: `${(d.out || 0) / max * 100}%`,
      minHeight: d.out ? 4 : 0,
      background: colorOut,
      borderRadius: '5px 5px 0 0',
      transition: 'height var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-micro)',
      color: 'var(--text-subtle)',
      fontWeight: 'var(--fw-medium)'
    }
  }, d.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    color: colorIn,
    label: legendInLabel
  }), mode === 'grouped' && /*#__PURE__*/React.createElement(Legend, {
    color: colorOut,
    label: legendOutLabel
  })));
}

/* ---- smooth area/line variant ---- */
function AreaChart({
  data,
  height,
  max,
  mode,
  currency,
  colorIn,
  colorOut,
  style,
  legendInLabel,
  legendOutLabel
}) {
  const wrapRef = React.useRef(null);
  const [w, setW] = React.useState(320);
  const [hover, setHover] = React.useState(null);
  const uid = React.useId ? React.useId().replace(/:/g, '') : 'cf' + Math.random().toString(36).slice(2, 8);
  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => setW(el.clientWidth || 320));
    setW(el.clientWidth || 320);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const padX = 6;
  const padTop = 10;
  const padBottom = 8;
  const n = data.length;
  const innerW = Math.max(1, w - padX * 2);
  const plotH = Math.max(1, height - padTop - padBottom);
  const xAt = i => padX + (n <= 1 ? innerW / 2 : innerW * i / (n - 1));
  const yAt = v => padTop + plotH - Math.max(0, v) / max * plotH;
  const inPts = data.map((d, i) => ({
    x: xAt(i),
    y: yAt(d.in || 0)
  }));
  const outPts = data.map((d, i) => ({
    x: xAt(i),
    y: yAt(d.out || 0)
  }));
  const inLine = smoothPath(inPts);
  const outLine = smoothPath(outPts);
  const baseY = padTop + plotH;
  const inArea = inPts.length ? `${inLine} L${inPts[inPts.length - 1].x},${baseY} L${inPts[0].x},${baseY} Z` : '';
  const handleMove = e => {
    if (!n) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width * w;
    let idx = 0,
      best = Infinity;
    inPts.forEach((p, i) => {
      const dist = Math.abs(p.x - px);
      if (dist < best) {
        best = dist;
        idx = i;
      }
    });
    setHover(idx);
  };
  const handleLeave = () => setHover(null);
  const fmtNum = v => Math.round(v || 0).toLocaleString('sv-SE');
  const hoverPt = hover != null ? inPts[hover] : null;
  const hoverD = hover != null ? data[hover] : null;
  // keep tooltip inside the chart bounds
  const ttW = 108;
  const ttX = hoverPt ? Math.min(Math.max(hoverPt.x - ttW / 2, 2), w - ttW - 2) : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    style: {
      width: '100%',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: height,
    viewBox: `0 0 ${w} ${height}`,
    style: {
      display: 'block',
      overflow: 'visible',
      cursor: 'crosshair'
    },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onTouchMove: handleMove,
    onTouchEnd: handleLeave
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `grad-${uid}`,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: colorIn,
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: colorIn,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("line", {
    x1: padX,
    y1: baseY,
    x2: w - padX,
    y2: baseY,
    stroke: "var(--border-subtle)",
    strokeWidth: "1"
  }), inArea && /*#__PURE__*/React.createElement("path", {
    d: inArea,
    fill: `url(#grad-${uid})`
  }), mode === 'grouped' && outLine && /*#__PURE__*/React.createElement("path", {
    d: outLine,
    fill: "none",
    stroke: colorOut,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "1 5",
    opacity: "0.9"
  }), inLine && /*#__PURE__*/React.createElement("path", {
    d: inLine,
    fill: "none",
    stroke: colorIn,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), hoverPt && /*#__PURE__*/React.createElement("line", {
    x1: hoverPt.x,
    y1: padTop,
    x2: hoverPt.x,
    y2: baseY,
    stroke: "var(--border-default)",
    strokeWidth: "1",
    strokeDasharray: "2 3"
  }), inPts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p.x,
    cy: p.y,
    r: hover === i ? 4.5 : 3,
    fill: hover === i ? colorIn : 'var(--surface-card)',
    stroke: colorIn,
    strokeWidth: "2"
  })), mode === 'grouped' && hover != null && /*#__PURE__*/React.createElement("circle", {
    cx: outPts[hover].x,
    cy: outPts[hover].y,
    r: "4",
    fill: colorOut,
    stroke: "var(--surface-card)",
    strokeWidth: "1.5"
  })), hoverD && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: ttX,
      top: 0,
      width: ttW,
      pointerEvents: 'none',
      background: 'var(--surface-inverse, var(--neutral-950))',
      color: '#fff',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 9px',
      fontSize: 'var(--fs-micro)',
      boxShadow: 'var(--shadow-md)',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-medium)',
      opacity: 0.7,
      marginBottom: 2
    }
  }, hoverD.label), /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: colorIn,
      flexShrink: 0
    }
  }), "+", fmtNum(hoverD.in), " ", currency), mode === 'grouped' && /*#__PURE__*/React.createElement("div", {
    className: "num",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: colorOut,
      flexShrink: 0
    }
  }), "-", fmtNum(hoverD.out), " ", currency))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: `0 ${padX}px`
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 'var(--fs-micro)',
      color: 'var(--text-subtle)',
      fontWeight: 'var(--fw-medium)'
    }
  }, d.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    color: colorIn,
    label: legendInLabel
  }), mode === 'grouped' && /*#__PURE__*/React.createElement(Legend, {
    color: colorOut,
    label: legendOutLabel,
    dashed: true
  })));
}

/* Catmull-Rom → cubic bezier smoothing */
function smoothPath(pts) {
  if (!pts.length) return '';
  if (pts.length === 1) return `M${pts[0].x},${pts[0].y}`;
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${c1x},${c1y} ${c2x},${c2y} ${p2.x},${p2.y}`;
  }
  return d;
}
function Legend({
  color,
  label,
  dashed
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: dashed ? 12 : 9,
      height: dashed ? 0 : 9,
      borderRadius: 3,
      background: dashed ? 'transparent' : color,
      borderTop: dashed ? `2px dashed ${color}` : 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { CashflowChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/CashflowChart.jsx", error: String((e && e.message) || e) }); }

// components/finance/CategoryBreakdown.jsx
try { (() => {
/* Nomi CategoryBreakdown — spend-by-category as a single stacked bar plus a
   legend list. Pass `items` [{label, amount, color, icon?}]. Colors default
   to a calm indigo→green ramp if omitted. */

const RAMP = ['var(--indigo-800)', 'var(--indigo-500)', 'var(--green-500)', 'var(--green-300)', 'var(--warning-500)', 'var(--neutral-300)'];
function CategoryBreakdown({
  items = [],
  currency = 'kr',
  showLegend = true,
  style
}) {
  const total = items.reduce((s, i) => s + (i.amount || 0), 0) || 1;
  const withColor = items.map((it, i) => ({
    ...it,
    color: it.color || RAMP[i % RAMP.length],
    pct: it.amount / total * 100
  }));
  const fmt = n => typeof n === 'number' ? n.toLocaleString('sv-SE') : n;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 14,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      gap: 2,
      background: 'var(--neutral-100)'
    }
  }, withColor.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    title: `${it.label}: ${it.pct.toFixed(0)}%`,
    style: {
      width: `${it.pct}%`,
      background: it.color,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  }))), showLegend && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, withColor.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '7px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: it.color,
      flexShrink: 0
    }
  }), it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 16,
    color: "var(--neutral-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)'
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)'
    }
  }, fmt(it.amount), " ", currency), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-subtle)',
      width: 38,
      textAlign: 'right'
    }
  }, it.pct.toFixed(0), "%")))));
}
Object.assign(__ds_scope, { CategoryBreakdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/CategoryBreakdown.jsx", error: String((e && e.message) || e) }); }

// components/finance/InsightCard.jsx
try { (() => {
/* Nomi InsightCard — THE signature component. A single, plain-language
   observation from the AI insight engine, with one clear next action.
   Calm, never alarmist. One insight at a time (Restraint pillar). */

const TONES = {
  neutral: {
    chip: 'var(--indigo-100)',
    chipFg: 'var(--indigo-700)',
    accent: 'var(--indigo-500)',
    icon: 'sparkles'
  },
  positive: {
    chip: 'var(--green-100)',
    chipFg: 'var(--green-700)',
    accent: 'var(--green-500)',
    icon: 'trending-up'
  },
  warning: {
    chip: 'var(--warning-100)',
    chipFg: 'var(--warning-600)',
    accent: 'var(--warning-500)',
    icon: 'alert'
  },
  tip: {
    chip: 'var(--indigo-100)',
    chipFg: 'var(--indigo-700)',
    accent: 'var(--indigo-500)',
    icon: 'lightbulb'
  }
};
function InsightCard({
  children,
  title,
  tone = 'neutral',
  icon,
  actionLabel,
  onAction,
  timestamp,
  dismissable = false,
  onDismiss,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  const glyph = icon || t.icon;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 14,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 3,
      background: t.accent
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: t.chip,
      color: t.chipFg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 'var(--fs-micro)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 11,
    color: "var(--green-500)"
  }), " Nomi insight"), timestamp && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-subtle)'
    }
  }, "\xB7 ", timestamp)), title && /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)',
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-body)'
    }
  }, children), actionLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      marginTop: 12,
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-link)'
    }
  }, actionLabel, " ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 15
  }))), dismissable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      alignSelf: 'flex-start',
      width: 28,
      height: 28,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'transparent',
      color: 'var(--neutral-400)',
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/finance/InsightChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Nomi InsightChip — the small "AI insight" pill. Teal by default (Personal),
   violet in Business mode. Use to flag an AI-generated observation inline —
   in a card header, next to a figure, or above a list. It is the compact
   sibling of InsightCard; it labels, it doesn't explain. */

const MODES = {
  personal: {
    bg: 'var(--insight-fill)',
    fg: 'var(--insight-text)'
  },
  // teal-50 / teal-800
  business: {
    bg: 'var(--mode-business-soft)',
    fg: 'var(--purple-700)'
  } // purple-50 / purple-700
};
function InsightChip({
  children = 'Nomi insight',
  mode = 'personal',
  icon = 'sparkles',
  size = 'md',
  style,
  ...rest
}) {
  const m = MODES[mode] || MODES.personal;
  const small = size === 'sm';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: small ? 4 : 6,
      height: small ? 22 : 26,
      padding: small ? '0 9px' : '0 11px',
      background: m.bg,
      color: m.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: small ? 'var(--fs-micro)' : 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-snug)',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: small ? 12 : 14
  }), children);
}
Object.assign(__ds_scope, { InsightChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/InsightChip.jsx", error: String((e && e.message) || e) }); }

// components/finance/ProgressGoal.jsx
try { (() => {
/* Nomi ProgressGoal — a savings/target progress bar with current vs target
   and a computed percentage. Calm green fill. */

function ProgressGoal({
  label,
  current,
  target,
  currency = 'kr',
  percent,
  icon = 'target',
  tone = 'accent',
  caption,
  style
}) {
  const pct = typeof percent === 'number' ? percent : typeof current === 'number' && typeof target === 'number' && target > 0 ? Math.round(current / target * 100) : 0;
  const clamped = Math.max(0, Math.min(100, pct));
  const fill = tone === 'brand' ? 'var(--indigo-600)' : 'var(--green-500)';
  const fmt = n => typeof n === 'number' ? n.toLocaleString('sv-SE') : n;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17,
    color: fill
  }), label), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: fill
    }
  }, clamped, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--neutral-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${clamped}%`,
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), (current != null || caption) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, current != null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-body)'
    }
  }, fmt(current), " ", currency), target != null && ` of ${fmt(target)} ${currency}`)), caption && /*#__PURE__*/React.createElement("span", null, caption)));
}
Object.assign(__ds_scope, { ProgressGoal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/ProgressGoal.jsx", error: String((e && e.message) || e) }); }

// components/finance/Stat.jsx
try { (() => {
/* Nomi Stat — a labelled figure with an optional trend delta. The workhorse
   of every dashboard. Tabular numerals. `tone` inverts for dark hero cards. */

function Stat({
  label,
  value,
  currency,
  delta,
  deltaDirection,
  caption,
  align = 'left',
  size = 'md',
  tone = 'default',
  icon,
  style
}) {
  const inverse = tone === 'inverse';
  const sizes = {
    sm: 'var(--fs-h3)',
    md: 'var(--fs-h1)',
    lg: 'var(--fs-display)',
    xl: 'var(--fs-display-lg)'
  };
  const dir = deltaDirection || (delta && String(delta).trim().startsWith('-') ? 'down' : 'up');
  const deltaColor = inverse ? dir === 'down' ? 'var(--green-300)' : 'var(--green-300)' : dir === 'down' ? 'var(--negative-600)' : 'var(--positive-600)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: inverse ? 'var(--indigo-200)' : 'var(--text-muted)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }), label), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: sizes[size] || sizes.md,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-tight)',
      lineHeight: 1,
      color: inverse ? 'var(--white)' : 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums lining-nums'
    }
  }, value, currency && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.5em',
      fontWeight: 'var(--fw-medium)',
      marginLeft: 4,
      color: inverse ? 'var(--indigo-200)' : 'var(--text-muted)'
    }
  }, currency)), (delta || caption) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--fs-body-sm)'
    }
  }, delta && /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontWeight: 'var(--fw-medium)',
      color: deltaColor
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: dir === 'down' ? 'arrow-down-right' : 'arrow-up-right',
    size: 15
  }), delta), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      color: inverse ? 'var(--indigo-200)' : 'var(--text-subtle)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/Stat.jsx", error: String((e && e.message) || e) }); }

// components/finance/TransactionRow.jsx
try { (() => {
/* Nomi TransactionRow — one line in a transaction list. Category icon in a
   soft tile, merchant + meta, signed amount (green in / dark out). */

const CATEGORY_META = {
  groceries: {
    icon: 'shopping-bag',
    bg: 'var(--green-100)',
    fg: 'var(--green-700)'
  },
  subscriptions: {
    icon: 'repeat',
    bg: 'var(--indigo-100)',
    fg: 'var(--indigo-700)'
  },
  transport: {
    icon: 'card',
    bg: 'var(--neutral-200)',
    fg: 'var(--neutral-700)'
  },
  coffee: {
    icon: 'coffee',
    bg: 'var(--warning-100)',
    fg: 'var(--warning-600)'
  },
  income: {
    icon: 'arrow-down-right',
    bg: 'var(--green-100)',
    fg: 'var(--green-700)'
  },
  default: {
    icon: 'wallet',
    bg: 'var(--neutral-100)',
    fg: 'var(--neutral-600)'
  }
};
function TransactionRow({
  merchant,
  category,
  categoryLabel,
  amount,
  positive = false,
  date,
  icon,
  iconBg,
  iconFg,
  onClick,
  style
}) {
  const meta = CATEGORY_META[category] || CATEGORY_META.default;
  const glyph = icon || meta.icon;
  const label = categoryLabel != null ? categoryLabel : category;
  const interactive = !!onClick;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      background: hover ? 'var(--neutral-50)' : 'transparent',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: iconBg || meta.bg,
      color: iconFg || meta.fg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, merchant), (label || date) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-subtle)',
      textTransform: label && categoryLabel == null ? 'capitalize' : 'none'
    }
  }, label, label && date ? ' · ' : '', date)), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-medium)',
      whiteSpace: 'nowrap',
      fontVariantNumeric: 'tabular-nums lining-nums',
      color: positive ? 'var(--positive-600)' : 'var(--text-strong)'
    }
  }, positive ? '+' : '', amount));
}
Object.assign(__ds_scope, { TransactionRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/TransactionRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/* Nomi Checkbox — square check with calm fill. Controlled. */

function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  description,
  id,
  style
}) {
  const reactId = React.useId ? React.useId() : undefined;
  const cid = id || reactId;
  const box = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--indigo-800)' : 'var(--white)',
      border: `1px solid ${checked ? 'var(--indigo-800)' : 'var(--border-default)'}`,
      boxShadow: checked ? 'none' : 'var(--shadow-xs)',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      color: 'var(--white)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 3
  }));
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cid,
    style: {
      display: 'inline-flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "checkbox",
    "aria-checked": checked,
    id: cid,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'inherit',
      marginTop: description ? 1 : 0
    }
  }, box), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      lineHeight: 1.4
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Nomi Input — labelled text field with optional icon, prefix/suffix, hint
   and error. Calm focus ring, soft radius. */

function Input({
  label,
  hint,
  error,
  icon,
  prefix,
  suffix,
  size = 'md',
  id,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId ? React.useId() : undefined;
  const inputId = id || reactId;
  const h = size === 'sm' ? 40 : size === 'lg' ? 54 : 48;
  const borderColor = error ? 'var(--negative-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 14px',
      background: 'var(--white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--neutral-500)"
  }), prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--neutral-500)',
      fontSize: 'var(--fs-body)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      ...style
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--neutral-500)',
      fontSize: 'var(--fs-body-sm)'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--negative-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Nomi Select — native select styled to match Input. */

function Select({
  label,
  hint,
  error,
  options = [],
  size = 'md',
  id,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId ? React.useId() : undefined;
  const sid = id || reactId;
  const h = size === 'sm' ? 40 : size === 'lg' ? 54 : 48;
  const borderColor = error ? 'var(--negative-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: h,
      background: 'var(--white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: sid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      flex: 1,
      height: '100%',
      padding: '0 40px 0 14px',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      cursor: 'pointer',
      ...style
    }
  }), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none',
      color: 'var(--neutral-500)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--negative-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Nomi Switch — calm toggle. On = green (positive/enabled). */

function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  id,
  style,
  ...rest
}) {
  const w = size === 'sm' ? 36 : 44;
  const h = size === 'sm' ? 20 : 26;
  const knob = h - 6;
  const reactId = React.useId ? React.useId() : undefined;
  const sid = id || reactId;
  const toggle = () => !disabled && onChange && onChange(!checked);
  const control = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    id: sid,
    disabled: disabled,
    onClick: toggle,
    style: {
      position: 'relative',
      width: w,
      height: h,
      flexShrink: 0,
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: checked ? 'var(--green-500)' : 'var(--neutral-300)',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-normal) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: 3,
      width: knob,
      height: knob,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transform: checked ? `translateX(${w - knob - 6}px)` : 'translateX(0)',
      transition: 'transform var(--dur-normal) var(--ease-out)'
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
/* Nomi TabBar — the mobile app's bottom navigation. Icon + label, active in
   indigo, optional center primary action (the '+'). */

function TabBar({
  items = [],
  active,
  onChange,
  centerAction,
  onCenterAction,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      background: 'var(--white)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '8px 12px calc(8px + env(safe-area-inset-bottom, 0px))',
      boxShadow: '0 -1px 8px rgba(22,18,58,0.04)',
      ...style
    }
  }, items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      onClick: () => onChange && onChange(it.value),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        flex: 1,
        padding: '4px 0',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        color: on ? 'var(--indigo-800)' : 'var(--neutral-400)',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 23,
      strokeWidth: on ? 2.4 : 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-micro)',
        fontWeight: on ? 'var(--fw-medium)' : 'var(--fw-medium)'
      }
    }, it.label));
  }), centerAction && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": centerAction,
    onClick: onCenterAction,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 52,
      marginTop: -22,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      border: '4px solid var(--white)',
      background: 'var(--green-500)',
      color: 'var(--white)',
      boxShadow: 'var(--shadow-md)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 24,
    strokeWidth: 2.5
  })));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// design_handoff_nomi_app/source/ui_kits/mobile_app/data.js
try { (() => {
/* Nomi mobile app — shared fake data + helpers (Personal & Business modes).
   Translatable content (insight copy, category labels, relative dates, goal
   captions) is stored as i18n keys + vars, resolved at render time via
   window.NomiI18n.t(lang, key, vars) — see localize() below. Proper nouns
   (merchant names, bank names) are left as-is; they aren't translated. */
(function () {
  const fmt = n => n.toLocaleString('sv-SE');
  const PERSONAL = {
    name: 'Alex',
    balance: '42,180',
    inThisMonth: '31,200',
    outThisMonth: '8,420',
    outDelta: '-12%',
    insights: [{
      id: 1,
      tone: 'positive',
      dateKey: {
        type: 'hours_ago',
        n: 2
      },
      titleKey: null,
      actionKey: 'ins_save_action',
      textKey: 'ins_save_text',
      vars: {
        amount: '2,400 kr'
      }
    }, {
      id: 2,
      tone: 'warning',
      dateKey: {
        type: 'yesterday'
      },
      titleKey: 'ins_unused_title',
      actionKey: 'ins_unused_action',
      textKey: 'ins_unused_text',
      vars: {
        name: 'Adobe CC',
        amount: '599 kr'
      }
    }, {
      id: 3,
      tone: 'tip',
      dateKey: {
        type: 'days_ago',
        n: 3
      },
      titleKey: null,
      actionKey: 'ins_move_action',
      textKey: 'ins_move_text',
      vars: {
        amount: '3,000 kr'
      }
    }],
    transactions: [{
      merchant: 'Client invoice #204',
      category: 'income',
      positive: true,
      amount: '18,000 kr',
      dateKey: {
        type: 'yesterday'
      }
    }, {
      merchant: 'ICA Maxi',
      category: 'groceries',
      amount: '612 kr',
      dateKey: {
        type: 'today'
      }
    }, {
      merchant: 'Spotify',
      category: 'subscriptions',
      amount: '119 kr',
      dateKey: {
        type: 'days_ago',
        n: 2
      }
    }, {
      merchant: 'SL Access',
      category: 'transport',
      amount: '340 kr',
      dateKey: {
        type: 'days_ago',
        n: 3
      }
    }, {
      merchant: 'Espresso House',
      category: 'coffee',
      amount: '58 kr',
      dateKey: {
        type: 'days_ago',
        n: 3
      }
    }, {
      merchant: 'Adobe CC',
      category: 'subscriptions',
      amount: '599 kr',
      dateKey: {
        type: 'days_ago',
        n: 5
      }
    }],
    categories: [{
      labelKey: 'cat_rent',
      amount: 9500,
      icon: 'home'
    }, {
      labelKey: 'cat_groceries',
      amount: 3200,
      icon: 'shopping-bag'
    }, {
      labelKey: 'cat_subscriptions',
      amount: 890,
      icon: 'repeat'
    }, {
      labelKey: 'cat_transport',
      amount: 640,
      icon: 'card'
    }, {
      labelKey: 'cat_coffee',
      amount: 1240,
      icon: 'coffee'
    }],
    goal: {
      labelKey: 'goal_emergency',
      current: 18400,
      target: 30000,
      captionKey: 'goal_months_left',
      captionVars: {
        n: 3
      }
    },
    cashflow: [{
      label: 'Mon',
      in: 0,
      out: 320
    }, {
      label: 'Tue',
      in: 18000,
      out: 120
    }, {
      label: 'Wed',
      in: 0,
      out: 640
    }, {
      label: 'Thu',
      in: 0,
      out: 210
    }, {
      label: 'Fri',
      in: 2400,
      out: 890
    }, {
      label: 'Sat',
      in: 0,
      out: 150
    }, {
      label: 'Sun',
      in: 0,
      out: 80
    }]
  };
  const BUSINESS = {
    name: 'Priya Studio',
    balance: '214,600',
    inThisMonth: '96,000',
    outThisMonth: '61,300',
    outDelta: '+8%',
    insights: [{
      id: 1,
      tone: 'warning',
      dateKey: {
        type: 'hours_ago',
        n: 1
      },
      titleKey: 'ins_overdue_title',
      actionKey: 'ins_overdue_action',
      textKey: 'ins_overdue_text',
      vars: {
        num: '198',
        amount: '24,000 kr',
        threshold: '40,000 kr'
      }
    }, {
      id: 2,
      tone: 'neutral',
      dateKey: {
        type: 'today'
      },
      titleKey: null,
      actionKey: 'ins_software_action',
      textKey: 'ins_software_text',
      vars: {}
    }, {
      id: 3,
      tone: 'positive',
      dateKey: {
        type: 'yesterday'
      },
      titleKey: null,
      actionKey: 'ins_revenue_action',
      textKey: 'ins_revenue_text',
      vars: {}
    }],
    transactions: [{
      merchant: 'Northwind Co — Invoice #204',
      category: 'income',
      positive: true,
      amount: '42,000 kr',
      dateKey: {
        type: 'today'
      }
    }, {
      merchant: 'Figma (team)',
      category: 'subscriptions',
      amount: '1,240 kr',
      dateKey: {
        type: 'yesterday'
      }
    }, {
      merchant: 'AWS',
      category: 'subscriptions',
      amount: '3,180 kr',
      dateKey: {
        type: 'days_ago',
        n: 2
      }
    }, {
      merchant: 'Office rent',
      category: 'transport',
      icon: 'home',
      amount: '14,000 kr',
      dateKey: {
        type: 'days_ago',
        n: 4
      }
    }, {
      merchant: 'Contractor — L. Berg',
      category: 'default',
      icon: 'user',
      amount: '22,000 kr',
      dateKey: {
        type: 'days_ago',
        n: 5
      }
    }],
    categories: [{
      labelKey: 'cat_payroll',
      amount: 38000,
      icon: 'user'
    }, {
      labelKey: 'cat_office_rent',
      amount: 14000,
      icon: 'home'
    }, {
      labelKey: 'cat_software',
      amount: 6200,
      icon: 'repeat'
    }, {
      labelKey: 'cat_travel',
      amount: 2100,
      icon: 'card'
    }, {
      labelKey: 'cat_other',
      amount: 1000,
      icon: 'wallet'
    }],
    goal: {
      labelKey: 'goal_tax_reserve',
      current: 42000,
      target: 70000,
      captionKey: 'goal_due_date',
      captionVars: {
        date: '12 Oct'
      }
    },
    cashflow: [{
      label: 'W1',
      in: 42000,
      out: 18000
    }, {
      label: 'W2',
      in: 12000,
      out: 22000
    }, {
      label: 'W3',
      in: 24000,
      out: 9000
    }, {
      label: 'W4',
      in: 18000,
      out: 12300
    }]
  };

  /* Resolve a { type, n } date descriptor to display text in `lang`. */
  function localizeDate(lang, dateKey) {
    const t = window.NomiI18n.t;
    if (!dateKey) return '';
    if (dateKey.type === 'today') return t(lang, 'date_today');
    if (dateKey.type === 'yesterday') return t(lang, 'date_yesterday');
    if (dateKey.type === 'just_now') return t(lang, 'date_just_now');
    if (dateKey.type === 'hours_ago') return t(lang, 'date_just_now'); // collapse "2h ago" into a calm "just now"
    if (dateKey.type === 'days_ago') return t(lang, 'date_days_ago', {
      n: dateKey.n
    });
    return '';
  }

  /* Returns a deep-cloned data object with all translatable fields resolved
     to display strings for `lang`. Screens consume this instead of the raw
     PERSONAL/BUSINESS objects directly. */
  function localize(lang, data) {
    const t = window.NomiI18n.t;
    return {
      ...data,
      insights: data.insights.map(ins => ({
        ...ins,
        timestamp: localizeDate(lang, ins.dateKey),
        title: ins.titleKey ? t(lang, ins.titleKey) : null,
        action: t(lang, ins.actionKey),
        text: t(lang, ins.textKey, ins.vars)
      })),
      transactions: data.transactions.map(tx => ({
        ...tx,
        date: localizeDate(lang, tx.dateKey)
      })),
      categories: data.categories.map(c => ({
        ...c,
        label: t(lang, c.labelKey)
      })),
      goal: {
        ...data.goal,
        label: t(lang, data.goal.labelKey),
        caption: t(lang, data.goal.captionKey, data.goal.captionVars)
      }
    };
  }
  window.NomiData = {
    PERSONAL,
    BUSINESS,
    fmt,
    localize
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_nomi_app/source/ui_kits/mobile_app/data.js", error: String((e && e.message) || e) }); }

// design_handoff_nomi_app/source/ui_kits/mobile_app/i18n.js
try { (() => {
/* Nomi mobile app — i18n dictionary + translator for UI chrome (not mock data).
   Keys are plain English strings; each language maps a subset of them.
   t(lang, key) falls back to English, then to the key itself. */
(function () {
  const STR = {
    tab_home: {
      en: 'Home',
      uk: 'Головна',
      es: 'Inicio',
      fr: 'Accueil',
      de: 'Start',
      pt: 'Início',
      pl: 'Start',
      sv: 'Hem',
      zh: '首页',
      ar: 'الرئيسية',
      hi: 'होम',
      ja: 'ホーム'
    },
    tab_insights: {
      en: 'Insights',
      uk: 'Аналітика',
      es: 'Análisis',
      fr: 'Analyses',
      de: 'Einblicke',
      pt: 'Análises',
      pl: 'Analizy',
      sv: 'Insikter',
      zh: '洞察',
      ar: 'الرؤى',
      hi: 'इनसाइट्स',
      ja: 'インサイト'
    },
    tab_activity: {
      en: 'Activity',
      uk: 'Активність',
      es: 'Actividad',
      fr: 'Activité',
      de: 'Aktivität',
      pt: 'Atividade',
      pl: 'Aktywność',
      sv: 'Aktivitet',
      zh: '活动',
      ar: 'النشاط',
      hi: 'गतिविधि',
      ja: 'アクティビティ'
    },
    tab_settings: {
      en: 'Settings',
      uk: 'Налаштування',
      es: 'Ajustes',
      fr: 'Réglages',
      de: 'Einstellungen',
      pt: 'Definições',
      pl: 'Ustawienia',
      sv: 'Inställningar',
      zh: '设置',
      ar: 'الإعدادات',
      hi: 'सेटिंग्स',
      ja: '設定'
    },
    add_transaction: {
      en: 'Add transaction',
      uk: 'Додати транзакцію',
      es: 'Añadir transacción',
      fr: 'Ajouter une transaction',
      de: 'Buchung hinzufügen',
      pt: 'Adicionar transação',
      pl: 'Dodaj transakcję',
      sv: 'Lägg till transaktion',
      zh: '添加交易',
      ar: 'إضافة معاملة',
      hi: 'लेन-देन जोड़ें',
      ja: '取引を追加'
    },
    toast_signed_out: {
      en: 'Signed out',
      uk: 'Ви вийшли з акаунту',
      es: 'Sesión cerrada',
      fr: 'Déconnecté',
      de: 'Abgemeldet',
      pt: 'Sessão terminada',
      pl: 'Wylogowano',
      sv: 'Utloggad',
      zh: '已退出登录',
      ar: 'تم تسجيل الخروج',
      hi: 'साइन आउट हो गया',
      ja: 'サインアウトしました'
    },
    toast_txn_added: {
      en: 'Transaction added',
      uk: 'Транзакцію додано',
      es: 'Transacción añadida',
      fr: 'Transaction ajoutée',
      de: 'Buchung hinzugefügt',
      pt: 'Transação adicionada',
      pl: 'Dodano transakcję',
      sv: 'Transaktion tillagd',
      zh: '已添加交易',
      ar: 'تمت إضافة المعاملة',
      hi: 'लेन-देन जोड़ा गया',
      ja: '取引を追加しました'
    },
    toast_balances_hidden: {
      en: 'Balances hidden',
      uk: 'Баланси приховано',
      es: 'Saldos ocultos',
      fr: 'Soldes masqués',
      de: 'Salden ausgeblendet',
      pt: 'Saldos ocultos',
      pl: 'Salda ukryte',
      sv: 'Saldon dolda',
      zh: '余额已隐藏',
      ar: 'تم إخفاء الأرصدة',
      hi: 'बैलेंस छिपाया गया',
      ja: '残高を非表示にしました'
    },
    toast_balances_shown: {
      en: 'Balances shown',
      uk: 'Баланси показано',
      es: 'Saldos visibles',
      fr: 'Soldes affichés',
      de: 'Salden angezeigt',
      pt: 'Saldos visíveis',
      pl: 'Salda widoczne',
      sv: 'Saldon visas',
      zh: '余额已显示',
      ar: 'تم إظهار الأرصدة',
      hi: 'बैलेंस दिखाया गया',
      ja: '残高を表示しました'
    },
    toast_faceid_on: {
      en: 'Face ID enabled',
      uk: 'Face ID увімкнено',
      es: 'Face ID activado',
      fr: 'Face ID activé',
      de: 'Face ID aktiviert',
      pt: 'Face ID ativado',
      pl: 'Face ID włączone',
      sv: 'Face ID aktiverat',
      zh: '已启用面容 ID',
      ar: 'تم تفعيل Face ID',
      hi: 'फेस आईडी चालू',
      ja: 'Face IDを有効にしました'
    },
    toast_faceid_off: {
      en: 'Face ID disabled',
      uk: 'Face ID вимкнено',
      es: 'Face ID desactivado',
      fr: 'Face ID désactivé',
      de: 'Face ID deaktiviert',
      pt: 'Face ID desativado',
      pl: 'Face ID wyłączone',
      sv: 'Face ID inaktiverat',
      zh: '已停用面容 ID',
      ar: 'تم إيقاف Face ID',
      hi: 'फेस आईडी बंद',
      ja: 'Face IDを無効にしました'
    },
    toast_motion_on: {
      en: 'Reduced motion on',
      uk: 'Зменшення руху увімкнено',
      es: 'Movimiento reducido activado',
      fr: 'Mouvement réduit activé',
      de: 'Reduzierte Bewegung an',
      pt: 'Movimento reduzido ativado',
      pl: 'Ograniczony ruch włączony',
      sv: 'Reducerad rörelse på',
      zh: '已开启减弱动态效果',
      ar: 'تم تفعيل تقليل الحركة',
      hi: 'गति में कमी चालू',
      ja: 'モーション減らすをオンにしました'
    },
    toast_motion_off: {
      en: 'Reduced motion off',
      uk: 'Зменшення руху вимкнено',
      es: 'Movimiento reducido desactivado',
      fr: 'Mouvement réduit désactivé',
      de: 'Reduzierte Bewegung aus',
      pt: 'Movimento reduzido desativado',
      pl: 'Ograniczony ruch wyłączony',
      sv: 'Reducerad rörelse av',
      zh: '已关闭减弱动态效果',
      ar: 'تم إيقاف تقليل الحركة',
      hi: 'गति में कमी बंद',
      ja: 'モーション減らすをオフにしました'
    },
    toast_dark_on: {
      en: 'Dark mode on',
      uk: 'Темну тему увімкнено',
      es: 'Modo oscuro activado',
      fr: 'Mode sombre activé',
      de: 'Dunkelmodus an',
      pt: 'Modo escuro ativado',
      pl: 'Tryb ciemny włączony',
      sv: 'Mörkt läge på',
      zh: '已开启深色模式',
      ar: 'تم تفعيل الوضع الداكن',
      hi: 'डार्क मोड चालू',
      ja: 'ダークモードをオンにしました'
    },
    toast_dark_off: {
      en: 'Dark mode off',
      uk: 'Темну тему вимкнено',
      es: 'Modo oscuro desactivado',
      fr: 'Mode sombre désactivé',
      de: 'Dunkelmodus aus',
      pt: 'Modo escuro desativado',
      pl: 'Tryb ciemny wyłączony',
      sv: 'Mörkt läge av',
      zh: '已关闭深色模式',
      ar: 'تم إيقاف الوضع الداكن',
      hi: 'डार्क मोड बंद',
      ja: 'ダークモードをオフにしました'
    },
    toast_lang_set: {
      en: 'Language set to {name}',
      uk: 'Мову змінено на {name}',
      es: 'Idioma cambiado a {name}',
      fr: 'Langue définie sur {name}',
      de: 'Sprache auf {name} geändert',
      pt: 'Idioma definido para {name}',
      pl: 'Ustawiono język {name}',
      sv: 'Språk inställt på {name}',
      zh: '语言已设为{name}',
      ar: 'تم ضبط اللغة على {name}',
      hi: 'भाषा {name} पर सेट की गई',
      ja: '言語を{name}に設定しました'
    },
    toast_bank_started: {
      en: 'Bank connection started',
      uk: 'Підключення банку розпочато',
      es: 'Conexión bancaria iniciada',
      fr: 'Connexion bancaire lancée',
      de: 'Bankverbindung gestartet',
      pt: 'Ligação bancária iniciada',
      pl: 'Rozpoczęto łączenie z bankiem',
      sv: 'Bankanslutning startad',
      zh: '已开始银行连接',
      ar: 'بدأ ربط الحساب المصرفي',
      hi: 'बैंक कनेक्शन शुरू हुआ',
      ja: '銀行連携を開始しました'
    },
    toast_upgrade_soon: {
      en: 'Upgrade coming soon',
      uk: 'Оновлення незабаром',
      es: 'Mejora disponible pronto',
      fr: 'Mise à niveau bientôt disponible',
      de: 'Upgrade bald verfügbar',
      pt: 'Atualização brevemente',
      pl: 'Ulepszenie już wkrótce',
      sv: 'Uppgradering kommer snart',
      zh: '升级即将推出',
      ar: 'الترقية قريبًا',
      hi: 'अपग्रेड जल्द आ रहा है',
      ja: 'アップグレードは近日公開'
    },
    mode_personal: {
      en: 'Personal',
      uk: 'Особисте',
      es: 'Personal',
      fr: 'Personnel',
      de: 'Privat',
      pt: 'Pessoal',
      pl: 'Osobiste',
      sv: 'Privat',
      zh: '个人',
      ar: 'شخصي',
      hi: 'व्यक्तिगत',
      ja: '個人'
    },
    mode_business: {
      en: 'Business',
      uk: 'Бізнес',
      es: 'Negocio',
      fr: 'Entreprise',
      de: 'Business',
      pt: 'Empresa',
      pl: 'Firma',
      sv: 'Företag',
      zh: '企业',
      ar: 'الأعمال',
      hi: 'व्यवसाय',
      ja: 'ビジネス'
    },
    hi_name: {
      en: 'Hi, {name}',
      uk: 'Привіт, {name}',
      es: 'Hola, {name}',
      fr: 'Salut, {name}',
      de: 'Hallo, {name}',
      pt: 'Olá, {name}',
      pl: 'Cześć, {name}',
      sv: 'Hej, {name}',
      zh: '你好，{name}',
      ar: 'مرحبًا، {name}',
      hi: 'नमस्ते, {name}',
      ja: 'こんにちは、{name}さん'
    },
    alerts: {
      en: 'Alerts',
      uk: 'Сповіщення',
      es: 'Alertas',
      fr: 'Alertes',
      de: 'Benachrichtigungen',
      pt: 'Alertas',
      pl: 'Alerty',
      sv: 'Aviseringar',
      zh: '提醒',
      ar: 'التنبيهات',
      hi: 'अलर्ट',
      ja: '通知'
    },
    profile: {
      en: 'Profile',
      uk: 'Профіль',
      es: 'Perfil',
      fr: 'Profil',
      de: 'Profil',
      pt: 'Perfil',
      pl: 'Profil',
      sv: 'Profil',
      zh: '个人资料',
      ar: 'الملف الشخصي',
      hi: 'प्रोफ़ाइल',
      ja: 'プロフィール'
    },
    total_balance: {
      en: 'Total balance',
      uk: 'Загальний баланс',
      es: 'Saldo total',
      fr: 'Solde total',
      de: 'Gesamtsaldo',
      pt: 'Saldo total',
      pl: 'Łączne saldo',
      sv: 'Totalt saldo',
      zh: '总余额',
      ar: 'الرصيد الإجمالي',
      hi: 'कुल शेष राशि',
      ja: '合計残高'
    },
    total_across: {
      en: 'Total across accounts',
      uk: 'Разом на всіх рахунках',
      es: 'Total en todas las cuentas',
      fr: 'Total tous comptes',
      de: 'Gesamt über alle Konten',
      pt: 'Total em todas as contas',
      pl: 'Suma na wszystkich kontach',
      sv: 'Totalt över alla konton',
      zh: '所有账户合计',
      ar: 'الإجمالي عبر جميع الحسابات',
      hi: 'सभी खातों में कुल',
      ja: '全口座の合計'
    },
    hide_balances_btn: {
      en: 'Hide balances',
      uk: 'Приховати баланси',
      es: 'Ocultar saldos',
      fr: 'Masquer les soldes',
      de: 'Salden ausblenden',
      pt: 'Ocultar saldos',
      pl: 'Ukryj salda',
      sv: 'Dölj saldon',
      zh: '隐藏余额',
      ar: 'إخفاء الأرصدة',
      hi: 'शेष राशि छिपाएं',
      ja: '残高を隠す'
    },
    show_balances_btn: {
      en: 'Show balances',
      uk: 'Показати баланси',
      es: 'Mostrar saldos',
      fr: 'Afficher les soldes',
      de: 'Salden anzeigen',
      pt: 'Mostrar saldos',
      pl: 'Pokaż salda',
      sv: 'Visa saldon',
      zh: '显示余额',
      ar: 'إظهار الأرصدة',
      hi: 'शेष राशि दिखाएं',
      ja: '残高を表示'
    },
    in_word: {
      en: 'In',
      uk: 'Надходження',
      es: 'Entradas',
      fr: 'Entrées',
      de: 'Ein',
      pt: 'Entradas',
      pl: 'Wpływy',
      sv: 'In',
      zh: '收入',
      ar: 'وارد',
      hi: 'आय',
      ja: '入金'
    },
    out_word: {
      en: 'Out',
      uk: 'Витрати',
      es: 'Salidas',
      fr: 'Sorties',
      de: 'Aus',
      pt: 'Saídas',
      pl: 'Wypływy',
      sv: 'Ut',
      zh: '支出',
      ar: 'صادر',
      hi: 'व्यय',
      ja: '出金'
    },
    vs_last_month: {
      en: 'vs last month',
      uk: 'порівняно з минулим місяцем',
      es: 'vs. mes pasado',
      fr: 'vs mois dernier',
      de: 'ggü. Vormonat',
      pt: 'vs. mês passado',
      pl: 'vs. poprzedni miesiąc',
      sv: 'jämfört med förra månaden',
      zh: '较上月',
      ar: 'مقارنة بالشهر الماضي',
      hi: 'पिछले माह की तुलना में',
      ja: '先月比'
    },
    nomi_insight: {
      en: 'Nomi insight',
      uk: 'Аналітика Nomi',
      es: 'Análisis de Nomi',
      fr: 'Analyse Nomi',
      de: 'Nomi-Einblick',
      pt: 'Análise Nomi',
      pl: 'Analiza Nomi',
      sv: 'Nomi-insikt',
      zh: 'Nomi 洞察',
      ar: 'رؤية Nomi',
      hi: 'Nomi इनसाइट',
      ja: 'Nomiインサイト'
    },
    all_insights: {
      en: 'All insights',
      uk: 'Вся аналітика',
      es: 'Todos los análisis',
      fr: 'Toutes les analyses',
      de: 'Alle Einblicke',
      pt: 'Todas as análises',
      pl: 'Wszystkie analizy',
      sv: 'Alla insikter',
      zh: '所有洞察',
      ar: 'كل الرؤى',
      hi: 'सभी इनसाइट्स',
      ja: 'すべてのインサイト'
    },
    cashflow_week: {
      en: 'Cash flow — this week',
      uk: 'Грошовий потік — цього тижня',
      es: 'Flujo de caja — esta semana',
      fr: 'Trésorerie — cette semaine',
      de: 'Cashflow — diese Woche',
      pt: 'Fluxo de caixa — esta semana',
      pl: 'Przepływy — w tym tygodniu',
      sv: 'Kassaflöde — denna vecka',
      zh: '现金流 — 本周',
      ar: 'التدفق النقدي — هذا الأسبوع',
      hi: 'नकदी प्रवाह — इस सप्ताह',
      ja: 'キャッシュフロー — 今週'
    },
    cashflow_month: {
      en: 'Cash flow — this month',
      uk: 'Грошовий потік — цього місяця',
      es: 'Flujo de caja — este mes',
      fr: 'Trésorerie — ce mois',
      de: 'Cashflow — diesen Monat',
      pt: 'Fluxo de caixa — este mês',
      pl: 'Przepływy — w tym miesiącu',
      sv: 'Kassaflöde — denna månad',
      zh: '现金流 — 本月',
      ar: 'التدفق النقدي — هذا الشهر',
      hi: 'नकदी प्रवाह — इस माह',
      ja: 'キャッシュフロー — 今月'
    },
    see_all: {
      en: 'See all',
      uk: 'Переглянути все',
      es: 'Ver todo',
      fr: 'Tout voir',
      de: 'Alle ansehen',
      pt: 'Ver tudo',
      pl: 'Zobacz wszystko',
      sv: 'Visa alla',
      zh: '查看全部',
      ar: 'عرض الكل',
      hi: 'सभी देखें',
      ja: 'すべて表示'
    },
    recent_activity: {
      en: 'Recent activity',
      uk: 'Останні операції',
      es: 'Actividad reciente',
      fr: 'Activité récente',
      de: 'Letzte Aktivität',
      pt: 'Atividade recente',
      pl: 'Ostatnia aktywność',
      sv: 'Senaste aktivitet',
      zh: '最近活动',
      ar: 'النشاط الأخير',
      hi: 'हाल की गतिविधि',
      ja: '最近のアクティビティ'
    },
    insights_title: {
      en: 'Insights',
      uk: 'Аналітика',
      es: 'Análisis',
      fr: 'Analyses',
      de: 'Einblicke',
      pt: 'Análises',
      pl: 'Analizy',
      sv: 'Insikter',
      zh: '洞察',
      ar: 'الرؤى',
      hi: 'इनसाइट्स',
      ja: 'インサイト'
    },
    insights_new: {
      en: '{n} new',
      uk: '{n} нових',
      es: '{n} nuevos',
      fr: '{n} nouveaux',
      de: '{n} neu',
      pt: '{n} novos',
      pl: '{n} nowych',
      sv: '{n} nya',
      zh: '{n} 条新内容',
      ar: '{n} جديد',
      hi: '{n} नए',
      ja: '新着{n}件'
    },
    insights_para: {
      en: "Nomi reads your accounts continuously. One thing at a time — here's what's worth knowing.",
      uk: 'Nomi постійно аналізує ваші рахунки. По одній справі за раз — ось що варто знати.',
      es: 'Nomi lee tus cuentas continuamente. Una cosa a la vez: esto es lo que vale la pena saber.',
      fr: 'Nomi analyse vos comptes en continu. Une chose à la fois — voici ce qui compte de savoir.',
      de: 'Nomi liest deine Konten fortlaufend. Eins nach dem anderen — das ist wissenswert.',
      pt: 'A Nomi lê as suas contas continuamente. Uma coisa de cada vez — eis o que vale a pena saber.',
      pl: 'Nomi stale analizuje Twoje konta. Po jednej rzeczy naraz — oto, co warto wiedzieć.',
      sv: 'Nomi läser dina konton kontinuerligt. En sak i taget — här är vad som är värt att veta.',
      zh: 'Nomi 持续读取您的账户。一次一件事——这是您需要了解的。',
      ar: 'تقرأ Nomi حساباتك باستمرار. أمر واحد في كل مرة — إليك ما يستحق المعرفة.',
      hi: 'Nomi आपके खातों को लगातार पढ़ता है। एक बार में एक बात — यहाँ जानने लायक बात है।',
      ja: 'Nomiはあなたの口座を継続的に分析します。一度に一つ — 知っておくべきことです。'
    },
    all_caught_up: {
      en: "You're all caught up",
      uk: 'Ви переглянули все',
      es: 'Estás al día',
      fr: 'Vous êtes à jour',
      de: 'Du bist auf dem neuesten Stand',
      pt: 'Está tudo em dia',
      pl: 'Wszystko na bieżąco',
      sv: 'Du har koll på allt',
      zh: '您已了解全部内容',
      ar: 'أنت على اطلاع بكل شيء',
      hi: 'आप पूरी तरह अपडेट हैं',
      ja: 'すべて確認済みです'
    },
    activity_title: {
      en: 'Activity',
      uk: 'Активність',
      es: 'Actividad',
      fr: 'Activité',
      de: 'Aktivität',
      pt: 'Atividade',
      pl: 'Aktywność',
      sv: 'Aktivitet',
      zh: '活动',
      ar: 'النشاط',
      hi: 'गतिविधि',
      ja: 'アクティビティ'
    },
    search: {
      en: 'Search',
      uk: 'Пошук',
      es: 'Buscar',
      fr: 'Rechercher',
      de: 'Suchen',
      pt: 'Pesquisar',
      pl: 'Szukaj',
      sv: 'Sök',
      zh: '搜索',
      ar: 'بحث',
      hi: 'खोजें',
      ja: '検索'
    },
    close_search: {
      en: 'Close search',
      uk: 'Закрити пошук',
      es: 'Cerrar búsqueda',
      fr: 'Fermer la recherche',
      de: 'Suche schließen',
      pt: 'Fechar pesquisa',
      pl: 'Zamknij wyszukiwanie',
      sv: 'Stäng sökning',
      zh: '关闭搜索',
      ar: 'إغلاق البحث',
      hi: 'खोज बंद करें',
      ja: '検索を閉じる'
    },
    search_placeholder: {
      en: 'Search transactions',
      uk: 'Пошук транзакцій',
      es: 'Buscar transacciones',
      fr: 'Rechercher des transactions',
      de: 'Buchungen durchsuchen',
      pt: 'Pesquisar transações',
      pl: 'Szukaj transakcji',
      sv: 'Sök transaktioner',
      zh: '搜索交易',
      ar: 'ابحث عن المعاملات',
      hi: 'लेन-देन खोजें',
      ja: '取引を検索'
    },
    week: {
      en: 'Week',
      uk: 'Тиждень',
      es: 'Semana',
      fr: 'Semaine',
      de: 'Woche',
      pt: 'Semana',
      pl: 'Tydzień',
      sv: 'Vecka',
      zh: '周',
      ar: 'أسبوع',
      hi: 'सप्ताह',
      ja: '週'
    },
    month: {
      en: 'Month',
      uk: 'Місяць',
      es: 'Mes',
      fr: 'Mois',
      de: 'Monat',
      pt: 'Mês',
      pl: 'Miesiąc',
      sv: 'Månad',
      zh: '月',
      ar: 'شهر',
      hi: 'महीना',
      ja: '月'
    },
    year: {
      en: 'Year',
      uk: 'Рік',
      es: 'Año',
      fr: 'Année',
      de: 'Jahr',
      pt: 'Ano',
      pl: 'Rok',
      sv: 'År',
      zh: '年',
      ar: 'سنة',
      hi: 'वर्ष',
      ja: '年'
    },
    spend_by_category: {
      en: 'Spend by category — {range}',
      uk: 'Витрати за категоріями — {range}',
      es: 'Gastos por categoría — {range}',
      fr: 'Dépenses par catégorie — {range}',
      de: 'Ausgaben nach Kategorie — {range}',
      pt: 'Gastos por categoria — {range}',
      pl: 'Wydatki wg kategorii — {range}',
      sv: 'Utgifter per kategori — {range}',
      zh: '按类别支出 — {range}',
      ar: 'الإنفاق حسب الفئة — {range}',
      hi: 'श्रेणी अनुसार खर्च — {range}',
      ja: 'カテゴリ別支出 — {range}'
    },
    range_week: {
      en: 'this week',
      uk: 'цього тижня',
      es: 'esta semana',
      fr: 'cette semaine',
      de: 'diese Woche',
      pt: 'esta semana',
      pl: 'w tym tygodniu',
      sv: 'denna vecka',
      zh: '本周',
      ar: 'هذا الأسبوع',
      hi: 'इस सप्ताह',
      ja: '今週'
    },
    range_month: {
      en: 'this month',
      uk: 'цього місяця',
      es: 'este mes',
      fr: 'ce mois',
      de: 'diesen Monat',
      pt: 'este mês',
      pl: 'w tym miesiącu',
      sv: 'denna månad',
      zh: '本月',
      ar: 'هذا الشهر',
      hi: 'इस माह',
      ja: '今月'
    },
    range_year: {
      en: 'this year',
      uk: 'цього року',
      es: 'este año',
      fr: 'cette année',
      de: 'dieses Jahr',
      pt: 'este ano',
      pl: 'w tym roku',
      sv: 'detta år',
      zh: '今年',
      ar: 'هذا العام',
      hi: 'इस वर्ष',
      ja: '今年'
    },
    results_for: {
      en: 'Results for "{q}"',
      uk: 'Результати для «{q}»',
      es: 'Resultados para "{q}"',
      fr: 'Résultats pour « {q} »',
      de: 'Ergebnisse für „{q}“',
      pt: 'Resultados para "{q}"',
      pl: 'Wyniki dla „{q}”',
      sv: 'Resultat för "{q}"',
      zh: '“{q}”的搜索结果',
      ar: 'نتائج "{q}"',
      hi: '"{q}" के परिणाम',
      ja: '「{q}」の結果'
    },
    transactions: {
      en: 'Transactions',
      uk: 'Транзакції',
      es: 'Transacciones',
      fr: 'Transactions',
      de: 'Buchungen',
      pt: 'Transações',
      pl: 'Transakcje',
      sv: 'Transaktioner',
      zh: '交易',
      ar: 'المعاملات',
      hi: 'लेन-देन',
      ja: '取引'
    },
    export: {
      en: 'Export',
      uk: 'Експорт',
      es: 'Exportar',
      fr: 'Exporter',
      de: 'Exportieren',
      pt: 'Exportar',
      pl: 'Eksportuj',
      sv: 'Exportera',
      zh: '导出',
      ar: 'تصدير',
      hi: 'निर्यात करें',
      ja: 'エクスポート'
    },
    no_match: {
      en: 'No transactions match "{q}"',
      uk: 'Немає транзакцій за запитом «{q}»',
      es: 'Ninguna transacción coincide con "{q}"',
      fr: 'Aucune transaction ne correspond à « {q} »',
      de: 'Keine Buchungen für „{q}“',
      pt: 'Nenhuma transação corresponde a "{q}"',
      pl: 'Brak transakcji pasujących do „{q}”',
      sv: 'Inga transaktioner matchar "{q}"',
      zh: '没有与“{q}”匹配的交易',
      ar: 'لا توجد معاملات مطابقة لـ "{q}"',
      hi: '"{q}" से मेल खाने वाला कोई लेन-देन नहीं',
      ja: '「{q}」に一致する取引はありません'
    },
    settings_title: {
      en: 'Settings',
      uk: 'Налаштування',
      es: 'Ajustes',
      fr: 'Réglages',
      de: 'Einstellungen',
      pt: 'Definições',
      pl: 'Ustawienia',
      sv: 'Inställningar',
      zh: '设置',
      ar: 'الإعدادات',
      hi: 'सेटिंग्स',
      ja: '設定'
    },
    account_word: {
      en: 'Account',
      uk: 'Акаунт',
      es: 'Cuenta',
      fr: 'Compte',
      de: 'Konto',
      pt: 'Conta',
      pl: 'Konto',
      sv: 'Konto',
      zh: '账户',
      ar: 'الحساب',
      hi: 'खाता',
      ja: 'アカウント'
    },
    business_plan: {
      en: 'Business plan',
      uk: 'Бізнес-план',
      es: 'Plan de negocio',
      fr: 'Offre Entreprise',
      de: 'Business-Tarif',
      pt: 'Plano empresarial',
      pl: 'Plan firmowy',
      sv: 'Företagsplan',
      zh: '企业版',
      ar: 'خطة الأعمال',
      hi: 'व्यवसाय योजना',
      ja: 'ビジネスプラン'
    },
    free_plan: {
      en: 'Free plan',
      uk: 'Безкоштовний план',
      es: 'Plan gratuito',
      fr: 'Offre gratuite',
      de: 'Kostenloser Tarif',
      pt: 'Plano gratuito',
      pl: 'Plan darmowy',
      sv: 'Gratisplan',
      zh: '免费版',
      ar: 'الخطة المجانية',
      hi: 'फ्री प्लान',
      ja: '無料プラン'
    },
    premium: {
      en: 'Premium',
      uk: 'Преміум',
      es: 'Premium',
      fr: 'Premium',
      de: 'Premium',
      pt: 'Premium',
      pl: 'Premium',
      sv: 'Premium',
      zh: '高级版',
      ar: 'بريميوم',
      hi: 'प्रीमियम',
      ja: 'プレミアム'
    },
    free: {
      en: 'Free',
      uk: 'Безкоштовно',
      es: 'Gratis',
      fr: 'Gratuit',
      de: 'Kostenlos',
      pt: 'Grátis',
      pl: 'Darmowy',
      sv: 'Gratis',
      zh: '免费',
      ar: 'مجاني',
      hi: 'मुफ़्त',
      ja: '無料'
    },
    mode_label: {
      en: 'Mode',
      uk: 'Режим',
      es: 'Modo',
      fr: 'Mode',
      de: 'Modus',
      pt: 'Modo',
      pl: 'Tryb',
      sv: 'Läge',
      zh: '模式',
      ar: 'الوضع',
      hi: 'मोड',
      ja: 'モード'
    },
    accounts_label: {
      en: 'Accounts',
      uk: 'Рахунки',
      es: 'Cuentas',
      fr: 'Comptes',
      de: 'Konten',
      pt: 'Contas',
      pl: 'Konta',
      sv: 'Konton',
      zh: '账户',
      ar: 'الحسابات',
      hi: 'खाते',
      ja: '口座'
    },
    connected_accounts: {
      en: 'Connected accounts',
      uk: "Під'єднані рахунки",
      es: 'Cuentas conectadas',
      fr: 'Comptes connectés',
      de: 'Verknüpfte Konten',
      pt: 'Contas ligadas',
      pl: 'Połączone konta',
      sv: 'Anslutna konton',
      zh: '已连接的账户',
      ar: 'الحسابات المرتبطة',
      hi: 'जुड़े हुए खाते',
      ja: '連携済みの口座'
    },
    linked_synced: {
      en: '{n} linked · all synced',
      uk: "{n} під'єднано · все синхронізовано",
      es: '{n} vinculadas · todo sincronizado',
      fr: '{n} liés · tout synchronisé',
      de: '{n} verknüpft · alles synchron',
      pt: '{n} ligadas · tudo sincronizado',
      pl: '{n} połączone · wszystko zsynchronizowane',
      sv: '{n} anslutna · allt synkat',
      zh: '已连接{n}个 · 全部同步',
      ar: '{n} مرتبط · تمت المزامنة بالكامل',
      hi: '{n} जुड़े · सभी सिंक हुए',
      ja: '{n}件連携済み・すべて同期済み'
    },
    privacy_security: {
      en: 'Privacy & security',
      uk: 'Приватність і безпека',
      es: 'Privacidad y seguridad',
      fr: 'Confidentialité et sécurité',
      de: 'Datenschutz & Sicherheit',
      pt: 'Privacidade e segurança',
      pl: 'Prywatność i bezpieczeństwo',
      sv: 'Sekretess och säkerhet',
      zh: '隐私和安全',
      ar: 'الخصوصية والأمان',
      hi: 'गोपनीयता और सुरक्षा',
      ja: 'プライバシーとセキュリティ'
    },
    hide_balances_row: {
      en: 'Hide balances',
      uk: 'Приховати баланси',
      es: 'Ocultar saldos',
      fr: 'Masquer les soldes',
      de: 'Salden ausblenden',
      pt: 'Ocultar saldos',
      pl: 'Ukryj salda',
      sv: 'Dölj saldon',
      zh: '隐藏余额',
      ar: 'إخفاء الأرصدة',
      hi: 'शेष राशि छिपाएं',
      ja: '残高を隠す'
    },
    hide_balances_desc: {
      en: 'Mask amounts on the home screen',
      uk: 'Приховувати суми на головному екрані',
      es: 'Ocultar importes en la pantalla principal',
      fr: "Masquer les montants sur l'écran d'accueil",
      de: 'Beträge auf dem Startbildschirm ausblenden',
      pt: 'Ocultar valores no ecrã principal',
      pl: 'Ukryj kwoty na ekranie głównym',
      sv: 'Dölj belopp på hemskärmen',
      zh: '在主屏幕上遮盖金额',
      ar: 'إخفاء المبالغ في الشاشة الرئيسية',
      hi: 'होम स्क्रीन पर राशियाँ छिपाएं',
      ja: 'ホーム画面の金額をマスクします'
    },
    faceid_row: {
      en: 'Face ID unlock',
      uk: 'Розблокування Face ID',
      es: 'Desbloqueo con Face ID',
      fr: 'Déverrouillage Face ID',
      de: 'Face ID Entsperrung',
      pt: 'Desbloqueio por Face ID',
      pl: 'Odblokowanie Face ID',
      sv: 'Upplåsning med Face ID',
      zh: '面容 ID 解锁',
      ar: 'فتح القفل بـ Face ID',
      hi: 'फेस आईडी अनलॉक',
      ja: 'Face IDロック解除'
    },
    faceid_desc: {
      en: 'Require Face ID to open Nomi',
      uk: 'Вимагати Face ID для відкриття Nomi',
      es: 'Requerir Face ID para abrir Nomi',
      fr: 'Exiger Face ID pour ouvrir Nomi',
      de: 'Face ID zum Öffnen von Nomi erforderlich',
      pt: 'Exigir Face ID para abrir a Nomi',
      pl: 'Wymagaj Face ID do otwarcia Nomi',
      sv: 'Kräv Face ID för att öppna Nomi',
      zh: '打开 Nomi 需要面容 ID',
      ar: 'طلب Face ID لفتح Nomi',
      hi: 'Nomi खोलने के लिए फेस आईडी आवश्यक',
      ja: 'Nomiを開くのにFace IDを要求します'
    },
    notifications_label: {
      en: 'Notifications',
      uk: 'Сповіщення',
      es: 'Notificaciones',
      fr: 'Notifications',
      de: 'Benachrichtigungen',
      pt: 'Notificações',
      pl: 'Powiadomienia',
      sv: 'Aviseringar',
      zh: '通知',
      ar: 'الإشعارات',
      hi: 'सूचनाएं',
      ja: '通知'
    },
    weekly_summary_row: {
      en: 'Weekly summary',
      uk: 'Щотижневий підсумок',
      es: 'Resumen semanal',
      fr: 'Résumé hebdomadaire',
      de: 'Wöchentliche Zusammenfassung',
      pt: 'Resumo semanal',
      pl: 'Podsumowanie tygodniowe',
      sv: 'Veckosammanfattning',
      zh: '每周摘要',
      ar: 'ملخص أسبوعي',
      hi: 'साप्ताहिक सारांश',
      ja: '週次サマリー'
    },
    weekly_summary_desc: {
      en: 'A short recap every Monday',
      uk: 'Короткий підсумок щопонеділка',
      es: 'Un breve resumen cada lunes',
      fr: 'Un bref résumé chaque lundi',
      de: 'Eine kurze Zusammenfassung jeden Montag',
      pt: 'Um resumo curto todas as segundas',
      pl: 'Krótkie podsumowanie w każdy poniedziałek',
      sv: 'En kort sammanfattning varje måndag',
      zh: '每周一简短回顾',
      ar: 'ملخص قصير كل يوم اثنين',
      hi: 'हर सोमवार एक संक्षिप्त सारांश',
      ja: '毎週月曜日に簡単なまとめをお届けします'
    },
    realtime_row: {
      en: 'Real-time insights',
      uk: 'Аналітика в реальному часі',
      es: 'Análisis en tiempo real',
      fr: 'Analyses en temps réel',
      de: 'Echtzeit-Einblicke',
      pt: 'Análises em tempo real',
      pl: 'Analizy w czasie rzeczywistym',
      sv: 'Realtidsinsikter',
      zh: '实时洞察',
      ar: 'رؤى فورية',
      hi: 'रीयल-टाइम इनसाइट्स',
      ja: 'リアルタイムインサイト'
    },
    realtime_desc: {
      en: 'As soon as something changes',
      uk: 'Одразу, як щось змінюється',
      es: 'En cuanto algo cambie',
      fr: 'Dès qu\'un changement survient',
      de: 'Sobald sich etwas ändert',
      pt: 'Assim que algo mudar',
      pl: 'Gdy tylko coś się zmieni',
      sv: 'Så snart något ändras',
      zh: '一有变化即刻提醒',
      ar: 'بمجرد حدوث أي تغيير',
      hi: 'जैसे ही कुछ बदले',
      ja: '何か変化があればすぐに'
    },
    preferences_label: {
      en: 'Preferences',
      uk: 'Уподобання',
      es: 'Preferencias',
      fr: 'Préférences',
      de: 'Präferenzen',
      pt: 'Preferências',
      pl: 'Preferencje',
      sv: 'Inställningar',
      zh: '偏好设置',
      ar: 'التفضيلات',
      hi: 'प्राथमिकताएं',
      ja: '環境設定'
    },
    language_row: {
      en: 'Language',
      uk: 'Мова',
      es: 'Idioma',
      fr: 'Langue',
      de: 'Sprache',
      pt: 'Idioma',
      pl: 'Język',
      sv: 'Språk',
      zh: '语言',
      ar: 'اللغة',
      hi: 'भाषा',
      ja: '言語'
    },
    language_desc: {
      en: 'App display language',
      uk: 'Мова інтерфейсу застосунку',
      es: 'Idioma de visualización de la app',
      fr: "Langue d'affichage de l'app",
      de: 'Anzeigesprache der App',
      pt: 'Idioma de exibição da app',
      pl: 'Język wyświetlania aplikacji',
      sv: 'Appens visningsspråk',
      zh: '应用显示语言',
      ar: 'لغة عرض التطبيق',
      hi: 'ऐप प्रदर्शन भाषा',
      ja: 'アプリの表示言語'
    },
    dark_mode_row: {
      en: 'Dark mode',
      uk: 'Темна тема',
      es: 'Modo oscuro',
      fr: 'Mode sombre',
      de: 'Dunkelmodus',
      pt: 'Modo escuro',
      pl: 'Tryb ciemny',
      sv: 'Mörkt läge',
      zh: '深色模式',
      ar: 'الوضع الداكن',
      hi: 'डार्क मोड',
      ja: 'ダークモード'
    },
    dark_mode_desc: {
      en: 'Use a dark theme throughout Nomi',
      uk: 'Використовувати темну тему в Nomi',
      es: 'Usar un tema oscuro en toda la app',
      fr: 'Utiliser un thème sombre dans Nomi',
      de: 'Dunkles Design in ganz Nomi verwenden',
      pt: 'Usar um tema escuro em toda a Nomi',
      pl: 'Używaj ciemnego motywu w całej aplikacji Nomi',
      sv: 'Använd ett mörkt tema i hela Nomi',
      zh: '在整个 Nomi 中使用深色主题',
      ar: 'استخدام مظهر داكن في Nomi',
      hi: 'पूरे Nomi में डार्क थीम उपयोग करें',
      ja: 'Nomi全体でダークテーマを使用します'
    },
    reduced_motion_row: {
      en: 'Reduced motion',
      uk: 'Зменшення руху',
      es: 'Movimiento reducido',
      fr: 'Mouvement réduit',
      de: 'Reduzierte Bewegung',
      pt: 'Movimento reduzido',
      pl: 'Ograniczony ruch',
      sv: 'Reducerad rörelse',
      zh: '减弱动态效果',
      ar: 'تقليل الحركة',
      hi: 'गति में कमी',
      ja: 'モーションを減らす'
    },
    reduced_motion_desc: {
      en: 'Turn off animations and transitions',
      uk: 'Вимкнути анімації та переходи',
      es: 'Desactivar animaciones y transiciones',
      fr: 'Désactiver les animations et transitions',
      de: 'Animationen und Übergänge ausschalten',
      pt: 'Desativar animações e transições',
      pl: 'Wyłącz animacje i przejścia',
      sv: 'Stäng av animationer och övergångar',
      zh: '关闭动画和过渡效果',
      ar: 'إيقاف الرسوم المتحركة والانتقالات',
      hi: 'एनिमेशन और ट्रांज़िशन बंद करें',
      ja: 'アニメーションとトランジションをオフにします'
    },
    upgrade_title: {
      en: 'Unlimited insights',
      uk: 'Необмежена аналітика',
      es: 'Análisis ilimitados',
      fr: 'Analyses illimitées',
      de: 'Unbegrenzte Einblicke',
      pt: 'Análises ilimitadas',
      pl: 'Nieograniczone analizy',
      sv: 'Obegränsade insikter',
      zh: '无限洞察',
      ar: 'رؤى غير محدودة',
      hi: 'असीमित इनसाइट्स',
      ja: '無制限のインサイト'
    },
    upgrade_desc: {
      en: 'Go Premium for real-time insights, unlimited accounts, and exportable reports.',
      uk: 'Перейдіть на Преміум: аналітика в реальному часі, необмежена кількість рахунків і звіти на експорт.',
      es: 'Hazte Premium para análisis en tiempo real, cuentas ilimitadas e informes exportables.',
      fr: 'Passez à Premium pour des analyses en temps réel, des comptes illimités et des rapports exportables.',
      de: 'Hol dir Premium für Echtzeit-Einblicke, unbegrenzte Konten und exportierbare Berichte.',
      pt: 'Torne-se Premium para análises em tempo real, contas ilimitadas e relatórios exportáveis.',
      pl: 'Przejdź na Premium — analizy w czasie rzeczywistym, nielimitowane konta i eksport raportów.',
      sv: 'Uppgradera till Premium för realtidsinsikter, obegränsade konton och exporterbara rapporter.',
      zh: '升级至高级版，享实时洞察、无限账户和可导出报告。',
      ar: 'اشترك في بريميوم للحصول على رؤى فورية وحسابات غير محدودة وتقارير قابلة للتصدير.',
      hi: 'रीयल-टाइम इनसाइट्स, असीमित खाते और एक्सपोर्ट योग्य रिपोर्ट के लिए प्रीमियम लें।',
      ja: 'プレミアムでリアルタイムインサイト、無制限の口座、エクスポート可能なレポートを。'
    },
    upgrade_btn: {
      en: 'Upgrade — 79 kr/mo',
      uk: 'Оновити — 79 kr/міс',
      es: 'Mejorar — 79 kr/mes',
      fr: 'Mettre à niveau — 79 kr/mois',
      de: 'Upgrade — 79 kr/Monat',
      pt: 'Atualizar — 79 kr/mês',
      pl: 'Ulepsz — 79 kr/mies.',
      sv: 'Uppgradera — 79 kr/mån',
      zh: '升级 — 79克朗/月',
      ar: 'ترقية — 79 كرونة/شهريًا',
      hi: 'अपग्रेड करें — 79 kr/माह',
      ja: 'アップグレード — 79kr/月'
    },
    sign_out: {
      en: 'Sign out',
      uk: 'Вийти',
      es: 'Cerrar sesión',
      fr: 'Se déconnecter',
      de: 'Abmelden',
      pt: 'Terminar sessão',
      pl: 'Wyloguj się',
      sv: 'Logga ut',
      zh: '退出登录',
      ar: 'تسجيل الخروج',
      hi: 'साइन आउट करें',
      ja: 'サインアウト'
    },
    connected_accounts_title: {
      en: 'Connected accounts',
      uk: "Під'єднані рахунки",
      es: 'Cuentas conectadas',
      fr: 'Comptes connectés',
      de: 'Verknüpfte Konten',
      pt: 'Contas ligadas',
      pl: 'Połączone konta',
      sv: 'Anslutna konton',
      zh: '已连接的账户',
      ar: 'الحسابات المرتبطة',
      hi: 'जुड़े हुए खाते',
      ja: '連携済みの口座'
    },
    linked_updated: {
      en: '{n} linked · updated 9 Jul',
      uk: "{n} під'єднано · оновлено 9 лип.",
      es: '{n} vinculadas · actualizado el 9 jul',
      fr: '{n} liés · mis à jour le 9 juil.',
      de: '{n} verknüpft · aktualisiert am 9. Juli',
      pt: '{n} ligadas · atualizado a 9 jul',
      pl: '{n} połączone · zaktualizowano 9 lip',
      sv: '{n} anslutna · uppdaterad 9 juli',
      zh: '已连接{n}个 · 7月9日更新',
      ar: '{n} مرتبط · تم التحديث في 9 يوليو',
      hi: '{n} जुड़े · 9 जुलाई को अपडेट हुआ',
      ja: '{n}件連携済み・7月9日更新'
    },
    synced: {
      en: 'Synced',
      uk: 'Синхронізовано',
      es: 'Sincronizado',
      fr: 'Synchronisé',
      de: 'Synchronisiert',
      pt: 'Sincronizado',
      pl: 'Zsynchronizowano',
      sv: 'Synkad',
      zh: '已同步',
      ar: 'تمت المزامنة',
      hi: 'सिंक हुआ',
      ja: '同期済み'
    },
    connect_account_btn: {
      en: 'Connect an account',
      uk: "Під'єднати рахунок",
      es: 'Conectar una cuenta',
      fr: 'Connecter un compte',
      de: 'Konto verknüpfen',
      pt: 'Ligar uma conta',
      pl: 'Połącz konto',
      sv: 'Anslut ett konto',
      zh: '连接账户',
      ar: 'ربط حساب',
      hi: 'खाता जोड़ें',
      ja: '口座を連携する'
    },
    language_sheet_title: {
      en: 'Language',
      uk: 'Мова',
      es: 'Idioma',
      fr: 'Langue',
      de: 'Sprache',
      pt: 'Idioma',
      pl: 'Język',
      sv: 'Språk',
      zh: '语言',
      ar: 'اللغة',
      hi: 'भाषा',
      ja: '言語'
    },
    language_sheet_desc: {
      en: 'Choose the language Nomi displays.',
      uk: 'Оберіть мову інтерфейсу Nomi.',
      es: 'Elige el idioma en que se muestra Nomi.',
      fr: "Choisissez la langue d'affichage de Nomi.",
      de: 'Wähle die Sprache, in der Nomi angezeigt wird.',
      pt: 'Escolha o idioma em que a Nomi é apresentada.',
      pl: 'Wybierz język wyświetlania aplikacji Nomi.',
      sv: 'Välj språket Nomi visas på.',
      zh: '选择 Nomi 的显示语言。',
      ar: 'اختر اللغة التي تعرض بها Nomi.',
      hi: 'वह भाषा चुनें जिसमें Nomi दिखे।',
      ja: 'Nomiを表示する言語を選択してください。'
    },
    close: {
      en: 'Close',
      uk: 'Закрити',
      es: 'Cerrar',
      fr: 'Fermer',
      de: 'Schließen',
      pt: 'Fechar',
      pl: 'Zamknij',
      sv: 'Stäng',
      zh: '关闭',
      ar: 'إغلاق',
      hi: 'बंद करें',
      ja: '閉じる'
    },
    add_txn_title: {
      en: 'Add transaction',
      uk: 'Додати транзакцію',
      es: 'Añadir transacción',
      fr: 'Ajouter une transaction',
      de: 'Buchung hinzufügen',
      pt: 'Adicionar transação',
      pl: 'Dodaj transakcję',
      sv: 'Lägg till transaktion',
      zh: '添加交易',
      ar: 'إضافة معاملة',
      hi: 'लेन-देन जोड़ें',
      ja: '取引を追加'
    },
    expense: {
      en: 'Expense',
      uk: 'Витрата',
      es: 'Gasto',
      fr: 'Dépense',
      de: 'Ausgabe',
      pt: 'Despesa',
      pl: 'Wydatek',
      sv: 'Utgift',
      zh: '支出',
      ar: 'مصروف',
      hi: 'व्यय',
      ja: '支出'
    },
    income: {
      en: 'Income',
      uk: 'Дохід',
      es: 'Ingreso',
      fr: 'Revenu',
      de: 'Einnahme',
      pt: 'Receita',
      pl: 'Przychód',
      sv: 'Inkomst',
      zh: '收入',
      ar: 'دخل',
      hi: 'आय',
      ja: '収入'
    },
    merchant_label: {
      en: 'Merchant / description',
      uk: 'Продавець / опис',
      es: 'Comercio / descripción',
      fr: 'Commerçant / description',
      de: 'Händler / Beschreibung',
      pt: 'Comerciante / descrição',
      pl: 'Sprzedawca / opis',
      sv: 'Handlare / beskrivning',
      zh: '商家 / 描述',
      ar: 'التاجر / الوصف',
      hi: 'व्यापारी / विवरण',
      ja: '加盟店 / 説明'
    },
    merchant_ph_expense: {
      en: 'e.g. ICA Maxi',
      uk: 'напр., ICA Maxi',
      es: 'p. ej. ICA Maxi',
      fr: 'ex. ICA Maxi',
      de: 'z. B. ICA Maxi',
      pt: 'ex. ICA Maxi',
      pl: 'np. ICA Maxi',
      sv: 't.ex. ICA Maxi',
      zh: '例如 ICA Maxi',
      ar: 'مثال: ICA Maxi',
      hi: 'जैसे ICA Maxi',
      ja: '例：ICA Maxi'
    },
    merchant_ph_income: {
      en: 'e.g. Client invoice',
      uk: 'напр., рахунок клієнту',
      es: 'p. ej. Factura de cliente',
      fr: 'ex. Facture client',
      de: 'z. B. Kundenrechnung',
      pt: 'ex. Fatura de cliente',
      pl: 'np. Faktura dla klienta',
      sv: 't.ex. Kundfaktura',
      zh: '例如客户发票',
      ar: 'مثال: فاتورة عميل',
      hi: 'जैसे क्लाइंट इनवॉइस',
      ja: '例：クライアント請求書'
    },
    amount_label: {
      en: 'Amount',
      uk: 'Сума',
      es: 'Importe',
      fr: 'Montant',
      de: 'Betrag',
      pt: 'Valor',
      pl: 'Kwota',
      sv: 'Belopp',
      zh: '金额',
      ar: 'المبلغ',
      hi: 'राशि',
      ja: '金額'
    },
    category_label: {
      en: 'Category',
      uk: 'Категорія',
      es: 'Categoría',
      fr: 'Catégorie',
      de: 'Kategorie',
      pt: 'Categoria',
      pl: 'Kategoria',
      sv: 'Kategori',
      zh: '类别',
      ar: 'الفئة',
      hi: 'श्रेणी',
      ja: 'カテゴリ'
    },
    cat_groceries: {
      en: 'Groceries',
      uk: 'Продукти',
      es: 'Supermercado',
      fr: 'Courses',
      de: 'Lebensmittel',
      pt: 'Compras',
      pl: 'Zakupy spożywcze',
      sv: 'Livsmedel',
      zh: '杂货',
      ar: 'البقالة',
      hi: 'किराना',
      ja: '食料品'
    },
    cat_transport: {
      en: 'Transport',
      uk: 'Транспорт',
      es: 'Transporte',
      fr: 'Transport',
      de: 'Transport',
      pt: 'Transporte',
      pl: 'Transport',
      sv: 'Transport',
      zh: '交通',
      ar: 'المواصلات',
      hi: 'परिवहन',
      ja: '交通'
    },
    cat_subscriptions: {
      en: 'Subscriptions',
      uk: 'Підписки',
      es: 'Suscripciones',
      fr: 'Abonnements',
      de: 'Abonnements',
      pt: 'Subscrições',
      pl: 'Subskrypcje',
      sv: 'Prenumerationer',
      zh: '订阅',
      ar: 'الاشتراكات',
      hi: 'सदस्यताएं',
      ja: 'サブスクリプション'
    },
    cat_coffee: {
      en: 'Coffee & eating out',
      uk: 'Кава та кафе',
      es: 'Café y restaurantes',
      fr: 'Café et restaurants',
      de: 'Kaffee & Restaurants',
      pt: 'Café e restaurantes',
      pl: 'Kawa i restauracje',
      sv: 'Fika och restaurang',
      zh: '咖啡与外食',
      ar: 'القهوة والمطاعم',
      hi: 'कॉफ़ी और बाहर खाना',
      ja: 'コーヒー・外食'
    },
    cat_other: {
      en: 'Other',
      uk: 'Інше',
      es: 'Otros',
      fr: 'Autre',
      de: 'Sonstiges',
      pt: 'Outros',
      pl: 'Inne',
      sv: 'Övrigt',
      zh: '其他',
      ar: 'أخرى',
      hi: 'अन्य',
      ja: 'その他'
    },
    add_txn_btn: {
      en: 'Add transaction',
      uk: 'Додати транзакцію',
      es: 'Añadir transacción',
      fr: 'Ajouter une transaction',
      de: 'Buchung hinzufügen',
      pt: 'Adicionar transação',
      pl: 'Dodaj transakcję',
      sv: 'Lägg till transaktion',
      zh: '添加交易',
      ar: 'إضافة معاملة',
      hi: 'लेन-देन जोड़ें',
      ja: '取引を追加'
    },
    onboard_title: {
      en: 'How will you use Nomi?',
      uk: 'Як ви користуватиметеся Nomi?',
      es: '¿Cómo usarás Nomi?',
      fr: 'Comment allez-vous utiliser Nomi ?',
      de: 'Wie wirst du Nomi nutzen?',
      pt: 'Como vai usar a Nomi?',
      pl: 'Jak będziesz korzystać z Nomi?',
      sv: 'Hur kommer du använda Nomi?',
      zh: '您将如何使用 Nomi？',
      ar: 'كيف ستستخدم Nomi؟',
      hi: 'आप Nomi का उपयोग कैसे करेंगे?',
      ja: 'Nomiをどう使いますか？'
    },
    onboard_sub: {
      en: "One app, two modes. You can switch anytime — the insight engine adapts.",
      uk: 'Один застосунок, два режими. Перемикайтеся будь-коли — аналітика підлаштується.',
      es: 'Una app, dos modos. Puedes cambiar en cualquier momento — el motor de análisis se adapta.',
      fr: 'Une appli, deux modes. Changez à tout moment — le moteur d\'analyse s\'adapte.',
      de: 'Eine App, zwei Modi. Jederzeit wechselbar — die Analyse-Engine passt sich an.',
      pt: 'Uma app, dois modos. Pode mudar a qualquer momento — o motor de análise adapta-se.',
      pl: 'Jedna aplikacja, dwa tryby. Możesz przełączać w każdej chwili — silnik analiz się dostosuje.',
      sv: 'En app, två lägen. Byt när som helst — insiktsmotorn anpassar sig.',
      zh: '一个应用，两种模式。随时可切换——洞察引擎会自动适配。',
      ar: 'تطبيق واحد، وضعان. يمكنك التبديل في أي وقت — محرك الرؤى يتكيف.',
      hi: 'एक ऐप, दो मोड। कभी भी बदलें — इनसाइट इंजन अनुकूल हो जाता है।',
      ja: '1つのアプリ、2つのモード。いつでも切り替え可能 — インサイトエンジンが適応します。'
    },
    onboard_personal_title: {
      en: 'Personal',
      uk: 'Особисте',
      es: 'Personal',
      fr: 'Personnel',
      de: 'Privat',
      pt: 'Pessoal',
      pl: 'Osobiste',
      sv: 'Privat',
      zh: '个人',
      ar: 'شخصي',
      hi: 'व्यक्तिगत',
      ja: '個人'
    },
    onboard_personal_desc: {
      en: 'Track spending and save without the upkeep.',
      uk: 'Відстежуйте витрати та заощаджуйте без зайвих клопотів.',
      es: 'Controla tus gastos y ahorra sin esfuerzo.',
      fr: 'Suivez vos dépenses et épargnez sans effort.',
      de: 'Ausgaben verfolgen und sparen — ganz ohne Aufwand.',
      pt: 'Acompanhe gastos e poupe sem esforço.',
      pl: 'Śledź wydatki i oszczędzaj bez wysiłku.',
      sv: 'Följ utgifter och spara utan krångel.',
      zh: '轻松追踪支出并储蓄。',
      ar: 'تتبع إنفاقك ووفّر دون عناء.',
      hi: 'बिना झंझट खर्च ट्रैक करें और बचत करें।',
      ja: '手間なく支出を管理し、貯蓄できます。'
    },
    onboard_business_title: {
      en: 'Business',
      uk: 'Бізнес',
      es: 'Negocio',
      fr: 'Entreprise',
      de: 'Business',
      pt: 'Empresa',
      pl: 'Firma',
      sv: 'Företag',
      zh: '企业',
      ar: 'الأعمال',
      hi: 'व्यवसाय',
      ja: 'ビジネス'
    },
    onboard_business_desc: {
      en: 'Cash flow, spend trends, and simple reports.',
      uk: 'Грошовий потік, тренди витрат і прості звіти.',
      es: 'Flujo de caja, tendencias de gasto e informes sencillos.',
      fr: 'Trésorerie, tendances de dépenses et rapports simples.',
      de: 'Cashflow, Ausgabentrends und einfache Berichte.',
      pt: 'Fluxo de caixa, tendências de gastos e relatórios simples.',
      pl: 'Przepływy pieniężne, trendy wydatków i proste raporty.',
      sv: 'Kassaflöde, utgiftstrender och enkla rapporter.',
      zh: '现金流、支出趋势和简易报告。',
      ar: 'التدفق النقدي، اتجاهات الإنفاق، وتقارير بسيطة.',
      hi: 'नकदी प्रवाह, खर्च रुझान और सरल रिपोर्ट।',
      ja: 'キャッシュフロー、支出トレンド、シンプルなレポート。'
    },
    continue_btn: {
      en: 'Continue',
      uk: 'Продовжити',
      es: 'Continuar',
      fr: 'Continuer',
      de: 'Weiter',
      pt: 'Continuar',
      pl: 'Kontynuuj',
      sv: 'Fortsätt',
      zh: '继续',
      ar: 'متابعة',
      hi: 'जारी रखें',
      ja: '続ける'
    },
    onboard_footer: {
      en: 'Bank-grade encryption · You can connect accounts next',
      uk: 'Банківське шифрування · Далі можна підключити рахунки',
      es: 'Cifrado de nivel bancario · A continuación puedes conectar cuentas',
      fr: 'Chiffrement de niveau bancaire · Vous pourrez connecter vos comptes ensuite',
      de: 'Bankentaugliche Verschlüsselung · Als Nächstes kannst du Konten verknüpfen',
      pt: 'Encriptação de nível bancário · A seguir pode ligar contas',
      pl: 'Szyfrowanie na poziomie bankowym · Dalej możesz połączyć konta',
      sv: 'Bankgrad kryptering · Du kan ansluta konton härnäst',
      zh: '银行级加密 · 接下来可以连接账户',
      ar: 'تشفير بمستوى بنكي · يمكنك ربط الحسابات بعد ذلك',
      hi: 'बैंक-स्तरीय एन्क्रिप्शन · अगला कदम खाते जोड़ना है',
      ja: '銀行レベルの暗号化 · 次に口座を連携できます'
    },
    /* ---- intro / welcome onboarding (before mode chooser) ---- */
    intro_skip: {
      en: 'Skip',
      uk: 'Пропустити',
      es: 'Omitir',
      fr: 'Passer',
      de: 'Überspringen',
      pt: 'Saltar',
      pl: 'Pomiń',
      sv: 'Hoppa över',
      zh: '跳过',
      ar: 'تخطي',
      hi: 'छोड़ें',
      ja: 'スキップ'
    },
    intro_next: {
      en: 'Next',
      uk: 'Далі',
      es: 'Siguiente',
      fr: 'Suivant',
      de: 'Weiter',
      pt: 'Seguinte',
      pl: 'Dalej',
      sv: 'Nästa',
      zh: '下一步',
      ar: 'التالي',
      hi: 'आगे',
      ja: '次へ'
    },
    intro_get_started: {
      en: 'Get started',
      uk: 'Розпочати',
      es: 'Empezar',
      fr: 'Commencer',
      de: 'Los geht\'s',
      pt: 'Começar',
      pl: 'Rozpocznij',
      sv: 'Kom igång',
      zh: '开始使用',
      ar: 'ابدأ',
      hi: 'शुरू करें',
      ja: 'はじめる'
    },
    signin_title: {
      en: 'Welcome back',
      uk: 'З поверненням',
      es: 'Bienvenido de nuevo',
      fr: 'Content de vous revoir',
      de: 'Willkommen zurück',
      pt: 'Bem-vindo de volta',
      pl: 'Witaj ponownie',
      sv: 'Välkommen tillbaka',
      zh: '欢迎回来',
      ar: 'مرحبًا بعودتك',
      hi: 'वापसी पर स्वागत है',
      ja: 'おかえりなさい'
    },
    signin_sub: {
      en: 'Sign in with your email and password',
      uk: 'Увійдіть за допомогою електронної пошти та пароля',
      es: 'Inicia sesión con tu correo y contraseña',
      fr: 'Connectez-vous avec votre e-mail et mot de passe',
      de: 'Melde dich mit E-Mail und Passwort an',
      pt: 'Inicie sessão com o seu e-mail e palavra-passe',
      pl: 'Zaloguj się przy użyciu e-maila i hasła',
      sv: 'Logga in med din e-post och ditt lösenord',
      zh: '使用您的邮箱和密码登录',
      ar: 'سجّل الدخول ببريدك الإلكتروني وكلمة المرور',
      hi: 'अपने ईमेल और पासवर्ड से साइन इन करें',
      ja: 'メールアドレスとパスワードでサインイン'
    },
    signin_btn: {
      en: 'Sign in',
      uk: 'Увійти',
      es: 'Iniciar sesión',
      fr: 'Se connecter',
      de: 'Anmelden',
      pt: 'Iniciar sessão',
      pl: 'Zaloguj się',
      sv: 'Logga in',
      zh: '登录',
      ar: 'تسجيل الدخول',
      hi: 'साइन इन करें',
      ja: 'サインイン'
    },
    toggle_to_signin: {
      en: 'Already have an account? Sign in',
      uk: 'Вже є обліковий запис? Увійти',
      es: '¿Ya tienes una cuenta? Inicia sesión',
      fr: 'Vous avez déjà un compte ? Connectez-vous',
      de: 'Schon ein Konto? Anmelden',
      pt: 'Já tem uma conta? Inicie sessão',
      pl: 'Masz już konto? Zaloguj się',
      sv: 'Har du redan ett konto? Logga in',
      zh: '已有账户？登录',
      ar: 'لديك حساب بالفعل؟ سجّل الدخول',
      hi: 'पहले से खाता है? साइन इन करें',
      ja: 'すでにアカウントをお持ちですか？サインイン'
    },
    toggle_to_register: {
      en: 'New here? Create an account',
      uk: 'Вперше тут? Створіть акаунт',
      es: '¿Nuevo aquí? Crea una cuenta',
      fr: 'Nouveau ici ? Créez un compte',
      de: 'Neu hier? Konto erstellen',
      pt: 'Novo por aqui? Crie uma conta',
      pl: 'Nowy tutaj? Utwórz konto',
      sv: 'Ny här? Skapa ett konto',
      zh: '新用户？创建账户',
      ar: 'جديد هنا؟ أنشئ حسابًا',
      hi: 'यहाँ नए हैं? खाता बनाएं',
      ja: '初めての方はアカウント作成'
    },
    signin_err_invalid: {
      en: 'No account matches that email and password',
      uk: 'Немає акаунта з такою поштою та паролем',
      es: 'No hay ninguna cuenta con ese correo y contraseña',
      fr: 'Aucun compte ne correspond à cet e-mail et ce mot de passe',
      de: 'Kein Konto passt zu dieser E-Mail und diesem Passwort',
      pt: 'Nenhuma conta corresponde a esse e-mail e palavra-passe',
      pl: 'Brak konta pasującego do tego e-maila i hasła',
      sv: 'Inget konto matchar den e-posten och lösenordet',
      zh: '没有与该邮箱和密码匹配的账户',
      ar: 'لا يوجد حساب يطابق هذا البريد وكلمة المرور',
      hi: 'उस ईमेल और पासवर्ड से कोई खाता नहीं मिला',
      ja: 'そのメールとパスワードに一致するアカウントがありません'
    },
    premium_sheet_title: {
      en: 'Upgrade to Premium',
      uk: 'Перейти на Premium',
      es: 'Mejorar a Premium',
      fr: 'Passer à Premium',
      de: 'Auf Premium upgraden',
      pt: 'Atualizar para Premium',
      pl: 'Przejdź na Premium',
      sv: 'Uppgradera till Premium',
      zh: '升级至高级版',
      ar: 'الترقية إلى بريميوم',
      hi: 'प्रीमियम में अपग्रेड करें',
      ja: 'プレミアムにアップグレード'
    },
    premium_sheet_sub: {
      en: 'Unlock deeper insight and unlimited accounts',
      uk: 'Розблокуйте глибші інсайти та необмежену кількість рахунків',
      es: 'Desbloquea información más profunda y cuentas ilimitadas',
      fr: 'Débloquez des analyses plus poussées et des comptes illimités',
      de: 'Schalte tiefere Einblicke und unbegrenzte Konten frei',
      pt: 'Desbloqueie análises mais profundas e contas ilimitadas',
      pl: 'Odblokuj głębsze analizy i nieograniczoną liczbę kont',
      sv: 'Lås upp djupare insikter och obegränsat med konton',
      zh: '解锁更深入的洞察与无限账户',
      ar: 'افتح رؤى أعمق وحسابات غير محدودة',
      hi: 'गहरी इनसाइट और असीमित खाते अनलॉक करें',
      ja: 'より深いインサイトと無制限のアカウントを解放'
    },
    premium_feature_1: {
      en: 'Unlimited connected accounts',
      uk: 'Необмежена кількість підключених рахунків',
      es: 'Cuentas conectadas ilimitadas',
      fr: 'Comptes connectés illimités',
      de: 'Unbegrenzte verknüpfte Konten',
      pt: 'Contas ligadas ilimitadas',
      pl: 'Nieograniczona liczba połączonych kont',
      sv: 'Obegränsat antal anslutna konton',
      zh: '无限连接账户',
      ar: 'حسابات متصلة غير محدودة',
      hi: 'असीमित जुड़े हुए खाते',
      ja: '接続アカウント数無制限'
    },
    premium_feature_2: {
      en: 'Daily insight refresh',
      uk: 'Щоденне оновлення інсайтів',
      es: 'Actualización diaria de información',
      fr: 'Analyses actualisées chaque jour',
      de: 'Tägliche Einblick-Aktualisierung',
      pt: 'Atualização diária de informações',
      pl: 'Codzienna aktualizacja analiz',
      sv: 'Daglig insiktsuppdatering',
      zh: '每日洞察更新',
      ar: 'تحديث يومي للرؤى',
      hi: 'दैनिक इनसाइट अपडेट',
      ja: '毎日インサイトを更新'
    },
    premium_feature_3: {
      en: 'Export reports to PDF & CSV',
      uk: 'Експорт звітів у PDF і CSV',
      es: 'Exporta informes a PDF y CSV',
      fr: 'Exportez les rapports en PDF et CSV',
      de: 'Berichte als PDF & CSV exportieren',
      pt: 'Exporte relatórios para PDF e CSV',
      pl: 'Eksportuj raporty do PDF i CSV',
      sv: 'Exportera rapporter till PDF och CSV',
      zh: '导出报告为 PDF 和 CSV',
      ar: 'تصدير التقارير بصيغة PDF وCSV',
      hi: 'रिपोर्ट PDF और CSV में निर्यात करें',
      ja: 'レポートをPDF・CSVで書き出し'
    },
    premium_price: {
      en: '79 kr / month',
      uk: '79 kr / місяць',
      es: '79 kr al mes',
      fr: '79 kr / mois',
      de: '79 kr / Monat',
      pt: '79 kr / mês',
      pl: '79 kr / miesiąc',
      sv: '79 kr / månad',
      zh: '每月 79 克朗',
      ar: '79 كرونة / شهر',
      hi: '79 kr / माह',
      ja: '月額79クローナ'
    },
    premium_upgrade_btn: {
      en: 'Upgrade now',
      uk: 'Перейти зараз',
      es: 'Mejorar ahora',
      fr: 'Passer maintenant',
      de: 'Jetzt upgraden',
      pt: 'Atualizar agora',
      pl: 'Przejdź teraz',
      sv: 'Uppgradera nu',
      zh: '立即升级',
      ar: 'الترقية الآن',
      hi: 'अभी अपग्रेड करें',
      ja: '今すぐアップグレード'
    },
    premium_maybe_later: {
      en: 'Maybe later',
      uk: 'Можливо, пізніше',
      es: 'Quizás más tarde',
      fr: 'Peut-être plus tard',
      de: 'Vielleicht später',
      pt: 'Talvez mais tarde',
      pl: 'Może później',
      sv: 'Kanske senare',
      zh: '暂时不用',
      ar: 'ربما لاحقًا',
      hi: 'शायद बाद में',
      ja: 'また今度'
    },
    toast_upgrade_done: {
      en: 'Welcome to Premium!',
      uk: 'Ласкаво просимо до Premium!',
      es: '¡Bienvenido a Premium!',
      fr: 'Bienvenue dans Premium !',
      de: 'Willkommen bei Premium!',
      pt: 'Bem-vindo ao Premium!',
      pl: 'Witaj w Premium!',
      sv: 'Välkommen till Premium!',
      zh: '欢迎使用高级版！',
      ar: 'مرحبًا بك في بريميوم!',
      hi: 'प्रीमियम में स्वागत है!',
      ja: 'プレミアムへようこそ！'
    },
    txn_detail_title: {
      en: 'Transaction',
      uk: 'Транзакція',
      es: 'Transacción',
      fr: 'Transaction',
      de: 'Transaktion',
      pt: 'Transação',
      pl: 'Transakcja',
      sv: 'Transaktion',
      zh: '交易',
      ar: 'المعاملة',
      hi: 'लेन-देन',
      ja: '取引'
    },
    txn_detail_status: {
      en: 'Completed',
      uk: 'Завершено',
      es: 'Completada',
      fr: 'Terminée',
      de: 'Abgeschlossen',
      pt: 'Concluída',
      pl: 'Zakończona',
      sv: 'Slutförd',
      zh: '已完成',
      ar: 'مكتملة',
      hi: 'पूर्ण',
      ja: '完了'
    },
    txn_detail_category: {
      en: 'Category',
      uk: 'Категорія',
      es: 'Categoría',
      fr: 'Catégorie',
      de: 'Kategorie',
      pt: 'Categoria',
      pl: 'Kategoria',
      sv: 'Kategori',
      zh: '类别',
      ar: 'الفئة',
      hi: 'श्रेणी',
      ja: 'カテゴリー'
    },
    txn_detail_date: {
      en: 'Date',
      uk: 'Дата',
      es: 'Fecha',
      fr: 'Date',
      de: 'Datum',
      pt: 'Data',
      pl: 'Data',
      sv: 'Datum',
      zh: '日期',
      ar: 'التاريخ',
      hi: 'तारीख़',
      ja: '日付'
    },
    txn_detail_account: {
      en: 'Account',
      uk: 'Рахунок',
      es: 'Cuenta',
      fr: 'Compte',
      de: 'Konto',
      pt: 'Conta',
      pl: 'Konto',
      sv: 'Konto',
      zh: '账户',
      ar: 'الحساب',
      hi: 'खाता',
      ja: '口座'
    },
    txn_detail_ref: {
      en: 'Reference',
      uk: 'Референс',
      es: 'Referencia',
      fr: 'Référence',
      de: 'Referenz',
      pt: 'Referência',
      pl: 'Numer referencyjny',
      sv: 'Referens',
      zh: '参考号',
      ar: 'المرجع',
      hi: 'संदर्भ',
      ja: '参照番号'
    },
    profile_edit_title: {
      en: 'Edit profile',
      uk: 'Редагувати профіль',
      es: 'Editar perfil',
      fr: 'Modifier le profil',
      de: 'Profil bearbeiten',
      pt: 'Editar perfil',
      pl: 'Edytuj profil',
      sv: 'Redigera profil',
      zh: '编辑个人资料',
      ar: 'تعديل الملف الشخصي',
      hi: 'प्रोफ़ाइल संपादित करें',
      ja: 'プロフィールを編集'
    },
    profile_add_photo: {
      en: 'Add photo',
      uk: 'Додати фото',
      es: 'Añadir foto',
      fr: 'Ajouter une photo',
      de: 'Foto hinzufügen',
      pt: 'Adicionar foto',
      pl: 'Dodaj zdjęcie',
      sv: 'Lägg till foto',
      zh: '添加照片',
      ar: 'إضافة صورة',
      hi: 'फ़ोटो जोड़ें',
      ja: '写真を追加'
    },
    profile_save_btn: {
      en: 'Save changes',
      uk: 'Зберегти зміни',
      es: 'Guardar cambios',
      fr: 'Enregistrer les modifications',
      de: 'Änderungen speichern',
      pt: 'Guardar alterações',
      pl: 'Zapisz zmiany',
      sv: 'Spara ändringar',
      zh: '保存更改',
      ar: 'حفظ التغييرات',
      hi: 'परिवर्तन सहेजें',
      ja: '変更を保存'
    },
    profile_change_password: {
      en: 'Change password',
      uk: 'Змінити пароль',
      es: 'Cambiar contraseña',
      fr: 'Changer le mot de passe',
      de: 'Passwort ändern',
      pt: 'Alterar palavra-passe',
      pl: 'Zmień hasło',
      sv: 'Byt lösenord',
      zh: '更改密码',
      ar: 'تغيير كلمة المرور',
      hi: 'पासवर्ड बदलें',
      ja: 'パスワードを変更'
    },
    profile_current_password: {
      en: 'Current password',
      uk: 'Поточний пароль',
      es: 'Contraseña actual',
      fr: 'Mot de passe actuel',
      de: 'Aktuelles Passwort',
      pt: 'Palavra-passe atual',
      pl: 'Bieżące hasło',
      sv: 'Nuvarande lösenord',
      zh: '当前密码',
      ar: 'كلمة المرور الحالية',
      hi: 'वर्तमान पासवर्ड',
      ja: '現在のパスワード'
    },
    profile_new_password: {
      en: 'New password',
      uk: 'Новий пароль',
      es: 'Nueva contraseña',
      fr: 'Nouveau mot de passe',
      de: 'Neues Passwort',
      pt: 'Nova palavra-passe',
      pl: 'Nowe hasło',
      sv: 'Nytt lösenord',
      zh: '新密码',
      ar: 'كلمة مرور جديدة',
      hi: 'नया पासवर्ड',
      ja: '新しいパスワード'
    },
    profile_wrong_password: {
      en: 'Current password is incorrect',
      uk: 'Невірний поточний пароль',
      es: 'La contraseña actual es incorrecta',
      fr: 'Le mot de passe actuel est incorrect',
      de: 'Aktuelles Passwort ist falsch',
      pt: 'Palavra-passe atual incorreta',
      pl: 'Bieżące hasło jest nieprawidłowe',
      sv: 'Nuvarande lösenord är fel',
      zh: '当前密码不正确',
      ar: 'كلمة المرور الحالية غير صحيحة',
      hi: 'वर्तमान पासवर्ड गलत है',
      ja: '現在のパスワードが正しくありません'
    },
    toast_profile_saved: {
      en: 'Profile updated',
      uk: 'Профіль оновлено',
      es: 'Perfil actualizado',
      fr: 'Profil mis à jour',
      de: 'Profil aktualisiert',
      pt: 'Perfil atualizado',
      pl: 'Profil zaktualizowany',
      sv: 'Profilen uppdaterad',
      zh: '个人资料已更新',
      ar: 'تم تحديث الملف الشخصي',
      hi: 'प्रोफ़ाइल अपडेट हुई',
      ja: 'プロフィールを更新しました'
    },
    manage_plan_title: {
      en: 'Manage plan',
      uk: 'Керувати планом',
      es: 'Gestionar plan',
      fr: 'Gérer le forfait',
      de: 'Plan verwalten',
      pt: 'Gerir plano',
      pl: 'Zarządzaj planem',
      sv: 'Hantera plan',
      zh: '管理套餐',
      ar: 'إدارة الخطة',
      hi: 'योजना प्रबंधित करें',
      ja: 'プランを管理'
    },
    manage_plan_desc: {
      en: 'Premium · 79 kr/month',
      uk: 'Premium · 79 kr/міс.',
      es: 'Premium · 79 kr/mes',
      fr: 'Premium · 79 kr/mois',
      de: 'Premium · 79 kr/Monat',
      pt: 'Premium · 79 kr/mês',
      pl: 'Premium · 79 kr/mies.',
      sv: 'Premium · 79 kr/mån',
      zh: '高级版 · 每月 79 克朗',
      ar: 'بريميوم · 79 كرونة/شهر',
      hi: 'प्रीमियम · 79 kr/माह',
      ja: 'プレミアム・月額79クローナ'
    },
    cancel_subscription_btn: {
      en: 'Cancel subscription',
      uk: 'Скасувати підписку',
      es: 'Cancelar suscripción',
      fr: 'Annuler l’abonnement',
      de: 'Abo kündigen',
      pt: 'Cancelar subscrição',
      pl: 'Anuluj subskrypcję',
      sv: 'Säg upp prenumeration',
      zh: '取消订阅',
      ar: 'إلغاء الاشتراك',
      hi: 'सदस्यता रद्द करें',
      ja: '定期購入を解約'
    },
    cancel_subscription_confirm: {
      en: 'Cancel your Premium plan? You’ll lose premium features immediately.',
      uk: 'Скасувати план Premium? Ви одразу втратите преміум-функції.',
      es: '¿Cancelar tu plan Premium? Perderás las funciones premium de inmediato.',
      fr: 'Annuler votre forfait Premium ? Vous perdrez immédiatement les fonctionnalités premium.',
      de: 'Dein Premium-Abo kündigen? Du verlierst sofort die Premium-Funktionen.',
      pt: 'Cancelar o seu plano Premium? Vai perder as funcionalidades premium de imediato.',
      pl: 'Anulować plan Premium? Natychmiast stracisz funkcje premium.',
      sv: 'Säga upp din Premium-plan? Du förlorar premiumfunktionerna direkt.',
      zh: '要取消您的高级版套餐吗？您将立即失去高级功能。',
      ar: 'إلغاء خطة بريميوم؟ ستفقد الميزات المميزة فورًا.',
      hi: 'अपनी प्रीमियम योजना रद्द करें? आप तुरंत प्रीमियम सुविधाएं खो देंगे।',
      ja: 'プレミアムプランを解約しますか？すぐにプレミアム機能が使えなくなります。'
    },
    cancel_subscription_keep: {
      en: 'Keep Premium',
      uk: 'Залишити Premium',
      es: 'Mantener Premium',
      fr: 'Garder Premium',
      de: 'Premium behalten',
      pt: 'Manter Premium',
      pl: 'Zachowaj Premium',
      sv: 'Behåll Premium',
      zh: '保留高级版',
      ar: 'الاحتفاظ ببريميوم',
      hi: 'प्रीमियम रखें',
      ja: 'プレミアムを継続'
    },
    cancel_subscription_yes: {
      en: 'Yes, cancel',
      uk: 'Так, скасувати',
      es: 'Sí, cancelar',
      fr: 'Oui, annuler',
      de: 'Ja, kündigen',
      pt: 'Sim, cancelar',
      pl: 'Tak, anuluj',
      sv: 'Ja, säg upp',
      zh: '是，取消',
      ar: 'نعم، إلغاء',
      hi: 'हां, रद्द करें',
      ja: 'はい、解約する'
    },
    toast_subscription_canceled: {
      en: 'Subscription canceled',
      uk: 'Підписку скасовано',
      es: 'Suscripción cancelada',
      fr: 'Abonnement annulé',
      de: 'Abo gekündigt',
      pt: 'Subscrição cancelada',
      pl: 'Subskrypcja anulowana',
      sv: 'Prenumerationen uppsagd',
      zh: '订阅已取消',
      ar: 'تم إلغاء الاشتراك',
      hi: 'सदस्यता रद्द हुई',
      ja: '定期購入を解約しました'
    },
    add_to_calendar_btn: {
      en: 'Add to calendar',
      uk: 'Додати в календар',
      es: 'Añadir al calendario',
      fr: 'Ajouter au calendrier',
      de: 'Zum Kalender hinzufügen',
      pt: 'Adicionar ao calendário',
      pl: 'Dodaj do kalendarza',
      sv: 'Lägg till i kalendern',
      zh: '添加到日历',
      ar: 'إضافة إلى التقويم',
      hi: 'कैलेंडर में जोड़ें',
      ja: 'カレンダーに追加'
    },
    toast_added_calendar: {
      en: 'Added to your calendar',
      uk: 'Додано до вашого календаря',
      es: 'Añadido a tu calendario',
      fr: 'Ajouté à votre calendrier',
      de: 'Zu deinem Kalender hinzugefügt',
      pt: 'Adicionado ao seu calendário',
      pl: 'Dodano do Twojego kalendarza',
      sv: 'Tillagt i din kalender',
      zh: '已添加到您的日历',
      ar: 'أُضيف إلى تقويمك',
      hi: 'आपके कैलेंडर में जोड़ा गया',
      ja: 'カレンダーに追加しました'
    },
    toast_reminder_sent: {
      en: 'Reminder sent',
      uk: 'Нагадування надіслано',
      es: 'Recordatorio enviado',
      fr: 'Rappel envoyé',
      de: 'Erinnerung gesendet',
      pt: 'Lembrete enviado',
      pl: 'Wysłano przypomnienie',
      sv: 'Påminnelse skickad',
      zh: '提醒已发送',
      ar: 'تم إرسال التذكير',
      hi: 'रिमाइंडर भेजा गया',
      ja: 'リマインダーを送信しました'
    },
    toast_vendor_canceled: {
      en: 'Adobe CC subscription canceled',
      uk: 'Підписку Adobe CC скасовано',
      es: 'Suscripción de Adobe CC cancelada',
      fr: 'Abonnement Adobe CC annulé',
      de: 'Adobe-CC-Abo gekündigt',
      pt: 'Subscrição da Adobe CC cancelada',
      pl: 'Anulowano subskrypcję Adobe CC',
      sv: 'Adobe CC-prenumeration uppsagd',
      zh: 'Adobe CC 订阅已取消',
      ar: 'تم إلغاء اشتراك Adobe CC',
      hi: 'Adobe CC सदस्यता रद्द हुई',
      ja: 'Adobe CCの定期購入を解約しました'
    },
    confirm_transfer_btn: {
      en: 'Confirm transfer',
      uk: 'Підтвердити переказ',
      es: 'Confirmar transferencia',
      fr: 'Confirmer le transfert',
      de: 'Überweisung bestätigen',
      pt: 'Confirmar transferência',
      pl: 'Potwierdź przelew',
      sv: 'Bekräfta överföring',
      zh: '确认转账',
      ar: 'تأكيد التحويل',
      hi: 'स्थानांतरण की पुष्टि करें',
      ja: '振替を確定'
    },
    toast_moved_savings: {
      en: 'Moved to savings',
      uk: 'Переказано на заощадження',
      es: 'Movido a ahorros',
      fr: 'Transféré vers l’épargne',
      de: 'Zum Sparen verschoben',
      pt: 'Movido para poupança',
      pl: 'Przeniesiono na oszczędności',
      sv: 'Flyttat till sparande',
      zh: '已转入储蓄',
      ar: 'تم النقل إلى المدخرات',
      hi: 'बचत में स्थानांतरित',
      ja: '貯蓄に移動しました'
    },
    toast_report_exported: {
      en: 'Report exported',
      uk: 'Звіт експортовано',
      es: 'Informe exportado',
      fr: 'Rapport exporté',
      de: 'Bericht exportiert',
      pt: 'Relatório exportado',
      pl: 'Wyeksportowano raport',
      sv: 'Rapporten exporterad',
      zh: '报告已导出',
      ar: 'تم تصدير التقرير',
      hi: 'रिपोर्ट निर्यात हुई',
      ja: 'レポートを書き出しました'
    },
    reg_title: {
      en: 'Create your account',
      uk: 'Створіть обліковий запис',
      es: 'Crea tu cuenta',
      fr: 'Créez votre compte',
      de: 'Konto erstellen',
      pt: 'Crie a sua conta',
      pl: 'Utwórz konto',
      sv: 'Skapa ditt konto',
      zh: '创建账户',
      ar: 'أنشئ حسابك',
      hi: 'अपना खाता बनाएं',
      ja: 'アカウントを作成'
    },
    reg_sub: {
      en: 'Just a few details to get started',
      uk: 'Ще кілька деталей — і можна починати',
      es: 'Solo unos datos más para empezar',
      fr: 'Encore quelques informations pour commencer',
      de: 'Nur noch ein paar Angaben, dann geht’s los',
      pt: 'Só mais alguns dados para começar',
      pl: 'Jeszcze kilka danych, aby zacząć',
      sv: 'Bara några uppgifter för att komma igång',
      zh: '只需几项信息即可开始',
      ar: 'بضع تفاصيل فقط للبدء',
      hi: 'शुरू करने के लिए बस कुछ जानकारी चाहिए',
      ja: '開始するにはあと少し情報が必要です'
    },
    reg_first_name: {
      en: 'First name',
      uk: 'Ім’я',
      es: 'Nombre',
      fr: 'Prénom',
      de: 'Vorname',
      pt: 'Nome próprio',
      pl: 'Imię',
      sv: 'Förnamn',
      zh: '名',
      ar: 'الاسم الأول',
      hi: 'पहला नाम',
      ja: '名'
    },
    reg_last_name: {
      en: 'Last name',
      uk: 'Прізвище',
      es: 'Apellido',
      fr: 'Nom de famille',
      de: 'Nachname',
      pt: 'Apelido',
      pl: 'Nazwisko',
      sv: 'Efternamn',
      zh: '姓',
      ar: 'اسم العائلة',
      hi: 'उपनाम',
      ja: '姓'
    },
    reg_email: {
      en: 'Email',
      uk: 'Електронна пошта',
      es: 'Correo electrónico',
      fr: 'E-mail',
      de: 'E-Mail',
      pt: 'E-mail',
      pl: 'E-mail',
      sv: 'E-post',
      zh: '电子邮箱',
      ar: 'البريد الإلكتروني',
      hi: 'ईमेल',
      ja: 'メールアドレス'
    },
    reg_password: {
      en: 'Password',
      uk: 'Пароль',
      es: 'Contraseña',
      fr: 'Mot de passe',
      de: 'Passwort',
      pt: 'Palavra-passe',
      pl: 'Hasło',
      sv: 'Lösenord',
      zh: '密码',
      ar: 'كلمة المرور',
      hi: 'पासवर्ड',
      ja: 'パスワード'
    },
    reg_password_hint: {
      en: 'At least 8 characters',
      uk: 'Щонайменше 8 символів',
      es: 'Al menos 8 caracteres',
      fr: 'Au moins 8 caractères',
      de: 'Mindestens 8 Zeichen',
      pt: 'Pelo menos 8 caracteres',
      pl: 'Co najmniej 8 znaków',
      sv: 'Minst 8 tecken',
      zh: '至少 8 个字符',
      ar: '8 أحرف على الأقل',
      hi: 'कम से कम 8 अक्षर',
      ja: '8文字以上'
    },
    reg_err_required: {
      en: 'Required',
      uk: 'Обов’язково',
      es: 'Obligatorio',
      fr: 'Requis',
      de: 'Erforderlich',
      pt: 'Obrigatório',
      pl: 'Wymagane',
      sv: 'Obligatoriskt',
      zh: '必填',
      ar: 'مطلوب',
      hi: 'आवश्यक',
      ja: '必須'
    },
    reg_err_email: {
      en: 'Enter a valid email',
      uk: 'Введіть дійсну електронну адресу',
      es: 'Introduce un correo válido',
      fr: 'Saisissez un e-mail valide',
      de: 'Gültige E-Mail eingeben',
      pt: 'Introduza um e-mail válido',
      pl: 'Podaj prawidłowy adres e-mail',
      sv: 'Ange en giltig e-postadress',
      zh: '请输入有效的电子邮箱',
      ar: 'أدخل بريدًا إلكترونيًا صالحًا',
      hi: 'मान्य ईमेल दर्ज करें',
      ja: '有効なメールアドレスを入力してください'
    },
    reg_err_password: {
      en: 'At least 8 characters',
      uk: 'Щонайменше 8 символів',
      es: 'Al menos 8 caracteres',
      fr: 'Au moins 8 caractères',
      de: 'Mindestens 8 Zeichen',
      pt: 'Pelo menos 8 caracteres',
      pl: 'Co najmniej 8 znaków',
      sv: 'Minst 8 tecken',
      zh: '至少 8 个字符',
      ar: '8 أحرف على الأقل',
      hi: 'कम से कम 8 अक्षर',
      ja: '8文字以上'
    },
    reg_phone_title: {
      en: 'Verify your number',
      uk: 'Підтвердьте номер',
      es: 'Verifica tu número',
      fr: 'Vérifiez votre numéro',
      de: 'Nummer bestätigen',
      pt: 'Verifique o seu número',
      pl: 'Zweryfikuj numer',
      sv: 'Verifiera ditt nummer',
      zh: '验证您的号码',
      ar: 'تحقق من رقمك',
      hi: 'अपना नंबर सत्यापित करें',
      ja: '電話番号を確認'
    },
    reg_phone_sub: {
      en: 'We’ll text you a code to confirm it’s you',
      uk: 'Ми надішлемо SMS-код для підтвердження',
      es: 'Te enviaremos un código por SMS para confirmarlo',
      fr: 'Nous vous enverrons un code par SMS pour confirmer',
      de: 'Wir senden dir per SMS einen Code zur Bestätigung',
      pt: 'Vamos enviar-lhe um código por SMS para confirmar',
      pl: 'Wyślemy Ci kod SMS w celu potwierdzenia',
      sv: 'Vi skickar en kod via sms för att bekräfta att det är du',
      zh: '我们将通过短信发送验证码以确认身份',
      ar: 'سنرسل لك رمزًا نصيًا لتأكيد هويتك',
      hi: 'हम आपकी पुष्टि के लिए एक कोड भेजेंगे',
      ja: 'ご本人確認のためSMSでコードをお送りします'
    },
    reg_phone_label: {
      en: 'Mobile number',
      uk: 'Номер телефону',
      es: 'Número de móvil',
      fr: 'Numéro de mobile',
      de: 'Mobilnummer',
      pt: 'Número de telemóvel',
      pl: 'Numer telefonu',
      sv: 'Mobilnummer',
      zh: '手机号码',
      ar: 'رقم الجوال',
      hi: 'मोबाइल नंबर',
      ja: '携帯電話番号'
    },
    reg_err_phone: {
      en: 'Enter a valid number',
      uk: 'Введіть дійсний номер',
      es: 'Introduce un número válido',
      fr: 'Saisissez un numéro valide',
      de: 'Gültige Nummer eingeben',
      pt: 'Introduza um número válido',
      pl: 'Podaj prawidłowy numer',
      sv: 'Ange ett giltigt nummer',
      zh: '请输入有效号码',
      ar: 'أدخل رقمًا صالحًا',
      hi: 'मान्य नंबर दर्ज करें',
      ja: '有効な番号を入力してください'
    },
    reg_send_code: {
      en: 'Send code',
      uk: 'Надіслати код',
      es: 'Enviar código',
      fr: 'Envoyer le code',
      de: 'Code senden',
      pt: 'Enviar código',
      pl: 'Wyślij kod',
      sv: 'Skicka kod',
      zh: '发送验证码',
      ar: 'إرسال الرمز',
      hi: 'कोड भेजें',
      ja: 'コードを送信'
    },
    reg_back: {
      en: 'Back',
      uk: 'Назад',
      es: 'Atrás',
      fr: 'Retour',
      de: 'Zurück',
      pt: 'Voltar',
      pl: 'Wstecz',
      sv: 'Tillbaka',
      zh: '返回',
      ar: 'رجوع',
      hi: 'वापस',
      ja: '戻る'
    },
    reg_verify_title: {
      en: 'Enter the code',
      uk: 'Введіть код',
      es: 'Introduce el código',
      fr: 'Saisissez le code',
      de: 'Code eingeben',
      pt: 'Introduza o código',
      pl: 'Wprowadź kod',
      sv: 'Ange koden',
      zh: '输入验证码',
      ar: 'أدخل الرمز',
      hi: 'कोड दर्ज करें',
      ja: 'コードを入力'
    },
    reg_verify_sub: {
      en: 'We sent a 6-digit code to {phone}',
      uk: 'Ми надіслали 6-значний код на {phone}',
      es: 'Enviamos un código de 6 dígitos a {phone}',
      fr: 'Nous avons envoyé un code à 6 chiffres au {phone}',
      de: 'Wir haben einen 6-stelligen Code an {phone} gesendet',
      pt: 'Enviámos um código de 6 dígitos para {phone}',
      pl: 'Wysłaliśmy 6-cyfrowy kod na {phone}',
      sv: 'Vi skickade en 6-siffrig kod till {phone}',
      zh: '我们已向 {phone} 发送 6 位验证码',
      ar: 'أرسلنا رمزًا مكونًا من 6 أرقام إلى {phone}',
      hi: 'हमने {phone} पर 6 अंकों का कोड भेजा है',
      ja: '{phone}に6桁のコードを送信しました'
    },
    reg_code_label: {
      en: 'Verification code',
      uk: 'Код підтвердження',
      es: 'Código de verificación',
      fr: 'Code de vérification',
      de: 'Bestätigungscode',
      pt: 'Código de verificação',
      pl: 'Kod weryfikacyjny',
      sv: 'Verifieringskod',
      zh: '验证码',
      ar: 'رمز التحقق',
      hi: 'सत्यापन कोड',
      ja: '確認コード'
    },
    reg_err_code: {
      en: 'Enter the 6-digit code',
      uk: 'Введіть 6-значний код',
      es: 'Introduce el código de 6 dígitos',
      fr: 'Saisissez le code à 6 chiffres',
      de: 'Gib den 6-stelligen Code ein',
      pt: 'Introduza o código de 6 dígitos',
      pl: 'Wprowadź 6-cyfrowy kod',
      sv: 'Ange den 6-siffriga koden',
      zh: '请输入 6 位验证码',
      ar: 'أدخل الرمز المكون من 6 أرقام',
      hi: '6 अंकों का कोड दर्ज करें',
      ja: '6桁のコードを入力してください'
    },
    reg_code_sent: {
      en: 'Code sent',
      uk: 'Код надіслано',
      es: 'Código enviado',
      fr: 'Code envoyé',
      de: 'Code gesendet',
      pt: 'Código enviado',
      pl: 'Kod wysłany',
      sv: 'Kod skickad',
      zh: '验证码已发送',
      ar: 'تم إرسال الرمز',
      hi: 'कोड भेजा गया',
      ja: 'コードを送信しました'
    },
    reg_verify_resend: {
      en: 'Didn’t get it? Resend',
      uk: 'Не отримали? Надіслати ще раз',
      es: '¿No lo recibiste? Reenviar',
      fr: 'Pas reçu ? Renvoyer',
      de: 'Nicht erhalten? Erneut senden',
      pt: 'Não recebeu? Reenviar',
      pl: 'Nie otrzymałeś? Wyślij ponownie',
      sv: 'Fick du ingen kod? Skicka igen',
      zh: '没收到？重新发送',
      ar: 'لم تستلمه؟ إعادة الإرسال',
      hi: 'नहीं मिला? पुनः भेजें',
      ja: '届きませんか？再送信'
    },
    reg_verify_btn: {
      en: 'Verify & continue',
      uk: 'Підтвердити і продовжити',
      es: 'Verificar y continuar',
      fr: 'Vérifier et continuer',
      de: 'Bestätigen & weiter',
      pt: 'Verificar e continuar',
      pl: 'Zweryfikuj i kontynuuj',
      sv: 'Verifiera och fortsätt',
      zh: '验证并继续',
      ar: 'تحقق وتابع',
      hi: 'सत्यापित करें और जारी रखें',
      ja: '確認して続ける'
    },
    intro0_title: {
      en: 'Meet Nomi',
      uk: 'Знайомтеся, Nomi',
      es: 'Conoce a Nomi',
      fr: 'Découvrez Nomi',
      de: 'Das ist Nomi',
      pt: 'Conheça a Nomi',
      pl: 'Poznaj Nomi',
      sv: 'Möt Nomi',
      zh: '认识 Nomi',
      ar: 'تعرّف على Nomi',
      hi: 'नोमी से मिलें',
      ja: 'Nomiのご紹介'
    },
    intro0_desc: {
      en: 'Nomi is your personal finance companion — it connects to your accounts and turns your money data into clear, plain-language insight, for both your personal life and your business.',
      uk: 'Nomi — ваш помічник у фінансах: підключається до рахунків і перетворює дані про гроші на зрозумілі поради — для особистого життя і бізнесу.',
      es: 'Nomi es tu compañero financiero: conecta tus cuentas y convierte tus datos económicos en información clara, para tu vida personal y tu negocio.',
      fr: 'Nomi est votre compagnon financier : il se connecte à vos comptes et transforme vos données financières en informations claires, pour votre vie personnelle comme pour votre entreprise.',
      de: 'Nomi ist dein Finanzbegleiter — es verbindet sich mit deinen Konten und macht aus deinen Finanzdaten klare, verständliche Einblicke, privat wie geschäftlich.',
      pt: 'A Nomi é a sua companheira financeira — liga-se às suas contas e transforma os seus dados financeiros em informação clara, para a vida pessoal e para o negócio.',
      pl: 'Nomi to Twój towarzysz finansowy — łączy się z Twoimi kontami i zamienia dane finansowe w jasne wskazówki, prywatnie i w biznesie.',
      sv: 'Nomi är din ekonomiska följeslagare — den ansluter till dina konton och gör om din ekonomiska data till tydliga insikter, både privat och i företaget.',
      zh: 'Nomi 是您的私人理财伙伴——连接您的账户，将资金数据转化为清晰易懂的洞察，无论个人生活还是business。',
      ar: 'Nomi هو رفيقك المالي — يتصل بحساباتك ويحوّل بياناتك المالية إلى رؤى واضحة وبسيطة، لحياتك الشخصية وعملك.',
      hi: 'नोमी आपका व्यक्तिगत वित्त साथी है — यह आपके खातों से जुड़कर आपके धन डेटा को स्पष्ट, सरल भाषा में इनसाइट में बदल देता है, आपके निजी और व्यावसायिक जीवन दोनों के लिए।',
      ja: 'Nomiはあなたの家計・ビジネスの伴走者です。口座と連携し、お金のデータをわかりやすいインサイトに変えます。'
    },
    intro1_title: {
      en: 'Clarity, not just data',
      uk: 'Ясність, а не просто дані',
      es: 'Claridad, no solo datos',
      fr: 'De la clarté, pas juste des données',
      de: 'Klarheit statt nur Daten',
      pt: 'Clareza, não só dados',
      pl: 'Jasność, nie tylko dane',
      sv: 'Klarhet, inte bara data',
      zh: '清晰洞察，而非数据堆砌',
      ar: 'وضوح، لا مجرد بيانات',
      hi: 'स्पष्टता, सिर्फ़ डेटा नहीं',
      ja: 'データではなく、明快さを'
    },
    intro1_desc: {
      en: 'Nomi reads your accounts and tells you what actually matters — in plain language.',
      uk: 'Nomi аналізує ваші рахунки і простою мовою каже, що справді важливо.',
      es: 'Nomi lee tus cuentas y te dice lo que realmente importa, en lenguaje sencillo.',
      fr: 'Nomi analyse vos comptes et vous dit ce qui compte vraiment, en langage simple.',
      de: 'Nomi liest deine Konten und sagt dir in klarer Sprache, was wirklich zählt.',
      pt: 'A Nomi lê as suas contas e diz-lhe o que realmente importa, em linguagem simples.',
      pl: 'Nomi analizuje Twoje konta i mówi prostym językiem, co naprawdę ważne.',
      sv: 'Nomi läser dina konton och berättar vad som faktiskt spelar roll — i klarspråk.',
      zh: '“Nomi 会读取您的账户，并用简明的语言告诉您真正重要的事。',
      ar: 'تقرأ Nomi حساباتك وتخبرك بما يهم فعلاً — بلغة واضحة وبسيطة.',
      hi: 'Nomi आपके खातों को पढ़ता है और सरल भाषा में बताता है कि वास्तव में क्या मायने रखता है।',
      ja: 'Nomiはあなたの口座を読み取り、本当に重要なことを平易な言葉で伝えます。'
    },
    intro2_title: {
      en: 'One insight at a time',
      uk: 'Один інсайт за раз',
      es: 'Un análisis a la vez',
      fr: 'Une analyse à la fois',
      de: 'Ein Einblick nach dem anderen',
      pt: 'Uma análise de cada vez',
      pl: 'Jedna analiza naraz',
      sv: 'En insikt i taget',
      zh: '一次一个洞察',
      ar: 'رؤية واحدة في كل مرة',
      hi: 'एक बार में एक इनसाइट',
      ja: '一度にひとつのインサイト'
    },
    intro2_desc: {
      en: "No dashboards to interpret, no pile of alerts. Just what's worth knowing, when it matters.",
      uk: 'Жодних панелей для аналізу чи купи сповіщень. Лише те, що варто знати, коли це важливо.',
      es: 'Sin paneles que interpretar ni montones de alertas. Solo lo que vale la pena saber, cuando importa.',
      fr: 'Pas de tableaux de bord à interpréter, pas de pile d\'alertes. Juste ce qui compte de savoir, au bon moment.',
      de: 'Keine Dashboards zum Interpretieren, kein Alarm-Stapel. Nur das Wissenswerte, genau dann, wenn es zählt.',
      pt: 'Sem painéis para interpretar, sem pilhas de alertas. Só o que vale a pena saber, quando importa.',
      pl: 'Żadnych paneli do interpretacji, żadnego stosu alertów. Tylko to, co warto wiedzieć, gdy ma to znaczenie.',
      sv: 'Inga dashboards att tolka, inga travar av varningar. Bara det som är värt att veta, när det spelar roll.',
      zh: '无需解读仪表盘，也没有一堆提醒。只有真正值得了解的事，恰逢其时地呈现。',
      ar: 'لا لوحات معلومات لتفسيرها، ولا كومة تنبيهات. فقط ما يستحق المعرفة، في الوقت المناسب.',
      hi: 'न कोई डैशबोर्ड समझना, न अलर्ट का ढेर। बस वही जो जानने लायक है, जब ज़रूरी हो।',
      ja: '解読が必要なダッシュボードも、アラートの山もありません。本当に必要な時に、知るべきことだけを。'
    },
    intro3_title: {
      en: 'Bank-grade encryption',
      uk: 'Банківське шифрування',
      es: 'Cifrado de nivel bancario',
      fr: 'Chiffrement de niveau bancaire',
      de: 'Bankentaugliche Verschlüsselung',
      pt: 'Encriptação de nível bancário',
      pl: 'Szyfrowanie na poziomie bankowym',
      sv: 'Bankgrad kryptering',
      zh: '银行级加密',
      ar: 'تشفير بمستوى بنكي',
      hi: 'बैंक-स्तरीय एन्क्रिप्शन',
      ja: '銀行レベルの暗号化'
    },
    intro3_desc: {
      en: 'Your data stays private and secure. Connect your accounts whenever you\'re ready.',
      uk: 'Ваші дані залишаються приватними та захищеними. Підключіть рахунки, коли будете готові.',
      es: 'Tus datos permanecen privados y seguros. Conecta tus cuentas cuando estés listo.',
      fr: 'Vos données restent privées et sécurisées. Connectez vos comptes quand vous serez prêt.',
      de: 'Deine Daten bleiben privat und sicher. Verknüpfe deine Konten, sobald du bereit bist.',
      pt: 'Os seus dados mantêm-se privados e seguros. Ligue as suas contas quando estiver pronto.',
      pl: 'Twoje dane pozostają prywatne i bezpieczne. Połącz konta, gdy będziesz gotowy.',
      sv: 'Din data förblir privat och säker. Anslut dina konton när du är redo.',
      zh: '您的数据始终私密安全。准备好后即可连接账户。',
      ar: 'تبقى بياناتك خاصة وآمنة. اربط حساباتك عندما تكون جاهزًا.',
      hi: 'आपका डेटा निजी और सुरक्षित रहता है। जब तैयार हों तब खाते जोड़ें।',
      ja: 'あなたのデータは常に非公開かつ安全です。準備ができたら口座を連携してください。'
    },
    /* ---- relative dates (mock transactions) ---- */
    date_today: {
      en: 'Today',
      uk: 'Сьогодні',
      es: 'Hoy',
      fr: "Aujourd'hui",
      de: 'Heute',
      pt: 'Hoje',
      pl: 'Dziś',
      sv: 'Idag',
      zh: '今天',
      ar: 'اليوم',
      hi: 'आज',
      ja: '今日'
    },
    date_yesterday: {
      en: 'Yesterday',
      uk: 'Вчора',
      es: 'Ayer',
      fr: 'Hier',
      de: 'Gestern',
      pt: 'Ontem',
      pl: 'Wczoraj',
      sv: 'Igår',
      zh: '昨天',
      ar: 'أمس',
      hi: 'कल',
      ja: '昨日'
    },
    date_days_ago: {
      en: '{n} days ago',
      uk: '{n} дні тому',
      es: 'hace {n} días',
      fr: 'il y a {n} jours',
      de: 'vor {n} Tagen',
      pt: 'há {n} dias',
      pl: '{n} dni temu',
      sv: 'för {n} dagar sedan',
      zh: '{n} 天前',
      ar: 'قبل {n} أيام',
      hi: '{n} दिन पहले',
      ja: '{n}日前'
    },
    date_just_now: {
      en: 'Just now',
      uk: 'Щойно',
      es: 'Ahora mismo',
      fr: "À l'instant",
      de: 'Gerade eben',
      pt: 'Agora mesmo',
      pl: 'Przed chwilą',
      sv: 'Just nu',
      zh: '刚刚',
      ar: 'الآن',
      hi: 'अभी अभी',
      ja: 'たった今'
    },
    /* ---- money-in/out legend (CashflowChart) ---- */
    legend_money_in: {
      en: 'Money in',
      uk: 'Надходження',
      es: 'Ingresos',
      fr: 'Entrées',
      de: 'Eingang',
      pt: 'Entradas',
      pl: 'Wpływy',
      sv: 'Pengar in',
      zh: '收入',
      ar: 'أموال واردة',
      hi: 'आया पैसा',
      ja: '入金'
    },
    legend_money_out: {
      en: 'Money out',
      uk: 'Витрати',
      es: 'Gastos',
      fr: 'Sorties',
      de: 'Ausgang',
      pt: 'Saídas',
      pl: 'Wypływy',
      sv: 'Pengar ut',
      zh: '支出',
      ar: 'أموال صادرة',
      hi: 'गया पैसा',
      ja: '出金'
    },
    /* ---- category labels (CategoryBreakdown legend) ---- */
    cat_rent: {
      en: 'Rent',
      uk: 'Оренда',
      es: 'Alquiler',
      fr: 'Loyer',
      de: 'Miete',
      pt: 'Renda',
      pl: 'Czynsz',
      sv: 'Hyra',
      zh: '房租',
      ar: 'الإيجار',
      hi: 'किराया',
      ja: '家賃'
    },
    cat_payroll: {
      en: 'Payroll & contractors',
      uk: 'Зарплата та підрядники',
      es: 'Nómina y contratistas',
      fr: 'Salaires et prestataires',
      de: 'Gehälter & Auftragnehmer',
      pt: 'Salários e prestadores',
      pl: 'Płace i wykonawcy',
      sv: 'Löner och konsulter',
      zh: '工资与承包商',
      ar: 'الرواتب والمقاولون',
      hi: 'वेतन और ठेकेदार',
      ja: '給与・外部委託'
    },
    cat_office_rent: {
      en: 'Office & rent',
      uk: 'Офіс і оренда',
      es: 'Oficina y alquiler',
      fr: 'Bureau et loyer',
      de: 'Büro & Miete',
      pt: 'Escritório e renda',
      pl: 'Biuro i czynsz',
      sv: 'Kontor och hyra',
      zh: '办公与租金',
      ar: 'المكتب والإيجار',
      hi: 'कार्यालय और किराया',
      ja: 'オフィス・家賃'
    },
    cat_software: {
      en: 'Software',
      uk: 'Програмне забезпечення',
      es: 'Software',
      fr: 'Logiciels',
      de: 'Software',
      pt: 'Software',
      pl: 'Oprogramowanie',
      sv: 'Mjukvara',
      zh: '软件',
      ar: 'البرمجيات',
      hi: 'सॉफ़्टवेयर',
      ja: 'ソフトウェア'
    },
    goal_emergency: {
      en: 'Emergency fund',
      uk: 'Резервний фонд',
      es: 'Fondo de emergencia',
      fr: "Fonds d'urgence",
      de: 'Notfallfonds',
      pt: 'Fundo de emergência',
      pl: 'Fundusz awaryjny',
      sv: 'Buffert',
      zh: '应急基金',
      ar: 'صندوق الطوارئ',
      hi: 'आपातकालीन फंड',
      ja: '緊急資金'
    },
    goal_tax_reserve: {
      en: 'Tax reserve (Q3)',
      uk: 'Податковий резерв (Q3)',
      es: 'Reserva fiscal (T3)',
      fr: "Réserve fiscale (T3)",
      de: 'Steuerrücklage (Q3)',
      pt: 'Reserva fiscal (T3)',
      pl: 'Rezerwa podatkowa (Q3)',
      sv: 'Skattereserv (K3)',
      zh: '税务储备金（Q3）',
      ar: 'احتياطي الضرائب (الربع 3)',
      hi: 'कर आरक्षित निधि (Q3)',
      ja: '納税準備金（第3四半期）'
    },
    goal_months_left: {
      en: '{n} months left',
      uk: 'Залишилось {n} міс.',
      es: 'Quedan {n} meses',
      fr: 'Il reste {n} mois',
      de: 'Noch {n} Monate',
      pt: 'Faltam {n} meses',
      pl: 'Zostały {n} mies.',
      sv: '{n} månader kvar',
      zh: '还剩 {n} 个月',
      ar: 'تبقى {n} أشهر',
      hi: '{n} महीने शेष',
      ja: '残り{n}か月'
    },
    goal_due_date: {
      en: 'Due {date}',
      uk: 'Термін: {date}',
      es: 'Vence el {date}',
      fr: 'Échéance {date}',
      de: 'Fällig am {date}',
      pt: 'Vence a {date}',
      pl: 'Termin {date}',
      sv: 'Förfaller {date}',
      zh: '截止 {date}',
      ar: 'الاستحقاق {date}',
      hi: 'देय {date}',
      ja: '期限 {date}'
    },
    cat_travel: {
      en: 'Travel',
      uk: 'Подорожі',
      es: 'Viajes',
      fr: 'Déplacements',
      de: 'Reisen',
      pt: 'Viagens',
      pl: 'Podróże',
      sv: 'Resor',
      zh: '差旅',
      ar: 'السفر',
      hi: 'यात्रा',
      ja: '出張'
    },
    /* ---- insight titles / actions / bodies ---- */
    ins_save_action: {
      en: 'See breakdown',
      uk: 'Переглянути деталі',
      es: 'Ver desglose',
      fr: 'Voir le détail',
      de: 'Details ansehen',
      pt: 'Ver detalhe',
      pl: 'Zobacz szczegóły',
      sv: 'Se detaljer',
      zh: '查看明细',
      ar: 'عرض التفاصيل',
      hi: 'विवरण देखें',
      ja: '内訳を見る'
    },
    ins_save_text: {
      en: "You're on track to save <strong>{amount}</strong> this month — 18% more than usual.",
      uk: 'Ви на шляху до заощадження <strong>{amount}</strong> цього місяця — на 18% більше, ніж зазвичай.',
      es: 'Vas camino de ahorrar <strong>{amount}</strong> este mes — un 18% más de lo habitual.',
      fr: 'Vous êtes en voie d\'épargner <strong>{amount}</strong> ce mois-ci — 18 % de plus que d\'habitude.',
      de: 'Du bist auf dem besten Weg, diesen Monat <strong>{amount}</strong> zu sparen — 18 % mehr als sonst.',
      pt: 'Está no caminho para poupar <strong>{amount}</strong> este mês — 18% mais do que o habitual.',
      pl: 'Jesteś na dobrej drodze, by zaoszczędzić <strong>{amount}</strong> w tym miesiącu — o 18% więcej niż zwykle.',
      sv: 'Du är på väg att spara <strong>{amount}</strong> denna månad — 18% mer än vanligt.',
      zh: '本月您有望储蓄 <strong>{amount}</strong>——比平常多 18%。',
      ar: 'أنت في طريقك لتوفير <strong>{amount}</strong> هذا الشهر — أكثر بنسبة 18% من المعتاد.',
      hi: 'आप इस महीने <strong>{amount}</strong> बचाने की राह पर हैं — सामान्य से 18% अधिक।',
      ja: '今月は<strong>{amount}</strong>を貯蓄できる見込みです — 通常より18%多い額です。'
    },
    ins_unused_title: {
      en: 'Unused subscription',
      uk: 'Невикористана підписка',
      es: 'Suscripción sin usar',
      fr: 'Abonnement inutilisé',
      de: 'Ungenutztes Abo',
      pt: 'Subscrição não utilizada',
      pl: 'Nieużywana subskrypcja',
      sv: 'Oanvänd prenumeration',
      zh: '未使用的订阅',
      ar: 'اشتراك غير مستخدم',
      hi: 'अप्रयुक्त सदस्यता',
      ja: '未使用のサブスクリプション'
    },
    ins_unused_action: {
      en: 'Review',
      uk: 'Переглянути',
      es: 'Revisar',
      fr: 'Vérifier',
      de: 'Prüfen',
      pt: 'Rever',
      pl: 'Sprawdź',
      sv: 'Granska',
      zh: '查看',
      ar: 'مراجعة',
      hi: 'समीक्षा करें',
      ja: '確認する'
    },
    ins_unused_text: {
      en: "You haven't used <strong>{name}</strong> in 3 months. That's {amount}/month.",
      uk: 'Ви не користувалися <strong>{name}</strong> вже 3 місяці. Це {amount}/місяць.',
      es: 'No has usado <strong>{name}</strong> en 3 meses. Eso es {amount}/mes.',
      fr: 'Vous n\'avez pas utilisé <strong>{name}</strong> depuis 3 mois. Cela représente {amount}/mois.',
      de: 'Du hast <strong>{name}</strong> seit 3 Monaten nicht genutzt. Das sind {amount}/Monat.',
      pt: 'Não usa a <strong>{name}</strong> há 3 meses. Isso são {amount}/mês.',
      pl: 'Nie korzystasz z <strong>{name}</strong> od 3 miesięcy. To {amount}/miesiąc.',
      sv: 'Du har inte använt <strong>{name}</strong> på 3 månader. Det är {amount}/månad.',
      zh: '您已 3 个月未使用 <strong>{name}</strong>。这相当于每月 {amount}。',
      ar: 'لم تستخدم <strong>{name}</strong> منذ 3 أشهر. أي {amount}/شهريًا.',
      hi: '3 महीने से आपने <strong>{name}</strong> का उपयोग नहीं किया। यह {amount}/माह है।',
      ja: '<strong>{name}</strong>を3か月間利用していません。月額{amount}です。'
    },
    ins_move_action: {
      en: 'Move to savings',
      uk: 'Перевести на заощадження',
      es: 'Mover a ahorros',
      fr: 'Transférer vers l\'épargne',
      de: 'Zum Sparen verschieben',
      pt: 'Mover para poupança',
      pl: 'Przenieś do oszczędności',
      sv: 'Flytta till sparande',
      zh: '转入储蓄',
      ar: 'نقل إلى المدخرات',
      hi: 'बचत में स्थानांतरित करें',
      ja: '貯蓄へ移動'
    },
    ins_move_text: {
      en: 'Your checking balance is higher than usual. Consider moving <strong>{amount}</strong> to your emergency fund.',
      uk: 'Баланс поточного рахунку вищий за звичайний. Розгляньте переказ <strong>{amount}</strong> у резервний фонд.',
      es: 'El saldo de tu cuenta corriente es más alto de lo habitual. Considera mover <strong>{amount}</strong> a tu fondo de emergencia.',
      fr: 'Le solde de votre compte courant est plus élevé que d\'habitude. Envisagez de transférer <strong>{amount}</strong> vers votre fonds d\'urgence.',
      de: 'Dein Girokontostand ist höher als üblich. Erwäge, <strong>{amount}</strong> in deinen Notfallfonds zu verschieben.',
      pt: 'O saldo da sua conta à ordem está mais alto do que o habitual. Considere mover <strong>{amount}</strong> para o seu fundo de emergência.',
      pl: 'Saldo Twojego konta bieżącego jest wyższe niż zwykle. Rozważ przeniesienie <strong>{amount}</strong> do funduszu awaryjnego.',
      sv: 'Ditt saldo på lönekontot är högre än vanligt. Överväg att flytta <strong>{amount}</strong> till din buffert.',
      zh: '您的活期账户余额高于往常。可考虑将 <strong>{amount}</strong> 转入应急基金。',
      ar: 'رصيد حسابك الجاري أعلى من المعتاد. فكر في نقل <strong>{amount}</strong> إلى صندوق الطوارئ.',
      hi: 'आपका चेकिंग बैलेंस सामान्य से अधिक है। <strong>{amount}</strong> आपातकालीन फंड में स्थानांतरित करने पर विचार करें।',
      ja: '当座預金残高が通常より多くなっています。緊急資金へ<strong>{amount}</strong>を移すことをご検討ください。'
    },
    ins_overdue_title: {
      en: 'Client payment overdue',
      uk: 'Прострочена оплата клієнта',
      es: 'Pago de cliente atrasado',
      fr: 'Paiement client en retard',
      de: 'Kundenzahlung überfällig',
      pt: 'Pagamento de cliente em atraso',
      pl: 'Zaległa płatność klienta',
      sv: 'Försenad kundbetalning',
      zh: '客户付款逾期',
      ar: 'دفعة عميل متأخرة',
      hi: 'ग्राहक भुगतान बकाया',
      ja: 'クライアントの支払い延滞'
    },
    ins_overdue_action: {
      en: 'Send reminder',
      uk: 'Надіслати нагадування',
      es: 'Enviar recordatorio',
      fr: 'Envoyer un rappel',
      de: 'Erinnerung senden',
      pt: 'Enviar lembrete',
      pl: 'Wyślij przypomnienie',
      sv: 'Skicka påminnelse',
      zh: '发送提醒',
      ar: 'إرسال تذكير',
      hi: 'रिमाइंडर भेजें',
      ja: 'リマインダーを送る'
    },
    ins_overdue_text: {
      en: 'Invoice <strong>#{num}</strong> ({amount}) is 9 days late. Cash flow dips below {threshold} on the 14th if unpaid.',
      uk: 'Рахунок <strong>№{num}</strong> ({amount}) прострочено на 9 днів. Якщо не оплатити, грошовий потік впаде нижче {threshold} 14-го числа.',
      es: 'La factura <strong>n.º {num}</strong> ({amount}) lleva 9 días de retraso. El flujo de caja caerá por debajo de {threshold} el día 14 si no se paga.',
      fr: 'La facture <strong>n° {num}</strong> ({amount}) a 9 jours de retard. La trésorerie passera sous {threshold} le 14 si elle n\'est pas payée.',
      de: 'Rechnung <strong>Nr. {num}</strong> ({amount}) ist 9 Tage überfällig. Der Cashflow sinkt am 14. unter {threshold}, falls unbezahlt.',
      pt: 'A fatura <strong>n.º {num}</strong> ({amount}) está 9 dias atrasada. O fluxo de caixa cai abaixo de {threshold} no dia 14 se não for paga.',
      pl: 'Faktura <strong>#{num}</strong> ({amount}) jest spóźniona o 9 dni. Przepływy spadną poniżej {threshold} 14. dnia, jeśli nie zostanie opłacona.',
      sv: 'Faktura <strong>#{num}</strong> ({amount}) är 9 dagar sen. Kassaflödet sjunker under {threshold} den 14:e om den förblir obetald.',
      zh: '发票 <strong>#{num}</strong>（{amount}）已逾期 9 天。若未付款，14 日现金流将跌破 {threshold}。',
      ar: 'الفاتورة <strong>#{num}</strong> ({amount}) متأخرة 9 أيام. سينخفض التدفق النقدي دون {threshold} في اليوم 14 إذا لم تُدفع.',
      hi: 'इनवॉइस <strong>#{num}</strong> ({amount}) 9 दिन देर से है। अगर भुगतान नहीं हुआ तो 14 तारीख को नकदी प्रवाह {threshold} से नीचे चला जाएगा।',
      ja: '請求書<strong>#{num}</strong>（{amount}）は9日延滞しています。未払いのままだと14日にキャッシュフローが{threshold}を下回ります。'
    },
    ins_software_action: {
      en: 'See vendors',
      uk: 'Переглянути постачальників',
      es: 'Ver proveedores',
      fr: 'Voir les fournisseurs',
      de: 'Anbieter ansehen',
      pt: 'Ver fornecedores',
      pl: 'Zobacz dostawców',
      sv: 'Se leverantörer',
      zh: '查看供应商',
      ar: 'عرض الموردين',
      hi: 'विक्रेता देखें',
      ja: 'ベンダーを見る'
    },
    ins_software_text: {
      en: 'Software spend is up <strong>32%</strong> this quarter. Three new subscriptions started in June.',
      uk: 'Витрати на ПЗ зросли на <strong>32%</strong> цього кварталу. У червні почалися три нові підписки.',
      es: 'El gasto en software ha subido un <strong>32%</strong> este trimestre. Se iniciaron tres nuevas suscripciones en junio.',
      fr: 'Les dépenses logicielles ont augmenté de <strong>32 %</strong> ce trimestre. Trois nouveaux abonnements ont démarré en juin.',
      de: 'Die Softwareausgaben sind dieses Quartal um <strong>32 %</strong> gestiegen. Im Juni kamen drei neue Abos hinzu.',
      pt: 'A despesa com software subiu <strong>32%</strong> este trimestre. Três novas subscrições começaram em junho.',
      pl: 'Wydatki na oprogramowanie wzrosły o <strong>32%</strong> w tym kwartale. W czerwcu rozpoczęto trzy nowe subskrypcje.',
      sv: 'Mjukvarukostnaderna har ökat med <strong>32%</strong> detta kvartal. Tre nya prenumerationer startade i juni.',
      zh: '本季度软件支出增长了 <strong>32%</strong>。6 月新增了三项订阅。',
      ar: 'ارتفع إنفاق البرمجيات بنسبة <strong>32%</strong> هذا الربع. بدأت ثلاثة اشتراكات جديدة في يونيو.',
      hi: 'इस तिमाही सॉफ़्टवेयर खर्च <strong>32%</strong> बढ़ा है। जून में तीन नई सदस्यताएं शुरू हुईं।',
      ja: '今四半期のソフトウェア支出は<strong>32%</strong>増加しました。6月に3件の新規サブスクリプションが開始されました。'
    },
    ins_revenue_action: {
      en: 'View report',
      uk: 'Переглянути звіт',
      es: 'Ver informe',
      fr: 'Voir le rapport',
      de: 'Bericht ansehen',
      pt: 'Ver relatório',
      pl: 'Zobacz raport',
      sv: 'Visa rapport',
      zh: '查看报告',
      ar: 'عرض التقرير',
      hi: 'रिपोर्ट देखें',
      ja: 'レポートを見る'
    },
    ins_revenue_text: {
      en: 'Q2 revenue is <strong>18% ahead</strong> of Q1. Your strongest quarter this year.',
      uk: 'Дохід за 2 квартал на <strong>18% вищий</strong> за 1 квартал. Найкращий квартал цього року.',
      es: 'Los ingresos del T2 están <strong>un 18% por delante</strong> del T1. Tu trimestre más fuerte este año.',
      fr: 'Le chiffre d\'affaires du T2 est <strong>en avance de 18 %</strong> sur le T1. Votre meilleur trimestre de l\'année.',
      de: 'Der Umsatz in Q2 liegt <strong>18 % über</strong> Q1. Dein stärkstes Quartal dieses Jahr.',
      pt: 'A receita do T2 está <strong>18% acima</strong> do T1. O seu trimestre mais forte este ano.',
      pl: 'Przychód w Q2 jest <strong>o 18% wyższy</strong> niż w Q1. Twój najlepszy kwartał w tym roku.',
      sv: 'Q2-intäkterna är <strong>18% högre</strong> än Q1. Ditt starkaste kvartal i år.',
      zh: '第二季度收入较第一季度<strong>高出 18%</strong>，是今年表现最强的一季。',
      ar: 'إيرادات الربع الثاني <strong>أعلى بنسبة 18%</strong> من الربع الأول. أقوى ربع لك هذا العام.',
      hi: 'Q2 राजस्व Q1 से <strong>18% आगे</strong> है। इस साल की आपकी सबसे मज़बूत तिमाही।',
      ja: '第2四半期の収益は第1四半期を<strong>18%上回り</strong>ました。今年最も好調な四半期です。'
    }
  };
  function t(lang, key, vars) {
    const row = STR[key];
    let s = row && (row[lang] || row.en) || key;
    if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
    return s;
  }
  window.NomiI18n = {
    t,
    STR
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_nomi_app/source/ui_kits/mobile_app/i18n.js", error: String((e && e.message) || e) }); }

// design_handoff_nomi_app/source/ui_kits/mobile_app/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Nomi mobile app — screens. Composes the design-system components from the
   bundle. Each screen is a fake, click-through recreation of a real view. */
(function () {
  const NS = window.NomiDesignSystem_3ea5bf;
  const {
    Card,
    Stat,
    InsightCard,
    InsightChip,
    TransactionRow,
    ProgressGoal,
    CategoryBreakdown,
    CashflowChart,
    Badge,
    Button,
    IconButton,
    ModeSwitch,
    Icon,
    Switch,
    Input
  } = NS;
  const px = v => v;
  const modeOptions = t => [{
    value: 'personal',
    label: t('mode_personal'),
    icon: 'user'
  }, {
    value: 'business',
    label: t('mode_business'),
    icon: 'briefcase'
  }];
  const TXN_CATEGORY_LABEL_KEY = {
    groceries: 'cat_groceries',
    subscriptions: 'cat_subscriptions',
    transport: 'cat_transport',
    coffee: 'cat_coffee',
    income: 'in_word',
    default: 'cat_other'
  };
  const txnCategoryLabel = (t, category) => t(TXN_CATEGORY_LABEL_KEY[category] || 'cat_other');

  // ---- shared bits ----
  function ScreenHeader({
    title,
    subtitle,
    right
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '20px 20px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)',
        fontWeight: 'var(--fw-medium)'
      }
    }, subtitle), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: 'var(--ls-tight)'
      }
    }, title)), right);
  }
  function SectionLabel({
    children,
    action,
    onAction
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '4px 0 10px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, children), action && /*#__PURE__*/React.createElement("span", {
      onClick: onAction,
      style: {
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-link)',
        cursor: 'pointer'
      }
    }, action));
  }
  const scroll = {
    flex: 1,
    overflowY: 'auto',
    padding: '0 20px 24px'
  };

  // ================= HOME =================
  function HomeScreen({
    data,
    mode,
    onMode,
    hideBalances,
    onToggleHide,
    onProfile,
    onSeeAllInsights,
    onSeeAllActivity,
    onTxnClick,
    onInsightAction,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const mask = v => hideBalances ? '••••••' : v;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 20px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/nomi-icon.png",
      width: "30",
      height: "30",
      style: {
        borderRadius: '22.5%'
      },
      alt: ""
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-body)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, t('hi_name', {
      name: data.name.split(' ')[0]
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      variant: "ghost",
      label: t('alerts')
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "user",
      variant: "ghost",
      label: t('profile'),
      onClick: onProfile
    }))), /*#__PURE__*/React.createElement(ModeSwitch, {
      value: mode,
      onChange: onMode,
      fullWidth: true,
      options: modeOptions(t)
    })), /*#__PURE__*/React.createElement("div", {
      style: scroll
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "inverse",
      radius: "xl",
      pad: "lg",
      elevation: "md",
      style: {
        marginBottom: 16,
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -30,
        top: -30,
        width: 140,
        height: 140,
        borderRadius: '50%',
        background: mode === 'business' ? 'rgba(83,74,183,0.22)' : 'rgba(53,185,141,0.16)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      tone: "inverse",
      label: mode === 'business' ? t('total_across') : t('total_balance'),
      value: mask(data.balance),
      currency: hideBalances ? '' : 'kr',
      size: "lg",
      delta: hideBalances ? undefined : '+3.2%',
      caption: hideBalances ? undefined : t('vs_last_month')
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "eye",
      variant: "ghost",
      label: hideBalances ? t('show_balances_btn') : t('hide_balances_btn'),
      onClick: onToggleHide,
      style: {
        color: 'var(--indigo-200)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'rgba(255,255,255,0.08)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--indigo-200)'
      }
    }, t('in_word')), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--green-300)'
      }
    }, hideBalances ? '••••' : '+' + data.inThisMonth + ' kr')), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'rgba(255,255,255,0.08)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--indigo-200)'
      }
    }, t('out_word')), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-medium)',
        color: '#fff'
      }
    }, hideBalances ? '••••' : '-' + data.outThisMonth + ' kr')))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        margin: '4px 0 10px'
      }
    }, /*#__PURE__*/React.createElement(InsightChip, {
      mode: mode,
      size: "sm"
    }, t('nomi_insight')), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      onClick: onSeeAllInsights,
      style: {
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-link)',
        cursor: 'pointer'
      }
    }, t('all_insights'))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(InsightCard, {
      tone: data.insights[0].tone,
      timestamp: data.insights[0].timestamp,
      title: data.insights[0].title,
      actionLabel: data.insights[0].action,
      onAction: () => onInsightAction && onInsightAction(data.insights[0])
    }, /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: data.insights[0].text
      }
    }))), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, null, mode === 'business' ? t('cashflow_month') : t('cashflow_week')), /*#__PURE__*/React.createElement(CashflowChart, {
      data: data.cashflow,
      height: 130,
      variant: "area",
      legendInLabel: t('legend_money_in'),
      legendOutLabel: t('legend_money_out')
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(ProgressGoal, data.goal)), /*#__PURE__*/React.createElement(SectionLabel, {
      action: t('see_all'),
      onAction: onSeeAllActivity
    }, t('recent_activity')), /*#__PURE__*/React.createElement(Card, {
      pad: "sm"
    }, data.transactions.slice(0, 4).map((t2, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(TransactionRow, _extends({}, t2, {
      categoryLabel: txnCategoryLabel(t, t2.category),
      onClick: () => onTxnClick && onTxnClick(t2)
    })))))));
  }

  // ================= INSIGHTS =================
  function InsightsScreen({
    data,
    mode,
    onInsightAction,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(ScreenHeader, {
      subtitle: mode === 'business' ? t('mode_business') : t('mode_personal'),
      title: t('insights_title'),
      right: /*#__PURE__*/React.createElement(InsightChip, {
        mode: mode
      }, t('insights_new', {
        n: data.insights.length
      }))
    }), /*#__PURE__*/React.createElement("div", {
      style: scroll
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)',
        margin: '4px 0 16px',
        lineHeight: 1.5
      }
    }, t('insights_para')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, data.insights.map(ins => /*#__PURE__*/React.createElement(InsightCard, {
      key: ins.id,
      tone: ins.tone,
      timestamp: ins.timestamp,
      title: ins.title,
      actionLabel: ins.action,
      onAction: () => onInsightAction && onInsightAction(ins),
      dismissable: true
    }, /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: ins.text
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      color: "var(--green-500)"
    }), " ", t('all_caught_up')))));
  }

  // ================= ACTIVITY =================
  function ActivityScreen({
    data,
    mode,
    onTxnClick,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [range, setRange] = React.useState('m');
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const RANGE_MULT = {
      w: 1 / 4.33,
      m: 1,
      y: 12
    };
    const RANGE_LABEL = {
      w: t('range_week'),
      m: t('range_month'),
      y: t('range_year')
    };
    const mult = RANGE_MULT[range];
    const scaledCategories = data.categories.map(c => ({
      ...c,
      amount: Math.max(1, Math.round(c.amount * mult))
    }));
    const totalSpend = scaledCategories.reduce((s, c) => s + c.amount, 0);
    const rangeTxns = range === 'w' ? data.transactions.slice(0, 3) : data.transactions;
    const q = query.trim().toLowerCase();
    const shownTxns = q ? rangeTxns.filter(tx => (tx.merchant + ' ' + tx.category).toLowerCase().includes(q)) : rangeTxns;
    const closeSearch = () => {
      setSearchOpen(false);
      setQuery('');
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(ScreenHeader, {
      subtitle: mode === 'business' ? t('mode_business') : t('mode_personal'),
      title: t('activity_title'),
      right: /*#__PURE__*/React.createElement(IconButton, {
        icon: searchOpen ? 'x' : 'search',
        variant: "soft",
        label: searchOpen ? t('close_search') : t('search'),
        onClick: () => searchOpen ? closeSearch() : setSearchOpen(true)
      })
    }), searchOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 20px 12px'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      icon: "search",
      placeholder: t('search_placeholder'),
      value: query,
      onChange: e => setQuery(e.target.value),
      autoFocus: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 20px 12px'
      }
    }, /*#__PURE__*/React.createElement(ModeSwitch, {
      size: "sm",
      fullWidth: true,
      value: range,
      onChange: setRange,
      options: [{
        value: 'w',
        label: t('week')
      }, {
        value: 'm',
        label: t('month')
      }, {
        value: 'y',
        label: t('year')
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: scroll
    }, !q && /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, null, t('spend_by_category', {
      range: RANGE_LABEL[range]
    })), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-h3)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)',
        margin: '2px 0 14px'
      }
    }, totalSpend.toLocaleString('sv-SE'), " kr"), /*#__PURE__*/React.createElement(CategoryBreakdown, {
      items: scaledCategories
    })), /*#__PURE__*/React.createElement(SectionLabel, {
      action: q ? undefined : t('export')
    }, q ? t('results_for', {
      q: query
    }) : t('transactions')), shownTxns.length ? /*#__PURE__*/React.createElement(Card, {
      pad: "sm"
    }, shownTxns.map((tx, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(TransactionRow, _extends({}, tx, {
      categoryLabel: txnCategoryLabel(t, tx.category),
      onClick: () => onTxnClick && onTxnClick(tx)
    }))))) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '28px 0',
        textAlign: 'center',
        color: 'var(--text-subtle)',
        fontSize: 'var(--fs-body-sm)'
      }
    }, t('no_match', {
      q: query
    }))));
  }

  // ================= SETTINGS =================
  const ACCOUNTS = {
    personal: [{
      bank: 'SEB',
      kind: 'Personal · checking',
      last: '4821',
      icon: 'building-bank'
    }, {
      bank: 'Swedbank',
      kind: 'Savings',
      last: '0093',
      icon: 'pig-money'
    }, {
      bank: 'Amex',
      kind: 'Credit card',
      last: '1007',
      icon: 'credit-card'
    }],
    business: [{
      bank: 'SEB Företag',
      kind: 'Business · operating',
      last: '7742',
      icon: 'building-bank'
    }, {
      bank: 'Wise',
      kind: 'Multi-currency',
      last: '5510',
      icon: 'coin'
    }, {
      bank: 'Eurocard',
      kind: 'Corporate card',
      last: '2288',
      icon: 'credit-card'
    }]
  };
  function SettingRow({
    label,
    desc,
    children,
    onClick,
    first
  }) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '14px 0',
        borderTop: first ? 'none' : '1px solid var(--border-subtle)',
        cursor: onClick ? 'pointer' : 'default'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-body)',
        color: 'var(--text-strong)',
        fontWeight: 'var(--fw-medium)'
      }
    }, label), desc && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-muted)',
        marginTop: 1
      }
    }, desc)), children);
  }
  const LANGUAGES = [{
    code: 'en',
    name: 'English',
    native: 'English'
  }, {
    code: 'uk',
    name: 'Ukrainian',
    native: 'Українська'
  }, {
    code: 'es',
    name: 'Spanish',
    native: 'Español'
  }, {
    code: 'fr',
    name: 'French',
    native: 'Français'
  }, {
    code: 'de',
    name: 'German',
    native: 'Deutsch'
  }, {
    code: 'pt',
    name: 'Portuguese',
    native: 'Português'
  }, {
    code: 'pl',
    name: 'Polish',
    native: 'Polski'
  }, {
    code: 'sv',
    name: 'Swedish',
    native: 'Svenska'
  }, {
    code: 'zh',
    name: 'Chinese',
    native: '中文'
  }, {
    code: 'ar',
    name: 'Arabic',
    native: 'العربية'
  }, {
    code: 'hi',
    name: 'Hindi',
    native: 'हिन्दी'
  }, {
    code: 'ja',
    name: 'Japanese',
    native: '日本語'
  }];
  function LanguageSheet({
    open,
    value,
    onClose,
    onSelect,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 40,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 90,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 24px',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        flexDirection: 'column',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, t('language_sheet_title')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)',
        margin: '0 0 8px',
        flexShrink: 0
      }
    }, t('language_sheet_desc')), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }
    }, LANGUAGES.map((l, i) => /*#__PURE__*/React.createElement("button", {
      key: l.code,
      onClick: () => onSelect(l.code),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '13px 4px',
        borderTop: i ? '1px solid var(--border-subtle)' : 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-body)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, l.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)'
      }
    }, l.native)), value === l.code && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18,
      color: "var(--indigo-600)"
    }))))));
  }
  function AccountsSheet({
    open,
    mode,
    onClose,
    showToast,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const list = ACCOUNTS[mode] || ACCOUNTS.personal;
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 40,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 24px',
        boxShadow: 'var(--shadow-xl)',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, t('connected_accounts_title')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)',
        margin: '0 0 12px'
      }
    }, t('linked_updated', {
      n: list.length
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, list.map((a, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 0',
        borderTop: i ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        flexShrink: 0,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-brand-soft)',
        color: 'var(--indigo-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-body)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, a.bank), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)'
      }
    }, a.kind, " \xB7\xB7\xB7\xB7 ", a.last)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 'var(--fs-caption)',
        color: 'var(--positive-600)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--positive-500)'
      }
    }), " ", t('synced'))))), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      iconLeft: "plus",
      style: {
        marginTop: 16
      },
      onClick: () => {
        onClose();
        showToast(t('toast_bank_started'));
      }
    }, t('connect_account_btn'))));
  }
  function PremiumSheet({
    open,
    onClose,
    onUpgrade,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const features = [t('premium_feature_1'), t('premium_feature_2'), t('premium_feature_3')];
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 45,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 26px',
        boxShadow: 'var(--shadow-xl)',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, t('premium_sheet_title')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)',
        margin: '0 0 16px'
      }
    }, t('premium_sheet_sub')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginBottom: 18
      }
    }, features.map((f, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: 'var(--surface-brand-soft)',
        color: 'var(--indigo-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      strokeWidth: 3
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-strong)'
      }
    }, f)))), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-h3)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)',
        marginBottom: 16
      }
    }, t('premium_price')), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      fullWidth: true,
      size: "lg",
      onClick: onUpgrade
    }, t('premium_upgrade_btn')), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'center',
        marginTop: 14,
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-muted)'
      }
    }, t('premium_maybe_later'))));
  }
  function ProfileEditSheet({
    open,
    user,
    onClose,
    onSave,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const fileRef = React.useRef(null);
    const [form, setForm] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      photo: null
    });
    const [pwOpen, setPwOpen] = React.useState(false);
    const [currentPw, setCurrentPw] = React.useState('');
    const [newPw, setNewPw] = React.useState('');
    const [errors, setErrors] = React.useState({});
    React.useEffect(() => {
      if (open) {
        setForm({
          firstName: user && user.firstName || '',
          lastName: user && user.lastName || '',
          email: user && user.email || '',
          phone: user && user.phone || '',
          photo: user && user.photo || null
        });
        setPwOpen(false);
        setCurrentPw('');
        setNewPw('');
        setErrors({});
      }
    }, [open, user]);
    const set = k => e => setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    function pickPhoto(e) {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => setForm(f => ({
        ...f,
        photo: reader.result
      }));
      reader.readAsDataURL(file);
    }
    function submit() {
      const e = {};
      if (!form.firstName.trim()) e.firstName = t('reg_err_required');
      if (!form.lastName.trim()) e.lastName = t('reg_err_required');
      if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = t('reg_err_email');
      if (pwOpen) {
        if (!currentPw) e.currentPw = t('reg_err_required');else if (user && user.password && currentPw !== user.password) e.currentPw = t('profile_wrong_password');
        if (newPw.length < 8) e.newPw = t('reg_err_password');
      }
      setErrors(e);
      if (Object.keys(e).length) return;
      onSave({
        ...form,
        newPassword: pwOpen ? newPw : undefined
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 47,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 60,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 24px',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        flexDirection: 'column',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, t('profile_edit_title')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => fileRef.current && fileRef.current.click(),
      style: {
        width: 84,
        height: 84,
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        padding: 0,
        background: form.photo ? `url(${form.photo}) center/cover` : 'var(--surface-brand-soft)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--indigo-700)'
      }
    }, !form.photo && /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 34
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: 'var(--indigo-700)',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }))), /*#__PURE__*/React.createElement("input", {
      ref: fileRef,
      type: "file",
      accept: "image/*",
      onChange: pickPhoto,
      style: {
        display: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-muted)',
        marginTop: 8
      }
    }, t('profile_add_photo'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: t('reg_first_name'),
      value: form.firstName,
      onChange: set('firstName'),
      error: errors.firstName
    }), /*#__PURE__*/React.createElement(Input, {
      label: t('reg_last_name'),
      value: form.lastName,
      onChange: set('lastName'),
      error: errors.lastName
    }), /*#__PURE__*/React.createElement(Input, {
      label: t('reg_email'),
      type: "email",
      value: form.email,
      onChange: set('email'),
      error: errors.email
    }), /*#__PURE__*/React.createElement(Input, {
      label: t('reg_phone_label'),
      type: "tel",
      value: form.phone,
      onChange: set('phone')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, !pwOpen ? /*#__PURE__*/React.createElement("button", {
      onClick: () => setPwOpen(true),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--indigo-700)'
      }
    }, t('profile_change_password')) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, t('profile_change_password')), /*#__PURE__*/React.createElement(Input, {
      label: t('profile_current_password'),
      type: "password",
      value: currentPw,
      onChange: e => setCurrentPw(e.target.value),
      error: errors.currentPw
    }), /*#__PURE__*/React.createElement(Input, {
      label: t('profile_new_password'),
      type: "password",
      value: newPw,
      onChange: e => setNewPw(e.target.value),
      error: errors.newPw
    })))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg",
      style: {
        marginTop: 16,
        flexShrink: 0
      },
      onClick: submit
    }, t('profile_save_btn'))));
  }
  function SettingsScreen({
    data,
    mode,
    onMode,
    settings,
    setSetting,
    showToast,
    onSignOut,
    user,
    onUpdateProfile,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [sheet, setSheet] = React.useState(false);
    const [langSheet, setLangSheet] = React.useState(false);
    const [premiumSheet, setPremiumSheet] = React.useState(false);
    const [profileSheet, setProfileSheet] = React.useState(false);
    const [confirmCancel, setConfirmCancel] = React.useState(false);
    const isPremium = mode === 'business' || !!settings.premium;
    const accountCount = (ACCOUNTS[mode] || ACCOUNTS.personal).length;
    const currentLang = LANGUAGES.find(l => l.code === (settings.language || 'en')) || LANGUAGES[0];
    const toggle = (key, msg) => v => {
      setSetting(key, v);
      if (msg) showToast(typeof msg === 'function' ? msg(v) : msg);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(ScreenHeader, {
      subtitle: t('account_word'),
      title: t('settings_title')
    }), /*#__PURE__*/React.createElement("div", {
      style: scroll
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        cursor: 'pointer'
      },
      onClick: () => setProfileSheet(true)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: '50%',
        flexShrink: 0,
        background: user && user.photo ? `url(${user.photo}) center/cover` : mode === 'business' ? 'var(--purple-100)' : 'var(--indigo-100)',
        color: mode === 'business' ? 'var(--purple-700)' : 'var(--indigo-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, !(user && user.photo) && /*#__PURE__*/React.createElement(Icon, {
      name: mode === 'business' ? 'briefcase' : 'user',
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, data.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-muted)'
      }
    }, mode === 'business' ? t('business_plan') : t('free_plan'))), /*#__PURE__*/React.createElement(Badge, {
      tone: isPremium ? 'brand' : 'neutral',
      size: "sm",
      style: isPremium ? {
        background: 'var(--purple-500)',
        color: '#fff'
      } : undefined
    }, isPremium ? t('premium') : t('free')), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18,
      color: "var(--text-subtle)"
    })), /*#__PURE__*/React.createElement(SectionLabel, null, t('mode_label')), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(ModeSwitch, {
      value: mode,
      onChange: onMode,
      fullWidth: true,
      options: modeOptions(t)
    })), /*#__PURE__*/React.createElement(SectionLabel, null, t('accounts_label')), /*#__PURE__*/React.createElement(Card, {
      pad: "sm",
      style: {
        padding: '2px 16px',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(SettingRow, {
      label: t('connected_accounts'),
      desc: t('linked_synced', {
        n: accountCount
      }),
      onClick: () => setSheet(true),
      first: true
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color: 'var(--text-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "num",
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)'
      }
    }, accountCount), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18
    })))), /*#__PURE__*/React.createElement(SectionLabel, null, t('privacy_security')), /*#__PURE__*/React.createElement(Card, {
      pad: "sm",
      style: {
        padding: '2px 16px',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(SettingRow, {
      label: t('hide_balances_row'),
      desc: t('hide_balances_desc'),
      first: true
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: settings.hideBalances,
      onChange: toggle('hideBalances', v => v ? t('toast_balances_hidden') : t('toast_balances_shown'))
    })), /*#__PURE__*/React.createElement(SettingRow, {
      label: t('faceid_row'),
      desc: t('faceid_desc')
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: settings.biometric,
      onChange: toggle('biometric', v => v ? t('toast_faceid_on') : t('toast_faceid_off'))
    }))), /*#__PURE__*/React.createElement(SectionLabel, null, t('notifications_label')), /*#__PURE__*/React.createElement(Card, {
      pad: "sm",
      style: {
        padding: '2px 16px',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(SettingRow, {
      label: t('weekly_summary_row'),
      desc: t('weekly_summary_desc'),
      first: true
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: settings.weekly,
      onChange: toggle('weekly')
    })), /*#__PURE__*/React.createElement(SettingRow, {
      label: t('realtime_row'),
      desc: t('realtime_desc')
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: settings.realtime,
      onChange: toggle('realtime')
    }))), /*#__PURE__*/React.createElement(SectionLabel, null, t('preferences_label')), /*#__PURE__*/React.createElement(Card, {
      pad: "sm",
      style: {
        padding: '2px 16px',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(SettingRow, {
      label: t('language_row'),
      desc: t('language_desc'),
      onClick: () => setLangSheet(true),
      first: true
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color: 'var(--text-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)'
      }
    }, currentLang.name), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18
    }))), /*#__PURE__*/React.createElement(SettingRow, {
      label: t('dark_mode_row'),
      desc: t('dark_mode_desc')
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: !!settings.darkMode,
      onChange: toggle('darkMode', v => v ? t('toast_dark_on') : t('toast_dark_off'))
    })), /*#__PURE__*/React.createElement(SettingRow, {
      label: t('reduced_motion_row'),
      desc: t('reduced_motion_desc')
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: settings.reducedMotion,
      onChange: toggle('reducedMotion', v => v ? t('toast_motion_on') : t('toast_motion_off'))
    }))), !isPremium && /*#__PURE__*/React.createElement(Card, {
      tone: "brand",
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 22,
      color: "var(--green-600)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--indigo-900)'
      }
    }, t('upgrade_title')), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--indigo-700)',
        margin: '4px 0 14px'
      }
    }, t('upgrade_desc')), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      iconRight: "arrow-right",
      onClick: () => setPremiumSheet(true)
    }, t('upgrade_btn'))))), settings.premium && /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, t('manage_plan_title')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, t('manage_plan_desc'))), /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      size: "sm",
      style: {
        background: 'var(--purple-500)',
        color: '#fff'
      }
    }, t('premium'))), !confirmCancel ? /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      size: "sm",
      style: {
        marginTop: 14,
        color: 'var(--negative-600)'
      },
      onClick: () => setConfirmCancel(true)
    }, t('cancel_subscription_btn')) : /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)',
        marginBottom: 12
      }
    }, t('cancel_subscription_confirm')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      size: "sm",
      onClick: () => setConfirmCancel(false)
    }, t('cancel_subscription_keep')), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "sm",
      style: {
        background: 'var(--negative-600)'
      },
      onClick: () => {
        setSetting('premium', false);
        setConfirmCancel(false);
        showToast(t('toast_subscription_canceled'));
      }
    }, t('cancel_subscription_yes'))))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      iconLeft: "arrow-left",
      onClick: onSignOut,
      style: {
        color: 'var(--negative-600)'
      }
    }, t('sign_out'))), /*#__PURE__*/React.createElement(AccountsSheet, {
      open: sheet,
      mode: mode,
      onClose: () => setSheet(false),
      showToast: showToast,
      lang: lang
    }), /*#__PURE__*/React.createElement(PremiumSheet, {
      open: premiumSheet,
      onClose: () => setPremiumSheet(false),
      lang: lang,
      onUpgrade: () => {
        setSetting('premium', true);
        setPremiumSheet(false);
        showToast(t('toast_upgrade_done'));
      }
    }), /*#__PURE__*/React.createElement(ProfileEditSheet, {
      open: profileSheet,
      user: user,
      onClose: () => setProfileSheet(false),
      lang: lang,
      onSave: form => {
        onUpdateProfile(form);
        setProfileSheet(false);
        showToast(t('toast_profile_saved'));
      }
    }), /*#__PURE__*/React.createElement(LanguageSheet, {
      open: langSheet,
      value: settings.language || 'en',
      onClose: () => setLangSheet(false),
      lang: lang,
      onSelect: code => {
        setSetting('language', code);
        setLangSheet(false);
        const l = LANGUAGES.find(x => x.code === code);
        showToast(t('toast_lang_set', {
          name: l ? l.name : code
        }));
      }
    }));
  }

  // ================= TRANSACTION DETAIL =================
  function TransactionDetailSheet({
    open,
    txn,
    mode,
    onClose,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    if (!txn) return null;
    const accountList = ACCOUNTS[mode] || ACCOUNTS.personal;
    const acct = accountList[0];
    const ref = 'NM-' + (txn.merchant || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 4).toUpperCase() + '-' + String((txn.amount || '').replace(/\D/g, '')).slice(-4).padStart(4, '0');
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 45,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 26px',
        boxShadow: 'var(--shadow-xl)',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, t('txn_detail_title')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 56,
        borderRadius: 'var(--radius-md)',
        background: txn.iconBg || 'var(--surface-brand-soft)',
        color: txn.iconFg || 'var(--indigo-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: txn.icon || 'wallet',
      size: 26
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, txn.merchant), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-h1)',
        fontWeight: 'var(--fw-medium)',
        marginTop: 6,
        color: txn.positive ? 'var(--positive-600)' : 'var(--text-strong)'
      }
    }, txn.positive ? '+' : '-', txn.amount), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 'var(--fs-caption)',
        color: 'var(--positive-600)',
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--positive-500)'
      }
    }), " ", t('txn_detail_status'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, [[t('txn_detail_category'), txnCategoryLabel(t, txn.category)], [t('txn_detail_date'), txn.date], [t('txn_detail_account'), acct ? `${acct.bank} ···· ${acct.last}` : '—'], [t('txn_detail_ref'), ref]].map(([label, value], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '11px 0',
        borderTop: i ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      className: "num",
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, value))))));
  }

  // ================= INSIGHT ACTION =================
  function InsightActionSheet({
    open,
    insight,
    mode,
    onClose,
    showToast,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [reminderSent, setReminderSent] = React.useState(false);
    const [cancelled, setCancelled] = React.useState(false);
    const [moved, setMoved] = React.useState(false);
    React.useEffect(() => {
      if (open) {
        setReminderSent(false);
        setCancelled(false);
        setMoved(false);
      }
    }, [open, insight && insight.id]);
    if (!insight) return null;
    function addToCalendar() {
      const clean = (insight.text || '').replace(/<[^>]+>/g, '');
      const start = new Date();
      start.setDate(start.getDate() + 1);
      start.setHours(9, 0, 0, 0);
      const dt = start.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
      const ics = 'BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:' + (insight.title || insight.action) + '\nDTSTART:' + dt + '\nDESCRIPTION:' + clean + '\nEND:VEVENT\nEND:VCALENDAR';
      const a = document.createElement('a');
      a.href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics);
      a.download = 'nomi-reminder.ics';
      a.click();
      showToast(t('toast_added_calendar'));
    }
    const key = insight.actionKey;
    let body;
    if (key === 'ins_overdue_action') {
      body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--text-muted)',
          marginBottom: 18,
          lineHeight: 1.5
        },
        dangerouslySetInnerHTML: {
          __html: insight.text
        }
      }), !reminderSent ? /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        size: "lg",
        onClick: () => {
          setReminderSent(true);
          showToast(t('toast_reminder_sent'));
        }
      }, t('ins_overdue_action')) : /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--positive-600)',
          marginBottom: 4
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16
      }), " ", t('toast_reminder_sent')), /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        fullWidth: true,
        size: "lg",
        iconLeft: "calendar",
        style: {
          marginTop: 10
        },
        onClick: addToCalendar
      }, t('add_to_calendar_btn')));
    } else if (key === 'ins_unused_action') {
      body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--text-muted)',
          marginBottom: 18,
          lineHeight: 1.5
        },
        dangerouslySetInnerHTML: {
          __html: insight.text
        }
      }), !cancelled ? /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        size: "lg",
        style: {
          background: 'var(--negative-600)'
        },
        onClick: () => {
          setCancelled(true);
          showToast(t('toast_vendor_canceled'));
        }
      }, t('cancel_subscription_btn')) : /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--positive-600)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16
      }), " ", t('toast_vendor_canceled')));
    } else if (key === 'ins_move_action') {
      body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--text-muted)',
          marginBottom: 18,
          lineHeight: 1.5
        },
        dangerouslySetInnerHTML: {
          __html: insight.text
        }
      }), !moved ? /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        size: "lg",
        onClick: () => {
          setMoved(true);
          showToast(t('toast_moved_savings'));
        }
      }, t('confirm_transfer_btn')) : /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--positive-600)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16
      }), " ", t('toast_moved_savings')));
    } else if (key === 'ins_software_action') {
      const vendors = [{
        name: 'Figma',
        amount: '1,240 kr'
      }, {
        name: 'AWS',
        amount: '3,180 kr'
      }, {
        name: 'Notion',
        amount: '360 kr'
      }, {
        name: 'Slack',
        amount: '890 kr'
      }];
      body = /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column'
        }
      }, vendors.map((v, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '11px 0',
          borderTop: i ? '1px solid var(--border-subtle)' : 'none'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 'var(--fs-body)',
          color: 'var(--text-strong)'
        }
      }, v.name), /*#__PURE__*/React.createElement("span", {
        className: "num",
        style: {
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--text-muted)'
        }
      }, v.amount, "/mo"))));
    } else if (key === 'ins_revenue_action') {
      body = /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column'
        }
      }, [['Q1', '81,400 kr'], ['Q2', '96,000 kr']].map(([q, amt], i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '11px 0',
          borderTop: i ? '1px solid var(--border-subtle)' : 'none'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 'var(--fs-body)',
          color: 'var(--text-strong)'
        }
      }, q), /*#__PURE__*/React.createElement("span", {
        className: "num",
        style: {
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--text-muted)'
        }
      }, amt))), /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        fullWidth: true,
        size: "lg",
        iconLeft: "download",
        style: {
          marginTop: 16
        },
        onClick: () => showToast(t('toast_report_exported'))
      }, t('export')));
    } else {
      body = /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--text-muted)',
          lineHeight: 1.5
        },
        dangerouslySetInnerHTML: {
          __html: insight.text
        }
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 46,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 26px',
        boxShadow: 'var(--shadow-xl)',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, insight.title || insight.action), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), body));
  }

  // ================= ADD TRANSACTION =================
  function txnCategories(t) {
    return [{
      value: 'groceries',
      label: t('cat_groceries'),
      icon: 'shopping-bag'
    }, {
      value: 'transport',
      label: t('cat_transport'),
      icon: 'card'
    }, {
      value: 'subscriptions',
      label: t('cat_subscriptions'),
      icon: 'repeat'
    }, {
      value: 'coffee',
      label: t('cat_coffee'),
      icon: 'coffee'
    }, {
      value: 'default',
      label: t('cat_other'),
      icon: 'wallet'
    }];
  }
  function AddTransactionSheet({
    open,
    onClose,
    onAdd,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const TXN_CATEGORIES = txnCategories(t);
    const [kind, setKind] = React.useState('expense');
    const [merchant, setMerchant] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [category, setCategory] = React.useState('groceries');
    React.useEffect(() => {
      if (open) {
        setKind('expense');
        setMerchant('');
        setAmount('');
        setCategory('groceries');
      }
    }, [open]);
    const valid = merchant.trim() && parseFloat(amount) > 0;
    const submit = () => {
      if (!valid) return;
      const n = Math.abs(parseFloat(amount));
      onAdd({
        merchant: merchant.trim(),
        category: kind === 'income' ? 'income' : category,
        positive: kind === 'income',
        amount: n.toLocaleString('sv-SE') + ' kr',
        dateKey: {
          type: 'just_now'
        }
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 45,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 26px',
        boxShadow: 'var(--shadow-xl)',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, t('add_txn_title')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginBottom: 16
      }
    }, [{
      v: 'expense',
      l: t('expense')
    }, {
      v: 'income',
      l: t('income')
    }].map(o => /*#__PURE__*/React.createElement("button", {
      key: o.v,
      onClick: () => setKind(o.v),
      style: {
        flex: 1,
        padding: '10px 0',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        border: `1px solid ${kind === o.v ? 'var(--indigo-600)' : 'var(--border-default)'}`,
        background: kind === o.v ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
        color: kind === o.v ? 'var(--indigo-800)' : 'var(--text-muted)',
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)'
      }
    }, o.l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: t('merchant_label'),
      placeholder: kind === 'income' ? t('merchant_ph_income') : t('merchant_ph_expense'),
      value: merchant,
      onChange: e => setMerchant(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: t('amount_label'),
      placeholder: "0",
      suffix: "kr",
      inputMode: "decimal",
      value: amount,
      onChange: e => setAmount(e.target.value.replace(/[^0-9.]/g, ''))
    }), kind === 'expense' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-body)',
        marginBottom: 8
      }
    }, t('category_label')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, TXN_CATEGORIES.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.value,
      onClick: () => setCategory(c.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '8px 12px',
        borderRadius: 'var(--radius-pill)',
        border: `1px solid ${category === c.value ? 'var(--indigo-600)' : 'var(--border-default)'}`,
        background: category === c.value ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
        color: category === c.value ? 'var(--indigo-800)' : 'var(--text-muted)',
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-medium)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 14
    }), " ", c.label))))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg",
      disabled: !valid,
      style: {
        marginTop: 20
      },
      onClick: submit
    }, t('add_txn_btn'))));
  }

  // ================= INTRO (welcome, before mode chooser) =================
  const INTRO_SLIDES = [{
    icon: 'building-bank',
    titleKey: 'intro0_title',
    descKey: 'intro0_desc'
  }, {
    icon: 'sparkles',
    titleKey: 'intro1_title',
    descKey: 'intro1_desc'
  }, {
    icon: 'target',
    titleKey: 'intro2_title',
    descKey: 'intro2_desc'
  }, {
    icon: 'wallet',
    titleKey: 'intro3_title',
    descKey: 'intro3_desc'
  }];
  function IntroScreens({
    onDone,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [step, setStep] = React.useState(0);
    const last = step === INTRO_SLIDES.length - 1;
    const slide = INTRO_SLIDES[step];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '20px 22px 22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, !last && /*#__PURE__*/React.createElement("button", {
      onClick: onDone,
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '6px 4px',
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-muted)'
      }
    }, t('intro_skip'))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 84,
        height: 84,
        borderRadius: '22.5%',
        background: 'var(--surface-brand-soft)',
        color: 'var(--indigo-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: slide.icon,
      size: 40
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: 'var(--ls-tight)'
      }
    }, t(slide.titleKey)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body)',
        color: 'var(--text-muted)',
        marginTop: 10,
        lineHeight: 1.5,
        maxWidth: 300
      }
    }, t(slide.descKey)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 22
      }
    }, INTRO_SLIDES.map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: i === step ? 20 : 7,
        height: 7,
        borderRadius: 'var(--radius-pill)',
        background: i === step ? 'var(--indigo-700)' : 'var(--neutral-200)',
        transition: 'all var(--dur-normal) var(--ease-standard)'
      }
    }))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg",
      iconRight: "arrow-right",
      onClick: () => last ? onDone() : setStep(s => s + 1)
    }, last ? t('intro_get_started') : t('intro_next')));
  }

  // ================= ONBOARDING =================
  function OnboardingScreen({
    onDone,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [choice, setChoice] = React.useState(null);
    const Opt = ({
      id,
      icon,
      title,
      desc
    }) => {
      const on = choice === id;
      return /*#__PURE__*/React.createElement("button", {
        onClick: () => setChoice(id),
        style: {
          textAlign: 'left',
          display: 'flex',
          gap: 14,
          alignItems: 'flex-start',
          width: '100%',
          padding: 18,
          borderRadius: 'var(--radius-lg)',
          cursor: 'pointer',
          background: on ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
          border: `1px solid ${on ? 'var(--indigo-500)' : 'var(--border-default)'}`,
          boxShadow: on ? 'var(--shadow-sm)' : 'none',
          transition: 'all var(--dur-fast) var(--ease-standard)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 44,
          height: 44,
          flexShrink: 0,
          borderRadius: 'var(--radius-md)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: on ? 'var(--indigo-800)' : 'var(--neutral-100)',
          color: on ? '#fff' : 'var(--indigo-700)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: icon,
        size: 22
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 'var(--fs-h4)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--text-strong)'
        }
      }, title), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--text-muted)',
          marginTop: 2
        }
      }, desc)), /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 22,
          borderRadius: '50%',
          border: `2px solid ${on ? 'var(--indigo-600)' : 'var(--border-default)'}`,
          background: on ? 'var(--indigo-600)' : 'transparent',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          marginTop: 2
        }
      }, on && /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 13,
        strokeWidth: 3
      })));
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '32px 22px 22px'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/nomi-icon.png",
      width: "52",
      height: "52",
      style: {
        borderRadius: '22.5%'
      },
      alt: "Nomi"
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: 'var(--ls-tight)',
        marginTop: 22
      }
    }, t('onboard_title')), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body)',
        color: 'var(--text-muted)',
        marginTop: 8,
        lineHeight: 1.5
      }
    }, t('onboard_sub')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Opt, {
      id: "personal",
      icon: "user",
      title: t('onboard_personal_title'),
      desc: t('onboard_personal_desc')
    }), /*#__PURE__*/React.createElement(Opt, {
      id: "business",
      icon: "briefcase",
      title: t('onboard_business_title'),
      desc: t('onboard_business_desc')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg",
      disabled: !choice,
      iconRight: "arrow-right",
      onClick: () => onDone(choice)
    }, t('continue_btn')), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)',
        marginTop: 14
      }
    }, t('onboard_footer')));
  }

  // ================= REGISTRATION (details -> phone -> verify) =================
  function RegisterScreen({
    onDone,
    onSwitchToSignIn,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [step, setStep] = React.useState('details'); // details | phone | verify
    const [form, setForm] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      code: ''
    });
    const [errors, setErrors] = React.useState({});
    const [sent, setSent] = React.useState(false);
    const set = k => e => setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    function validateDetails() {
      const e = {};
      if (!form.firstName.trim()) e.firstName = t('reg_err_required');
      if (!form.lastName.trim()) e.lastName = t('reg_err_required');
      if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = t('reg_err_email');
      if (form.password.length < 8) e.password = t('reg_err_password');
      setErrors(e);
      return Object.keys(e).length === 0;
    }
    function validatePhone() {
      const e = {};
      if (!/^[\d +()-]{6,}$/.test(form.phone.trim())) e.phone = t('reg_err_phone');
      setErrors(e);
      return Object.keys(e).length === 0;
    }
    function validateCode() {
      const e = {};
      if (!/^\d{6}$/.test(form.code.trim())) e.code = t('reg_err_code');
      setErrors(e);
      return Object.keys(e).length === 0;
    }
    const Header = ({
      title,
      sub
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: 'var(--ls-tight)'
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body)',
        color: 'var(--text-muted)',
        marginTop: 8,
        lineHeight: 1.5
      }
    }, sub));
    let body;
    if (step === 'details') {
      body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
        title: t('reg_title'),
        sub: t('reg_sub')
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement(Input, {
        label: t('reg_first_name'),
        value: form.firstName,
        onChange: set('firstName'),
        error: errors.firstName
      }), /*#__PURE__*/React.createElement(Input, {
        label: t('reg_last_name'),
        value: form.lastName,
        onChange: set('lastName'),
        error: errors.lastName
      }), /*#__PURE__*/React.createElement(Input, {
        label: t('reg_email'),
        type: "email",
        icon: "user",
        value: form.email,
        onChange: set('email'),
        error: errors.email,
        placeholder: "you@example.com"
      }), /*#__PURE__*/React.createElement(Input, {
        label: t('reg_password'),
        type: "password",
        value: form.password,
        onChange: set('password'),
        error: errors.password,
        hint: errors.password ? undefined : t('reg_password_hint')
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        size: "lg",
        iconRight: "arrow-right",
        style: {
          marginTop: 20
        },
        onClick: () => validateDetails() && setStep('phone')
      }, t('continue_btn')), /*#__PURE__*/React.createElement("button", {
        onClick: onSwitchToSignIn,
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'center',
          marginTop: 14,
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--indigo-700)'
        }
      }, t('toggle_to_signin')));
    } else if (step === 'phone') {
      body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
        title: t('reg_phone_title'),
        sub: t('reg_phone_sub')
      }), /*#__PURE__*/React.createElement(Input, {
        label: t('reg_phone_label'),
        type: "tel",
        inputMode: "tel",
        placeholder: "+46 70 123 45 67",
        value: form.phone,
        onChange: set('phone'),
        error: errors.phone
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        size: "lg",
        style: {
          marginTop: 20
        },
        onClick: () => {
          if (validatePhone()) {
            setSent(true);
            setStep('verify');
          }
        }
      }, t('reg_send_code')), /*#__PURE__*/React.createElement("button", {
        onClick: () => setStep('details'),
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          marginTop: 14,
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--text-muted)'
        }
      }, t('reg_back')));
    } else {
      body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
        title: t('reg_verify_title'),
        sub: t('reg_verify_sub', {
          phone: form.phone
        })
      }), /*#__PURE__*/React.createElement(Input, {
        label: t('reg_code_label'),
        inputMode: "numeric",
        maxLength: 6,
        placeholder: "000000",
        value: form.code,
        onChange: set('code'),
        error: errors.code,
        style: {
          letterSpacing: '0.3em',
          fontVariantNumeric: 'tabular-nums',
          textAlign: 'center'
        }
      }), sent && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 'var(--fs-caption)',
          color: 'var(--positive-600)',
          marginTop: 8
        }
      }, t('reg_code_sent')), /*#__PURE__*/React.createElement("button", {
        onClick: () => setSent(true),
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          marginTop: 14,
          padding: 0,
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--indigo-700)'
        }
      }, t('reg_verify_resend')), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        size: "lg",
        iconRight: "check",
        style: {
          marginTop: 20
        },
        onClick: () => validateCode() && onDone(form)
      }, t('reg_verify_btn')), /*#__PURE__*/React.createElement("button", {
        onClick: () => setStep('phone'),
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          marginTop: 14,
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--text-muted)'
        }
      }, t('reg_back')));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '32px 22px 22px',
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        marginBottom: 22
      }
    }, ['details', 'phone', 'verify'].map((s, i) => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        flex: 1,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: ['details', 'phone', 'verify'].indexOf(step) >= i ? 'var(--indigo-700)' : 'var(--neutral-200)'
      }
    }))), body);
  }

  // ================= SIGN IN =================
  function SignInScreen({
    onDone,
    onSwitchToRegister,
    findAccount,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(null);
    function submit() {
      const acc = findAccount(email);
      if (acc && acc.password === password) {
        setError(null);
        onDone(acc);
      } else setError(t('signin_err_invalid'));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '32px 22px 22px'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: 'var(--ls-tight)'
      }
    }, t('signin_title')), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body)',
        color: 'var(--text-muted)',
        marginTop: 8,
        marginBottom: 24,
        lineHeight: 1.5
      }
    }, t('signin_sub')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: t('reg_email'),
      type: "email",
      icon: "user",
      value: email,
      onChange: e => setEmail(e.target.value),
      placeholder: "you@example.com"
    }), /*#__PURE__*/React.createElement(Input, {
      label: t('reg_password'),
      type: "password",
      value: password,
      onChange: e => setPassword(e.target.value),
      error: error || undefined
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg",
      iconRight: "arrow-right",
      style: {
        marginTop: 20
      },
      onClick: submit
    }, t('signin_btn')), /*#__PURE__*/React.createElement("button", {
      onClick: onSwitchToRegister,
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'center',
        marginTop: 14,
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--indigo-700)'
      }
    }, t('toggle_to_register')));
  }
  window.NomiScreens = {
    HomeScreen,
    InsightsScreen,
    ActivityScreen,
    SettingsScreen,
    OnboardingScreen,
    RegisterScreen,
    SignInScreen,
    IntroScreens,
    AddTransactionSheet,
    TransactionDetailSheet,
    InsightActionSheet
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_nomi_app/source/ui_kits/mobile_app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/data.js
try { (() => {
/* Nomi mobile app — shared fake data + helpers (Personal & Business modes).
   Translatable content (insight copy, category labels, relative dates, goal
   captions) is stored as i18n keys + vars, resolved at render time via
   window.NomiI18n.t(lang, key, vars) — see localize() below. Proper nouns
   (merchant names, bank names) are left as-is; they aren't translated. */
(function () {
  const fmt = n => n.toLocaleString('sv-SE');
  const PERSONAL = {
    name: 'Alex',
    balance: '42,180',
    inThisMonth: '31,200',
    outThisMonth: '8,420',
    outDelta: '-12%',
    insights: [{
      id: 1,
      tone: 'positive',
      dateKey: {
        type: 'hours_ago',
        n: 2
      },
      titleKey: null,
      actionKey: 'ins_save_action',
      textKey: 'ins_save_text',
      vars: {
        amount: '2,400 kr'
      }
    }, {
      id: 2,
      tone: 'warning',
      dateKey: {
        type: 'yesterday'
      },
      titleKey: 'ins_unused_title',
      actionKey: 'ins_unused_action',
      textKey: 'ins_unused_text',
      vars: {
        name: 'Adobe CC',
        amount: '599 kr'
      }
    }, {
      id: 3,
      tone: 'tip',
      dateKey: {
        type: 'days_ago',
        n: 3
      },
      titleKey: null,
      actionKey: 'ins_move_action',
      textKey: 'ins_move_text',
      vars: {
        amount: '3,000 kr'
      }
    }],
    transactions: [{
      merchant: 'Client invoice #204',
      category: 'income',
      positive: true,
      amount: '18,000 kr',
      dateKey: {
        type: 'yesterday'
      }
    }, {
      merchant: 'ICA Maxi',
      category: 'groceries',
      amount: '612 kr',
      dateKey: {
        type: 'today'
      }
    }, {
      merchant: 'Spotify',
      category: 'subscriptions',
      amount: '119 kr',
      dateKey: {
        type: 'days_ago',
        n: 2
      }
    }, {
      merchant: 'SL Access',
      category: 'transport',
      amount: '340 kr',
      dateKey: {
        type: 'days_ago',
        n: 3
      }
    }, {
      merchant: 'Espresso House',
      category: 'coffee',
      amount: '58 kr',
      dateKey: {
        type: 'days_ago',
        n: 3
      }
    }, {
      merchant: 'Adobe CC',
      category: 'subscriptions',
      amount: '599 kr',
      dateKey: {
        type: 'days_ago',
        n: 5
      }
    }],
    categories: [{
      labelKey: 'cat_rent',
      amount: 9500,
      icon: 'home'
    }, {
      labelKey: 'cat_groceries',
      amount: 3200,
      icon: 'shopping-bag'
    }, {
      labelKey: 'cat_subscriptions',
      amount: 890,
      icon: 'repeat'
    }, {
      labelKey: 'cat_transport',
      amount: 640,
      icon: 'card'
    }, {
      labelKey: 'cat_coffee',
      amount: 1240,
      icon: 'coffee'
    }],
    goal: {
      labelKey: 'goal_emergency',
      current: 18400,
      target: 30000,
      captionKey: 'goal_months_left',
      captionVars: {
        n: 3
      }
    },
    cashflow: [{
      label: 'Mon',
      in: 0,
      out: 320
    }, {
      label: 'Tue',
      in: 18000,
      out: 120
    }, {
      label: 'Wed',
      in: 0,
      out: 640
    }, {
      label: 'Thu',
      in: 0,
      out: 210
    }, {
      label: 'Fri',
      in: 2400,
      out: 890
    }, {
      label: 'Sat',
      in: 0,
      out: 150
    }, {
      label: 'Sun',
      in: 0,
      out: 80
    }]
  };
  const BUSINESS = {
    name: 'Priya Studio',
    balance: '214,600',
    inThisMonth: '96,000',
    outThisMonth: '61,300',
    outDelta: '+8%',
    insights: [{
      id: 1,
      tone: 'warning',
      dateKey: {
        type: 'hours_ago',
        n: 1
      },
      titleKey: 'ins_overdue_title',
      actionKey: 'ins_overdue_action',
      textKey: 'ins_overdue_text',
      vars: {
        num: '198',
        amount: '24,000 kr',
        threshold: '40,000 kr'
      }
    }, {
      id: 2,
      tone: 'neutral',
      dateKey: {
        type: 'today'
      },
      titleKey: null,
      actionKey: 'ins_software_action',
      textKey: 'ins_software_text',
      vars: {}
    }, {
      id: 3,
      tone: 'positive',
      dateKey: {
        type: 'yesterday'
      },
      titleKey: null,
      actionKey: 'ins_revenue_action',
      textKey: 'ins_revenue_text',
      vars: {}
    }],
    transactions: [{
      merchant: 'Northwind Co — Invoice #204',
      category: 'income',
      positive: true,
      amount: '42,000 kr',
      dateKey: {
        type: 'today'
      }
    }, {
      merchant: 'Figma (team)',
      category: 'subscriptions',
      amount: '1,240 kr',
      dateKey: {
        type: 'yesterday'
      }
    }, {
      merchant: 'AWS',
      category: 'subscriptions',
      amount: '3,180 kr',
      dateKey: {
        type: 'days_ago',
        n: 2
      }
    }, {
      merchant: 'Office rent',
      category: 'transport',
      icon: 'home',
      amount: '14,000 kr',
      dateKey: {
        type: 'days_ago',
        n: 4
      }
    }, {
      merchant: 'Contractor — L. Berg',
      category: 'default',
      icon: 'user',
      amount: '22,000 kr',
      dateKey: {
        type: 'days_ago',
        n: 5
      }
    }],
    categories: [{
      labelKey: 'cat_payroll',
      amount: 38000,
      icon: 'user'
    }, {
      labelKey: 'cat_office_rent',
      amount: 14000,
      icon: 'home'
    }, {
      labelKey: 'cat_software',
      amount: 6200,
      icon: 'repeat'
    }, {
      labelKey: 'cat_travel',
      amount: 2100,
      icon: 'card'
    }, {
      labelKey: 'cat_other',
      amount: 1000,
      icon: 'wallet'
    }],
    goal: {
      labelKey: 'goal_tax_reserve',
      current: 42000,
      target: 70000,
      captionKey: 'goal_due_date',
      captionVars: {
        date: '12 Oct'
      }
    },
    cashflow: [{
      label: 'W1',
      in: 42000,
      out: 18000
    }, {
      label: 'W2',
      in: 12000,
      out: 22000
    }, {
      label: 'W3',
      in: 24000,
      out: 9000
    }, {
      label: 'W4',
      in: 18000,
      out: 12300
    }]
  };

  /* Resolve a { type, n } date descriptor to display text in `lang`. */
  function localizeDate(lang, dateKey) {
    const t = window.NomiI18n.t;
    if (!dateKey) return '';
    if (dateKey.type === 'today') return t(lang, 'date_today');
    if (dateKey.type === 'yesterday') return t(lang, 'date_yesterday');
    if (dateKey.type === 'just_now') return t(lang, 'date_just_now');
    if (dateKey.type === 'hours_ago') return t(lang, 'date_just_now'); // collapse "2h ago" into a calm "just now"
    if (dateKey.type === 'days_ago') return t(lang, 'date_days_ago', {
      n: dateKey.n
    });
    return '';
  }

  /* Returns a deep-cloned data object with all translatable fields resolved
     to display strings for `lang`. Screens consume this instead of the raw
     PERSONAL/BUSINESS objects directly. */
  function localize(lang, data) {
    const t = window.NomiI18n.t;
    return {
      ...data,
      insights: data.insights.map(ins => ({
        ...ins,
        timestamp: localizeDate(lang, ins.dateKey),
        title: ins.titleKey ? t(lang, ins.titleKey) : null,
        action: t(lang, ins.actionKey),
        text: t(lang, ins.textKey, ins.vars)
      })),
      transactions: data.transactions.map(tx => ({
        ...tx,
        date: localizeDate(lang, tx.dateKey)
      })),
      categories: data.categories.map(c => ({
        ...c,
        label: t(lang, c.labelKey)
      })),
      goal: {
        ...data.goal,
        label: t(lang, data.goal.labelKey),
        caption: t(lang, data.goal.captionKey, data.goal.captionVars)
      }
    };
  }
  window.NomiData = {
    PERSONAL,
    BUSINESS,
    fmt,
    localize
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/i18n.js
try { (() => {
/* Nomi mobile app — i18n dictionary + translator for UI chrome (not mock data).
   Keys are plain English strings; each language maps a subset of them.
   t(lang, key) falls back to English, then to the key itself. */
(function () {
  const STR = {
    tab_home: {
      en: 'Home',
      uk: 'Головна',
      es: 'Inicio',
      fr: 'Accueil',
      de: 'Start',
      pt: 'Início',
      pl: 'Start',
      sv: 'Hem',
      zh: '首页',
      ar: 'الرئيسية',
      hi: 'होम',
      ja: 'ホーム'
    },
    tab_insights: {
      en: 'Insights',
      uk: 'Аналітика',
      es: 'Análisis',
      fr: 'Analyses',
      de: 'Einblicke',
      pt: 'Análises',
      pl: 'Analizy',
      sv: 'Insikter',
      zh: '洞察',
      ar: 'الرؤى',
      hi: 'इनसाइट्स',
      ja: 'インサイト'
    },
    tab_activity: {
      en: 'Activity',
      uk: 'Активність',
      es: 'Actividad',
      fr: 'Activité',
      de: 'Aktivität',
      pt: 'Atividade',
      pl: 'Aktywność',
      sv: 'Aktivitet',
      zh: '活动',
      ar: 'النشاط',
      hi: 'गतिविधि',
      ja: 'アクティビティ'
    },
    tab_settings: {
      en: 'Settings',
      uk: 'Налаштування',
      es: 'Ajustes',
      fr: 'Réglages',
      de: 'Einstellungen',
      pt: 'Definições',
      pl: 'Ustawienia',
      sv: 'Inställningar',
      zh: '设置',
      ar: 'الإعدادات',
      hi: 'सेटिंग्स',
      ja: '設定'
    },
    add_transaction: {
      en: 'Add transaction',
      uk: 'Додати транзакцію',
      es: 'Añadir transacción',
      fr: 'Ajouter une transaction',
      de: 'Buchung hinzufügen',
      pt: 'Adicionar transação',
      pl: 'Dodaj transakcję',
      sv: 'Lägg till transaktion',
      zh: '添加交易',
      ar: 'إضافة معاملة',
      hi: 'लेन-देन जोड़ें',
      ja: '取引を追加'
    },
    toast_signed_out: {
      en: 'Signed out',
      uk: 'Ви вийшли з акаунту',
      es: 'Sesión cerrada',
      fr: 'Déconnecté',
      de: 'Abgemeldet',
      pt: 'Sessão terminada',
      pl: 'Wylogowano',
      sv: 'Utloggad',
      zh: '已退出登录',
      ar: 'تم تسجيل الخروج',
      hi: 'साइन आउट हो गया',
      ja: 'サインアウトしました'
    },
    toast_txn_added: {
      en: 'Transaction added',
      uk: 'Транзакцію додано',
      es: 'Transacción añadida',
      fr: 'Transaction ajoutée',
      de: 'Buchung hinzugefügt',
      pt: 'Transação adicionada',
      pl: 'Dodano transakcję',
      sv: 'Transaktion tillagd',
      zh: '已添加交易',
      ar: 'تمت إضافة المعاملة',
      hi: 'लेन-देन जोड़ा गया',
      ja: '取引を追加しました'
    },
    toast_balances_hidden: {
      en: 'Balances hidden',
      uk: 'Баланси приховано',
      es: 'Saldos ocultos',
      fr: 'Soldes masqués',
      de: 'Salden ausgeblendet',
      pt: 'Saldos ocultos',
      pl: 'Salda ukryte',
      sv: 'Saldon dolda',
      zh: '余额已隐藏',
      ar: 'تم إخفاء الأرصدة',
      hi: 'बैलेंस छिपाया गया',
      ja: '残高を非表示にしました'
    },
    toast_balances_shown: {
      en: 'Balances shown',
      uk: 'Баланси показано',
      es: 'Saldos visibles',
      fr: 'Soldes affichés',
      de: 'Salden angezeigt',
      pt: 'Saldos visíveis',
      pl: 'Salda widoczne',
      sv: 'Saldon visas',
      zh: '余额已显示',
      ar: 'تم إظهار الأرصدة',
      hi: 'बैलेंस दिखाया गया',
      ja: '残高を表示しました'
    },
    toast_faceid_on: {
      en: 'Face ID enabled',
      uk: 'Face ID увімкнено',
      es: 'Face ID activado',
      fr: 'Face ID activé',
      de: 'Face ID aktiviert',
      pt: 'Face ID ativado',
      pl: 'Face ID włączone',
      sv: 'Face ID aktiverat',
      zh: '已启用面容 ID',
      ar: 'تم تفعيل Face ID',
      hi: 'फेस आईडी चालू',
      ja: 'Face IDを有効にしました'
    },
    toast_faceid_off: {
      en: 'Face ID disabled',
      uk: 'Face ID вимкнено',
      es: 'Face ID desactivado',
      fr: 'Face ID désactivé',
      de: 'Face ID deaktiviert',
      pt: 'Face ID desativado',
      pl: 'Face ID wyłączone',
      sv: 'Face ID inaktiverat',
      zh: '已停用面容 ID',
      ar: 'تم إيقاف Face ID',
      hi: 'फेस आईडी बंद',
      ja: 'Face IDを無効にしました'
    },
    toast_motion_on: {
      en: 'Reduced motion on',
      uk: 'Зменшення руху увімкнено',
      es: 'Movimiento reducido activado',
      fr: 'Mouvement réduit activé',
      de: 'Reduzierte Bewegung an',
      pt: 'Movimento reduzido ativado',
      pl: 'Ograniczony ruch włączony',
      sv: 'Reducerad rörelse på',
      zh: '已开启减弱动态效果',
      ar: 'تم تفعيل تقليل الحركة',
      hi: 'गति में कमी चालू',
      ja: 'モーション減らすをオンにしました'
    },
    toast_motion_off: {
      en: 'Reduced motion off',
      uk: 'Зменшення руху вимкнено',
      es: 'Movimiento reducido desactivado',
      fr: 'Mouvement réduit désactivé',
      de: 'Reduzierte Bewegung aus',
      pt: 'Movimento reduzido desativado',
      pl: 'Ograniczony ruch wyłączony',
      sv: 'Reducerad rörelse av',
      zh: '已关闭减弱动态效果',
      ar: 'تم إيقاف تقليل الحركة',
      hi: 'गति में कमी बंद',
      ja: 'モーション減らすをオフにしました'
    },
    toast_dark_on: {
      en: 'Dark mode on',
      uk: 'Темну тему увімкнено',
      es: 'Modo oscuro activado',
      fr: 'Mode sombre activé',
      de: 'Dunkelmodus an',
      pt: 'Modo escuro ativado',
      pl: 'Tryb ciemny włączony',
      sv: 'Mörkt läge på',
      zh: '已开启深色模式',
      ar: 'تم تفعيل الوضع الداكن',
      hi: 'डार्क मोड चालू',
      ja: 'ダークモードをオンにしました'
    },
    toast_dark_off: {
      en: 'Dark mode off',
      uk: 'Темну тему вимкнено',
      es: 'Modo oscuro desactivado',
      fr: 'Mode sombre désactivé',
      de: 'Dunkelmodus aus',
      pt: 'Modo escuro desativado',
      pl: 'Tryb ciemny wyłączony',
      sv: 'Mörkt läge av',
      zh: '已关闭深色模式',
      ar: 'تم إيقاف الوضع الداكن',
      hi: 'डार्क मोड बंद',
      ja: 'ダークモードをオフにしました'
    },
    toast_lang_set: {
      en: 'Language set to {name}',
      uk: 'Мову змінено на {name}',
      es: 'Idioma cambiado a {name}',
      fr: 'Langue définie sur {name}',
      de: 'Sprache auf {name} geändert',
      pt: 'Idioma definido para {name}',
      pl: 'Ustawiono język {name}',
      sv: 'Språk inställt på {name}',
      zh: '语言已设为{name}',
      ar: 'تم ضبط اللغة على {name}',
      hi: 'भाषा {name} पर सेट की गई',
      ja: '言語を{name}に設定しました'
    },
    toast_bank_started: {
      en: 'Bank connection started',
      uk: 'Підключення банку розпочато',
      es: 'Conexión bancaria iniciada',
      fr: 'Connexion bancaire lancée',
      de: 'Bankverbindung gestartet',
      pt: 'Ligação bancária iniciada',
      pl: 'Rozpoczęto łączenie z bankiem',
      sv: 'Bankanslutning startad',
      zh: '已开始银行连接',
      ar: 'بدأ ربط الحساب المصرفي',
      hi: 'बैंक कनेक्शन शुरू हुआ',
      ja: '銀行連携を開始しました'
    },
    toast_upgrade_soon: {
      en: 'Upgrade coming soon',
      uk: 'Оновлення незабаром',
      es: 'Mejora disponible pronto',
      fr: 'Mise à niveau bientôt disponible',
      de: 'Upgrade bald verfügbar',
      pt: 'Atualização brevemente',
      pl: 'Ulepszenie już wkrótce',
      sv: 'Uppgradering kommer snart',
      zh: '升级即将推出',
      ar: 'الترقية قريبًا',
      hi: 'अपग्रेड जल्द आ रहा है',
      ja: 'アップグレードは近日公開'
    },
    mode_personal: {
      en: 'Personal',
      uk: 'Особисте',
      es: 'Personal',
      fr: 'Personnel',
      de: 'Privat',
      pt: 'Pessoal',
      pl: 'Osobiste',
      sv: 'Privat',
      zh: '个人',
      ar: 'شخصي',
      hi: 'व्यक्तिगत',
      ja: '個人'
    },
    mode_business: {
      en: 'Business',
      uk: 'Бізнес',
      es: 'Negocio',
      fr: 'Entreprise',
      de: 'Business',
      pt: 'Empresa',
      pl: 'Firma',
      sv: 'Företag',
      zh: '企业',
      ar: 'الأعمال',
      hi: 'व्यवसाय',
      ja: 'ビジネス'
    },
    hi_name: {
      en: 'Hi, {name}',
      uk: 'Привіт, {name}',
      es: 'Hola, {name}',
      fr: 'Salut, {name}',
      de: 'Hallo, {name}',
      pt: 'Olá, {name}',
      pl: 'Cześć, {name}',
      sv: 'Hej, {name}',
      zh: '你好，{name}',
      ar: 'مرحبًا، {name}',
      hi: 'नमस्ते, {name}',
      ja: 'こんにちは、{name}さん'
    },
    alerts: {
      en: 'Alerts',
      uk: 'Сповіщення',
      es: 'Alertas',
      fr: 'Alertes',
      de: 'Benachrichtigungen',
      pt: 'Alertas',
      pl: 'Alerty',
      sv: 'Aviseringar',
      zh: '提醒',
      ar: 'التنبيهات',
      hi: 'अलर्ट',
      ja: '通知'
    },
    profile: {
      en: 'Profile',
      uk: 'Профіль',
      es: 'Perfil',
      fr: 'Profil',
      de: 'Profil',
      pt: 'Perfil',
      pl: 'Profil',
      sv: 'Profil',
      zh: '个人资料',
      ar: 'الملف الشخصي',
      hi: 'प्रोफ़ाइल',
      ja: 'プロフィール'
    },
    total_balance: {
      en: 'Total balance',
      uk: 'Загальний баланс',
      es: 'Saldo total',
      fr: 'Solde total',
      de: 'Gesamtsaldo',
      pt: 'Saldo total',
      pl: 'Łączne saldo',
      sv: 'Totalt saldo',
      zh: '总余额',
      ar: 'الرصيد الإجمالي',
      hi: 'कुल शेष राशि',
      ja: '合計残高'
    },
    total_across: {
      en: 'Total across accounts',
      uk: 'Разом на всіх рахунках',
      es: 'Total en todas las cuentas',
      fr: 'Total tous comptes',
      de: 'Gesamt über alle Konten',
      pt: 'Total em todas as contas',
      pl: 'Suma na wszystkich kontach',
      sv: 'Totalt över alla konton',
      zh: '所有账户合计',
      ar: 'الإجمالي عبر جميع الحسابات',
      hi: 'सभी खातों में कुल',
      ja: '全口座の合計'
    },
    hide_balances_btn: {
      en: 'Hide balances',
      uk: 'Приховати баланси',
      es: 'Ocultar saldos',
      fr: 'Masquer les soldes',
      de: 'Salden ausblenden',
      pt: 'Ocultar saldos',
      pl: 'Ukryj salda',
      sv: 'Dölj saldon',
      zh: '隐藏余额',
      ar: 'إخفاء الأرصدة',
      hi: 'शेष राशि छिपाएं',
      ja: '残高を隠す'
    },
    show_balances_btn: {
      en: 'Show balances',
      uk: 'Показати баланси',
      es: 'Mostrar saldos',
      fr: 'Afficher les soldes',
      de: 'Salden anzeigen',
      pt: 'Mostrar saldos',
      pl: 'Pokaż salda',
      sv: 'Visa saldon',
      zh: '显示余额',
      ar: 'إظهار الأرصدة',
      hi: 'शेष राशि दिखाएं',
      ja: '残高を表示'
    },
    in_word: {
      en: 'In',
      uk: 'Надходження',
      es: 'Entradas',
      fr: 'Entrées',
      de: 'Ein',
      pt: 'Entradas',
      pl: 'Wpływy',
      sv: 'In',
      zh: '收入',
      ar: 'وارد',
      hi: 'आय',
      ja: '入金'
    },
    out_word: {
      en: 'Out',
      uk: 'Витрати',
      es: 'Salidas',
      fr: 'Sorties',
      de: 'Aus',
      pt: 'Saídas',
      pl: 'Wypływy',
      sv: 'Ut',
      zh: '支出',
      ar: 'صادر',
      hi: 'व्यय',
      ja: '出金'
    },
    vs_last_month: {
      en: 'vs last month',
      uk: 'порівняно з минулим місяцем',
      es: 'vs. mes pasado',
      fr: 'vs mois dernier',
      de: 'ggü. Vormonat',
      pt: 'vs. mês passado',
      pl: 'vs. poprzedni miesiąc',
      sv: 'jämfört med förra månaden',
      zh: '较上月',
      ar: 'مقارنة بالشهر الماضي',
      hi: 'पिछले माह की तुलना में',
      ja: '先月比'
    },
    nomi_insight: {
      en: 'Nomi insight',
      uk: 'Аналітика Nomi',
      es: 'Análisis de Nomi',
      fr: 'Analyse Nomi',
      de: 'Nomi-Einblick',
      pt: 'Análise Nomi',
      pl: 'Analiza Nomi',
      sv: 'Nomi-insikt',
      zh: 'Nomi 洞察',
      ar: 'رؤية Nomi',
      hi: 'Nomi इनसाइट',
      ja: 'Nomiインサイト'
    },
    all_insights: {
      en: 'All insights',
      uk: 'Вся аналітика',
      es: 'Todos los análisis',
      fr: 'Toutes les analyses',
      de: 'Alle Einblicke',
      pt: 'Todas as análises',
      pl: 'Wszystkie analizy',
      sv: 'Alla insikter',
      zh: '所有洞察',
      ar: 'كل الرؤى',
      hi: 'सभी इनसाइट्स',
      ja: 'すべてのインサイト'
    },
    cashflow_week: {
      en: 'Cash flow — this week',
      uk: 'Грошовий потік — цього тижня',
      es: 'Flujo de caja — esta semana',
      fr: 'Trésorerie — cette semaine',
      de: 'Cashflow — diese Woche',
      pt: 'Fluxo de caixa — esta semana',
      pl: 'Przepływy — w tym tygodniu',
      sv: 'Kassaflöde — denna vecka',
      zh: '现金流 — 本周',
      ar: 'التدفق النقدي — هذا الأسبوع',
      hi: 'नकदी प्रवाह — इस सप्ताह',
      ja: 'キャッシュフロー — 今週'
    },
    cashflow_month: {
      en: 'Cash flow — this month',
      uk: 'Грошовий потік — цього місяця',
      es: 'Flujo de caja — este mes',
      fr: 'Trésorerie — ce mois',
      de: 'Cashflow — diesen Monat',
      pt: 'Fluxo de caixa — este mês',
      pl: 'Przepływy — w tym miesiącu',
      sv: 'Kassaflöde — denna månad',
      zh: '现金流 — 本月',
      ar: 'التدفق النقدي — هذا الشهر',
      hi: 'नकदी प्रवाह — इस माह',
      ja: 'キャッシュフロー — 今月'
    },
    see_all: {
      en: 'See all',
      uk: 'Переглянути все',
      es: 'Ver todo',
      fr: 'Tout voir',
      de: 'Alle ansehen',
      pt: 'Ver tudo',
      pl: 'Zobacz wszystko',
      sv: 'Visa alla',
      zh: '查看全部',
      ar: 'عرض الكل',
      hi: 'सभी देखें',
      ja: 'すべて表示'
    },
    recent_activity: {
      en: 'Recent activity',
      uk: 'Останні операції',
      es: 'Actividad reciente',
      fr: 'Activité récente',
      de: 'Letzte Aktivität',
      pt: 'Atividade recente',
      pl: 'Ostatnia aktywność',
      sv: 'Senaste aktivitet',
      zh: '最近活动',
      ar: 'النشاط الأخير',
      hi: 'हाल की गतिविधि',
      ja: '最近のアクティビティ'
    },
    insights_title: {
      en: 'Insights',
      uk: 'Аналітика',
      es: 'Análisis',
      fr: 'Analyses',
      de: 'Einblicke',
      pt: 'Análises',
      pl: 'Analizy',
      sv: 'Insikter',
      zh: '洞察',
      ar: 'الرؤى',
      hi: 'इनसाइट्स',
      ja: 'インサイト'
    },
    insights_new: {
      en: '{n} new',
      uk: '{n} нових',
      es: '{n} nuevos',
      fr: '{n} nouveaux',
      de: '{n} neu',
      pt: '{n} novos',
      pl: '{n} nowych',
      sv: '{n} nya',
      zh: '{n} 条新内容',
      ar: '{n} جديد',
      hi: '{n} नए',
      ja: '新着{n}件'
    },
    insights_para: {
      en: "Nomi reads your accounts continuously. One thing at a time — here's what's worth knowing.",
      uk: 'Nomi постійно аналізує ваші рахунки. По одній справі за раз — ось що варто знати.',
      es: 'Nomi lee tus cuentas continuamente. Una cosa a la vez: esto es lo que vale la pena saber.',
      fr: 'Nomi analyse vos comptes en continu. Une chose à la fois — voici ce qui compte de savoir.',
      de: 'Nomi liest deine Konten fortlaufend. Eins nach dem anderen — das ist wissenswert.',
      pt: 'A Nomi lê as suas contas continuamente. Uma coisa de cada vez — eis o que vale a pena saber.',
      pl: 'Nomi stale analizuje Twoje konta. Po jednej rzeczy naraz — oto, co warto wiedzieć.',
      sv: 'Nomi läser dina konton kontinuerligt. En sak i taget — här är vad som är värt att veta.',
      zh: 'Nomi 持续读取您的账户。一次一件事——这是您需要了解的。',
      ar: 'تقرأ Nomi حساباتك باستمرار. أمر واحد في كل مرة — إليك ما يستحق المعرفة.',
      hi: 'Nomi आपके खातों को लगातार पढ़ता है। एक बार में एक बात — यहाँ जानने लायक बात है।',
      ja: 'Nomiはあなたの口座を継続的に分析します。一度に一つ — 知っておくべきことです。'
    },
    all_caught_up: {
      en: "You're all caught up",
      uk: 'Ви переглянули все',
      es: 'Estás al día',
      fr: 'Vous êtes à jour',
      de: 'Du bist auf dem neuesten Stand',
      pt: 'Está tudo em dia',
      pl: 'Wszystko na bieżąco',
      sv: 'Du har koll på allt',
      zh: '您已了解全部内容',
      ar: 'أنت على اطلاع بكل شيء',
      hi: 'आप पूरी तरह अपडेट हैं',
      ja: 'すべて確認済みです'
    },
    activity_title: {
      en: 'Activity',
      uk: 'Активність',
      es: 'Actividad',
      fr: 'Activité',
      de: 'Aktivität',
      pt: 'Atividade',
      pl: 'Aktywność',
      sv: 'Aktivitet',
      zh: '活动',
      ar: 'النشاط',
      hi: 'गतिविधि',
      ja: 'アクティビティ'
    },
    search: {
      en: 'Search',
      uk: 'Пошук',
      es: 'Buscar',
      fr: 'Rechercher',
      de: 'Suchen',
      pt: 'Pesquisar',
      pl: 'Szukaj',
      sv: 'Sök',
      zh: '搜索',
      ar: 'بحث',
      hi: 'खोजें',
      ja: '検索'
    },
    close_search: {
      en: 'Close search',
      uk: 'Закрити пошук',
      es: 'Cerrar búsqueda',
      fr: 'Fermer la recherche',
      de: 'Suche schließen',
      pt: 'Fechar pesquisa',
      pl: 'Zamknij wyszukiwanie',
      sv: 'Stäng sökning',
      zh: '关闭搜索',
      ar: 'إغلاق البحث',
      hi: 'खोज बंद करें',
      ja: '検索を閉じる'
    },
    search_placeholder: {
      en: 'Search transactions',
      uk: 'Пошук транзакцій',
      es: 'Buscar transacciones',
      fr: 'Rechercher des transactions',
      de: 'Buchungen durchsuchen',
      pt: 'Pesquisar transações',
      pl: 'Szukaj transakcji',
      sv: 'Sök transaktioner',
      zh: '搜索交易',
      ar: 'ابحث عن المعاملات',
      hi: 'लेन-देन खोजें',
      ja: '取引を検索'
    },
    week: {
      en: 'Week',
      uk: 'Тиждень',
      es: 'Semana',
      fr: 'Semaine',
      de: 'Woche',
      pt: 'Semana',
      pl: 'Tydzień',
      sv: 'Vecka',
      zh: '周',
      ar: 'أسبوع',
      hi: 'सप्ताह',
      ja: '週'
    },
    month: {
      en: 'Month',
      uk: 'Місяць',
      es: 'Mes',
      fr: 'Mois',
      de: 'Monat',
      pt: 'Mês',
      pl: 'Miesiąc',
      sv: 'Månad',
      zh: '月',
      ar: 'شهر',
      hi: 'महीना',
      ja: '月'
    },
    year: {
      en: 'Year',
      uk: 'Рік',
      es: 'Año',
      fr: 'Année',
      de: 'Jahr',
      pt: 'Ano',
      pl: 'Rok',
      sv: 'År',
      zh: '年',
      ar: 'سنة',
      hi: 'वर्ष',
      ja: '年'
    },
    spend_by_category: {
      en: 'Spend by category — {range}',
      uk: 'Витрати за категоріями — {range}',
      es: 'Gastos por categoría — {range}',
      fr: 'Dépenses par catégorie — {range}',
      de: 'Ausgaben nach Kategorie — {range}',
      pt: 'Gastos por categoria — {range}',
      pl: 'Wydatki wg kategorii — {range}',
      sv: 'Utgifter per kategori — {range}',
      zh: '按类别支出 — {range}',
      ar: 'الإنفاق حسب الفئة — {range}',
      hi: 'श्रेणी अनुसार खर्च — {range}',
      ja: 'カテゴリ別支出 — {range}'
    },
    range_week: {
      en: 'this week',
      uk: 'цього тижня',
      es: 'esta semana',
      fr: 'cette semaine',
      de: 'diese Woche',
      pt: 'esta semana',
      pl: 'w tym tygodniu',
      sv: 'denna vecka',
      zh: '本周',
      ar: 'هذا الأسبوع',
      hi: 'इस सप्ताह',
      ja: '今週'
    },
    range_month: {
      en: 'this month',
      uk: 'цього місяця',
      es: 'este mes',
      fr: 'ce mois',
      de: 'diesen Monat',
      pt: 'este mês',
      pl: 'w tym miesiącu',
      sv: 'denna månad',
      zh: '本月',
      ar: 'هذا الشهر',
      hi: 'इस माह',
      ja: '今月'
    },
    range_year: {
      en: 'this year',
      uk: 'цього року',
      es: 'este año',
      fr: 'cette année',
      de: 'dieses Jahr',
      pt: 'este ano',
      pl: 'w tym roku',
      sv: 'detta år',
      zh: '今年',
      ar: 'هذا العام',
      hi: 'इस वर्ष',
      ja: '今年'
    },
    results_for: {
      en: 'Results for "{q}"',
      uk: 'Результати для «{q}»',
      es: 'Resultados para "{q}"',
      fr: 'Résultats pour « {q} »',
      de: 'Ergebnisse für „{q}“',
      pt: 'Resultados para "{q}"',
      pl: 'Wyniki dla „{q}”',
      sv: 'Resultat för "{q}"',
      zh: '“{q}”的搜索结果',
      ar: 'نتائج "{q}"',
      hi: '"{q}" के परिणाम',
      ja: '「{q}」の結果'
    },
    transactions: {
      en: 'Transactions',
      uk: 'Транзакції',
      es: 'Transacciones',
      fr: 'Transactions',
      de: 'Buchungen',
      pt: 'Transações',
      pl: 'Transakcje',
      sv: 'Transaktioner',
      zh: '交易',
      ar: 'المعاملات',
      hi: 'लेन-देन',
      ja: '取引'
    },
    export: {
      en: 'Export',
      uk: 'Експорт',
      es: 'Exportar',
      fr: 'Exporter',
      de: 'Exportieren',
      pt: 'Exportar',
      pl: 'Eksportuj',
      sv: 'Exportera',
      zh: '导出',
      ar: 'تصدير',
      hi: 'निर्यात करें',
      ja: 'エクスポート'
    },
    no_match: {
      en: 'No transactions match "{q}"',
      uk: 'Немає транзакцій за запитом «{q}»',
      es: 'Ninguna transacción coincide con "{q}"',
      fr: 'Aucune transaction ne correspond à « {q} »',
      de: 'Keine Buchungen für „{q}“',
      pt: 'Nenhuma transação corresponde a "{q}"',
      pl: 'Brak transakcji pasujących do „{q}”',
      sv: 'Inga transaktioner matchar "{q}"',
      zh: '没有与“{q}”匹配的交易',
      ar: 'لا توجد معاملات مطابقة لـ "{q}"',
      hi: '"{q}" से मेल खाने वाला कोई लेन-देन नहीं',
      ja: '「{q}」に一致する取引はありません'
    },
    settings_title: {
      en: 'Settings',
      uk: 'Налаштування',
      es: 'Ajustes',
      fr: 'Réglages',
      de: 'Einstellungen',
      pt: 'Definições',
      pl: 'Ustawienia',
      sv: 'Inställningar',
      zh: '设置',
      ar: 'الإعدادات',
      hi: 'सेटिंग्स',
      ja: '設定'
    },
    account_word: {
      en: 'Account',
      uk: 'Акаунт',
      es: 'Cuenta',
      fr: 'Compte',
      de: 'Konto',
      pt: 'Conta',
      pl: 'Konto',
      sv: 'Konto',
      zh: '账户',
      ar: 'الحساب',
      hi: 'खाता',
      ja: 'アカウント'
    },
    business_plan: {
      en: 'Business plan',
      uk: 'Бізнес-план',
      es: 'Plan de negocio',
      fr: 'Offre Entreprise',
      de: 'Business-Tarif',
      pt: 'Plano empresarial',
      pl: 'Plan firmowy',
      sv: 'Företagsplan',
      zh: '企业版',
      ar: 'خطة الأعمال',
      hi: 'व्यवसाय योजना',
      ja: 'ビジネスプラン'
    },
    free_plan: {
      en: 'Free plan',
      uk: 'Безкоштовний план',
      es: 'Plan gratuito',
      fr: 'Offre gratuite',
      de: 'Kostenloser Tarif',
      pt: 'Plano gratuito',
      pl: 'Plan darmowy',
      sv: 'Gratisplan',
      zh: '免费版',
      ar: 'الخطة المجانية',
      hi: 'फ्री प्लान',
      ja: '無料プラン'
    },
    premium: {
      en: 'Premium',
      uk: 'Преміум',
      es: 'Premium',
      fr: 'Premium',
      de: 'Premium',
      pt: 'Premium',
      pl: 'Premium',
      sv: 'Premium',
      zh: '高级版',
      ar: 'بريميوم',
      hi: 'प्रीमियम',
      ja: 'プレミアム'
    },
    free: {
      en: 'Free',
      uk: 'Безкоштовно',
      es: 'Gratis',
      fr: 'Gratuit',
      de: 'Kostenlos',
      pt: 'Grátis',
      pl: 'Darmowy',
      sv: 'Gratis',
      zh: '免费',
      ar: 'مجاني',
      hi: 'मुफ़्त',
      ja: '無料'
    },
    mode_label: {
      en: 'Mode',
      uk: 'Режим',
      es: 'Modo',
      fr: 'Mode',
      de: 'Modus',
      pt: 'Modo',
      pl: 'Tryb',
      sv: 'Läge',
      zh: '模式',
      ar: 'الوضع',
      hi: 'मोड',
      ja: 'モード'
    },
    accounts_label: {
      en: 'Accounts',
      uk: 'Рахунки',
      es: 'Cuentas',
      fr: 'Comptes',
      de: 'Konten',
      pt: 'Contas',
      pl: 'Konta',
      sv: 'Konton',
      zh: '账户',
      ar: 'الحسابات',
      hi: 'खाते',
      ja: '口座'
    },
    connected_accounts: {
      en: 'Connected accounts',
      uk: "Під'єднані рахунки",
      es: 'Cuentas conectadas',
      fr: 'Comptes connectés',
      de: 'Verknüpfte Konten',
      pt: 'Contas ligadas',
      pl: 'Połączone konta',
      sv: 'Anslutna konton',
      zh: '已连接的账户',
      ar: 'الحسابات المرتبطة',
      hi: 'जुड़े हुए खाते',
      ja: '連携済みの口座'
    },
    linked_synced: {
      en: '{n} linked · all synced',
      uk: "{n} під'єднано · все синхронізовано",
      es: '{n} vinculadas · todo sincronizado',
      fr: '{n} liés · tout synchronisé',
      de: '{n} verknüpft · alles synchron',
      pt: '{n} ligadas · tudo sincronizado',
      pl: '{n} połączone · wszystko zsynchronizowane',
      sv: '{n} anslutna · allt synkat',
      zh: '已连接{n}个 · 全部同步',
      ar: '{n} مرتبط · تمت المزامنة بالكامل',
      hi: '{n} जुड़े · सभी सिंक हुए',
      ja: '{n}件連携済み・すべて同期済み'
    },
    privacy_security: {
      en: 'Privacy & security',
      uk: 'Приватність і безпека',
      es: 'Privacidad y seguridad',
      fr: 'Confidentialité et sécurité',
      de: 'Datenschutz & Sicherheit',
      pt: 'Privacidade e segurança',
      pl: 'Prywatność i bezpieczeństwo',
      sv: 'Sekretess och säkerhet',
      zh: '隐私和安全',
      ar: 'الخصوصية والأمان',
      hi: 'गोपनीयता और सुरक्षा',
      ja: 'プライバシーとセキュリティ'
    },
    hide_balances_row: {
      en: 'Hide balances',
      uk: 'Приховати баланси',
      es: 'Ocultar saldos',
      fr: 'Masquer les soldes',
      de: 'Salden ausblenden',
      pt: 'Ocultar saldos',
      pl: 'Ukryj salda',
      sv: 'Dölj saldon',
      zh: '隐藏余额',
      ar: 'إخفاء الأرصدة',
      hi: 'शेष राशि छिपाएं',
      ja: '残高を隠す'
    },
    hide_balances_desc: {
      en: 'Mask amounts on the home screen',
      uk: 'Приховувати суми на головному екрані',
      es: 'Ocultar importes en la pantalla principal',
      fr: "Masquer les montants sur l'écran d'accueil",
      de: 'Beträge auf dem Startbildschirm ausblenden',
      pt: 'Ocultar valores no ecrã principal',
      pl: 'Ukryj kwoty na ekranie głównym',
      sv: 'Dölj belopp på hemskärmen',
      zh: '在主屏幕上遮盖金额',
      ar: 'إخفاء المبالغ في الشاشة الرئيسية',
      hi: 'होम स्क्रीन पर राशियाँ छिपाएं',
      ja: 'ホーム画面の金額をマスクします'
    },
    faceid_row: {
      en: 'Face ID unlock',
      uk: 'Розблокування Face ID',
      es: 'Desbloqueo con Face ID',
      fr: 'Déverrouillage Face ID',
      de: 'Face ID Entsperrung',
      pt: 'Desbloqueio por Face ID',
      pl: 'Odblokowanie Face ID',
      sv: 'Upplåsning med Face ID',
      zh: '面容 ID 解锁',
      ar: 'فتح القفل بـ Face ID',
      hi: 'फेस आईडी अनलॉक',
      ja: 'Face IDロック解除'
    },
    faceid_desc: {
      en: 'Require Face ID to open Nomi',
      uk: 'Вимагати Face ID для відкриття Nomi',
      es: 'Requerir Face ID para abrir Nomi',
      fr: 'Exiger Face ID pour ouvrir Nomi',
      de: 'Face ID zum Öffnen von Nomi erforderlich',
      pt: 'Exigir Face ID para abrir a Nomi',
      pl: 'Wymagaj Face ID do otwarcia Nomi',
      sv: 'Kräv Face ID för att öppna Nomi',
      zh: '打开 Nomi 需要面容 ID',
      ar: 'طلب Face ID لفتح Nomi',
      hi: 'Nomi खोलने के लिए फेस आईडी आवश्यक',
      ja: 'Nomiを開くのにFace IDを要求します'
    },
    notifications_label: {
      en: 'Notifications',
      uk: 'Сповіщення',
      es: 'Notificaciones',
      fr: 'Notifications',
      de: 'Benachrichtigungen',
      pt: 'Notificações',
      pl: 'Powiadomienia',
      sv: 'Aviseringar',
      zh: '通知',
      ar: 'الإشعارات',
      hi: 'सूचनाएं',
      ja: '通知'
    },
    weekly_summary_row: {
      en: 'Weekly summary',
      uk: 'Щотижневий підсумок',
      es: 'Resumen semanal',
      fr: 'Résumé hebdomadaire',
      de: 'Wöchentliche Zusammenfassung',
      pt: 'Resumo semanal',
      pl: 'Podsumowanie tygodniowe',
      sv: 'Veckosammanfattning',
      zh: '每周摘要',
      ar: 'ملخص أسبوعي',
      hi: 'साप्ताहिक सारांश',
      ja: '週次サマリー'
    },
    weekly_summary_desc: {
      en: 'A short recap every Monday',
      uk: 'Короткий підсумок щопонеділка',
      es: 'Un breve resumen cada lunes',
      fr: 'Un bref résumé chaque lundi',
      de: 'Eine kurze Zusammenfassung jeden Montag',
      pt: 'Um resumo curto todas as segundas',
      pl: 'Krótkie podsumowanie w każdy poniedziałek',
      sv: 'En kort sammanfattning varje måndag',
      zh: '每周一简短回顾',
      ar: 'ملخص قصير كل يوم اثنين',
      hi: 'हर सोमवार एक संक्षिप्त सारांश',
      ja: '毎週月曜日に簡単なまとめをお届けします'
    },
    realtime_row: {
      en: 'Real-time insights',
      uk: 'Аналітика в реальному часі',
      es: 'Análisis en tiempo real',
      fr: 'Analyses en temps réel',
      de: 'Echtzeit-Einblicke',
      pt: 'Análises em tempo real',
      pl: 'Analizy w czasie rzeczywistym',
      sv: 'Realtidsinsikter',
      zh: '实时洞察',
      ar: 'رؤى فورية',
      hi: 'रीयल-टाइम इनसाइट्स',
      ja: 'リアルタイムインサイト'
    },
    realtime_desc: {
      en: 'As soon as something changes',
      uk: 'Одразу, як щось змінюється',
      es: 'En cuanto algo cambie',
      fr: 'Dès qu\'un changement survient',
      de: 'Sobald sich etwas ändert',
      pt: 'Assim que algo mudar',
      pl: 'Gdy tylko coś się zmieni',
      sv: 'Så snart något ändras',
      zh: '一有变化即刻提醒',
      ar: 'بمجرد حدوث أي تغيير',
      hi: 'जैसे ही कुछ बदले',
      ja: '何か変化があればすぐに'
    },
    preferences_label: {
      en: 'Preferences',
      uk: 'Уподобання',
      es: 'Preferencias',
      fr: 'Préférences',
      de: 'Präferenzen',
      pt: 'Preferências',
      pl: 'Preferencje',
      sv: 'Inställningar',
      zh: '偏好设置',
      ar: 'التفضيلات',
      hi: 'प्राथमिकताएं',
      ja: '環境設定'
    },
    language_row: {
      en: 'Language',
      uk: 'Мова',
      es: 'Idioma',
      fr: 'Langue',
      de: 'Sprache',
      pt: 'Idioma',
      pl: 'Język',
      sv: 'Språk',
      zh: '语言',
      ar: 'اللغة',
      hi: 'भाषा',
      ja: '言語'
    },
    language_desc: {
      en: 'App display language',
      uk: 'Мова інтерфейсу застосунку',
      es: 'Idioma de visualización de la app',
      fr: "Langue d'affichage de l'app",
      de: 'Anzeigesprache der App',
      pt: 'Idioma de exibição da app',
      pl: 'Język wyświetlania aplikacji',
      sv: 'Appens visningsspråk',
      zh: '应用显示语言',
      ar: 'لغة عرض التطبيق',
      hi: 'ऐप प्रदर्शन भाषा',
      ja: 'アプリの表示言語'
    },
    dark_mode_row: {
      en: 'Dark mode',
      uk: 'Темна тема',
      es: 'Modo oscuro',
      fr: 'Mode sombre',
      de: 'Dunkelmodus',
      pt: 'Modo escuro',
      pl: 'Tryb ciemny',
      sv: 'Mörkt läge',
      zh: '深色模式',
      ar: 'الوضع الداكن',
      hi: 'डार्क मोड',
      ja: 'ダークモード'
    },
    dark_mode_desc: {
      en: 'Use a dark theme throughout Nomi',
      uk: 'Використовувати темну тему в Nomi',
      es: 'Usar un tema oscuro en toda la app',
      fr: 'Utiliser un thème sombre dans Nomi',
      de: 'Dunkles Design in ganz Nomi verwenden',
      pt: 'Usar um tema escuro em toda a Nomi',
      pl: 'Używaj ciemnego motywu w całej aplikacji Nomi',
      sv: 'Använd ett mörkt tema i hela Nomi',
      zh: '在整个 Nomi 中使用深色主题',
      ar: 'استخدام مظهر داكن في Nomi',
      hi: 'पूरे Nomi में डार्क थीम उपयोग करें',
      ja: 'Nomi全体でダークテーマを使用します'
    },
    reduced_motion_row: {
      en: 'Reduced motion',
      uk: 'Зменшення руху',
      es: 'Movimiento reducido',
      fr: 'Mouvement réduit',
      de: 'Reduzierte Bewegung',
      pt: 'Movimento reduzido',
      pl: 'Ograniczony ruch',
      sv: 'Reducerad rörelse',
      zh: '减弱动态效果',
      ar: 'تقليل الحركة',
      hi: 'गति में कमी',
      ja: 'モーションを減らす'
    },
    reduced_motion_desc: {
      en: 'Turn off animations and transitions',
      uk: 'Вимкнути анімації та переходи',
      es: 'Desactivar animaciones y transiciones',
      fr: 'Désactiver les animations et transitions',
      de: 'Animationen und Übergänge ausschalten',
      pt: 'Desativar animações e transições',
      pl: 'Wyłącz animacje i przejścia',
      sv: 'Stäng av animationer och övergångar',
      zh: '关闭动画和过渡效果',
      ar: 'إيقاف الرسوم المتحركة والانتقالات',
      hi: 'एनिमेशन और ट्रांज़िशन बंद करें',
      ja: 'アニメーションとトランジションをオフにします'
    },
    upgrade_title: {
      en: 'Unlimited insights',
      uk: 'Необмежена аналітика',
      es: 'Análisis ilimitados',
      fr: 'Analyses illimitées',
      de: 'Unbegrenzte Einblicke',
      pt: 'Análises ilimitadas',
      pl: 'Nieograniczone analizy',
      sv: 'Obegränsade insikter',
      zh: '无限洞察',
      ar: 'رؤى غير محدودة',
      hi: 'असीमित इनसाइट्स',
      ja: '無制限のインサイト'
    },
    upgrade_desc: {
      en: 'Go Premium for real-time insights, unlimited accounts, and exportable reports.',
      uk: 'Перейдіть на Преміум: аналітика в реальному часі, необмежена кількість рахунків і звіти на експорт.',
      es: 'Hazte Premium para análisis en tiempo real, cuentas ilimitadas e informes exportables.',
      fr: 'Passez à Premium pour des analyses en temps réel, des comptes illimités et des rapports exportables.',
      de: 'Hol dir Premium für Echtzeit-Einblicke, unbegrenzte Konten und exportierbare Berichte.',
      pt: 'Torne-se Premium para análises em tempo real, contas ilimitadas e relatórios exportáveis.',
      pl: 'Przejdź na Premium — analizy w czasie rzeczywistym, nielimitowane konta i eksport raportów.',
      sv: 'Uppgradera till Premium för realtidsinsikter, obegränsade konton och exporterbara rapporter.',
      zh: '升级至高级版，享实时洞察、无限账户和可导出报告。',
      ar: 'اشترك في بريميوم للحصول على رؤى فورية وحسابات غير محدودة وتقارير قابلة للتصدير.',
      hi: 'रीयल-टाइम इनसाइट्स, असीमित खाते और एक्सपोर्ट योग्य रिपोर्ट के लिए प्रीमियम लें।',
      ja: 'プレミアムでリアルタイムインサイト、無制限の口座、エクスポート可能なレポートを。'
    },
    upgrade_btn: {
      en: 'Upgrade — 79 kr/mo',
      uk: 'Оновити — 79 kr/міс',
      es: 'Mejorar — 79 kr/mes',
      fr: 'Mettre à niveau — 79 kr/mois',
      de: 'Upgrade — 79 kr/Monat',
      pt: 'Atualizar — 79 kr/mês',
      pl: 'Ulepsz — 79 kr/mies.',
      sv: 'Uppgradera — 79 kr/mån',
      zh: '升级 — 79克朗/月',
      ar: 'ترقية — 79 كرونة/شهريًا',
      hi: 'अपग्रेड करें — 79 kr/माह',
      ja: 'アップグレード — 79kr/月'
    },
    sign_out: {
      en: 'Sign out',
      uk: 'Вийти',
      es: 'Cerrar sesión',
      fr: 'Se déconnecter',
      de: 'Abmelden',
      pt: 'Terminar sessão',
      pl: 'Wyloguj się',
      sv: 'Logga ut',
      zh: '退出登录',
      ar: 'تسجيل الخروج',
      hi: 'साइन आउट करें',
      ja: 'サインアウト'
    },
    connected_accounts_title: {
      en: 'Connected accounts',
      uk: "Під'єднані рахунки",
      es: 'Cuentas conectadas',
      fr: 'Comptes connectés',
      de: 'Verknüpfte Konten',
      pt: 'Contas ligadas',
      pl: 'Połączone konta',
      sv: 'Anslutna konton',
      zh: '已连接的账户',
      ar: 'الحسابات المرتبطة',
      hi: 'जुड़े हुए खाते',
      ja: '連携済みの口座'
    },
    linked_updated: {
      en: '{n} linked · updated 9 Jul',
      uk: "{n} під'єднано · оновлено 9 лип.",
      es: '{n} vinculadas · actualizado el 9 jul',
      fr: '{n} liés · mis à jour le 9 juil.',
      de: '{n} verknüpft · aktualisiert am 9. Juli',
      pt: '{n} ligadas · atualizado a 9 jul',
      pl: '{n} połączone · zaktualizowano 9 lip',
      sv: '{n} anslutna · uppdaterad 9 juli',
      zh: '已连接{n}个 · 7月9日更新',
      ar: '{n} مرتبط · تم التحديث في 9 يوليو',
      hi: '{n} जुड़े · 9 जुलाई को अपडेट हुआ',
      ja: '{n}件連携済み・7月9日更新'
    },
    synced: {
      en: 'Synced',
      uk: 'Синхронізовано',
      es: 'Sincronizado',
      fr: 'Synchronisé',
      de: 'Synchronisiert',
      pt: 'Sincronizado',
      pl: 'Zsynchronizowano',
      sv: 'Synkad',
      zh: '已同步',
      ar: 'تمت المزامنة',
      hi: 'सिंक हुआ',
      ja: '同期済み'
    },
    connect_account_btn: {
      en: 'Connect an account',
      uk: "Під'єднати рахунок",
      es: 'Conectar una cuenta',
      fr: 'Connecter un compte',
      de: 'Konto verknüpfen',
      pt: 'Ligar uma conta',
      pl: 'Połącz konto',
      sv: 'Anslut ett konto',
      zh: '连接账户',
      ar: 'ربط حساب',
      hi: 'खाता जोड़ें',
      ja: '口座を連携する'
    },
    language_sheet_title: {
      en: 'Language',
      uk: 'Мова',
      es: 'Idioma',
      fr: 'Langue',
      de: 'Sprache',
      pt: 'Idioma',
      pl: 'Język',
      sv: 'Språk',
      zh: '语言',
      ar: 'اللغة',
      hi: 'भाषा',
      ja: '言語'
    },
    language_sheet_desc: {
      en: 'Choose the language Nomi displays.',
      uk: 'Оберіть мову інтерфейсу Nomi.',
      es: 'Elige el idioma en que se muestra Nomi.',
      fr: "Choisissez la langue d'affichage de Nomi.",
      de: 'Wähle die Sprache, in der Nomi angezeigt wird.',
      pt: 'Escolha o idioma em que a Nomi é apresentada.',
      pl: 'Wybierz język wyświetlania aplikacji Nomi.',
      sv: 'Välj språket Nomi visas på.',
      zh: '选择 Nomi 的显示语言。',
      ar: 'اختر اللغة التي تعرض بها Nomi.',
      hi: 'वह भाषा चुनें जिसमें Nomi दिखे।',
      ja: 'Nomiを表示する言語を選択してください。'
    },
    close: {
      en: 'Close',
      uk: 'Закрити',
      es: 'Cerrar',
      fr: 'Fermer',
      de: 'Schließen',
      pt: 'Fechar',
      pl: 'Zamknij',
      sv: 'Stäng',
      zh: '关闭',
      ar: 'إغلاق',
      hi: 'बंद करें',
      ja: '閉じる'
    },
    add_txn_title: {
      en: 'Add transaction',
      uk: 'Додати транзакцію',
      es: 'Añadir transacción',
      fr: 'Ajouter une transaction',
      de: 'Buchung hinzufügen',
      pt: 'Adicionar transação',
      pl: 'Dodaj transakcję',
      sv: 'Lägg till transaktion',
      zh: '添加交易',
      ar: 'إضافة معاملة',
      hi: 'लेन-देन जोड़ें',
      ja: '取引を追加'
    },
    expense: {
      en: 'Expense',
      uk: 'Витрата',
      es: 'Gasto',
      fr: 'Dépense',
      de: 'Ausgabe',
      pt: 'Despesa',
      pl: 'Wydatek',
      sv: 'Utgift',
      zh: '支出',
      ar: 'مصروف',
      hi: 'व्यय',
      ja: '支出'
    },
    income: {
      en: 'Income',
      uk: 'Дохід',
      es: 'Ingreso',
      fr: 'Revenu',
      de: 'Einnahme',
      pt: 'Receita',
      pl: 'Przychód',
      sv: 'Inkomst',
      zh: '收入',
      ar: 'دخل',
      hi: 'आय',
      ja: '収入'
    },
    merchant_label: {
      en: 'Merchant / description',
      uk: 'Продавець / опис',
      es: 'Comercio / descripción',
      fr: 'Commerçant / description',
      de: 'Händler / Beschreibung',
      pt: 'Comerciante / descrição',
      pl: 'Sprzedawca / opis',
      sv: 'Handlare / beskrivning',
      zh: '商家 / 描述',
      ar: 'التاجر / الوصف',
      hi: 'व्यापारी / विवरण',
      ja: '加盟店 / 説明'
    },
    merchant_ph_expense: {
      en: 'e.g. ICA Maxi',
      uk: 'напр., ICA Maxi',
      es: 'p. ej. ICA Maxi',
      fr: 'ex. ICA Maxi',
      de: 'z. B. ICA Maxi',
      pt: 'ex. ICA Maxi',
      pl: 'np. ICA Maxi',
      sv: 't.ex. ICA Maxi',
      zh: '例如 ICA Maxi',
      ar: 'مثال: ICA Maxi',
      hi: 'जैसे ICA Maxi',
      ja: '例：ICA Maxi'
    },
    merchant_ph_income: {
      en: 'e.g. Client invoice',
      uk: 'напр., рахунок клієнту',
      es: 'p. ej. Factura de cliente',
      fr: 'ex. Facture client',
      de: 'z. B. Kundenrechnung',
      pt: 'ex. Fatura de cliente',
      pl: 'np. Faktura dla klienta',
      sv: 't.ex. Kundfaktura',
      zh: '例如客户发票',
      ar: 'مثال: فاتورة عميل',
      hi: 'जैसे क्लाइंट इनवॉइस',
      ja: '例：クライアント請求書'
    },
    amount_label: {
      en: 'Amount',
      uk: 'Сума',
      es: 'Importe',
      fr: 'Montant',
      de: 'Betrag',
      pt: 'Valor',
      pl: 'Kwota',
      sv: 'Belopp',
      zh: '金额',
      ar: 'المبلغ',
      hi: 'राशि',
      ja: '金額'
    },
    category_label: {
      en: 'Category',
      uk: 'Категорія',
      es: 'Categoría',
      fr: 'Catégorie',
      de: 'Kategorie',
      pt: 'Categoria',
      pl: 'Kategoria',
      sv: 'Kategori',
      zh: '类别',
      ar: 'الفئة',
      hi: 'श्रेणी',
      ja: 'カテゴリ'
    },
    cat_groceries: {
      en: 'Groceries',
      uk: 'Продукти',
      es: 'Supermercado',
      fr: 'Courses',
      de: 'Lebensmittel',
      pt: 'Compras',
      pl: 'Zakupy spożywcze',
      sv: 'Livsmedel',
      zh: '杂货',
      ar: 'البقالة',
      hi: 'किराना',
      ja: '食料品'
    },
    cat_transport: {
      en: 'Transport',
      uk: 'Транспорт',
      es: 'Transporte',
      fr: 'Transport',
      de: 'Transport',
      pt: 'Transporte',
      pl: 'Transport',
      sv: 'Transport',
      zh: '交通',
      ar: 'المواصلات',
      hi: 'परिवहन',
      ja: '交通'
    },
    cat_subscriptions: {
      en: 'Subscriptions',
      uk: 'Підписки',
      es: 'Suscripciones',
      fr: 'Abonnements',
      de: 'Abonnements',
      pt: 'Subscrições',
      pl: 'Subskrypcje',
      sv: 'Prenumerationer',
      zh: '订阅',
      ar: 'الاشتراكات',
      hi: 'सदस्यताएं',
      ja: 'サブスクリプション'
    },
    cat_coffee: {
      en: 'Coffee & eating out',
      uk: 'Кава та кафе',
      es: 'Café y restaurantes',
      fr: 'Café et restaurants',
      de: 'Kaffee & Restaurants',
      pt: 'Café e restaurantes',
      pl: 'Kawa i restauracje',
      sv: 'Fika och restaurang',
      zh: '咖啡与外食',
      ar: 'القهوة والمطاعم',
      hi: 'कॉफ़ी और बाहर खाना',
      ja: 'コーヒー・外食'
    },
    cat_other: {
      en: 'Other',
      uk: 'Інше',
      es: 'Otros',
      fr: 'Autre',
      de: 'Sonstiges',
      pt: 'Outros',
      pl: 'Inne',
      sv: 'Övrigt',
      zh: '其他',
      ar: 'أخرى',
      hi: 'अन्य',
      ja: 'その他'
    },
    add_txn_btn: {
      en: 'Add transaction',
      uk: 'Додати транзакцію',
      es: 'Añadir transacción',
      fr: 'Ajouter une transaction',
      de: 'Buchung hinzufügen',
      pt: 'Adicionar transação',
      pl: 'Dodaj transakcję',
      sv: 'Lägg till transaktion',
      zh: '添加交易',
      ar: 'إضافة معاملة',
      hi: 'लेन-देन जोड़ें',
      ja: '取引を追加'
    },
    onboard_title: {
      en: 'How will you use Nomi?',
      uk: 'Як ви користуватиметеся Nomi?',
      es: '¿Cómo usarás Nomi?',
      fr: 'Comment allez-vous utiliser Nomi ?',
      de: 'Wie wirst du Nomi nutzen?',
      pt: 'Como vai usar a Nomi?',
      pl: 'Jak będziesz korzystać z Nomi?',
      sv: 'Hur kommer du använda Nomi?',
      zh: '您将如何使用 Nomi？',
      ar: 'كيف ستستخدم Nomi؟',
      hi: 'आप Nomi का उपयोग कैसे करेंगे?',
      ja: 'Nomiをどう使いますか？'
    },
    onboard_sub: {
      en: "One app, two modes. You can switch anytime — the insight engine adapts.",
      uk: 'Один застосунок, два режими. Перемикайтеся будь-коли — аналітика підлаштується.',
      es: 'Una app, dos modos. Puedes cambiar en cualquier momento — el motor de análisis se adapta.',
      fr: 'Une appli, deux modes. Changez à tout moment — le moteur d\'analyse s\'adapte.',
      de: 'Eine App, zwei Modi. Jederzeit wechselbar — die Analyse-Engine passt sich an.',
      pt: 'Uma app, dois modos. Pode mudar a qualquer momento — o motor de análise adapta-se.',
      pl: 'Jedna aplikacja, dwa tryby. Możesz przełączać w każdej chwili — silnik analiz się dostosuje.',
      sv: 'En app, två lägen. Byt när som helst — insiktsmotorn anpassar sig.',
      zh: '一个应用，两种模式。随时可切换——洞察引擎会自动适配。',
      ar: 'تطبيق واحد، وضعان. يمكنك التبديل في أي وقت — محرك الرؤى يتكيف.',
      hi: 'एक ऐप, दो मोड। कभी भी बदलें — इनसाइट इंजन अनुकूल हो जाता है।',
      ja: '1つのアプリ、2つのモード。いつでも切り替え可能 — インサイトエンジンが適応します。'
    },
    onboard_personal_title: {
      en: 'Personal',
      uk: 'Особисте',
      es: 'Personal',
      fr: 'Personnel',
      de: 'Privat',
      pt: 'Pessoal',
      pl: 'Osobiste',
      sv: 'Privat',
      zh: '个人',
      ar: 'شخصي',
      hi: 'व्यक्तिगत',
      ja: '個人'
    },
    onboard_personal_desc: {
      en: 'Track spending and save without the upkeep.',
      uk: 'Відстежуйте витрати та заощаджуйте без зайвих клопотів.',
      es: 'Controla tus gastos y ahorra sin esfuerzo.',
      fr: 'Suivez vos dépenses et épargnez sans effort.',
      de: 'Ausgaben verfolgen und sparen — ganz ohne Aufwand.',
      pt: 'Acompanhe gastos e poupe sem esforço.',
      pl: 'Śledź wydatki i oszczędzaj bez wysiłku.',
      sv: 'Följ utgifter och spara utan krångel.',
      zh: '轻松追踪支出并储蓄。',
      ar: 'تتبع إنفاقك ووفّر دون عناء.',
      hi: 'बिना झंझट खर्च ट्रैक करें और बचत करें।',
      ja: '手間なく支出を管理し、貯蓄できます。'
    },
    onboard_business_title: {
      en: 'Business',
      uk: 'Бізнес',
      es: 'Negocio',
      fr: 'Entreprise',
      de: 'Business',
      pt: 'Empresa',
      pl: 'Firma',
      sv: 'Företag',
      zh: '企业',
      ar: 'الأعمال',
      hi: 'व्यवसाय',
      ja: 'ビジネス'
    },
    onboard_business_desc: {
      en: 'Cash flow, spend trends, and simple reports.',
      uk: 'Грошовий потік, тренди витрат і прості звіти.',
      es: 'Flujo de caja, tendencias de gasto e informes sencillos.',
      fr: 'Trésorerie, tendances de dépenses et rapports simples.',
      de: 'Cashflow, Ausgabentrends und einfache Berichte.',
      pt: 'Fluxo de caixa, tendências de gastos e relatórios simples.',
      pl: 'Przepływy pieniężne, trendy wydatków i proste raporty.',
      sv: 'Kassaflöde, utgiftstrender och enkla rapporter.',
      zh: '现金流、支出趋势和简易报告。',
      ar: 'التدفق النقدي، اتجاهات الإنفاق، وتقارير بسيطة.',
      hi: 'नकदी प्रवाह, खर्च रुझान और सरल रिपोर्ट।',
      ja: 'キャッシュフロー、支出トレンド、シンプルなレポート。'
    },
    continue_btn: {
      en: 'Continue',
      uk: 'Продовжити',
      es: 'Continuar',
      fr: 'Continuer',
      de: 'Weiter',
      pt: 'Continuar',
      pl: 'Kontynuuj',
      sv: 'Fortsätt',
      zh: '继续',
      ar: 'متابعة',
      hi: 'जारी रखें',
      ja: '続ける'
    },
    onboard_footer: {
      en: 'Bank-grade encryption · You can connect accounts next',
      uk: 'Банківське шифрування · Далі можна підключити рахунки',
      es: 'Cifrado de nivel bancario · A continuación puedes conectar cuentas',
      fr: 'Chiffrement de niveau bancaire · Vous pourrez connecter vos comptes ensuite',
      de: 'Bankentaugliche Verschlüsselung · Als Nächstes kannst du Konten verknüpfen',
      pt: 'Encriptação de nível bancário · A seguir pode ligar contas',
      pl: 'Szyfrowanie na poziomie bankowym · Dalej możesz połączyć konta',
      sv: 'Bankgrad kryptering · Du kan ansluta konton härnäst',
      zh: '银行级加密 · 接下来可以连接账户',
      ar: 'تشفير بمستوى بنكي · يمكنك ربط الحسابات بعد ذلك',
      hi: 'बैंक-स्तरीय एन्क्रिप्शन · अगला कदम खाते जोड़ना है',
      ja: '銀行レベルの暗号化 · 次に口座を連携できます'
    },
    /* ---- intro / welcome onboarding (before mode chooser) ---- */
    intro_skip: {
      en: 'Skip',
      uk: 'Пропустити',
      es: 'Omitir',
      fr: 'Passer',
      de: 'Überspringen',
      pt: 'Saltar',
      pl: 'Pomiń',
      sv: 'Hoppa över',
      zh: '跳过',
      ar: 'تخطي',
      hi: 'छोड़ें',
      ja: 'スキップ'
    },
    intro_next: {
      en: 'Next',
      uk: 'Далі',
      es: 'Siguiente',
      fr: 'Suivant',
      de: 'Weiter',
      pt: 'Seguinte',
      pl: 'Dalej',
      sv: 'Nästa',
      zh: '下一步',
      ar: 'التالي',
      hi: 'आगे',
      ja: '次へ'
    },
    intro_get_started: {
      en: 'Get started',
      uk: 'Розпочати',
      es: 'Empezar',
      fr: 'Commencer',
      de: 'Los geht\'s',
      pt: 'Começar',
      pl: 'Rozpocznij',
      sv: 'Kom igång',
      zh: '开始使用',
      ar: 'ابدأ',
      hi: 'शुरू करें',
      ja: 'はじめる'
    },
    signin_title: {
      en: 'Welcome back',
      uk: 'З поверненням',
      es: 'Bienvenido de nuevo',
      fr: 'Content de vous revoir',
      de: 'Willkommen zurück',
      pt: 'Bem-vindo de volta',
      pl: 'Witaj ponownie',
      sv: 'Välkommen tillbaka',
      zh: '欢迎回来',
      ar: 'مرحبًا بعودتك',
      hi: 'वापसी पर स्वागत है',
      ja: 'おかえりなさい'
    },
    signin_sub: {
      en: 'Sign in with your email and password',
      uk: 'Увійдіть за допомогою електронної пошти та пароля',
      es: 'Inicia sesión con tu correo y contraseña',
      fr: 'Connectez-vous avec votre e-mail et mot de passe',
      de: 'Melde dich mit E-Mail und Passwort an',
      pt: 'Inicie sessão com o seu e-mail e palavra-passe',
      pl: 'Zaloguj się przy użyciu e-maila i hasła',
      sv: 'Logga in med din e-post och ditt lösenord',
      zh: '使用您的邮箱和密码登录',
      ar: 'سجّل الدخول ببريدك الإلكتروني وكلمة المرور',
      hi: 'अपने ईमेल और पासवर्ड से साइन इन करें',
      ja: 'メールアドレスとパスワードでサインイン'
    },
    signin_btn: {
      en: 'Sign in',
      uk: 'Увійти',
      es: 'Iniciar sesión',
      fr: 'Se connecter',
      de: 'Anmelden',
      pt: 'Iniciar sessão',
      pl: 'Zaloguj się',
      sv: 'Logga in',
      zh: '登录',
      ar: 'تسجيل الدخول',
      hi: 'साइन इन करें',
      ja: 'サインイン'
    },
    toggle_to_signin: {
      en: 'Already have an account? Sign in',
      uk: 'Вже є обліковий запис? Увійти',
      es: '¿Ya tienes una cuenta? Inicia sesión',
      fr: 'Vous avez déjà un compte ? Connectez-vous',
      de: 'Schon ein Konto? Anmelden',
      pt: 'Já tem uma conta? Inicie sessão',
      pl: 'Masz już konto? Zaloguj się',
      sv: 'Har du redan ett konto? Logga in',
      zh: '已有账户？登录',
      ar: 'لديك حساب بالفعل؟ سجّل الدخول',
      hi: 'पहले से खाता है? साइन इन करें',
      ja: 'すでにアカウントをお持ちですか？サインイン'
    },
    toggle_to_register: {
      en: 'New here? Create an account',
      uk: 'Вперше тут? Створіть акаунт',
      es: '¿Nuevo aquí? Crea una cuenta',
      fr: 'Nouveau ici ? Créez un compte',
      de: 'Neu hier? Konto erstellen',
      pt: 'Novo por aqui? Crie uma conta',
      pl: 'Nowy tutaj? Utwórz konto',
      sv: 'Ny här? Skapa ett konto',
      zh: '新用户？创建账户',
      ar: 'جديد هنا؟ أنشئ حسابًا',
      hi: 'यहाँ नए हैं? खाता बनाएं',
      ja: '初めての方はアカウント作成'
    },
    signin_err_invalid: {
      en: 'No account matches that email and password',
      uk: 'Немає акаунта з такою поштою та паролем',
      es: 'No hay ninguna cuenta con ese correo y contraseña',
      fr: 'Aucun compte ne correspond à cet e-mail et ce mot de passe',
      de: 'Kein Konto passt zu dieser E-Mail und diesem Passwort',
      pt: 'Nenhuma conta corresponde a esse e-mail e palavra-passe',
      pl: 'Brak konta pasującego do tego e-maila i hasła',
      sv: 'Inget konto matchar den e-posten och lösenordet',
      zh: '没有与该邮箱和密码匹配的账户',
      ar: 'لا يوجد حساب يطابق هذا البريد وكلمة المرور',
      hi: 'उस ईमेल और पासवर्ड से कोई खाता नहीं मिला',
      ja: 'そのメールとパスワードに一致するアカウントがありません'
    },
    premium_sheet_title: {
      en: 'Upgrade to Premium',
      uk: 'Перейти на Premium',
      es: 'Mejorar a Premium',
      fr: 'Passer à Premium',
      de: 'Auf Premium upgraden',
      pt: 'Atualizar para Premium',
      pl: 'Przejdź na Premium',
      sv: 'Uppgradera till Premium',
      zh: '升级至高级版',
      ar: 'الترقية إلى بريميوم',
      hi: 'प्रीमियम में अपग्रेड करें',
      ja: 'プレミアムにアップグレード'
    },
    premium_sheet_sub: {
      en: 'Unlock deeper insight and unlimited accounts',
      uk: 'Розблокуйте глибші інсайти та необмежену кількість рахунків',
      es: 'Desbloquea información más profunda y cuentas ilimitadas',
      fr: 'Débloquez des analyses plus poussées et des comptes illimités',
      de: 'Schalte tiefere Einblicke und unbegrenzte Konten frei',
      pt: 'Desbloqueie análises mais profundas e contas ilimitadas',
      pl: 'Odblokuj głębsze analizy i nieograniczoną liczbę kont',
      sv: 'Lås upp djupare insikter och obegränsat med konton',
      zh: '解锁更深入的洞察与无限账户',
      ar: 'افتح رؤى أعمق وحسابات غير محدودة',
      hi: 'गहरी इनसाइट और असीमित खाते अनलॉक करें',
      ja: 'より深いインサイトと無制限のアカウントを解放'
    },
    premium_feature_1: {
      en: 'Unlimited connected accounts',
      uk: 'Необмежена кількість підключених рахунків',
      es: 'Cuentas conectadas ilimitadas',
      fr: 'Comptes connectés illimités',
      de: 'Unbegrenzte verknüpfte Konten',
      pt: 'Contas ligadas ilimitadas',
      pl: 'Nieograniczona liczba połączonych kont',
      sv: 'Obegränsat antal anslutna konton',
      zh: '无限连接账户',
      ar: 'حسابات متصلة غير محدودة',
      hi: 'असीमित जुड़े हुए खाते',
      ja: '接続アカウント数無制限'
    },
    premium_feature_2: {
      en: 'Daily insight refresh',
      uk: 'Щоденне оновлення інсайтів',
      es: 'Actualización diaria de información',
      fr: 'Analyses actualisées chaque jour',
      de: 'Tägliche Einblick-Aktualisierung',
      pt: 'Atualização diária de informações',
      pl: 'Codzienna aktualizacja analiz',
      sv: 'Daglig insiktsuppdatering',
      zh: '每日洞察更新',
      ar: 'تحديث يومي للرؤى',
      hi: 'दैनिक इनसाइट अपडेट',
      ja: '毎日インサイトを更新'
    },
    premium_feature_3: {
      en: 'Export reports to PDF & CSV',
      uk: 'Експорт звітів у PDF і CSV',
      es: 'Exporta informes a PDF y CSV',
      fr: 'Exportez les rapports en PDF et CSV',
      de: 'Berichte als PDF & CSV exportieren',
      pt: 'Exporte relatórios para PDF e CSV',
      pl: 'Eksportuj raporty do PDF i CSV',
      sv: 'Exportera rapporter till PDF och CSV',
      zh: '导出报告为 PDF 和 CSV',
      ar: 'تصدير التقارير بصيغة PDF وCSV',
      hi: 'रिपोर्ट PDF और CSV में निर्यात करें',
      ja: 'レポートをPDF・CSVで書き出し'
    },
    premium_price: {
      en: '79 kr / month',
      uk: '79 kr / місяць',
      es: '79 kr al mes',
      fr: '79 kr / mois',
      de: '79 kr / Monat',
      pt: '79 kr / mês',
      pl: '79 kr / miesiąc',
      sv: '79 kr / månad',
      zh: '每月 79 克朗',
      ar: '79 كرونة / شهر',
      hi: '79 kr / माह',
      ja: '月額79クローナ'
    },
    premium_upgrade_btn: {
      en: 'Upgrade now',
      uk: 'Перейти зараз',
      es: 'Mejorar ahora',
      fr: 'Passer maintenant',
      de: 'Jetzt upgraden',
      pt: 'Atualizar agora',
      pl: 'Przejdź teraz',
      sv: 'Uppgradera nu',
      zh: '立即升级',
      ar: 'الترقية الآن',
      hi: 'अभी अपग्रेड करें',
      ja: '今すぐアップグレード'
    },
    premium_maybe_later: {
      en: 'Maybe later',
      uk: 'Можливо, пізніше',
      es: 'Quizás más tarde',
      fr: 'Peut-être plus tard',
      de: 'Vielleicht später',
      pt: 'Talvez mais tarde',
      pl: 'Może później',
      sv: 'Kanske senare',
      zh: '暂时不用',
      ar: 'ربما لاحقًا',
      hi: 'शायद बाद में',
      ja: 'また今度'
    },
    toast_upgrade_done: {
      en: 'Welcome to Premium!',
      uk: 'Ласкаво просимо до Premium!',
      es: '¡Bienvenido a Premium!',
      fr: 'Bienvenue dans Premium !',
      de: 'Willkommen bei Premium!',
      pt: 'Bem-vindo ao Premium!',
      pl: 'Witaj w Premium!',
      sv: 'Välkommen till Premium!',
      zh: '欢迎使用高级版！',
      ar: 'مرحبًا بك في بريميوم!',
      hi: 'प्रीमियम में स्वागत है!',
      ja: 'プレミアムへようこそ！'
    },
    txn_detail_title: {
      en: 'Transaction',
      uk: 'Транзакція',
      es: 'Transacción',
      fr: 'Transaction',
      de: 'Transaktion',
      pt: 'Transação',
      pl: 'Transakcja',
      sv: 'Transaktion',
      zh: '交易',
      ar: 'المعاملة',
      hi: 'लेन-देन',
      ja: '取引'
    },
    txn_detail_status: {
      en: 'Completed',
      uk: 'Завершено',
      es: 'Completada',
      fr: 'Terminée',
      de: 'Abgeschlossen',
      pt: 'Concluída',
      pl: 'Zakończona',
      sv: 'Slutförd',
      zh: '已完成',
      ar: 'مكتملة',
      hi: 'पूर्ण',
      ja: '完了'
    },
    txn_detail_category: {
      en: 'Category',
      uk: 'Категорія',
      es: 'Categoría',
      fr: 'Catégorie',
      de: 'Kategorie',
      pt: 'Categoria',
      pl: 'Kategoria',
      sv: 'Kategori',
      zh: '类别',
      ar: 'الفئة',
      hi: 'श्रेणी',
      ja: 'カテゴリー'
    },
    txn_detail_date: {
      en: 'Date',
      uk: 'Дата',
      es: 'Fecha',
      fr: 'Date',
      de: 'Datum',
      pt: 'Data',
      pl: 'Data',
      sv: 'Datum',
      zh: '日期',
      ar: 'التاريخ',
      hi: 'तारीख़',
      ja: '日付'
    },
    txn_detail_account: {
      en: 'Account',
      uk: 'Рахунок',
      es: 'Cuenta',
      fr: 'Compte',
      de: 'Konto',
      pt: 'Conta',
      pl: 'Konto',
      sv: 'Konto',
      zh: '账户',
      ar: 'الحساب',
      hi: 'खाता',
      ja: '口座'
    },
    txn_detail_ref: {
      en: 'Reference',
      uk: 'Референс',
      es: 'Referencia',
      fr: 'Référence',
      de: 'Referenz',
      pt: 'Referência',
      pl: 'Numer referencyjny',
      sv: 'Referens',
      zh: '参考号',
      ar: 'المرجع',
      hi: 'संदर्भ',
      ja: '参照番号'
    },
    profile_edit_title: {
      en: 'Edit profile',
      uk: 'Редагувати профіль',
      es: 'Editar perfil',
      fr: 'Modifier le profil',
      de: 'Profil bearbeiten',
      pt: 'Editar perfil',
      pl: 'Edytuj profil',
      sv: 'Redigera profil',
      zh: '编辑个人资料',
      ar: 'تعديل الملف الشخصي',
      hi: 'प्रोफ़ाइल संपादित करें',
      ja: 'プロフィールを編集'
    },
    profile_add_photo: {
      en: 'Add photo',
      uk: 'Додати фото',
      es: 'Añadir foto',
      fr: 'Ajouter une photo',
      de: 'Foto hinzufügen',
      pt: 'Adicionar foto',
      pl: 'Dodaj zdjęcie',
      sv: 'Lägg till foto',
      zh: '添加照片',
      ar: 'إضافة صورة',
      hi: 'फ़ोटो जोड़ें',
      ja: '写真を追加'
    },
    profile_save_btn: {
      en: 'Save changes',
      uk: 'Зберегти зміни',
      es: 'Guardar cambios',
      fr: 'Enregistrer les modifications',
      de: 'Änderungen speichern',
      pt: 'Guardar alterações',
      pl: 'Zapisz zmiany',
      sv: 'Spara ändringar',
      zh: '保存更改',
      ar: 'حفظ التغييرات',
      hi: 'परिवर्तन सहेजें',
      ja: '変更を保存'
    },
    profile_change_password: {
      en: 'Change password',
      uk: 'Змінити пароль',
      es: 'Cambiar contraseña',
      fr: 'Changer le mot de passe',
      de: 'Passwort ändern',
      pt: 'Alterar palavra-passe',
      pl: 'Zmień hasło',
      sv: 'Byt lösenord',
      zh: '更改密码',
      ar: 'تغيير كلمة المرور',
      hi: 'पासवर्ड बदलें',
      ja: 'パスワードを変更'
    },
    profile_current_password: {
      en: 'Current password',
      uk: 'Поточний пароль',
      es: 'Contraseña actual',
      fr: 'Mot de passe actuel',
      de: 'Aktuelles Passwort',
      pt: 'Palavra-passe atual',
      pl: 'Bieżące hasło',
      sv: 'Nuvarande lösenord',
      zh: '当前密码',
      ar: 'كلمة المرور الحالية',
      hi: 'वर्तमान पासवर्ड',
      ja: '現在のパスワード'
    },
    profile_new_password: {
      en: 'New password',
      uk: 'Новий пароль',
      es: 'Nueva contraseña',
      fr: 'Nouveau mot de passe',
      de: 'Neues Passwort',
      pt: 'Nova palavra-passe',
      pl: 'Nowe hasło',
      sv: 'Nytt lösenord',
      zh: '新密码',
      ar: 'كلمة مرور جديدة',
      hi: 'नया पासवर्ड',
      ja: '新しいパスワード'
    },
    profile_wrong_password: {
      en: 'Current password is incorrect',
      uk: 'Невірний поточний пароль',
      es: 'La contraseña actual es incorrecta',
      fr: 'Le mot de passe actuel est incorrect',
      de: 'Aktuelles Passwort ist falsch',
      pt: 'Palavra-passe atual incorreta',
      pl: 'Bieżące hasło jest nieprawidłowe',
      sv: 'Nuvarande lösenord är fel',
      zh: '当前密码不正确',
      ar: 'كلمة المرور الحالية غير صحيحة',
      hi: 'वर्तमान पासवर्ड गलत है',
      ja: '現在のパスワードが正しくありません'
    },
    toast_profile_saved: {
      en: 'Profile updated',
      uk: 'Профіль оновлено',
      es: 'Perfil actualizado',
      fr: 'Profil mis à jour',
      de: 'Profil aktualisiert',
      pt: 'Perfil atualizado',
      pl: 'Profil zaktualizowany',
      sv: 'Profilen uppdaterad',
      zh: '个人资料已更新',
      ar: 'تم تحديث الملف الشخصي',
      hi: 'प्रोफ़ाइल अपडेट हुई',
      ja: 'プロフィールを更新しました'
    },
    manage_plan_title: {
      en: 'Manage plan',
      uk: 'Керувати планом',
      es: 'Gestionar plan',
      fr: 'Gérer le forfait',
      de: 'Plan verwalten',
      pt: 'Gerir plano',
      pl: 'Zarządzaj planem',
      sv: 'Hantera plan',
      zh: '管理套餐',
      ar: 'إدارة الخطة',
      hi: 'योजना प्रबंधित करें',
      ja: 'プランを管理'
    },
    manage_plan_desc: {
      en: 'Premium · 79 kr/month',
      uk: 'Premium · 79 kr/міс.',
      es: 'Premium · 79 kr/mes',
      fr: 'Premium · 79 kr/mois',
      de: 'Premium · 79 kr/Monat',
      pt: 'Premium · 79 kr/mês',
      pl: 'Premium · 79 kr/mies.',
      sv: 'Premium · 79 kr/mån',
      zh: '高级版 · 每月 79 克朗',
      ar: 'بريميوم · 79 كرونة/شهر',
      hi: 'प्रीमियम · 79 kr/माह',
      ja: 'プレミアム・月額79クローナ'
    },
    cancel_subscription_btn: {
      en: 'Cancel subscription',
      uk: 'Скасувати підписку',
      es: 'Cancelar suscripción',
      fr: 'Annuler l’abonnement',
      de: 'Abo kündigen',
      pt: 'Cancelar subscrição',
      pl: 'Anuluj subskrypcję',
      sv: 'Säg upp prenumeration',
      zh: '取消订阅',
      ar: 'إلغاء الاشتراك',
      hi: 'सदस्यता रद्द करें',
      ja: '定期購入を解約'
    },
    cancel_subscription_confirm: {
      en: 'Cancel your Premium plan? You’ll lose premium features immediately.',
      uk: 'Скасувати план Premium? Ви одразу втратите преміум-функції.',
      es: '¿Cancelar tu plan Premium? Perderás las funciones premium de inmediato.',
      fr: 'Annuler votre forfait Premium ? Vous perdrez immédiatement les fonctionnalités premium.',
      de: 'Dein Premium-Abo kündigen? Du verlierst sofort die Premium-Funktionen.',
      pt: 'Cancelar o seu plano Premium? Vai perder as funcionalidades premium de imediato.',
      pl: 'Anulować plan Premium? Natychmiast stracisz funkcje premium.',
      sv: 'Säga upp din Premium-plan? Du förlorar premiumfunktionerna direkt.',
      zh: '要取消您的高级版套餐吗？您将立即失去高级功能。',
      ar: 'إلغاء خطة بريميوم؟ ستفقد الميزات المميزة فورًا.',
      hi: 'अपनी प्रीमियम योजना रद्द करें? आप तुरंत प्रीमियम सुविधाएं खो देंगे।',
      ja: 'プレミアムプランを解約しますか？すぐにプレミアム機能が使えなくなります。'
    },
    cancel_subscription_keep: {
      en: 'Keep Premium',
      uk: 'Залишити Premium',
      es: 'Mantener Premium',
      fr: 'Garder Premium',
      de: 'Premium behalten',
      pt: 'Manter Premium',
      pl: 'Zachowaj Premium',
      sv: 'Behåll Premium',
      zh: '保留高级版',
      ar: 'الاحتفاظ ببريميوم',
      hi: 'प्रीमियम रखें',
      ja: 'プレミアムを継続'
    },
    cancel_subscription_yes: {
      en: 'Yes, cancel',
      uk: 'Так, скасувати',
      es: 'Sí, cancelar',
      fr: 'Oui, annuler',
      de: 'Ja, kündigen',
      pt: 'Sim, cancelar',
      pl: 'Tak, anuluj',
      sv: 'Ja, säg upp',
      zh: '是，取消',
      ar: 'نعم، إلغاء',
      hi: 'हां, रद्द करें',
      ja: 'はい、解約する'
    },
    toast_subscription_canceled: {
      en: 'Subscription canceled',
      uk: 'Підписку скасовано',
      es: 'Suscripción cancelada',
      fr: 'Abonnement annulé',
      de: 'Abo gekündigt',
      pt: 'Subscrição cancelada',
      pl: 'Subskrypcja anulowana',
      sv: 'Prenumerationen uppsagd',
      zh: '订阅已取消',
      ar: 'تم إلغاء الاشتراك',
      hi: 'सदस्यता रद्द हुई',
      ja: '定期購入を解約しました'
    },
    add_to_calendar_btn: {
      en: 'Add to calendar',
      uk: 'Додати в календар',
      es: 'Añadir al calendario',
      fr: 'Ajouter au calendrier',
      de: 'Zum Kalender hinzufügen',
      pt: 'Adicionar ao calendário',
      pl: 'Dodaj do kalendarza',
      sv: 'Lägg till i kalendern',
      zh: '添加到日历',
      ar: 'إضافة إلى التقويم',
      hi: 'कैलेंडर में जोड़ें',
      ja: 'カレンダーに追加'
    },
    toast_added_calendar: {
      en: 'Added to your calendar',
      uk: 'Додано до вашого календаря',
      es: 'Añadido a tu calendario',
      fr: 'Ajouté à votre calendrier',
      de: 'Zu deinem Kalender hinzugefügt',
      pt: 'Adicionado ao seu calendário',
      pl: 'Dodano do Twojego kalendarza',
      sv: 'Tillagt i din kalender',
      zh: '已添加到您的日历',
      ar: 'أُضيف إلى تقويمك',
      hi: 'आपके कैलेंडर में जोड़ा गया',
      ja: 'カレンダーに追加しました'
    },
    toast_reminder_sent: {
      en: 'Reminder sent',
      uk: 'Нагадування надіслано',
      es: 'Recordatorio enviado',
      fr: 'Rappel envoyé',
      de: 'Erinnerung gesendet',
      pt: 'Lembrete enviado',
      pl: 'Wysłano przypomnienie',
      sv: 'Påminnelse skickad',
      zh: '提醒已发送',
      ar: 'تم إرسال التذكير',
      hi: 'रिमाइंडर भेजा गया',
      ja: 'リマインダーを送信しました'
    },
    toast_vendor_canceled: {
      en: 'Adobe CC subscription canceled',
      uk: 'Підписку Adobe CC скасовано',
      es: 'Suscripción de Adobe CC cancelada',
      fr: 'Abonnement Adobe CC annulé',
      de: 'Adobe-CC-Abo gekündigt',
      pt: 'Subscrição da Adobe CC cancelada',
      pl: 'Anulowano subskrypcję Adobe CC',
      sv: 'Adobe CC-prenumeration uppsagd',
      zh: 'Adobe CC 订阅已取消',
      ar: 'تم إلغاء اشتراك Adobe CC',
      hi: 'Adobe CC सदस्यता रद्द हुई',
      ja: 'Adobe CCの定期購入を解約しました'
    },
    confirm_transfer_btn: {
      en: 'Confirm transfer',
      uk: 'Підтвердити переказ',
      es: 'Confirmar transferencia',
      fr: 'Confirmer le transfert',
      de: 'Überweisung bestätigen',
      pt: 'Confirmar transferência',
      pl: 'Potwierdź przelew',
      sv: 'Bekräfta överföring',
      zh: '确认转账',
      ar: 'تأكيد التحويل',
      hi: 'स्थानांतरण की पुष्टि करें',
      ja: '振替を確定'
    },
    toast_moved_savings: {
      en: 'Moved to savings',
      uk: 'Переказано на заощадження',
      es: 'Movido a ahorros',
      fr: 'Transféré vers l’épargne',
      de: 'Zum Sparen verschoben',
      pt: 'Movido para poupança',
      pl: 'Przeniesiono na oszczędności',
      sv: 'Flyttat till sparande',
      zh: '已转入储蓄',
      ar: 'تم النقل إلى المدخرات',
      hi: 'बचत में स्थानांतरित',
      ja: '貯蓄に移動しました'
    },
    toast_report_exported: {
      en: 'Report exported',
      uk: 'Звіт експортовано',
      es: 'Informe exportado',
      fr: 'Rapport exporté',
      de: 'Bericht exportiert',
      pt: 'Relatório exportado',
      pl: 'Wyeksportowano raport',
      sv: 'Rapporten exporterad',
      zh: '报告已导出',
      ar: 'تم تصدير التقرير',
      hi: 'रिपोर्ट निर्यात हुई',
      ja: 'レポートを書き出しました'
    },
    reg_title: {
      en: 'Create your account',
      uk: 'Створіть обліковий запис',
      es: 'Crea tu cuenta',
      fr: 'Créez votre compte',
      de: 'Konto erstellen',
      pt: 'Crie a sua conta',
      pl: 'Utwórz konto',
      sv: 'Skapa ditt konto',
      zh: '创建账户',
      ar: 'أنشئ حسابك',
      hi: 'अपना खाता बनाएं',
      ja: 'アカウントを作成'
    },
    reg_sub: {
      en: 'Just a few details to get started',
      uk: 'Ще кілька деталей — і можна починати',
      es: 'Solo unos datos más para empezar',
      fr: 'Encore quelques informations pour commencer',
      de: 'Nur noch ein paar Angaben, dann geht’s los',
      pt: 'Só mais alguns dados para começar',
      pl: 'Jeszcze kilka danych, aby zacząć',
      sv: 'Bara några uppgifter för att komma igång',
      zh: '只需几项信息即可开始',
      ar: 'بضع تفاصيل فقط للبدء',
      hi: 'शुरू करने के लिए बस कुछ जानकारी चाहिए',
      ja: '開始するにはあと少し情報が必要です'
    },
    reg_first_name: {
      en: 'First name',
      uk: 'Ім’я',
      es: 'Nombre',
      fr: 'Prénom',
      de: 'Vorname',
      pt: 'Nome próprio',
      pl: 'Imię',
      sv: 'Förnamn',
      zh: '名',
      ar: 'الاسم الأول',
      hi: 'पहला नाम',
      ja: '名'
    },
    reg_last_name: {
      en: 'Last name',
      uk: 'Прізвище',
      es: 'Apellido',
      fr: 'Nom de famille',
      de: 'Nachname',
      pt: 'Apelido',
      pl: 'Nazwisko',
      sv: 'Efternamn',
      zh: '姓',
      ar: 'اسم العائلة',
      hi: 'उपनाम',
      ja: '姓'
    },
    reg_email: {
      en: 'Email',
      uk: 'Електронна пошта',
      es: 'Correo electrónico',
      fr: 'E-mail',
      de: 'E-Mail',
      pt: 'E-mail',
      pl: 'E-mail',
      sv: 'E-post',
      zh: '电子邮箱',
      ar: 'البريد الإلكتروني',
      hi: 'ईमेल',
      ja: 'メールアドレス'
    },
    reg_password: {
      en: 'Password',
      uk: 'Пароль',
      es: 'Contraseña',
      fr: 'Mot de passe',
      de: 'Passwort',
      pt: 'Palavra-passe',
      pl: 'Hasło',
      sv: 'Lösenord',
      zh: '密码',
      ar: 'كلمة المرور',
      hi: 'पासवर्ड',
      ja: 'パスワード'
    },
    reg_password_hint: {
      en: 'At least 8 characters',
      uk: 'Щонайменше 8 символів',
      es: 'Al menos 8 caracteres',
      fr: 'Au moins 8 caractères',
      de: 'Mindestens 8 Zeichen',
      pt: 'Pelo menos 8 caracteres',
      pl: 'Co najmniej 8 znaków',
      sv: 'Minst 8 tecken',
      zh: '至少 8 个字符',
      ar: '8 أحرف على الأقل',
      hi: 'कम से कम 8 अक्षर',
      ja: '8文字以上'
    },
    reg_err_required: {
      en: 'Required',
      uk: 'Обов’язково',
      es: 'Obligatorio',
      fr: 'Requis',
      de: 'Erforderlich',
      pt: 'Obrigatório',
      pl: 'Wymagane',
      sv: 'Obligatoriskt',
      zh: '必填',
      ar: 'مطلوب',
      hi: 'आवश्यक',
      ja: '必須'
    },
    reg_err_email: {
      en: 'Enter a valid email',
      uk: 'Введіть дійсну електронну адресу',
      es: 'Introduce un correo válido',
      fr: 'Saisissez un e-mail valide',
      de: 'Gültige E-Mail eingeben',
      pt: 'Introduza um e-mail válido',
      pl: 'Podaj prawidłowy adres e-mail',
      sv: 'Ange en giltig e-postadress',
      zh: '请输入有效的电子邮箱',
      ar: 'أدخل بريدًا إلكترونيًا صالحًا',
      hi: 'मान्य ईमेल दर्ज करें',
      ja: '有効なメールアドレスを入力してください'
    },
    reg_err_password: {
      en: 'At least 8 characters',
      uk: 'Щонайменше 8 символів',
      es: 'Al menos 8 caracteres',
      fr: 'Au moins 8 caractères',
      de: 'Mindestens 8 Zeichen',
      pt: 'Pelo menos 8 caracteres',
      pl: 'Co najmniej 8 znaków',
      sv: 'Minst 8 tecken',
      zh: '至少 8 个字符',
      ar: '8 أحرف على الأقل',
      hi: 'कम से कम 8 अक्षर',
      ja: '8文字以上'
    },
    reg_phone_title: {
      en: 'Verify your number',
      uk: 'Підтвердьте номер',
      es: 'Verifica tu número',
      fr: 'Vérifiez votre numéro',
      de: 'Nummer bestätigen',
      pt: 'Verifique o seu número',
      pl: 'Zweryfikuj numer',
      sv: 'Verifiera ditt nummer',
      zh: '验证您的号码',
      ar: 'تحقق من رقمك',
      hi: 'अपना नंबर सत्यापित करें',
      ja: '電話番号を確認'
    },
    reg_phone_sub: {
      en: 'We’ll text you a code to confirm it’s you',
      uk: 'Ми надішлемо SMS-код для підтвердження',
      es: 'Te enviaremos un código por SMS para confirmarlo',
      fr: 'Nous vous enverrons un code par SMS pour confirmer',
      de: 'Wir senden dir per SMS einen Code zur Bestätigung',
      pt: 'Vamos enviar-lhe um código por SMS para confirmar',
      pl: 'Wyślemy Ci kod SMS w celu potwierdzenia',
      sv: 'Vi skickar en kod via sms för att bekräfta att det är du',
      zh: '我们将通过短信发送验证码以确认身份',
      ar: 'سنرسل لك رمزًا نصيًا لتأكيد هويتك',
      hi: 'हम आपकी पुष्टि के लिए एक कोड भेजेंगे',
      ja: 'ご本人確認のためSMSでコードをお送りします'
    },
    reg_phone_label: {
      en: 'Mobile number',
      uk: 'Номер телефону',
      es: 'Número de móvil',
      fr: 'Numéro de mobile',
      de: 'Mobilnummer',
      pt: 'Número de telemóvel',
      pl: 'Numer telefonu',
      sv: 'Mobilnummer',
      zh: '手机号码',
      ar: 'رقم الجوال',
      hi: 'मोबाइल नंबर',
      ja: '携帯電話番号'
    },
    reg_err_phone: {
      en: 'Enter a valid number',
      uk: 'Введіть дійсний номер',
      es: 'Introduce un número válido',
      fr: 'Saisissez un numéro valide',
      de: 'Gültige Nummer eingeben',
      pt: 'Introduza um número válido',
      pl: 'Podaj prawidłowy numer',
      sv: 'Ange ett giltigt nummer',
      zh: '请输入有效号码',
      ar: 'أدخل رقمًا صالحًا',
      hi: 'मान्य नंबर दर्ज करें',
      ja: '有効な番号を入力してください'
    },
    reg_send_code: {
      en: 'Send code',
      uk: 'Надіслати код',
      es: 'Enviar código',
      fr: 'Envoyer le code',
      de: 'Code senden',
      pt: 'Enviar código',
      pl: 'Wyślij kod',
      sv: 'Skicka kod',
      zh: '发送验证码',
      ar: 'إرسال الرمز',
      hi: 'कोड भेजें',
      ja: 'コードを送信'
    },
    reg_back: {
      en: 'Back',
      uk: 'Назад',
      es: 'Atrás',
      fr: 'Retour',
      de: 'Zurück',
      pt: 'Voltar',
      pl: 'Wstecz',
      sv: 'Tillbaka',
      zh: '返回',
      ar: 'رجوع',
      hi: 'वापस',
      ja: '戻る'
    },
    reg_verify_title: {
      en: 'Enter the code',
      uk: 'Введіть код',
      es: 'Introduce el código',
      fr: 'Saisissez le code',
      de: 'Code eingeben',
      pt: 'Introduza o código',
      pl: 'Wprowadź kod',
      sv: 'Ange koden',
      zh: '输入验证码',
      ar: 'أدخل الرمز',
      hi: 'कोड दर्ज करें',
      ja: 'コードを入力'
    },
    reg_verify_sub: {
      en: 'We sent a 6-digit code to {phone}',
      uk: 'Ми надіслали 6-значний код на {phone}',
      es: 'Enviamos un código de 6 dígitos a {phone}',
      fr: 'Nous avons envoyé un code à 6 chiffres au {phone}',
      de: 'Wir haben einen 6-stelligen Code an {phone} gesendet',
      pt: 'Enviámos um código de 6 dígitos para {phone}',
      pl: 'Wysłaliśmy 6-cyfrowy kod na {phone}',
      sv: 'Vi skickade en 6-siffrig kod till {phone}',
      zh: '我们已向 {phone} 发送 6 位验证码',
      ar: 'أرسلنا رمزًا مكونًا من 6 أرقام إلى {phone}',
      hi: 'हमने {phone} पर 6 अंकों का कोड भेजा है',
      ja: '{phone}に6桁のコードを送信しました'
    },
    reg_code_label: {
      en: 'Verification code',
      uk: 'Код підтвердження',
      es: 'Código de verificación',
      fr: 'Code de vérification',
      de: 'Bestätigungscode',
      pt: 'Código de verificação',
      pl: 'Kod weryfikacyjny',
      sv: 'Verifieringskod',
      zh: '验证码',
      ar: 'رمز التحقق',
      hi: 'सत्यापन कोड',
      ja: '確認コード'
    },
    reg_err_code: {
      en: 'Enter the 6-digit code',
      uk: 'Введіть 6-значний код',
      es: 'Introduce el código de 6 dígitos',
      fr: 'Saisissez le code à 6 chiffres',
      de: 'Gib den 6-stelligen Code ein',
      pt: 'Introduza o código de 6 dígitos',
      pl: 'Wprowadź 6-cyfrowy kod',
      sv: 'Ange den 6-siffriga koden',
      zh: '请输入 6 位验证码',
      ar: 'أدخل الرمز المكون من 6 أرقام',
      hi: '6 अंकों का कोड दर्ज करें',
      ja: '6桁のコードを入力してください'
    },
    reg_code_sent: {
      en: 'Code sent',
      uk: 'Код надіслано',
      es: 'Código enviado',
      fr: 'Code envoyé',
      de: 'Code gesendet',
      pt: 'Código enviado',
      pl: 'Kod wysłany',
      sv: 'Kod skickad',
      zh: '验证码已发送',
      ar: 'تم إرسال الرمز',
      hi: 'कोड भेजा गया',
      ja: 'コードを送信しました'
    },
    reg_verify_resend: {
      en: 'Didn’t get it? Resend',
      uk: 'Не отримали? Надіслати ще раз',
      es: '¿No lo recibiste? Reenviar',
      fr: 'Pas reçu ? Renvoyer',
      de: 'Nicht erhalten? Erneut senden',
      pt: 'Não recebeu? Reenviar',
      pl: 'Nie otrzymałeś? Wyślij ponownie',
      sv: 'Fick du ingen kod? Skicka igen',
      zh: '没收到？重新发送',
      ar: 'لم تستلمه؟ إعادة الإرسال',
      hi: 'नहीं मिला? पुनः भेजें',
      ja: '届きませんか？再送信'
    },
    reg_verify_btn: {
      en: 'Verify & continue',
      uk: 'Підтвердити і продовжити',
      es: 'Verificar y continuar',
      fr: 'Vérifier et continuer',
      de: 'Bestätigen & weiter',
      pt: 'Verificar e continuar',
      pl: 'Zweryfikuj i kontynuuj',
      sv: 'Verifiera och fortsätt',
      zh: '验证并继续',
      ar: 'تحقق وتابع',
      hi: 'सत्यापित करें और जारी रखें',
      ja: '確認して続ける'
    },
    intro0_title: {
      en: 'Meet Nomi',
      uk: 'Знайомтеся, Nomi',
      es: 'Conoce a Nomi',
      fr: 'Découvrez Nomi',
      de: 'Das ist Nomi',
      pt: 'Conheça a Nomi',
      pl: 'Poznaj Nomi',
      sv: 'Möt Nomi',
      zh: '认识 Nomi',
      ar: 'تعرّف على Nomi',
      hi: 'नोमी से मिलें',
      ja: 'Nomiのご紹介'
    },
    intro0_desc: {
      en: 'Nomi is your personal finance companion — it connects to your accounts and turns your money data into clear, plain-language insight, for both your personal life and your business.',
      uk: 'Nomi — ваш помічник у фінансах: підключається до рахунків і перетворює дані про гроші на зрозумілі поради — для особистого життя і бізнесу.',
      es: 'Nomi es tu compañero financiero: conecta tus cuentas y convierte tus datos económicos en información clara, para tu vida personal y tu negocio.',
      fr: 'Nomi est votre compagnon financier : il se connecte à vos comptes et transforme vos données financières en informations claires, pour votre vie personnelle comme pour votre entreprise.',
      de: 'Nomi ist dein Finanzbegleiter — es verbindet sich mit deinen Konten und macht aus deinen Finanzdaten klare, verständliche Einblicke, privat wie geschäftlich.',
      pt: 'A Nomi é a sua companheira financeira — liga-se às suas contas e transforma os seus dados financeiros em informação clara, para a vida pessoal e para o negócio.',
      pl: 'Nomi to Twój towarzysz finansowy — łączy się z Twoimi kontami i zamienia dane finansowe w jasne wskazówki, prywatnie i w biznesie.',
      sv: 'Nomi är din ekonomiska följeslagare — den ansluter till dina konton och gör om din ekonomiska data till tydliga insikter, både privat och i företaget.',
      zh: 'Nomi 是您的私人理财伙伴——连接您的账户，将资金数据转化为清晰易懂的洞察，无论个人生活还是business。',
      ar: 'Nomi هو رفيقك المالي — يتصل بحساباتك ويحوّل بياناتك المالية إلى رؤى واضحة وبسيطة، لحياتك الشخصية وعملك.',
      hi: 'नोमी आपका व्यक्तिगत वित्त साथी है — यह आपके खातों से जुड़कर आपके धन डेटा को स्पष्ट, सरल भाषा में इनसाइट में बदल देता है, आपके निजी और व्यावसायिक जीवन दोनों के लिए।',
      ja: 'Nomiはあなたの家計・ビジネスの伴走者です。口座と連携し、お金のデータをわかりやすいインサイトに変えます。'
    },
    intro1_title: {
      en: 'Clarity, not just data',
      uk: 'Ясність, а не просто дані',
      es: 'Claridad, no solo datos',
      fr: 'De la clarté, pas juste des données',
      de: 'Klarheit statt nur Daten',
      pt: 'Clareza, não só dados',
      pl: 'Jasność, nie tylko dane',
      sv: 'Klarhet, inte bara data',
      zh: '清晰洞察，而非数据堆砌',
      ar: 'وضوح، لا مجرد بيانات',
      hi: 'स्पष्टता, सिर्फ़ डेटा नहीं',
      ja: 'データではなく、明快さを'
    },
    intro1_desc: {
      en: 'Nomi reads your accounts and tells you what actually matters — in plain language.',
      uk: 'Nomi аналізує ваші рахунки і простою мовою каже, що справді важливо.',
      es: 'Nomi lee tus cuentas y te dice lo que realmente importa, en lenguaje sencillo.',
      fr: 'Nomi analyse vos comptes et vous dit ce qui compte vraiment, en langage simple.',
      de: 'Nomi liest deine Konten und sagt dir in klarer Sprache, was wirklich zählt.',
      pt: 'A Nomi lê as suas contas e diz-lhe o que realmente importa, em linguagem simples.',
      pl: 'Nomi analizuje Twoje konta i mówi prostym językiem, co naprawdę ważne.',
      sv: 'Nomi läser dina konton och berättar vad som faktiskt spelar roll — i klarspråk.',
      zh: '“Nomi 会读取您的账户，并用简明的语言告诉您真正重要的事。',
      ar: 'تقرأ Nomi حساباتك وتخبرك بما يهم فعلاً — بلغة واضحة وبسيطة.',
      hi: 'Nomi आपके खातों को पढ़ता है और सरल भाषा में बताता है कि वास्तव में क्या मायने रखता है।',
      ja: 'Nomiはあなたの口座を読み取り、本当に重要なことを平易な言葉で伝えます。'
    },
    intro2_title: {
      en: 'One insight at a time',
      uk: 'Один інсайт за раз',
      es: 'Un análisis a la vez',
      fr: 'Une analyse à la fois',
      de: 'Ein Einblick nach dem anderen',
      pt: 'Uma análise de cada vez',
      pl: 'Jedna analiza naraz',
      sv: 'En insikt i taget',
      zh: '一次一个洞察',
      ar: 'رؤية واحدة في كل مرة',
      hi: 'एक बार में एक इनसाइट',
      ja: '一度にひとつのインサイト'
    },
    intro2_desc: {
      en: "No dashboards to interpret, no pile of alerts. Just what's worth knowing, when it matters.",
      uk: 'Жодних панелей для аналізу чи купи сповіщень. Лише те, що варто знати, коли це важливо.',
      es: 'Sin paneles que interpretar ni montones de alertas. Solo lo que vale la pena saber, cuando importa.',
      fr: 'Pas de tableaux de bord à interpréter, pas de pile d\'alertes. Juste ce qui compte de savoir, au bon moment.',
      de: 'Keine Dashboards zum Interpretieren, kein Alarm-Stapel. Nur das Wissenswerte, genau dann, wenn es zählt.',
      pt: 'Sem painéis para interpretar, sem pilhas de alertas. Só o que vale a pena saber, quando importa.',
      pl: 'Żadnych paneli do interpretacji, żadnego stosu alertów. Tylko to, co warto wiedzieć, gdy ma to znaczenie.',
      sv: 'Inga dashboards att tolka, inga travar av varningar. Bara det som är värt att veta, när det spelar roll.',
      zh: '无需解读仪表盘，也没有一堆提醒。只有真正值得了解的事，恰逢其时地呈现。',
      ar: 'لا لوحات معلومات لتفسيرها، ولا كومة تنبيهات. فقط ما يستحق المعرفة، في الوقت المناسب.',
      hi: 'न कोई डैशबोर्ड समझना, न अलर्ट का ढेर। बस वही जो जानने लायक है, जब ज़रूरी हो।',
      ja: '解読が必要なダッシュボードも、アラートの山もありません。本当に必要な時に、知るべきことだけを。'
    },
    intro3_title: {
      en: 'Bank-grade encryption',
      uk: 'Банківське шифрування',
      es: 'Cifrado de nivel bancario',
      fr: 'Chiffrement de niveau bancaire',
      de: 'Bankentaugliche Verschlüsselung',
      pt: 'Encriptação de nível bancário',
      pl: 'Szyfrowanie na poziomie bankowym',
      sv: 'Bankgrad kryptering',
      zh: '银行级加密',
      ar: 'تشفير بمستوى بنكي',
      hi: 'बैंक-स्तरीय एन्क्रिप्शन',
      ja: '銀行レベルの暗号化'
    },
    intro3_desc: {
      en: 'Your data stays private and secure. Connect your accounts whenever you\'re ready.',
      uk: 'Ваші дані залишаються приватними та захищеними. Підключіть рахунки, коли будете готові.',
      es: 'Tus datos permanecen privados y seguros. Conecta tus cuentas cuando estés listo.',
      fr: 'Vos données restent privées et sécurisées. Connectez vos comptes quand vous serez prêt.',
      de: 'Deine Daten bleiben privat und sicher. Verknüpfe deine Konten, sobald du bereit bist.',
      pt: 'Os seus dados mantêm-se privados e seguros. Ligue as suas contas quando estiver pronto.',
      pl: 'Twoje dane pozostają prywatne i bezpieczne. Połącz konta, gdy będziesz gotowy.',
      sv: 'Din data förblir privat och säker. Anslut dina konton när du är redo.',
      zh: '您的数据始终私密安全。准备好后即可连接账户。',
      ar: 'تبقى بياناتك خاصة وآمنة. اربط حساباتك عندما تكون جاهزًا.',
      hi: 'आपका डेटा निजी और सुरक्षित रहता है। जब तैयार हों तब खाते जोड़ें।',
      ja: 'あなたのデータは常に非公開かつ安全です。準備ができたら口座を連携してください。'
    },
    /* ---- relative dates (mock transactions) ---- */
    date_today: {
      en: 'Today',
      uk: 'Сьогодні',
      es: 'Hoy',
      fr: "Aujourd'hui",
      de: 'Heute',
      pt: 'Hoje',
      pl: 'Dziś',
      sv: 'Idag',
      zh: '今天',
      ar: 'اليوم',
      hi: 'आज',
      ja: '今日'
    },
    date_yesterday: {
      en: 'Yesterday',
      uk: 'Вчора',
      es: 'Ayer',
      fr: 'Hier',
      de: 'Gestern',
      pt: 'Ontem',
      pl: 'Wczoraj',
      sv: 'Igår',
      zh: '昨天',
      ar: 'أمس',
      hi: 'कल',
      ja: '昨日'
    },
    date_days_ago: {
      en: '{n} days ago',
      uk: '{n} дні тому',
      es: 'hace {n} días',
      fr: 'il y a {n} jours',
      de: 'vor {n} Tagen',
      pt: 'há {n} dias',
      pl: '{n} dni temu',
      sv: 'för {n} dagar sedan',
      zh: '{n} 天前',
      ar: 'قبل {n} أيام',
      hi: '{n} दिन पहले',
      ja: '{n}日前'
    },
    date_just_now: {
      en: 'Just now',
      uk: 'Щойно',
      es: 'Ahora mismo',
      fr: "À l'instant",
      de: 'Gerade eben',
      pt: 'Agora mesmo',
      pl: 'Przed chwilą',
      sv: 'Just nu',
      zh: '刚刚',
      ar: 'الآن',
      hi: 'अभी अभी',
      ja: 'たった今'
    },
    /* ---- money-in/out legend (CashflowChart) ---- */
    legend_money_in: {
      en: 'Money in',
      uk: 'Надходження',
      es: 'Ingresos',
      fr: 'Entrées',
      de: 'Eingang',
      pt: 'Entradas',
      pl: 'Wpływy',
      sv: 'Pengar in',
      zh: '收入',
      ar: 'أموال واردة',
      hi: 'आया पैसा',
      ja: '入金'
    },
    legend_money_out: {
      en: 'Money out',
      uk: 'Витрати',
      es: 'Gastos',
      fr: 'Sorties',
      de: 'Ausgang',
      pt: 'Saídas',
      pl: 'Wypływy',
      sv: 'Pengar ut',
      zh: '支出',
      ar: 'أموال صادرة',
      hi: 'गया पैसा',
      ja: '出金'
    },
    /* ---- category labels (CategoryBreakdown legend) ---- */
    cat_rent: {
      en: 'Rent',
      uk: 'Оренда',
      es: 'Alquiler',
      fr: 'Loyer',
      de: 'Miete',
      pt: 'Renda',
      pl: 'Czynsz',
      sv: 'Hyra',
      zh: '房租',
      ar: 'الإيجار',
      hi: 'किराया',
      ja: '家賃'
    },
    cat_payroll: {
      en: 'Payroll & contractors',
      uk: 'Зарплата та підрядники',
      es: 'Nómina y contratistas',
      fr: 'Salaires et prestataires',
      de: 'Gehälter & Auftragnehmer',
      pt: 'Salários e prestadores',
      pl: 'Płace i wykonawcy',
      sv: 'Löner och konsulter',
      zh: '工资与承包商',
      ar: 'الرواتب والمقاولون',
      hi: 'वेतन और ठेकेदार',
      ja: '給与・外部委託'
    },
    cat_office_rent: {
      en: 'Office & rent',
      uk: 'Офіс і оренда',
      es: 'Oficina y alquiler',
      fr: 'Bureau et loyer',
      de: 'Büro & Miete',
      pt: 'Escritório e renda',
      pl: 'Biuro i czynsz',
      sv: 'Kontor och hyra',
      zh: '办公与租金',
      ar: 'المكتب والإيجار',
      hi: 'कार्यालय और किराया',
      ja: 'オフィス・家賃'
    },
    cat_software: {
      en: 'Software',
      uk: 'Програмне забезпечення',
      es: 'Software',
      fr: 'Logiciels',
      de: 'Software',
      pt: 'Software',
      pl: 'Oprogramowanie',
      sv: 'Mjukvara',
      zh: '软件',
      ar: 'البرمجيات',
      hi: 'सॉफ़्टवेयर',
      ja: 'ソフトウェア'
    },
    goal_emergency: {
      en: 'Emergency fund',
      uk: 'Резервний фонд',
      es: 'Fondo de emergencia',
      fr: "Fonds d'urgence",
      de: 'Notfallfonds',
      pt: 'Fundo de emergência',
      pl: 'Fundusz awaryjny',
      sv: 'Buffert',
      zh: '应急基金',
      ar: 'صندوق الطوارئ',
      hi: 'आपातकालीन फंड',
      ja: '緊急資金'
    },
    goal_tax_reserve: {
      en: 'Tax reserve (Q3)',
      uk: 'Податковий резерв (Q3)',
      es: 'Reserva fiscal (T3)',
      fr: "Réserve fiscale (T3)",
      de: 'Steuerrücklage (Q3)',
      pt: 'Reserva fiscal (T3)',
      pl: 'Rezerwa podatkowa (Q3)',
      sv: 'Skattereserv (K3)',
      zh: '税务储备金（Q3）',
      ar: 'احتياطي الضرائب (الربع 3)',
      hi: 'कर आरक्षित निधि (Q3)',
      ja: '納税準備金（第3四半期）'
    },
    goal_months_left: {
      en: '{n} months left',
      uk: 'Залишилось {n} міс.',
      es: 'Quedan {n} meses',
      fr: 'Il reste {n} mois',
      de: 'Noch {n} Monate',
      pt: 'Faltam {n} meses',
      pl: 'Zostały {n} mies.',
      sv: '{n} månader kvar',
      zh: '还剩 {n} 个月',
      ar: 'تبقى {n} أشهر',
      hi: '{n} महीने शेष',
      ja: '残り{n}か月'
    },
    goal_due_date: {
      en: 'Due {date}',
      uk: 'Термін: {date}',
      es: 'Vence el {date}',
      fr: 'Échéance {date}',
      de: 'Fällig am {date}',
      pt: 'Vence a {date}',
      pl: 'Termin {date}',
      sv: 'Förfaller {date}',
      zh: '截止 {date}',
      ar: 'الاستحقاق {date}',
      hi: 'देय {date}',
      ja: '期限 {date}'
    },
    cat_travel: {
      en: 'Travel',
      uk: 'Подорожі',
      es: 'Viajes',
      fr: 'Déplacements',
      de: 'Reisen',
      pt: 'Viagens',
      pl: 'Podróże',
      sv: 'Resor',
      zh: '差旅',
      ar: 'السفر',
      hi: 'यात्रा',
      ja: '出張'
    },
    /* ---- insight titles / actions / bodies ---- */
    ins_save_action: {
      en: 'See breakdown',
      uk: 'Переглянути деталі',
      es: 'Ver desglose',
      fr: 'Voir le détail',
      de: 'Details ansehen',
      pt: 'Ver detalhe',
      pl: 'Zobacz szczegóły',
      sv: 'Se detaljer',
      zh: '查看明细',
      ar: 'عرض التفاصيل',
      hi: 'विवरण देखें',
      ja: '内訳を見る'
    },
    ins_save_text: {
      en: "You're on track to save <strong>{amount}</strong> this month — 18% more than usual.",
      uk: 'Ви на шляху до заощадження <strong>{amount}</strong> цього місяця — на 18% більше, ніж зазвичай.',
      es: 'Vas camino de ahorrar <strong>{amount}</strong> este mes — un 18% más de lo habitual.',
      fr: 'Vous êtes en voie d\'épargner <strong>{amount}</strong> ce mois-ci — 18 % de plus que d\'habitude.',
      de: 'Du bist auf dem besten Weg, diesen Monat <strong>{amount}</strong> zu sparen — 18 % mehr als sonst.',
      pt: 'Está no caminho para poupar <strong>{amount}</strong> este mês — 18% mais do que o habitual.',
      pl: 'Jesteś na dobrej drodze, by zaoszczędzić <strong>{amount}</strong> w tym miesiącu — o 18% więcej niż zwykle.',
      sv: 'Du är på väg att spara <strong>{amount}</strong> denna månad — 18% mer än vanligt.',
      zh: '本月您有望储蓄 <strong>{amount}</strong>——比平常多 18%。',
      ar: 'أنت في طريقك لتوفير <strong>{amount}</strong> هذا الشهر — أكثر بنسبة 18% من المعتاد.',
      hi: 'आप इस महीने <strong>{amount}</strong> बचाने की राह पर हैं — सामान्य से 18% अधिक।',
      ja: '今月は<strong>{amount}</strong>を貯蓄できる見込みです — 通常より18%多い額です。'
    },
    ins_unused_title: {
      en: 'Unused subscription',
      uk: 'Невикористана підписка',
      es: 'Suscripción sin usar',
      fr: 'Abonnement inutilisé',
      de: 'Ungenutztes Abo',
      pt: 'Subscrição não utilizada',
      pl: 'Nieużywana subskrypcja',
      sv: 'Oanvänd prenumeration',
      zh: '未使用的订阅',
      ar: 'اشتراك غير مستخدم',
      hi: 'अप्रयुक्त सदस्यता',
      ja: '未使用のサブスクリプション'
    },
    ins_unused_action: {
      en: 'Review',
      uk: 'Переглянути',
      es: 'Revisar',
      fr: 'Vérifier',
      de: 'Prüfen',
      pt: 'Rever',
      pl: 'Sprawdź',
      sv: 'Granska',
      zh: '查看',
      ar: 'مراجعة',
      hi: 'समीक्षा करें',
      ja: '確認する'
    },
    ins_unused_text: {
      en: "You haven't used <strong>{name}</strong> in 3 months. That's {amount}/month.",
      uk: 'Ви не користувалися <strong>{name}</strong> вже 3 місяці. Це {amount}/місяць.',
      es: 'No has usado <strong>{name}</strong> en 3 meses. Eso es {amount}/mes.',
      fr: 'Vous n\'avez pas utilisé <strong>{name}</strong> depuis 3 mois. Cela représente {amount}/mois.',
      de: 'Du hast <strong>{name}</strong> seit 3 Monaten nicht genutzt. Das sind {amount}/Monat.',
      pt: 'Não usa a <strong>{name}</strong> há 3 meses. Isso são {amount}/mês.',
      pl: 'Nie korzystasz z <strong>{name}</strong> od 3 miesięcy. To {amount}/miesiąc.',
      sv: 'Du har inte använt <strong>{name}</strong> på 3 månader. Det är {amount}/månad.',
      zh: '您已 3 个月未使用 <strong>{name}</strong>。这相当于每月 {amount}。',
      ar: 'لم تستخدم <strong>{name}</strong> منذ 3 أشهر. أي {amount}/شهريًا.',
      hi: '3 महीने से आपने <strong>{name}</strong> का उपयोग नहीं किया। यह {amount}/माह है।',
      ja: '<strong>{name}</strong>を3か月間利用していません。月額{amount}です。'
    },
    ins_move_action: {
      en: 'Move to savings',
      uk: 'Перевести на заощадження',
      es: 'Mover a ahorros',
      fr: 'Transférer vers l\'épargne',
      de: 'Zum Sparen verschieben',
      pt: 'Mover para poupança',
      pl: 'Przenieś do oszczędności',
      sv: 'Flytta till sparande',
      zh: '转入储蓄',
      ar: 'نقل إلى المدخرات',
      hi: 'बचत में स्थानांतरित करें',
      ja: '貯蓄へ移動'
    },
    ins_move_text: {
      en: 'Your checking balance is higher than usual. Consider moving <strong>{amount}</strong> to your emergency fund.',
      uk: 'Баланс поточного рахунку вищий за звичайний. Розгляньте переказ <strong>{amount}</strong> у резервний фонд.',
      es: 'El saldo de tu cuenta corriente es más alto de lo habitual. Considera mover <strong>{amount}</strong> a tu fondo de emergencia.',
      fr: 'Le solde de votre compte courant est plus élevé que d\'habitude. Envisagez de transférer <strong>{amount}</strong> vers votre fonds d\'urgence.',
      de: 'Dein Girokontostand ist höher als üblich. Erwäge, <strong>{amount}</strong> in deinen Notfallfonds zu verschieben.',
      pt: 'O saldo da sua conta à ordem está mais alto do que o habitual. Considere mover <strong>{amount}</strong> para o seu fundo de emergência.',
      pl: 'Saldo Twojego konta bieżącego jest wyższe niż zwykle. Rozważ przeniesienie <strong>{amount}</strong> do funduszu awaryjnego.',
      sv: 'Ditt saldo på lönekontot är högre än vanligt. Överväg att flytta <strong>{amount}</strong> till din buffert.',
      zh: '您的活期账户余额高于往常。可考虑将 <strong>{amount}</strong> 转入应急基金。',
      ar: 'رصيد حسابك الجاري أعلى من المعتاد. فكر في نقل <strong>{amount}</strong> إلى صندوق الطوارئ.',
      hi: 'आपका चेकिंग बैलेंस सामान्य से अधिक है। <strong>{amount}</strong> आपातकालीन फंड में स्थानांतरित करने पर विचार करें।',
      ja: '当座預金残高が通常より多くなっています。緊急資金へ<strong>{amount}</strong>を移すことをご検討ください。'
    },
    ins_overdue_title: {
      en: 'Client payment overdue',
      uk: 'Прострочена оплата клієнта',
      es: 'Pago de cliente atrasado',
      fr: 'Paiement client en retard',
      de: 'Kundenzahlung überfällig',
      pt: 'Pagamento de cliente em atraso',
      pl: 'Zaległa płatność klienta',
      sv: 'Försenad kundbetalning',
      zh: '客户付款逾期',
      ar: 'دفعة عميل متأخرة',
      hi: 'ग्राहक भुगतान बकाया',
      ja: 'クライアントの支払い延滞'
    },
    ins_overdue_action: {
      en: 'Send reminder',
      uk: 'Надіслати нагадування',
      es: 'Enviar recordatorio',
      fr: 'Envoyer un rappel',
      de: 'Erinnerung senden',
      pt: 'Enviar lembrete',
      pl: 'Wyślij przypomnienie',
      sv: 'Skicka påminnelse',
      zh: '发送提醒',
      ar: 'إرسال تذكير',
      hi: 'रिमाइंडर भेजें',
      ja: 'リマインダーを送る'
    },
    ins_overdue_text: {
      en: 'Invoice <strong>#{num}</strong> ({amount}) is 9 days late. Cash flow dips below {threshold} on the 14th if unpaid.',
      uk: 'Рахунок <strong>№{num}</strong> ({amount}) прострочено на 9 днів. Якщо не оплатити, грошовий потік впаде нижче {threshold} 14-го числа.',
      es: 'La factura <strong>n.º {num}</strong> ({amount}) lleva 9 días de retraso. El flujo de caja caerá por debajo de {threshold} el día 14 si no se paga.',
      fr: 'La facture <strong>n° {num}</strong> ({amount}) a 9 jours de retard. La trésorerie passera sous {threshold} le 14 si elle n\'est pas payée.',
      de: 'Rechnung <strong>Nr. {num}</strong> ({amount}) ist 9 Tage überfällig. Der Cashflow sinkt am 14. unter {threshold}, falls unbezahlt.',
      pt: 'A fatura <strong>n.º {num}</strong> ({amount}) está 9 dias atrasada. O fluxo de caixa cai abaixo de {threshold} no dia 14 se não for paga.',
      pl: 'Faktura <strong>#{num}</strong> ({amount}) jest spóźniona o 9 dni. Przepływy spadną poniżej {threshold} 14. dnia, jeśli nie zostanie opłacona.',
      sv: 'Faktura <strong>#{num}</strong> ({amount}) är 9 dagar sen. Kassaflödet sjunker under {threshold} den 14:e om den förblir obetald.',
      zh: '发票 <strong>#{num}</strong>（{amount}）已逾期 9 天。若未付款，14 日现金流将跌破 {threshold}。',
      ar: 'الفاتورة <strong>#{num}</strong> ({amount}) متأخرة 9 أيام. سينخفض التدفق النقدي دون {threshold} في اليوم 14 إذا لم تُدفع.',
      hi: 'इनवॉइस <strong>#{num}</strong> ({amount}) 9 दिन देर से है। अगर भुगतान नहीं हुआ तो 14 तारीख को नकदी प्रवाह {threshold} से नीचे चला जाएगा।',
      ja: '請求書<strong>#{num}</strong>（{amount}）は9日延滞しています。未払いのままだと14日にキャッシュフローが{threshold}を下回ります。'
    },
    ins_software_action: {
      en: 'See vendors',
      uk: 'Переглянути постачальників',
      es: 'Ver proveedores',
      fr: 'Voir les fournisseurs',
      de: 'Anbieter ansehen',
      pt: 'Ver fornecedores',
      pl: 'Zobacz dostawców',
      sv: 'Se leverantörer',
      zh: '查看供应商',
      ar: 'عرض الموردين',
      hi: 'विक्रेता देखें',
      ja: 'ベンダーを見る'
    },
    ins_software_text: {
      en: 'Software spend is up <strong>32%</strong> this quarter. Three new subscriptions started in June.',
      uk: 'Витрати на ПЗ зросли на <strong>32%</strong> цього кварталу. У червні почалися три нові підписки.',
      es: 'El gasto en software ha subido un <strong>32%</strong> este trimestre. Se iniciaron tres nuevas suscripciones en junio.',
      fr: 'Les dépenses logicielles ont augmenté de <strong>32 %</strong> ce trimestre. Trois nouveaux abonnements ont démarré en juin.',
      de: 'Die Softwareausgaben sind dieses Quartal um <strong>32 %</strong> gestiegen. Im Juni kamen drei neue Abos hinzu.',
      pt: 'A despesa com software subiu <strong>32%</strong> este trimestre. Três novas subscrições começaram em junho.',
      pl: 'Wydatki na oprogramowanie wzrosły o <strong>32%</strong> w tym kwartale. W czerwcu rozpoczęto trzy nowe subskrypcje.',
      sv: 'Mjukvarukostnaderna har ökat med <strong>32%</strong> detta kvartal. Tre nya prenumerationer startade i juni.',
      zh: '本季度软件支出增长了 <strong>32%</strong>。6 月新增了三项订阅。',
      ar: 'ارتفع إنفاق البرمجيات بنسبة <strong>32%</strong> هذا الربع. بدأت ثلاثة اشتراكات جديدة في يونيو.',
      hi: 'इस तिमाही सॉफ़्टवेयर खर्च <strong>32%</strong> बढ़ा है। जून में तीन नई सदस्यताएं शुरू हुईं।',
      ja: '今四半期のソフトウェア支出は<strong>32%</strong>増加しました。6月に3件の新規サブスクリプションが開始されました。'
    },
    ins_revenue_action: {
      en: 'View report',
      uk: 'Переглянути звіт',
      es: 'Ver informe',
      fr: 'Voir le rapport',
      de: 'Bericht ansehen',
      pt: 'Ver relatório',
      pl: 'Zobacz raport',
      sv: 'Visa rapport',
      zh: '查看报告',
      ar: 'عرض التقرير',
      hi: 'रिपोर्ट देखें',
      ja: 'レポートを見る'
    },
    ins_revenue_text: {
      en: 'Q2 revenue is <strong>18% ahead</strong> of Q1. Your strongest quarter this year.',
      uk: 'Дохід за 2 квартал на <strong>18% вищий</strong> за 1 квартал. Найкращий квартал цього року.',
      es: 'Los ingresos del T2 están <strong>un 18% por delante</strong> del T1. Tu trimestre más fuerte este año.',
      fr: 'Le chiffre d\'affaires du T2 est <strong>en avance de 18 %</strong> sur le T1. Votre meilleur trimestre de l\'année.',
      de: 'Der Umsatz in Q2 liegt <strong>18 % über</strong> Q1. Dein stärkstes Quartal dieses Jahr.',
      pt: 'A receita do T2 está <strong>18% acima</strong> do T1. O seu trimestre mais forte este ano.',
      pl: 'Przychód w Q2 jest <strong>o 18% wyższy</strong> niż w Q1. Twój najlepszy kwartał w tym roku.',
      sv: 'Q2-intäkterna är <strong>18% högre</strong> än Q1. Ditt starkaste kvartal i år.',
      zh: '第二季度收入较第一季度<strong>高出 18%</strong>，是今年表现最强的一季。',
      ar: 'إيرادات الربع الثاني <strong>أعلى بنسبة 18%</strong> من الربع الأول. أقوى ربع لك هذا العام.',
      hi: 'Q2 राजस्व Q1 से <strong>18% आगे</strong> है। इस साल की आपकी सबसे मज़बूत तिमाही।',
      ja: '第2四半期の収益は第1四半期を<strong>18%上回り</strong>ました。今年最も好調な四半期です。'
    }
  };
  function t(lang, key, vars) {
    const row = STR[key];
    let s = row && (row[lang] || row.en) || key;
    if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
    return s;
  }
  window.NomiI18n = {
    t,
    STR
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/i18n.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Nomi mobile app — screens. Composes the design-system components from the
   bundle. Each screen is a fake, click-through recreation of a real view. */
(function () {
  const NS = window.NomiDesignSystem_3ea5bf;
  const {
    Card,
    Stat,
    InsightCard,
    InsightChip,
    TransactionRow,
    ProgressGoal,
    CategoryBreakdown,
    CashflowChart,
    Badge,
    Button,
    IconButton,
    ModeSwitch,
    Icon,
    Switch,
    Input
  } = NS;
  const px = v => v;
  const modeOptions = t => [{
    value: 'personal',
    label: t('mode_personal'),
    icon: 'user'
  }, {
    value: 'business',
    label: t('mode_business'),
    icon: 'briefcase'
  }];
  const TXN_CATEGORY_LABEL_KEY = {
    groceries: 'cat_groceries',
    subscriptions: 'cat_subscriptions',
    transport: 'cat_transport',
    coffee: 'cat_coffee',
    income: 'in_word',
    default: 'cat_other'
  };
  const txnCategoryLabel = (t, category) => t(TXN_CATEGORY_LABEL_KEY[category] || 'cat_other');

  // ---- shared bits ----
  function ScreenHeader({
    title,
    subtitle,
    right
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '20px 20px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)',
        fontWeight: 'var(--fw-medium)'
      }
    }, subtitle), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: 'var(--ls-tight)'
      }
    }, title)), right);
  }
  function SectionLabel({
    children,
    action,
    onAction
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '4px 0 10px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, children), action && /*#__PURE__*/React.createElement("span", {
      onClick: onAction,
      style: {
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-link)',
        cursor: 'pointer'
      }
    }, action));
  }
  const scroll = {
    flex: 1,
    overflowY: 'auto',
    padding: '0 20px 24px'
  };

  // ================= HOME =================
  function HomeScreen({
    data,
    mode,
    onMode,
    hideBalances,
    onToggleHide,
    onProfile,
    onSeeAllInsights,
    onSeeAllActivity,
    onTxnClick,
    onInsightAction,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const mask = v => hideBalances ? '••••••' : v;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 20px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/nomi-icon.png",
      width: "30",
      height: "30",
      style: {
        borderRadius: '22.5%'
      },
      alt: ""
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-body)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, t('hi_name', {
      name: data.name.split(' ')[0]
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      variant: "ghost",
      label: t('alerts')
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "user",
      variant: "ghost",
      label: t('profile'),
      onClick: onProfile
    }))), /*#__PURE__*/React.createElement(ModeSwitch, {
      value: mode,
      onChange: onMode,
      fullWidth: true,
      options: modeOptions(t)
    })), /*#__PURE__*/React.createElement("div", {
      style: scroll
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "inverse",
      radius: "xl",
      pad: "lg",
      elevation: "md",
      style: {
        marginBottom: 16,
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -30,
        top: -30,
        width: 140,
        height: 140,
        borderRadius: '50%',
        background: mode === 'business' ? 'rgba(83,74,183,0.22)' : 'rgba(53,185,141,0.16)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      tone: "inverse",
      label: mode === 'business' ? t('total_across') : t('total_balance'),
      value: mask(data.balance),
      currency: hideBalances ? '' : 'kr',
      size: "lg",
      delta: hideBalances ? undefined : '+3.2%',
      caption: hideBalances ? undefined : t('vs_last_month')
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "eye",
      variant: "ghost",
      label: hideBalances ? t('show_balances_btn') : t('hide_balances_btn'),
      onClick: onToggleHide,
      style: {
        color: 'var(--indigo-200)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'rgba(255,255,255,0.08)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--indigo-200)'
      }
    }, t('in_word')), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--green-300)'
      }
    }, hideBalances ? '••••' : '+' + data.inThisMonth + ' kr')), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'rgba(255,255,255,0.08)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--indigo-200)'
      }
    }, t('out_word')), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-medium)',
        color: '#fff'
      }
    }, hideBalances ? '••••' : '-' + data.outThisMonth + ' kr')))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        margin: '4px 0 10px'
      }
    }, /*#__PURE__*/React.createElement(InsightChip, {
      mode: mode,
      size: "sm"
    }, t('nomi_insight')), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      onClick: onSeeAllInsights,
      style: {
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-link)',
        cursor: 'pointer'
      }
    }, t('all_insights'))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(InsightCard, {
      tone: data.insights[0].tone,
      timestamp: data.insights[0].timestamp,
      title: data.insights[0].title,
      actionLabel: data.insights[0].action,
      onAction: () => onInsightAction && onInsightAction(data.insights[0])
    }, /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: data.insights[0].text
      }
    }))), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, null, mode === 'business' ? t('cashflow_month') : t('cashflow_week')), /*#__PURE__*/React.createElement(CashflowChart, {
      data: data.cashflow,
      height: 130,
      variant: "area",
      legendInLabel: t('legend_money_in'),
      legendOutLabel: t('legend_money_out')
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(ProgressGoal, data.goal)), /*#__PURE__*/React.createElement(SectionLabel, {
      action: t('see_all'),
      onAction: onSeeAllActivity
    }, t('recent_activity')), /*#__PURE__*/React.createElement(Card, {
      pad: "sm"
    }, data.transactions.slice(0, 4).map((t2, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(TransactionRow, _extends({}, t2, {
      categoryLabel: txnCategoryLabel(t, t2.category),
      onClick: () => onTxnClick && onTxnClick(t2)
    })))))));
  }

  // ================= INSIGHTS =================
  function InsightsScreen({
    data,
    mode,
    onInsightAction,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(ScreenHeader, {
      subtitle: mode === 'business' ? t('mode_business') : t('mode_personal'),
      title: t('insights_title'),
      right: /*#__PURE__*/React.createElement(InsightChip, {
        mode: mode
      }, t('insights_new', {
        n: data.insights.length
      }))
    }), /*#__PURE__*/React.createElement("div", {
      style: scroll
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)',
        margin: '4px 0 16px',
        lineHeight: 1.5
      }
    }, t('insights_para')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, data.insights.map(ins => /*#__PURE__*/React.createElement(InsightCard, {
      key: ins.id,
      tone: ins.tone,
      timestamp: ins.timestamp,
      title: ins.title,
      actionLabel: ins.action,
      onAction: () => onInsightAction && onInsightAction(ins),
      dismissable: true
    }, /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: ins.text
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      color: "var(--green-500)"
    }), " ", t('all_caught_up')))));
  }

  // ================= ACTIVITY =================
  function ActivityScreen({
    data,
    mode,
    onTxnClick,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [range, setRange] = React.useState('m');
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const RANGE_MULT = {
      w: 1 / 4.33,
      m: 1,
      y: 12
    };
    const RANGE_LABEL = {
      w: t('range_week'),
      m: t('range_month'),
      y: t('range_year')
    };
    const mult = RANGE_MULT[range];
    const scaledCategories = data.categories.map(c => ({
      ...c,
      amount: Math.max(1, Math.round(c.amount * mult))
    }));
    const totalSpend = scaledCategories.reduce((s, c) => s + c.amount, 0);
    const rangeTxns = range === 'w' ? data.transactions.slice(0, 3) : data.transactions;
    const q = query.trim().toLowerCase();
    const shownTxns = q ? rangeTxns.filter(tx => (tx.merchant + ' ' + tx.category).toLowerCase().includes(q)) : rangeTxns;
    const closeSearch = () => {
      setSearchOpen(false);
      setQuery('');
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(ScreenHeader, {
      subtitle: mode === 'business' ? t('mode_business') : t('mode_personal'),
      title: t('activity_title'),
      right: /*#__PURE__*/React.createElement(IconButton, {
        icon: searchOpen ? 'x' : 'search',
        variant: "soft",
        label: searchOpen ? t('close_search') : t('search'),
        onClick: () => searchOpen ? closeSearch() : setSearchOpen(true)
      })
    }), searchOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 20px 12px'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      icon: "search",
      placeholder: t('search_placeholder'),
      value: query,
      onChange: e => setQuery(e.target.value),
      autoFocus: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 20px 12px'
      }
    }, /*#__PURE__*/React.createElement(ModeSwitch, {
      size: "sm",
      fullWidth: true,
      value: range,
      onChange: setRange,
      options: [{
        value: 'w',
        label: t('week')
      }, {
        value: 'm',
        label: t('month')
      }, {
        value: 'y',
        label: t('year')
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: scroll
    }, !q && /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, null, t('spend_by_category', {
      range: RANGE_LABEL[range]
    })), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-h3)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)',
        margin: '2px 0 14px'
      }
    }, totalSpend.toLocaleString('sv-SE'), " kr"), /*#__PURE__*/React.createElement(CategoryBreakdown, {
      items: scaledCategories
    })), /*#__PURE__*/React.createElement(SectionLabel, {
      action: q ? undefined : t('export')
    }, q ? t('results_for', {
      q: query
    }) : t('transactions')), shownTxns.length ? /*#__PURE__*/React.createElement(Card, {
      pad: "sm"
    }, shownTxns.map((tx, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(TransactionRow, _extends({}, tx, {
      categoryLabel: txnCategoryLabel(t, tx.category),
      onClick: () => onTxnClick && onTxnClick(tx)
    }))))) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '28px 0',
        textAlign: 'center',
        color: 'var(--text-subtle)',
        fontSize: 'var(--fs-body-sm)'
      }
    }, t('no_match', {
      q: query
    }))));
  }

  // ================= SETTINGS =================
  const ACCOUNTS = {
    personal: [{
      bank: 'SEB',
      kind: 'Personal · checking',
      last: '4821',
      icon: 'building-bank'
    }, {
      bank: 'Swedbank',
      kind: 'Savings',
      last: '0093',
      icon: 'pig-money'
    }, {
      bank: 'Amex',
      kind: 'Credit card',
      last: '1007',
      icon: 'credit-card'
    }],
    business: [{
      bank: 'SEB Företag',
      kind: 'Business · operating',
      last: '7742',
      icon: 'building-bank'
    }, {
      bank: 'Wise',
      kind: 'Multi-currency',
      last: '5510',
      icon: 'coin'
    }, {
      bank: 'Eurocard',
      kind: 'Corporate card',
      last: '2288',
      icon: 'credit-card'
    }]
  };
  function SettingRow({
    label,
    desc,
    children,
    onClick,
    first
  }) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '14px 0',
        borderTop: first ? 'none' : '1px solid var(--border-subtle)',
        cursor: onClick ? 'pointer' : 'default'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-body)',
        color: 'var(--text-strong)',
        fontWeight: 'var(--fw-medium)'
      }
    }, label), desc && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-muted)',
        marginTop: 1
      }
    }, desc)), children);
  }
  const LANGUAGES = [{
    code: 'en',
    name: 'English',
    native: 'English'
  }, {
    code: 'uk',
    name: 'Ukrainian',
    native: 'Українська'
  }, {
    code: 'es',
    name: 'Spanish',
    native: 'Español'
  }, {
    code: 'fr',
    name: 'French',
    native: 'Français'
  }, {
    code: 'de',
    name: 'German',
    native: 'Deutsch'
  }, {
    code: 'pt',
    name: 'Portuguese',
    native: 'Português'
  }, {
    code: 'pl',
    name: 'Polish',
    native: 'Polski'
  }, {
    code: 'sv',
    name: 'Swedish',
    native: 'Svenska'
  }, {
    code: 'zh',
    name: 'Chinese',
    native: '中文'
  }, {
    code: 'ar',
    name: 'Arabic',
    native: 'العربية'
  }, {
    code: 'hi',
    name: 'Hindi',
    native: 'हिन्दी'
  }, {
    code: 'ja',
    name: 'Japanese',
    native: '日本語'
  }];
  function LanguageSheet({
    open,
    value,
    onClose,
    onSelect,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 40,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 90,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 24px',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        flexDirection: 'column',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, t('language_sheet_title')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)',
        margin: '0 0 8px',
        flexShrink: 0
      }
    }, t('language_sheet_desc')), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }
    }, LANGUAGES.map((l, i) => /*#__PURE__*/React.createElement("button", {
      key: l.code,
      onClick: () => onSelect(l.code),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '13px 4px',
        borderTop: i ? '1px solid var(--border-subtle)' : 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-body)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, l.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)'
      }
    }, l.native)), value === l.code && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18,
      color: "var(--indigo-600)"
    }))))));
  }
  function AccountsSheet({
    open,
    mode,
    onClose,
    showToast,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const list = ACCOUNTS[mode] || ACCOUNTS.personal;
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 40,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 24px',
        boxShadow: 'var(--shadow-xl)',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, t('connected_accounts_title')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)',
        margin: '0 0 12px'
      }
    }, t('linked_updated', {
      n: list.length
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, list.map((a, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 0',
        borderTop: i ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        flexShrink: 0,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-brand-soft)',
        color: 'var(--indigo-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-body)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, a.bank), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)'
      }
    }, a.kind, " \xB7\xB7\xB7\xB7 ", a.last)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 'var(--fs-caption)',
        color: 'var(--positive-600)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--positive-500)'
      }
    }), " ", t('synced'))))), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      iconLeft: "plus",
      style: {
        marginTop: 16
      },
      onClick: () => {
        onClose();
        showToast(t('toast_bank_started'));
      }
    }, t('connect_account_btn'))));
  }
  function PremiumSheet({
    open,
    onClose,
    onUpgrade,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const features = [t('premium_feature_1'), t('premium_feature_2'), t('premium_feature_3')];
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 45,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 26px',
        boxShadow: 'var(--shadow-xl)',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, t('premium_sheet_title')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)',
        margin: '0 0 16px'
      }
    }, t('premium_sheet_sub')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginBottom: 18
      }
    }, features.map((f, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: 'var(--surface-brand-soft)',
        color: 'var(--indigo-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      strokeWidth: 3
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-strong)'
      }
    }, f)))), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-h3)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)',
        marginBottom: 16
      }
    }, t('premium_price')), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      fullWidth: true,
      size: "lg",
      onClick: onUpgrade
    }, t('premium_upgrade_btn')), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'center',
        marginTop: 14,
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-muted)'
      }
    }, t('premium_maybe_later'))));
  }
  function ProfileEditSheet({
    open,
    user,
    onClose,
    onSave,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const fileRef = React.useRef(null);
    const [form, setForm] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      photo: null
    });
    const [pwOpen, setPwOpen] = React.useState(false);
    const [currentPw, setCurrentPw] = React.useState('');
    const [newPw, setNewPw] = React.useState('');
    const [errors, setErrors] = React.useState({});
    React.useEffect(() => {
      if (open) {
        setForm({
          firstName: user && user.firstName || '',
          lastName: user && user.lastName || '',
          email: user && user.email || '',
          phone: user && user.phone || '',
          photo: user && user.photo || null
        });
        setPwOpen(false);
        setCurrentPw('');
        setNewPw('');
        setErrors({});
      }
    }, [open, user]);
    const set = k => e => setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    function pickPhoto(e) {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => setForm(f => ({
        ...f,
        photo: reader.result
      }));
      reader.readAsDataURL(file);
    }
    function submit() {
      const e = {};
      if (!form.firstName.trim()) e.firstName = t('reg_err_required');
      if (!form.lastName.trim()) e.lastName = t('reg_err_required');
      if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = t('reg_err_email');
      if (pwOpen) {
        if (!currentPw) e.currentPw = t('reg_err_required');else if (user && user.password && currentPw !== user.password) e.currentPw = t('profile_wrong_password');
        if (newPw.length < 8) e.newPw = t('reg_err_password');
      }
      setErrors(e);
      if (Object.keys(e).length) return;
      onSave({
        ...form,
        newPassword: pwOpen ? newPw : undefined
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 47,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 60,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 24px',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        flexDirection: 'column',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, t('profile_edit_title')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => fileRef.current && fileRef.current.click(),
      style: {
        width: 84,
        height: 84,
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        padding: 0,
        background: form.photo ? `url(${form.photo}) center/cover` : 'var(--surface-brand-soft)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--indigo-700)'
      }
    }, !form.photo && /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 34
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: 'var(--indigo-700)',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }))), /*#__PURE__*/React.createElement("input", {
      ref: fileRef,
      type: "file",
      accept: "image/*",
      onChange: pickPhoto,
      style: {
        display: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-muted)',
        marginTop: 8
      }
    }, t('profile_add_photo'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: t('reg_first_name'),
      value: form.firstName,
      onChange: set('firstName'),
      error: errors.firstName
    }), /*#__PURE__*/React.createElement(Input, {
      label: t('reg_last_name'),
      value: form.lastName,
      onChange: set('lastName'),
      error: errors.lastName
    }), /*#__PURE__*/React.createElement(Input, {
      label: t('reg_email'),
      type: "email",
      value: form.email,
      onChange: set('email'),
      error: errors.email
    }), /*#__PURE__*/React.createElement(Input, {
      label: t('reg_phone_label'),
      type: "tel",
      value: form.phone,
      onChange: set('phone')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, !pwOpen ? /*#__PURE__*/React.createElement("button", {
      onClick: () => setPwOpen(true),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--indigo-700)'
      }
    }, t('profile_change_password')) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, t('profile_change_password')), /*#__PURE__*/React.createElement(Input, {
      label: t('profile_current_password'),
      type: "password",
      value: currentPw,
      onChange: e => setCurrentPw(e.target.value),
      error: errors.currentPw
    }), /*#__PURE__*/React.createElement(Input, {
      label: t('profile_new_password'),
      type: "password",
      value: newPw,
      onChange: e => setNewPw(e.target.value),
      error: errors.newPw
    })))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg",
      style: {
        marginTop: 16,
        flexShrink: 0
      },
      onClick: submit
    }, t('profile_save_btn'))));
  }
  function SettingsScreen({
    data,
    mode,
    onMode,
    settings,
    setSetting,
    showToast,
    onSignOut,
    user,
    onUpdateProfile,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [sheet, setSheet] = React.useState(false);
    const [langSheet, setLangSheet] = React.useState(false);
    const [premiumSheet, setPremiumSheet] = React.useState(false);
    const [profileSheet, setProfileSheet] = React.useState(false);
    const [confirmCancel, setConfirmCancel] = React.useState(false);
    const isPremium = mode === 'business' || !!settings.premium;
    const accountCount = (ACCOUNTS[mode] || ACCOUNTS.personal).length;
    const currentLang = LANGUAGES.find(l => l.code === (settings.language || 'en')) || LANGUAGES[0];
    const toggle = (key, msg) => v => {
      setSetting(key, v);
      if (msg) showToast(typeof msg === 'function' ? msg(v) : msg);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(ScreenHeader, {
      subtitle: t('account_word'),
      title: t('settings_title')
    }), /*#__PURE__*/React.createElement("div", {
      style: scroll
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        cursor: 'pointer'
      },
      onClick: () => setProfileSheet(true)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: '50%',
        flexShrink: 0,
        background: user && user.photo ? `url(${user.photo}) center/cover` : mode === 'business' ? 'var(--purple-100)' : 'var(--indigo-100)',
        color: mode === 'business' ? 'var(--purple-700)' : 'var(--indigo-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, !(user && user.photo) && /*#__PURE__*/React.createElement(Icon, {
      name: mode === 'business' ? 'briefcase' : 'user',
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, data.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-muted)'
      }
    }, mode === 'business' ? t('business_plan') : t('free_plan'))), /*#__PURE__*/React.createElement(Badge, {
      tone: isPremium ? 'brand' : 'neutral',
      size: "sm",
      style: isPremium ? {
        background: 'var(--purple-500)',
        color: '#fff'
      } : undefined
    }, isPremium ? t('premium') : t('free')), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18,
      color: "var(--text-subtle)"
    })), /*#__PURE__*/React.createElement(SectionLabel, null, t('mode_label')), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(ModeSwitch, {
      value: mode,
      onChange: onMode,
      fullWidth: true,
      options: modeOptions(t)
    })), /*#__PURE__*/React.createElement(SectionLabel, null, t('accounts_label')), /*#__PURE__*/React.createElement(Card, {
      pad: "sm",
      style: {
        padding: '2px 16px',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(SettingRow, {
      label: t('connected_accounts'),
      desc: t('linked_synced', {
        n: accountCount
      }),
      onClick: () => setSheet(true),
      first: true
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color: 'var(--text-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "num",
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)'
      }
    }, accountCount), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18
    })))), /*#__PURE__*/React.createElement(SectionLabel, null, t('privacy_security')), /*#__PURE__*/React.createElement(Card, {
      pad: "sm",
      style: {
        padding: '2px 16px',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(SettingRow, {
      label: t('hide_balances_row'),
      desc: t('hide_balances_desc'),
      first: true
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: settings.hideBalances,
      onChange: toggle('hideBalances', v => v ? t('toast_balances_hidden') : t('toast_balances_shown'))
    })), /*#__PURE__*/React.createElement(SettingRow, {
      label: t('faceid_row'),
      desc: t('faceid_desc')
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: settings.biometric,
      onChange: toggle('biometric', v => v ? t('toast_faceid_on') : t('toast_faceid_off'))
    }))), /*#__PURE__*/React.createElement(SectionLabel, null, t('notifications_label')), /*#__PURE__*/React.createElement(Card, {
      pad: "sm",
      style: {
        padding: '2px 16px',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(SettingRow, {
      label: t('weekly_summary_row'),
      desc: t('weekly_summary_desc'),
      first: true
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: settings.weekly,
      onChange: toggle('weekly')
    })), /*#__PURE__*/React.createElement(SettingRow, {
      label: t('realtime_row'),
      desc: t('realtime_desc')
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: settings.realtime,
      onChange: toggle('realtime')
    }))), /*#__PURE__*/React.createElement(SectionLabel, null, t('preferences_label')), /*#__PURE__*/React.createElement(Card, {
      pad: "sm",
      style: {
        padding: '2px 16px',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(SettingRow, {
      label: t('language_row'),
      desc: t('language_desc'),
      onClick: () => setLangSheet(true),
      first: true
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color: 'var(--text-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)'
      }
    }, currentLang.name), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18
    }))), /*#__PURE__*/React.createElement(SettingRow, {
      label: t('dark_mode_row'),
      desc: t('dark_mode_desc')
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: !!settings.darkMode,
      onChange: toggle('darkMode', v => v ? t('toast_dark_on') : t('toast_dark_off'))
    })), /*#__PURE__*/React.createElement(SettingRow, {
      label: t('reduced_motion_row'),
      desc: t('reduced_motion_desc')
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: settings.reducedMotion,
      onChange: toggle('reducedMotion', v => v ? t('toast_motion_on') : t('toast_motion_off'))
    }))), !isPremium && /*#__PURE__*/React.createElement(Card, {
      tone: "brand",
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 22,
      color: "var(--green-600)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--indigo-900)'
      }
    }, t('upgrade_title')), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--indigo-700)',
        margin: '4px 0 14px'
      }
    }, t('upgrade_desc')), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      iconRight: "arrow-right",
      onClick: () => setPremiumSheet(true)
    }, t('upgrade_btn'))))), settings.premium && /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, t('manage_plan_title')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, t('manage_plan_desc'))), /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      size: "sm",
      style: {
        background: 'var(--purple-500)',
        color: '#fff'
      }
    }, t('premium'))), !confirmCancel ? /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      size: "sm",
      style: {
        marginTop: 14,
        color: 'var(--negative-600)'
      },
      onClick: () => setConfirmCancel(true)
    }, t('cancel_subscription_btn')) : /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)',
        marginBottom: 12
      }
    }, t('cancel_subscription_confirm')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      size: "sm",
      onClick: () => setConfirmCancel(false)
    }, t('cancel_subscription_keep')), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "sm",
      style: {
        background: 'var(--negative-600)'
      },
      onClick: () => {
        setSetting('premium', false);
        setConfirmCancel(false);
        showToast(t('toast_subscription_canceled'));
      }
    }, t('cancel_subscription_yes'))))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      iconLeft: "arrow-left",
      onClick: onSignOut,
      style: {
        color: 'var(--negative-600)'
      }
    }, t('sign_out'))), /*#__PURE__*/React.createElement(AccountsSheet, {
      open: sheet,
      mode: mode,
      onClose: () => setSheet(false),
      showToast: showToast,
      lang: lang
    }), /*#__PURE__*/React.createElement(PremiumSheet, {
      open: premiumSheet,
      onClose: () => setPremiumSheet(false),
      lang: lang,
      onUpgrade: () => {
        setSetting('premium', true);
        setPremiumSheet(false);
        showToast(t('toast_upgrade_done'));
      }
    }), /*#__PURE__*/React.createElement(ProfileEditSheet, {
      open: profileSheet,
      user: user,
      onClose: () => setProfileSheet(false),
      lang: lang,
      onSave: form => {
        onUpdateProfile(form);
        setProfileSheet(false);
        showToast(t('toast_profile_saved'));
      }
    }), /*#__PURE__*/React.createElement(LanguageSheet, {
      open: langSheet,
      value: settings.language || 'en',
      onClose: () => setLangSheet(false),
      lang: lang,
      onSelect: code => {
        setSetting('language', code);
        setLangSheet(false);
        const l = LANGUAGES.find(x => x.code === code);
        showToast(t('toast_lang_set', {
          name: l ? l.name : code
        }));
      }
    }));
  }

  // ================= TRANSACTION DETAIL =================
  function TransactionDetailSheet({
    open,
    txn,
    mode,
    onClose,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    if (!txn) return null;
    const accountList = ACCOUNTS[mode] || ACCOUNTS.personal;
    const acct = accountList[0];
    const ref = 'NM-' + (txn.merchant || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 4).toUpperCase() + '-' + String((txn.amount || '').replace(/\D/g, '')).slice(-4).padStart(4, '0');
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 45,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 26px',
        boxShadow: 'var(--shadow-xl)',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, t('txn_detail_title')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 56,
        borderRadius: 'var(--radius-md)',
        background: txn.iconBg || 'var(--surface-brand-soft)',
        color: txn.iconFg || 'var(--indigo-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: txn.icon || 'wallet',
      size: 26
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-h4)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, txn.merchant), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-h1)',
        fontWeight: 'var(--fw-medium)',
        marginTop: 6,
        color: txn.positive ? 'var(--positive-600)' : 'var(--text-strong)'
      }
    }, txn.positive ? '+' : '-', txn.amount), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 'var(--fs-caption)',
        color: 'var(--positive-600)',
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--positive-500)'
      }
    }), " ", t('txn_detail_status'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, [[t('txn_detail_category'), txnCategoryLabel(t, txn.category)], [t('txn_detail_date'), txn.date], [t('txn_detail_account'), acct ? `${acct.bank} ···· ${acct.last}` : '—'], [t('txn_detail_ref'), ref]].map(([label, value], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '11px 0',
        borderTop: i ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      className: "num",
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-strong)'
      }
    }, value))))));
  }

  // ================= INSIGHT ACTION =================
  function InsightActionSheet({
    open,
    insight,
    mode,
    onClose,
    showToast,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [reminderSent, setReminderSent] = React.useState(false);
    const [cancelled, setCancelled] = React.useState(false);
    const [moved, setMoved] = React.useState(false);
    React.useEffect(() => {
      if (open) {
        setReminderSent(false);
        setCancelled(false);
        setMoved(false);
      }
    }, [open, insight && insight.id]);
    if (!insight) return null;
    function addToCalendar() {
      const clean = (insight.text || '').replace(/<[^>]+>/g, '');
      const start = new Date();
      start.setDate(start.getDate() + 1);
      start.setHours(9, 0, 0, 0);
      const dt = start.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
      const ics = 'BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:' + (insight.title || insight.action) + '\nDTSTART:' + dt + '\nDESCRIPTION:' + clean + '\nEND:VEVENT\nEND:VCALENDAR';
      const a = document.createElement('a');
      a.href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics);
      a.download = 'nomi-reminder.ics';
      a.click();
      showToast(t('toast_added_calendar'));
    }
    const key = insight.actionKey;
    let body;
    if (key === 'ins_overdue_action') {
      body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--text-muted)',
          marginBottom: 18,
          lineHeight: 1.5
        },
        dangerouslySetInnerHTML: {
          __html: insight.text
        }
      }), !reminderSent ? /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        size: "lg",
        onClick: () => {
          setReminderSent(true);
          showToast(t('toast_reminder_sent'));
        }
      }, t('ins_overdue_action')) : /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--positive-600)',
          marginBottom: 4
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16
      }), " ", t('toast_reminder_sent')), /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        fullWidth: true,
        size: "lg",
        iconLeft: "calendar",
        style: {
          marginTop: 10
        },
        onClick: addToCalendar
      }, t('add_to_calendar_btn')));
    } else if (key === 'ins_unused_action') {
      body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--text-muted)',
          marginBottom: 18,
          lineHeight: 1.5
        },
        dangerouslySetInnerHTML: {
          __html: insight.text
        }
      }), !cancelled ? /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        size: "lg",
        style: {
          background: 'var(--negative-600)'
        },
        onClick: () => {
          setCancelled(true);
          showToast(t('toast_vendor_canceled'));
        }
      }, t('cancel_subscription_btn')) : /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--positive-600)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16
      }), " ", t('toast_vendor_canceled')));
    } else if (key === 'ins_move_action') {
      body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--text-muted)',
          marginBottom: 18,
          lineHeight: 1.5
        },
        dangerouslySetInnerHTML: {
          __html: insight.text
        }
      }), !moved ? /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        size: "lg",
        onClick: () => {
          setMoved(true);
          showToast(t('toast_moved_savings'));
        }
      }, t('confirm_transfer_btn')) : /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--positive-600)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16
      }), " ", t('toast_moved_savings')));
    } else if (key === 'ins_software_action') {
      const vendors = [{
        name: 'Figma',
        amount: '1,240 kr'
      }, {
        name: 'AWS',
        amount: '3,180 kr'
      }, {
        name: 'Notion',
        amount: '360 kr'
      }, {
        name: 'Slack',
        amount: '890 kr'
      }];
      body = /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column'
        }
      }, vendors.map((v, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '11px 0',
          borderTop: i ? '1px solid var(--border-subtle)' : 'none'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 'var(--fs-body)',
          color: 'var(--text-strong)'
        }
      }, v.name), /*#__PURE__*/React.createElement("span", {
        className: "num",
        style: {
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--text-muted)'
        }
      }, v.amount, "/mo"))));
    } else if (key === 'ins_revenue_action') {
      body = /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column'
        }
      }, [['Q1', '81,400 kr'], ['Q2', '96,000 kr']].map(([q, amt], i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '11px 0',
          borderTop: i ? '1px solid var(--border-subtle)' : 'none'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 'var(--fs-body)',
          color: 'var(--text-strong)'
        }
      }, q), /*#__PURE__*/React.createElement("span", {
        className: "num",
        style: {
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--text-muted)'
        }
      }, amt))), /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        fullWidth: true,
        size: "lg",
        iconLeft: "download",
        style: {
          marginTop: 16
        },
        onClick: () => showToast(t('toast_report_exported'))
      }, t('export')));
    } else {
      body = /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--text-muted)',
          lineHeight: 1.5
        },
        dangerouslySetInnerHTML: {
          __html: insight.text
        }
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 46,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 26px',
        boxShadow: 'var(--shadow-xl)',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, insight.title || insight.action), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), body));
  }

  // ================= ADD TRANSACTION =================
  function txnCategories(t) {
    return [{
      value: 'groceries',
      label: t('cat_groceries'),
      icon: 'shopping-bag'
    }, {
      value: 'transport',
      label: t('cat_transport'),
      icon: 'card'
    }, {
      value: 'subscriptions',
      label: t('cat_subscriptions'),
      icon: 'repeat'
    }, {
      value: 'coffee',
      label: t('cat_coffee'),
      icon: 'coffee'
    }, {
      value: 'default',
      label: t('cat_other'),
      icon: 'wallet'
    }];
  }
  function AddTransactionSheet({
    open,
    onClose,
    onAdd,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const TXN_CATEGORIES = txnCategories(t);
    const [kind, setKind] = React.useState('expense');
    const [merchant, setMerchant] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [category, setCategory] = React.useState('groceries');
    React.useEffect(() => {
      if (open) {
        setKind('expense');
        setMerchant('');
        setAmount('');
        setCategory('groceries');
      }
    }, [open]);
    const valid = merchant.trim() && parseFloat(amount) > 0;
    const submit = () => {
      if (!valid) return;
      const n = Math.abs(parseFloat(amount));
      onAdd({
        merchant: merchant.trim(),
        category: kind === 'income' ? 'income' : category,
        positive: kind === 'income',
        amount: n.toLocaleString('sv-SE') + ' kr',
        dateKey: {
          type: 'just_now'
        }
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 45,
        pointerEvents: open ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        opacity: open ? 1 : 0,
        transition: 'opacity var(--dur-normal) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--surface-card)',
        borderRadius: '20px 20px 0 0',
        padding: '10px 20px 26px',
        boxShadow: 'var(--shadow-xl)',
        transform: open ? 'translateY(0)' : 'translateY(102%)',
        transition: 'transform var(--dur-normal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--neutral-200)',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, t('add_txn_title')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      variant: "ghost",
      label: t('close'),
      onClick: onClose
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginBottom: 16
      }
    }, [{
      v: 'expense',
      l: t('expense')
    }, {
      v: 'income',
      l: t('income')
    }].map(o => /*#__PURE__*/React.createElement("button", {
      key: o.v,
      onClick: () => setKind(o.v),
      style: {
        flex: 1,
        padding: '10px 0',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        border: `1px solid ${kind === o.v ? 'var(--indigo-600)' : 'var(--border-default)'}`,
        background: kind === o.v ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
        color: kind === o.v ? 'var(--indigo-800)' : 'var(--text-muted)',
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)'
      }
    }, o.l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: t('merchant_label'),
      placeholder: kind === 'income' ? t('merchant_ph_income') : t('merchant_ph_expense'),
      value: merchant,
      onChange: e => setMerchant(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: t('amount_label'),
      placeholder: "0",
      suffix: "kr",
      inputMode: "decimal",
      value: amount,
      onChange: e => setAmount(e.target.value.replace(/[^0-9.]/g, ''))
    }), kind === 'expense' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-body)',
        marginBottom: 8
      }
    }, t('category_label')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, TXN_CATEGORIES.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.value,
      onClick: () => setCategory(c.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '8px 12px',
        borderRadius: 'var(--radius-pill)',
        border: `1px solid ${category === c.value ? 'var(--indigo-600)' : 'var(--border-default)'}`,
        background: category === c.value ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
        color: category === c.value ? 'var(--indigo-800)' : 'var(--text-muted)',
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-medium)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 14
    }), " ", c.label))))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg",
      disabled: !valid,
      style: {
        marginTop: 20
      },
      onClick: submit
    }, t('add_txn_btn'))));
  }

  // ================= INTRO (welcome, before mode chooser) =================
  const INTRO_SLIDES = [{
    icon: 'building-bank',
    titleKey: 'intro0_title',
    descKey: 'intro0_desc'
  }, {
    icon: 'sparkles',
    titleKey: 'intro1_title',
    descKey: 'intro1_desc'
  }, {
    icon: 'target',
    titleKey: 'intro2_title',
    descKey: 'intro2_desc'
  }, {
    icon: 'wallet',
    titleKey: 'intro3_title',
    descKey: 'intro3_desc'
  }];
  function IntroScreens({
    onDone,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [step, setStep] = React.useState(0);
    const last = step === INTRO_SLIDES.length - 1;
    const slide = INTRO_SLIDES[step];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '20px 22px 22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, !last && /*#__PURE__*/React.createElement("button", {
      onClick: onDone,
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '6px 4px',
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-muted)'
      }
    }, t('intro_skip'))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 84,
        height: 84,
        borderRadius: '22.5%',
        background: 'var(--surface-brand-soft)',
        color: 'var(--indigo-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: slide.icon,
      size: 40
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: 'var(--ls-tight)'
      }
    }, t(slide.titleKey)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body)',
        color: 'var(--text-muted)',
        marginTop: 10,
        lineHeight: 1.5,
        maxWidth: 300
      }
    }, t(slide.descKey)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 22
      }
    }, INTRO_SLIDES.map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: i === step ? 20 : 7,
        height: 7,
        borderRadius: 'var(--radius-pill)',
        background: i === step ? 'var(--indigo-700)' : 'var(--neutral-200)',
        transition: 'all var(--dur-normal) var(--ease-standard)'
      }
    }))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg",
      iconRight: "arrow-right",
      onClick: () => last ? onDone() : setStep(s => s + 1)
    }, last ? t('intro_get_started') : t('intro_next')));
  }

  // ================= ONBOARDING =================
  function OnboardingScreen({
    onDone,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [choice, setChoice] = React.useState(null);
    const Opt = ({
      id,
      icon,
      title,
      desc
    }) => {
      const on = choice === id;
      return /*#__PURE__*/React.createElement("button", {
        onClick: () => setChoice(id),
        style: {
          textAlign: 'left',
          display: 'flex',
          gap: 14,
          alignItems: 'flex-start',
          width: '100%',
          padding: 18,
          borderRadius: 'var(--radius-lg)',
          cursor: 'pointer',
          background: on ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
          border: `1px solid ${on ? 'var(--indigo-500)' : 'var(--border-default)'}`,
          boxShadow: on ? 'var(--shadow-sm)' : 'none',
          transition: 'all var(--dur-fast) var(--ease-standard)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 44,
          height: 44,
          flexShrink: 0,
          borderRadius: 'var(--radius-md)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: on ? 'var(--indigo-800)' : 'var(--neutral-100)',
          color: on ? '#fff' : 'var(--indigo-700)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: icon,
        size: 22
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 'var(--fs-h4)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--text-strong)'
        }
      }, title), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--text-muted)',
          marginTop: 2
        }
      }, desc)), /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 22,
          borderRadius: '50%',
          border: `2px solid ${on ? 'var(--indigo-600)' : 'var(--border-default)'}`,
          background: on ? 'var(--indigo-600)' : 'transparent',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          marginTop: 2
        }
      }, on && /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 13,
        strokeWidth: 3
      })));
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '32px 22px 22px'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/nomi-icon.png",
      width: "52",
      height: "52",
      style: {
        borderRadius: '22.5%'
      },
      alt: "Nomi"
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: 'var(--ls-tight)',
        marginTop: 22
      }
    }, t('onboard_title')), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body)',
        color: 'var(--text-muted)',
        marginTop: 8,
        lineHeight: 1.5
      }
    }, t('onboard_sub')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Opt, {
      id: "personal",
      icon: "user",
      title: t('onboard_personal_title'),
      desc: t('onboard_personal_desc')
    }), /*#__PURE__*/React.createElement(Opt, {
      id: "business",
      icon: "briefcase",
      title: t('onboard_business_title'),
      desc: t('onboard_business_desc')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg",
      disabled: !choice,
      iconRight: "arrow-right",
      onClick: () => onDone(choice)
    }, t('continue_btn')), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)',
        marginTop: 14
      }
    }, t('onboard_footer')));
  }

  // ================= REGISTRATION (details -> phone -> verify) =================
  function RegisterScreen({
    onDone,
    onSwitchToSignIn,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [step, setStep] = React.useState('details'); // details | phone | verify
    const [form, setForm] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      code: ''
    });
    const [errors, setErrors] = React.useState({});
    const [sent, setSent] = React.useState(false);
    const set = k => e => setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    function validateDetails() {
      const e = {};
      if (!form.firstName.trim()) e.firstName = t('reg_err_required');
      if (!form.lastName.trim()) e.lastName = t('reg_err_required');
      if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = t('reg_err_email');
      if (form.password.length < 8) e.password = t('reg_err_password');
      setErrors(e);
      return Object.keys(e).length === 0;
    }
    function validatePhone() {
      const e = {};
      if (!/^[\d +()-]{6,}$/.test(form.phone.trim())) e.phone = t('reg_err_phone');
      setErrors(e);
      return Object.keys(e).length === 0;
    }
    function validateCode() {
      const e = {};
      if (!/^\d{6}$/.test(form.code.trim())) e.code = t('reg_err_code');
      setErrors(e);
      return Object.keys(e).length === 0;
    }
    const Header = ({
      title,
      sub
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: 'var(--ls-tight)'
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body)',
        color: 'var(--text-muted)',
        marginTop: 8,
        lineHeight: 1.5
      }
    }, sub));
    let body;
    if (step === 'details') {
      body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
        title: t('reg_title'),
        sub: t('reg_sub')
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement(Input, {
        label: t('reg_first_name'),
        value: form.firstName,
        onChange: set('firstName'),
        error: errors.firstName
      }), /*#__PURE__*/React.createElement(Input, {
        label: t('reg_last_name'),
        value: form.lastName,
        onChange: set('lastName'),
        error: errors.lastName
      }), /*#__PURE__*/React.createElement(Input, {
        label: t('reg_email'),
        type: "email",
        icon: "user",
        value: form.email,
        onChange: set('email'),
        error: errors.email,
        placeholder: "you@example.com"
      }), /*#__PURE__*/React.createElement(Input, {
        label: t('reg_password'),
        type: "password",
        value: form.password,
        onChange: set('password'),
        error: errors.password,
        hint: errors.password ? undefined : t('reg_password_hint')
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        size: "lg",
        iconRight: "arrow-right",
        style: {
          marginTop: 20
        },
        onClick: () => validateDetails() && setStep('phone')
      }, t('continue_btn')), /*#__PURE__*/React.createElement("button", {
        onClick: onSwitchToSignIn,
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'center',
          marginTop: 14,
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--indigo-700)'
        }
      }, t('toggle_to_signin')));
    } else if (step === 'phone') {
      body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
        title: t('reg_phone_title'),
        sub: t('reg_phone_sub')
      }), /*#__PURE__*/React.createElement(Input, {
        label: t('reg_phone_label'),
        type: "tel",
        inputMode: "tel",
        placeholder: "+46 70 123 45 67",
        value: form.phone,
        onChange: set('phone'),
        error: errors.phone
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        size: "lg",
        style: {
          marginTop: 20
        },
        onClick: () => {
          if (validatePhone()) {
            setSent(true);
            setStep('verify');
          }
        }
      }, t('reg_send_code')), /*#__PURE__*/React.createElement("button", {
        onClick: () => setStep('details'),
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          marginTop: 14,
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--text-muted)'
        }
      }, t('reg_back')));
    } else {
      body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
        title: t('reg_verify_title'),
        sub: t('reg_verify_sub', {
          phone: form.phone
        })
      }), /*#__PURE__*/React.createElement(Input, {
        label: t('reg_code_label'),
        inputMode: "numeric",
        maxLength: 6,
        placeholder: "000000",
        value: form.code,
        onChange: set('code'),
        error: errors.code,
        style: {
          letterSpacing: '0.3em',
          fontVariantNumeric: 'tabular-nums',
          textAlign: 'center'
        }
      }), sent && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 'var(--fs-caption)',
          color: 'var(--positive-600)',
          marginTop: 8
        }
      }, t('reg_code_sent')), /*#__PURE__*/React.createElement("button", {
        onClick: () => setSent(true),
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          marginTop: 14,
          padding: 0,
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--indigo-700)'
        }
      }, t('reg_verify_resend')), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        fullWidth: true,
        size: "lg",
        iconRight: "check",
        style: {
          marginTop: 20
        },
        onClick: () => validateCode() && onDone(form)
      }, t('reg_verify_btn')), /*#__PURE__*/React.createElement("button", {
        onClick: () => setStep('phone'),
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          marginTop: 14,
          fontSize: 'var(--fs-body-sm)',
          fontWeight: 'var(--fw-medium)',
          color: 'var(--text-muted)'
        }
      }, t('reg_back')));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '32px 22px 22px',
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        marginBottom: 22
      }
    }, ['details', 'phone', 'verify'].map((s, i) => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        flex: 1,
        height: 4,
        borderRadius: 'var(--radius-pill)',
        background: ['details', 'phone', 'verify'].indexOf(step) >= i ? 'var(--indigo-700)' : 'var(--neutral-200)'
      }
    }))), body);
  }

  // ================= SIGN IN =================
  function SignInScreen({
    onDone,
    onSwitchToRegister,
    findAccount,
    lang
  }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(null);
    function submit() {
      const acc = findAccount(email);
      if (acc && acc.password === password) {
        setError(null);
        onDone(acc);
      } else setError(t('signin_err_invalid'));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '32px 22px 22px'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: 'var(--ls-tight)'
      }
    }, t('signin_title')), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body)',
        color: 'var(--text-muted)',
        marginTop: 8,
        marginBottom: 24,
        lineHeight: 1.5
      }
    }, t('signin_sub')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: t('reg_email'),
      type: "email",
      icon: "user",
      value: email,
      onChange: e => setEmail(e.target.value),
      placeholder: "you@example.com"
    }), /*#__PURE__*/React.createElement(Input, {
      label: t('reg_password'),
      type: "password",
      value: password,
      onChange: e => setPassword(e.target.value),
      error: error || undefined
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      size: "lg",
      iconRight: "arrow-right",
      style: {
        marginTop: 20
      },
      onClick: submit
    }, t('signin_btn')), /*#__PURE__*/React.createElement("button", {
      onClick: onSwitchToRegister,
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'center',
        marginTop: 14,
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--indigo-700)'
      }
    }, t('toggle_to_register')));
  }
  window.NomiScreens = {
    HomeScreen,
    InsightsScreen,
    ActivityScreen,
    SettingsScreen,
    OnboardingScreen,
    RegisterScreen,
    SignInScreen,
    IntroScreens,
    AddTransactionSheet,
    TransactionDetailSheet,
    InsightActionSheet
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site.jsx
try { (() => {
/* Nomi marketing website — a single landing page. Composes design-system
   components; content follows the brand strategy (pillars, pricing, taglines). */
(function () {
  const NS = window.NomiDesignSystem_3ea5bf;
  const {
    Button,
    Badge,
    Card,
    Icon,
    InsightCard,
    Stat,
    ProgressGoal,
    TransactionRow,
    ModeSwitch,
    CashflowChart
  } = NS;
  const MAX = 1120;
  const container = {
    width: '100%',
    maxWidth: MAX,
    margin: '0 auto',
    padding: '0 24px'
  };
  function Nav() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'color-mix(in srgb, var(--surface-page) 82%, transparent)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...container,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 68
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/nomi-icon.png",
      width: "26",
      height: "26",
      style: {
        borderRadius: '22.5%',
        alignSelf: 'center',
        marginRight: 8
      },
      alt: ""
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        fontWeight: 500,
        letterSpacing: '-0.03em',
        color: 'var(--indigo-800)'
      }
    }, "nomi"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--green-500)',
        alignSelf: 'flex-end',
        marginBottom: 4
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 26
      }
    }, ['Product', 'Insights', 'Pricing', 'Business'].map(l => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-body)'
      }
    }, l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Log in"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Get started")))));
  }
  function Hero() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        ...container,
        paddingTop: 72,
        paddingBottom: 72,
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      icon: "sparkles"
    }, "AI finance, personal & business"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--fs-display-lg)',
        lineHeight: 1.02,
        letterSpacing: '-0.03em',
        margin: '20px 0 0'
      }
    }, "Clarity,", /*#__PURE__*/React.createElement("br", null), "not just data."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-lg)',
        color: 'var(--text-muted)',
        lineHeight: 1.55,
        margin: '20px 0 0',
        maxWidth: 460
      }
    }, "Nomi connects to your accounts and tells you what your money is doing \u2014 and what to do about it. Seeing the number isn't the hard part. Nomi handles the rest."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: "arrow-right"
    }, "Start free"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg"
    }, "See how it works")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 22,
        marginTop: 26,
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      color: "var(--green-500)"
    }), " Free tier, no card"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      color: "var(--green-500)"
    }), " Automatic tracking"))), /*#__PURE__*/React.createElement(HeroMock, null));
  }
  function HeroMock() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "inverse",
      radius: "xl",
      pad: "lg",
      elevation: "xl",
      style: {
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -40,
        top: -40,
        width: 180,
        height: 180,
        borderRadius: '50%',
        background: 'rgba(53,185,141,0.18)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--indigo-200)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontWeight: 500
      }
    }, "Total balance"), /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      size: "sm"
    }, "Personal")), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 44,
        fontWeight: 500,
        letterSpacing: '-0.02em',
        color: '#fff',
        marginTop: 8
      }
    }, "42,180 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        color: 'var(--indigo-200)'
      }
    }, "kr")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(CashflowChart, {
      height: 80,
      data: [{
        label: 'M',
        in: 0,
        out: 320
      }, {
        label: 'T',
        in: 18000,
        out: 120
      }, {
        label: 'W',
        in: 0,
        out: 640
      }, {
        label: 'T',
        in: 0,
        out: 210
      }, {
        label: 'F',
        in: 2400,
        out: 890
      }, {
        label: 'S',
        in: 0,
        out: 150
      }, {
        label: 'S',
        in: 0,
        out: 80
      }],
      colorIn: "var(--green-400)",
      colorOut: "rgba(255,255,255,0.28)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: -34,
        left: -22,
        right: 32,
        transform: 'rotate(-1.5deg)'
      }
    }, /*#__PURE__*/React.createElement(InsightCard, {
      tone: "positive",
      timestamp: "2h ago",
      style: {
        boxShadow: 'var(--shadow-xl)'
      }
    }, "You're on track to save ", /*#__PURE__*/React.createElement("strong", null, "2,400 kr"), " this month.")));
  }
  const LOGOS = ['Nordea', 'SEB', 'Swedbank', 'Revolut', 'Handelsbanken'];
  function TrustBar() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)',
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...container,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 24px',
        flexWrap: 'wrap',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)'
      }
    }, "Connects to 3,000+ banks"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 30,
        opacity: 0.7
      }
    }, LOGOS.map(l => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        fontSize: 'var(--fs-body)',
        fontWeight: 500,
        color: 'var(--neutral-500)',
        letterSpacing: '-0.01em'
      }
    }, l)))));
  }
  const PILLARS = [{
    icon: 'sparkles',
    title: 'Insight, not dashboards',
    text: 'Short, specific, plain-language observations — not charts you have to decode yourself.'
  }, {
    icon: 'wallet',
    title: 'Automatic tracking',
    text: 'Income, expenses, and savings pulled in and categorized. No manual entry, no budget to maintain.'
  }, {
    icon: 'repeat',
    title: 'One app, two modes',
    text: 'Personal and Business share the same engine. Switch anytime — insights adapt to the context.'
  }];
  function Features() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        ...container,
        paddingTop: 90,
        paddingBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        maxWidth: 640,
        margin: '0 auto 44px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Why Nomi"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: '-0.02em',
        margin: '10px 0 0'
      }
    }, "The insight layer, not another ledger"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-lg)',
        color: 'var(--text-muted)',
        marginTop: 12
      }
    }, "Every finance app shows you the number. Nomi tells you what it means and what to do next.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, PILLARS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.title,
      pad: "lg",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-accent-soft)',
        color: 'var(--green-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body)',
        color: 'var(--text-muted)',
        lineHeight: 1.55
      }
    }, p.text)))));
  }
  function InsightShowcase() {
    const [mode, setMode] = React.useState('personal');
    const personal = [{
      tone: 'positive',
      action: 'See breakdown',
      text: `You're on track to save <strong>2,400 kr</strong> this month — 18% more than usual.`
    }, {
      tone: 'warning',
      title: 'Unused subscription',
      action: 'Review',
      text: `You haven't used <strong>Adobe CC</strong> in 3 months. That's 599 kr/month.`
    }];
    const business = [{
      tone: 'warning',
      title: 'Client payment overdue',
      action: 'Send reminder',
      text: `Invoice <strong>#198</strong> (24,000 kr) is 9 days late — cash flow dips on the 14th.`
    }, {
      tone: 'positive',
      action: 'View report',
      text: `Q2 revenue is <strong>18% ahead</strong> of Q1 — your strongest quarter this year.`
    }];
    const list = mode === 'business' ? business : personal;
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-card)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        marginTop: 90
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...container,
        paddingTop: 80,
        paddingBottom: 80,
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Made for both"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: '-0.02em',
        margin: '10px 0 16px'
      }
    }, "Sharper for business.", /*#__PURE__*/React.createElement("br", null), "Calmer for personal."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-lg)',
        color: 'var(--text-muted)',
        lineHeight: 1.55,
        marginBottom: 24
      }
    }, "Personal mode nudges you gently toward your goals. Business mode watches cash flow and flags risk before it becomes a crisis. Same engine, tuned to you."), /*#__PURE__*/React.createElement(ModeSwitch, {
      value: mode,
      onChange: setMode
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, list.map((ins, i) => /*#__PURE__*/React.createElement(InsightCard, {
      key: mode + i,
      tone: ins.tone,
      title: ins.title,
      actionLabel: ins.action
    }, /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: ins.text
      }
    }))))));
  }
  function Pricing() {
    const feat = t => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'flex-start',
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "var(--green-500)",
      style: {
        marginTop: 2,
        flexShrink: 0
      }
    }), t);
    return /*#__PURE__*/React.createElement("section", {
      style: {
        ...container,
        paddingTop: 90,
        paddingBottom: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        maxWidth: 560,
        margin: '0 auto 44px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Pricing"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--fs-h1)',
        letterSpacing: '-0.02em',
        margin: '10px 0 0'
      }
    }, "Free to build the habit"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-lg)',
        color: 'var(--text-muted)',
        marginTop: 12
      }
    }, "Upgrade for more insight \u2014 never a paywall on core tracking.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      pad: "lg",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, "Free"), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-display)',
        fontWeight: 500,
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)'
      }
    }, "0 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        color: 'var(--text-muted)'
      }
    }, "kr"))), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true
    }, "Get started"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, feat('1 account, automatic categorization'), feat('Weekly summary'), feat('3 smart insights / month'))), /*#__PURE__*/React.createElement(Card, {
      pad: "lg",
      tone: "inverse",
      elevation: "lg",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 18,
        right: 18
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      size: "sm"
    }, "Personal")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)',
        color: '#fff'
      }
    }, "Premium"), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-display)',
        fontWeight: 500,
        letterSpacing: '-0.02em',
        color: '#fff'
      }
    }, "79 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        color: 'var(--indigo-200)'
      }
    }, "kr/mo"))), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      fullWidth: true
    }, "Go Premium"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, [['Unlimited accounts & custom categories'], ['Unlimited real-time insights'], ['Exportable monthly reports (PDF/CSV)'], ['Priority support']].map(([t], i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'flex-start',
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--indigo-100)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "var(--green-400)",
      style: {
        marginTop: 2,
        flexShrink: 0
      }
    }), t)))), /*#__PURE__*/React.createElement(Card, {
      pad: "lg",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -2,
        right: 0
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      size: "sm"
    }, "Business")), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--fs-h3)'
      }
    }, "Premium"), /*#__PURE__*/React.createElement("div", {
      className: "num",
      style: {
        fontSize: 'var(--fs-display)',
        fontWeight: 500,
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)'
      }
    }, "249 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        color: 'var(--text-muted)'
      }
    }, "kr/mo"))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true
    }, "Start business trial"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, feat('Everything in Premium'), feat('Cash flow forecasting'), feat('Multi-user access'), feat('Tax-category tagging')))));
  }
  function CTA() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        ...container,
        paddingTop: 40,
        paddingBottom: 90
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "inverse",
      radius: "2xl",
      pad: "lg",
      elevation: "lg",
      style: {
        textAlign: 'center',
        padding: '56px 24px',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: '50%',
        top: -60,
        transform: 'translateX(-50%)',
        width: 280,
        height: 280,
        borderRadius: '50%',
        background: 'rgba(53,185,141,0.14)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--fs-display)',
        letterSpacing: '-0.03em',
        color: '#fff'
      }
    }, "Your money, explained."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-lg)',
        color: 'var(--indigo-100)',
        maxWidth: 460,
        margin: '14px auto 28px'
      }
    }, "Checking your finances should be as quick as checking the weather."), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconRight: "arrow-right"
    }, "Start free"))));
  }
  function Footer() {
    const col = (title, items) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-caption)',
        fontWeight: 500,
        color: 'var(--text-strong)'
      }
    }, title), items.map(i => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#",
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)'
      }
    }, i)));
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...container,
        paddingTop: 48,
        paddingBottom: 32,
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        fontWeight: 500,
        letterSpacing: '-0.03em',
        color: 'var(--indigo-800)'
      }
    }, "nomi"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--green-500)',
        alignSelf: 'flex-end',
        marginBottom: 4
      }
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-muted)',
        marginTop: 10,
        maxWidth: 240
      }
    }, "The insight your bank never gives you.")), col('Product', ['Personal', 'Business', 'Pricing', 'Security']), col('Company', ['About', 'Careers', 'Blog']), col('Legal', ['Privacy', 'Terms', 'Cookies'])), /*#__PURE__*/React.createElement("div", {
      style: {
        ...container,
        paddingBottom: 28,
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-subtle)'
      }
    }, "\xA9 2026 Nomi. Made in Stockholm."));
  }
  function Site() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(InsightShowcase, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
  }
  window.NomiSite = Site;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ModeSwitch = __ds_scope.ModeSwitch;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.CashflowChart = __ds_scope.CashflowChart;

__ds_ns.CategoryBreakdown = __ds_scope.CategoryBreakdown;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.InsightChip = __ds_scope.InsightChip;

__ds_ns.ProgressGoal = __ds_scope.ProgressGoal;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.TransactionRow = __ds_scope.TransactionRow;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
