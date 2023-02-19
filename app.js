const sections=document.querySelectorAll('.section')
const sectionBtn=document.querySelectorAll('.controlls')
const sectBtn=document.querySelectorAll('.control');
const allSections=document.querySelector('.main-content')

function pageTransition(){
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.active-btn')
            currentBtn[0].classList.remove('active-btn')
            this.className+=' active-btn';
        })
    }
}

function sectionTransition(){
    allSections.addEventListener('click',(e)=>{
        const id=e.target.dataset.id
        if(id){
         sections.forEach((btn)=>{
            console.log(btn);
             btn.classList.remove('active')
         })
         const element=document.getElementById(id)
//         //  console.log(element)
         element.classList.add('active')
        }
     })
}

function themeTransition(){
    const themeBtn=document.querySelector('.theme-btn')
    themeBtn.addEventListener('click',()=>{
        let element=document.body
        element.classList.toggle('light-mode')
        console.log(element);
    })
}

// function notActive(){
//     sectionBtn.forEach((btn)=>{
//         if(!btn.classList.contains('active')){
//             btn.style.display='none'
//         }
//     })
// }
// notActive()
pageTransition()
sectionTransition()
themeTransition()