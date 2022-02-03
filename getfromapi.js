fetch(
  "https://euw1.api.riotgames.com/lol/status/v3/shard-data?api_key=RGAPI-ad23aa56-4fee-4423-99be-4bd08cc3bd61"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let array = data.services;
    console.log(array);

    for (let i = 0; i < array.length; i++) {
      const item = array[i];

      let div = document.createElement("div");
      div.innerHTML = `
            <span>${item.name}</span>
            <span>${item.status}</span>
        `;
      document.querySelector("#root").appendChild(div);
    }
  });
