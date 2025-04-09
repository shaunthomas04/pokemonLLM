// Function to update the screen text
function update_screen_text(text) {
    var left_blue_screen = document.getElementById("screen");
    left_blue_screen.textContent = text;
}
// Function to update the screen image
function update_screen_image(image_url) {
    var left_blue_screen = document.getElementById("screen");
    left_blue_screen.innerHTML = ''; 

    var imgElement = document.createElement("img");
    imgElement.src = image_url;
    imgElement.style.width = '300px';
    imgElement.style.height = '300px';
    left_blue_screen.appendChild(imgElement);

    var scrollingUp = false; // To track whether we are scrolling up or down
    var scrollAmount = 1; // Amount to scroll each time

    function autoScrollImage() {
        var scrollHeight = left_blue_screen.scrollHeight;
        var scrollTop = left_blue_screen.scrollTop;

        // Check if we need to change the direction of the scroll
        if (scrollTop <= 0) {
            scrollingUp = false; // Start scrolling down
        } else if (scrollTop + left_blue_screen.clientHeight >= scrollHeight) {
            scrollingUp = true; // Start scrolling up
        }

        // Scroll up or down
        if (scrollingUp) {
            left_blue_screen.scrollTop -= scrollAmount; // Scroll up
        } else {
            left_blue_screen.scrollTop += scrollAmount; // Scroll down
        }
    }

    setInterval(autoScrollImage, 20); // Adjust the interval to control the speed
}


// Function to clear the screen text
function clear_text(){
    var left_blue_screen = document.getElementById("screen");
    left_blue_screen.innerHTML  = "";
}

// Function to send a request to the LLM API
async function send_llm_api_request(){
    const user_input = document.getElementById("text-area").value;
    const left_blue_screen = document.getElementById("screen");
    left_blue_screen.textContent = user_input;
    document.getElementById("text-area").value = '';
    return user_input
}

// Function to send a request to the PokeAPI
async function send_pokedex_api_request(){
    const user_input = document.getElementById("text-area").value;
    try{
        console.log("User Input:", user_input);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${user_input}`);
        const data = await response.json();
        document.getElementById("text-area").value = '';

        const pokemon_image = data.sprites;
        const pokemon_front_sprite = pokemon_image.front_default


        update_screen_image(pokemon_front_sprite);

    }
    catch (error) {
        console.log("Error:", error);
        const left_blue_screen = document.getElementById("screen");
        left_blue_screen.textContent = "Error: Pokemon not found";
        document.getElementById("text-area").value = '';
        return null;
    }

}


// Functions to toggle pokedex mode
function toggle_api_mode() {
    console.log("API Mode is ON and LLM Mode is OFF");
    yellow_enter_button.removeEventListener("click", send_llm_api_request);
    yellow_enter_button.addEventListener("click", send_pokedex_api_request);

    // Toggle the colors of the indicator buttons
    api_toggle_indicator.style.backgroundColor = "green";
    llm_toggle_indicator.style.backgroundColor = "black"; 

    // Blue button 1
    const blue_button_1_span = document.createElement("span");
    blue_button_1_span.textContent = "Pokemon";    
    blue_button_1.innerHTML = ""; 
    blue_button_1.appendChild(blue_button_1_span);

}

function toggle_llm_mode() {
    console.log("API Mode is OFF and LLM Mode is ON");
    yellow_enter_button.removeEventListener("click", send_pokedex_api_request);
    yellow_enter_button.addEventListener("click", send_llm_api_request);

     // Toggle the colors of the indicator buttons
     api_toggle_indicator.style.backgroundColor = "black";
     llm_toggle_indicator.style.backgroundColor = "green"; 
}



// Red Button that is used to clear the screen text
const red_clear_button = document.getElementById("bottom-screen-button")
red_clear_button.addEventListener("click", clear_text);

//Yellow Button use as enter button for right screen
const yellow_enter_button = document.getElementById("yellow-enter-button")
// yellow_enter_button.addEventListener("click", send_llm_api_request);

// Blue buttons
const blue_button_1 = document.getElementById("blue-button-1")
const blue_button_2 = document.getElementById("blue-button-2")
const blue_button_3 = document.getElementById("blue-button-3")
const blue_button_4 = document.getElementById("blue-button-4")
const blue_button_5 = document.getElementById("blue-button-5")
const blue_button_6 = document.getElementById("blue-button-6")
const blue_button_7 = document.getElementById("blue-button-7")
const blue_button_8 = document.getElementById("blue-button-8")
const blue_button_9 = document.getElementById("blue-button-9")
const blue_button_10 = document.getElementById("blue-button-10")

// Buttons that change the mode of the pokedex and display indicators
const api_toggle_button = document.getElementById("api-toggle-button");
api_toggle_button.addEventListener("click", toggle_api_mode);
const api_toggle_indicator = document.getElementById("api-toggle-button-indicator");
const llm_toggle_button = document.getElementById("llm-toggle-button");
llm_toggle_button.addEventListener("click", toggle_llm_mode);
const llm_toggle_indicator = document.getElementById("llm-toggle-button-indicator");


