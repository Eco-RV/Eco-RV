/* =========================================================
   Content: edit these lists to update the page
   ========================================================= */

// Quest log. stage: 'dev' (in development), 'live' (live and shipped), 'next' (future ideas)
const QUESTS = [
  {
    stage: 'dev', status: 'Beta', type: 'Main quest', art: 'gauge',
    title: 'FinanceOS',
    text: 'Personal finance for Costa Rican credit cards. It tells you how much to pay in full, by when, and whether your account covers it, in colones and dollars.',
    tags: ['Personal finance', 'CRC · USD', 'Web app'],
    url: 'https://financeos-ten-rust.vercel.app/',
  },
  {
    stage: 'dev', status: 'In development', type: 'Main quest', art: 'orbit',
    title: 'AstrOS',
    text: 'Your constellation of events: attendance badges kept in a Stellar wallet. No wallet yet? It creates one from your email or Google account.',
    tags: ['Stellar', 'Testnet', 'Wallets', 'Badges'],
    url: 'https://astros-two.vercel.app/',
  },
  {
    stage: 'live', status: 'Shipped', type: 'Challenge #1 · Stellar Sessions', art: 'grid',
    title: 'LibrOS',
    text: 'Guestbook for the Cripto Cantina. Connect a wallet, sign a message and it\'s stored on Stellar by a Soroban contract written in Rust, with every step explained.',
    tags: ['Rust', 'Soroban', 'Stellar Testnet', 'TypeScript'],
    url: 'https://libr-os-app.vercel.app/',
  },
];

// Client systems in production, built at Business Pro
const CLIENT_QUESTS = [
  { title: 'Gold trading system', tag: 'Gold trading', text: 'Point of sale, inventory, branch transfers, smelting shipments, per-transaction accounting and an online store.' },
  { title: 'GasPro for ZetaGas', tag: 'Gas distribution', text: 'Windows Services and data replication between the back office and the web, plus web modules for users.' },
  { title: 'Softland + FlotasCR', tag: 'ANC Car Renting', text: 'Solutions for a vehicle rental company, integrated with its fleet system.' },
  { title: 'Business Pro ERP suite', tag: 'ERP', text: 'New features for BusinessPro ERP, ABPro, SalesPro, ManagerPRO, LinkPro and FePro.' },
];

// Future ideas: replace these placeholders with your next missions
const NEXT_MISSIONS = [
  { title: 'Classified', hint: 'Idea loading' },
  { title: 'Classified', hint: 'Idea loading' },
  { title: 'Classified', hint: 'Idea loading' },
];

// Character stats (self-assessed, out of 10)
const ATTRIBUTES = [
  ['Backend', 8], ['Data', 8], ['Integrations', 7], ['Client skills', 8],
  ['Frontend', 5], ['AI agents', 5], ['Web3', 3],
];

const GAUGES = [
  { name: 'C# · .NET', level: 8, note: 'Daily since 2022' },
  { name: 'SQL Server', level: 8, note: 'T-SQL, procedures, jobs' },
  { name: 'Integrations', level: 7, note: 'Services and replication' },
  { name: 'Client skills', level: 8, note: 'Requirements, negotiation' },
];

const SKILLS = [
  ['C#', 8, 'Main language at Business Pro'],
  ['.NET', 8, 'Desktop, web and services'],
  ['SQL Server · T-SQL', 8, 'Stored procedures, jobs and replication'],
  ['VB.NET', 7, 'Business Pro ERP suite'],
  ['Windows Services', 7, 'Real-time sync for ZetaGas'],
  ['Git · GitHub', 7, 'Version control since 2021'],
  ['DevExpress', 6, 'Back-office desktop interfaces'],
  ['Crystal Reports', 6, 'Custom reports for clients'],
  ['JavaScript', 6, 'Web modules and apps'],
  ['APIs · microservices', 6, 'Integrations between systems'],
  ['PostgreSQL', 5, 'Relational data beyond SQL Server'],
  ['Agentic AI', 5, 'Master\'s in AI Development, BIG School'],
];

// Skills being unlocked (progress in %, self-assessed)
const UNLOCKING = [
  ['Rust', 30], ['Soroban', 30], ['Stellar', 40], ['Smart contracts', 30], ['Web3', 35],
];

const ACHIEVEMENTS = [
  { glyph: '05', title: 'Five years in production', when: '2021 → now', back: 'From intern at Colmena Technologies to developer and development executive at Business Pro.' },
  { glyph: '#1', title: 'LibrOS shipped', when: 'Stellar Sessions', back: 'Challenge #1: a guestbook on Stellar with a Soroban contract in Rust.' },
  { glyph: 'BAF', title: 'BAF Costa Rica', when: 'Community events', back: 'Attendee at BAF Costa Rica events.' },
  { glyph: 'CC', title: 'Cripto Cantina regular', when: 'Networking', back: 'Regular at CriptoCantinas, crypto community meetups in Costa Rica.' },
  { glyph: 'AI', title: 'Master\'s in AI Development', when: 'BIG School', back: 'Agentic AI applied to real business software.' },
  { glyph: 'BSc', title: 'Bachelor\'s in Software Development', when: 'Universidad Fidélitas', back: 'Software development studies in San José.' },
  { glyph: 'B2', title: 'English B2', when: 'TOEIC certified', back: 'Spanish native, English B2 for international teams.' },
  { glyph: '360', title: 'Full cycle', when: 'Every stage', back: 'Support, implementation, QA, development and requirements with clients.' },
];

const CLASSES = [
  { art: 'gauge', title: 'Custom business systems', text: 'Point of sale, inventory, branch transfers, accounting and ERP modules built around how you operate.', tags: ['C#', 'VB.NET', 'SQL Server'] },
  { art: 'orbit', title: 'AI agents', text: 'Agents that read your data, run multi-step tasks and draft answers for your team.', tags: ['Agentic AI', 'APIs'] },
  { art: 'grid', title: 'Integrations and data', text: 'Windows Services and APIs that keep your systems in sync, even when the connection drops.', tags: ['Windows Services', 'Replication'] },
];

/* =========================================================
   Helpers
   ========================================================= */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Flat Bauhaus illustrations, one per kind
const ART = {
  gauge: `<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="200" height="200" fill="var(--signal)"/>
      <circle cx="100" cy="150" r="90" fill="var(--paper)"/>
      <g class="rot" style="transform-origin:100px 150px"><circle cx="100" cy="150" r="82" fill="none" stroke="#0A0A0A" stroke-width="10" stroke-dasharray="1.2 10"/></g>
      <circle cx="100" cy="150" r="56" fill="#0A0A0A"/>
      <path d="M100 150 L150 108" stroke="var(--alert)" stroke-width="5"/>
      <circle cx="100" cy="150" r="8" fill="var(--signal)"/>
    </svg>`,
  orbit: `<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="200" height="200" fill="#0A0A0A"/>
      <circle cx="100" cy="100" r="80" fill="none" stroke="var(--signal)" stroke-width="1.5"/>
      <circle cx="100" cy="100" r="56" fill="none" stroke="var(--signal)" stroke-width="1.5" stroke-dasharray="3 5"/>
      <circle cx="100" cy="100" r="30" fill="var(--paper)"/>
      <g class="rot"><circle cx="100" cy="20" r="9" fill="var(--alert)"/><circle cx="156" cy="100" r="6" fill="var(--signal)"/></g>
    </svg>`,
  grid: `<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="200" height="200" fill="#0A0A0A"/>
      <g fill="none" stroke="var(--signal)" stroke-width="1.5"><path d="M0 50h200M0 100h200M0 150h200M50 0v200M100 0v200M150 0v200"/></g>
      <rect x="100" y="0" width="50" height="50" fill="var(--signal)"/>
      <rect x="0" y="150" width="50" height="50" fill="var(--paper)"/>
      <circle cx="125" cy="125" r="22" fill="none" stroke="var(--alert)" stroke-width="5"/>
      <g class="rot"><circle cx="25" cy="25" r="12" fill="var(--paper)"/></g>
      <circle cx="175" cy="75" r="10" fill="var(--alert)"/>
    </svg>`,
};

/* ---------- Boot screen (once per session) ---------- */
(() => {
  const boot = $('#boot');
  let seen = false;
  try { seen = sessionStorage.getItem('booted') === '1'; } catch (e) {}
  if (seen || reduceMotion) { boot.classList.add('is-skipped'); return; }

  const bar = $('.boot-bar span', boot), status = $('#boot-status');
  const steps = ['Loading save file', 'Loading quests', 'Loading skill tree', 'Ready'];
  const t0 = performance.now(), DUR = 1300;
  const done = () => {
    boot.classList.add('is-done');
    try { sessionStorage.setItem('booted', '1'); } catch (e) {}
    setTimeout(() => boot.classList.add('is-skipped'), 800);
  };
  boot.addEventListener('click', done);
  requestAnimationFrame(function step(t) {
    const p = Math.min(1, (t - t0) / DUR);
    bar.style.width = `${p * 100}%`;
    status.textContent = `${steps[Math.min(steps.length - 1, Math.floor(p * steps.length))]} · ${Math.round(p * 100)}%`;
    if (p < 1) requestAnimationFrame(step); else setTimeout(done, 250);
  });
})();

/* ---------- Theme toggle (dark by default) ---------- */
(() => {
  const btn = $('.theme-toggle'), root = document.documentElement;
  btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    const apply = () => {
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
    };
    if (!document.startViewTransition || reduceMotion) return apply();
    document.startViewTransition(apply);
  });
})();

/* ---------- Name: letters rise in and widen near the cursor ---------- */
(() => {
  const chars = [];
  let i = 0;
  $$('[data-split]').forEach((line) => {
    const text = line.textContent;
    line.textContent = '';
    line.setAttribute('aria-hidden', 'true');
    for (const ch of text) {
      const span = document.createElement('span');
      span.className = ch === ' ' ? 'char space' : 'char';
      span.textContent = ch === ' ' ? ' ' : ch;
      span.style.setProperty('--delay', `${.2 + i++ * .05}s`);
      line.append(span);
      chars.push(span);
    }
  });
  if (reduceMotion || !finePointer) return;
  let raf = 0, px = -1e4, py = -1e4;
  const update = () => {
    raf = 0;
    for (const c of chars) {
      const r = c.getBoundingClientRect();
      const k = Math.max(0, 1 - Math.hypot(r.left + r.width / 2 - px, r.top + r.height / 2 - py) / 320);
      c.style.setProperty('--wd', (100 + k * 25).toFixed(1));
      c.style.setProperty('--w', (600 + k * 300).toFixed(0));
    }
  };
  const zone = $('.hero');
  zone.addEventListener('pointermove', (e) => { px = e.clientX; py = e.clientY; raf ||= requestAnimationFrame(update); });
  zone.addEventListener('pointerleave', () => { px = py = -1e4; raf ||= requestAnimationFrame(update); });
})();

/* ---------- Quest log ---------- */
(() => {
  const label = { dev: 'In development', live: 'Live', next: 'Next' };
  const card = (q) => `
    <article class="quest">
      <div class="quest-art">${ART[q.art]}</div>
      <div class="quest-body">
        <div class="quest-meta"><span class="badge-stage ${q.stage}">${esc(q.status)}</span><span class="quest-type">${esc(q.type)}</span></div>
        <h4>${esc(q.title)}</h4>
        <p>${esc(q.text)}</p>
        <div class="quest-tags">${q.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
        ${q.url ? `<a class="quest-link" href="${q.url}" target="_blank" rel="noopener">Launch app ↗</a>` : ''}
      </div>
    </article>`;

  for (const stage of ['dev', 'live']) {
    $(`[data-quests="${stage}"]`).innerHTML = QUESTS.filter((q) => q.stage === stage).map(card).join('');
  }

  // Client systems go under "live", in a compact grid
  const live = $('[data-stage="live"]');
  live.insertAdjacentHTML('beforeend', `
    <div class="client-quests">
      <p class="kicker">Client quests · built at Business Pro</p>
      <div class="grid">${CLIENT_QUESTS.map((c) => `
        <div class="cell">
          <div class="quest-meta"><span class="badge-stage live">In production</span><span class="quest-type">${esc(c.tag)}</span></div>
          <h5>${esc(c.title)}</h5>
          <p>${esc(c.text)}</p>
        </div>`).join('')}
      </div>
    </div>`);

  $('[data-quests="next"]').innerHTML = `<div class="grid locked-grid">${NEXT_MISSIONS.map((m) => `
    <div class="cell locked">
      <span class="lock" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span>
      <div><h5>${esc(m.title)}</h5><p>${esc(m.hint)}</p></div>
    </div>`).join('')}</div>`;

  const counts = {
    dev: QUESTS.filter((q) => q.stage === 'dev').length,
    live: QUESTS.filter((q) => q.stage === 'live').length + CLIENT_QUESTS.length,
    next: NEXT_MISSIONS.length,
  };
  $$('[data-count-for]').forEach((el) => { el.textContent = `${String(counts[el.dataset.countFor]).padStart(2, '0')} ${label[el.dataset.countFor] === 'Next' ? 'locked' : 'quests'}`; });
})();

/* ---------- Radar chart ---------- */
(() => {
  const svg = $('#radar'), R = 120, n = ATTRIBUTES.length;
  const pt = (i, v) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    return [Math.cos(a) * R * v / 10, Math.sin(a) * R * v / 10];
  };
  let html = '';
  for (const lv of [2, 4, 6, 8, 10]) html += `<polygon class="ring" points="${ATTRIBUTES.map((_, i) => pt(i, lv).join(',')).join(' ')}"/>`;
  ATTRIBUTES.forEach(([name, v], i) => {
    const [x, y] = pt(i, 10), [lx, ly] = pt(i, 12.4);
    html += `<line class="axis" x1="0" y1="0" x2="${x}" y2="${y}"/>`;
    html += `<text class="lbl" x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle">${esc(name)}</text>`;
    html += `<text class="lvl" x="${lx}" y="${ly + 13}" text-anchor="middle" dominant-baseline="middle">${v}</text>`;
  });
  html += `<polygon class="shape" points="${ATTRIBUTES.map(([, v], i) => pt(i, v).join(',')).join(' ')}"/>`;
  ATTRIBUTES.forEach(([, v], i) => { const [x, y] = pt(i, v); html += `<circle class="pt" cx="${x}" cy="${y}" r="4"/>`; });
  svg.insertAdjacentHTML('beforeend', html);
})();

/* ---------- Gauges, skill bars, unlocking ---------- */
(() => {
  const LEN = Math.PI * 80;
  $('#gauges').innerHTML = GAUGES.map((g) => `
    <div class="gauge" style="--len:${LEN.toFixed(1)};--off:${(LEN * (1 - g.level / 10)).toFixed(1)};--deg:${(-90 + 180 * g.level / 10).toFixed(0)}deg">
      <svg viewBox="0 0 200 112" aria-hidden="true">
        <path class="track" d="M20 100 A80 80 0 0 1 180 100"/>
        <path class="fill" d="M20 100 A80 80 0 0 1 180 100"/>
        <path class="tick" d="M38 100 A62 62 0 0 1 162 100"/>
        <line class="needle" x1="100" y1="100" x2="100" y2="32"/>
        <circle class="hub" cx="100" cy="100" r="7"/>
      </svg>
      <h4>${esc(g.name)}</h4>
      <p>Lv <b>${g.level}</b> · ${esc(g.note)}</p>
    </div>`).join('');

  $('#skill-list').innerHTML = SKILLS.map(([name, lv, tip]) => `
    <div class="skill-row" tabindex="0">
      <span class="nm">${esc(name)}</span>
      <span class="segs" aria-hidden="true">${Array.from({ length: 10 }, (_, i) => `<i class="${i < lv ? 'on' : ''}" style="--n:${i}"></i>`).join('')}</span>
      <span class="lv">Lv ${lv}</span>
      <span class="skill-tip">${esc(tip)}</span>
    </div>`).join('');

  $('#unlocking').innerHTML = UNLOCKING.map(([name, pct], i) => `
    <div class="unlock" style="--pct:${pct}%;--n:${i}">
      <div class="top"><span>${esc(name)}</span><span>${pct}% XP</span></div>
      <div class="bar"><span></span></div>
    </div>`).join('');
})();

/* ---------- Achievements ---------- */
(() => {
  $('#badges').innerHTML = ACHIEVEMENTS.map((a) => `
    <div class="badge" tabindex="0" role="button" aria-label="${esc(a.title)}: ${esc(a.back)}">
      <div class="badge-inner">
        <div class="badge-face">
          <svg class="medal" viewBox="0 0 100 100" aria-hidden="true">
            <circle class="ring" cx="50" cy="50" r="46"/>
            <circle class="tick" cx="50" cy="50" r="40"/>
            <circle cx="50" cy="50" r="30" fill="var(--signal)"/>
            <text x="50" y="51" text-anchor="middle" dominant-baseline="middle" fill="#0A0A0A" style="font:800 ${a.glyph.length > 2 ? 16 : 22}px Archivo, sans-serif">${esc(a.glyph)}</text>
          </svg>
          <h4>${esc(a.title)}</h4>
          <span class="when">${esc(a.when)}</span>
        </div>
        <div class="badge-face badge-back">
          <span class="when">${esc(a.when)}</span>
          <p>${esc(a.back)}</p>
        </div>
      </div>
    </div>`).join('');
  $('#badges').addEventListener('click', (e) => e.target.closest('.badge')?.classList.toggle('is-flipped'));
  $('#badges').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    e.target.closest('.badge')?.classList.toggle('is-flipped');
  });
})();

/* ---------- Classes ---------- */
$('#class-list').innerHTML = CLASSES.map((c) => `
  <div class="cell class-cell">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" fill="var(--signal)"/>
      <g class="rot">${c.art === 'gauge' ? '<circle cx="32" cy="32" r="22" fill="none" stroke="#0A0A0A" stroke-width="6" stroke-dasharray="1 5"/>' : c.art === 'orbit' ? '<circle cx="32" cy="32" r="22" fill="none" stroke="#0A0A0A" stroke-width="2"/><circle cx="32" cy="10" r="5" fill="var(--alert)"/>' : '<path d="M10 32h44M32 10v44" stroke="#0A0A0A" stroke-width="3"/>'}</g>
      <circle cx="32" cy="32" r="9" fill="#0A0A0A"/>
    </svg>
    <h3>${esc(c.title)}</h3>
    <p>${esc(c.text)}</p>
    <div class="quest-tags">${c.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
  </div>`).join('');

/* ---------- Scroll reveals ---------- */
(() => {
  // Whole grids are revealed, not their cells: a hidden cell would expose the grid's line-colored background
  $$('.section-head, .quest, .client-quests .grid, .locked-grid, .gauges, .badges, .classes, .contact .grid').forEach((el, i) => {
    el.setAttribute('data-reveal', '');
    el.style.setProperty('--rd', `${(i % 4) * .07}s`);
  });
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }
  }, { threshold: .2, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal], .radar, .gauge, .skill-list, .unlocking, .xp-bar').forEach((el) => io.observe(el));
})();

/* ---------- Scroll progress and current section ---------- */
(() => {
  const bar = $('.progress span');
  const links = $$('.site-header nav a');
  const sections = links.map((a) => $(a.getAttribute('href')));
  const onScroll = () => {
    const vh = innerHeight;
    bar.style.transform = `scaleX(${scrollY / (document.documentElement.scrollHeight - vh) || 0})`;
    let current = -1;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top < vh * .4) current = i; });
    links.forEach((a, i) => a.classList.toggle('is-current', i === current));
  };
  addEventListener('scroll', () => requestAnimationFrame(onScroll), { passive: true });
  onScroll();
})();

/* ---------- Magnetic buttons ---------- */
(() => {
  if (!finePointer || reduceMotion) return;
  $$('.magnetic').forEach((b) => {
    b.addEventListener('pointermove', (e) => {
      const r = b.getBoundingClientRect();
      b.style.setProperty('--mx', `${(e.clientX - r.left - r.width / 2) * .2}px`);
      b.style.setProperty('--my', `${(e.clientY - r.top - r.height / 2) * .3}px`);
    });
    b.addEventListener('pointerleave', () => { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); });
  });
})();

/* ---------- Copy email ---------- */
(() => {
  const btn = $('#copy-email'), hint = $('#copy-hint'), label = $('.label', btn);
  btn.addEventListener('click', async () => {
    const email = btn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      location.href = `mailto:${email}`;
      return;
    }
    label.textContent = 'Copied to clipboard';
    hint.textContent = 'Paste it into your email app.';
    btn.classList.add('is-copied');
    setTimeout(() => { label.textContent = email; btn.classList.remove('is-copied'); }, 2200);
  });
  $('#year').textContent = new Date().getFullYear();
})();
