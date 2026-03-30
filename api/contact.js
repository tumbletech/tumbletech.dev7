import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed",
        });
    }

    try {
        const { name, email, phone, message, companyWebstite } = req.body;

        // Honeypot anti-spam
        if (companyWebstite) {
            return res.status(400).json({
                success: false,
                message: "Spam detected",
            });
        }

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email, and mesage are required",
            });
        }

        const transporter = nodemailer.createTransport({
            host: "mail.privateemail.com",
            port: 465, 
            secure: true,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"Tumbletech Website" <${process.env.MAIL_USERNAME}>`,
            to: "admin@tumbletech.dev",
            replyTo: email,
            subject: "New Inquiry from Tumbletech Website",
            text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone || "N/A"}
            
            Message: ${message}`,
        });

        return res.status(200).json({
            success: true,
            message: "Your inquiry has been sent successfully",
        });
    } catch (error) {
        console.error("Contact form error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to send inquiry",
        });
    }
}