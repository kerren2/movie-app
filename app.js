/* =========================================================
   KEREN — movie app
   Every title has a YouTube trailer ID (yt) which plays
   INSIDE the site through an embedded player.
   To add a title: copy one entry below, give it a unique `id`, and
   paste the trailer's YouTube video ID (the part after ?v=) in `yt`.
   ========================================================= */

const CATALOG = [
  {id:'finding-nemo',title:'Finding Nemo',year:2003,type:'Movie',length:'1h 40m',rating:'G',hue:195,genres:['Animation','Adventure','Family'],credit:['Directors','Andrew Stanton & Lee Unkrich'],tagline:'An unforgettable journey under the sea.',synopsis:'A caring clownfish crosses the ocean with a forgetful new friend to find his son and meets helpful friends along the way.',cast:[['Albert Brooks','Marlin'],['Ellen DeGeneres','Dory'],['Alexander Gould','Nemo']],yt:'wZdpNglLbt8'},
  {id:'frozen',title:'Frozen',year:2013,type:'Movie',length:'1h 42m',rating:'PG',hue:205,genres:['Animation','Adventure','Family'],credit:['Directors','Chris Buck & Jennifer Lee'],tagline:'A story of sisters, courage and a little bit of magic.',synopsis:'Anna teams up with Kristoff, Sven and a cheerful snowman to find her sister Elsa and bring summer back to their kingdom.',cast:[['Kristen Bell','Anna'],['Idina Menzel','Elsa'],['Josh Gad','Olaf']],yt:'TbQm5doF_Uc'},
  {id:'moana',title:'Moana',year:2016,type:'Movie',length:'1h 47m',rating:'PG',hue:175,genres:['Animation','Adventure','Family'],credit:['Directors','Ron Clements & John Musker'],tagline:'The ocean is calling.',synopsis:'A brave young sailor sets out across the ocean with the demigod Maui to help her island and discover her own strength.',cast:[['Auliʻi Cravalho','Moana'],['Dwayne Johnson','Maui'],['Rachel House','Gramma Tala']],yt:'LKFuXETZUsI'},
  {id:'zootopia',title:'Zootopia',year:2016,type:'Movie',length:'1h 48m',rating:'PG',hue:95,genres:['Animation','Comedy','Family'],credit:['Directors','Byron Howard & Rich Moore'],tagline:'Anyone can be anything.',synopsis:'A determined rabbit police officer and a quick-witted fox solve a citywide mystery and learn to work together.',cast:[['Ginnifer Goodwin','Judy Hopps'],['Jason Bateman','Nick Wilde'],['Shakira','Gazelle']],yt:'jWM0ct-OLsM'},
  {id:'inside-out',title:'Inside Out',year:2015,type:'Movie',length:'1h 35m',rating:'PG',hue:45,genres:['Animation','Comedy','Family'],credit:['Director','Pete Docter'],tagline:'Meet the little voices inside your head.',synopsis:'Joy, Sadness and the other emotions help a young girl navigate a big life change and discover that every feeling matters.',cast:[['Amy Poehler','Joy'],['Phyllis Smith','Sadness'],['Bill Hader','Fear']],yt:'yRUAzGQ3nSY'},
  {id:'coco',title:'Coco',year:2017,type:'Movie',length:'1h 45m',rating:'PG',hue:25,genres:['Animation','Adventure','Family'],credit:['Directors','Lee Unkrich & Adrian Molina'],tagline:'The music lives on.',synopsis:'A young music lover visits a colourful world of family history, discovers his roots and learns the power of remembering those we love.',cast:[['Anthony Gonzalez','Miguel'],['Gael García Bernal','Hector'],['Benjamin Bratt','Ernesto de la Cruz']],yt:'Rvr68u6k5sI'},
  {id:'encanto',title:'Encanto',year:2021,type:'Movie',length:'1h 42m',rating:'PG',hue:115,genres:['Animation','Comedy','Family'],credit:['Director','Jared Bush'],tagline:'There is a little magic in all of us.',synopsis:'Mirabel sets out to help her wonderfully gifted family and protect the magical home they all share.',cast:[['Stephanie Beatriz','Mirabel'],['María Cecilia Botero','Abuela Alma'],['John Leguizamo','Bruno']],yt:'CaimKeDcudo'},
  {id:'lion-king',title:'The Lion King',year:1994,type:'Movie',length:'1h 28m',rating:'G',hue:45,genres:['Animation','Adventure','Family'],credit:['Director','Roger Allers'],tagline:'The circle of life.',synopsis:'Young Simba grows up on the savanna, finds loyal friends and learns what it means to care for his home and family.',cast:[['Matthew Broderick','Simba'],['Jonathan Taylor Thomas','Young Simba'],['James Earl Jones','Mufasa']],yt:'lFzVJEksoDY'},
  {id:'kung-fu-panda',title:'Kung Fu Panda',year:2008,type:'Movie',length:'1h 32m',rating:'PG',hue:5,genres:['Animation','Comedy','Adventure'],credit:['Directors','Mark Osborne & John Stevenson'],tagline:'Big dreams. Big panda.',synopsis:'Po, an enthusiastic panda, discovers that with patience, practice and help from friends, he can become a hero.',cast:[['Jack Black','Po'],['Dustin Hoffman','Shifu'],['Angelina Jolie','Tigress']],yt:'PXi3Mv6KMzY'},
  {id:'how-to-train-your-dragon',title:'How to Train Your Dragon',year:2010,type:'Movie',length:'1h 38m',rating:'PG',hue:215,genres:['Animation','Adventure','Family'],credit:['Director','Dean DeBlois'],tagline:'A friendship that changed everything.',synopsis:'A young Viking and a gentle dragon become friends and show their village that people and dragons can understand one another.',cast:[['Jay Baruchel','Hiccup'],['America Ferrera','Astrid'],['Gerard Butler','Stoick']],yt:'oKiYuIsPxYk'},
  {id:'my-neighbor-totoro',title:'My Neighbor Totoro',year:1988,type:'Movie',length:'1h 26m',rating:'G',hue:120,genres:['Anime','Animation','Family'],credit:['Director','Hayao Miyazaki'],tagline:'A gentle forest adventure awaits.',synopsis:'Sisters Satsuki and Mei explore the countryside, meet friendly forest spirits and find wonder in their new home.',cast:[['Noriko Hidaka','Satsuki'],['Chika Sakamoto','Mei'],['Hitoshi Takagi','Totoro']],yt:'92a7Hj0ijLs'},
  {id:'ponyo',title:'Ponyo',year:2008,type:'Movie',length:'1h 41m',rating:'G',hue:190,genres:['Anime','Animation','Family'],credit:['Director','Hayao Miyazaki'],tagline:'A little fish with a big dream.',synopsis:'A curious goldfish and a kind young boy form a special friendship in a magical seaside adventure.',cast:[['Yuria Nara','Ponyo'],['Hiroki Doi','Sosuke'],['Tomoko Yamaguchi','Lisa']],yt:'CsR3KVgBzSM'},
  {id:'spirited-away',title:'Spirited Away',year:2001,type:'Movie',length:'2h 5m',rating:'PG',hue:290,genres:['Anime','Animation','Adventure'],credit:['Director','Hayao Miyazaki'],tagline:'A brave heart can find its way home.',synopsis:'Chihiro discovers a magical spirit world and finds courage as she works to help her parents and return home.',cast:[['Rumi Hiiragi','Chihiro'],['Miyu Irino','Haku'],['Mari Natsuki','Yubaba']],yt:'ByXuk9QqQkk'},
  {id:'avatar-last-airbender',title:'Avatar: The Last Airbender',year:2005,type:'Series',length:'3 Seasons',rating:'TV-Y7',hue:190,genres:['Animation','Adventure','Family'],credit:['Created by','Michael Dante DiMartino & Bryan Konietzko'],tagline:'Four nations. One young hero.',synopsis:'Aang and his friends travel together, learn from one another and work to bring balance to their world.',cast:[['Zach Tyler Eisen','Aang'],['Mae Whitman','Katara'],['Jack De Sena','Sokka']],yt:'d1EnW4kn1kg'},
  {id:'hilda',title:'Hilda',year:2018,type:'Series',length:'3 Seasons',rating:'TV-Y7',hue:215,genres:['Animation','Adventure','Family'],credit:['Created by','Luke Pearson'],tagline:'A little curiosity leads to big adventures.',synopsis:'Hilda and her friends explore a magical wilderness, meet unusual creatures and solve problems with courage and kindness.',cast:[['Bella Ramsey','Hilda'],['Ameerah Falzon-Ojo','Frida'],['Oliver Nelson','David']],yt:'XCojP2Ubuto'}
];

/* Shelves shown on the home page */
const SHELVES = [
  {key:'top10',title:'Family Favorites',style:'ranked',ids:['finding-nemo','frozen','moana','zootopia','inside-out','coco','encanto','my-neighbor-totoro','ponyo','spirited-away']},
  {key:'trending',title:'Cartoons & Anime',ids:['avatar-last-airbender','hilda','ponyo','spirited-away']},
  {key:'movies',title:'Animated Movies',filter:m=>m.type==='Movie'},
  {key:'anime',title:'Anime Adventures',filter:m=>m.genres.includes('Anime')},
  {key:'series',title:'Kids Series',filter:m=>m.type==='Series'},
  {key:'comedy',title:'Funny & Feel-Good',filter:m=>m.genres.includes('Comedy')}
];
const HERO_IDS = ['finding-nemo','moana','my-neighbor-totoro','avatar-last-airbender'];
const CHIPS = ['All','Movies','Series','Animation','Anime','Adventure','Comedy','Family'];
/* ---------- helpers ---------- */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const byId = Object.fromEntries(CATALOG.map(m => [m.id, m]));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const initials = n => n.split(/\s+/).map(p => p[0]).filter(Boolean).slice(0,2).join('').toUpperCase();
const hueOf = str => { let h = 0; for (const c of str) h = (h * 31 + c.charCodeAt(0)) % 360; return h; };
const meta = m => `${m.year} · ${m.length} · ${m.rating} · HD`;

/* trailer thumbnails: try the sharpest, fall back step by step, then to the colour artwork */
const THUMBS = ['maxresdefault','hq720','sddefault','hqdefault'];
function thumbURL(m, step=0){ return `https://i.ytimg.com/vi/${m.yt}/${THUMBS[step]}.jpg`; }
function paintImage(img, m, wrap){
  let step = 0;
  img.addEventListener('load', () => {
    // YouTube returns a tiny 120px grey placeholder when a size does not exist
    if (img.naturalWidth <= 140 && step < THUMBS.length - 1){ step++; img.src = thumbURL(m, step); return; }
    wrap && wrap.classList.add('has-image');
  });
  img.addEventListener('error', () => {
    if (step < THUMBS.length - 1){ step++; img.src = thumbURL(m, step); }
    else img.remove();
  });
  img.src = thumbURL(m, 0);
}

/* ---------- storage (My List / Saved) ---------- */
const store = {
  get(k){ try { return new Set(JSON.parse(localStorage.getItem(k) || '[]')); } catch { return new Set(); } },
  set(k, set){ try { localStorage.setItem(k, JSON.stringify([...set])); } catch {} }
};
let myList = store.get('saxz:list');
let saved  = store.get('saxz:saved');

/* ---------- toast ---------- */
const toast = $('#toast');
function notify(msg){
  toast.textContent = msg; toast.classList.add('show');
  clearTimeout(notify.t); notify.t = setTimeout(() => toast.classList.remove('show'), 2200);
}

/* =========================================================
   Cards
   ========================================================= */
function makeCard(m, opts={}){
  const a = document.createElement('a');
  a.href = `#/title/${m.id}`;
  a.className = 'poster-card' + (opts.rank ? ' ranked' : '');
  a.style.setProperty('--h', m.hue);
  a.setAttribute('aria-label', `${m.title}, ${m.year}`);
  a.innerHTML = `
    ${opts.rank ? `<span class="rank-num" aria-hidden="true">${opts.rank}</span>` : ''}
    <div class="poster-art">
      <span class="art-title">${esc(m.title)}</span>
      <span class="art-badge">${m.type === 'Series' ? 'SERIES' : 'FILM'}</span>
      <span class="art-play" aria-hidden="true">▶</span>
    </div>
    <span class="poster-title">${esc(m.title)}</span>
    <span class="poster-year">${m.year} · ${esc(m.type)}</span>`;
  const art = $('.poster-art', a);
  const img = new Image(); img.alt = ''; img.loading = 'lazy'; img.decoding = 'async';
  art.prepend(img); paintImage(img, m, art);
  return a;
}

/* =========================================================
   Home
   ========================================================= */
function renderShelves(){
  const host = $('#shelves'); host.innerHTML = '';
  SHELVES.forEach(s => {
    const items = s.ids ? s.ids.map(id => byId[id]).filter(Boolean) : CATALOG.filter(s.filter);
    if (!items.length) return;
    const sec = document.createElement('section');
    sec.className = 'shelf reveal';
    sec.innerHTML = `
      <div class="section-heading"><h2>${esc(s.title)}</h2>
        <div class="shelf-tools">
          <button class="arrow" data-dir="-1" aria-label="Scroll left">‹</button>
          <button class="arrow" data-dir="1" aria-label="Scroll right">›</button>
          <button class="text-button see-all">See all</button>
        </div>
      </div>
      <div class="poster-row ${s.style === 'ranked' ? 'ranked-row' : ''}"></div>`;
    const row = $('.poster-row', sec);
    items.forEach((m, i) => row.appendChild(makeCard(m, s.style === 'ranked' ? {rank:i+1} : {})));
    $$('.arrow', sec).forEach(b => b.addEventListener('click', () =>
      row.scrollBy({left: b.dataset.dir * row.clientWidth * .85, behavior:'smooth'})));
    $('.see-all', sec).addEventListener('click', () => { location.hash = '#/shelf/' + s.key; });
    host.appendChild(sec);
  });
  observeReveals();
}

/* Hero carousel */
let heroIndex = 0, heroTimer = null;
function renderHero(){
  const slides = $('#heroSlides'), dots = $('#heroDots');
  slides.innerHTML = ''; dots.innerHTML = '';
  HERO_IDS.map(id => byId[id]).forEach((m, i) => {
    const s = document.createElement('div');
    s.className = 'hero-slide'; s.style.setProperty('--h', m.hue);
    const img = new Image(); img.alt = ''; img.decoding = 'async';
    s.appendChild(img); paintImage(img, m, s);
    slides.appendChild(s);
    const d = document.createElement('button');
    d.className = 'dot'; d.setAttribute('role', 'tab'); d.setAttribute('aria-label', `Show ${m.title}`);
    d.addEventListener('click', () => { setHero(i); startHeroTimer(); });
    dots.appendChild(d);
  });
  setHero(0); startHeroTimer();
  const hero = $('#hero');
  hero.addEventListener('mouseenter', () => clearInterval(heroTimer));
  hero.addEventListener('mouseleave', startHeroTimer);
}
function setHero(i){
  heroIndex = (i + HERO_IDS.length) % HERO_IDS.length;
  const m = byId[HERO_IDS[heroIndex]];
  $$('.hero-slide').forEach((s, n) => s.classList.toggle('active', n === heroIndex));
  $$('.dot').forEach((d, n) => d.classList.toggle('active', n === heroIndex));
  const c = $('#heroContent');
  c.classList.remove('swap'); void c.offsetWidth; c.classList.add('swap');
  c.innerHTML = `
    <span class="eyebrow">${m.type === 'Series' ? 'KEREN SERIES' : 'KEREN FAMILY PICK'}</span>
    <h1>${esc(m.title)}</h1>
    <div class="hero-meta"><span class="pill">${esc(m.rating)}</span><span>${m.year}</span><span>${esc(m.length)}</span><span>${esc(m.genres.slice(0,3).join(' • '))}</span></div>
    <p class="hero-description">${esc(m.tagline)}</p>
    <div class="hero-buttons">
      <button class="primary-button" data-act="play">▶ <span>Play Trailer</span></button>
      <button class="outline-button" data-act="details">ⓘ Details</button>
    </div>`;
  $('[data-act=play]', c).addEventListener('click', () => openTrailer(m));
  $('[data-act=details]', c).addEventListener('click', () => { location.hash = '#/title/' + m.id; });
}
function startHeroTimer(){
  clearInterval(heroTimer);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  heroTimer = setInterval(() => setHero(heroIndex + 1), 7500);
}

/* Genre chips */
function matchesChip(m, chip){
  switch (chip){
    case 'All': return true;
    case 'Movies': return m.type === 'Movie';
    case 'Series': return m.type === 'Series';
    default: return m.genres.includes(chip);
  }
}
function renderChips(host, active, onPick){
  host.innerHTML = '';
  CHIPS.forEach(c => {
    const b = document.createElement('button');
    b.className = 'chip' + (c === active ? ' active' : '');
    b.textContent = c; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', c === active);
    b.addEventListener('click', () => onPick(c));
    host.appendChild(b);
  });
}

/* =========================================================
   Browse / lists
   ========================================================= */
function showBrowse({kicker, title, sub, items, chip, emptyMsg}){
  $('#browseKicker').textContent = kicker;
  $('#browseTitle').textContent = title;
  $('#browseSub').textContent = sub || '';
  const grid = $('#browseGrid'); grid.innerHTML = ''; grid.classList.remove('clips');
  if (!items.length){
    grid.innerHTML = `<div class="empty-state"><div class="empty-ico">🎬</div><p>${esc(emptyMsg || 'Nothing here yet.')}</p><a class="primary-button inline" href="#/">Browse titles</a></div>`;
    return;
  }
  items.forEach(m => grid.appendChild(makeCard(m)));
}
function browseByChip(chip){
  const items = CATALOG.filter(m => matchesChip(m, chip));
  showBrowse({kicker:'BROWSE', title: chip === 'All' ? 'All Titles' : chip, sub:`${items.length} titles — every one has a trailer you can play here`, items});
  renderChips($('#browseChips'), chip, c => { location.hash = '#/browse/' + encodeURIComponent(c); });
  $('#browseChips').parentElement.classList.remove('hidden');
}

/* =========================================================
   Details
   ========================================================= */
let current = null;
function renderDetails(m){
  current = m;
  document.title = `${m.title} — KEREN`;
  $('#detailTitle').textContent = m.title;
  $('#detailMeta').textContent = meta(m);
  $('#detailSynopsis').textContent = m.synopsis;
  $('#detailCredit').innerHTML = `<b>${esc(m.credit[0])}:</b> ${esc(m.credit[1])}`;
  $('#detailBadge').textContent = m.type === 'Series' ? 'Binge-worthy series' : 'Popular right now';
  $('#detailGenres').innerHTML = m.genres.map(g => `<a href="#/browse/${encodeURIComponent(g)}">${esc(g)}</a>`).join('');
  const art = $('#detailArt'); art.innerHTML = ''; art.style.setProperty('--h', m.hue); art.classList.remove('has-image');
  const img = new Image(); img.alt = `${m.title} trailer preview`; art.appendChild(img); paintImage(img, m, art);
  syncButtons();

  const row = $('#castRow'); row.innerHTML = '';
  m.cast.forEach(([name, role]) => {
    const card = document.createElement('div'); card.className = 'cast-card';
    card.innerHTML = `<div class="cast-avatar" style="--h:${hueOf(name)}" aria-hidden="true">${esc(initials(name))}</div><strong>${esc(name)}</strong><span>${esc(role || 'Cast')}</span>`;
    row.appendChild(card);
  });

  const sim = $('#similarRow'); sim.innerHTML = '';
  CATALOG.filter(x => x.id !== m.id)
    .map(x => ({x, score: x.genres.filter(g => m.genres.includes(g)).length + (x.type === m.type ? .5 : 0)}))
    .filter(o => o.score > 0).sort((a, b) => b.score - a.score).slice(0, 10)
    .forEach(o => sim.appendChild(makeCard(o.x)));
}
function syncButtons(){
  if (!current) return;
  const inList = myList.has(current.id), inSaved = saved.has(current.id);
  const lb = $('#listButton'); lb.textContent = inList ? '✓' : '＋'; lb.classList.toggle('is-added', inList);
  $('#downloadButton').classList.toggle('is-added', inSaved);
  $('#trailerList').textContent = inList ? '✓ In My List' : '＋ My List';
}
function toggleList(m){
  if (myList.has(m.id)){ myList.delete(m.id); notify('Removed from My List'); }
  else { myList.add(m.id); notify('Added to My List'); }
  store.set('saxz:list', myList); syncButtons();
}
function toggleSaved(m){
  if (saved.has(m.id)){ saved.delete(m.id); notify('Removed from Saved'); }
  else { saved.add(m.id); notify('Saved for later'); }
  store.set('saxz:saved', saved); syncButtons();
}
$('#listButton').addEventListener('click', () => current && toggleList(current));
$('#downloadButton').addEventListener('click', () => current && toggleSaved(current));
$('#detailPlay').addEventListener('click', () => current && openTrailer(current));
$('#bigPlay').addEventListener('click', () => current && openTrailer(current));
$('#backHome').addEventListener('click', () => {
  if (navCount > 1) history.back(); else location.hash = '#/';
});
$('#shareButton').addEventListener('click', async () => {
  if (!current) return;
  const data = {title: current.title, text: `Watch the trailer for ${current.title} on KEREN`, url: location.href};
  try {
    if (navigator.share) await navigator.share(data);
    else { await navigator.clipboard.writeText(location.href); notify('Link copied'); }
  } catch { /* cancelled */ }
});

/* =========================================================
   Trailer player — plays INSIDE the site
   ========================================================= */
const trailerModal = $('#trailerModal');
let player = null, ytApi = null, trailerTitle = null, lastFocus = null;

function loadYouTubeAPI(){
  if (ytApi) return ytApi;
  ytApi = new Promise(resolve => {
    if (window.YT && window.YT.Player) return resolve(true);
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { prev && prev(); resolve(true); };
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
    setTimeout(() => resolve(!!(window.YT && window.YT.Player)), 6000);
  });
  return ytApi;
}
function showTrailerError(m, code){
  const box = $('#trailerError');
  const local = location.protocol === 'file:';
  $('#trailerErrorText').textContent = local
    ? 'YouTube blocks embedded players on pages opened straight from a file. Run the site from a web server (e.g. VS Code “Live Server”) or host it online and the trailer will play right here.'
    : 'This trailer could not load inside the page right now. Check your connection and try again.';
  $('#youtubeFallback').href = `https://www.youtube.com/watch?v=${m.yt}`;
  box.classList.remove('hidden');
}
function plainIframe(m){
  const wrap = $('#trailerFrameWrap'); wrap.innerHTML = '';
  const f = document.createElement('iframe');
  f.src = `https://www.youtube-nocookie.com/embed/${m.yt}?autoplay=1&rel=0&playsinline=1&modestbranding=1`;
  f.title = `${m.title} trailer`;
  f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen';
  f.referrerPolicy = 'strict-origin-when-cross-origin';
  f.allowFullscreen = true;
  wrap.appendChild(f);
}
async function openTrailer(m){
  trailerTitle = m; lastFocus = document.activeElement;
  $('#trailerHeading').textContent = `${m.title} — Trailer`;
  $('#trailerMeta').textContent = `${m.year} · ${m.length} · ${m.genres.slice(0,3).join(' • ')}`;
  $('#trailerError').classList.add('hidden');
  $('#trailerFrameWrap').innerHTML = '<div id="ytPlayer"></div>';
  $('#youtubeFallback').href = `https://www.youtube.com/watch?v=${m.yt}`;
  trailerModal.classList.remove('hidden');
  document.body.classList.add('trailer-open');
  $('#closeTrailer').focus({preventScroll:true});
  syncButtons(); renderUpNext(m);
  clearInterval(heroTimer);

  const apiOK = await loadYouTubeAPI();
  if (trailerTitle !== m || trailerModal.classList.contains('hidden')) return;   // closed / switched meanwhile
  if (!apiOK){ plainIframe(m); return; }
  try {
    const vars = {autoplay:1, rel:0, playsinline:1, modestbranding:1};
    if (/^https?:$/.test(location.protocol)) vars.origin = location.origin;
    player = new YT.Player('ytPlayer', {
      host: 'https://www.youtube-nocookie.com',
      videoId: m.yt, width: '100%', height: '100%', playerVars: vars,
      events: {
        onReady: e => { try { e.target.playVideo(); } catch {} },
        onError: () => showTrailerError(m)
      }
    });
  } catch { plainIframe(m); }
}
function closeTrailer(){
  if (trailerModal.classList.contains('hidden')) return;
  try { player && player.destroy && player.destroy(); } catch {}
  player = null; trailerTitle = null;
  $('#trailerFrameWrap').innerHTML = '<div id="ytPlayer"></div>';   // stops playback
  trailerModal.classList.add('hidden');
  document.body.classList.remove('trailer-open');
  if (lastFocus && lastFocus.focus) try { lastFocus.focus({preventScroll:true}); } catch {}
  if (!$('#homeView').classList.contains('hidden')) startHeroTimer();
}
function renderUpNext(m){
  const host = $('#upNext'); host.innerHTML = '';
  CATALOG.filter(x => x.id !== m.id)
    .map(x => ({x, s: x.genres.filter(g => m.genres.includes(g)).length + Math.random() * .4}))
    .sort((a, b) => b.s - a.s).slice(0, 8).forEach(({x}) => {
      const b = document.createElement('button'); b.className = 'upnext-card'; b.style.setProperty('--h', x.hue);
      b.innerHTML = `<span class="un-art"></span><span class="un-title">${esc(x.title)}</span>`;
      const art = $('.un-art', b); const img = new Image(); img.alt = ''; img.loading = 'lazy'; art.appendChild(img); paintImage(img, x, art);
      b.addEventListener('click', () => { try { player && player.destroy && player.destroy(); } catch {} player = null; openTrailer(x); });
      host.appendChild(b);
    });
}
$('#closeTrailer').addEventListener('click', closeTrailer);
trailerModal.addEventListener('click', e => { if (e.target === trailerModal) closeTrailer(); });
$('#trailerDetails').addEventListener('click', () => { const m = trailerTitle; closeTrailer(); if (m) location.hash = '#/title/' + m.id; });
$('#trailerList').addEventListener('click', () => trailerTitle && toggleList(trailerTitle));

/* =========================================================
   Search
   ========================================================= */
const searchModal = $('#searchModal'), searchInput = $('#searchInput'), searchResults = $('#searchResults');
function openSearch(){ searchModal.classList.remove('hidden'); searchInput.value = ''; renderSearch(''); setTimeout(() => searchInput.focus(), 40); }
function closeSearch(){ searchModal.classList.add('hidden'); }
function renderSearch(q){
  q = q.trim().toLowerCase(); searchResults.innerHTML = '';
  let list;
  if (!q){
    searchResults.innerHTML = '<p class="search-hint">Popular right now</p>';
    list = ['finding-nemo','moana','avatar-last-airbender','my-neighbor-totoro','hilda'].map(id => byId[id]);
  } else {
    list = CATALOG.map(m => {
      const t = m.title.toLowerCase();
      let s = 0;
      if (t.startsWith(q)) s = 4; else if (t.includes(q)) s = 3;
      else if (m.cast.some(c => c[0].toLowerCase().includes(q))) s = 2;
      else if (m.genres.some(g => g.toLowerCase().includes(q)) || m.type.toLowerCase().includes(q) || String(m.year) === q) s = 1;
      return {m, s};
    }).filter(o => o.s).sort((a, b) => b.s - a.s).map(o => o.m);
  }
  if (!list.length){ searchResults.innerHTML = '<p class="empty-message">No titles found. Try another name, actor or genre.</p>'; return; }
  list.forEach(m => {
    const row = document.createElement('div'); row.className = 'search-result'; row.style.setProperty('--h', m.hue); row.tabIndex = 0;
    const star = q && m.cast.find(c => c[0].toLowerCase().includes(q) && !m.title.toLowerCase().includes(q));
    row.innerHTML = `<span class="sr-art"></span><span class="sr-text"><b>${esc(m.title)}</b><small>${m.year} · ${esc(m.type)} · ${esc(m.genres.slice(0,2).join(' / '))}${star ? ' · with ' + esc(star[0]) : ''}</small></span><button class="sr-play" aria-label="Play ${esc(m.title)} trailer">▶</button>`;
    const art = $('.sr-art', row); const img = new Image(); img.alt = ''; img.loading = 'lazy'; art.appendChild(img); paintImage(img, m, art);
    const go = () => { closeSearch(); location.hash = '#/title/' + m.id; };
    row.addEventListener('click', e => { if (e.target.closest('.sr-play')){ closeSearch(); openTrailer(m); } else go(); });
    row.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    searchResults.appendChild(row);
  });
}
$('#searchToggle').addEventListener('click', openSearch);
$('#closeSearch').addEventListener('click', closeSearch);
searchModal.addEventListener('click', e => { if (e.target === searchModal) closeSearch(); });
searchInput.addEventListener('input', () => renderSearch(searchInput.value));

/* =========================================================
   Router (hash based — works on any host, even without a server)
   ========================================================= */
const views = {home: $('#homeView'), browse: $('#browseView'), details: $('#detailsView')};
function show(name){
  Object.entries(views).forEach(([k, el]) => el.classList.toggle('hidden', k !== name));
  window.scrollTo(0, 0);
  if (name === 'home') startHeroTimer(); else clearInterval(heroTimer);
}
function setNav(key){
  $$('[data-nav]').forEach(b => b.classList.toggle('active', b.dataset.nav === key));
  $$('[data-top]').forEach(a => a.classList.toggle('active', a.dataset.top === key));
}
let navCount = 0;
function route(){
  navCount++;
  const parts = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
  const [a, b] = parts;
  document.title = 'KEREN — Cartoons & Anime for Kids';
  closeSearch();
  if (a === 'title' && byId[b]){ renderDetails(byId[b]); show('details'); setNav(''); return; }
  if (a === 'list'){ show('browse'); setNav('list');
    showBrowse({kicker:'YOUR COLLECTION', title:'My List', sub:`${myList.size} saved`, items:[...myList].map(id => byId[id]).filter(Boolean), emptyMsg:'Your list is empty. Tap ＋ on any title to add it.'});
    $('#browseChips').parentElement.classList.add('hidden'); return; }
  if (a === 'downloads'){ show('browse'); setNav('downloads');
    showBrowse({kicker:'YOUR COLLECTION', title:'Saved for Later', sub:`${saved.size} saved`, items:[...saved].map(id => byId[id]).filter(Boolean), emptyMsg:'Nothing saved yet. Tap the cloud icon on any title.'});
    $('#browseChips').parentElement.classList.add('hidden'); return; }
  if (a === 'clips'){ show('browse'); setNav('clips'); renderClips(); return; }
  if (a === 'shelf'){
    const s = SHELVES.find(x => x.key === b);
    if (s){ show('browse'); setNav('');
      const items = s.ids ? s.ids.map(id => byId[id]) : CATALOG.filter(s.filter);
      showBrowse({kicker:'COLLECTION', title:s.title, sub:`${items.length} titles`, items});
      $('#browseChips').parentElement.classList.add('hidden'); return; }
  }
  if (a === 'browse'){ show('browse'); setNav(b === 'Movies' ? 'movies' : b === 'Series' ? 'series' : ''); browseByChip(CHIPS.includes(b) || b ? b : 'All'); return; }
  show('home'); setNav('home');
}
function renderClips(){
  $('#browseKicker').textContent = 'WATCH HERE';
  $('#browseTitle').textContent = 'Trailers';
  $('#browseSub').textContent = 'Tap any card to play the trailer without leaving KEREN';
  $('#browseChips').parentElement.classList.add('hidden');
  const grid = $('#browseGrid'); grid.innerHTML = ''; grid.classList.add('clips');
  CATALOG.forEach(m => {
    const b = document.createElement('button'); b.className = 'clip-card'; b.style.setProperty('--h', m.hue);
    b.innerHTML = `<span class="clip-art"><span class="clip-title-fallback">${esc(m.title)}</span><span class="clip-play">▶</span></span><span class="clip-info"><b>${esc(m.title)}</b><small>${m.year} · ${esc(m.type)}</small></span>`;
    const art = $('.clip-art', b); const img = new Image(); img.alt = ''; img.loading = 'lazy'; art.prepend(img); paintImage(img, m, art);
    b.addEventListener('click', () => openTrailer(m));
    grid.appendChild(b);
  });
}
window.addEventListener('hashchange', route);

/* bottom nav + top links */
$$('[data-nav]').forEach(b => b.addEventListener('click', () => {
  const k = b.dataset.nav;
  const target = {home:'#/', list:'#/list', downloads:'#/downloads', clips:'#/clips'}[k];
  if (location.hash === target || (k === 'home' && !location.hash)) route(); else location.hash = target;
}));
$('#brandHome').addEventListener('click', e => { if (!location.hash || location.hash === '#/') { e.preventDefault(); route(); } });

/* =========================================================
   Misc: scroll effects, reveal animation, keyboard
   ========================================================= */
const topbar = $('#topbar');
addEventListener('scroll', () => topbar.classList.toggle('solid', scrollY > 30), {passive:true});
let io;
function observeReveals(){
  if (!('IntersectionObserver' in window)) { $$('.reveal').forEach(el => el.classList.add('in')); return; }
  io = io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin:'0px 0px -8% 0px'});
  $$('.reveal:not(.in)').forEach(el => io.observe(el));
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape'){ closeSearch(); closeTrailer(); return; }
  const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);
  if (e.key === '/' && !typing){ e.preventDefault(); openSearch(); }
  if (!typing && trailerModal.classList.contains('hidden') && !$('#homeView').classList.contains('hidden')){
    if (e.key === 'ArrowRight') { setHero(heroIndex + 1); startHeroTimer(); }
    if (e.key === 'ArrowLeft')  { setHero(heroIndex - 1); startHeroTimer(); }
  }
});

/* ---------- boot ---------- */
renderHero();
renderChips($('#chips'), 'All', c => { location.hash = '#/browse/' + encodeURIComponent(c); });
renderShelves();
route();