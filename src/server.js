const app = require("./app")
const {PORT = 5000} = process.env

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}...`))