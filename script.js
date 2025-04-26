const offlineOverlay = document.getElementById('offlineOverlay');
const content = document.getElementById('websiteContent');
const orderList = document.getElementById('orderList');
const openOrdersBtn = document.getElementById('openOrders');
const ordersPanel = document.getElementById('ordersPanel');
const closeOrdersBtn = document.getElementById('closeOrders');

function updateConnectionStatus() {
  if (navigator.onLine) {
    offlineOverlay.style.display = 'none';
    content.style.display = 'flex';
  } else {
    offlineOverlay.style.display = 'flex';
    content.style.display = 'none';
  }
}

// Add orders functionality
const allOrderButtons = document.querySelectorAll(".item button");

allOrderButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const itemName = btn.parentElement.querySelector("h3").textContent;
    const li = document.createElement("li");
    li.innerHTML = `${itemName} <button class="remove">X</button>`;
    orderList.appendChild(li);

    // Remove button functionality
    li.querySelector("button").addEventListener("click", () => {
      li.remove();
    });

    alert("Order Added to Delivery!");
  });
});

openOrdersBtn.addEventListener("click", () => {
  ordersPanel.classList.add("active");
});

closeOrdersBtn.addEventListener("click", () => {
  ordersPanel.classList.remove("active");
});

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

updateConnectionStatus(); // Initial check
onnectionStatus(); // Initial check
