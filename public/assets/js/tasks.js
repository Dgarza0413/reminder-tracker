$(function () {
    $(".change-status").on("click", function (event) {
        var id = $(this).data("id");
        var newComp = $(this).data("newcomp");

        var newCompState = {
            completed: newComp
        };
        $.ajax("/api/tasks/" + id, {
            type: "PUT",
            data: newCompState
        }).then(
            function () {
                console.log("changed task to", newComp);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newTask = {
            name: $("#ta").val().trim(),
            // completed: $("[name=completed]:checked").val().trim()
        };

        $.ajax("/api/tasks", {
            type: "POST",
            data: newTask
        }).then(
            function () {
                console.log("created new task");
                location.reload();
            }
        );
    });


    $(".delete-task").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/tasks/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted tasks", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})