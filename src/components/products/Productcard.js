function Productcard(props) {
    return ( 
        <>
       
       <div className="card z-n1 mt-5" style={{width: '18rem'}}>
  <img src={props.product.thumbnail} height={250} className="card-img-top" alt="..."/>
  <div className="card-body bg-light" style={{textAlign:"center"}}>
    <h4 style={{color:"darkblue"}}>{props.product.title}</h4>
    <h3><sup style={{color:"green"}}>&#8377; </sup>{props.product.price}</h3>
    <p>
        {props.product.description}
    </p>
   </div>
</div>
        </>
     );
}

export default Productcard;