import { products, services, testimonial }
    from './json.js';

const classList = document.querySelector('#prod-list');
const template = document.querySelector('#prod-template');
const icons_serv = document.querySelector("#services-icons");
const template_serv = document.querySelector("#services-template");
const templtest = document.querySelector(".testimonial-temp");
const testwrapper = document.querySelector(".testimonials-wrapper");
const frame = document.querySelector(".testimonial-frame");
const wrapper = frame.querySelector(".testimonials-wrapper");
const card = wrapper.querySelectorAll(".testimonial-card");
const cardLen = card.length;


products.forEach((product) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.product-img').src = product.image;
    clone.querySelector('.product-title').textContent = product.name;
    clone.querySelector('.product-price').textContent = product.price;
    classList.appendChild(clone);
})

services.forEach((service) => {
    const clone = template_serv.content.cloneNode(true);
    clone.querySelector(".wrapper-class").className = service.classname;
    clone.querySelector('.service-img').src = service.svg;
    clone.querySelector('.service-text').textContent = service.text;
    icons_serv.appendChild(clone);
})

for (let testemdata = 0; testemdata < testimonial.length; testemdata++) {
    const clone = templtest.content.cloneNode(true);
    let perimage = clone.querySelector('.person-1-img');
    let pertitle = clone.querySelector('.person-title');
    perimage.classList.add(`person_${testemdata + 1}-img`);
    perimage.src = testimonial[testemdata].image;
    pertitle.textContent = testimonial[testemdata].title;
    testwrapper.appendChild(clone);
}

frame.addEventListener('click', (event) => {
    cardSlider(event);
});
let cardCount = 0;

let cardSlider = (event) => {
    if (event.target.closest("#left-arrow")) {
        console.log("left");
        cardCount--;
        card.forEach(prev_card => {
            prev_card.style.transform = `translateX(${cardCount * 100}%)`;
        });
        if (cardCount < 0) cardCount = cardLen - 1;

    } else if (event.target.closest("#right-arrow")) {
        cardCount++;
        card.forEach(next_card => {
            next_card.style.transform = `translateX(${cardCount * -100}%)`;
        });
        if (cardCount >= cardLen) cardCount = 0;
    } 
}



