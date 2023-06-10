'use strict'
// INFO
const myInfo = document.querySelector(('.myInfo'))
const btnSubmit = document.querySelector('.btnSubmit')
const checkEmail = document.querySelector('.checkEmail')
const label = document.querySelector('.form-label')
const mb3 = document.querySelector('.mb-3')
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

myInfo.classList.add('hidden')
btnSubmit.addEventListener('click', function() {
  if(regex.test(checkEmail.value)) {
    myInfo.classList.remove('hidden');
    mb3.classList.add('hidden');
  }
  else{
    label.textContent = "Hay nhap dia chi email hop le.\nExample@gmail.com";
  }
})

// JOB-INFO
const information = document.querySelectorAll('.style-information')
const btnView = document.querySelectorAll('.btn-view')
const styleInfo = document.getElementsByClassName('style-info')

information.forEach((item) => {
  item.style.display = "none"
});
btnView.forEach((item) =>{
  item.style.display = "none"
})

for(let i = 0; i<styleInfo.length; i++) {
  const viewMore = styleInfo[i].querySelector('.btn-view')
  styleInfo[i].addEventListener('mouseover', () => {
   viewMore.style.display = "block"
  })

  styleInfo[i].addEventListener('mouseout', () => {
    if(viewMore.classList.value.includes('btn-view')) {
      viewMore.style.display = "none"
    }
    else {
      viewMore.style.display = "block"
    }
    
   })

   viewMore.addEventListener('click', () => {
    // console.log(viewMore.parentElement.parentElement.childNodes)
   if(viewMore.classList.value.includes('btn-view')) {
    viewMore.parentElement.parentElement.childNodes[5].style.display = "block"
    viewMore.classList.remove('btn-view')
    viewMore.textContent = "View Less"
   }
   else {
    viewMore.parentElement.parentElement.childNodes[5].style.display = "none"
    viewMore.classList.add('btn-view')
    viewMore.textContent = "View More"
   }
})
}