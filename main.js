const delay=ms=>{
   return new Promise(r=>setTimeout(()=>r(),ms))
}
const url='https://jsonplaceholder.typicode.com/todos';

async function fecthAsyncTodos(){
    try{
       await delay(jbjkkkb)
       const response=await fetch(url)
       const data= await response.json()
       console.log('Data',data)
    }
    catch(e){
       console.log("Ошибка, перепроверь код");
    }
    finally{
        console.log("Конец!!");
    }
}

fecthAsyncTodos()