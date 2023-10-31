function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img src="../Images/react-logo.png" className="nav-logo"></img>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header> 
    )
}

function MainContent() {
    return (
        <div>
            <h1 className="content-list-heading">Reason I'm excited to learn React</h1>
            <ol className="content-list">
                <li>It's a popular library</li>
                <li>It'll help me land a job</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>© 2023 Ali development. All Rights Reserved.</small>
        </footer>   
    )
}


function Page() {
    return (
        <div>
            <Header />
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))