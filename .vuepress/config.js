module.exports = {
  lang: 'en-US',
  title: 'NestJS Enterprise Boilerplate Documentation 📄',
  description:
    'Enterprise-grade NestJS boilerplate with TypeScript, PostgreSQL, TypeORM, Redis, JWT authentication, and comprehensive development tooling for building scalable and maintainable backend applications',
  base:
    process.env.DEPLOY_ENV === 'gh-pages' ? '/nest-enterprise-boilerplate/' : '/',
  themeConfig: {
    sidebar: [
      ['/', 'Introduction'],
      '/docs/development',
      '/docs/architecture',
      '/docs/naming-cheatsheet',
      '/docs/linting',
      // '/docs/routing',
      // '/docs/state',
      // '/docs/editors',
      // '/docs/production',
      // '/docs/troubleshooting',
    ],
  },
};
