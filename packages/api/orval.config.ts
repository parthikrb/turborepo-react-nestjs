import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: {
      target: './swagger.json',
    },
    output: {
      mode: 'tags-split',
      target: './src/generated/endpoints',
      schemas: './src/generated/models',
      client: 'react-query',
      indexFiles: true,
      override: {
        mutator: {
          path: './src/lib/axios-client.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: 'page',
        },
      },
    },
  },
  apiZod: {
    input: {
      target: './swagger.json',
    },
    output: {
      mode: 'tags-split',
      target: './src/generated/endpoints',
      client: 'zod',
      fileExtension: '.zod.ts',
      indexFiles: true,
    },
  },
});
