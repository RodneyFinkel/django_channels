console.log('Sanity check from room.js')

const roomName = JSON.parse(document.getElementById('roomname').textContent);

let chatLog = document.querySelector('#chatLog');
let chatMessageInput = document.querySelector('#chatMessageInput');
let chatMessageSend = document.querySelector('#chatMessageSend');
let onlineUsersSelector = document.querySelector('#onlineUserSelector');

// adds a new option to 'onlineUsersSelector'

function onlineUsersSelectorAdd(value) {
    if (document.querySelector("option[value='" + value + "']")) return;
    let newOption = document.createElement("option");
    newOption.value = value;
    newOption.innerHTML = value;
    onlineUsersSelector.appendChild(newOption);
}

// removes an option from 'onlineUsersSelector'

function onlineUsersSelectorRemove(value) {
    let oldOption = document.querySelector("option[value='" + value + "']");
    if (oldOption !==null) oldOption.remove();
}

//focus chatMessageInput when user opens the page
chatMessageInput.onkeyup = function(e) {
    if (e.keyCode === 13) {
        chatMessageSend.click();
    }
};

// clear the 'chatMessageInput' and forward the message

chatMessageSend.onclick = function() {
    if (chatMessageInput.value.length === 0) return;
    //TODO forward the message to the Websocket
    chatMessageInput.value = "";
};




