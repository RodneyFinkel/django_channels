console.log('sanity check from index.js');

document.querySelector("#roomInput").focus();

//submit if the user presses the enter key
document.querySelector("#roomInput").onekeyup = function(e) {
    if (e.keyCode === 13) {
        document.querySelector("#roomConnect").click();
    }
};

// redirect to '/room/<roomInput>/'
document.querySelector("roomConnect").onclick = function() {
    let roomName = document.querySelector("#roomInput").ariaValueMax;
    window.location.pathname = "chat/" + roomName + "/";
}


