/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sendlead.co',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.sendlead.co/sitemap.xml',
    ],
  },
  exclude: ['/success', '/privacy-terms-cookies'],
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    const customConfig = {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };

    // Homepage gets highest priority
    if (path === '/') {
      customConfig.priority = 1.0;
      customConfig.changefreq = 'daily';
    }
    
    // Main service pages get high priority
    const highPriorityPages = [
      '/business-grants',
      '/business-loans', 
      '/car-finance',
      '/mortgage',
      '/wealth-management',
      '/property-investment',
      '/secured-loans',
      '/get-started'
    ];
    
    if (highPriorityPages.includes(path)) {
      customConfig.priority = 0.9;
      customConfig.changefreq = 'weekly';
    }
    
    // Blog pages get medium-high priority
    if (path.startsWith('/blog')) {
      customConfig.priority = 0.8;
      customConfig.changefreq = 'weekly';
    }
    
    // About and careers get medium priority
    if (path === '/about' || path === '/careers') {
      customConfig.priority = 0.7;
      customConfig.changefreq = 'monthly';
    }
    
    // Legal pages get low priority
    const lowPriorityPages = ['/privacy-policy', '/terms-conditions', '/cookies'];
    if (lowPriorityPages.includes(path)) {
      customConfig.priority = 0.3;
      customConfig.changefreq = 'yearly';
    }

    return customConfig;
  },
};
