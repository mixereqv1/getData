const getDataBtn = document.querySelector('.getDataBtn');
const list = document.querySelector('.list');

getDataBtn.addEventListener('click',function(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos',true);

    xhr.send();

    xhr.addEventListener('load',function(){
        if(this.status === 200){
            const wynik = xhr.response;
            const jsonWynik = JSON.parse(wynik);

            jsonWynik.forEach( function(a) {
                let pElement = document.createElement('p');
                pElement.innerText = a.id + '. ' + a.title;
                list.appendChild(pElement);
            });
        }
        else{
            list.innerText = 'Status połączenia to ' + this.status;
        }
    })

    xhr.addEventListener('error',function(a){
        list.innerText = 'Brak połączenia internetowego.';
    })
})

// const getDataBtn = document.querySelector('.getDataBtn');
// const list = document.querySelector('.list');

// getDataBtn.addEventListener('click',function(){
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos',true);
//     xhr.send();

//     xhr.addEventListener('load',function(){
//         const wynik = xhr.response;
//         const jsonWynik = JSON.parse(wynik);

//         jsonWynik.forEach( function(a) {
//             let pElement = document.createElement('p');
//             pElement.innerText = a.id + '. ' + a.title;
//             list.appendChild(pElement);
//         });
//     })
// })