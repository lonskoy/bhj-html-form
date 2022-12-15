const widgetSide = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget__area');
const clientMessage = (document.getElementById('chat-widget__input'));
const chatArea = document.getElementById('chat-widget__messages');
const botMessage = ['Повтори, кожанный!', 'Снова ты?', 'Все операторы заняты в отличии от тебя', 'Вернулся к папочке?', 'Вас много, а я один'];
let count = 0;
let tempTime = getTime();

function getTime(){                    
    let toDay = new Date();
    let hour = String(toDay.getHours());
    let minut = String(toDay.getMinutes());
    let time = hour + ':' + minut;
    return time;
}

function renderChatArea(mess) {        //Формирование окна чата
    index = Math.floor(Math.random() * botMessage.length);  //Рандомная фраза бота
    
    
    chatArea.innerHTML += '<div class="message message_client"><div class="message__time">'+ tempTime +'</div><div class="message__text">'+ mess +'</div></div>';
    setTimeout(() => {
        chatArea.innerHTML += '<div class="message"><div class="message__time">' + tempTime + '</div><div class="message__text">' + botMessage[index] + '</div></div>';
    }, 1000); 
}

function sendMessage() {                           //Отправка сообщений пользователя в чат и проверка
    let temp = clientMessage.value;
    temp.length > 0 ? (renderChatArea(temp), temp = null, clientMessage.value = '') : (Alert('Пустое сообщение!'));
    count = 0;
}

widgetSide.addEventListener('click', () => {   //Клик на виджете справа
    widgetSide.classList.add('noactive');
    chatWidget.classList.add('active');
    
    setInterval(function() {                              //Прокрутка автоматически скрола вниз ??НЕ РАБОТАЕТ?? и отслеживание простоя  
        count += 1;
        console.log(count);
        if (count === 30) {
            chatArea.innerHTML += '<div class="message"><div class="message__time">' + tempTime + '</div><div class="message__text">Ты там уснул?</div></div>';
            count = 0;
        }
        this.scrollTo(0, document.body.scrollHeight);  //?????
    }, 1000);
});

clientMessage.addEventListener('keydown', (k) => {  //Нажатие Enter в поле ввода сообщения 
    if(k.key === 'Enter') {
        sendMessage();
    }
});


