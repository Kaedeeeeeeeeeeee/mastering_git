console.log('tes');
console.log('elo git')
console.log('elo git')
console.log('elo git')
console.log('elo git')
console.log('elo git')
console.log('elo git')


let names = will;
console.log(`${names} is the dev`);

let obeje = {
    name: 'will',
    age: 21,
    job: 'dev'
};

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
};

setTimeout(() =>{
  alert('timeout')
},3000);