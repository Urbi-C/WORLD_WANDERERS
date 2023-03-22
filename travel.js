const header = document.querySelector("header");
window.addEventListener("scroll",function ()
{
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');
let cls = document.querySelector('.cross');

cls.style.display = 'none';
menu.addEventListener('click', ()=>
{
    navbar.classList.toggle('open');
    if(navbar.classList.contains('open'))
    {
        menu.style.display = 'none';
        cls.style.display = 'inline';
    }
    else
    {
        menu.style.display = 'inline';
        cls.style.display = 'none';
    }
})
cls.addEventListener('click', ()=>
{
    navbar.classList.toggle('open');
    if(navbar.classList.contains('open'))
    {
        menu.style.display = 'none';
        cls.style.display = 'inline';
    }
    else
    {
        menu.style.display = 'inline';
        cls.style.display = 'none';
    }
})
