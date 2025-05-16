// api.js
export const getVans = async () => {
  const res = await fetch('/api/vans');
  if (!res.ok) throw new Error('Failed to fetch vans');
  const data = await res.json();
  return data.vans;
};
