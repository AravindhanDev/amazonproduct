// actions

const black = $('.black');
const red = $('.red');
const blue = $('.blue');
const purple = $('.purple');
const btn1 = $('.feature-btn1');
const btn2 = $('.feature-btn2');

// targets

const heartRate = $('.heart-rate');
const time = $('.time').children('p');
const product = $('.product');

btn1.on('click', () => {
    heartRate.css({ display: 'none' });
    time.css({ opacity: '1' });
    setInterval(() => {
        const date = new Date();
        const currentTime = date.toLocaleTimeString().slice(0, 8);
        time.text(currentTime);
    }, 1000);
});

btn2.on('click', () => {
    time.css({ opacity: '0' });
    heartRate.css({ display: 'inline' });
});

black.on('click', () => {
    product.attr('src', './images/watch-black.png');
});
red.on('click', () => {
    product.attr('src', './images/watch-red.png');
});
blue.on('click', () => {
    product.attr('src', './images/watch-blue.png');
});
purple.on('click', () => {
    product.attr('src', './images/watch-purple.png');
});