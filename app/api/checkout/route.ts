import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getProduct } from '@/lib/products'

export async function POST(request: Request) {
  try {
    const { productId, quantity = 1 } = await request.json()
    const product = getProduct(productId)
    if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 10) return NextResponse.json({ error: 'Invalid product or quantity' }, { status: 400 })
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price_data: { currency: 'eur', product_data: { name: product.name, description: product.description }, unit_amount: product.priceInCents }, quantity }],
      success_url: `${new URL(request.url).origin}/?checkout=success`,
      cancel_url: `${new URL(request.url).origin}/?checkout=cancelled`,
      integration_identifier: `isabella_art_${Math.random().toString(36).slice(2, 10)}`,
    })
    return NextResponse.json({ url: session.url })
  } catch { return NextResponse.json({ error: 'Checkout unavailable' }, { status: 500 }) }
}
