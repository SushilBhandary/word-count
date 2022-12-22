

const subject = document.querySelector('#subject')
const char = document.querySelector('#char')

subject.addEventListener( 'input', () => {
    let value = document.querySelector('#subject').value
    console.log(value);
    char.innerHTML = `${ value.length} characters`
})





