const FALLBACK_ID = -1;

const RE_URL_ID = /\/(\d+)\/?$/;

export function getIdFromUrl(url: string): number {
  if (!url) {
    return FALLBACK_ID;
  }
  const matches = RE_URL_ID.exec(url);

  const idMatch = matches?.[1] ?? "";

  let id = parseInt(idMatch);

  if (Number.isNaN(id)) {
    id = FALLBACK_ID;
  }

  return id;
}
