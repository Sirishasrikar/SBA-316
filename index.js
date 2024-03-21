// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'Main Menu', href: '#', subLinks: [
            { text: 'Know More', href: 'pages/knowmore.html' },
            { text: 'LogIn', href: 'pages/login.html' },
            { text: 'SignUp', href: 'pages/signup.html' },
        ]
    }
];
//Cache at least one element using querySelector or querySelectorAll.
let mainEl = document.querySelector('main');
console.log("This is mainE1" + mainEl);

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.style.textAlign = 'center';
mainEl.classList.add("flex-ctr");

//part 2

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//Modify the style and/or CSS classes of an element in response to user 
//interactions using the style or classList properties.
topMenuEl.classList.add("flex-around");
//topMenuE1.setAttribute("hidden", "hidden");


for (let i = 0; i < menuLinks.length; i++) {
    let linkItem = menuLinks[i];
    let aEl = document.createElement('a');
    aEl.setAttribute('href', linkItem.href);
    //Modify the HTML or text content of at least one element in 
    //response to user interaction using innerHTML, innerText, or textContent.
    aEl.textContent = linkItem.text;
    topMenuEl.appendChild(aEl);
}





//Lab 316.3.1
//Cache at least one element using selectElementById.
let subMenuEl = document.getElementById("sub-menu");


//Register at least two different event listeners and create the associated event handler functions
topMenuEl.addEventListener('click', function (event) {
    subMenuEl.innerHTML = '';

    var clickedMenuName = event.target.text;

    for (let i = 0; i < menuLinks.length; i++) {
        let linkItem = menuLinks[i];

        if (clickedMenuName == linkItem.text) {
            var subMenuLinks = linkItem.subLinks;

            console.log("subMenuLinks.length " + subMenuLinks.length)
//Iterate over a collection of elements to accomplish some task.
            for (k = 0; k < subMenuLinks.length; k++) {
              //Create at least one element using createElement. 
                let aE2 = document.createElement('a');
                aE2.setAttribute('href', subMenuLinks[k].href);
                aE2.textContent = subMenuLinks[k].text;
                //Use appendChild and/or prepend to add new elements to the DOM.
                subMenuEl.appendChild(aE2);
            }
        }
    }


    if (subMenuEl.style.display == "block") {
        subMenuEl.style.display = "none";

    } else {
        subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
        subMenuEl.style.height = '100%';
        subMenuEl.classList.add("flex-around");
        subMenuEl.style.display = "block";
    }
})





function buildSubmenu(subLinks) {

    subMenuEl.innerHTML = ''; // Clear current contents of submenu
    subLinks.forEach(function (link) {
        const submenuLink = document.createElement('a');
        submenuLink.setAttribute('href', link.href);
        submenuLink.textContent = link.text;
        subMenuEl.appendChild(submenuLink); // Append submenu link to submenu
    })
}
