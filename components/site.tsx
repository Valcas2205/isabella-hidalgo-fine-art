'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { PRODUCTS, formatPrice, type Product } from '@/lib/products'

const logo = '/logo1.png'

/* ─── HEADER ─────────────────────────────────────────────── */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <Link href="/" aria-label="Isabella Hidalgo home">
        <img src={logo} alt="Isabella Hidalgo Fine Art" className="header-logo" />
      </Link>
      <nav className={menuOpen ? 'nav-open' : ''}>
        <Link href="/" onClick={() => setMenuOpen(false)}>SHOP</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
        <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
      </nav>
      <div className="header-actions">
        <Link href="#contact" className="account">Log In</Link>
        <span className="cart-count">0</span>
      </div>
    </header>
  )
}

/* ─── FOOTER ─────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <img src={logo} alt="Isabella Hidalgo Fine Art" className="footer-logo" />
        <div className="social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
          <a href="mailto:hola@isabellahidalgo.com">HOLA@ISABELLAHIDALGO.COM</a>
        </div>
        <div className="newsletter">
          <p>Letters from the studio</p>
          <div className="newsletter-row">
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <a href="#refund">Refund Policy</a>
          <a href="#terms">Terms &amp; Conditions</a>
          <a href="#shipping">Shipping Policy</a>
          <a href="#accessibility">Accessibility Statement</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <span>© 2026 by Isabella Hidalgo Fine Art. All rights reserved.</span>
      </div>
    </footer>
  )
}

/* ─── HERO ───────────────────────────────────────────────── */
const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C6D2587D-D281-4227-8EA1-1A3543C9966E_4_5005_c_edited-1VU5IkJzMbpdW56TY9CFi5sZuKjANo.avif'

export function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-wash" />
      <div className="hero-content">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Photoroom-UVlbKj7T4gFN6HRxBWAXiAi9m4QzJd.png"
          alt="Isabella Hidalgo"
        />
      </div>
    </section>
  )
}

/* ─── FEATURE SPLIT ─────────────────────────────────────── */
const paintingImg = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448740_55119b2b2e0749e59ea69013bd5bd05f~mv2-nwit46h9WqPnld6MXNcroO0RrpgZ84.avif'
const handImg = '/fotomano.avif'

export function FeatureSplit() {
  return (
    <section className="feature-split">
      {/* Left: painting + blue overlay card */}
      <div className="feature-left">
        <img src={paintingImg} alt="11 Meters of Sky" className="feature-painting" />
        <div className="feature-painting-label">
          <span>11 METERS OF SKY</span>
          <span>1/11</span>
        </div>
        <div className="feature-blue-card">
          <p>visual artist exploring attention, perception, and the small moments that shape a life.</p>
        </div>
      </div>
      {/* Right: photo of hand with text overlay */}
      <div className="feature-right">
        <img src={handImg} alt="Isabella hand" />
        <div className="feature-right-overlay">
          <p>What becomes visible when we slow down enough to notice?</p>
          <Link href="/#shop" className="btn-blue">MAKE IT YOURS</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── ABOUT MINI (nueva sección 2) ──────────────────────── */
export function AboutMini() {
  return (
    <section className="about-mini">
      <div className="about-mini-inner">
        <small>ABOUT</small>
        <div className="about-mini-text">
          <p>We live surrounded by things asking for our attention.</p>
          <p>Yet some of the most meaningful experiences happen in the moments we almost miss.</p>
          <p>My work is an ongoing exploration of attention, perception, and the quiet ways we make sense of being alive.</p>
          <p>Through painting, observation, and contemplative practice, I create spaces that invite a slower encounter with the world and with ourselves.</p>
          <p className="about-mini-sig">_isa</p>
        </div>
        <div className="about-mini-foot">
          <Link href="/about" className="btn-blue">LEARN MORE</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── SHOP SLIDER (existente) ────────────────────────────── */
export function ShopSlider() {
  const [index, setIndex] = useState(0)
  const total = PRODUCTS.length
  const pageCount = Math.ceil(total / 3)
  const currentPage = Math.floor(index / 3) + 1
  const shown = PRODUCTS.slice(index, index + 3).concat(
    PRODUCTS.slice(0, Math.max(0, index + 3 - total))
  )
  const prev = () => setIndex((index - 3 + total) % total)
  const next = () => setIndex((index + 3) % total)
  return (
    <section className="shop" id="shop">
      <div className="section-heading">
        <div>
          <small>SHOP</small>
          <h2>See what&apos;s available</h2>
        </div>
      </div>
      <div className="product-grid">
        {shown.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      <div className="slider-nav">
        <button onClick={prev} aria-label="Previous"><ArrowLeft size={16} /></button>
        <span className="slider-pagination">{currentPage} / {pageCount}</span>
        <button onClick={next} aria-label="Next"><ArrowRight size={16} /></button>
      </div>
      <div className="shop-view-all">
        <Link href="/" className="world-link">VIEW ALL</Link>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false)
  const buy = async () => {
    setAdded(true)
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product.id, quantity: 1 }),
    })
    const data = await response.json()
    if (data.url) window.location.assign(data.url)
  }
  return (
    <article className="product">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <em>{product.description}</em>
      <h3>{product.name}</h3>
      <div className="product-foot">
        <span>{formatPrice(product.priceInCents)}</span>
        <button onClick={buy}>{added ? 'OPENING CHECKOUT' : 'ADD TO BAG'}</button>
      </div>
    </article>
  )
}

/* ─── WORLD TO LIVE WITH (nueva sección 3) ──────────────── */
export function WorldToLiveWith() {
  return (
    <section className="world-section">
      <small className="world-label">A WORLD TO LIVE WITH</small>
      <div className="world-grid">
        <div className="world-card">
          <h3>Find your piece</h3>
          <p>One-of-a-kind works made from colour, memory, and the beauty found in everyday life.</p>
          <Link href="/" className="world-link">VIEW ORIGINALS</Link>
        </div>
        <div className="world-divider" />
        <div className="world-card">
          <h3>Commissions.</h3>
          <p>A personal painting created in conversation with your space, your story, or a feeling you would like to live with.</p>
          <Link href="#contact" className="world-link">ENQUIRE</Link>
        </div>
        <div className="world-divider" />
        <div className="world-card">
          <h3>Art experiences.</h3>
          <p>Creative encounters designed to awaken curiosity, imagination, and a deeper connection with the world around us.</p>
          <Link href="/about" className="world-link">DISCOVER</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── VIDEO HERO (nueva sección 4) ──────────────────────── */
export function VideoHero() {
  return (
    <section className="video-hero">
      <video
        className="video-bg"
        src="/file.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="video-overlay" />
      <div className="video-content">
        <small className="video-label">LIMITED EDITION</small>
        <h2 className="video-title">FINE ART<br />PRINTS</h2>
        <p className="video-sub">
          Limited editions created from selected paintings, made to bring colour and presence into your home.
        </p>
        <Link href="/#shop" className="btn-blue btn-blue--outline">SHOP THE COLLECTION</Link>
      </div>
    </section>
  )
}

/* ─── CONTACT (existente) ────────────────────────────────── */
export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-copy">
        <small>GET IN TOUCH</small>
        <h2>CONTACT</h2>
        <p>For original painting enquiries, commissions, exhibitions, collaborations, or press, please get in touch.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <label>First name *<input required /></label>
            <label>Last name<input /></label>
          </div>
          <div className="form-row">
            <label>Email *<input type="email" required /></label>
            <label>Phone<input /></label>
          </div>
          <label>Additional information<textarea rows={4} /></label>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="contact-photo">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%281%29-2kY4no9CMPTnW6qKTQsbHwUBb52wBF.avif" alt="Isabella Hidalgo in her studio" />
      </div>
    </section>
  )
}

/* ─── CART ───────────────────────────────────────────────── */
function Cart({ onClose }: { onClose: () => void }) {
  return (
    <aside className="cart" aria-label="Shopping bag">
      <button className="close" onClick={onClose} aria-label="Close shopping bag"><X /></button>
      <small>YOUR BAG</small>
      <h2>Your bag is empty</h2>
      <Link href="/" onClick={onClose}>CONTINUE SHOPPING</Link>
    </aside>
  )
}

export { logo }
