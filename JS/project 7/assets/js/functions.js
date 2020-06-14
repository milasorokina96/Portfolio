function timeout(sms, time = 0) {
    return new Promise(done => {
       timeOut = setTimeout(() => done(sms), time * 1000);
    });
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function randomMessage() {
    const form = document.forms.chatSendForm;
    let userSms = form.elements.chatSentSms;
    let browserSms;
    if (userSms.value === 'Пока' || userSms.value === 'Bye') {
        browserSms = 'Прощайте!';
    } else {
        browserSms = [
            'Привет, я - Бот психологической помощи для сильной и независимой девушки💁🏻‍♀',
            'Пока ты психуешь где-то грустит одна коала🐨',
            'Единороги сами себя не нафантазируют🦄',
            'И для кого это все?',
            'Можно подумать мне это нужно...',
            'Ясно.',
            'Ой все',
            'Мой руки с мылом больше 30 сек',
            'Скупи все антисептики!',
            'Продезинфицируй все что видишь👀'
        ][rand(0, 9)];
    }
    return timeout(browserSms, rand(1, 10));
    clearTimeout(timeOut);
}

function createSms(text, classWhoseSms) {
    const chatArea = document.getElementById('chatArea');
    const sms = document.createElement('div');
    sms.classList.add('chat__sms', classWhoseSms);
    sms.innerText = text;
    chatArea.appendChild(sms);
    document.querySelector('.chat__sms:last-child').scrollIntoView();
}

async function showBrowserAnswer() {
    const browserSms = await randomMessage();
    createSms(browserSms, 'chat__browserSms');
}

function sendSms() {
    const sendBtn = document.getElementById('btnSendSms');
    sendBtn.addEventListener('click', () => {
        const form = document.forms.chatSendForm;
        let userSms = form.elements.chatSentSms;
        if(userSms.value) {
            createSms(userSms.value, 'chat__userSms');
            if (userSms.value === 'Пока' || userSms.value === 'Bye') {
                showBrowserAnswer();
            } else {
                showBrowserAnswer().then(() => browserFinishChat());
            }
            userSms.value = '';
        }
    });
}

async function browserFinishChat() {
    let sms = 'КОНЕЦ:)';
    let browserSms = await timeout(sms, rand(10, 15));
    createSms(browserSms, 'chat__browserSms');
    clearTimeout(timeOut);
}