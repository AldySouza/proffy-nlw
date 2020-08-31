//Procurar o botão
document.querySelector('#add-time')
//Quando clicar no botão
.addEventListener('click', cloneField)
//Executar uma ação
function cloneField() {
    //Dupliar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    console.log(fields);
    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })
        

    //Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    