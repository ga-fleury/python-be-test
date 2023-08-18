

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5afd15ec.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.d47c8428.js","_app/immutable/chunks/stores.1bbefd10.js","_app/immutable/chunks/singletons.aed136c4.js","_app/immutable/chunks/index.14349a18.js"];
export const stylesheets = [];
export const fonts = [];
