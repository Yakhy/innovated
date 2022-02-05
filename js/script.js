$(function(){
    let switchItem = $('.switch-item');

    switchItem.on('click', function(){
        $(this).addClass('btn');
        $(this).siblings().removeClass('btn')
    })
})











// let fill = document.querySelectorAll('.progress-fil');
// for(let i = 0; i < fill.length; i++){
//     fill[i].style.width = fill[i].getAttribute('data-percent'); 
// }
