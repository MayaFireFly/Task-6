let inputsErrorMessages = {
    "NAME":"Имя может содержать только буквы и пробелы, длина не более 50 символов",
    "LAST_NAME":"Фамилия может содержать только буквы и пробелы, длина не более 50 символов",
    "EMAIL":"Введите корректный адрес электронной почты",
    "PHONE":"Введен некорректный телефонный номер",
    "TEXT":"Поле о себе должно содержать от 3 до 500 символов"
};
function elemOnchange(elem, regex){    
    let strElem = elem.value;
    let container = document.getElementById("message_" + elem.id);
    container.innerHTML = "";
    container.style.backgroundColor = "white";    
    if(strElem != "" && !regex.test(strElem.trim())){
        container.style.backgroundColor = "red";
        container.style.color = "white";
        container.innerHTML = inputsErrorMessages[elem.id];        
    }    
}
window.onload = () => {
    let forData = document.getElementById("for_data");
    forData.dataset.pers = '[{"required":true,"fields":{"NAME":false}},{"required":false,"fields":{"LAST_NAME":true}},{"required":true,"fields":{"EMAIL ":false,"PHONE":false}},{"required":false,"fields":{"TYPE":false}},{"required":false,"fields":{"TEXT":false}}]';
    let name = document.getElementById("NAME");
    let lastname = document.getElementById("LAST_NAME");
    let email = document.getElementById("EMAIL");
    let phone = document.getElementById("PHONE");
    let about = document.getElementById("TEXT");

    let cards = document.querySelectorAll(".card");
    let counterSelectedPurposes = 0;
    cards.forEach((card) => {
        card.addEventListener('click', () => {            
            let text = card.children[1].children[0].innerText;            
            card.style.backgroundColor = "lightskyblue";
            let node = document.createElement("INPUT"); 
            node.value = text;             
            document.getElementById("selected_purposes").appendChild(node);
            counterSelectedPurposes++; 

            if(counterSelectedPurposes > 2){
                let firstChild = document.getElementById("selected_purposes").firstChild;
                cards.forEach((c) => {                    
                    if(c.children[1].children[0].innerText == firstChild.value){
                        c.style.backgroundColor = "white";
                    }
                });
                document.getElementById("selected_purposes").removeChild(firstChild);
                counterSelectedPurposes--;
            }
        });
    });

    const regForName = /[a-zа-я]{1,50} ?/gi;
    const regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const regEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; 
    const regAbout = /[\s\S]{3,500}/g;   
    name.onchange = () => {elemOnchange(name, regForName);};
    lastname.onchange = () => {elemOnchange(lastname, regForName);};
    phone.onchange = () => {elemOnchange(phone, regPhone);};
    about.onchange = () => {elemOnchange(about, regAbout);};
    email.onchange = () => {elemOnchange(email, regEmail);};
};