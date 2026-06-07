import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [
          remarkGfm,
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: 'frontmatter' }],
        ],
      }),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router')) return 'router';
            if (id.includes('react-dom') || id.includes('/react/')) return 'react-vendor';
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('fuse.js')) return 'search';
            if (id.includes('pretendard')) return 'pretendard';
            return 'vendor';
          }
          if (id.includes('/src/content/cases/')) return 'content-cases';
          if (id.includes('/src/content/notes/')) return 'content-notes';
          if (id.includes('/src/content/essays/')) return 'content-essays';
          if (id.includes('/src/content/logs/')) return 'content-logs';
        },
      },
    },
  },
});
