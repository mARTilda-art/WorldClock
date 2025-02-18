function updateTime() {
  // London
  let londonELement = document.querySelector("#london");
  let londonDateElement = londonELement.querySelector(".date");
  let londonTimeElement = londonELement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Tokyo
  let tokyoELement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoELement.querySelector(".date");
  let tokyoTimeElement = tokyoELement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  // Helsinki
  let helsinkiELement = document.querySelector("#helsinki");
  let helsinkiDateElement = helsinkiELement.querySelector(".date");
  let helsinkiTimeElement = helsinkiELement.querySelector(".time");
  let helsinkiTime = moment().tz("Europe/Helsinki");

  helsinkiDateElement.innerHTML = helsinkiTime.format("MMMM Do YYYY");
  helsinkiTimeElement.innerHTML = helsinkiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
