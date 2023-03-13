const featureArrowDown = document.getElementById('feature-arrow-down');
const featureArrowUp = document.getElementById('feature-arrow-up');
const companyArrowDown = document.getElementById('company-arrow-down');
const companyArrowUp = document.getElementById('company-arrow-up');
const featureDrop = document.querySelector('.dropdown-one');
const companyDrop = document.querySelector('.dropdown-two');
const menu = document.getElementById('menu-bar');
const closeMenu = document.getElementById('close-menu');
const dropdown = document.querySelector('.links');
const container = document.querySelector('.container')


const menuDrop =function(){
    dropdown.classList.toggle('menu-style');
    container.classList.toggle("blur");
}
menu.addEventListener('click',(e) => {
    menuDrop()
})
closeMenu.addEventListener('click',(e) => {
    menuDrop()
})
const featureToggleDropdown = function(){
    console.log ('Hell') ;
    featureDrop.classList.toggle('dropdown-one');
    featureArrowDown.style.display = 'none';
    featureArrowUp.style.display = 'inline-block';
}
const featurePullToggle = function(){
    featureArrowDown.style.display = 'inline-block';
    featureArrowUp.style.display = 'none';
    featureDrop.classList.toggle('dropdown-one');
}

featureArrowDown.addEventListener ("click",(e) =>{
    featureToggleDropdown()
}
)
featureArrowUp.addEventListener('click',(e) =>{
    featurePullToggle()
})
const companyToggleDropdown = function(){
    companyDrop.classList.toggle('dropdown-two');
    companyArrowDown.style.display = 'none'
    companyArrowUp.style.display = 'inline-block'
}
const companyPullToggle = function(){
    companyArrowDown.style.display = 'inline-block';
    companyArrowUp.style.display = 'none';
    companyDrop.classList.toggle('dropdown-two');
}
companyArrowDown.addEventListener ("click",(e) =>{
    companyToggleDropdown()
}
)
companyArrowUp.addEventListener('click',(e) =>{
    companyPullToggle()
})