// document.getElementById('addBurger').addEventListener('click', event => {
//  event.preventDefault()
//  axios.post('/api/burgers', {
//   name: document.getElementById('name').value,
//   devoured: false
//  })
//   .then(() => location.reload())
//   .catch(err => console.error(err))
// })

// document.addEventListener('click', event => {
//  if (event.target.classList.contains('devour')) {
//   axios.put(`/api/burgers/${event.target.dataset.id}`, { devoured: true })
//    .then(() => location.reload())
//    .catch(err => console.error(err))

//  }
// })

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    console.log(newDevour)
    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };
    console.log(newBurger)
    // Send the POST request.
    // $.ajax("/api/burgers", {
    //   type: "POST",
    //   data: newBurger
    // }).then(
    //   function () {
    //     console.log("created new burger");
    //     // Reload the page to get the updated list
    //     location.reload();
    //   }
    // );
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
