export const getIpInfos = async (ipAddress) => {
  const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_QMLB3E8ITzboyMWkSi9tYY8VcxUjw&ipAddress=${ipAddress}`);
  const data = await res.json();
  return data;
};