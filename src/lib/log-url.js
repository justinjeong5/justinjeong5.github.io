export function logUrl(slug, base) {
  return slug ? `${base}#${encodeURIComponent(slug)}` : base;
}
