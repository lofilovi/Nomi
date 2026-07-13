/* Nomi mobile app — shared fake data + helpers (Personal & Business modes).
   Translatable content (insight copy, category labels, relative dates, goal
   captions) is stored as i18n keys + vars, resolved at render time via
   window.NomiI18n.t(lang, key, vars) — see localize() below. Proper nouns
   (merchant names, bank names) are left as-is; they aren't translated. */
(function () {
  const fmt = (n) => n.toLocaleString('sv-SE');

  const PERSONAL = {
    name: 'Alex',
    balance: '42,180',
    inThisMonth: '31,200',
    outThisMonth: '8,420',
    outDelta: '-12%',
    insights: [
      { id: 1, tone: 'positive', dateKey: { type: 'hours_ago', n: 2 }, titleKey: null, actionKey: 'ins_save_action',
        textKey: 'ins_save_text', vars: { amount: '2,400 kr' } },
      { id: 2, tone: 'warning', dateKey: { type: 'yesterday' }, titleKey: 'ins_unused_title', actionKey: 'ins_unused_action',
        textKey: 'ins_unused_text', vars: { name: 'Adobe CC', amount: '599 kr' } },
      { id: 3, tone: 'tip', dateKey: { type: 'days_ago', n: 3 }, titleKey: null, actionKey: 'ins_move_action',
        textKey: 'ins_move_text', vars: { amount: '3,000 kr' } },
    ],
    transactions: [
      { merchant: 'Client invoice #204', category: 'income', positive: true, amount: '18,000 kr', dateKey: { type: 'yesterday' } },
      { merchant: 'ICA Maxi', category: 'groceries', amount: '612 kr', dateKey: { type: 'today' } },
      { merchant: 'Spotify', category: 'subscriptions', amount: '119 kr', dateKey: { type: 'days_ago', n: 2 } },
      { merchant: 'SL Access', category: 'transport', amount: '340 kr', dateKey: { type: 'days_ago', n: 3 } },
      { merchant: 'Espresso House', category: 'coffee', amount: '58 kr', dateKey: { type: 'days_ago', n: 3 } },
      { merchant: 'Adobe CC', category: 'subscriptions', amount: '599 kr', dateKey: { type: 'days_ago', n: 5 } },
    ],
    categories: [
      { labelKey: 'cat_rent', amount: 9500, icon: 'home' },
      { labelKey: 'cat_groceries', amount: 3200, icon: 'shopping-bag' },
      { labelKey: 'cat_subscriptions', amount: 890, icon: 'repeat' },
      { labelKey: 'cat_transport', amount: 640, icon: 'card' },
      { labelKey: 'cat_coffee', amount: 1240, icon: 'coffee' },
    ],
    goal: { labelKey: 'goal_emergency', current: 18400, target: 30000, captionKey: 'goal_months_left', captionVars: { n: 3 } },
    cashflow: [
      { label: 'Mon', in: 0, out: 320 }, { label: 'Tue', in: 18000, out: 120 },
      { label: 'Wed', in: 0, out: 640 }, { label: 'Thu', in: 0, out: 210 },
      { label: 'Fri', in: 2400, out: 890 }, { label: 'Sat', in: 0, out: 150 }, { label: 'Sun', in: 0, out: 80 },
    ],
  };

  const BUSINESS = {
    name: 'Priya Studio',
    balance: '214,600',
    inThisMonth: '96,000',
    outThisMonth: '61,300',
    outDelta: '+8%',
    insights: [
      { id: 1, tone: 'warning', dateKey: { type: 'hours_ago', n: 1 }, titleKey: 'ins_overdue_title', actionKey: 'ins_overdue_action',
        textKey: 'ins_overdue_text', vars: { num: '198', amount: '24,000 kr', threshold: '40,000 kr' } },
      { id: 2, tone: 'neutral', dateKey: { type: 'today' }, titleKey: null, actionKey: 'ins_software_action',
        textKey: 'ins_software_text', vars: {} },
      { id: 3, tone: 'positive', dateKey: { type: 'yesterday' }, titleKey: null, actionKey: 'ins_revenue_action',
        textKey: 'ins_revenue_text', vars: {} },
    ],
    transactions: [
      { merchant: 'Northwind Co — Invoice #204', category: 'income', positive: true, amount: '42,000 kr', dateKey: { type: 'today' } },
      { merchant: 'Figma (team)', category: 'subscriptions', amount: '1,240 kr', dateKey: { type: 'yesterday' } },
      { merchant: 'AWS', category: 'subscriptions', amount: '3,180 kr', dateKey: { type: 'days_ago', n: 2 } },
      { merchant: 'Office rent', category: 'transport', icon: 'home', amount: '14,000 kr', dateKey: { type: 'days_ago', n: 4 } },
      { merchant: 'Contractor — L. Berg', category: 'default', icon: 'user', amount: '22,000 kr', dateKey: { type: 'days_ago', n: 5 } },
    ],
    categories: [
      { labelKey: 'cat_payroll', amount: 38000, icon: 'user' },
      { labelKey: 'cat_office_rent', amount: 14000, icon: 'home' },
      { labelKey: 'cat_software', amount: 6200, icon: 'repeat' },
      { labelKey: 'cat_travel', amount: 2100, icon: 'card' },
      { labelKey: 'cat_other', amount: 1000, icon: 'wallet' },
    ],
    goal: { labelKey: 'goal_tax_reserve', current: 42000, target: 70000, captionKey: 'goal_due_date', captionVars: { date: '12 Oct' } },
    cashflow: [
      { label: 'W1', in: 42000, out: 18000 }, { label: 'W2', in: 12000, out: 22000 },
      { label: 'W3', in: 24000, out: 9000 }, { label: 'W4', in: 18000, out: 12300 },
    ],
  };

  /* Resolve a { type, n } date descriptor to display text in `lang`. */
  function localizeDate(lang, dateKey) {
    const t = window.NomiI18n.t;
    if (!dateKey) return '';
    if (dateKey.type === 'today') return t(lang, 'date_today');
    if (dateKey.type === 'yesterday') return t(lang, 'date_yesterday');
    if (dateKey.type === 'just_now') return t(lang, 'date_just_now');
    if (dateKey.type === 'hours_ago') return t(lang, 'date_just_now'); // collapse "2h ago" into a calm "just now"
    if (dateKey.type === 'days_ago') return t(lang, 'date_days_ago', { n: dateKey.n });
    return '';
  }

  /* Returns a deep-cloned data object with all translatable fields resolved
     to display strings for `lang`. Screens consume this instead of the raw
     PERSONAL/BUSINESS objects directly. */
  function localize(lang, data) {
    const t = window.NomiI18n.t;
    return {
      ...data,
      insights: data.insights.map((ins) => ({
        ...ins,
        timestamp: localizeDate(lang, ins.dateKey),
        title: ins.titleKey ? t(lang, ins.titleKey) : null,
        action: t(lang, ins.actionKey),
        text: t(lang, ins.textKey, ins.vars),
      })),
      transactions: data.transactions.map((tx) => ({
        ...tx,
        date: localizeDate(lang, tx.dateKey),
      })),
      categories: data.categories.map((c) => ({
        ...c,
        label: t(lang, c.labelKey),
      })),
      goal: {
        ...data.goal,
        label: t(lang, data.goal.labelKey),
        caption: t(lang, data.goal.captionKey, data.goal.captionVars),
      },
    };
  }

  window.NomiData = { PERSONAL, BUSINESS, fmt, localize };
})();
