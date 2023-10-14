// instead of hard coding the array we need to use out band-site-api file, to help us
// let's import it (like we did on the index page) and then make a new instance of it i.e. api = new BandSiteAPI(KEY)
// after that we can use the api.getShows() and save that in the concerts variable

import {BandSiteAPI} from "./band-site-api.js";

const APIKey = "ad84ec4e-4017-4519-9ec4-26eef3e0327c";
const api = new BandSiteAPI(APIKey);

const concerts = await api.getShows();
console.log(concerts);

// const concerts = [
//   {
//     date: "Mon Sept 06 2021",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA"
//   },
//   {
//     date: "Tue Sept 21 2021",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA"
//   },
//   {
//     date: "Fri Oct 15 2021",
//     venue: "View Lounge",
//     location: "San Francisco, CA"
//   },
//   {
//     date: "Sat Nov 06 2021",
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA"
//   },
//   {
//     date: "Fri Nov 26 2021",
//     venue: "Moscow Center",
//     location: "San Francisco, CA"
//   },
//   {
//     date: "Wed Dec 15 2021",
//     venue: "Press Club",
//     location: "San Francisco, CA"
//   }
// ];





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


    concertListContainer.appendChild(listItem);
  });
}
renderConcertList();



