let index = 0;
let next = () => { };

const spinning = [
    { transform: 'rotateX(0) scaleX(1)'},
    {transform: 'rotateX(180deg) scale(0.5)'},
    { transform: 'rotateX(360deg) scaleX(1)'}
  ];
  
const timing = {
    duration: 1000,
    iterations: 1,
  }
  
 
  

function switchNews() {
    const news = document.querySelectorAll('.carosel__item');
    document.getElementById('news').animate(spinning, timing);
    
    setTimeout(() => {
        let prev = index;
        
        index = index + 1;
        if (index > news.length - 1) {
            index = 0;
        }
        
        news[index].classList.add('carosel__active');
        news[prev].classList.remove('carosel__active');
    }, 200);

    next = () => { };

    setTimeout(() => {
        next = switchNews;
    }, 1000);
}


window.onload = () => {
    next = switchNews;
    const news = document.querySelectorAll('.carosel__item');
    if(news.length > 0) {
        news[index].classList.add('carosel__active');
    }
    window.scrollTo(0, 0);
}