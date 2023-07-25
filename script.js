const submitButton = document.getElementById("container__submit__button");
const ratingContainer = document.getElementById("container");
const sayThankYou = () => {
  const thnakyouContainer = document.createElement("div");
  thnakyouContainer.innerHTML = `<div class="thankyou_container" id="thankyou_container">
  <div class="thankyou_container_image">
    <img src="./images/illustration-thank-you.svg" />
  </div>
  <div class="thankyou_container_rating">
    <p>You selected 4 out of 5</p>
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
  document.body.replaceChild(thnakyouContainer, ratingContainer);
};
submitButton.addEventListener("click", sayThankYou);
