function populateUFs() {
    const ufSelect = document.querySelector("select[name0uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        // .then( (res) => { return res.json() })   pode resumir o codigo quando tem so um valor (res)
        .then(res => res.json())
        .then(states => {
                for (const state of states) {
                    ufSelect.innerHTML += `<option value="1">Valor</option>
                }
       })
}

poputalteUSs()



documento.querySelector("select[name=uf]").addEventListener("change", () => {
    HTMLFormControlsCollection.log("mudei")
} )