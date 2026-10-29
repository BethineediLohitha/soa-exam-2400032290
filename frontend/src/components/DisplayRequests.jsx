function DisplayRequests({ requests, loading, onDelete, onRefresh }) {
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading requests...</p>
      </div>
    );
  }

  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h4 className="mb-0">All Plumbing Requests</h4>
        <button className="btn btn-light btn-sm" onClick={onRefresh}>
          🔄 Refresh
        </button>
      </div>
      <div className="card-body">
        {requests.length === 0 ? (
          <div className="alert alert-info mb-0">
            No plumbing requests found. Add a new request to get started.
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Customer Name</th>
                  <th>Issue Type</th>
                  <th>Estimated Cost</th>
                  <th>Resolved</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req.id}>
                    <td>{req.id}</td>
                    <td>{req.customerName}</td>
                    <td>{req.issueType}</td>
                    <td>${Number(req.estimatedCost).toFixed(2)}</td>
                    <td>
                      <span className={`badge ${req.resolved ? 'bg-success' : 'bg-warning text-dark'}`}>
                        {req.resolved ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onDelete(req.id)}
                        title="Delete request"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayRequests;
