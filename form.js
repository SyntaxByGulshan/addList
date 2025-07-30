   function validateForm(e) {
  e.preventDefault();

  const form = document.getElementById('productForm');

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  let hasError = false;

  // Get values
  const productName = document.getElementById("productName").value.trim();
  const brand = document.getElementById("brand").value.trim();
  const category = document.getElementById("category").value;
  const price = parseFloat(document.getElementById("price").value);
  const description = document.getElementById("description").value.trim();
  const weight=document.getElementById("weight").value;
  const length=document.getElementById("length").value;
  const width=document.getElementById("width").value;
  const breath=document.getElementById("breadth").value;

  // Validate productName
  if (productName.length>20 || productName.length<1) {
    document.getElementById("error-productName").textContent = "write a name between 1 and 20 characters";
    hasError = true;
  }

  // Validate brand
  if (!/^[A-Za-z0-9\s]+$/.test(brand)) {
    document.getElementById("error-brand").textContent = "Only letters and spaces allowed.";
    hasError = true;
  }

  // Validate category
  if (category === "") {
    document.getElementById("error-category").textContent = "Please select a category.";
    hasError = true;
  }

  // Validate price
  if (isNaN(price) || price <= 0) {
    document.getElementById("error-price").textContent = "Price must be a positive number.";
    hasError = true;
  }
  if(weight<=0){
    document.getElementById("error-weight").textContent = "Weight must be a positive number.";
    hasError = true;
  }
  if(length<=0){
    document.getElementById("error-length").textContent = "length must be a positive number.";
    hasError = true;
  }
  if(width<=0){
     document.getElementById("error-width").textContent = "length must be a positive number.";
    hasError = true;
  }
  if(breath<=0){
    document.getElementById("error-breadth").textContent = "breath must be a positive number.";
    hasError = true;
  }

  if (!hasError){
    const product = {
      ProductName:productName,
      Brand:brand,
      Category:category,
      Price:price,
      Discription:description,
      Weight:weight,
      Length:length,
      Width:width,
      Breath:breath,
    };
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    form.reset();
    window.location.href = "./index.html";
    return true;
  }
  else{
    return false;
  }
   }
    function validateProductName(){
       const product = document.getElementById("productName").value.trim();
        const error=document.getElementById("error-productName")
        error.innerText='';
        if( product.length>20){
         error.textContent = "Brand name should not be more than 20 characters.";
        }
       
    }
    function validateBrandNamee(){
       const brand = document.getElementById("brand").value.trim();
        const error=document.getElementById("error-brand")
        error.innerText='';
       if (!/^[A-Za-z\s]+$/.test(brand)) {
       error.textContent = "Only letters and spaces allowed."; 
      }
      else if(brand.length>20){
        error.textContent = "Brand name should not be more than 20 characters.";
      }
    }
    function validatePrice(){
        const price = document.getElementById("price").value.trim();
        const error=document.getElementById("error-price")
        error.innerText='';
        if(isNaN(price) || price<=0 ||price>=Number.MAX_SAFE_INTEGER){
            error.textContent = "Price must be a positive number and not exceed the maximum  value.";
            return
        }

    }
     function validateWeight(){
        const weight = document.getElementById("weight").value.trim();
        const error=document.getElementById("error-weight")
        error.innerText='';
        if(isNaN(weight) || weight<=0 ||weight>=100){
            error.textContent = "weight must be a positive number and not exceed the 100kg.";
            return
        }

    }
     function validateLength(){
        const length = document.getElementById("length").value.trim();
        const error=document.getElementById("error-length")
        error.innerText='';
        if(isNaN(length) || length<=0 ||length>=100){
            error.textContent = "weight must be a positive number and not exceed the 100cm length of any product.";
            return
        }
    }
     function validateBreadth(){
        const breadth = document.getElementById("breadth").value.trim();
        
        const error=document.getElementById("error-breadth")
        error.innerText='';
        if(isNaN(breadth) || breadth<=0 ||breadth>=100){
            error.textContent = "weight must be a positive number and not exceed the 100cm length of any product.";
            return
        }
    }
     function validateBreadth(){
        const breadth = document.getElementById("breadth").value.trim();
        
        const error=document.getElementById("error-breadth")
        error.innerText='';
        if(isNaN(breadth) || breadth<=0 ||breadth>=100){
            error.textContent = "weight must be a positive number and not exceed the 100cm length of any product.";
            return
        }
    }
      function validateWidth(){
        const width = document.getElementById("width").value.trim();
        
        const error=document.getElementById("error-width")
        error.innerText='';
        if(isNaN(width) || width<=0 ||width>=100){
            error.textContent = "weight must be a positive number and not exceed the 100ck length of any product.";
            return
        }
    }
    function validateDescription(){
        const description = document.getElementById("description").value;
        console.log(description)
        const error=document.getElementById("error-discription")
        error.innerText='';
       if(description.split('').length>100){
          error.textContent = "Description must be at least 100 characters long.";
       }
    }
 
    //on load check all fields data
window.onload = function() {
    const editIndex = localStorage.getItem('editIndex');
    if (editIndex !== null) {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const product = products[editIndex];
        if (product) {
            document.getElementById('productName').value = product.productName || product.ProductName || '';
            document.getElementById('brand').value = product.brand || product.Brand || '';
            document.getElementById('category').value = product.Category || '';
            document.getElementById('price').value = product.Price || product.Price || '';
            document.getElementById('weight').value = product.Weight || '';
            document.getElementById('length').value = product.Length || '';
            document.getElementById('breadth').value = product.Breath || '';
            document.getElementById('width').value = product.Width || '';
            document.getElementById('description').value = product.description || product.Discription || '';
            // Set checkboxes for channel if needed
            // Clear editIndex after loading
            products.splice(editIndex,1)
            localStorage.setItem('products', JSON.stringify(products));
            localStorage.removeItem('editIndex');

        }
    }
};



    

   
