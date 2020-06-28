import React,{ createContext , useState} from 'react'

export const BookContext = createContext();


const BookContextProvider = (props) => {
  const [ books , setBooks] = useState([
        {title : 'Think and Grow Rich',id  : 1},
        {title : 'The Great Gatsby', id: 2},
        {title : ' Rich Dad Poor Dad',id : 3},
        {title: ' How to win friends and influence people',id : 4},
    ])
    return (
   
        <BookContext.Provider value={ {books} }>
        {props.children}
        </BookContext.Provider>
        
    );
}
 
export default BookContextProvider;