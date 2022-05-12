
const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];
let items;
let topItemIndex;
let itemOffset; 

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
  items = Array.from(contacts.getElementsByClassName("contact"));
  itemOffset = items[0].offsetTop;
}


contacts.addEventListener("scroll", (e) => {
  const curr = Math.round(contacts.scrollTop / itemOffset);
  
  setTimeout(() => {
    stickyHeader.textContent = items[curr].textContent;
  }, 0.5);
});

addContacts();
