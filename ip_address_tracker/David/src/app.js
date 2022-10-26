import { getIpMachin } from "./api.js";

const form = document.querySelector("form");
const ipElement = document.querySelector(".ip p");
const locationElement = document.querySelector(".location p");
const timezoneElement = document.querySelector(".timezone p");
const ispElement = document.querySelector(".isp p");

form.addEventListener("submit", handleSubmit);

const map = L
  .map('map');

async function handleSubmit(event) {
  event.preventDefault();

  const ipValue = form.ip.value;
  if (ipValue === "") return;

  const ipInfosFromApi = await getIpMachin(ipValue);
  const location = ipInfosFromApi.location;
  const { lat, lng } = location;

  showInfos(ipInfosFromApi);
  printMap(lat, lng);
}

function showInfos(ipInfosFromApi) {
  const { ip, isp } = ipInfosFromApi;
  const { city, postalCode, region, timezone } = ipInfosFromApi.location;

  ipElement.innerText = ip;
  locationElement.innerText = `${city}, ${region} ${postalCode}`;
  timezoneElement.innerText = timezone;
  ispElement.innerText = isp;
  console.log({ ip, isp, city, postalCode, region, timezone });
}


const printMap = async (lat, long) => {

  map.setView([lat, long], 13);
  L
    .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

  L
    .marker([lat, long])
    .addTo(map);

  console.log(map);
};




