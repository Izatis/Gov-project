// Устанавливаем обновляемую дату

function updateDate() {
    var now = new Date();
    var dateElements = document.querySelectorAll('.date');
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElements.forEach(function (dateElement) {
      dateElement.innerHTML = now.toLocaleDateString('ru-RU', options);
    });
  }
  
  setInterval(updateDate, 100);