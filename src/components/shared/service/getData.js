export const getData = async (URL) => {
  const res = await fetch(URL)
  return res.json()
}