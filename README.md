# insuredmine

# Use the below link to view the postman collection
https://documenter.getpostman.com/view/27766263/2s9XxyRt9U

# Steps to follow
1.Clone the code repository to your local machine.
2.Set up the code and install dependencies by running the command "npm install" in the terminal.
3.After the setup is complete, start the server using the command "npm start".
4.This project uses a local MongoDB database.
5.If needed, modify the MongoDB URI string in the .env file. The variable name is MONGO_URI.
6.Ensure the server is running on port 3000.
7.Find the Postman collection link attached for reference on available routes.
8.To upload an Excel file, use the endpoint http://localhost:3000/upload-file and attach the Excel file in the form-data section.
9.CRUD operations have been implemented for User, Account, and Policy entities.
10.The corresponding routes and payloads are listed in the provided Postman collection.