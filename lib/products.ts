export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  image: string
}

export const PRODUCTS: Product[] = [
  { id: 'always-guided', name: 'Always Guided', description: 'Original painting', priceInCents: 98000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%281%29-Yw8R9gZbeUPeqO78YiB23t1CxOft05.avif' },
  { id: 'trust', name: 'Trust', description: 'Original painting', priceInCents: 82000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448740_56068a92965a4a16ac44fb98c391b6fc~mv2-DOMD1jiMAPEgn4LXJTP0b4pDzjGzzf.avif' },
  { id: 'in-this-instant', name: 'In This Instant', description: 'Original painting', priceInCents: 98000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448740_56068a92965a4a16ac44fb98c391b6fc~mv2-A9LeoWxY9Uug725hnik4MLtKK87x4y.avif' },
  { id: 'soft-study', name: 'Soft Study', description: 'Limited fine art print', priceInCents: 24000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C6D2587D-D281-4227-8EA1-1A3543C9966E_4_5005_c_edited-1VU5IkJzMbpdW56TY9CFi5sZuKjANo.avif' },
  { id: 'remembered-place', name: 'Remembered Place', description: 'Limited fine art print', priceInCents: 18000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448740_55119b2b2e0749e59ea69013bd5bd05f~mv2-CtwEWdAPGIlp6nxIaO04bYhA71BWwt.avif' },
  { id: 'quiet-light', name: 'Quiet Light', description: 'Limited fine art print', priceInCents: 22000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/448740_55119b2b2e0749e59ea69013bd5bd05f~mv2-CtwEWdAPGIlp6nxIaO04bYhA71BWwt.avif' },
]

export function getProduct(id: string) { return PRODUCTS.find((product) => product.id === id) }

export function formatPrice(cents: number) { return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(cents / 100) }
