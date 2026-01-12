const products = [
    { name: "Nordic Chair", price: "$50.00", image: "/Ecommerce web/img/product-1.png" },
    { name: "Kruzo Aero Chair", price: "$78.00", image: "/Ecommerce web/img/product-2.png" },
    { name: "Ergonomic Chair", price: "$43.00", image: "/Ecommerce web/img/product-3.png" }
];

const services = [{ classname: "shipping", svg: "/Ecommerce web/img/truck.svg", text: "Free Shipping" },
                { classname: "return", svg: "/Ecommerce web/img/return.svg", text: "Hassle Free Returns" },
                { classname: "support", svg: "/Ecommerce web/img/support.svg", text: "24/7 Support" },
                { classname: "shopping", svg: "/Ecommerce web/img/bag.svg", text: "Easy to Shope" }
];

const classList = document.querySelector('#prod-list');
const template = document.querySelector('#prod-template');
const icons_serv = document.querySelector("#services-icons");
const template_serv = document.querySelector("#services-template");


products.forEach((product) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.product-img').src = product.image;
    clone.querySelector('.product-title').textContent = product.name;
    clone.querySelector('.product-price').textContent = product.price;

    classList.appendChild(clone);
})

services.forEach((service) => {
    const clone = template_serv.content.cloneNode(true);
    clone.querySelector(".wrapper-class").classname = service.classname;
    clone.querySelector('.service-img').src = service.svg;
    clone.querySelector('#service-text').textContent = service.text;

    icons_serv.appendChild(clone);
})
    














// const Links = document.querySelectorAll('.nav-link');
// const prodsh = document.querySelector
// Links.forEach((link) => {
//     link.addEventListener('click', (e) => {

//         Links.forEach((link) => {
//             link.classList.remove('active');
//         })
//         link.classList.add('active');
//     })
// })


