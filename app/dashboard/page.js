"use client"
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
// import app from '../utils/firebase'; 

export default function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');
    const router = useRouter();

    useEffect(() => {
        const auth = getAuth(app); // Pass the Firebase app instance to getAuth()
        onAuthStateChanged(auth, user => {
            if (!user) {
                router.push('/login');
            } else {
                setLoading(false);
            }
        });
    }, [router]);

    const fetchSummary = async () => {
        const response = await fetch('/api/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (response.ok) {
            const data = await response.json();
            setSummary(data.summary_text || 'No summary available');  // Ensure this key matches the actual API response
        } else {
            console.error('Failed to fetch summary');
        }
    };

    if (loading) {
        return <div style={styles.loading}>Loading...</div>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Dashboard</h1>
            <textarea
                style={styles.textarea}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to summarize"
            />
            <button style={styles.button} onClick={fetchSummary}>Summarize Text</button>
            <div style={styles.summary}>{summary}</div>
        </div>
    );
}


// Styles
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        color: '#333',
        marginBottom: '20px',
    },
    textarea: {
        width: '80%',
        height: '150px',
        marginBottom: '20px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        marginBottom: '20px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
    },
    summary: {
        width: '80%',
        padding: '20px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '24px',
    },
};