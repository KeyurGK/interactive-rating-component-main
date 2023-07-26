const submitButton = document.getElementById("container__submit__button");
const ratingContainer = document.getElementById("container");
const ratings = document.querySelectorAll(".ratings");
let ratingSelected;
ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratingSelected = rating.textContent;
  });
});
const sayThankYou = (ratingSelect) => {
  const thankyouContainer = document.createElement("div");
  thankyouContainer.innerHTML = `<div class="thankyou_container" id="thankyou_container">
  <div class="thankyou_container_image">
    <img src="./images/illustration-thank-you.svg" />
  </div>
  <div class="thankyou_container_rating">
    <p>You selected ${ratingSelect} out of 5</p>
  </div>
  <div class="thankyou_container_greet">
    <h3>Thank you!</h3>
  </div>
  <div class="thankyou_container_message">
    <p>
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>
  </div>
</div>`;
  document.body.replaceChild(thankyouContainer, ratingContainer);
};
submitButton.addEventListener("click", () => {
  sayThankYou(ratingSelected);
});
