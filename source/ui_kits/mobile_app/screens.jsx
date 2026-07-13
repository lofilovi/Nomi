/* Nomi mobile app — screens. Composes the design-system components from the
   bundle. Each screen is a fake, click-through recreation of a real view. */
(function () {
  const NS = window.NomiDesignSystem_3ea5bf;
  const { Card, Stat, InsightCard, InsightChip, TransactionRow, ProgressGoal, CategoryBreakdown, CashflowChart,
          Badge, Button, IconButton, ModeSwitch, Icon, Switch, Input } = NS;

  const px = (v) => v;
  const modeOptions = (t) => [
    { value: 'personal', label: t('mode_personal'), icon: 'user' },
    { value: 'business', label: t('mode_business'), icon: 'briefcase' },
  ];
  const TXN_CATEGORY_LABEL_KEY = {
    groceries: 'cat_groceries', subscriptions: 'cat_subscriptions', transport: 'cat_transport',
    coffee: 'cat_coffee', income: 'in_word', default: 'cat_other',
  };
  const txnCategoryLabel = (t, category) => t(TXN_CATEGORY_LABEL_KEY[category] || 'cat_other');

  // ---- shared bits ----
  function ScreenHeader({ title, subtitle, right }) {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '20px 20px 8px' }}>
        <div>
          <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-subtle)', fontWeight: 'var(--fw-medium)' }}>{subtitle}</div>
          <h1 style={{ fontSize: 'var(--fs-h1)', letterSpacing: 'var(--ls-tight)' }}>{title}</h1>
        </div>
        {right}
      </div>
    );
  }

  function SectionLabel({ children, action, onAction }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '4px 0 10px' }}>
        <span className="eyebrow">{children}</span>
        {action && <span onClick={onAction} style={{ fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-medium)', color: 'var(--text-link)', cursor: 'pointer' }}>{action}</span>}
      </div>
    );
  }

  const scroll = { flex: 1, overflowY: 'auto', padding: '0 20px 24px' };

  // ================= HOME =================
  function HomeScreen({ data, mode, onMode, hideBalances, onToggleHide, onProfile, onSeeAllInsights, onSeeAllActivity, onTxnClick, onInsightAction, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const mask = (v) => (hideBalances ? '••••••' : v);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ padding: '16px 20px 12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="../../assets/logo/nomi-icon.png" width="30" height="30" style={{ borderRadius: '22.5%' }} alt="" />
              <span style={{ fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)' }}>{t('hi_name', { name: data.name.split(' ')[0] })}</span>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <IconButton icon="bell" variant="ghost" label={t('alerts')} />
              <IconButton icon="user" variant="ghost" label={t('profile')} onClick={onProfile} />
            </div>
          </div>
          <ModeSwitch value={mode} onChange={onMode} fullWidth options={modeOptions(t)} />
        </div>

        <div style={scroll}>
          {/* balance hero */}
          <Card tone="inverse" radius="xl" pad="lg" elevation="md" style={{ marginBottom: 16, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: -30, top: -30, width: 140, height: 140, borderRadius: '50%', background: mode === 'business' ? 'rgba(83,74,183,0.22)' : 'rgba(53,185,141,0.16)' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
              <Stat tone="inverse" label={mode === 'business' ? t('total_across') : t('total_balance')} value={mask(data.balance)} currency={hideBalances ? '' : 'kr'} size="lg" delta={hideBalances ? undefined : '+3.2%'} caption={hideBalances ? undefined : t('vs_last_month')} />
              <IconButton icon="eye" variant="ghost" label={hideBalances ? t('show_balances_btn') : t('hide_balances_btn')} onClick={onToggleHide} style={{ color: 'var(--indigo-200)' }} />
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', padding: '10px 12px' }}>
                <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--indigo-200)' }}>{t('in_word')}</div>
                <div className="num" style={{ fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-medium)', color: 'var(--green-300)' }}>{hideBalances ? '••••' : '+' + data.inThisMonth + ' kr'}</div>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', padding: '10px 12px' }}>
                <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--indigo-200)' }}>{t('out_word')}</div>
                <div className="num" style={{ fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-medium)', color: '#fff' }}>{hideBalances ? '••••' : '-' + data.outThisMonth + ' kr'}</div>
              </div>
            </div>
          </Card>

          {/* top insight — the hero of the product */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '4px 0 10px' }}>
            <InsightChip mode={mode} size="sm">{t('nomi_insight')}</InsightChip>
            <span style={{ flex: 1 }} />
            <span onClick={onSeeAllInsights} style={{ fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-medium)', color: 'var(--text-link)', cursor: 'pointer' }}>{t('all_insights')}</span>
          </div>
          <div style={{ marginBottom: 18 }}>
            <InsightCard tone={data.insights[0].tone} timestamp={data.insights[0].timestamp} title={data.insights[0].title} actionLabel={data.insights[0].action} onAction={() => onInsightAction && onInsightAction(data.insights[0])}>
              <span dangerouslySetInnerHTML={{ __html: data.insights[0].text }} />
            </InsightCard>
          </div>

          {/* cash flow */}
          <Card style={{ marginBottom: 18 }}>
            <SectionLabel>{mode === 'business' ? t('cashflow_month') : t('cashflow_week')}</SectionLabel>
            <CashflowChart data={data.cashflow} height={130} variant="area" legendInLabel={t('legend_money_in')} legendOutLabel={t('legend_money_out')} />
          </Card>

          {/* goal */}
          <Card style={{ marginBottom: 18 }}>
            <ProgressGoal {...data.goal} />
          </Card>

          {/* recent */}
          <SectionLabel action={t('see_all')} onAction={onSeeAllActivity}>{t('recent_activity')}</SectionLabel>
          <Card pad="sm">
            {data.transactions.slice(0, 4).map((t2, i) => (
              <div key={i} style={{ borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
                <TransactionRow {...t2} categoryLabel={txnCategoryLabel(t, t2.category)} onClick={() => onTxnClick && onTxnClick(t2)} />
              </div>
            ))}
          </Card>
        </div>
      </div>
    );
  }

  // ================= INSIGHTS =================
  function InsightsScreen({ data, mode, onInsightAction, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <ScreenHeader subtitle={mode === 'business' ? t('mode_business') : t('mode_personal')} title={t('insights_title')}
          right={<InsightChip mode={mode}>{t('insights_new', { n: data.insights.length })}</InsightChip>} />
        <div style={scroll}>
          <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', margin: '4px 0 16px', lineHeight: 1.5 }}>
            {t('insights_para')}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {data.insights.map((ins) => (
              <InsightCard key={ins.id} tone={ins.tone} timestamp={ins.timestamp} title={ins.title} actionLabel={ins.action} onAction={() => onInsightAction && onInsightAction(ins)} dismissable>
                <span dangerouslySetInnerHTML={{ __html: ins.text }} />
              </InsightCard>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 22 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--fs-caption)', color: 'var(--text-subtle)' }}>
              <Icon name="check" size={14} color="var(--green-500)" /> {t('all_caught_up')}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ================= ACTIVITY =================
  function ActivityScreen({ data, mode, onTxnClick, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [range, setRange] = React.useState('m');
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const RANGE_MULT = { w: 1 / 4.33, m: 1, y: 12 };
    const RANGE_LABEL = { w: t('range_week'), m: t('range_month'), y: t('range_year') };
    const mult = RANGE_MULT[range];
    const scaledCategories = data.categories.map((c) => ({ ...c, amount: Math.max(1, Math.round(c.amount * mult)) }));
    const totalSpend = scaledCategories.reduce((s, c) => s + c.amount, 0);
    const rangeTxns = range === 'w' ? data.transactions.slice(0, 3) : data.transactions;
    const q = query.trim().toLowerCase();
    const shownTxns = q ? rangeTxns.filter((tx) => (tx.merchant + ' ' + tx.category).toLowerCase().includes(q)) : rangeTxns;
    const closeSearch = () => { setSearchOpen(false); setQuery(''); };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <ScreenHeader subtitle={mode === 'business' ? t('mode_business') : t('mode_personal')} title={t('activity_title')}
          right={<IconButton icon={searchOpen ? 'x' : 'search'} variant="soft" label={searchOpen ? t('close_search') : t('search')} onClick={() => (searchOpen ? closeSearch() : setSearchOpen(true))} />} />
        {searchOpen && (
          <div style={{ padding: '0 20px 12px' }}>
            <Input icon="search" placeholder={t('search_placeholder')} value={query} onChange={(e) => setQuery(e.target.value)} autoFocus />
          </div>
        )}
        <div style={{ padding: '0 20px 12px' }}>
          <ModeSwitch size="sm" fullWidth value={range} onChange={setRange}
            options={[{ value: 'w', label: t('week') }, { value: 'm', label: t('month') }, { value: 'y', label: t('year') }]} />
        </div>
        <div style={scroll}>
          {!q && (
            <Card style={{ marginBottom: 18 }}>
              <SectionLabel>{t('spend_by_category', { range: RANGE_LABEL[range] })}</SectionLabel>
              <div className="num" style={{ fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)', margin: '2px 0 14px' }}>
                {totalSpend.toLocaleString('sv-SE')} kr
              </div>
              <CategoryBreakdown items={scaledCategories} />
            </Card>
          )}
          <SectionLabel action={q ? undefined : t('export')}>{q ? t('results_for', { q: query }) : t('transactions')}</SectionLabel>
          {shownTxns.length ? (
            <Card pad="sm">
              {shownTxns.map((tx, i) => (
                <div key={i} style={{ borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
                  <TransactionRow {...tx} categoryLabel={txnCategoryLabel(t, tx.category)} onClick={() => onTxnClick && onTxnClick(tx)} />
                </div>
              ))}
            </Card>
          ) : (
            <div style={{ padding: '28px 0', textAlign: 'center', color: 'var(--text-subtle)', fontSize: 'var(--fs-body-sm)' }}>
              {t('no_match', { q: query })}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ================= SETTINGS =================
  const ACCOUNTS = {
    personal: [
      { bank: 'SEB', kind: 'Personal · checking', last: '4821', icon: 'building-bank' },
      { bank: 'Swedbank', kind: 'Savings', last: '0093', icon: 'pig-money' },
      { bank: 'Amex', kind: 'Credit card', last: '1007', icon: 'credit-card' },
    ],
    business: [
      { bank: 'SEB Företag', kind: 'Business · operating', last: '7742', icon: 'building-bank' },
      { bank: 'Wise', kind: 'Multi-currency', last: '5510', icon: 'coin' },
      { bank: 'Eurocard', kind: 'Corporate card', last: '2288', icon: 'credit-card' },
    ],
  };

  function SettingRow({ label, desc, children, onClick, first }) {
    return (
      <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '14px 0', borderTop: first ? 'none' : '1px solid var(--border-subtle)', cursor: onClick ? 'pointer' : 'default' }}>
        <div><div style={{ fontSize: 'var(--fs-body)', color: 'var(--text-strong)', fontWeight: 'var(--fw-medium)' }}>{label}</div>
          {desc && <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', marginTop: 1 }}>{desc}</div>}</div>
        {children}
      </div>
    );
  }

  const LANGUAGES = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'uk', name: 'Ukrainian', native: 'Українська' },
    { code: 'es', name: 'Spanish', native: 'Español' },
    { code: 'fr', name: 'French', native: 'Français' },
    { code: 'de', name: 'German', native: 'Deutsch' },
    { code: 'pt', name: 'Portuguese', native: 'Português' },
    { code: 'pl', name: 'Polish', native: 'Polski' },
    { code: 'sv', name: 'Swedish', native: 'Svenska' },
    { code: 'zh', name: 'Chinese', native: '中文' },
    { code: 'ar', name: 'Arabic', native: 'العربية' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
    { code: 'ja', name: 'Japanese', native: '日本語' },
  ];

  function LanguageSheet({ open, value, onClose, onSelect, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    return (
      <div aria-hidden={!open} style={{ position: 'absolute', inset: 0, zIndex: 40, pointerEvents: open ? 'auto' : 'none' }}>
        <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', opacity: open ? 1 : 0, transition: 'opacity var(--dur-normal) var(--ease-standard)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 90, background: 'var(--surface-card)', borderRadius: '20px 20px 0 0', padding: '10px 20px 24px', boxShadow: 'var(--shadow-xl)', display: 'flex', flexDirection: 'column', transform: open ? 'translateY(0)' : 'translateY(102%)', transition: 'transform var(--dur-normal) var(--ease-out)' }}>
          <div style={{ width: 40, height: 4, borderRadius: 'var(--radius-pill)', background: 'var(--neutral-200)', margin: '0 auto 16px', flexShrink: 0 }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4, flexShrink: 0 }}>
            <h3 style={{ fontSize: 'var(--fs-h3)' }}>{t('language_sheet_title')}</h3>
            <IconButton icon="x" variant="ghost" label={t('close')} onClick={onClose} />
          </div>
          <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', margin: '0 0 8px', flexShrink: 0 }}>{t('language_sheet_desc')}</p>
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            {LANGUAGES.map((l, i) => (
              <button key={l.code} onClick={() => onSelect(l.code)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                padding: '13px 4px', borderTop: i ? '1px solid var(--border-subtle)' : 'none',
                background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              }}>
                <span>
                  <div style={{ fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)' }}>{l.name}</div>
                  <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-subtle)' }}>{l.native}</div>
                </span>
                {value === l.code && <Icon name="check" size={18} color="var(--indigo-600)" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function AccountsSheet({ open, mode, onClose, showToast, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const list = ACCOUNTS[mode] || ACCOUNTS.personal;
    return (
      <div aria-hidden={!open} style={{ position: 'absolute', inset: 0, zIndex: 40, pointerEvents: open ? 'auto' : 'none' }}>
        <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', opacity: open ? 1 : 0, transition: 'opacity var(--dur-normal) var(--ease-standard)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: 'var(--surface-card)', borderRadius: '20px 20px 0 0', padding: '10px 20px 24px', boxShadow: 'var(--shadow-xl)', transform: open ? 'translateY(0)' : 'translateY(102%)', transition: 'transform var(--dur-normal) var(--ease-out)' }}>
          <div style={{ width: 40, height: 4, borderRadius: 'var(--radius-pill)', background: 'var(--neutral-200)', margin: '0 auto 16px' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <h3 style={{ fontSize: 'var(--fs-h3)' }}>{t('connected_accounts_title')}</h3>
            <IconButton icon="x" variant="ghost" label={t('close')} onClick={onClose} />
          </div>
          <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', margin: '0 0 12px' }}>{t('linked_updated', { n: list.length })}</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {list.map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
                <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 'var(--radius-md)', background: 'var(--surface-brand-soft)', color: 'var(--indigo-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={a.icon} size={20} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)' }}>{a.bank}</div>
                  <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-subtle)' }}>{a.kind} ···· {a.last}</div>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 'var(--fs-caption)', color: 'var(--positive-600)' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--positive-500)' }} /> {t('synced')}
                </span>
              </div>
            ))}
          </div>
          <Button variant="secondary" fullWidth iconLeft="plus" style={{ marginTop: 16 }} onClick={() => { onClose(); showToast(t('toast_bank_started')); }}>{t('connect_account_btn')}</Button>
        </div>
      </div>
    );
  }

  function PremiumSheet({ open, onClose, onUpgrade, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const features = [t('premium_feature_1'), t('premium_feature_2'), t('premium_feature_3')];
    return (
      <div aria-hidden={!open} style={{ position: 'absolute', inset: 0, zIndex: 45, pointerEvents: open ? 'auto' : 'none' }}>
        <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', opacity: open ? 1 : 0, transition: 'opacity var(--dur-normal) var(--ease-standard)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: 'var(--surface-card)', borderRadius: '20px 20px 0 0', padding: '10px 20px 26px', boxShadow: 'var(--shadow-xl)', transform: open ? 'translateY(0)' : 'translateY(102%)', transition: 'transform var(--dur-normal) var(--ease-out)' }}>
          <div style={{ width: 40, height: 4, borderRadius: 'var(--radius-pill)', background: 'var(--neutral-200)', margin: '0 auto 16px' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <h3 style={{ fontSize: 'var(--fs-h3)' }}>{t('premium_sheet_title')}</h3>
            <IconButton icon="x" variant="ghost" label={t('close')} onClick={onClose} />
          </div>
          <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', margin: '0 0 16px' }}>{t('premium_sheet_sub')}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 18 }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--surface-brand-soft)', color: 'var(--indigo-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="check" size={14} strokeWidth={3} />
                </span>
                <span style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-strong)' }}>{f}</span>
              </div>
            ))}
          </div>
          <div className="num" style={{ fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)', marginBottom: 16 }}>{t('premium_price')}</div>
          <Button variant="accent" fullWidth size="lg" onClick={onUpgrade}>{t('premium_upgrade_btn')}</Button>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'center', marginTop: 14, fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-muted)' }}>{t('premium_maybe_later')}</button>
        </div>
      </div>
    );
  }

  function ProfileEditSheet({ open, user, onClose, onSave, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const fileRef = React.useRef(null);
    const [form, setForm] = React.useState({ firstName: '', lastName: '', email: '', phone: '', photo: null });
    const [pwOpen, setPwOpen] = React.useState(false);
    const [currentPw, setCurrentPw] = React.useState('');
    const [newPw, setNewPw] = React.useState('');
    const [errors, setErrors] = React.useState({});
    React.useEffect(() => {
      if (open) {
        setForm({ firstName: (user && user.firstName) || '', lastName: (user && user.lastName) || '', email: (user && user.email) || '', phone: (user && user.phone) || '', photo: (user && user.photo) || null });
        setPwOpen(false); setCurrentPw(''); setNewPw(''); setErrors({});
      }
    }, [open, user]);
    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    function pickPhoto(e) {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => setForm((f) => ({ ...f, photo: reader.result }));
      reader.readAsDataURL(file);
    }

    function submit() {
      const e = {};
      if (!form.firstName.trim()) e.firstName = t('reg_err_required');
      if (!form.lastName.trim()) e.lastName = t('reg_err_required');
      if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = t('reg_err_email');
      if (pwOpen) {
        if (!currentPw) e.currentPw = t('reg_err_required');
        else if (user && user.password && currentPw !== user.password) e.currentPw = t('profile_wrong_password');
        if (newPw.length < 8) e.newPw = t('reg_err_password');
      }
      setErrors(e);
      if (Object.keys(e).length) return;
      onSave({ ...form, newPassword: pwOpen ? newPw : undefined });
    }

    return (
      <div aria-hidden={!open} style={{ position: 'absolute', inset: 0, zIndex: 47, pointerEvents: open ? 'auto' : 'none' }}>
        <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', opacity: open ? 1 : 0, transition: 'opacity var(--dur-normal) var(--ease-standard)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 60, background: 'var(--surface-card)', borderRadius: '20px 20px 0 0', padding: '10px 20px 24px', boxShadow: 'var(--shadow-xl)', display: 'flex', flexDirection: 'column', transform: open ? 'translateY(0)' : 'translateY(102%)', transition: 'transform var(--dur-normal) var(--ease-out)' }}>
          <div style={{ width: 40, height: 4, borderRadius: 'var(--radius-pill)', background: 'var(--neutral-200)', margin: '0 auto 16px', flexShrink: 0 }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4, flexShrink: 0 }}>
            <h3 style={{ fontSize: 'var(--fs-h3)' }}>{t('profile_edit_title')}</h3>
            <IconButton icon="x" variant="ghost" label={t('close')} onClick={onClose} />
          </div>
          <div style={{ flex: 1, overflowY: 'auto', paddingTop: 8 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
              <button onClick={() => fileRef.current && fileRef.current.click()} style={{
                width: 84, height: 84, borderRadius: '50%', border: 'none', cursor: 'pointer', position: 'relative', padding: 0,
                background: form.photo ? `url(${form.photo}) center/cover` : 'var(--surface-brand-soft)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo-700)',
              }}>
                {!form.photo && <Icon name="user" size={34} />}
                <span style={{ position: 'absolute', bottom: -2, right: -2, width: 28, height: 28, borderRadius: '50%', background: 'var(--indigo-700)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--surface-card)' }}>
                  <Icon name="plus" size={14} />
                </span>
              </button>
              <input ref={fileRef} type="file" accept="image/*" onChange={pickPhoto} style={{ display: 'none' }} />
              <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', marginTop: 8 }}>{t('profile_add_photo')}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Input label={t('reg_first_name')} value={form.firstName} onChange={set('firstName')} error={errors.firstName} />
              <Input label={t('reg_last_name')} value={form.lastName} onChange={set('lastName')} error={errors.lastName} />
              <Input label={t('reg_email')} type="email" value={form.email} onChange={set('email')} error={errors.email} />
              <Input label={t('reg_phone_label')} type="tel" value={form.phone} onChange={set('phone')} />
            </div>
            <div style={{ marginTop: 18 }}>
              {!pwOpen ? (
                <button onClick={() => setPwOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--indigo-700)' }}>{t('profile_change_password')}</button>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)' }}>{t('profile_change_password')}</div>
                  <Input label={t('profile_current_password')} type="password" value={currentPw} onChange={(e) => setCurrentPw(e.target.value)} error={errors.currentPw} />
                  <Input label={t('profile_new_password')} type="password" value={newPw} onChange={(e) => setNewPw(e.target.value)} error={errors.newPw} />
                </div>
              )}
            </div>
          </div>
          <Button variant="primary" fullWidth size="lg" style={{ marginTop: 16, flexShrink: 0 }} onClick={submit}>{t('profile_save_btn')}</Button>
        </div>
      </div>
    );
  }

  function SettingsScreen({ data, mode, onMode, settings, setSetting, showToast, onSignOut, user, onUpdateProfile, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [sheet, setSheet] = React.useState(false);
    const [langSheet, setLangSheet] = React.useState(false);
    const [premiumSheet, setPremiumSheet] = React.useState(false);
    const [profileSheet, setProfileSheet] = React.useState(false);
    const [confirmCancel, setConfirmCancel] = React.useState(false);
    const isPremium = mode === 'business' || !!settings.premium;
    const accountCount = (ACCOUNTS[mode] || ACCOUNTS.personal).length;
    const currentLang = LANGUAGES.find((l) => l.code === (settings.language || 'en')) || LANGUAGES[0];
    const toggle = (key, msg) => (v) => { setSetting(key, v); if (msg) showToast(typeof msg === 'function' ? msg(v) : msg); };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <ScreenHeader subtitle={t('account_word')} title={t('settings_title')} />
        <div style={scroll}>
          <Card style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }} onClick={() => setProfileSheet(true)}>
            <span style={{ width: 46, height: 46, borderRadius: '50%', flexShrink: 0, background: (user && user.photo) ? `url(${user.photo}) center/cover` : (mode === 'business' ? 'var(--purple-100)' : 'var(--indigo-100)'), color: mode === 'business' ? 'var(--purple-700)' : 'var(--indigo-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              {!(user && user.photo) && <Icon name={mode === 'business' ? 'briefcase' : 'user'} size={22} />}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)' }}>{data.name}</div>
              <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{mode === 'business' ? t('business_plan') : t('free_plan')}</div>
            </div>
            <Badge tone={isPremium ? 'brand' : 'neutral'} size="sm" style={isPremium ? { background: 'var(--purple-500)', color: '#fff' } : undefined}>{isPremium ? t('premium') : t('free')}</Badge>
            <Icon name="chevron-right" size={18} color="var(--text-subtle)" />
          </Card>

          <SectionLabel>{t('mode_label')}</SectionLabel>
          <div style={{ marginBottom: 18 }}><ModeSwitch value={mode} onChange={onMode} fullWidth options={modeOptions(t)} /></div>

          <SectionLabel>{t('accounts_label')}</SectionLabel>
          <Card pad="sm" style={{ padding: '2px 16px', marginBottom: 18 }}>
            <SettingRow label={t('connected_accounts')} desc={t('linked_synced', { n: accountCount })} onClick={() => setSheet(true)} first>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-subtle)' }}>
                <span className="num" style={{ fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)' }}>{accountCount}</span>
                <Icon name="chevron-right" size={18} />
              </span>
            </SettingRow>
          </Card>

          <SectionLabel>{t('privacy_security')}</SectionLabel>
          <Card pad="sm" style={{ padding: '2px 16px', marginBottom: 18 }}>
            <SettingRow label={t('hide_balances_row')} desc={t('hide_balances_desc')} first><Switch checked={settings.hideBalances} onChange={toggle('hideBalances', (v) => v ? t('toast_balances_hidden') : t('toast_balances_shown'))} /></SettingRow>
            <SettingRow label={t('faceid_row')} desc={t('faceid_desc')}><Switch checked={settings.biometric} onChange={toggle('biometric', (v) => v ? t('toast_faceid_on') : t('toast_faceid_off'))} /></SettingRow>
          </Card>

          <SectionLabel>{t('notifications_label')}</SectionLabel>
          <Card pad="sm" style={{ padding: '2px 16px', marginBottom: 18 }}>
            <SettingRow label={t('weekly_summary_row')} desc={t('weekly_summary_desc')} first><Switch checked={settings.weekly} onChange={toggle('weekly')} /></SettingRow>
            <SettingRow label={t('realtime_row')} desc={t('realtime_desc')}><Switch checked={settings.realtime} onChange={toggle('realtime')} /></SettingRow>
          </Card>

          <SectionLabel>{t('preferences_label')}</SectionLabel>
          <Card pad="sm" style={{ padding: '2px 16px', marginBottom: 18 }}>
            <SettingRow label={t('language_row')} desc={t('language_desc')} onClick={() => setLangSheet(true)} first>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-subtle)' }}>
                <span style={{ fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)' }}>{currentLang.name}</span>
                <Icon name="chevron-right" size={18} />
              </span>
            </SettingRow>
            <SettingRow label={t('dark_mode_row')} desc={t('dark_mode_desc')}><Switch checked={!!settings.darkMode} onChange={toggle('darkMode', (v) => v ? t('toast_dark_on') : t('toast_dark_off'))} /></SettingRow>
            <SettingRow label={t('reduced_motion_row')} desc={t('reduced_motion_desc')}><Switch checked={settings.reducedMotion} onChange={toggle('reducedMotion', (v) => v ? t('toast_motion_on') : t('toast_motion_off'))} /></SettingRow>
          </Card>

          {!isPremium && (
            <Card tone="brand" style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Icon name="sparkles" size={22} color="var(--green-600)" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-medium)', color: 'var(--indigo-900)' }}>{t('upgrade_title')}</div>
                  <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--indigo-700)', margin: '4px 0 14px' }}>{t('upgrade_desc')}</p>
                  <Button variant="accent" size="sm" iconRight="arrow-right" onClick={() => setPremiumSheet(true)}>{t('upgrade_btn')}</Button>
                </div>
              </div>
            </Card>
          )}

          {settings.premium && (
            <Card style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)' }}>{t('manage_plan_title')}</div>
                  <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', marginTop: 2 }}>{t('manage_plan_desc')}</div>
                </div>
                <Badge tone="brand" size="sm" style={{ background: 'var(--purple-500)', color: '#fff' }}>{t('premium')}</Badge>
              </div>
              {!confirmCancel ? (
                <Button variant="ghost" fullWidth size="sm" style={{ marginTop: 14, color: 'var(--negative-600)' }} onClick={() => setConfirmCancel(true)}>{t('cancel_subscription_btn')}</Button>
              ) : (
                <div style={{ marginTop: 14 }}>
                  <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', marginBottom: 12 }}>{t('cancel_subscription_confirm')}</p>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <Button variant="secondary" fullWidth size="sm" onClick={() => setConfirmCancel(false)}>{t('cancel_subscription_keep')}</Button>
                    <Button variant="primary" fullWidth size="sm" style={{ background: 'var(--negative-600)' }} onClick={() => { setSetting('premium', false); setConfirmCancel(false); showToast(t('toast_subscription_canceled')); }}>{t('cancel_subscription_yes')}</Button>
                  </div>
                </div>
              )}
            </Card>
          )}

          <Button variant="ghost" fullWidth iconLeft="arrow-left" onClick={onSignOut} style={{ color: 'var(--negative-600)' }}>{t('sign_out')}</Button>
        </div>

        <AccountsSheet open={sheet} mode={mode} onClose={() => setSheet(false)} showToast={showToast} lang={lang} />
        <PremiumSheet open={premiumSheet} onClose={() => setPremiumSheet(false)} lang={lang}
          onUpgrade={() => { setSetting('premium', true); setPremiumSheet(false); showToast(t('toast_upgrade_done')); }} />
        <ProfileEditSheet open={profileSheet} user={user} onClose={() => setProfileSheet(false)} lang={lang}
          onSave={(form) => { onUpdateProfile(form); setProfileSheet(false); showToast(t('toast_profile_saved')); }} />
        <LanguageSheet open={langSheet} value={settings.language || 'en'} onClose={() => setLangSheet(false)} lang={lang}
          onSelect={(code) => { setSetting('language', code); setLangSheet(false); const l = LANGUAGES.find((x) => x.code === code); showToast(t('toast_lang_set', { name: l ? l.name : code })); }} />
      </div>
    );
  }

  // ================= TRANSACTION DETAIL =================
  function TransactionDetailSheet({ open, txn, mode, onClose, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    if (!txn) return null;
    const accountList = ACCOUNTS[mode] || ACCOUNTS.personal;
    const acct = accountList[0];
    const ref = 'NM-' + (txn.merchant || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 4).toUpperCase() + '-' + String((txn.amount || '').replace(/\D/g, '')).slice(-4).padStart(4, '0');
    return (
      <div aria-hidden={!open} style={{ position: 'absolute', inset: 0, zIndex: 45, pointerEvents: open ? 'auto' : 'none' }}>
        <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', opacity: open ? 1 : 0, transition: 'opacity var(--dur-normal) var(--ease-standard)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: 'var(--surface-card)', borderRadius: '20px 20px 0 0', padding: '10px 20px 26px', boxShadow: 'var(--shadow-xl)', transform: open ? 'translateY(0)' : 'translateY(102%)', transition: 'transform var(--dur-normal) var(--ease-out)' }}>
          <div style={{ width: 40, height: 4, borderRadius: 'var(--radius-pill)', background: 'var(--neutral-200)', margin: '0 auto 16px' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <h3 style={{ fontSize: 'var(--fs-h3)' }}>{t('txn_detail_title')}</h3>
            <IconButton icon="x" variant="ghost" label={t('close')} onClick={onClose} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 22 }}>
            <span style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: txn.iconBg || 'var(--surface-brand-soft)', color: txn.iconFg || 'var(--indigo-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <Icon name={txn.icon || 'wallet'} size={26} />
            </span>
            <div style={{ fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)' }}>{txn.merchant}</div>
            <div className="num" style={{ fontSize: 'var(--fs-h1)', fontWeight: 'var(--fw-medium)', marginTop: 6, color: txn.positive ? 'var(--positive-600)' : 'var(--text-strong)' }}>
              {txn.positive ? '+' : '-'}{txn.amount}
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 'var(--fs-caption)', color: 'var(--positive-600)', marginTop: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--positive-500)' }} /> {t('txn_detail_status')}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              [t('txn_detail_category'), txnCategoryLabel(t, txn.category)],
              [t('txn_detail_date'), txn.date],
              [t('txn_detail_account'), acct ? `${acct.bank} ···· ${acct.last}` : '—'],
              [t('txn_detail_ref'), ref],
            ].map(([label, value], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 0', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
                <span style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)' }}>{label}</span>
                <span className="num" style={{ fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ================= INSIGHT ACTION =================
  function InsightActionSheet({ open, insight, mode, onClose, showToast, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [reminderSent, setReminderSent] = React.useState(false);
    const [cancelled, setCancelled] = React.useState(false);
    const [moved, setMoved] = React.useState(false);
    React.useEffect(() => { if (open) { setReminderSent(false); setCancelled(false); setMoved(false); } }, [open, insight && insight.id]);
    if (!insight) return null;

    function addToCalendar() {
      const clean = (insight.text || '').replace(/<[^>]+>/g, '');
      const start = new Date(); start.setDate(start.getDate() + 1); start.setHours(9, 0, 0, 0);
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
      body = (
        <>
          <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', marginBottom: 18, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: insight.text }} />
          {!reminderSent ? (
            <Button variant="primary" fullWidth size="lg" onClick={() => { setReminderSent(true); showToast(t('toast_reminder_sent')); }}>{t('ins_overdue_action')}</Button>
          ) : (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--fs-body-sm)', color: 'var(--positive-600)', marginBottom: 4 }}><Icon name="check" size={16} /> {t('toast_reminder_sent')}</div>
          )}
          <Button variant="secondary" fullWidth size="lg" iconLeft="calendar" style={{ marginTop: 10 }} onClick={addToCalendar}>{t('add_to_calendar_btn')}</Button>
        </>
      );
    } else if (key === 'ins_unused_action') {
      body = (
        <>
          <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', marginBottom: 18, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: insight.text }} />
          {!cancelled ? (
            <Button variant="primary" fullWidth size="lg" style={{ background: 'var(--negative-600)' }} onClick={() => { setCancelled(true); showToast(t('toast_vendor_canceled')); }}>{t('cancel_subscription_btn')}</Button>
          ) : (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--fs-body-sm)', color: 'var(--positive-600)' }}><Icon name="check" size={16} /> {t('toast_vendor_canceled')}</div>
          )}
        </>
      );
    } else if (key === 'ins_move_action') {
      body = (
        <>
          <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', marginBottom: 18, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: insight.text }} />
          {!moved ? (
            <Button variant="primary" fullWidth size="lg" onClick={() => { setMoved(true); showToast(t('toast_moved_savings')); }}>{t('confirm_transfer_btn')}</Button>
          ) : (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--fs-body-sm)', color: 'var(--positive-600)' }}><Icon name="check" size={16} /> {t('toast_moved_savings')}</div>
          )}
        </>
      );
    } else if (key === 'ins_software_action') {
      const vendors = [{ name: 'Figma', amount: '1,240 kr' }, { name: 'AWS', amount: '3,180 kr' }, { name: 'Notion', amount: '360 kr' }, { name: 'Slack', amount: '890 kr' }];
      body = (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {vendors.map((v, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 0', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
              <span style={{ fontSize: 'var(--fs-body)', color: 'var(--text-strong)' }}>{v.name}</span>
              <span className="num" style={{ fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-muted)' }}>{v.amount}/mo</span>
            </div>
          ))}
        </div>
      );
    } else if (key === 'ins_revenue_action') {
      body = (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[['Q1', '81,400 kr'], ['Q2', '96,000 kr']].map(([q, amt], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 0', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
              <span style={{ fontSize: 'var(--fs-body)', color: 'var(--text-strong)' }}>{q}</span>
              <span className="num" style={{ fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-muted)' }}>{amt}</span>
            </div>
          ))}
          <Button variant="secondary" fullWidth size="lg" iconLeft="download" style={{ marginTop: 16 }} onClick={() => showToast(t('toast_report_exported'))}>{t('export')}</Button>
        </div>
      );
    } else {
      body = <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: insight.text }} />;
    }

    return (
      <div aria-hidden={!open} style={{ position: 'absolute', inset: 0, zIndex: 46, pointerEvents: open ? 'auto' : 'none' }}>
        <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', opacity: open ? 1 : 0, transition: 'opacity var(--dur-normal) var(--ease-standard)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: 'var(--surface-card)', borderRadius: '20px 20px 0 0', padding: '10px 20px 26px', boxShadow: 'var(--shadow-xl)', transform: open ? 'translateY(0)' : 'translateY(102%)', transition: 'transform var(--dur-normal) var(--ease-out)' }}>
          <div style={{ width: 40, height: 4, borderRadius: 'var(--radius-pill)', background: 'var(--neutral-200)', margin: '0 auto 16px' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h3 style={{ fontSize: 'var(--fs-h3)' }}>{insight.title || insight.action}</h3>
            <IconButton icon="x" variant="ghost" label={t('close')} onClick={onClose} />
          </div>
          {body}
        </div>
      </div>
    );
  }

  // ================= ADD TRANSACTION =================
  function txnCategories(t) {
    return [
      { value: 'groceries', label: t('cat_groceries'), icon: 'shopping-bag' },
      { value: 'transport', label: t('cat_transport'), icon: 'card' },
      { value: 'subscriptions', label: t('cat_subscriptions'), icon: 'repeat' },
      { value: 'coffee', label: t('cat_coffee'), icon: 'coffee' },
      { value: 'default', label: t('cat_other'), icon: 'wallet' },
    ];
  }

  function AddTransactionSheet({ open, onClose, onAdd, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const TXN_CATEGORIES = txnCategories(t);
    const [kind, setKind] = React.useState('expense');
    const [merchant, setMerchant] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [category, setCategory] = React.useState('groceries');

    React.useEffect(() => { if (open) { setKind('expense'); setMerchant(''); setAmount(''); setCategory('groceries'); } }, [open]);

    const valid = merchant.trim() && parseFloat(amount) > 0;
    const submit = () => {
      if (!valid) return;
      const n = Math.abs(parseFloat(amount));
      onAdd({
        merchant: merchant.trim(),
        category: kind === 'income' ? 'income' : category,
        positive: kind === 'income',
        amount: n.toLocaleString('sv-SE') + ' kr',
        dateKey: { type: 'just_now' },
      });
    };

    return (
      <div aria-hidden={!open} style={{ position: 'absolute', inset: 0, zIndex: 45, pointerEvents: open ? 'auto' : 'none' }}>
        <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'color-mix(in srgb, var(--indigo-950) 42%, transparent)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', opacity: open ? 1 : 0, transition: 'opacity var(--dur-normal) var(--ease-standard)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: 'var(--surface-card)', borderRadius: '20px 20px 0 0', padding: '10px 20px 26px', boxShadow: 'var(--shadow-xl)', transform: open ? 'translateY(0)' : 'translateY(102%)', transition: 'transform var(--dur-normal) var(--ease-out)' }}>
          <div style={{ width: 40, height: 4, borderRadius: 'var(--radius-pill)', background: 'var(--neutral-200)', margin: '0 auto 16px' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h3 style={{ fontSize: 'var(--fs-h3)' }}>{t('add_txn_title')}</h3>
            <IconButton icon="x" variant="ghost" label={t('close')} onClick={onClose} />
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            {[{ v: 'expense', l: t('expense') }, { v: 'income', l: t('income') }].map((o) => (
              <button key={o.v} onClick={() => setKind(o.v)} style={{
                flex: 1, padding: '10px 0', borderRadius: 'var(--radius-md)', cursor: 'pointer',
                border: `1px solid ${kind === o.v ? 'var(--indigo-600)' : 'var(--border-default)'}`,
                background: kind === o.v ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
                color: kind === o.v ? 'var(--indigo-800)' : 'var(--text-muted)',
                fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)',
              }}>{o.l}</button>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Input label={t('merchant_label')} placeholder={kind === 'income' ? t('merchant_ph_income') : t('merchant_ph_expense')}
              value={merchant} onChange={(e) => setMerchant(e.target.value)} />
            <Input label={t('amount_label')} placeholder="0" suffix="kr" inputMode="decimal"
              value={amount} onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))} />
            {kind === 'expense' && (
              <div>
                <div style={{ fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-body)', marginBottom: 8 }}>{t('category_label')}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {TXN_CATEGORIES.map((c) => (
                    <button key={c.value} onClick={() => setCategory(c.value)} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 12px', borderRadius: 'var(--radius-pill)',
                      border: `1px solid ${category === c.value ? 'var(--indigo-600)' : 'var(--border-default)'}`,
                      background: category === c.value ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
                      color: category === c.value ? 'var(--indigo-800)' : 'var(--text-muted)',
                      fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-medium)', cursor: 'pointer',
                    }}>
                      <Icon name={c.icon} size={14} /> {c.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Button variant="primary" fullWidth size="lg" disabled={!valid} style={{ marginTop: 20 }} onClick={submit}>{t('add_txn_btn')}</Button>
        </div>
      </div>
    );
  }

  // ================= INTRO (welcome, before mode chooser) =================
  const INTRO_SLIDES = [
    { icon: 'building-bank', titleKey: 'intro0_title', descKey: 'intro0_desc' },
    { icon: 'sparkles', titleKey: 'intro1_title', descKey: 'intro1_desc' },
    { icon: 'target', titleKey: 'intro2_title', descKey: 'intro2_desc' },
    { icon: 'wallet', titleKey: 'intro3_title', descKey: 'intro3_desc' },
  ];

  function IntroScreens({ onDone, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [step, setStep] = React.useState(0);
    const last = step === INTRO_SLIDES.length - 1;
    const slide = INTRO_SLIDES[step];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px 22px 22px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {!last && (
            <button onClick={onDone} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '6px 4px',
              fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-muted)',
            }}>{t('intro_skip')}</button>
          )}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 22 }}>
          <span style={{
            width: 84, height: 84, borderRadius: '22.5%', background: 'var(--surface-brand-soft)',
            color: 'var(--indigo-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon name={slide.icon} size={40} />
          </span>
          <div>
            <h1 style={{ fontSize: 'var(--fs-h1)', letterSpacing: 'var(--ls-tight)' }}>{t(slide.titleKey)}</h1>
            <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-muted)', marginTop: 10, lineHeight: 1.5, maxWidth: 300 }}>
              {t(slide.descKey)}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 22 }}>
          {INTRO_SLIDES.map((_, i) => (
            <span key={i} style={{
              width: i === step ? 20 : 7, height: 7, borderRadius: 'var(--radius-pill)',
              background: i === step ? 'var(--indigo-700)' : 'var(--neutral-200)',
              transition: 'all var(--dur-normal) var(--ease-standard)',
            }} />
          ))}
        </div>
        <Button variant="primary" fullWidth size="lg" iconRight="arrow-right"
          onClick={() => (last ? onDone() : setStep((s) => s + 1))}>
          {last ? t('intro_get_started') : t('intro_next')}
        </Button>
      </div>
    );
  }

  // ================= ONBOARDING =================
  function OnboardingScreen({ onDone, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [choice, setChoice] = React.useState(null);
    const Opt = ({ id, icon, title, desc }) => {
      const on = choice === id;
      return (
        <button onClick={() => setChoice(id)} style={{
          textAlign: 'left', display: 'flex', gap: 14, alignItems: 'flex-start', width: '100%',
          padding: 18, borderRadius: 'var(--radius-lg)', cursor: 'pointer',
          background: on ? 'var(--surface-brand-soft)' : 'var(--surface-card)',
          border: `1px solid ${on ? 'var(--indigo-500)' : 'var(--border-default)'}`,
          boxShadow: on ? 'var(--shadow-sm)' : 'none', transition: 'all var(--dur-fast) var(--ease-standard)',
        }}>
          <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 'var(--radius-md)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: on ? 'var(--indigo-800)' : 'var(--neutral-100)', color: on ? '#fff' : 'var(--indigo-700)' }}>
            <Icon name={icon} size={22} />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 'var(--fs-h4)', fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)' }}>{title}</div>
            <div style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', marginTop: 2 }}>{desc}</div>
          </div>
          <span style={{ width: 22, height: 22, borderRadius: '50%', border: `2px solid ${on ? 'var(--indigo-600)' : 'var(--border-default)'}`, background: on ? 'var(--indigo-600)' : 'transparent', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginTop: 2 }}>
            {on && <Icon name="check" size={13} strokeWidth={3} />}
          </span>
        </button>
      );
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '32px 22px 22px' }}>
        <img src="../../assets/logo/nomi-icon.png" width="52" height="52" style={{ borderRadius: '22.5%' }} alt="Nomi" />
        <h1 style={{ fontSize: 'var(--fs-h1)', letterSpacing: 'var(--ls-tight)', marginTop: 22 }}>{t('onboard_title')}</h1>
        <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-muted)', marginTop: 8, lineHeight: 1.5 }}>
          {t('onboard_sub')}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26 }}>
          <Opt id="personal" icon="user" title={t('onboard_personal_title')} desc={t('onboard_personal_desc')} />
          <Opt id="business" icon="briefcase" title={t('onboard_business_title')} desc={t('onboard_business_desc')} />
        </div>
        <div style={{ flex: 1 }} />
        <Button variant="primary" fullWidth size="lg" disabled={!choice} iconRight="arrow-right" onClick={() => onDone(choice)}>
          {t('continue_btn')}
        </Button>
        <div style={{ textAlign: 'center', fontSize: 'var(--fs-caption)', color: 'var(--text-subtle)', marginTop: 14 }}>
          {t('onboard_footer')}
        </div>
      </div>
    );
  }

  // ================= REGISTRATION (details -> phone -> verify) =================
  function RegisterScreen({ onDone, onSwitchToSignIn, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [step, setStep] = React.useState('details'); // details | phone | verify
    const [form, setForm] = React.useState({ firstName: '', lastName: '', email: '', password: '', phone: '', code: '' });
    const [errors, setErrors] = React.useState({});
    const [sent, setSent] = React.useState(false);
    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

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

    const Header = ({ title, sub }) => (
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 'var(--fs-h1)', letterSpacing: 'var(--ls-tight)' }}>{title}</h1>
        <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-muted)', marginTop: 8, lineHeight: 1.5 }}>{sub}</p>
      </div>
    );

    let body;
    if (step === 'details') {
      body = (
        <>
          <Header title={t('reg_title')} sub={t('reg_sub')} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Input label={t('reg_first_name')} value={form.firstName} onChange={set('firstName')} error={errors.firstName} />
            <Input label={t('reg_last_name')} value={form.lastName} onChange={set('lastName')} error={errors.lastName} />
            <Input label={t('reg_email')} type="email" icon="user" value={form.email} onChange={set('email')} error={errors.email} placeholder="you@example.com" />
            <Input label={t('reg_password')} type="password" value={form.password} onChange={set('password')} error={errors.password} hint={errors.password ? undefined : t('reg_password_hint')} />
          </div>
          <div style={{ flex: 1 }} />
          <Button variant="primary" fullWidth size="lg" iconRight="arrow-right" style={{ marginTop: 20 }}
            onClick={() => validateDetails() && setStep('phone')}>{t('continue_btn')}</Button>
          <button onClick={onSwitchToSignIn} style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'center', marginTop: 14, fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--indigo-700)' }}>{t('toggle_to_signin')}</button>
        </>
      );
    } else if (step === 'phone') {
      body = (
        <>
          <Header title={t('reg_phone_title')} sub={t('reg_phone_sub')} />
          <Input label={t('reg_phone_label')} type="tel" inputMode="tel" placeholder="+46 70 123 45 67" value={form.phone} onChange={set('phone')} error={errors.phone} />
          <div style={{ flex: 1 }} />
          <Button variant="primary" fullWidth size="lg" style={{ marginTop: 20 }}
            onClick={() => { if (validatePhone()) { setSent(true); setStep('verify'); } }}>{t('reg_send_code')}</Button>
          <button onClick={() => setStep('details')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginTop: 14, fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-muted)' }}>{t('reg_back')}</button>
        </>
      );
    } else {
      body = (
        <>
          <Header title={t('reg_verify_title')} sub={t('reg_verify_sub', { phone: form.phone })} />
          <Input label={t('reg_code_label')} inputMode="numeric" maxLength={6} placeholder="000000"
            value={form.code} onChange={set('code')} error={errors.code}
            style={{ letterSpacing: '0.3em', fontVariantNumeric: 'tabular-nums', textAlign: 'center' }} />
          {sent && <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--positive-600)', marginTop: 8 }}>{t('reg_code_sent')}</div>}
          <button onClick={() => setSent(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginTop: 14, padding: 0, fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--indigo-700)' }}>{t('reg_verify_resend')}</button>
          <div style={{ flex: 1 }} />
          <Button variant="primary" fullWidth size="lg" iconRight="check" style={{ marginTop: 20 }}
            onClick={() => validateCode() && onDone(form)}>{t('reg_verify_btn')}</Button>
          <button onClick={() => setStep('phone')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginTop: 14, fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-muted)' }}>{t('reg_back')}</button>
        </>
      );
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '32px 22px 22px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 22 }}>
          {['details', 'phone', 'verify'].map((s, i) => (
            <span key={s} style={{ flex: 1, height: 4, borderRadius: 'var(--radius-pill)',
              background: ['details', 'phone', 'verify'].indexOf(step) >= i ? 'var(--indigo-700)' : 'var(--neutral-200)' }} />
          ))}
        </div>
        {body}
      </div>
    );
  }

  // ================= SIGN IN =================
  function SignInScreen({ onDone, onSwitchToRegister, findAccount, lang }) {
    const t = (k, v) => window.NomiI18n.t(lang, k, v);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(null);

    function submit() {
      const acc = findAccount(email);
      if (acc && acc.password === password) { setError(null); onDone(acc); }
      else setError(t('signin_err_invalid'));
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '32px 22px 22px' }}>
        <h1 style={{ fontSize: 'var(--fs-h1)', letterSpacing: 'var(--ls-tight)' }}>{t('signin_title')}</h1>
        <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-muted)', marginTop: 8, marginBottom: 24, lineHeight: 1.5 }}>{t('signin_sub')}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label={t('reg_email')} type="email" icon="user" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          <Input label={t('reg_password')} type="password" value={password} onChange={(e) => setPassword(e.target.value)} error={error || undefined} />
        </div>
        <div style={{ flex: 1 }} />
        <Button variant="primary" fullWidth size="lg" iconRight="arrow-right" style={{ marginTop: 20 }} onClick={submit}>{t('signin_btn')}</Button>
        <button onClick={onSwitchToRegister} style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'center', marginTop: 14, fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--indigo-700)' }}>{t('toggle_to_register')}</button>
      </div>
    );
  }

  window.NomiScreens = { HomeScreen, InsightsScreen, ActivityScreen, SettingsScreen, OnboardingScreen, RegisterScreen, SignInScreen, IntroScreens, AddTransactionSheet, TransactionDetailSheet, InsightActionSheet };
})();
