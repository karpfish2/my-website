document.getElementById('inputText').addEventListener('input', function() {
    const inputText = this.value;
    const formattedText = inputText.split('').join(' ').toUpperCase();
    document.getElementById('outputText').value = formattedText;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');

    // Показываем уведомление
    const notification = document.getElementById('notification');
    notification.classList.add('show');

    // Скрываем уведомление через 3 секунды
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
});