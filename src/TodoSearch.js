import react from 'react';
/* import './search.css'; */
function TodoSearch({searchValue, setSearchValue}) {
    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return [
        <input className='TodoSearch' 
        id='boris' 
        placeholder='Cebolla'
        value={searchValue}
        onChange={onSearchValueChange}
        />,
        
    ]      
};

export {TodoSearch};