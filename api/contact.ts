export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Here you would typically send the email using a service like:
    // - SendGrid
    // - Nodemailer with Gmail
    // - Resend
    // - EmailJS
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // You can integrate with email services here
    // Example with SendGrid (you'll need to add @sendgrid/mail to dependencies):
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'your-email@example.com', // Your email address
      from: 'noreply@yourdomain.com', // Verified sender
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    await sgMail.send(msg);
    */

    // Return success response
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to send message. Please try again.' 
    });
  }
} 