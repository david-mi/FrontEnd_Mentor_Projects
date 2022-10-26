export const getIpMachin = async (ipAddress) => {
  const res = await fetch(`https://geo.ipify.org/api/v2/country,city?Address=${ipAddress}`);
  const data = await res.json();
  return data;
};