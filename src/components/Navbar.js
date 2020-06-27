import React,{useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext';

// class Navbar extends Component{
//     // static contextType= ThemeContext;
//     render()
//     {
       
//         return(
//         <AuthContext>{(authContext)=>(
//              <ThemeContext.Consumer>
//         {(themecontext)=>{
//             const { isAuthenticated , toggleAuth }=authContext;
//              const {isLightTheme,light,dark}= themecontext;
//              const theme= isLightTheme ? light : dark;
//             return(
                
//             <nav style ={{background:theme.ui , color : theme.syntax}}>
//                 <h1>
//                     Context App
//                 </h1>
//                 <div onClick={()=>toggleAuth()}>
//                     {isAuthenticated? 'LoggedIn': 'LoggedOut'}
//                 </div>
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
                    
//                 </ul>
//             </nav>
//             )
//         }}
        
//         </ThemeContext.Consumer>
//         )}
       
//          </AuthContext>
//         );
//     }
// }

const Navbar = () => {
    const { isAuthenticated , toggleAuth }=useContext( AuthContext );
    const {isLightTheme,light,dark}= useContext( ThemeContext );
    const theme= isLightTheme ? light : dark;
    return ( 
        <nav style ={{background:theme.ui , color : theme.syntax}}>
        <h1>
            Context App
        </h1>
        <div onClick={()=>toggleAuth()}>
            {isAuthenticated? 'LoggedIn': 'LoggedOut'}
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            
        </ul>
    </nav>
     );
}
 
export default Navbar;
