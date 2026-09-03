'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, ShoppingBag, UserRound, X } from 'lucide-react'
import { PRODUCTS, formatPrice, type Product } from '@/lib/products'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PtNTvrjNEmybKxbRfIjneSN3w4CoDJ.png'
const hero = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C6D2587D-D281-4227-8EA1-1A3543C9966E_4_5005_c_edited-1VU5IkJzMbpdW56TY9CFi5sZuKjANo.avif'

export function Header() {
  const [open, setOpen] = useState(false)
  return <><header className="site-header"><Link href="/" aria-label="Isabella Hidalgo home"><img src={logo} alt="Isabella Hidalgo Fine Art" /></Link><nav><Link href="/">SHOP</Link><Link href="/about">ABOUT</Link><Link href="/faq">FAQ</Link></nav><div className="header-actions"><Link href="#contact" className="account"><UserRound size={22} /> <span>Log In</span></Link><button aria-label="Open shopping bag" onClick={() => setOpen(true)}><ShoppingBag size={24} /><b>{0}</b></button></div></header>{open && <Cart onClose={() => setOpen(false)} />}</>
}

export function Footer() { return <footer><div className="footer-top"><img src={logo} alt="Isabella Hidalgo Fine Art" className="footer-logo"/><div className="social"><a href="#instagram">INSTAGRAM</a><a href="#facebook">FACEBOOK</a><a href="#youtube">YOUTUBE</a><a href="mailto:hola@isabellahidalgo.com">HOLA@ISABELLAHIDALGO.COM</a></div><div className="newsletter"><p>Letters from the studio</p><input type="email" placeholder="Enter your email" aria-label="Email"/><button>SUBSCRIBE</button></div></div><div className="footer-bottom"><div><a href="#refund">Refund Policy</a><a href="#terms">Terms &amp; Conditions</a><a href="#shipping">Shipping Policy</a><a href="#accessibility">Accessibility Statement</a><a href="#privacy">Privacy Policy</a></div><span>© 2026 by Isabella Hidalgo. Powered and secured by Wix.</span></div></footer> }

export function Hero() { return <section className="hero" style={{ backgroundImage: `url(${hero})` }}><div className="hero-wash"/><div className="hero-content"><span className="script">Isabella</span><span className="script">Hidalgo</span></div></section> }

export function ShopSlider() { const [index, setIndex] = useState(0); const shown = PRODUCTS.slice(index, index + 3).concat(PRODUCTS.slice(0, Math.max(0, index + 3 - PRODUCTS.length))) ; return <section className="shop"><div className="section-heading"><div><small>SHOP</small><h2>See what&apos;s available</h2></div><div className="slider-buttons"><button onClick={() => setIndex((index + PRODUCTS.length - 1) % PRODUCTS.length)} aria-label="Previous"><ArrowLeft /></button><button onClick={() => setIndex((index + 1) % PRODUCTS.length)} aria-label="Next"><ArrowRight /></button></div></div><div className="product-grid">{shown.map((product) => <ProductCard key={product.id} product={product}/>)}</div></section> }

function ProductCard({ product }: { product: Product }) { const [added, setAdded] = useState(false); const buy = async () => { setAdded(true); const response = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ productId: product.id, quantity: 1 }) }); const data = await response.json(); if (data.url) window.location.assign(data.url); }; return <article className="product"><div className="product-image"><img src={product.image} alt={product.name}/></div><em>{product.description}</em><h3>{product.name}</h3><div className="product-foot"><span>{formatPrice(product.priceInCents)}</span><button onClick={buy}>{added ? 'OPENING CHECKOUT' : 'ADD TO BAG'}</button></div></article> }

export function Contact() { return <section id="contact" className="contact"><div className="contact-copy"><small>GET IN TOUCH</small><h2>CONTACT</h2><p>For original painting enquiries, commissions, exhibitions, collaborations, or press, please get in touch.</p><form onSubmit={(e) => e.preventDefault()}><div className="form-row"><label>First name *<input required /></label><label>Last name<input /></label></div><div className="form-row"><label>Email *<input type="email" required /></label><label>Phone<input /></label></div><label>Additional information<textarea rows={4}/></label><button type="submit">SUBMIT</button></form></div><div className="contact-photo"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448740_55119b2b2e0749e59ea69013bd5bd05f~mv2-CtwEWdAPGIlp6nxIaO04bYhA71BWwt.avif" alt="Isabella Hidalgo in her studio" /></div></section> }

function Cart({ onClose }: { onClose: () => void }) { return <aside className="cart" aria-label="Shopping bag"><button className="close" onClick={onClose} aria-label="Close shopping bag"><X/></button><small>YOUR BAG</small><h2>Your bag is empty</h2><Link href="/" onClick={onClose}>CONTINUE SHOPPING</Link></aside> }

export { logo }
