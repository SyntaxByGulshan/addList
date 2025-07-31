
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
    const i=JSON.parse(localStorage.getItem('indexarray')) 
      if(i.length<=1){
        localStorage.removeItem('indexarray')
      }
      else{
        i.sort((a,b)=>a-b)
        i.pop()
      localStorage.setItem('indexarray',JSON.stringify(i))
      }
      
      window.location.reload()

}
function edit(index){
    localStorage.setItem('editIndex',index)
    // const i=JSON.parse(localStorage.getItem('indexarray')) 
    //   i.splice(index,1)
    //   localStorage.setItem('indexarray',JSON.stringify(i))
    localStorage.removeItem('indexarray')
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
//events bubbling
document.getElementById('body').addEventListener('click',function(event){
    let index=JSON.parse(localStorage.getItem('indexarray'))
    index.forEach((index,pos)=>{
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
      const i=JSON.parse(localStorage.getItem('indexarray')) 
      if(i.length<=1){
        localStorage.removeItem('indexarray')
      }
      else{
        i.splice(pos,1)
      localStorage.setItem('indexarray',JSON.stringify(i))
      }
    }else if(index!=null && event.target.parentNode.tagName==='HEADER'){
       while (tdata.firstChild) {
     tdata.removeChild(tdata.firstChild);
      }
    const dots=document.createElement('img')
    dots.src="./dots.png"
    console.log(dots)
    dots.setAttribute('width','20px')
    tdata.appendChild(dots)
     const i=JSON.parse(localStorage.getItem('indexarray')) 
      if(i.length<=1){
        localStorage.removeItem('indexarray')
      }
      else{
        i.splice(pos,1)
      localStorage.setItem('indexarray',JSON.stringify(i))
      }
    }else if(index!=null && event.target.tagName==='BODY'){
       while (tdata.firstChild) {
     tdata.removeChild(tdata.firstChild);
      }
    const dots=document.createElement('img')
    dots.src="./dots.png"
    console.log(dots)
    dots.setAttribute('width','20px')
    tdata.appendChild(dots)
    const i=JSON.parse(localStorage.getItem('indexarray')) 
      if(i.length<=1){
        localStorage.removeItem('indexarray')
      }
      else{
        i.splice(pos,1)
      localStorage.setItem('indexarray',JSON.stringify(i))
      }
    }
    })
    

})

//on click on three dots then options of show function call
document.getElementById('outputdata').addEventListener('click',function(event){
 console.log(event.target.tagName)
    if (event.target.tagName ==='IMG') {
        const parent=event.target.parentNode.parentNode
        const index=parent.dataset.index
        if(localStorage.getItem('indexarray')){
            const indexarray=JSON.parse(localStorage.getItem('indexarray'))
            indexarray.push(index)
            localStorage.setItem('indexarray',JSON.stringify(indexarray))
            show(index)
        }else{
            const indexarray=[]
            indexarray.push(index)
            localStorage.setItem('indexarray',JSON.stringify(indexarray))
            show(index)
        } 
    }  
    
})


