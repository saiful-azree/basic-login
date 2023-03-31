let dbUsers = [
    {
        username: "saiful",
        password: "012345",
        name: "Saiful Azree Bin Saiful Azmi",
        email: "azreeayie24@gmail.com"
    },
    {
        username: "peng",
        password: "777777",
        name: "Peng Xia Jiang",
        email: "xiajiang@gmail.com"
    }
]

function login(username, password){
    console.log("Someone try to login with", username, password)
    let matched = dbUsers.find(element => element.username == username)
    if(matched){
        if(matched.password == password){
            return matched
        }
         else{
            return "Password not matched"
        }
    }else{
        return "Username not found"
    }
    
}

//try to login (TRUE)
//console.log( login("saiful", "012345"))

//try to login (FALSE)
console.log( login("ainur", "111111"))