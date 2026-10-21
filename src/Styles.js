/*
Создайте функции:
   hasClass(elem, elemСlass),
   addClass(elem, elemСlass),
   removeClass(elem, elemСlass),
   toggleClass(elem, elemСlass),
которые позволяют проверить, есть ли у элемента заданный CSS-класс, добавить к нему CSS-класс, удалить CSS-класс и переключить CSS-класс.

В функции передаются 2 параметра:
   elem - DOM-элемент, который проверяется,
   elemСlass - название класса, которое проверяется.
*/

export function hasClass(elem, elemClass) {
    // Проверяем наличие класса и возвращаем true или false
    return elem.classList.contains(elemClass);
}

export function addClass(elem, elemClass) {
    // Добавляем класс элементу (ничего не возвращаем)
    elem.classList.add(elemClass);
}

export function removeClass(elem, elemClass) {
    // Удаляем класс у элемента (ничего не возвращаем)
    elem.classList.remove(elemClass);
}

export function toggleClass(elem, elemClass) {
    // Переключаем класс: если есть - удалит, если нет - добавит (ничего не возвращаем)
    elem.classList.toggle(elemClass);
}
