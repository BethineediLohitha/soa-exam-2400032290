import { useState, useEffect } from 'react';
// Bootstrap loaded via CDN
import Navbar from './components/Navbar';
import AddRequest from './components/AddRequest';
import DisplayRequests from './components/DisplayRequests';
import './App.css';

// API base URL - change based on environment
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080';

function App() {
  const [activeTab, setActiveTab] = useState('add');
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/DisplayAll`);
      if (!res.ok) throw new Error('Failed to fetch requests');
      const data = await res.json();
      setRequests(data);
    } catch (err) {
      showMessage('danger', 'Error loading requests: ' + err.message);
      setRequests([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'display') {
      fetchRequests();
    }
  }, [activeTab]);

  const handleAdd = async (formData) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/Add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        const errMsg = typeof errData === 'object' 
          ? Object.values(errData).join(', ') 
          : 'Failed to add request';
        throw new Error(errMsg);
      }
      const saved = await res.json();
      showMessage('success', `Request added successfully! ID: ${saved.id}`);
      setActiveTab('display');
    } catch (err) {
      showMessage('danger', err.message || 'Error adding request');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm(`Are you sure you want to delete request #${id}?`)) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/Delete/${id}`, { method: 'DELETE' });
      const text = await res.text();
      if (!res.ok) throw new Error(text || 'Delete failed');
      showMessage('success', text);
      fetchRequests();
    } catch (err) {
      showMessage('danger', err.message || 'Error deleting request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="container mt-4">
        {message.text && (
          <div className={`alert alert-${message.type} alert-dismissible fade show`} role="alert">
            {message.text}
            <button type="button" className="btn-close" onClick={() => setMessage({ type: '', text: '' })}></button>
          </div>
        )}
        {activeTab === 'add' && (
          <AddRequest onAdd={handleAdd} loading={loading} />
        )}
        {activeTab === 'display' && (
          <DisplayRequests 
            requests={requests} 
            loading={loading} 
            onDelete={handleDelete} 
            onRefresh={fetchRequests} 
          />
        )}
      </div>
    </div>
  );
}

export default App;
