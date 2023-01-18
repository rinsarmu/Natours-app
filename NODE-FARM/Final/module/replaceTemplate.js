const replaceTemplate = (temp, element) =>{
    console.log("replace");
    let output = temp.replace(/{%PRODUCTNAME%}/g,element.productName )
     output = output.replace(/{%PRODUCTIMAGE%}/g,element.image )
     output = output.replace(/{%COUNTRY%}/g,element.from )
     output = output.replace(/{%NUTRIENTS%}/g,element.nutrients )
     output = output.replace(/{%QUANTITY%}/g,element.quantity )
     output = output.replace(/{%PRICE%}/g,element.price )
     output = output.replace(/{%DESCRIPTION%}/g,element.description )
     output = output.replace(/{%PRODUCTID%}/g,element.id )
    //  output = output.replace(/O/g,'8' )


     if(element.organic)
     output = output.replace(/{%NOTORGANIC%}/g,'not-organic' )

     return output;

}

module.exports = replaceTemplate