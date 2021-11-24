document.getElementById('btn_submit').addEventListener('click', function() { validateImput(); })

function validateImput() {
    let name = document.getElementById('text_area_name').value
    let email = document.getElementById('text_area_email').value
    if (name === "" || email === "") {
        alert("fill all the fields")
    } else {

    }
}
// const body = document.body
// const titl = document.querySelector(".overlay")
// titl.style.backGroundColor = "red"


$(document).ready(function() {
    $("#serviceimg1").click(function() {
        $(".whatwedo_para").toggle("slow");
        $("#serviceimg1").hide()
    })
})

$(document).ready(function() {
    $(".whatwedo_para").click(function() {
        $("#serviceimg1").show()
        $(".whatwedo_para").hide();
    })

})
$(document).ready(function() {
    $("#serviceimg2").click(function() {
        $(".whatwedo_para").toggle("slow");
        $("#serviceimg2").hide()
    })
})

$(document).ready(function() {
    $(".whatwedo_para").click(function() {
        $("#serviceimg2").show()
        $(".whatwedo_para").hide();
    })

})
$(document).ready(function() {
    $("#serviceimg3").click(function() {
        $(".whatwedo_para").toggle("slow");
        $("#serviceimg3").hide()
    })
})

$(document).ready(function() {
    $(".whatwedo_para").click(function() {
        $("#serviceimg3").show()
        $(".whatwedo_para").hide();
    })

})