function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="../Images/react-logo.png" width="40px"></img>
                </nav>
            </header> 
            <h1>Reason I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library</li>
                <li>It'll help me land a job</li>
            </ol>
            <footer>
                <small>© 2023 Ali development. All Rights Reserved.</small>
            </footer>         
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))