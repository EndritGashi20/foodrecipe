import { createContext, useState } from "react"
export const GlobalContext = createContext(null);




export default function GlobalState({ children }) {
    const [searchParam,setSearchParam]= useState("");
    const[loading,setloading]=useState(false);
    const[recipeList,setRecipeList]=useState([]);
         async function handleSubmit(event){
            event.preventDefault();
            try{
             const res = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
              );
              const data = await res.json(); 
              if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                setloading(false)
                setSearchParam('')
              }
         
            }catch(e){
          console.log(e);
          setloading(true)
          setSearchParam('')
          
            }
         }
         console.log(loading,recipeList);
    return <GlobalContext.Provider value={{searchParam,loading,recipeList,setSearchParam,handleSubmit}}>{children}</GlobalContext.Provider>
}