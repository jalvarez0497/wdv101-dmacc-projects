function getEmailAddress() {
    let emailInput = document.getElementById("inEmail");
    let email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter an email address.");
        emailInput.focus();
        return null;
    }

    if (!emailInput.checkValidity()) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return null;
    }

    return email;
}

function displayEmail(e) {
    e.preventDefault();
    let email = getEmailAddress();
    if (email === null) return;

    document.getElementById("emailDisplay").textContent = email;
}

function displayUsername(e) {
    e.preventDefault();
    let email = getEmailAddress();
    if (email === null) return;

    let index = email.indexOf("@");
    let username = email.substring(0, index);

    document.getElementById("userDisplay").textContent = username;
}

function displayDomain(e) {
    e.preventDefault();
    let email = getEmailAddress();
    if (email === null) return;

    let index = email.indexOf("@");
    let domain = email.substring(index + 1);

    let domainSpan = document.getElementById("domainDisplay");
    let domainContainer = document.getElementById("domainContainer");

    domainSpan.textContent = domain;

    if (domain.toLowerCase().endsWith(".edu")) {
        domainContainer.style.backgroundColor = "lightblue";
    } else {
        domainContainer.style.backgroundColor = "";
    }
}

function resetEmailSection() {
  document.getElementById("emailDisplay").textContent = "";
  document.getElementById("userDisplay").textContent = "";
  document.getElementById("domainDisplay").textContent = "";
  document.getElementById("domainContainer").style.backgroundColor = "";
}

function formatMMDDYYYY(inputDate) {
  let month = inputDate.getMonth() + 1;
  let day = inputDate.getDate();
  const year = inputDate.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  return month + "/" + day + "/" + year;
}

function friendlyDate(inputDate) {
  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
  ];
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const dayName = days[inputDate.getDay()];
  const monthName = months[inputDate.getMonth()];
  const dayNumber = inputDate.getDate();
  const year = inputDate.getFullYear();

  return `${dayName} ${monthName} ${dayNumber}, ${year}`;
}

function showTodayDate(e) {
  e.preventDefault();
  const today = new Date();
  document.getElementById("todayDisplay").textContent =
    formatMMDDYYYY(today);
}

function showFriendlyDate(e) {
  e.preventDefault();
  const today = new Date();
  document.getElementById("friendlyDisplay").textContent =
    friendlyDate(today);
}

function resetDateExamples(e) {
  e.preventDefault();
  document.getElementById("todayDisplay").textContent = "";
  document.getElementById("friendlyDisplay").textContent = "";
}

function setCopyrightYear() {
  const yearSpan = document.getElementById("copyrightYear");
  if (!yearSpan) return;

  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}


function initPage() {

  document.getElementById("eForm").addEventListener("submit", function(e) {
      e.preventDefault();
  });

  document.getElementById("emailBtn").addEventListener("click", displayEmail);
  document.getElementById("userBtn").addEventListener("click", displayUsername);
  document.getElementById("domainBtn").addEventListener("click", displayDomain);
  document.getElementById("newEmailBtn").addEventListener("click", resetEmailSection);

  document.getElementById("todayBtn").addEventListener("click", showTodayDate);
  document.getElementById("friendlyBtn").addEventListener("click", showFriendlyDate);
  document.getElementById("resetDateBtn").addEventListener("click", resetDateExamples);

  setCopyrightYear();
}

document.addEventListener("DOMContentLoaded", initPage);