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

    // const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex // akie pega o index ou indice do elemento selecionado dentro do conjunto
    stateInput.v alue = event.target.options[indexOfSelectedState].text

    const ufValue = event.target.value


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        // .then( (res) => { return res.json() })   pode resumir o codigo quando tem so um valor (res)
        .then(res => res.json())
        .then(cities => {

            citySelect.innerHTML = ""

            for (const city of cities) {
                const citySelect = document.querySelector("[name=city]")
                citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            }
            citySelect.disabled = false
        })
}

// document.querySelector("select[name=uf]")
//     .addEventListener("change", () => {
//         addEventListener.log("mudei", getCities)
//     })

// depois fica assim:

document.querySelector("select[name=uf]")
    .addEventListener("change", getCities)