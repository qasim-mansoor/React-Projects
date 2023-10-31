const list = ["Qasim", "Mansoor", "Ali"]

let html = "<ul>"

list.forEach(element => {
    html += `<li> ${element} </li>`
});

html += `</ul>`
console.log(html)

ReactDOM.render(<ul><li> Qasim </li><li> Mansoor </li><li> Ali </li></ul>, document.getElementById("root"))