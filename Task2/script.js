let doc= document.getElementById('inputBox');
let input=document.querySelectorAll('input');
let string="";
let arr=Array.from(input);
arr.forEach(input=>{
    button.addEventListener('click', (a) =>{        
        if(a.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            doc.value = string;
        }
        else if(a.target.innerHTML == 'AC'){
            string = "";
            doc.value = string;
        }
        else if(a.target.innerHTML == '='){
            string = eval(string);
            doc.value = string;
        }
        else{
            string += a.target.innerHTML;
            doc.value = string;
        }
        
    })
})