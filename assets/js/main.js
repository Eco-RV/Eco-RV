/* =========================================================
   Content: edit these lists to update the page
   ========================================================= */
const ICONS = {
  system: '<path d="M4 5h16v10H4z M9 19h6 M12 15v4" />',
  apps: '<path d="M3 5h11v9H3z M14 9h7v10h-9v-5" />',
  sync: '<path d="M4 9a8 8 0 0 1 14-3l2 2 M20 4v4h-4 M20 15a8 8 0 0 1-14 3l-2-2 M4 20v-4h4" />',
  ai: '<path d="M12 3v3 M12 18v3 M3 12h3 M18 12h3 M6.3 6.3l2.1 2.1 M15.6 15.6l2.1 2.1 M6.3 17.7l2.1-2.1 M15.6 8.4l2.1-2.1" /><circle cx="12" cy="12" r="3" />',
  report: '<path d="M5 20V10 M12 20V4 M19 20v-7" />',
  talk: '<path d="M4 5h16v11H9l-5 4z M8 10h8 M8 13h5" />',
};

const SERVICES = [
  {
    icon: 'system',
    name: 'Custom business systems',
    text: 'Point of sale, inventory, transfers between branches, accounting per transaction and ERP modules, built around how your company actually operates.',
    chips: ['C#', 'VB.NET', 'SQL Server', 'DevExpress'],
  },
  {
    icon: 'ai',
    name: 'AI agents for your operation',
    text: 'Agents that read your business data, run multi-step tasks and draft answers or reports, so your team spends less time on repetitive work.',
    chips: ['Agentic AI', 'SQL Server', 'APIs'],
  },
  {
    icon: 'sync',
    name: 'Integrations and data replication',
    text: 'Windows Services and APIs that keep your back office, web platform and third-party systems like Softland in sync, even when a connection drops.',
    chips: ['Windows Services', 'APIs', 'Microservices', 'Replication'],
  },
  {
    icon: 'apps',
    name: 'Desktop and web applications',
    text: 'Back-office desktop software and web modules for your users and customers, including online stores, from the first requirement to production.',
    chips: ['.NET', 'JavaScript', 'UI/UX'],
  },
  {
    icon: 'report',
    name: 'Reports and data analysis',
    text: 'Reports designed with you around the decisions you need to make, built straight from your own data.',
    chips: ['T-SQL', 'Stored procedures', 'Crystal Reports'],
  },
  {
    icon: 'talk',
    name: 'Requirements and consulting',
    text: 'I sit with your team, learn the business and turn needs into a clear, documented plan before writing any code.',
    chips: ['Requirements', 'Agile', 'Documentation'],
  },
];

const PROJECTS = [
  {
    tag: 'Gold trading',
    title: 'End-to-end system for gold trading companies',
    text: 'Built with the team: point of sale, inventory, transfers between branches, data replication, the smelting shipment flow, per-transaction accounting designed with accounting firms, and an online store.',
    stack: ['C#', 'SQL Server', 'Replication', 'Web'],
  },
  {
    tag: 'ZetaGas · GasPro',
    title: 'Gas distribution back office and web',
    text: 'Windows Services and data replication between the GasPro back office and the web platform, web modules for users, and documentation of distribution, cash handling and plant closings.',
    stack: ['Windows Services', 'SQL Server', 'Web'],
  },
  {
    tag: 'ANC Car Renting',
    title: 'Softland integrated with FlotasCR',
    text: 'Solutions for a vehicle rental company running Softland, connected to the FlotasCR fleet system, plus support on their FePro and LinkPro integrations.',
    stack: ['Integrations', 'SQL Server', 'Support'],
  },
  {
    tag: 'Business Pro suite',
    title: 'New features across a full ERP suite',
    text: 'New requirements for clients of BusinessPro ERP, ABPro, SalesPro, ManagerPRO, LinkPro and FePro, covering HR, accounting and inventory (Kardex).',
    stack: ['VB.NET', 'C#', 'DevExpress', 'Crystal Reports'],
  },
];

// Illustrative agent run for the "Agentic AI" section
const AGENT_RUN = {
  question: 'Which branch moved the most inventory this week, and is anything unusual?',
  steps: [
    'Planning: <b>split the question into 3 tasks</b>',
    'Querying SQL Server: <b>InventoryMovements</b> for this week and last week',
    'Comparing branches and flagging changes above the usual range',
    'Checking the result against the closing reports',
  ],
  answer: 'The central branch moved the most stock this week. One product line doubled compared with last week, all from a single transfer, so it\'s worth confirming with the warehouse.',
};

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- Theme toggle with circular reveal ---------- */
(() => {
  const btn = $('.theme-toggle');
  const root = document.documentElement;
  const isDark = () => root.dataset.theme
    ? root.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;

  btn.addEventListener('click', (e) => {
    const next = isDark() ? 'light' : 'dark';
    const apply = () => {
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (err) {}
    };
    if (!document.startViewTransition || reduceMotion) return apply();
    const r = btn.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(apply).ready.then(() => {
      root.animate(
        { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 700, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' }
      );
    });
  });
})();

/* ---------- Mist + fireflies canvas ---------- */
(() => {
  const canvas = $('#mist');
  const ctx = canvas.getContext('2d');
  let w, h, dpr, blobs, flies;
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    blobs = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * w, y: Math.random() * h,
      r: (Math.random() * .35 + .25) * Math.max(w, h),
      vx: (Math.random() - .5) * .25 * dpr, vy: (Math.random() - .5) * .18 * dpr,
      c: i % 2 ? '--mist-a' : '--mist-b',
    }));
    flies = Array.from({ length: innerWidth < 700 ? 18 : 40 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      a: Math.random() * Math.PI * 2, s: (Math.random() * .4 + .15) * dpr,
      p: Math.random() * Math.PI * 2,
    }));
  }

  let mx = -1e4, my = -1e4;
  addEventListener('pointermove', (e) => { mx = e.clientX * dpr; my = e.clientY * dpr; }, { passive: true });

  function frame(t) {
    ctx.clearRect(0, 0, w, h);
    const colors = { '--mist-a': css('--mist-a'), '--mist-b': css('--mist-b') };
    for (const b of blobs) {
      b.x += b.vx; b.y += b.vy;
      if (b.x < -b.r) b.x = w + b.r; if (b.x > w + b.r) b.x = -b.r;
      if (b.y < -b.r) b.y = h + b.r; if (b.y > h + b.r) b.y = -b.r;
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0, colors[b.c]);
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
    }
    // Fireflies only glow in the dark theme
    if (css('--firefly') === '1') {
      const glow = css('--quetzal');
      for (const f of flies) {
        f.a += (Math.random() - .5) * .2;
        f.x += Math.cos(f.a) * f.s; f.y += Math.sin(f.a) * f.s;
        const dx = f.x - mx, dy = f.y - my, d = Math.hypot(dx, dy);
        if (d < 120 * dpr) { f.x += dx / d * 1.5 * dpr; f.y += dy / d * 1.5 * dpr; }
        if (f.x < 0) f.x = w; if (f.x > w) f.x = 0; if (f.y < 0) f.y = h; if (f.y > h) f.y = 0;
        const alpha = (Math.sin(t / 700 + f.p) + 1) / 2;
        ctx.globalAlpha = alpha * .9;
        ctx.fillStyle = glow;
        ctx.shadowColor = glow; ctx.shadowBlur = 12 * dpr;
        ctx.beginPath(); ctx.arc(f.x, f.y, 1.6 * dpr, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1; ctx.shadowBlur = 0;
    }
    if (!reduceMotion) requestAnimationFrame(frame);
  }
  resize();
  addEventListener('resize', resize);
  requestAnimationFrame(frame);
})();

/* ---------- Name: split letters, rise in, react to the cursor ---------- */
(() => {
  let i = 0;
  const chars = [];
  $$('[data-split]').forEach((line) => {
    const text = line.textContent;
    line.textContent = '';
    line.setAttribute('aria-hidden', 'true');
    for (const ch of text) {
      const span = document.createElement('span');
      span.className = ch === ' ' ? 'char space' : 'char';
      span.textContent = ch === ' ' ? ' ' : ch;
      span.style.setProperty('--delay', `${.15 + i++ * .045}s`);
      line.append(span);
      chars.push(span);
    }
  });
  if (reduceMotion || !finePointer) return;

  // Letters near the cursor get lighter and wider, like a magnifier made of type
  let raf = 0, px = -1e4, py = -1e4;
  function update() {
    raf = 0;
    for (const c of chars) {
      const r = c.getBoundingClientRect();
      const d = Math.hypot(r.left + r.width / 2 - px, r.top + r.height / 2 - py);
      const k = Math.max(0, 1 - d / 260);
      c.style.setProperty('--w', (800 - k * 600).toFixed(0));
      c.style.setProperty('--wd', (100 - k * 25).toFixed(1));
    }
  }
  const hero = $('.hero');
  hero.addEventListener('pointermove', (e) => { px = e.clientX; py = e.clientY; raf ||= requestAnimationFrame(update); });
  hero.addEventListener('pointerleave', () => { px = py = -1e4; raf ||= requestAnimationFrame(update); });
})();

/* ---------- SQL query that types itself ---------- */
(() => {
  const code = $('#sql'), result = $('#result'), status = $('#status');
  const lines = [
    [['kw', 'SELECT TOP'], ['', ' 1 name, role, builds\n']],
    [['kw', 'FROM'], ['', '   dbo.Developers\n']],
    [['kw', 'WHERE'], ['', '  country = '], ['str', "'CR'"], ['', '\n']],
    [['kw', '  AND'], ['', '  stack '], ['kw', 'LIKE'], ['', ' '], ['str', "'%.NET%'"], ['', ';\n']],
    [['cm', '-- built around your business']],
  ];

  const render = (upto) => {
    let left = upto, html = '';
    for (const line of lines) for (const [cls, txt] of line) {
      if (left <= 0) break;
      const part = txt.slice(0, left); left -= part.length;
      const esc = part.replace(/&/g, '&amp;').replace(/</g, '&lt;');
      html += cls ? `<span class="${cls}">${esc}</span>` : esc;
    }
    code.innerHTML = html;
  };
  const total = lines.flat().reduce((n, [, t]) => n + t.length, 0);

  const finish = (ms) => {
    result.classList.add('is-filled');
    status.textContent = `(1 row affected)  ${ms} ms`;
    status.classList.add('ok');
  };
  if (reduceMotion) { render(total); finish(12); return; }

  let n = 0;
  setTimeout(function tick() {
    render(++n);
    if (n < total) return setTimeout(tick, code.textContent.endsWith('\n') ? 220 : 26 + Math.random() * 40);
    status.textContent = 'Executing…';
    let ms = 0;
    const timer = setInterval(() => { status.textContent = `Executing… ${ms += 3} ms`; if (ms >= 12) { clearInterval(timer); finish(ms); } }, 60);
  }, 1100);

  // Subtle 3D tilt on the card
  if (!finePointer) return;
  const card = $('.query');
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });
  card.addEventListener('pointerleave', () => { card.style.transition = 'transform .6s'; card.style.transform = ''; setTimeout(() => card.style.transition = '', 600); });
})();

/* ---------- Section titles: wrap words for a masked reveal ---------- */
$$('.title, [data-split-words]').forEach((el) => {
  el.innerHTML = el.textContent.trim().split(/\s+/)
    .map((word, i) => `<span class="word"><span style="--i:${i}">${word}</span></span>`).join(' ');
});

/* ---------- Services: expandable rows ---------- */
(() => {
  const list = $('#services-list');
  list.innerHTML = SERVICES.map((s, i) => `
    <li class="service${i === 0 ? ' is-open' : ''}">
      <button class="service-toggle" type="button" aria-expanded="${i === 0}" aria-controls="service-${i}">
        <span class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[s.icon]}</svg></span>
        <span class="service-name">${s.name}</span>
        <span class="service-plus" aria-hidden="true"></span>
      </button>
      <div class="service-panel" id="service-${i}"><div>
        <div class="service-panel-inner">
          <p>${s.text}</p>
          <div class="service-chips">${s.chips.map((c) => `<span>${c}</span>`).join('')}</div>
        </div>
      </div></div>
    </li>`).join('');

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.service-toggle');
    if (!btn) return;
    const item = btn.parentElement;
    const open = !item.classList.contains('is-open');
    item.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open);
  });
})();

/* ---------- Agentic AI demo ---------- */
const agentDemo = (() => {
  const box = $('#agent'), q = $('#agent-question'), steps = $('#agent-steps');
  const answer = $('#agent-answer'), answerText = $('.text', answer), replay = $('#agent-replay');
  const wait = (ms) => new Promise((r) => setTimeout(r, reduceMotion ? 0 : ms));
  let running = false;

  async function type(el, text, speed) {
    if (reduceMotion) { el.textContent = text; return; }
    el.textContent = '';
    for (const ch of text) { el.textContent += ch; await wait(speed); }
  }

  async function run() {
    if (running) return;
    running = true;
    replay.disabled = true;
    box.classList.add('is-running');
    steps.innerHTML = '';
    answer.classList.remove('is-shown');
    answerText.textContent = '';

    await type(q, AGENT_RUN.question, 22);
    await wait(400);
    for (const html of AGENT_RUN.steps) {
      const li = document.createElement('li');
      li.innerHTML = `<span class="step-mark" aria-hidden="true"></span><span>${html}</span>`;
      steps.append(li);
      await wait(900 + Math.random() * 500);
      li.classList.add('done');
      await wait(150);
    }
    answer.classList.add('is-shown');
    await type(answerText, AGENT_RUN.answer, 14);

    box.classList.remove('is-running');
    replay.disabled = false;
    running = false;
  }

  replay.addEventListener('click', run);
  return { run };
})();

/* ---------- Scroll reveals ---------- */
(() => {
  $$('.section-head p, .service, .sync, .agent, .tl-item, .edu, .stack-groups > div, .community, .contact-lede, .contact-actions').forEach((el, i) => {
    el.setAttribute('data-reveal', '');
    el.style.setProperty('--rd', `${(i % 4) * .08}s`);
  });
  $$('.process li').forEach((li, i) => li.style.setProperty('--i', i));

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-in');
      if (e.target.id === 'agent') setTimeout(agentDemo.run, 500);
      io.unobserve(e.target);
    }
  }, { threshold: .2, rootMargin: '0px 0px -8% 0px' });
  $$('[data-reveal], .title, .contact-title, .process').forEach((el) => io.observe(el));
})();

/* ---------- Sync diagram: packets, outage and replay ---------- */
(() => {
  const sync = $('.sync'), group = $('#packets'), queueEl = $('#queue');
  const linkA = $('#link-a'), linkB = $('#link-b');
  const btn = $('#outage'), log = $('#sync-log');
  const nodes = $$('.node', sync);
  const NS = 'http://www.w3.org/2000/svg';
  let down = false, queue = 0, visible = false;

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(sync);

  function pulse(node) { node.classList.remove('pulse'); void node.getBBox(); node.classList.add('pulse'); }

  function travel(path, cls, ms) {
    return new Promise((resolve) => {
      const dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('r', 7); dot.setAttribute('class', `packet ${cls}`);
      const start = path.getPointAtLength(0);
      dot.setAttribute('cx', start.x); dot.setAttribute('cy', start.y);
      group.append(dot);
      const len = path.getTotalLength(), t0 = performance.now();
      requestAnimationFrame(function step(t) {
        const p = Math.min(1, (t - t0) / ms), e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        const pt = path.getPointAtLength(e * len);
        dot.setAttribute('cx', pt.x); dot.setAttribute('cy', pt.y);
        if (p < 1) requestAnimationFrame(step); else { dot.remove(); resolve(); }
      });
    });
  }

  function setQueue(n) {
    queue = n;
    queueEl.textContent = n ? `${n} queued` : '';
  }

  async function send() {
    await travel(linkA, '', 1100);
    pulse(nodes[1]);
    if (down) { setQueue(queue + 1); return; }
    await travel(linkB, '', 1100);
    pulse(nodes[2]);
  }

  async function flush() {
    const n = queue;
    for (let i = 0; i < n && !down; i++) {
      setQueue(queue - 1);
      travel(linkB, 'retry', 900).then(() => pulse(nodes[2]));
      await new Promise((r) => setTimeout(r, 220));
    }
  }

  btn.addEventListener('click', () => {
    down = !down;
    btn.setAttribute('aria-pressed', down);
    sync.classList.toggle('is-down', down);
    btn.textContent = down ? 'Restore the connection' : 'Cut the connection';
    log.textContent = down
      ? 'Connection lost. The service keeps collecting changes in a queue.'
      : `Back online. Sent ${queue} queued ${queue === 1 ? 'record' : 'records'}, none lost.`;
    if (!down) flush();
  });

  if (reduceMotion) return;
  setInterval(() => { if (visible && !document.hidden) send(); }, 900);
})();

/* ---------- Timeline drawn by scroll ---------- */
(() => {
  const tl = $('.timeline');
  const items = $$('.tl-item', tl);
  const bar = $('.progress span');
  const header = $('.site-header');
  const links = $$('.site-header nav a');
  const sections = links.map((a) => $(a.getAttribute('href')));
  let lastY = scrollY;

  function onScroll() {
    const y = scrollY, vh = innerHeight;
    bar.style.transform = `scaleX(${y / (document.documentElement.scrollHeight - vh) || 0})`;

    header.classList.toggle('is-scrolled', y > 20);
    header.classList.toggle('is-hidden', y > lastY && y > 400);
    lastY = y;

    const r = tl.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (vh * .6 - r.top) / r.height));
    tl.style.setProperty('--progress', p);
    items.forEach((it) => it.classList.toggle('is-lit', it.getBoundingClientRect().top < vh * .6));

    let current = -1;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < vh * .4) current = i; });
    links.forEach((a, i) => a.classList.toggle('is-current', i === current));
  }
  addEventListener('scroll', () => requestAnimationFrame(onScroll), { passive: true });
  onScroll();
})();

/* ---------- Projects ---------- */
(() => {
  const wrap = $('#projects');
  const art = (i) => {
    const shapes = [
      '<path d="M120 10c60 0 110 50 110 110S180 230 120 230 10 180 10 120 60 10 120 10Z" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 10"/><circle cx="120" cy="120" r="60" fill="currentColor" opacity=".25"/>',
      '<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="70" cy="120" r="40"/><circle cx="170" cy="120" r="40"/><path d="M110 120h20" stroke-dasharray="4 4"/></g>',
      '<g fill="currentColor" opacity=".4"><rect x="30" y="40" width="180" height="22" rx="11"/><rect x="60" y="90" width="150" height="22" rx="11"/><rect x="90" y="140" width="120" height="22" rx="11"/></g>',
    ];
    return `<svg class="project-art" viewBox="0 0 240 240" style="color:var(${['--quetzal', '--iris', '--crimson'][i % 3]})" aria-hidden="true">${shapes[i % 3]}</svg>`;
  };

  wrap.innerHTML = PROJECTS.map((p, i) => {
    const tag = p.link ? 'a' : 'article';
    const href = p.link ? ` href="${p.link}" target="_blank" rel="noopener"` : '';
    return `<${tag} class="project" data-reveal style="--rd:${i * .1}s"${href}>
      ${art(i)}
      <span class="project-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
      <div class="project-meta">${p.stack.map((s) => `<span>${s}</span>`).join('')}</div>
      ${p.status ? `<p class="project-status">${p.status}</p>` : ''}
    </${tag}>`;
  }).join('');

  const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('is-in'), io.unobserve(e.target))), { threshold: .15 });
  $$('.project', wrap).forEach((card) => {
    io.observe(card);
    if (!finePointer || reduceMotion) return;
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.setProperty('--px', `${x * 100}%`);
      card.style.setProperty('--py', `${y * 100}%`);
      card.style.setProperty('--ry', `${(x - .5) * 7}deg`);
      card.style.setProperty('--rx', `${(.5 - y) * 7}deg`);
    });
    card.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
  });
})();

/* ---------- Magnetic buttons + cursor ring ---------- */
(() => {
  if (!finePointer || reduceMotion) return;
  $$('.magnetic').forEach((b) => {
    b.addEventListener('pointermove', (e) => {
      const r = b.getBoundingClientRect();
      b.style.setProperty('--mx', `${(e.clientX - r.left - r.width / 2) * .25}px`);
      b.style.setProperty('--my', `${(e.clientY - r.top - r.height / 2) * .35}px`);
    });
    b.addEventListener('pointerleave', () => { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); });
  });

  const ring = $('.cursor');
  let x = 0, y = 0, cx = 0, cy = 0;
  addEventListener('pointermove', (e) => {
    x = e.clientX; y = e.clientY;
    ring.classList.add('is-active');
    ring.classList.toggle('is-hover', !!e.target.closest('a, button, .project, .stack-groups span'));
  });
  document.addEventListener('pointerleave', () => ring.classList.remove('is-active'));
  (function loop() {
    cx += (x - cx) * .18; cy += (y - cy) * .18;
    ring.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(loop);
  })();
})();

/* ---------- Copy email ---------- */
(() => {
  const btn = $('#copy-email'), hint = $('#copy-hint'), label = $('.label', btn);
  btn.addEventListener('click', async () => {
    const email = btn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      label.textContent = 'Copied to clipboard';
      hint.textContent = 'Paste it into your email app.';
    } catch (err) {
      location.href = `mailto:${email}`;
      return;
    }
    btn.classList.add('is-copied');
    setTimeout(() => { label.textContent = email; btn.classList.remove('is-copied'); }, 2200);
  });
  $('#year').textContent = new Date().getFullYear();
})();
