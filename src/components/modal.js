/// Открытие модального окна
export function openPopup(popup) {
  // Добавление класса для анимации
  popup.classList.add("popup_is-animated");

  // Использование setTimeout для плавного открытия
  setTimeout(() => {
    popup.classList.add("popup_is-opened");
  }, 1); // Минимальная задержка для начала анимации

  // Обработчик клика для закрытия модального окна по оверлею
  popup.addEventListener('click', closeOverlay);

  // Обработчик нажатия клавиши для закрытия модального окна по Escape
  document.addEventListener('keydown', closeEscape);
};


// Закрытие модального окна
export function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  popup.removeEventListener('click', closeOverlay);
  document.removeEventListener('keydown', closeEscape);
};


// Закрытие по Escape: крепим на нажатие после открытия
export function closeEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
};

// Закрытие по оверлею: прикрепим на клик после открытия попапа
export function closeOverlay(evt) {
  // Проверяем, что кликнули по самому оверлею
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
};