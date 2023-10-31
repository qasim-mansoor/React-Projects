function NavBar() {
    return (
        <nav>
            <h1>AI Workbay</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contract</li>
            </ul>
        </nav>
    )
}

ReactDOM.render(        
    <NavBar />,
    document.getElementById("root")
)