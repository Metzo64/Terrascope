/**
 * js/nir.js
 * Handles the Ground NIR Stress Analysis flow: 
 * image selection -> upload -> result storage -> redirection.
 */

async function uploadNirImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
        const res = await fetch('https://terrascope-frontend.onrender.com/analyze-nir-image', {
            method: 'POST',
            body: formData
        });

        const result = await res.json();

        if (!res.ok) {
            // Managed validation error
            if (result.error === 'invalid_specimen') return result;
            throw new Error(result.message || 'NIR Analysis failed');
        }

        // Store result
        localStorage.setItem('nir_result', JSON.stringify(result));

        // Redirect to NIR Summary Page (Preview image is already stored by nir_upload.html)
        window.location.href = 'nir_summary.html';

    } catch (err) {
        console.error("❌ NIR Error:", err);
        throw err;
    }
}

// Add basic spinner styles if not present
const style = document.createElement('style');
style.innerHTML = `
    .spinner {
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 2px solid rgba(255,255,255,.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
        margin-right: 8px;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
`;
document.head.appendChild(style);
