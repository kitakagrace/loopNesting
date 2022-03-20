//Loop Nesting

let bobsFollowers = ['Kenny','Luke','Mark','John'];
let tinasFollowers = ['Kenny','Luke', 'Striga'];

let mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}