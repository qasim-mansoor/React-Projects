const list = ["Qasim", "Mansoor", "Ali"]

function ls () {
    let html = undefined
    list.forEach(element => {
        html += <li>${element}</li>
    })

    return (html)
}

ReactDOM.render(
    <div>
        <ls />
    </div>,
    document.getElementById("root")
)