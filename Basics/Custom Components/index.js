function MainContent(){
    return(<h1>
        This is a custom component
    </h1>)
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
)