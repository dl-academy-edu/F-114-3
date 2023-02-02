// Работа с формой входа.
(function() {
    // получение формы и её элементов
    const form = document.forms.signIn; // Поиск формы по имени.

    if(!form) return; // Проверка на наличие формы.


    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Ломаем стандартное поведение события. ( Перезагрузку страницы, отправку данных на сервер );
        
        // const userEmail = form.querySelector('input[name=email]');
        const userEmail = form.elements.email;
        const userPassword = form.elements.password;
        
        const data = {
            email: userEmail.value,
            password: userPassword.value,
        };

        console.log(data);
    })
})();

function getAll(form) {
    const inputs = form.querySelectorAll('input');
    const textareas = form.querySelectorAll('textarea');
    let result = {}; // объект под результат.
    for (let input of inputs) {
        switch (input.type) {
            case 'radio': {
                if(input.checked) {
                    result[input.name] = input.value; // мы создаем ключ в result по input.name и кладём туда значение нашего input'а.
                }
                break;
            }
            case 'checkbox': {
                if(!result[input.name]) result[input.name] = [];
                if(input.checked) result[input.name].push(input.value);
                break;
            }
            case 'file': {
                result[input.name] = input.files;
                break;
            }
            default: {
                result[input.name] = input.value;
            }
        }
    }
    
    for(let textarea of textareas) {
        result[textarea.name] = textarea.value;
    }

    return result;
}

function isEmailCorrect(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}

function setError(input, messageError) {
    if(input[0]) {
        // функция при работе с итерабельными элементами
        setErrorChecked(input, messageError);
    } else {
        // функция при работе с обычными элементами
        setErrorText(input, messageError);
    }
}

function setErrorChecked(inputs, messageError) {
    const error = errorCreator(messageError);
    inputs[0].parentElement.parentElement.insertAdjacentElement('afterend', error);
    function handler() {
        error.remove();
        for(let input of [...inputs]) {
            input.removeEventListener('input', handler);
            input.classList.remove('is-invalid');
        }
    }
    for(let input of [...inputs]) {
        input.classList.add('is-invalid');

        input.addEventListener('input', handler);
    }
}

function setErrorText(input, messageError) {
    const error = errorCreator(messageError);
    input.classList.add('is-invalid');
    input.insertAdjacentElement('afterend', error);
    input.addEventListener('input', () => {
        error.remove();
        input.classList.remove('is-invalid');
    }, {once: true});
}

function errorCreator(message) {
    let messageError = document.createElement('div');
    messageError.classList.add('invalid-feedback');
    messageError.innerText = message;
    return messageError;
}

// Работа с формой регистрации.
(function() {
    const form = document.forms.signUp;

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // ломаем стандартное поведение события.
        const errorsOldMessages = document.querySelectorAll('.invalid-feedback');
        for (let error of errorsOldMessages) error.remove();

        const userData = getAll(form);
        let errors = {}; // объект под ошибки.

        // проверка на выбранный чекбокс
        if(!userData.accepnt) errors.accepnt = 'Пожалуйста выберите пункт';
        // Проверка на правильность заполнения email при помощи функции isEmailCorrect. 
        if(!isEmailCorrect(userData.email)) errors.email = 'Пожалуйста введите корректный e-mail';
        // Проверка пароля на наличие 6 или более символов.
        if(userData.password.length < 6) errors.password = 'Пароль слишком короткий';

        if(Object.keys(errors).length) {
            Object.keys(errors).forEach((key) => {
                // 1-ый аргумент наш инпут, 2-ой текст ошибки
                setError(form.elements[key], errors[key]);
            })
            return;
        }

        const data = {
            email: userData.email,
            password: userData.password,
            name: userData.name,
            accepnt: userData.accepnt,
            avatar: userData.avatar,
        };
        // Якобы отправка данных
        console.log(data);
    })
})();