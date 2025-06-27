// Define navigation points based on your specified movement
const locations = {
  1: {
    sky: "#sky-1",
    info :"PARKING AREA",
    neighbors: {
      forward: 2,
      left: 8,
      right: 4,
    },
  },
  2: {
    sky: "#sky-2",
    info: "VOLLEYBALL GROUND",
    neighbors: {
      backward: 1,
      right: 3,
      left: 6,
    },
  },
  3: {
    sky: "#sky-3",
    info: "VCE GROUND",
    neighbors: {
      backward: 2,
    },
  },
  4: {
    sky: "#sky-4",
    info: "CANTEEN",
    neighbors: {
      backward: 1,
    },
  },
  5: {
    sky: "#sky-5",
    info: "LAB CORRIDOR",
    neighbors: {
      forward: 6,
      backward: 7,
    },
  },
  6: {
    sky: "#sky-6",
    info: "CAMPUS VIEW",
    neighbors: {
      right: 5,
      backward: 2,
    },
  },
  7: {
    sky: "#sky-7",
    info: "CSE LAB",
    neighbors: {
      backward: 5,
    },
  },
  8: {
    sky: "#sky-8",
    info: "MAIN GATE",
    neighbors: {
      left: 1,
      backward: 9
    }
  },
  9: {
    sky: "#sky-9",
    info: "ENTRENCE",
    neighbors: {
      left: 8
    }
  },
};

let currentLocation = "9";

// Function to handle navigation
function navigate(direction) {
  const nextLocation = locations[currentLocation].neighbors[direction];
  if (!nextLocation) return; // Prevent invalid movement

  currentLocation = nextLocation;
  document
    .querySelector("#sky")
    .setAttribute("src", locations[currentLocation].sky);
  document
    .querySelector("#info-text")
    .setAttribute("value", locations[currentLocation].info);

  updateArrows();
}

const skyImages = ["#sky-1", "#sky-2", "#sky-3", "#sky-4"];
let currentIndex = 0;

function toggleHotspotMenu() {
  const menu = document.getElementById("hotspot-menu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
}

function teleportTo(locationId) {
  currentLocation = locationId.toString(); // Ensure it's a string
  document
    .querySelector("#sky")
    .setAttribute("src", locations[currentLocation].sky);
  document
    .querySelector("#info-text")
    .setAttribute("value", locations[currentLocation].info);
  updateArrows();

  // Hide menu after teleport
  document.getElementById("hotspot-menu").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const sky = document.querySelector("#sky");
  const toggle = document.querySelector("#hotspot-toggle");
  const menu = document.querySelector("#hotspot-menu");
  const option1 = document.querySelector("#hotspot-option1");
  const option2 = document.querySelectorAll("#hotspot-option2");
  const option3 = document.querySelectorAll("#hotspot-option3");
  const option4 = document.querySelectorAll("#hotspot-option4");

  // Toggle the hotspot menu
  toggle.addEventListener("click", () => {
    const isVisible = menu.getAttribute("visible");
    menu.setAttribute("visible", !isVisible);
  });

  // Teleport to selected location
  option1.addEventListener("click", () => {
    currentLocation = 2;

    document
      .querySelector("#sky")
      .setAttribute("src", locations[currentLocation].sky);
    document
      .querySelector("#info-text")
      .setAttribute("value", locations[currentLocation].info);
    updateArrows();
  });
});

// Function to update arrow visibility based on available directions
function updateArrows() {
  const availableDirections = locations[currentLocation].neighbors;

  document
    .querySelector("#arrowforward")
    .setAttribute("visible", !!availableDirections.forward);
  document
    .querySelector("#arrowbackward")
    .setAttribute("visible", !!availableDirections.backward);
  document
    .querySelector("#arrowleft")
    .setAttribute("visible", !!availableDirections.left);
  document
    .querySelector("#arrowright")
    .setAttribute("visible", !!availableDirections.right);
}

// Attach event listeners to arrows
document
  .querySelector("#arrowforward")
  .addEventListener("click", () => navigate("forward"));
document
  .querySelector("#arrowbackward")
  .addEventListener("click", () => navigate("backward"));
document
  .querySelector("#arrowleft")
  .addEventListener("click", () => navigate("left"));
document
  .querySelector("#arrowright")
  .addEventListener("click", () => navigate("right"));

updateArrows(); // Initialize arrow visibility
