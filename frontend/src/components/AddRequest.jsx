import { useState } from 'react';

function AddRequest({ onAdd, loading }) {
  const [form, setForm] = useState({
    customerName: '',
    issueType: '',
    estimatedCost: '',
    resolved: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.customerName.trim()) {
      newErrors.customerName = 'Customer name is required';
    } else if (form.customerName.trim().length < 2) {
      newErrors.customerName = 'Customer name must be at least 2 characters';
    } else if (form.customerName.trim().length > 100) {
      newErrors.customerName = 'Customer name must be at most 100 characters';
    }

    if (!form.issueType.trim()) {
      newErrors.issueType = 'Issue type is required';
    } else if (form.issueType.trim().length < 2) {
      newErrors.issueType = 'Issue type must be at least 2 characters';
    }

    if (form.estimatedCost === '' || form.estimatedCost === null) {
      newErrors.estimatedCost = 'Estimated cost is required';
    } else if (isNaN(form.estimatedCost) || Number(form.estimatedCost) < 0) {
      newErrors.estimatedCost = 'Estimated cost must be a non-negative number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onAdd({
      customerName: form.customerName.trim(),
      issueType: form.issueType.trim(),
      estimatedCost: Number(form.estimatedCost),
      resolved: form.resolved,
    });
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Add New Plumbing Request</h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="customerName" className="form-label">Customer Name *</label>
            <input
              type="text"
              className={`form-control ${errors.customerName ? 'is-invalid' : ''}`}
              id="customerName"
              name="customerName"
              value={form.customerName}
              onChange={handleChange}
              placeholder="Enter customer name"
              disabled={loading}
            />
            {errors.customerName && <div className="invalid-feedback">{errors.customerName}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="issueType" className="form-label">Issue Type *</label>
            <input
              type="text"
              className={`form-control ${errors.issueType ? 'is-invalid' : ''}`}
              id="issueType"
              name="issueType"
              value={form.issueType}
              onChange={handleChange}
              placeholder="e.g. Leaking pipe, Clogged drain, Water heater"
              disabled={loading}
            />
            {errors.issueType && <div className="invalid-feedback">{errors.issueType}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="estimatedCost" className="form-label">Estimated Cost ($) *</label>
            <input
              type="number"
              step="0.01"
              min="0"
              className={`form-control ${errors.estimatedCost ? 'is-invalid' : ''}`}
              id="estimatedCost"
              name="estimatedCost"
              value={form.estimatedCost}
              onChange={handleChange}
              placeholder="0.00"
              disabled={loading}
            />
            {errors.estimatedCost && <div className="invalid-feedback">{errors.estimatedCost}</div>}
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="resolved"
              name="resolved"
              checked={form.resolved}
              onChange={handleChange}
              disabled={loading}
            />
            <label className="form-check-label" htmlFor="resolved">
              Resolved
            </label>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                Adding...
              </>
            ) : (
              'Add Request'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRequest;
