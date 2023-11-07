
// const PLAYERS = [
//     "Spiderman",
//     "Captain America",
//     "Wonderwoman",
//     "Popcorn",
//     "Gemwoman",
//     "Bolt",
//     "Antwoman",
//     "Mask",
//     "Tiger",
//     "Captain",
//     "Catwoman",
//     "Fish",
//     "Hulk",
//     "Ninja",
//     "Black Cat",
//     "Volverine",
//     "Thor",
//     "Slayer",
//     "Vader",
//     "Slingo"
// ];

// // initialize players with image and strength
// const initPlayers = (players) => {
//     let detailedPlayers = [];
//     // Create players using for loop
//     // Type your code here
//     for (let index = 0; index < players.length; index++) {
//         detailedPlayers.push({
//             name:players[index],
//             strength:getRandomStrength(),
//             image: `/images/super-${index + 1}.png`,
//             type: index%2===0 
//             ?'hero':'villian',
//         }
//    );
//     }
//     return detailedPlayers;
// }

// // getting random strength
// const getRandomStrength = () => {
//     // Return a random integer (0,100]
//     // Note: You can use Math.random() and Math.ceil()
//     return Math.ceil(Math.random()*100)
// }

// const buildPlayers = (players, type) => {
//     let fragment = '';

//     // Loop through players and accumulate HTML template
//     // depending of type of player(hero|villain)
//     // Type your code here
//     for(let index=0 ; players.length>index ; index++){
//         if (players[index].type=== type){
//             fragment+= `
//             <div class="player">
//             <img src="${players[index].image}" alt="">
//             <div class="name">${players[index].name}</div>
//             <div class="strength">${players[index].strength}</div>
//          </div>`
//         }
//     }
//     return fragment;
// }
// // Display players in HTML
// const viewPlayers = (players) => {

//     document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
//     document.getElementById('villains').innerHTML = buildPlayers(players, 'villian');

// }

// window.onload = () => {
//     viewPlayers(initPlayers(PLAYERS));
// }

//Another way to write same code[concise code]

const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
  ];
  
  // Initialize players with image and strength
  const initPlayers = (players) => {
    return players.map((name, index) => ({
      name,
      strength: getRandomStrength(),
      image: `/images/super-${index + 1}.png`,
      type: index % 2 === 0 ? 'hero' : 'villain',
    }));
  };
  
  // Getting random strength
  const getRandomStrength = () => {
    // Return a random integer (0, 100]
    return Math.ceil(Math.random() * 100);
  };
  
  const buildPlayers = (players, type) => {
    const filteredPlayers = players.filter((player) => player.type === type);
  
    return filteredPlayers.map((player) => `
      <div class="player">
        <img src="${player.image}" alt="">
        <div class="name">${player.name}</div>
        <div class="strength">${player.strength}</div>
      </div>
    `).join('');
  };
  
  // Display players in HTML
  const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
  };
  
  window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
  };
  