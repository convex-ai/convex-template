const {DATA_APP_BASE_URL, DATA_APP_PUBLIC_KEY, DATA_APP_PRIVATE_KEY} = process.env

export const callTiDBService = async (method:string, path: string, params: string) => {
  const url = `${DATA_APP_BASE_URL}/${path}?${params}`
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${btoa(`${DATA_APP_PUBLIC_KEY}:${DATA_APP_PRIVATE_KEY}`)}`
    }
  })
  return await response.json()
}
