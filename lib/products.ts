export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  image: string
}

export const PRODUCTS: Product[] = [
  { id: 'always-guided', name: 'Always Guided', description: 'Original painting', priceInCents: 98000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448740_55119b2b2e0749e59ea69013bd5bd05f~mv2-nwit46h9WqPnld6MXNcroO0RrpgZ84.avif' },
  { id: 'trust', name: 'Trust', description: 'Original painting', priceInCents: 82000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448740_56068a92965a4a16ac44fb98c391b6fc~mv2-1tuRcgCQlTgG8DRndxVUtPddq2SmZH.avif' },
  { id: 'in-this-instant', name: 'In This Instant', description: 'Original painting', priceInCents: 98000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448740_b48fabb45e1540d88438ebbb2caa1ead~mv2-hXjTS7yUeDMGdZx2Ut3b9IRxlPgLIu.avif' },
  { id: 'soft-study', name: 'Soft Study', description: 'Limited fine art print', priceInCents: 24000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C6D2587D-D281-4227-8EA1-1A3543C9966E_4_5005_c_edited-1VU5IkJzMbpdW56TY9CFi5sZuKjANo.avif' },
  { id: 'remembered-place', name: 'Remembered Place', description: 'Limited fine art print', priceInCents: 18000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448740_55119b2b2e0749e59ea69013bd5bd05f~mv2-CtwEWdAPGIlp6nxIaO04bYhA71BWwt.avif' },
  { id: 'quiet-light', name: 'Quiet Light', description: 'Limited fine art print', priceInCents: 22000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448740_55119b2b2e0749e59ea69013bd5bd05f~mv2-CtwEWdAPGIlp6nxIaO04bYhA71BWwt.avif' },
]

export function getProduct(id: string) { return PRODUCTS.find((product) => product.id === id) }

export function formatPrice(cents: number) { return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(cents / 100) }
