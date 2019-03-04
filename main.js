const btnGetData = document.querySelector("#getData");
const list = document.querySelector('.list');


btnGetData.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    //console.log(xhr);

    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos1", true);

    xhr.send();

    xhr.addEventListener('load', function() {
        if(this.status == 200) {
            const wynik = xhr.response;
            const jsonWynik = JSON.parse(wynik);

            jsonWynik.forEach(function(a) {
                const liElement = document.createElement("li");

                liElement.innerText = a.title;

                list.appendChild(liElement);
            });
        }
        else{
            list.innerText = "Error 404 - nie znaleziono";
        }
    })

    xhr.addEventListener('error', function(){
        console.log('error');
    })
});