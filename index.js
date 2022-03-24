const input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('click', function() {
        alert('I done been clicked!')
    })
}
addingEventListener()

// alt solution
// function clickAlert() {
//   alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);