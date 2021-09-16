import react from 'react'
import ResidentsList from './Residents'
import Search from './Search'
import Error from './Error'

function Index(){

    return(
        <div className="layout-column justify-content-center align-item-center w-50 mx-auto">
            <Search />
            <Error />
            <ResidentsList />
        </div>
    )
}

export default Index;