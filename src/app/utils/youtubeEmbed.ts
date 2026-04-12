/** Returns `https://www.youtube.com/embed/VIDEO_ID` or `null` if not a recognized YouTube URL. */
export function getYoutubeEmbedSrc(url: string): string | null {
  try {
    const u = new URL(url.trim());
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '').split('/')[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (u.hostname === 'www.youtube.com' || u.hostname === 'youtube.com' || u.hostname === 'm.youtube.com') {
      const v = u.searchParams.get('v');
      if (v) return `https://www.youtube.com/embed/${v}`;
      const short = u.pathname.match(/^\/shorts\/([^/?]+)/);
      if (short?.[1]) return `https://www.youtube.com/embed/${short[1]}`;
      const embed = u.pathname.match(/^\/embed\/([^/?]+)/);
      if (embed?.[1]) return `https://www.youtube.com/embed/${embed[1]}`;
    }
  } catch {
    return null;
  }
  return null;
}

export function isYoutubeVideoUrl(url: string): boolean {
  return getYoutubeEmbedSrc(url) !== null;
}
