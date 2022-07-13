const $id = document.querySelector('.advice__id'),
    $btnNext = document.querySelector('.advice__next'),
    $text = document.querySelector('.advice__p');

const apiFetch = async () =>{

    const response = await fetch('https://api.adviceslip.com/advice');

    const json = await response.json();

    $text.textContent = `"${json.slip.advice}"`;
    $id.textContent = json.slip.id;

}

$btnNext.addEventListener('click',() => {
    apiFetch()
})    