export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  image: string
}

export const PRODUCTS: Product[] = [
  { id: 'always-guided', name: 'Always Guided', description: 'Original painting', priceInCents: 98000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u6jDUhf1uWNWNvB2ARKFpCvY99uAJ0.png' },
  { id: 'trust', name: 'Trust', description: 'Original painting', priceInCents: 82000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u6jDUhf1uWNWNvB2ARKFpCvY99uAJ0.png' },
  { id: 'in-this-instant', name: 'In This Instant', description: 'Original painting', priceInCents: 98000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u6jDUhf1uWNWNvB2ARKFpCvY99uAJ0.png' },
]

export function getProduct(id: string) { return PRODUCTS.find((product) => product.id === id) }

export function formatPrice(cents: number) { return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(cents / 100) }
