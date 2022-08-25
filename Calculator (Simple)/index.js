let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('buttons'));

buttons.map ( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            // Padam display @ kosong
            case 'C':
                display.innerText = '';
                break;
            
            case '←':
                // cuma padam sekiranya terdapat nom @ simbol pada display
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0,-1);
                }                
                break;
            
            case '=': 
                try {
                   display.innerText = eval(display.innerText); 
                } catch {
                    display.innerText = 'Error!'
                }                
                break;
            
            /*Untuk display supaya nampak nombor @ symbol*/
            default:
                display.innerText += e.target.innerText;
        }
    });
});