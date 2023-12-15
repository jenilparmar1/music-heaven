document.getElementById("prevBtn").addEventListener("click", function () {
  document.querySelector(".card-con").scrollBy({
    left: -200, // Adjust the scroll distance according to card width
    behavior: "smooth",
  });
});

document.getElementById("nextBtn").addEventListener("click", function () {
  document.querySelector(".card-con").scrollBy({
    left: 200, // Adjust the scroll distance according to card width
    behavior: "smooth",
  });
});