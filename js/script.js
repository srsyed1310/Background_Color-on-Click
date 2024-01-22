
const buttons = document.querySelectorAll('.change_color_button')
const body = document.querySelector("body")

buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);

    // if (e.target.id === 'gray') {
    //     body.style.backgroundColor = e.target.id
    //     body.style.color = 'white'
    // }
    // else if (e.target.id === 'white') {
    //     body.style.backgroundColor = e.target.id
    //     body.style.color = 'black'

    // }
    // else if (e.target.id === 'blue') {
    //     body.style.backgroundColor = e.target.id
    //     body.style.color = 'white'
    // }
    // else if (e.target.id === 'yellow') {
    //     body.style.backgroundColor = e.target.id
    //     body.style.color = 'black'

    // }


    switch (e.target.id) {
        case 'gray':
            body.style.backgroundColor = e.target.id
        body.style.color = 'white'

            break;
        case 'white':
            body.style.backgroundColor = e.target.id
        body.style.color = 'black'

            break;
        case 'blue':
            body.style.backgroundColor = e.target.id
        body.style.color = 'white'

            break;
        case 'yellow':
            body.style.backgroundColor = e.target.id
        body.style.color = 'black';

        case 'purple':
            body.style.backgroundColor = e.target.id
        body.style.color = 'white'

            break;
        default:
            body.style.backgroundColor =  'Orange'
        break;
    }


    })
})