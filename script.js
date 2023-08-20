let sum= 0;
function accessories(id){  
    let find=id.parentNode.childNodes[5].innerText;
    console.log(find);
    let totel=id.parentNode.childNodes[7].innerText.split(" ")[0];
    console.log(totel)
    sum = parseFloat(sum)+parseFloat(totel);
    console.log(sum);
    let totelelement=document.getElementById('totel').innerText=sum;
    let addele=document.getElementById('ol');
    let li=document.createElement("li");
    li.innerText=find;
    console.log(addele)
    addele.appendChild(li)
    let cuponButton=document.getElementById('cupon-button');
    if(sum>200){
        cuponButton.removeAttribute('disabled')
    }

    let button=document.getElementById('button');
    if(sum>0){
        button.removeAttribute('disabled')
        return
    }
}
document.getElementById('model-button').addEventListener('click', function(){
    let addStyle=document.querySelectorAll('.sections');
    let removes=document.querySelectorAll('li');
    for(let remove of removes){
        remove.style.display='none'
    }
    for(let section of addStyle){
        section.innerText ='0';
        // section.style.display='none'
        // console.log(section);
    }
});

document.getElementById('cupon-button').addEventListener('click', function pra(){
   let text=document.getElementById('input').value;
   if(text==='SELL200'){
    document.getElementById('discount').innerText=Math.floor((100 * 20)/sum);
    document.getElementById('totol').innerText=Math.floor(sum - (100 * 20)/sum);
    return
   }
});


