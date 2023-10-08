const TopHeader = ({setToggle}) => {
    return ( 
    <div className="top-header">
    <div onClick={()=> setToggle(true)} className="top-header-menu">
       <i className="bi bi-list"></i>
    </div>
    <div className="top-header-logo">
        <i className="bi bi-basket2"></i>
       GISX
    </div>
    <div className="top-header-text">WELCOME</div>
    </div>);
}

export default TopHeader;