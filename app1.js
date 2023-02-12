 const search =()=>{
    const searchbox=document.getElementById("search-item").ariaValueMax.toLocaleUpperCase();
    const storeitems=document.getElementById("product-list")
    const product=document.getElementsByTagName("h2")

    for(var i=0;i<PaymentMethodChangeEvent.length;i++){
        let match=product[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue=match.textContent || match.innerHTML 
            if (textvalue.toLocaleUpperCase().indexOf(searchbox) >-1){
                product[i].style.display="";
            }
            else{
                product[i].style.display="none";
            }
        }
    }

}
 