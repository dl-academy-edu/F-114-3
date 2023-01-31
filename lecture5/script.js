(function() {
    // получаем ссылку на наше контекстное меню и его кнопку.
    const contextMenu = document.querySelector('.contextmenu_js');
    const contextMenuBtn = document.querySelector('.contextmenu__button_js');

    // Проверка на наличие контекстного меню и кнопки в вёрстке.
    if (!contextMenu || !contextMenuBtn) return;

    // Вешаем слушатель на событие которое у нас связано с контекстным меню.
    window.addEventListener('contextmenu', (e) => {
        e.preventDefault(); // Ломаем стандартное поведение события.

        // Толкам элемент от границ экрана в соответствии с позицией курсора.
        contextMenu.style.top = `${e.clientY}px`;
        contextMenu.style.left = `${e.clientX}px`;

        contextMenu.classList.remove('contextmenu_hidden');

        window.addEventListener('scroll', scrollHandler);
        window.addEventListener('click', clickHandler);
        window.addEventListener('keydown', escHandler);
        contextMenuBtn.addEventListener('click', contextBtnHandler);
    })

    function contextBtnHandler() {
        closeMenu();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }


    function closeMenu() {
        window.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('click', clickHandler);
        window.removeEventListener('keydown', escHandler);
        contextMenuBtn.removeEventListener('click', contextBtnHandler);
        contextMenu.classList.add('contextmenu_hidden');
    }

    function scrollHandler(e) {
        console.log('scrollHandler');
        closeMenu();
    }

    function clickHandler(e) {
        console.log('clickHandler');
        if(!contextMenu.contains(e.target)) {
            closeMenu();
        }
    }

    function escHandler(e) {
        console.log('escHandler');
        if(e.keyCode === 27) {
            closeMenu();
        }
    }
})();
