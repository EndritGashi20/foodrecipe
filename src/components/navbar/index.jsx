


export default function Navbar(){
    return <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
     <h2 className="text-2x1 font-semibold">FoodRecipe</h2>
     <form>
     <input
          type="text"
          name="search"
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
     </form>
        
    </nav>
}