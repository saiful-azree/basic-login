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

function register(newusername, newpassword, newname, newemail){
    //TODO: Check if username exist
    let checked = dbUsers.find(element => element.username == newusername)
    if(checked){
        console.log("Username has been taken")
    }
    else{
        dbUsers.push({
            username: newusername,
            password: newpassword,
            name: newname,
            email: newemail
        })
    }
}


//try to login (TRUE)
//console.log( login("saiful", "012345"))

//try to login (FALSE password)
//console.log( login("saiful", "111111"))

//try to login (FALSE username)
//console.log( login("sepul", "012345"))

//try to register (TRUE)
//register( "ainur", "111111", "Ainur Syamira", "ainur@gmail.com"))
//console.log( login("ainur", "111111"))

//try to register (FALSE)
register( "saiful", "abcdef", "Sepul Eerza", "eerza@gmail.com")