// Import required modules and middleware
const express = require('express'); // Import the Express framework to simplify server creation
const app = express();

const cors = require('cors'); // Import CORS to allow cross-origin requests
app.use(cors());



// Allow Express to automatically parse JSON payloads in incoming requests,
// Which means this allows to access request data via 'req.body'.
app.use(express.json()); 




// Routes setup
const loginRouter = require('./routes/loginRoutes.js'); // Import login route object
app.use('/login', loginRouter); // Use the Login Route

const profileRouter = require('./routes/profileRoutes.js'); // Import profile route object
app.use('/profile', profileRouter); // Use the Profile Route





// Determine the port to listen on from environment variables or use 3001 as a default
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log server start message indicating successful launch and listening port
});
