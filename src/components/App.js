// Imports
//////////

// Base dependencies
import React from 'react';

// Components
import Navbar from "./nav/Navbar";
import PostItems from "./post/PostItems";


// App component
////////////////

function App() {
    return (
        <div>
            <Navbar />

            <PostItems/>
        </div>
    );
}


// Export
/////////

export default App;
