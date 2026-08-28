import { siteConfig } from '../config/site'

export const designRequestConfig = {
  brandName: siteConfig.name,
  whatsappNumber: siteConfig.whatsappNumber,
  contactEmail: siteConfig.email,
  roomTypes: [
    { value: 'living-room', label: 'Living Room', icon: 'sofa' },
    { value: 'bedroom', label: 'Bedroom', icon: 'bed' },
    { value: 'kitchen', label: 'Kitchen', icon: 'kitchen' },
    { value: 'dining-room', label: 'Dining Room', icon: 'dining' },
    { value: 'home-office', label: 'Home Office', icon: 'office' },
    { value: 'bathroom', label: 'Bathroom', icon: 'bath' },
    { value: 'commercial-space', label: 'Commercial Space', icon: 'commercial' },
    { value: 'entire-home', label: 'Entire Home', icon: 'home' },
    { value: 'other', label: 'Other', icon: 'other' },
  ],
  styles: [
    { value: 'modern', label: 'Modern', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80' },
    { value: 'contemporary', label: 'Contemporary', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80' },
    { value: 'minimalist', label: 'Minimalist', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80' },
    { value: 'luxury', label: 'Luxury', image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=600&q=80' },
    { value: 'scandinavian', label: 'Scandinavian', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80' },
    { value: 'industrial', label: 'Industrial', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80' },
    { value: 'traditional', label: 'Traditional', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80' },
    { value: 'bohemian', label: 'Bohemian', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80' },
    { value: 'not-sure', label: 'Not Sure Yet', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80' },
  ],
  budgets: [
    { value: 'under-1000', label: 'Under $1,000' },
    { value: '1000-3000', label: '$1,000 – $3,000' },
    { value: '3000-7500', label: '$3,000 – $7,500' },
    { value: '7500-15000', label: '$7,500 – $15,000' },
    { value: '15000-plus', label: '$15,000+' },
    { value: 'not-sure', label: 'Not Sure Yet' },
  ],
  timeframes: ['As soon as possible', 'Within 1 month', '1–3 months', '3–6 months', 'Just exploring'],
}

export const stepLabels = ['Room', 'Style', 'Budget', 'Photos', 'Contact']
