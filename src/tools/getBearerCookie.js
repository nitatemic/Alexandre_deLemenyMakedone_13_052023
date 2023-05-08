export default function getBearerCookie() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('Bearer=')) {
      return cookie.substring('Bearer='.length, cookie.length);
    }
  }
  return null;
}
