import React,{useState} from 'react'

const App = () => {

  const [res,setRes] = useState("")
  const [check,setCheck] = useState("")

  const [data,setData] = useState({
    username : "",
    crushname : "",
  })

  const {username,crushname}=data;

  const changehandler = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }

  const removespaces = (strname) =>{
    var str = strname
    var len = str.length
    var strfirsthalf,strsecondhalf,strcopy,strcopylen
    var i
    //console.log(len)
    for(i=0;i<len;i++){
        if(str[i]===" "){
            strcopy = str
            strcopylen = str.length
            strfirsthalf = str.slice(0,i)
            strsecondhalf = strcopy.slice(i+1,strcopylen)
            str = strfirsthalf+strsecondhalf
            //console.log(str)
            i=0
        }
    }
    return(str)
}

  var flames = (username,crushname) =>{
    var string1=username
    var string2=crushname
    
    string1 = removespaces(string1)
    string2 = removespaces(string2)

    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

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
        for(var j=0;j<string1.length;j++){
            if (string1[i]===string2[j]){
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
    
    console.log("the number of matched letters:",count)
    
    d = c-count
    console.log("the number of unmatched letters:",d)
    console.log("FLAMES")
    
    x = d
    
    if(d===0){
        setRes("All Letters Matched, you both are perfect pair")
    }
    else{
    var namee="flames"
    for(j=1;j<=5;j++){
       
        var q=namee.length
        var surname=""
        var x=x
        var nameecopy=""
    
        for(i=1;i<x/q+1;i++){
            console.log(i)
            surname=surname+namee;
        }
        console.log(p=surname[x-1])
        
        indexx =namee.indexOf(p)
    
        nameecopy=namee
        nameefirsthalf=namee.slice(0,indexx)
        nameesecondhalf=nameecopy.slice(indexx+1,nameecopy.length)
    
        namee=nameesecondhalf+nameefirsthalf
        
    
        console.log(namee)
    
    }
    if(namee==='f'){
      namee='Friends'
    }
    else if(namee==='l'){
      namee='Love'
    }
    else if(namee==='a'){
      namee='Affection'
    }
    else if(namee==='m'){
      namee='Marriage'
    }
    else if(namee==='e'){
      namee='Enemy'
    }
    else{
      namee='Siblings'
    }
    console.log("the final relation among you both :",namee)
    setRes(namee)
    }
  }

  const submithandler = e =>{
    e.preventDefault()
    if (username[0]&&crushname[0]){
     flames(username[0],crushname[0])
     setCheck("")
    }
    else{
      setRes("Please Enter two Names in two Inputs to check your relationship")
      setCheck("active")
    }
  }
  return (
    <div>
      <center>
        <h1 style={{"color":"red",marginTop:"50px"}}>-: FLAMES :-</h1>
        <h5 style={{"color":"palevioletred",marginTop:"-5px"}}>Test your relationship</h5><br />
        <form onSubmit={submithandler} autoComplete="off">
          <input type="text" name="username" placeholder="Your name" value={username} style={{margin:"10px"}} onChange={changehandler}/><br/>
          <input type="text" name="crushname" placeholder="Your crush/friend name" value={crushname} style={{marginTop:"5px"}} onChange={changehandler}/><br/><br />

          <input type="submit" className="btn btn-primary" name="submit" />
        </form><br /><br />

        {res && !check &&
          <h1>The Relation between both of you is : {res}</h1>
        }

        {res && check &&
          <h1>{res}</h1>
        }

      </center>
    </div>
  )
}

export default App

















