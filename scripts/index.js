// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard(item, onDeleteCard) {
    const itemCard = cardTemplate.querySelector('.places__item').cloneNode(true);
    const deleteButton = itemCard.querySelector('.card__delete-button');
    const cardImage = itemCard.querySelector('.card__image');
    cardImage.src = item.link;
    cardImage.alt = item.name;
    itemCard.querySelector('.card__title').textContent = item.name;

    // Передаем функцию onDeleteCard как колбэк
    deleteButton.addEventListener('click', onDeleteCard);

    return itemCard; 
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
    evt.target.closest('.places__item').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function(item) {
    const itemCard = createCard(item, deleteCard);
    cardsContainer.append(itemCard);
});
