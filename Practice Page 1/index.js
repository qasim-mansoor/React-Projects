const page = (
    <div>
        <img className="react-logo" src="../Images/react-logo.png"></img>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousand of enterprise apps including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))