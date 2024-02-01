

export default function aiChoice(filteredHeroes){
  
    const randomIndex = Math.floor(Math.random() * filteredHeroes.length);
    return filteredHeroes[randomIndex];
  

}