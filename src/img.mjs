// Route remote images through Netlify's Image CDN (resized, cached, served from our domain).
export function cdn(src, w = 1600) {
  if (!src || !/^https?:\/\//.test(src)) return src;
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${w}&q=80`;
}
// Rehype plugin: apply cdn() to <img> tags inside story Markdown.
export function rehypeCdnImages() {
  const walk = node => {
    if (node.type === 'element' && node.tagName === 'img' && node.properties?.src) node.properties.src = cdn(String(node.properties.src), 1600);
    if (node.type === 'raw' && typeof node.value === 'string') node.value = node.value.replace(/<img([^>]*?)src="(https?:\/\/[^"]+)"/g, (_, a, u) => `<img${a}src="${cdn(u.replace(/&amp;/g, '&'), 1600)}"`);
    (node.children || []).forEach(walk);
  };
  return tree => walk(tree);
}
