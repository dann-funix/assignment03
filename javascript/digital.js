// Lay URL cua trang hien tai
const digitalURL = location.href;

if( digitalURL.includes("myCV")) {
  let cv = document.querySelectorAll(".cv");
  cv.forEach((item) => {
    item.style.display = "block"
  });
}
else if( digitalURL.includes("animals")) {
  let animals = document.querySelectorAll(".animals");
  animals.forEach((item) => {
    item.style.display = "block"
  });
}
else if ( digitalURL.includes("news")) {
  let news = document.querySelectorAll(".news");
  news.forEach((item) => {
    item.style.display = "block"
  });
}
