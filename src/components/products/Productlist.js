import Productcard from "./Productcard";

function Productlist(props) {
    var filteredProducts=props.prod.filter((f)=>{
        return(f.title.toLowerCase().includes(props.searchText.toLowerCase()));
    })
    return (
        <>
        <div className="d-flex  flex-wrap justify-content-around mt-5">
            {
              filteredProducts.map((p)=>{
                return(
                    
                        <Productcard product={p}/>
                    
                );

              })
            }
        </div>
       
        
        
        </>
      );
}

export default Productlist;