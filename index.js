let display = document.querySelector(".display")

function addToDisplay(string){
    if(string=="del"){
        display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length -1)
    }
    else{
        if(string=="*" || string =="+" || string == "-" || string == "/" || string=="("){
    display.innerHTML = display.innerHTML + " ";
        }
    display.innerHTML = display.innerHTML + string
        if(string=="*" || string =="+" || string == "-" || string == "/" || string==")"){
    display.innerHTML = display.innerHTML + " ";
        }
    }
}

function clearAll(){
    display.innerHTML = ""
}
function removeSpaces(str){
    for(let i = 0 ; i < str.length ;){
        if(str[i]==' '){
str = str.slice(0,i)+ str.slice(i+1,str.length)
continue
        }
        i++
    }
    console.log(str)
    return str
}

function equalsTo(){
    let string1 = display.innerHTML
    let arr = []
let inti = ''
   string1 = removeSpaces(string1)
for (let i = 0 ; i < string1.length ; i++){
  if(string1[i] =="-" ||string1[i] =="+" ||string1[i] =="*" ||string1[i] =="/" ||string1[i] =="(" ||string1[i] ==")" ){
    
    if(inti!='') arr.push(inti)
    inti=''

    if(string1[i]=='(' && i!=0){
      if(string1[i-1]!= '+' && string1[i-1] != '-' && string1[i-1]!= '/' && string1[i-1] != '*'&& string1[i-1] != ')'){
        arr.push('*')
      }
    }
    arr.push(string1[i]);
    if(string1[i]==')' && i!=string1.length-1){
      if(string1[i+1]!= '+' && string1[i+1] != '-' && string1[i+1]!= '/' && string1[i+1] != '*' ){
        arr.push('*')
      }
    }
  }else{
    inti = inti+string1[i];
  }
}
if(inti!='') arr.push(inti)
display.innerHTML = Calculator(arr)


}

function Calculator(str) { 
    if(str.length==3){
      let a = parseInt(str[0])
      let b = parseInt(str[2]);
      let c = str[1]
      if(c=='+') return a+b;
      if(c=='-') return a-b;
      if(c=='*') return a*b;
      if(c=='/') return a/b;
    }
    
    
    
    
    while(str.length!=1){
    for (let i = 0 ; i < str.length ; i++){
      if(str[i]=='('){
        let temp = []
        let j = i+1
        while(str[j]!=')'){
          temp.push(str[j])
          j++
        }
        let ans = Calculator(temp)
        str = [...str.slice(0,i), ans , ...str.slice(j+1, str.length)]
        i = str.slice(0,i).length -1
      }
    }
    for (let i = 0 ; i < str.length ; i++){
      if(str[i]=='/'){
        let temp = str.slice(i-1,i+2)
        let ans = Calculator(temp)
        str = [...str.slice(0,i-1), ans , ...str.slice(i+2, str.length)]
        i = str.slice(0,i-1).length -1
      }
    }
    
    for (let i = 0 ; i < str.length ; i++){
      if(str[i]=='*'){
        let temp = str.slice(i-1,i+2)
        let ans = Calculator(temp)
        str = [...str.slice(0,i-1), ans , ...str.slice(i+2, str.length)]
        i = str.slice(0,i-1).length -1
      }
    }
    
    for (let i = 0 ; i < str.length ; i++){
      if(str[i]=='+'){
        let temp = str.slice(i-1,i+2)
        let ans = Calculator(temp)
        str = [...str.slice(0,i-1), ans , ...str.slice(i+2, str.length)]
        i = str.slice(0,i-1).length -1
      }
    }
    
    for (let i = 0 ; i < str.length ; i++){
      if(str[i]=='-'){
        let temp = str.slice(i-1,i+2)
        let ans = Calculator(temp)
        str = [...str.slice(0,i-1), ans , ...str.slice(i+2, str.length)]
        i = str.slice(0,i-1).length -1
      }
    }
      return str[0]
     
    }
    
      
    }