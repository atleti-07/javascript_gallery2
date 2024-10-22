// JavaScript
//console.log('Hello world!');

const items = document.querySelectorAll('.img-item');
console.log(items);

console.log(items.length);

// for文
for(let i = 0; i < items.length; i++){

    const keyframes = {
      opacity: [0, 1],
      translate: ['0 -100px', 0],
      filter: ['blur(5px)', 'blur(0)'],
    };
    
    const options = {
      duration: 600,
      delay: i * 400,
      fill: 'forwards',
      delay: i * 600,
    };
  
    items[i].animate(keyframes, options);
  }