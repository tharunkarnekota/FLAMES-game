import React,{useState} from 'react'

const App = () => {

  const [data,setData] = useState({
    username : "",
    crushname : "",
  })

  const {username,crushname}=data;

  const changehandler = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }

  var flames = (username,crushname) =>{
    var string1=username
    var string2=crushname
    var string2firsthalf=""
    var string2secondhalf=""
    
    var string2copy=""
    var string2len
    
    var count=0
    var a = string1.length
    var b = string2.length
    var c = a+b
    var d,i,indexx,p,nameefirsthalf,nameesecondhalf
    var x
    
    for(i=0;i<string1.length;i++){
        for(j=0;j<string1.length;j++){
            if (string1[i]==string2[j]){
                count = count + 2
                string2copy=string2
                string2len=string2.length
                string2firsthalf=string2.slice(0,j)
                string2secondhalf=string2copy.slice(j+1,string2len)
                string2=string2firsthalf+string2secondhalf
                break
            }
        }
    }
    
    console.log(count)
    
    d = c-count
    console.log(d)
    
    x = d
    
    if(d==0){
        console.log("perfect pair")
    }
    else{
    var namee="flames"
    for(var j=1;j<=5;j++){
       
        var q=namee.length
        var surname=""
        var x=x
        var nameecopy=""
    
        for(i=1;i<x/q+1;i++){
            console.log(i)
            surname=surname+namee;
        }
        console.log(p=surname[x-1])
        let m=x/20
        indexx =namee.indexOf(p)
    
        nameecopy=namee
        nameefirsthalf=namee.slice(0,indexx)
        nameesecondhalf=nameecopy.slice(indexx+1,nameecopy.length)
    
        namee=nameesecondhalf+nameefirsthalf
    
        console.log(namee)
    
    }
    console.log(namee)
    }
  }

  const submithandler = e =>{
    e.preventDefault()
    flames(username,crushname)
  }
  return (
    <div>
      <center>
        <form onSubmit={submithandler}>
          <input type="text" name="username" placeholder="Your name" value={username} onChange={changehandler}/><br/>
          <input type="text" name="crushname" placeholder="Your crush name" value={crushname} onChange={changehandler}/><br/>

          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  )
}

export default App

















