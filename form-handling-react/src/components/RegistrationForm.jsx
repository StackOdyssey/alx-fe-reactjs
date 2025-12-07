import { useState } from "react";

function RegistrationForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!username.trim()) newErrors.username = "Username is required";
        if (!email.trim()) newErrors.email = "Email is required";
        if (!password.trim()) newErrors.password = "Password is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("User registered:", { username, email, password });
            alert("Registration successful!");
            setUsername("");
            setEmail("");
            setPassword("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Register</h2>

            <div>
                <label className="block text-gray-700">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>

            <div>
                <label className="block text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
                <label className="block text-gray-700">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Register
            </button>
        </form>
    );
}

export default RegistrationForm;