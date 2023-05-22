import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pokemons from '../pokemon/pokemon'
import DetailsPokemons from '../pokemon/details-pokemons'
const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route  exact path='/' element={<Pokemons />}></Route>
                <Route  exact path='/pokemon/:id' element={<DetailsPokemons />}></Route>
            </Routes >
        </BrowserRouter>
    )
}

export default AppRoutes