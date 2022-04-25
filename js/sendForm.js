const sendForm = () => {
  const form = document.querySelector(".modal");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = form.text;
    const tel = form.tel;
    const email = form.email;

    const sendObj = {
      name: text.value,
      phone: tel.value,
      email: email.value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(sendObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status >= 400) {
          alert("Error!");
        }
        return response.json();
      })
      .then((json) => console.log(json))
      .finally(() => {
        form.reset();
      });
  });
};

sendForm();
