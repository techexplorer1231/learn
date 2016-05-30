# Starter Kit

1. Node Version : 6.1.0
2. Nodemon - Use for live reload

**To Do**

1. Add package nodemon as dev dependency in project structure.
2. "npm install sails –g" for mac os run "sudo npm -g install sails".
3. create "server" folder in folder exercise 3 and run command "sails new --no-frontend" in server folder.
4. run sails lift.
5. Create a user model with name(type string), employee number(type integer) and designation(type string).

**Read Request**
1. Access route "http://localhost:1337/user" in postman and check that blank array is returned.

**Create Request**
1. Do a post request with user data like shown below using postman

    {
        "name": "Pratap Singh",
        "employeeNumber": 12345,
        "designation": "Team Lead"
    }
    
    do again a post request wich mock data using postman.
     
2. access route "http://localhost:1337/user" in postman and check that blank array is not returned any more and you are getting the created users.

**Update Request**
1. Make a PUT request "http://localhost:1337/user/:id" where id unique key for deail of user you want to modify. you can use data like below:

    {
        "name": "Updated",
        "employeeNumber": 12345,
        "designation": "Team Lead"
    }
    
2. Access route "http://localhost:1337/user" in postman and check that updated data is returned.

**Delete Request**
1. Make a DELETE request "http://localhost:1337/user/:id".
2. Access route "http://localhost:1337/user" in postman and check that updated data is returned.
