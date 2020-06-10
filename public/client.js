$(".contact").click(function () {
    $.ajax({
        type: "GET",
        url: "/contact",
        error: function (err) {
            console.log(err);
        },
    })
})
$(".about").click(function () {
    $.ajax({
        type: "GET",
        url: "/about",
        error: function (err) {
            console.log(err);
        },
    })
})
$(".home").click(function () {
    $.ajax({
        type: "GET",
        url: "/home",
        error: function (err) {
            console.log(err);
        },
    })
})
$(".btn").click(function () {
    for (let i = 0; i < 6; i++) {      
        if ($(this).hasClass(i)){
            
            // $.ajax({
            //     type: "GET",
            //     url: "/pics"+(i+1),
            //     error: function (err) {
            //         console.log(err);
            //     },
            // })
           
        }
    }
})
