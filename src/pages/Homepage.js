import { useState } from 'react';
import Header from '../components/Header';
import Third from '../components/Third';

function Homepage(){
    const [search,setSearch]=useState("")
    return(
        <>
            <Header
                search={search}
                setSearch={setSearch}
            />

            <Third
                search={search}
            />
        </>
    )
}
export default Homepage