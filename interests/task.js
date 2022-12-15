const arrInterestCheck = Array.from(document.getElementsByClassName('interest__check'));
const arrMenuList =[];
const arrItemsMenu = []; //ПОКА НЕ ИСПОЛЬЗУЕТСЯ

arrInterestCheck.forEach(elem => {  //Проверяется предок каждого чекбокса с признаом 'li' на длинну массива children. Если > 1 значит
                                    //содержит вложения
    let temp = elem.closest('li');  
    if (temp.children.length > 1) {
        arrMenuList.push(temp.children);  //Добавляем в массив всех "родителей", содержащих вложенные пункты
    }
    else {
        arrItemsMenu.push(temp.children[0]); //Добавляем в массив все эллементы, НЕ содержащие вложенные пункты
    }
});

console.log(arrMenuList);

    arrMenuList.forEach(elem => { //Навешиваем событие клик на все категории с вложенными эллементами для выделения/снятия по клику на "родителя"
        elem[0].addEventListener('click', () => {
        for(let i = 0; i < elem[1].children.length; i++) {
            if(elem[0].children[0].checked === true) {
                 elem[1].children[i].children[0].children[0].checked = true;  //выделить вложенные эллементы
            }
            else {
                elem[1].children[i].children[0].children[0].checked = false;  //снять выделение вложенных эллементов
            }
        }
    });
    
});
