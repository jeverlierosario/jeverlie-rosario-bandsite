import {BandSiteAPI} from "./band-site-api.js";

const APIKey = "ad84ec4e-4017-4519-9ec4-26eef3e0327c";
const api = new BandSiteAPI(APIKey);

const concerts = await api.getShows();
console.log(concerts);


function renderConcertList() {
  const concertListContainer = document.getElementById("concertList");

  function formatDate(inputDate) {
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    const date = new Date(inputDate);
    return date.toLocaleDateString('en-US', options);
  }


  concerts.forEach(concert => {
    const listItem = document.createElement("li");
    listItem.classList.add("concert__list--item");


    const dateElement = document.createElement("h3");
    dateElement.classList.add("concert__list--date");
    dateElement.innerText = "Date";
    const dateValue = document.createElement("p");
    dateValue.innerText = formatDate(concert.date);

    const venueElement = document.createElement("h3");
    venueElement.classList.add("concert__list--venue");
    venueElement.innerText = "Venue";
    const venueValue = document.createElement("p");
    venueValue.innerText = concert.place;
   console.log(typeof venueValue);

    const locationElement = document.createElement("h3");
    locationElement.classList.add("concert__list--location");
    locationElement.innerText = "Location";
    const locationValue = document.createElement("p");
    locationValue.innerText = concert.location;

 
    const buyTicketsButton = document.createElement("button");
    buyTicketsButton.classList.add("buyTickets");
    buyTicketsButton.innerText = "Buy Tickets";


    listItem.appendChild(dateElement);
    listItem.appendChild(dateValue);
    listItem.appendChild(venueElement);
    listItem.appendChild(venueValue);
    listItem.appendChild(locationElement);
    listItem.appendChild(locationValue);
    listItem.appendChild(buyTicketsButton);



//keep row selected - not working
let selectedRow = null;

  concerts.forEach((concert, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("concert__list--item");

    listItem.addEventListener("click", () => {
      if (selectedRow) {
        selectedRow.classList.remove("selected");
        selectedRow.style.backgroundColor= "#fafafa";
      }
      listItem.classList.add("selected");
      selectedRow = listItem;
      listItem.style.backgroundColor = "#fafafa;";

      selectedRow = listItem;
    });
  });



    concertListContainer.appendChild(listItem);
  });
}
renderConcertList();



