
//display local storage element to the screen
const data=JSON.parse(localStorage.getItem('products'))
console.log(data)
const outputdata=document.getElementById('outputdata')
data.forEach((element,index) => {
    console.log(element)
    // this is for adding row
   const d= document.createElement('tr')
   d.style.height="80px"
   d.setAttribute('data-index',index)
//    this is for adding productName  to table
    const pname=document.createElement('td')
    pname.innerHTML=element.ProductName
    d.appendChild(pname)
//    this is for adding category  to table
    const category=document.createElement('td')
    category.innerHTML=element.Category
    d.appendChild(category)
//  this is for brand name
    const brand=document.createElement('td')
    brand.innerHTML=element.Brand
    d.appendChild(brand)
    // this is for discription
    const discription=document.createElement('td')
    console.log(element.Discription)
    element.Discription.split(' ').forEach((element,index)=>{
        console.log(element)
       if(index<8){
        discription.innerHTML+=element+' '
       }
    })
    discription.innerHTML+='...'
    d.appendChild(discription)
    // this is for price section
    const price=document.createElement('td')
    price.innerHTML=`$${element.Price}`
    d.appendChild(price)
    
    // this is button section
    const btn=document.createElement('td')
    btn.style.position='relative'
    const dots=document.createElement('img')
    dots.src="./dots.png"
    console.log(dots)
    dots.setAttribute('width','20px')
    btn.appendChild(dots)
    d.appendChild(btn)

    outputdata.appendChild(d)
});
function del(index){
    showoptions=true;
    console.log(index)
    const products=JSON.parse(localStorage.getItem('products'))
    console.log(products)
    products.splice(index,1)
    localStorage.setItem('products',JSON.stringify(products))
    window.location.reload()
}
function edit(index){
    localStorage.setItem('editIndex',index)
    window.location.href='./form.html'
}
//show function show options of del and edit
function show(index){
    console.log(index)
    const tdata=document.getElementById('outputdata').childNodes[index].childNodes[5]
    console.log(tdata)
    const l=document.createElement('div')
    l.style.position='absolute'
    l.style.zIndex='2'
    l.style.borderRadius='5px'
    l.style.top='0px'
    l.style.right='0px'
    l.style.backgroundColor='white'
    l.style.padding='5px'
    const option1=document.createElement('button')
    option1.innerHTML='<b>Edit</b>'
    option1.setAttribute('class','hover:text-green-900')
    option1.setAttribute('onclick',`edit(${index})`)
    l.appendChild(option1)
     const option2=document.createElement('button')
    option2.innerHTML='<b>Delete</b>'
     option2.setAttribute('class','hover:text-red-900')
    option2.setAttribute('onclick',`del(${index})`)
    l.appendChild(option2)
    tdata.appendChild(l)
    console.log(tdata)
}
// when click on out of the table hide the options
document.getElementById('body').addEventListener('click',function(event){
    let index=localStorage.getItem('index')
    const tdata=document.getElementById('outputdata').childNodes[index].childNodes[5]
    console.log(event.target)
    if(index!=null && event.target.tagName==='TD'){
     while (tdata.firstChild) {
     tdata.removeChild(tdata.firstChild);
      }
    const dots=document.createElement('img')
    dots.src="./dots.png"
    console.log(dots)
    dots.setAttribute('width','20px')
    tdata.appendChild(dots)
      localStorage.removeItem('index') 
    }else if(index!=null && event.target.parentNode.tagName==='HEADER'){
       while (tdata.firstChild) {
     tdata.removeChild(tdata.firstChild);
      }
    const dots=document.createElement('img')
    dots.src="./dots.png"
    console.log(dots)
    dots.setAttribute('width','20px')
    tdata.appendChild(dots)
      localStorage.removeItem('index') 
    }else if(index!=null && event.target.tagName==='BODY'){
       while (tdata.firstChild) {
     tdata.removeChild(tdata.firstChild);
      }
    const dots=document.createElement('img')
    dots.src="./dots.png"
    console.log(dots)
    dots.setAttribute('width','20px')
    tdata.appendChild(dots)
      localStorage.removeItem('index')  
    }

    

})

//on click on three dots then options of show function call
document.getElementById('outputdata').addEventListener('click',function(event){
 console.log(event.target.tagName)
    if (event.target.tagName ==='IMG') {
        const parent=event.target.parentNode.parentNode
        const index=parent.dataset.index
        localStorage.setItem('index',index)
        show(index) 
    }  
    
})
// search product using product name
document.getElementById('srch').addEventListener('change',()=>{
    const srch=document.getElementById('search').value
    console.log(srch)
    const data=JSON.parse(localStorage.getItem('products'))
    const filteredData=data.filter(item=>{
        console.log(item.ProductName)
        if(item.ProductName==srch){
            return item
        }
    })
    console.log(filteredData[0])
    const outputdata=document.getElementById('outputdata')
    outputdata.innerHTML=`<tr><td>${filteredData[0].ProductName}</td><td>${filteredData[0].Category}</td><td>${filteredData[0].Brand}</td><td>${filteredData[0].Discription}</td><td>${filteredData[0].Price}</td></tr>`
})

