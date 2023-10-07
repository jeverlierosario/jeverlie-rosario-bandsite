//creating array of the concerts
const concerts = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
  },
  {  
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA"
  },
  {  
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
  },
  {  
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA"
  },
  {  
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA"
  }
];

//define function to create concert list use naming used li
// //then create Elemnt append the header <h3>
function createConcertItem(concert) {
  const listItem = document.createElement("li");
  listItem.classList.add("concert__list--item");

  // Create h3 elements for date, venue, and location
  const h3Date = document.createElement("h3");
  h3Date.classList.add("concert__list--date");
  h3Date.innerText = "Date";

  const h3Venue = document.createElement("h3");
  h3Venue.classList.add("concert__list--venue");
  h3Venue.innerText = "Venue";

  const h3Location = document.createElement("h3");
  h3Location.classList.add("concert__list--location");
  h3Location.innerText = "Location";

  listItem.appendChild(h3Date);
  listItem.appendChild(h3Venue);
  listItem.appendChild(h3Location);

  // Create <p> elements for concert details
  const pDate = document.createElement("p");
  pDate.innerText = concert.date;

  const pVenue = document.createElement("p");
  pVenue.innerText = concert.venue;

  const pLocation = document.createElement("p");
  pLocation.innerText = concert.location;

  listItem.appendChild(pDate);
  listItem.appendChild(pVenue);
  listItem.appendChild(pLocation);

  // Create a "Buy Tickets" button
  const buyTicketsButton = document.createElement("button");
  buyTicketsButton.classList.add("buyTickets");
  buyTicketsButton.innerText = "Buy Tickets";
  listItem.appendChild(buyTicketsButton);

  return listItem;
}


