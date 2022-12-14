const btnSwitch = document.querySelector("#switch");
let toggle = true;

btnSwitch.addEventListener('click', function() {
    if(toggle) {
        console.log("Switch: On");
    } else {
        console.log("Switch: Off");
    }

    toggle = !toggle;
})