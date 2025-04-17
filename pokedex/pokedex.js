// https://pokeapi.co/
// Function to update the screen text
function update_screen_text(text) {
    var left_blue_screen = document.getElementById("screen");
    left_blue_screen.innerHTML = '';
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

// Function to update a buttons ability to display information
function give_button_display(button, info, isText, isAudio = false) {
    const currentButton = document.getElementById(button)
    
    if (isText) {
        currentButton.addEventListener("click", () => update_screen_text(info));
    }
    else {
        currentButton.addEventListener("click", () => update_screen_image(info));
    }

    if (isAudio){
        const audioImage = "https://images.vexels.com/media/users/3/145866/isolated/preview/b4efb6c6682b2a808631bf8fbd96d015-sound-wave-icon.png"
        currentButton.addEventListener("click", () => update_screen_image(audioImage));
        currentButton.addEventListener("click", () => {
            const audio = new Audio(info);
            audio.play();
        })
    }
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

        //Getting and setting info from the API 
        update_screen_image(pokemon_front_sprite);
        const moves = data.moves.map(move => move.move.name).join(", ");
        const abilities = data.abilities.map(ability => ability.ability.name).join(", ");
        const stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(", ");
        const types = data.types.map(type => type.type.name).join(", ");
        const attributes = [`Height: ${data.height}m`, `Weight:${data.weight}kg`, `Base XP: ${data.base_experience}`];
        const games = data.game_indices.map(game => game.version.name).join(", ");
        const sound = data.cries.latest;

        give_button_display("blue-button-1", pokemon_front_sprite, false);
        give_button_display("blue-button-2", moves, true);
        give_button_display("blue-button-3", abilities, true);
        give_button_display("blue-button-4", stats, true);
        give_button_display("blue-button-5", types, true);
        give_button_display("blue-button-6", attributes.join(", "), true);
        give_button_display("blue-button-7", games, true);
        give_button_display("blue-button-8", sound, false, true);
        give_button_display("blue-button-9", `Base XP: ${data.base_experience}`, true);
        give_button_display("blue-button-10", `Info in progress`, true);

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

    // Blue button 2
    const blue_button_2_span = document.createElement("span");
    blue_button_2_span.textContent = "Moves";    
    blue_button_2.innerHTML = ""; 
    blue_button_2.appendChild(blue_button_2_span);

    // Blue button 3
    const blue_button_3_span = document.createElement("span");
    blue_button_3_span.textContent = "Abilities";    
    blue_button_3.innerHTML = ""; 
    blue_button_3.appendChild(blue_button_3_span);

    // Blue button 4
    const blue_button_4_span = document.createElement("span");
    blue_button_4_span.textContent = "Stats";    
    blue_button_4.innerHTML = ""; 
    blue_button_4.appendChild(blue_button_4_span);

    // Blue button 5
    const blue_button_5_span = document.createElement("span");
    blue_button_5_span.textContent = "Types";
    blue_button_5.innerHTML = "";
    blue_button_5.appendChild(blue_button_5_span);

    // Blue button 6
    const blue_button_6_span = document.createElement("span");
    blue_button_6_span.textContent = "Attributes";
    blue_button_6.innerHTML = "";
    blue_button_6.appendChild(blue_button_6_span);

    // Blue button 7
    const blue_button_7_span = document.createElement("span");
    blue_button_7_span.textContent = "Games";
    blue_button_7.innerHTML = "";
    blue_button_7.appendChild(blue_button_7_span);

    // Blue button 8
    const blue_button_8_span = document.createElement("span");
    blue_button_8_span.textContent = "Sound";
    blue_button_8.innerHTML = "";
    blue_button_8.appendChild(blue_button_8_span);

    // Blue button 9
    const blue_button_9_span = document.createElement("span");
    blue_button_9_span.textContent = "Base XP";
    blue_button_9.innerHTML = "";
    blue_button_9.appendChild(blue_button_9_span);

    // Blue button 10
    const blue_button_10_span = document.createElement("span");
    blue_button_10_span.textContent = "Info"; //Will need to get the species api for this
    blue_button_10.innerHTML = "";
    blue_button_10.appendChild(blue_button_10_span);

    
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

// gray buttons
const gray_button_1 = document.getElementById("api-toggle-button")
const gray_button_1_span = document.createElement("span");
gray_button_1_span.textContent = "Classic";    
gray_button_1.innerHTML = ""; 
gray_button_1.appendChild(gray_button_1_span);

const gray_button_2 = document.getElementById("llm-toggle-button")
const gray_button_2_span = document.createElement("span");
gray_button_2_span.textContent = "AI";    
gray_button_2.innerHTML = ""; 
gray_button_2.appendChild(gray_button_2_span);

// Buttons that change the mode of the pokedex and display indicators
const api_toggle_button = document.getElementById("api-toggle-button");
api_toggle_button.addEventListener("click", toggle_api_mode);
const api_toggle_indicator = document.getElementById("api-toggle-button-indicator");
const llm_toggle_button = document.getElementById("llm-toggle-button");
llm_toggle_button.addEventListener("click", toggle_llm_mode);
const llm_toggle_indicator = document.getElementById("llm-toggle-button-indicator");


