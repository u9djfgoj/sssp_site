// Получаем все кнопки на странице
const buttons = document.querySelectorAll('.transparent-button, .white-button');

// Для каждой кнопки добавляем обработчик события mouseover
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    // Если кнопка прозрачная, меняем ее стиль на белый
    if (button.classList.contains('transparent-button')) {
      button.classList.remove('transparent-button');
      button.classList.add('white-button');
    }

    // Если кнопка белая, расширяем ее обводку
    if (button.classList.contains('white-button')) {
      button.style.borderWidth = '4px';
    }
  });

  // Добавляем обработчик события mouseout, чтобы возвращать кнопке исходный стиль
  button.addEventListener('mouseout', () => {
    // Если кнопка белая, возвращаем ее обводке изначальную ширину
    if (button.classList.contains('white-button')) {
      button.style.borderWidth = '2px';
    }

    // Если кнопка белая, меняем ее стиль на прозрачный
    if (button.classList.contains('white-button')) {
      button.classList.remove('white-button');
      button.classList.add('transparent-button');
    }
  });
});
