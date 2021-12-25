/* == Assigning the toggler button ids to constants == */
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn')


/* == Assigning the dog and cat id nodes to constants == */
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

/* == Adding Event Listeners to the toggler buttons == */



const getRandomCat =  () => {
    fetch('https://aws.random.cat/meow')
    .then(res  => res.json())
    .then(data => {
        cat_result.innerHTML = `<img src="${data.file}"  />`
    })

}

const getRandomDog = () => {
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        //checking for mp4 files
        (data.url.includes('.mp4')) ? getRandomDog : dog_result.innerHTML = `<img src="${data.url}" alt="dog_pic" />`
    })
}

cat_btn.addEventListener('click', getRandomCat);

dog_btn.addEventListener('click', getRandomDog);