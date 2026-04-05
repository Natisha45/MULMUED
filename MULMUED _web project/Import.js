document.addEventListener("DOMContentLoaded", function () {

  const includes = document.querySelectorAll("[data-include]");

  includes.forEach(function (element) {

    const file = element.getAttribute("data-include");

    fetch(file)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Could not load " + file);
        }
        return response.text();
      })
      .then(function (data) {
        element.innerHTML = data;
      })
      .catch(function (error) {
        console.error("Include error:", error);
      });

  });

});