// Keep each curriculum area in its own module so new sections can be added independently.
export const moduleRegistry = {
  base: {
    title: 'AI 기초',
    load: () => import('./base/index.js'),
  },
};
