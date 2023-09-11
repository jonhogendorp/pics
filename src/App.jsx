import SearchBar from "./components/searchbar";

function App(){
const  handleSubmit = (term) =>{
    console.log('search with a term', term)
}

    return (
        <div> 
            <SearchBar onSubmit={handleSubmit}/>
        </div>
    )
}

export default App;