let grandTitle = document.querySelector('#grandTitle');
/* grandTitle.onclick = function(){
    alert('Обработчик щелчка из script.js');
}
*/
grandTitle.addEventListener('click',
    (event) => {
        alert('Обработчик, назначенный через addEventListener');
    })
grandTitle.addEventListener('mousemove',
    (event) => {
        console.log('перемещение мыши');
    })
