require("dotenv").config();
// starts the server listening on a port
const app = require("./app");

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
