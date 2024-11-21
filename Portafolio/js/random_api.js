document.addEventListener("DOMContentLoaded", () => {
  const fetchCardButton = document.getElementById("fetch-card");
  const fetchMultipleCardsButton = document.getElementById("fetch-multiple-cards");
  const clearDataButton = document.getElementById("clear-data");
  const cardType = document.getElementById("card-type");
  const cardNumber = document.getElementById("card-number");
  const cardExpiration = document.getElementById("card-expiration");
  const cardOwner = document.getElementById("card-owner");
  const cardList = document.getElementById("card-list");
  const errorMessage = document.getElementById("error-message");

  //limpiar todos
  clearDataButton.addEventListener("click", () => {
    cardType.textContent = "";
    cardNumber.textContent = "";
    cardExpiration.textContent = "";
    cardOwner.textContent = "";
    cardList.innerHTML = "";
    errorMessage.textContent = "";
  });

  //una sola tarjet
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

  //varias tarjetas, arreglo
  fetchMultipleCardsButton.addEventListener("click", () => {
    const quantity = prompt("¿Cuántas tarjetas deseas generar?", "5");

    if (!quantity || isNaN(quantity) || quantity <= 0) {
      alert("Por favor, introduce un número válido.");
      return;
    }

    fetch(`https://fakerapi.it/api/v2/creditCards?_quantity=${quantity}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener las tarjetas.");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "OK" && data.data && data.data.length > 0) {
          cardList.innerHTML = "";
          data.data.forEach((card) => {
            const listItem = document.createElement("li");
            listItem.textContent = `Tipo: ${card.type}, Número: ${card.number}, Expira: ${card.expiration}, Propietario: ${card.owner}`;
            cardList.appendChild(listItem);
          });
          errorMessage.textContent = "";
        } else {
          throw new Error("No se encontraron tarjetas.");
        }
      })
      .catch((error) => {
        errorMessage.textContent = error.message;
      });
  });
});
