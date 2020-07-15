
populateBurger()

// Send the POST request.
$("#makeBurger").on("click", function () {
    var newBurger = {
        name: $("#burgerName").val().trim()
    }

    $.ajax("/api/newBurger", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("You created new burger");
            populateBurger()
            // Reload the page to get the updated list
            // location.reload();
        }
    );
    console.log($("#burgerName").val());
});

function populateBurger() {
    $.ajax("/api/allBurgers", {
        type: "GET",
    }).then(
        function (response) {
            console.log(response);
            // Reload the page to get the updated list
            // location.reload();
            $("#devoured").empty();
            $("#undevoured").empty();
            for (i = 0; i < response.length; i++) {
                oneBurger(response[i])
            }
        }
    );
}

function oneBurger(burgerData) {
console.log(burgerData.id)
    if (burgerData.devoured == 1) {
        var burger = `<li>${burgerData.burger_name}</li>`
        $("#devoured").append(burger);
    } else {
        var burger = `<li>${burgerData.burger_name}<button class="eatMe" data-burgerid="${burgerData.id}">Eat Me!</button></li>`
        $("#undevoured").append(burger);
    }
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("eatMe")) {
        console.log(event.target)
        var id = $(event.target).data("burgerid")
        console.log(id)
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
        }).then(
            function () {
                console.log("You ate a burger");
                populateBurger()
            }
        );
    }
})