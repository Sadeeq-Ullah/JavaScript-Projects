import { products, services, testimonial }
    from './json.js';

const classList = document.querySelector('#prod-list');
const template = document.querySelector('#prod-template');
const icons_serv = document.querySelector("#services-icons");
const template_serv = document.querySelector("#services-template");
const templtest = document.querySelector(".testimonial-temp");
const testwrapper = document.querySelector(".testimonials-wrapper");


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

// Clone the first card to the end for smooth infinite scrolling
const firstCardClone = testwrapper.firstElementChild.cloneNode(true);
testwrapper.appendChild(firstCardClone);

const frame = document.querySelector(".testimonial-frame");
const wrapper = frame.querySelector(".testimonials-wrapper");
const card = wrapper.querySelectorAll(".testimonial-card");
const cardLen = card.length;
console.log(cardLen);

let cardCount = 0;
let cardSlider = (event) => {
    if (event.target.closest("#left-arrow")) {
        console.log('left')
        cardCount--;
        card.forEach(prev_card => {
            prev_card.style.transition = "transform 0.3s ease-in-out";
            prev_card.style.transform = `translateX(${cardCount * -100}%)`;
        });
        
        if (cardCount < 0) {
            cardCount = cardLen - 1; // Jump to the last real card (skipping clone)
        }

    } else if (event.target.closest("#right-arrow")) {
        cardCount++;
        card.forEach(next_card => {
            next_card.style.transition = "transform 0.5s ease-in-out";
            next_card.style.transform = `translateX(${cardCount * -100}%)`;
        });

        // If we reached the clone (last card visually looks like first)
        if (cardCount === cardLen) {
            setTimeout(() => {
                cardCount = 0;
                card.forEach(c => {
                    c.style.transition = "none"; // Disable animation
                    c.style.transform = `translateX(0%)`; // Silently reset to start
                });
            }, 500); // Wait for transition to finish (0.5s)
        }
    }
}

frame.addEventListener('click', (event) => {
    cardSlider(event);
});
