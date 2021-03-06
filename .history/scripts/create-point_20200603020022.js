function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        // .then( (res) => { return res.json() })   pode resumir o codigo quando tem so um valor (res)
        .then(res => res.json())
        .then(states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${stade.nome}</option>`
            }
        })
}

poputalteUSs()


function getCities(event) {
    const citySelect = document.querySelector("select{name=city")

    const ufValue = event.target.value


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios`

    fetch(url)
        // .then( (res) => { return res.json() })   pode resumir o codigo quando tem so um valor (res)
        .then(res => res.json())
        .then(cities => {

            for (const city of cities) {
                const citySelect = document.querySelector("select{name=city")
                citySelect.innerHTML += `<option value="${state.id}">${stade.nome}</option>`
            }
        })


}


documento.querySelector("select[name=uf]")
    .addEventListener("change", () => {
        addEventListener.log("mudei", getCities)
    })