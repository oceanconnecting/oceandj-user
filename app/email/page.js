"use client";

import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = () => {
    // Reset error state
    setError("");
    // Validate inputs
    if (!clientName || !clientEmail) {
      setError("Please enter both name and email.");
      return;
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(clientEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    axios
      .post("/api/sendEmail", {
        clientName,
        clientEmail,
      })
      .then((response) => {
        setResult(response.data);
        // Clear form fields on successful submission
        setClientName("");
        setClientEmail("");
      })
      .catch((error) => {
        setResult({ error: error.message });
        setError("An error occurred while sending the email.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      <input
        type="text"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="email"
        value={clientEmail}
        onChange={(e) => setClientEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={sendEmail} disabled={loading}>
        Send Email
      </button>
      {result && <div>{JSON.stringify(result)}</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
