const elForm=document.querySelector(".hero__form");
const elFormInput=document.querySelector(".hero__input");
const elOption=document.querySelector(".hero_options");
const elResult=document.querySelector(".hero__result");

elForm.addEventListener('submit',function(event){
    event.preventDefault();
    const nameUser=elFormInput.value;
    const selectName=elOption.value;

    elResult.textContent=`${nameUser} VS ${selectName}`;
})