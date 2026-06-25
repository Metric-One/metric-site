// Static marketing content — intentionally hardcoded, never connected to live data.

export const platforms = [
  'Shopify', 'Amazon', 'Meta Ads', 'Google Ads', 'WooCommerce', 'TikTok Ads',
  'Etsy', 'Stripe', 'PayPal', 'iyzico', 'Trendyol', 'Hepsiburada'
]

export const platformGroups = [
  { category: 'Stores', items: [
    { name: 'Shopify', status: 'connected' },
    { name: 'WooCommerce', status: 'available' },
    { name: 'Etsy', status: 'syncing' }
  ] },
  { category: 'Marketplaces', items: [
    { name: 'Amazon SP-API', status: 'connected' },
    { name: 'Trendyol', status: 'connected' },
    { name: 'Hepsiburada', status: 'available' }
  ] },
  { category: 'Advertising', items: [
    { name: 'Meta Ads', status: 'connected' },
    { name: 'Google Ads', status: 'syncing' },
    { name: 'TikTok Ads', status: 'connected' }
  ] },
  { category: 'Payments', items: [
    { name: 'Stripe', status: 'connected' },
    { name: 'PayPal', status: 'available' },
    { name: 'iyzico', status: 'connected' }
  ] }
]
