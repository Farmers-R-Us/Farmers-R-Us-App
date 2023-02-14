import React from 'react';

export default function Customer() {
    const fetchData = (url) => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => {console.log("error from fetchData()", error)})
    };

    /* 
    useEffect(())
    
    
    
    
    
    */


    return (
        <h3>
            List of all available products 
        </h3>

        // pull all available proudcts from db - need a GET endpoint
        
        //<PaginatedProducts /> component:

                // <ProductCard /> component:
                    // product image
                    // product name 
                    // product unit 
                    // quantity 

                // <AddToCart /> component:
                    // button: add to cart
                        // value field (num)
            
            // forward arrow (down-arrow on mobile) - get icons from react-icons or whatever that was 
            // backward arrow (up-arrow on mobile)

    )
}