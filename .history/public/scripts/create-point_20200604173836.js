function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        // .then( (res) => { return res.json() })   pode resumir o codigo quando tem so um valor (res)
        .then(res => res.json())
        .then(states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex // aqui pega o index ou indice do elemento selecionado dentro do conjunto
    stateInput.value = event.target.options[indexOfSelectedState].text



    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        // .then( (res) => { return res.json() })   pode resumir o codigo quando tem so um valor (res)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                const citySelect = document.querySelector("[name=city]")
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false
        })
}

// document.querySelector("select[name=uf]")
//     .addEventListener("change", () => {
//         addEventListener.log("mudei", getCities)
//     })

// depois fica assim:

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// Items de coleta
// pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = [] // let é uma variavel que pode mudar const nao pode mudar

function handleSelectedItem(event) {
    const itemLi = event.target

    // adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")


    const itemId = itemLi.dataset.id

}


// verificar se existem itens selecoinados, se sim 
// pegar os itens selcionados
// pode escrever de forma resumida      
//  const alreadySelected = selectedItems.findIndex( item => item == itemId)   ou forma completa
const alreadySelected = selectedItems.findIndex(function (item) {
    const itemFound = item == itemId // isso sera true ou false
    return itemFound
})

// se ja estiver selecionado, tirar da seleçao
if (alreadySelected >= 0) {
    //tirar da selação
    const filteredItems = selectedItems.filter(item => {
        const itemIsDifferent = item != itemId
        return itemIsDifferent
    })
    selectedItems = filteredItems
} else {
    // se não estiver selecionado
    // adicionar à seleção
    selectedItems.push(itemId)
}

// atualizar o campo escondido com os itns selecionados
collectedItems.value = selectedItems