let num1 = ''
let num2 = ''
let sign = ''
let end = false
const numbers = ['0','1','2','3','4','5','6','7','8','9','.']
const actions= ['+','-','*','/']

const out = document.querySelector('.screen p')

function clear(){
    num1 = ''
    num2 = ''
    sign = ''
    end = false
    out.textContent = 0
}
document.querySelector('.ac').addEventListener('click',()=>{clear()})
document.querySelector('.buttons').addEventListener('click',(e)=>{
    out.textContent = ''
    let key = e.target.textContent
    if(numbers.includes(key)){
        if(num2 ==='' && sign === ''){
            num1+=key
            out.textContent = num1
        }else if(!num1!=='' && num2!=='' && end==true){
            num2 = key
            end = false
            out.textContent = num2
        }
        else{
            num2 +=key
            out.textContent = num2
        }
        console.log(num1,sign,num2)
        return
    }
    if(actions.includes(key)){
        sign = key
        out.textContent = sign
        console.log(num1,sign,num2)
        return
    }
    if(key==='='){
        switch(sign){
            case "+":
                num1 = (+num1) + (+num2)
                break
            case "-":
                num1-=num2
                break
            case "*":
                num1*=num2
                break
            case "/":
                if(num2==0){
                    out.textContent = 'Error'
                    num1 = ''
                    num2 = ''
                    sign = ''
                }
                num1/=num2
                break
        }
        end = true
        out.textContent = num1
        console.log(num1,sign,num2)
    }
})