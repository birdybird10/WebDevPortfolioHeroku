// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import NavigationLinks from './components/NavigationLinks';
import './App.css';


// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import TopicsPage from './pages/TopicsPage'
import HomePage from './pages/HomePage.js'
import GalleryPage from './pages/GalleryPage.js'
import OrderPage from './pages/OrderPage.js'
import StaffPage from './pages/StaffPage.js';
import RecipesPage from './pages/RecipesPage.js';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddRecipePageForm from './pages/AddRecipePageForm.js';
import EditRecipePageForm from './pages/EditRecipePageForm.js';



// Define the function that renders the content in Routes, using State.
function App() {

  const [recipe, setRecipeToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
          <h1><img src="android-chrome-192x192.png" alt="Allison Majors"/>   Allison Majors</h1>
            <p>This website is a portfolio of my work from a web development course. A 
              description of various web devlopment concepts/technologies are included as well as 
              actual employments of these technologies.</p>
          </header>

          <NavigationLinks />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/recipes" element={<RecipesPage setRecipe={setRecipeToEdit}/>} />
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/order" element={<OrderPage />} />
                    <Route path="/staff" element={<StaffPage />} />

                    {/* Or these if your schema requires SHORT data input: */}
                     <Route path="/create" element={<AddRecipePageForm />} />   
                     <Route path="/update" element={<EditRecipePageForm recipeToEdit={recipe} />} />
                </Routes>
              </section>
          </main>

          <footer>
          <p>&#169; 2024 Allison Majors</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;