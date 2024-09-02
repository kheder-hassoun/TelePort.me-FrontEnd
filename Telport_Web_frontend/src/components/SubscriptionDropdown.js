import React, { useState } from 'react';
import axios from 'axios';

function SubscriptionDropdown() {
  const [selectedOption, setSelectedOption] = useState('free'); // Default option
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const options = ['free', 'moderate', 'high'];
  const handleOptionChange = async (event) => {
    const selectedType = event.target.value;
    setSelectedOption(selectedType);
    setError(null);
    setSuccessMessage('');

    try {
        // Retrieve and parse the user data from local storage
        const user = JSON.parse(localStorage.getItem('user'));

        // Check if the token exists
        if (!user || !user.token) {
            setError('No token found. Please log in.');
            return;
        }

        const token = user.token;

        const response = await axios.put(
            'http://localhost:9090/api/users/updat_subscription',
            {
                subscriptionType: selectedType,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the request
                },
            }
        );
        setSuccessMessage('Subscription updated successfully.');
        console.log('Subscription updated successfully:', response.data);
    } catch (error) {
        setError('Error updating subscription. Please try again later.');
        console.error('Error updating subscription:', error);
    }
};

  return (
    <div style={styles.container}>
      <label htmlFor="subscriptionType" style={styles.label}>
        Subscription Type:
      </label>
      <select
        id="subscriptionType"
        value={selectedOption}
        onChange={handleOptionChange}
        style={styles.select}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)} {/* Capitalize first letter */}
          </option>
        ))}
      </select>
      {successMessage && <p style={styles.success}>{successMessage}</p>}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '300px',
    margin: '0 auto',
    padding: '10px',
    border: '1px solid #cf06cf9c',
    borderRadius: '8px',
    backgroundColor: '#2501259c',
  },
  label: {
    marginBottom: '8px',
    color: '#e70ae7f3',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  select: {
    padding: '8px',
    fontSize: '14px',
    color: '#fff',
    borderRadius: '4px',
    border: '1px solid #e70ae7f3',
    backgroundColor: '#110f119c',
    marginBottom: '10px',
    width: '100%',
  },
  success: {
    color: 'green',
    fontSize: '14px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};

export default SubscriptionDropdown;
