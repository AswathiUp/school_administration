import logo from '../../asset/images/logo.png';
function Nav(props) {
 function onChangeSearch($event){
  props.onSearchText($event.target.value);
 }


    return (  
        <>
       <nav className="navbar navbar-expand-lg  bg-primary position-fixed top-0 start-0 end-0" data-bs-theme="dark">
  <div className="container-fluid">
    <img src={logo} height={50}></img>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onChangeSearch}/>
        <button className="btn btn-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    );
}

export default Nav;