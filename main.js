
fetch("https://breakingbadapi.com/api/characters").then(res => {
    return (res.json())
}
).then(data => {
    console.log(data)
    let list = `<select onchange="pers(this.value)"><option>Please Select</option>
    ${data.map(dt => `<option>${dt.name}</option>`)}
    </select>`
    document.querySelector(`.container`).innerHTML = list
})

function pers(selected) {
    let op = "";
    fetch(`https://breakingbadapi.com/api/characters?name=${selected}`).then(res => res.json()).then(data => {
        if (selected !== 'Please Select') {
            document.querySelector(`.informations .container .name`).innerHTML = `<span>Name:</span> ${data[0].name}`;
            document.querySelector(`.informations .container .nick-name`).innerHTML = `<span>NickName:</span> ${data[0].nickname}`
            data[0].occupation.forEach(ocp => {
                op += `${ocp}, `
            })
            document.querySelector(`.informations .container .occupation`).innerHTML = `<span>Occupation:</span> <div class="ocp">${op}<div>`;
            document.querySelector(`.informations .container .image`).src = data[0].img
        } else {
            window.location.reload()
        }
    })
}

