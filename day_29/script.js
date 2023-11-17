const input = document.getElementById('search');
const completer = document.querySelector('.autocomplete')

completer.style.visibility = 'hidden'

input.addEventListener('input', () => {
    if (input.value.length > 0) {
        completer.style.visibility = 'visible'
    } else {
        completer.style.visibility = 'hidden'
    }

    var firstElement = document.querySelector('.autocomplete a:nth-of-type(1)')
    var secondElement = document.querySelector('.autocomplete a:nth-of-type(2)')
    var thirdElement = document.querySelector('.autocomplete a:nth-of-type(3)')

    const highlightedText = `<span class="text-autocomplete">${input.value}</span>`;
    firstElement.innerHTML = highlightedText;
    secondElement.innerHTML = `Veritatis et ${highlightedText}`;
    thirdElement.innerHTML = `ut aliquid ex ${highlightedText} vero eos`;

})