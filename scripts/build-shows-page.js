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

function renderConcertList() {
  const concertListContainer = document.getElementById("concertList");

  //  array and create list items dynamically
  concerts.forEach(concert => {
    const listItem = document.createElement("li");
    listItem.classList.add("concert__list--item");

    // append the concert details to the list item
    const dateElement = document.createElement("h3");
    dateElement.classList.add("concert__list--date");
    dateElement.innerText = "Date";
    const dateValue = document.createElement("p");
    dateValue.innerText = concert.date;

    const venueElement = document.createElement("h3");
    venueElement.classList.add("concert__list--venue");
    venueElement.innerText = "Venue";
    const venueValue = document.createElement("p");
    venueValue.innerText = concert.venue;

    const locationElement = document.createElement("h3");
    locationElement.classList.add("concert__list--location");
    locationElement.innerText = "Location";
    const locationValue = document.createElement("p");
    locationValue.innerText = concert.location;

    //append the "Buy Tickets" button
    const buyTicketsButton = document.createElement("button");
    buyTicketsButton.classList.add("buyTickets");
    buyTicketsButton.innerText = "Buy Tickets";

    //append all elements to the list item
    listItem.appendChild(dateElement);
    listItem.appendChild(dateValue);
    listItem.appendChild(venueElement);
    listItem.appendChild(venueValue);
    listItem.appendChild(locationElement);
    listItem.appendChild(locationValue);
    listItem.appendChild(buyTicketsButton);

    //append to the concert list container
    concertListContainer.appendChild(listItem);
  });
}
renderConcertList();

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

// function renderConcertList() {
//   const concertListContainer = document.getElementById("concertList");

//   // Loop through concerts and create list items dynamically
//   concerts.forEach(concert => {
//     const listItem = document.createElement("li");
//     listItem.classList.add("concert__list--item");

//     // Create a container div for labels and values
//     const infoContainer = document.createElement("div");
//     infoContainer.classList.add("concert__list--info");

//     // Create a div for concert details (labels and values)
//     const detailContainer = document.createElement("div");
//     detailContainer.classList.add("concert__list--detail");

//     // Create labels and values for each concert detail
//     const labels = ["Date", "Venue", "Location"];
//     labels.forEach(labelText => {
//       const labelElement = document.createElement("h3");
//       labelElement.classList.add("concert__list--label");
//       labelElement.innerText = labelText;

//       const valueElement = document.createElement("p");
//       valueElement.classList.add("concert__list--value");
//       valueElement.innerText = concert[labelText.toLowerCase()]; // Use label as key to access corresponding value

//       // Append label and value to detail container
//       detailContainer.appendChild(labelElement);
//       detailContainer.appendChild(valueElement);
//     });

//     // Create "Buy Tickets" button
//     const buyTicketsButton = document.createElement("button");
//     buyTicketsButton.classList.add("buyTickets");
//     buyTicketsButton.innerText = "Buy Tickets";

//     // Append detail container and button to info container
//     infoContainer.appendChild(detailContainer);
//     infoContainer.appendChild(buyTicketsButton);

//     // Append info container to the list item
//     listItem.appendChild(infoContainer);

//     // Append the list item to the concert list container
//     concertListContainer.appendChild(listItem);
//   });
// }

// // Call the renderConcertList function to generate the concert list
// renderConcertList();
