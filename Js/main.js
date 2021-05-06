const menu = [
    {
        id: 1,
        category: `web-design`,
        img: './images/web-design01.jpg'
    },
    {
        id: 2,
        category: `web-design`,
        img: './images/web-design02.jpg'
    },
    {
        id: 3,
        category: `web-design`,
        img: './images/web-design03.jpg'
    },
    {
        id: 4,
        category: `web-design`,
        img: './images/web-design04.jpg'
    },
    {
        id: 5,
        category: `graphic-design`,
        img: './images/graphic-design01.jpg'
    },
    {
        id: 6,
        category: `graphic-design`,
        img: './images/graphic-design02.jpg'
    },
    {
        id: 7,
        category: `graphic-design`,
        img: './images/graphic-design03.jpg'
    },
    {
        id: 8,
        category: `graphic-design`,
        img: './images/graphic-design04.jpg'
    },
    {
        id: 9,
        category: 'illustration',
        img: './images/illustration01.jpg'
    },
    {
        id: 10,
        category: 'illustration',
        img: './images/illustration02.jpg'
    },
    {
        id: 11,
        category: 'illustration',
        img: './images/illustration03.jpg'
    },
    {
        id: 12,
        category: 'paint',
        img: './images/paint01.jpg'
    },
    {
        id: 13,
        category: 'paint',
        img: './images/paint02.jpg'
    },
    {
        id: 14,
        category: 'paint',
        img: './images/paint03.jpg'
    },
];

const projectMenu = document.querySelector('.menu');
const containerBtns = document.querySelector('.btn-container');


// load items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="col-md-3 mt-4 mt-md-5"><img src=${item.img} alt=${item.category}></div>`;
    })
    displayMenu = displayMenu.join("");
    projectMenu.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, [`all-work`]);
    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="project-btn text-uppercase mr-2 mr-md-5" data-id=${category}>${category}</button>`
    }).join('');
    containerBtns.innerHTML = categoryBtns;
    const projectBtns = containerBtns.querySelectorAll('.project-btn');
    // filter items 
    projectBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            })
            // console.log(menuCategory);
            if (category === `all-work`) {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory);
            }
        })
    })
}

