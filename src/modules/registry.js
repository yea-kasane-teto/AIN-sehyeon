// Keep each curriculum area in its own script so the page also works when opened as a local file.
window.AINModuleRegistry = {
  base: {
    title: 'AI 기초',
    load: () => window.AINBaseModule,
  },
};
