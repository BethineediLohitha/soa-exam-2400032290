function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#" onClick={(e) => { e.preventDefault(); setActiveTab('add'); }}>
          🔧 Plumbing Request System
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className={`nav-link ${activeTab === 'add' ? 'active' : ''}`} 
                href="#" 
                onClick={(e) => { e.preventDefault(); setActiveTab('add'); }}
              >
                Add Request
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeTab === 'display' ? 'active' : ''}`} 
                href="#" 
                onClick={(e) => { e.preventDefault(); setActiveTab('display'); }}
              >
                View Requests
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
