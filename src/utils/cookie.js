const deleteCookie = (key) => {
  document.cookie = `${key}=; expires= Thu, 01 Jan 1970 00:00:00 GMT`;
};

const newLocal = null;
const fetchCookie = (key) => {
  const cookies = document.cookie.split(';');
  console.log(document.cookie);
  for (const cookie of cookies) { // eslint-disable-line
    const [cookieKey, cookieValue] = cookie.split('=');

    if (key === cookieKey.trim()) {
      return cookieValue;
    }
  }
  return localStorage.getItem('EventUsCookie');
};

export { deleteCookie, fetchCookie };
