document.getElementById('celebrate-button').addEventListener('click', function() {

    const loveSong = document.getElementById('loveSong');
    loveSong.play();

    const message = document.getElementById('birthday-message');
    message.style.opacity = '1'; // نمایش پیام تولد
 
    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle, index) => {
        setTimeout(() => {
            candle.classList.add('light');
            candle.style.transform = 'translateY(-10px)';
        }, index * 500);
    });
 });
 
 // اضافه کردن انیمیشن روشن شدن شمع
 const style = document.createElement('style');
 style.innerHTML = 
` .candle.light {
    background-color: yellow; /* رنگ شمع روشن */
    box-shadow: 0 0 20px yellow;
    transition: background-color 0.5s, transform 0.5s;
 }`
 ;
 document.head.appendChild(style);