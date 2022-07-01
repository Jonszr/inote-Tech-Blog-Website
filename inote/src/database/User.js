export default async function getUsers (){
    
        const users = await fetch("https://random-data-api.com/api/users/random_user?size=3")
        const userlist = await users.json();
        console.log(userlist);
    
    
} 