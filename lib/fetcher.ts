export const fetcher = (url: string) => fetch(url).then((res) => {
  if (res.status === 404) {
    return null;
  }
  return res.json()
});
