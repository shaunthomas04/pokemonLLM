function update_screen_text(text) {
    var myDiv = document.getElementById("screen");
    myDiv.textContent = text;
}
function clear_text(){
    var myDiv = document.getElementById("screen");
    myDiv.textContent = "";
}


const button = document.getElementById("bottom-screen-button")
button.addEventListener("click", clear_text);

var placeholder_text = "Pokémon, short for Pocket Monsters, is a global phenomenon that began as a video game series developed by Game Freak and published by Nintendo, first launched in 1996 in Japan. Since then, it has evolved into a massive franchise that includes not only video games but also trading card games, animated television series, movies, merchandise, and a cultural impact that spans generations. The central concept of Pokémon revolves around capturing, training, and battling creatures called Pokémon, each with their own unique abilities, types, and characteristics. Trainers, the human protagonists of the series, travel across various regions to catch Pokémon and compete in battles against other trainers, often aiming to become the Pokémon Champion by defeating powerful trainers known as Gym Leaders and the Elite Four. Pokémon come in many shapes, sizes, and types, with over 800 species introduced across different generations of games, each classified into categories like Fire, Water, Grass, Electric, Psychic, and many others. The concept of type matchups where certain types are strong or weak against others adds a layer of strategy to battles, making Pokémon not just a game of brute strength but one that requires thought and planning. One of the defining features of the Pokémon franchise is the idea of evolution, where Pokémon can change into more powerful forms after reaching a certain level or meeting specific conditions, creating a sense of progression and growth for players. In addition to battling, trading is an essential aspect of Pokémon, with the games encouraging players to connect with one another to trade Pokémon, allowing them to complete their Pokédex, a comprehensive list of all Pokémon species. Over time, Pokémon has also expanded its reach with spin-offs like Pokémon Go, which took the world by storm with its augmented reality gameplay, allowing players to catch Pokémon in the real world using their smartphones. The franchise has fostered a strong sense of community, with players from around the world participating in tournaments, competitions, and events, all while celebrating the love for Pokémon through various forms of media and fan activities. Whether it's the thrill of discovering a new Pokémon species, the joy of training and evolving your favorite creatures, or the excitement of trading and battling with friends, Pokémon continues to captivate hearts and minds worldwide, remaining a cherished part of pop culture for decades.";

update_screen_text(placeholder_text);

