//필터창 체크박스
const new_btn = document.querySelectorAll('.new_btn');

new_btn.forEach(button => {   
button.addEventListener('click',() => {
        button.classList.toggle('active');
     });
}) ;


const scrollBox = document.querySelector('.scroll_box');

scrollBox.addEventListener('scroll', function() {
    console.log('영역 스크롤 중');
    console.log(scrollBox.scrollTop);
});
