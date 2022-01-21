// function count10(a,b){
//     setTimeout(function(){
//         console.log(a)
//     },2000)
//     b(a)
    
// }
// count10(1,(function count9(b){
//     console.log(b-1)}
// ))
let num=11;
let ne=document.createElement("div")
ne.setAttribute("id","count")




setTimeout(function(){
    num--;
    document.getElementById("count").innerText=num;
    setTimeout(function(){
        num--;
        document.getElementById("count").innerText=num;
        setTimeout(function(){
            num--;
            document.getElementById("count").innerText=num;
            setTimeout(function(){
                num--;
                document.getElementById("count").innerText=num;
                setTimeout(function(){
                    num--;
                    document.getElementById("count").innerText=num;
                    setTimeout(function(){
                        num--;
                        document.getElementById("count").innerText=num;
                        setTimeout(function(){
                            num--;
                            document.getElementById("count").innerText=num;
                            setTimeout(function(){
                                num--;
                                document.getElementById("count").innerText=num;
                                setTimeout(function(){
                                    num--;
                                    document.getElementById("count").innerText=num;
                                    setTimeout(function(){
                                        num--;
                                        document.getElementById("count").innerText=num;
                                        setTimeout(function(){
                                            num--;
                                            document.getElementById("count").innerText=num;
                                            setTimeout(function(){
                                                num--;
                                                document.getElementById("count").innerText="happy independence day";
                                    
                                            },1000)
                                
                                        },1000)
                            
                                    },1000)
                        
                                },1000)
                    
                            },1000)
                
                        },1000)
            
                    },1000)
        
                },1000)
    
            },1000)

        },1000)

    },1000)
},1000)
document.body.append(ne)