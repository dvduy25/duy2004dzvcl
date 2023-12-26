var web = Array.from(document.querySelectorAll('.web'))
web.forEach(function(el){
   var hd= el.querySelector('.header1')
    var con=el.querySelector('.cong')
    var logo=el.querySelector('.logo')
    var gioi=el.querySelector('.gioi')
    var tuyen=el.querySelector('.tuyen')
    var hd=document.querySelector('.web-hd')
    var x= el.querySelector('.fa-solid.fa-xmark')
    logo.addEventListener('click', () => {
        web-hd.scrollIntoView({
            behavior: "smooth"
        })
    })
    x.addEventListener('click',function() { 
        if(el.classList.value.indexOf('a4')>1){
                el.classList.remove('a4')
            }
    })
    con.addEventListener('click',function() { 
        if(el.classList.value.indexOf('bew')==-1){
            el.classList.add('bew')
            
        }if(el.classList.value.indexOf('a1')==-1){
                el.classList.add('a1')
                el.classList.remove('a2')
                el.classList.remove('a3')
                el.classList.remove('a4')
            }
    })
    logo.addEventListener('click',function() {
        if(el.classList.value.indexOf('bew')>0){
            el.classList.remove('bew')
            el.classList.remove('a1')
                el.classList.remove('a2')
                el.classList.remove('a3')
        }
    })
    gioi.addEventListener('click',function() {
        if(el.classList.value.indexOf('bew')==-1){
            el.classList.add('bew')
            
        }if(el.classList.value.indexOf('a2')==-1){
                el.classList.remove('a1')
                el.classList.add('a2')
                el.classList.remove('a3')
                el.classList.remove('a4')
            }
    })
    tuyen.addEventListener('click',function() {
        if(el.classList.value.indexOf('bew')==-1){
            el.classList.add('bew')
            
        }if(el.classList.value.indexOf('a3')==-1){
                el.classList.remove('a1')
                el.classList.remove('a2')
                el.classList.add('a3')
                el.classList.remove('a4')
            }
    })
    hd.addEventListener('click',function() { 
        if(el.classList.value.indexOf('bew')>1){
            el.classList.remove('bew')
            
        }if(el.classList.value.indexOf('a4')==-1){
                el.classList.remove('a1')
                el.classList.remove('a2')
                el.classList.remove('a3')
                el.classList.add('a4')
            }
    })
})



$(document).ready(function() {
    $('.tb-a7b').slick({
        dots: true,
      infinite: true,
      speed: 500,
     fade: true,
      cssEase: 'linear'

    });
});
window.addEventListener('scroll', () => {
    var mb = document.querySelector('.web-a')
    if (window.scrollY > 0) {
        mb.classList.remove('mba');

    } else {
        mb.classList.add('mba');
    }
})