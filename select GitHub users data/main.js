async function getUsers(name){
   let users=[];
   const url=`https://api.github.com/users/${name}`;
   for(let names of name){
      let user=fetch(url).then(
         response=>{
            if(response.status!=200){
               return null;
            }
            else{
               return response.json();
            }
         },
         failRepomse=>{
            return null;
         }
      );
      users.push(user);
   }
   let res=await Promise.all(users);
   console.log(res);
}
getUsers('lioshkaa');