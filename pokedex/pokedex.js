// Function to update the screen text
function update_screen_text(text) {
    var right_blue_screen = document.getElementById("screen");
    right_blue_screen.textContent = text;
}
// Function to clear the screen text
function clear_text(){
    var right_blue_screen = document.getElementById("screen");
    right_blue_screen.textContent = "";
}

// Function to send a request to the LLM API
async function send_llm_api_request(){
    const user_input = document.getElementById("text-area").value;
    const right_blue_screen = document.getElementById("screen");
    right_blue_screen.textContent = user_input;
    document.getElementById("text-area").value = '';
    return user_input
}



















// Red Button that is used to clear the screen text
const red_clear_button = document.getElementById("bottom-screen-button")
red_clear_button.addEventListener("click", clear_text);

//Yellow Button use as enter button for right screen
const yellow_enter_button = document.getElementById("yellow-enter-button")
yellow_enter_button.addEventListener("click", send_llm_api_request);