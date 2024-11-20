document.addEventListener("DOMContentLoaded", () => {
  const fetchCardButton = document.getElementById("fetch-card");
  const cardType = document.getElementById("card-type");
  const cardNumber = document.getElementById("card-number");
  const cardExpiration = document.getElementById("card-expiration");
  const cardOwner = document.getElementById("card-owner");
  const errorMessage = document.getElementById("error-message");

  fetchCardButton.addEventListener("click", () => {
    fetch("https://fakerapi.it/api/v2/creditCards?_quantity=1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de la tarjeta.");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "OK" && data.data && data.data.length > 0) {
          const card = data.data[0];

          cardType.textContent = card.type;
          cardNumber.textContent = card.number;
          cardExpiration.textContent = card.expiration;
          cardOwner.textContent = card.owner;
          errorMessage.textContent = "";
        } else {
          throw new Error("No se encontraron datos de tarjeta.");
        }
      })
      .catch((error) => {
        errorMessage.textContent = error.message;
      });
  });
});
