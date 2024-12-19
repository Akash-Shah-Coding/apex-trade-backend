const otplib = require('otplib');

// Function to generate TOTP
function generateTOTP() {
    const secret = process.env.TOTP_SECRET;

    // Ensure the secret is present
    if (!secret) {
        throw new Error("TOTP_SECRET is missing in the environment variables.");
    }

    // Generate TOTP
    return otplib.authenticator.generate(secret);
}

module.exports = { generateTOTP };
