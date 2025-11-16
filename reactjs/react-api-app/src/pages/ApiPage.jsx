import React from 'react'
import GridRow from '../components/GridRow/GridRow';
import FetchList from '../components/APIList/Fetch/FetchList';
import AxiosList from '../components/APIList/Axios/AxiosList';


const ApiPage =() => {
    return(<>
    
    
    <GridRow gridcol="grid-cols-2">
        <GridRow className="mb-6 card">
            <h3 className="text-2xl font-bold text-cyan-900">API call with Fetch()</h3>
            <FetchList />
        </GridRow>
        <GridRow className="mb-6 card">
            <h3 className="text-2xl font-bold text-cyan-900">API call with Axios</h3>
            <AxiosList/>
        </GridRow>
        

    </GridRow>
    
    
    
    </>)
}

export default ApiPage;