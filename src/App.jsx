import React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'

// --- Demo data (replace with your own later) ---
const posts = [
  {
    slug: 'blue-hour-in-the-alps',
    title: 'Chasing blue hour in the Alps',
    date: '2025-01-12',
    readTime: 4,
    hero: 'https://images.unsplash.com/photo-1464013778555-8e723c2f01f8?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'A quick itinerary for sunrise vistas around Zermatt, with tips on staying warm while keeping your fingers camera-ready.',
    images: [
      'https://images.unsplash.com/photo-1549880181-56a44cf4a9a7?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    ],
    content: `We chased the blue hour from Gornergrat to Rothorn. Tips: gloves with liners, a fast 35mm, and spare batteries.`,
    tags: ['Switzerland','Mountains'],
  },
  {
    slug: 'stairs-of-positano',
    title: 'The stairs of Positano',
    date: '2024-10-04',
    readTime: 3,
    hero: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Leg day, but make it coastal. Our favorite overlooks and a lesser-known gelato stop.',
    images: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop',
    ],
    content: `Positano rewards every step. We mapped a gentle loop from the marina to hilltop overlooks.`,
    tags: ['Italy','Coast'],
  },
  {
    slug: '48-hours-in-page-az',
    title: '48 hours in Page, AZ',
    date: '2024-05-22',
    readTime: 5,
    hero: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Slot canyons, sunrise boats, and the one lens we kept reaching for.',
    images: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop',
    ],
    content: `Two days is enough for a taste: Antelope Canyon, Horseshoe Bend, and Lake Powell sunrise.`,
    tags: ['Utah/Arizona','Desert'],
  },
]

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <span className="brand-dot" aria-hidden="true"></span>
          <span>Two on the Move</span>
        </Link>
        <div className="menu">
          <Link className="hide-on-mobile" to="/photos">Photos</Link>
          <Link className="hide-on-mobile" to="/posts">Posts</Link>
          <Link className="hide-on-mobile" to="/about">About</Link>
          <Link className="btn primary" to="/subscribe">Subscribe</Link>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer id="contact" className="container">
      <div className="footer-grid">
        <div>
          <div className="brand" style={{ marginBottom: 8 }}>
            <span className="brand-dot" aria-hidden="true"></span>
            <span>Two on the Move</span>
          </div>
          <p className="muted">© {new Date().getFullYear()} Two on the Move. All rights reserved.</p>
        </div>
        <div>
          <strong>Contact</strong>
          <p className="muted">Email: hello@example.com</p>
        </div>
        <div>
          <strong>Elsewhere</strong>
          <p className="muted"><a href="#">Instagram</a> · <a href="#">YouTube</a> · <a href="#">X</a></p>
        </div>
      </div>
    </footer>
  )
}

function Hero() {
  return (
    <header className="hero container">
      <div className="hero-card">
        <div className="hero-media" aria-hidden="true">
          <img 
          loading="eager" 
          alt="Sunrise over mountains" 
          src="/images/thingvalir_nature.jpeg" />
        </div>
        <div className="hero-content">
          <span className="kicker">Travel Photography & Stories</span>
          <h1>Our favorite places, through our lenses</h1>
          <p className="sub">We are a couple exploring the world one trip at a time. Minimal words, maximum images.</p>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            <Link className="btn primary" to="/photos">Browse Photos</Link>
            <Link className="btn" to="/posts">Read Latest Posts</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function Masonry({ items }) {
  return (
    <div className="masonry">
      {items.map((item, i) => (
        <figure key={i}>
          {item.to ? <Link to={item.to}><img loading="lazy" src={item.src} alt={item.alt} /></Link> : <img loading="lazy" src={item.src} alt={item.alt} />}
          {item.caption && <figcaption>{item.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
}

function PostCards() {
  return (
    <section id="posts" className="section container">
      <h2>Latest Posts</h2>
      <div className="posts">
        {posts.map(p => (
          <Link key={p.slug} to={`/posts/${p.slug}`} className="card">
            <img alt={p.title} loading="lazy" src={p.hero} />
            <div className="pad">
              <div className="tag">{new Date(p.date).toLocaleDateString()} • {p.readTime} min read</div>
              <h3 className="post-title">{p.title}</h3>
              <p className="muted">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function Home() {
  const featured = [
    { src:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop', alt:'Desert dunes', caption:'Sahara • Golden hour lines', to:'/posts/48-hours-in-page-az' },
    { src:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop', alt:'Rocky coastline', caption:'Amalfi • Coastline textures', to:'/posts/stairs-of-positano' },
    { src:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600&auto=format&fit=crop', alt:'Foggy valley', caption:'Dolomites • Low clouds', to:'/posts/blue-hour-in-the-alps' },
    { src:'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop', alt:'City skyline', caption:'Tokyo • Blue hour' },
    { src:'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop', alt:'River canyon', caption:'Utah • River bend', to:'/posts/48-hours-in-page-az' },
    { src:'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop', alt:'Northern lights', caption:'Lapland • Lights over glass' },
  ]
  return (
    <>
      <Hero />
      <section id="photos" className="section container">
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:16, marginBottom:8 }}>
          <h2>Featured Photos</h2>
          <span className="chip">Click a photo to open its post</span>
        </div>
        <Masonry items={featured} />
      </section>
      <PostCards />
      <About />
      <Subscribe />
    </>
  )
}

function Posts() {
  return (
    <section className="section container">
      <h2>All Posts</h2>
      <div className="posts">
        {posts.map(p => (
          <Link key={p.slug} to={`/posts/${p.slug}`} className="card">
            <img alt={p.title} loading="lazy" src={p.hero} />
            <div className="pad">
              <div className="tag">{new Date(p.date).toLocaleDateString()} • {p.readTime} min read</div>
              <h3 className="post-title">{p.title}</h3>
              <p className="muted">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function Post() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if (!post) {
    return (
      <section className="container section">
        <p>Post not found. <Link to="/posts">Back to posts</Link></p>
      </section>
    )
  }
  return (
    <article className="container section">
      <header className="hero-card" style={{ marginBottom: 24 }}>
        <div className="hero-media">
          <img src={post.hero} alt={post.title} />
        </div>
        <div className="hero-content">
          <span className="kicker">{post.tags?.join(' • ')}</span>
          <h1>{post.title}</h1>
          <p className="muted">{new Date(post.date).toLocaleDateString()} • {post.readTime} min read</p>
        </div>
      </header>
      <section>
        <p className="muted" style={{ marginBottom: 16 }}>{post.excerpt}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
      </section>
      <section style={{ marginTop: 32 }}>
        <h2>Photo set</h2>
        <div className="masonry">
          {post.images.map((src, i) => (
            <figure key={i}>
              <img src={src} alt={`${post.title} ${i+1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
    </article>
  )
}

function Photos() {
  const items = [
    { src:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop', alt:'Desert dunes', caption:'Sahara • Golden hour lines' },
    { src:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop', alt:'Coast', caption:'Amalfi • Coastline textures' },
    { src:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600&auto=format&fit=crop', alt:'Dolomites', caption:'Dolomites • Low clouds' },
  ]
  return (
    <section className="section container">
      <h2>Gallery</h2>
      <Masonry items={items} />
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section container">
      <div className="grid">
        <div className="card" style={{ gridColumn: 'span 7' }}>
          <div className="pad">
            <h2>About us</h2>
            <p>We are two photographers who love clean compositions, natural light, and simple itineraries.</p>
            <p className="muted">We travel light and shoot lighter.</p>
          </div>
        </div>
        <div className="card" style={{ gridColumn: 'span 5' }}>
          <div className="pad">
            <h2>Quick links</h2>
            <ul style={{ margin:0, paddingLeft:18 }}>
              <li><a href="#/photos">Latest photo sets</a></li>
              <li><a href="#/posts">Most recent blog posts</a></li>
              <li><a href="#/subscribe">Newsletter signup</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Subscribe() {
  const onSubmit = (e) => { e.preventDefault(); alert('Thanks for subscribing! (Hook this up to your email tool)') }
  return (
    <section id="subscribe" className="section container">
      <div className="card">
        <div className="pad">
          <h2>Subscribe for new photo drops</h2>
          <p className="muted">No spam. Just a note when a fresh gallery or post is live.</p>
          <form onSubmit={onSubmit} className="grid" style={{ gridTemplateColumns:'1fr', gap:10 }}>
            <input required type="email" name="email" placeholder="Your email" aria-label="Email" style={{ padding:'14px 16px', borderRadius:10, border:'1px solid var(--border)', background:'var(--elev)', color:'var(--text)' }} />
            <button className="btn primary" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:slug" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
