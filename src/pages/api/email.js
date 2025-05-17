import { Resend } from 'resend';

// Initialize Resend with your API key - you'll need to get this from Resend.com
const resend = new Resend(process.env.RESEND_API_KEY);

// Update this with your own domain/website URLs
const allowedOrigins = [
  'https://charlesawuku.com',
  'https://www.charlesawuku.com',
  'http://localhost:3000' // For development
];

export default async function handler(req, res) {
  // Handle CORS
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only process POST requests
  if (req.method === 'POST') {
    // Extract data from the form submission
    const { 
      purpose,
      name, 
      email, 
      phone, 
      preferredDate,
      budget,
      message 
    } = req.body;

    try {
      // Create notification email to you (Charles) with submission details
      const emailContent = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; max-width: 650px; margin: auto;">
        <!-- Header -->
        <div style="background-color: #3B82F6; padding: 25px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          <p style="color: white; margin: 5px 0 0; font-size: 16px;">From your website contact form</p>
        </div>
        
        <!-- Content -->
        <div style="background-color: #ffffff; padding: 30px; border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;">
          <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">Hello Charles,</p>
          <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">You've received a new message from your contact form. Here are the details:</p>
          
          <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tbody>
                <tr>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 30%;">Contact Purpose:</td>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;">${purpose || 'Not specified'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 30%;">Name:</td>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;">${phone || 'Not provided'}</td>
                </tr>
                ${preferredDate ? `
                <tr>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Preferred Date:</td>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;">${preferredDate}</td>
                </tr>
                ` : ''}
                ${budget ? `
                <tr>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Budget:</td>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;">${budget}</td>
                </tr>
                ` : ''}
              </tbody>
            </table>
          </div>
          
          <div style="margin-top: 30px;">
            <h3 style="color: #444; border-bottom: 2px solid #3B82F6; padding-bottom: 8px; display: inline-block;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #3B82F6;">
              <p style="margin: 0; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 35px; background-color: #EBF5FF; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-weight: bold; color: #3B82F6;">Remember to respond within 24-48 hours</p>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #333; color: white; padding: 20px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">This message was automatically generated from your website contact form.</p>
        </div>
      </div>
      `;

      // Auto-reply email content for the sender
      const autoReplyContent = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; max-width: 650px; margin: auto;">
        <!-- Header -->
        <div style="background-color: #3B82F6; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Charles Awuku</h1>
          <p style="color: white; margin: 10px 0 0; font-size: 16px;">Thank you for reaching out!</p>
        </div>
        
        <!-- Content -->
        <div style="background-color: #ffffff; padding: 30px; border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;">
          <h2 style="color: #3B82F6; margin-top: 0; margin-bottom: 25px; font-size: 24px;">Message Received</h2>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Hello ${name},</p>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Thank you for contacting me. I've received your message and will review it shortly.</p>
          
          <div style="background-color: #f9f9f9; border-radius: 8px; padding: 25px; margin: 30px 0;">
            <h3 style="color: #3B82F6; margin-top: 0; font-size: 18px;">Your Message Summary:</h3>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 40%;">Purpose:</td>
                <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;"><span style="background-color: #EBF5FF; color: #3B82F6; padding: 5px 10px; border-radius: 20px; font-size: 14px;">${purpose || 'General Inquiry'}</span></td>
              </tr>
              <tr>
                <td style="padding: 12px 5px; font-weight: bold; vertical-align: top;">Your Message:</td>
                <td style="padding: 12px 5px;">
                  <div style="background-color: #ffffff; padding: 10px; border-radius: 4px; border: 1px solid #e0e0e0;">
                    ${message}
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">I typically respond to all inquiries within 24-48 hours. I appreciate your patience and look forward to connecting with you soon.</p>
          
          <div style="text-align: center; margin: 35px 0;">
            <div style="display: inline-block; background-color: #3B82F6; color: white; padding: 12px 25px; border-radius: 4px; font-weight: bold; font-size: 16px;">Thank You For Reaching Out!</div>
          </div>
        </div>
        
        <!-- Contact Info -->
        <div style="background-color: #f5f5f5; padding: 20px; border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;">
          <div style="text-align: center; padding: 10px;">
            <div style="font-size: 14px; color: #666;">
              <strong style="color: #333; display: block; margin-bottom: 5px;">Contact Information</strong>
              <span>Phone: +1 (469) 604-1967</span><br>
              <a href="mailto:charlesawuku2010@gmail.com" style="color: #3B82F6; text-decoration: none;">charlesawuku2010@gmail.com</a>
            </div>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #333; color: white; padding: 20px; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">© ${new Date().getFullYear()} Charles Awuku. All rights reserved.</p>
        </div>
      </div>
      `;

      // 1. Send email notification to you
      await resend.emails.send({
        to: 'charlesawuku2010@gmail.com',
        from: 'Contact Form <onboarding@resend.dev>', // Replace with your verified domain in Resend
        subject: `New Contact Form Submission: ${purpose || 'General Inquiry'}`,
        html: emailContent,
      });

      // 2. Send auto-reply to the user
      await resend.emails.send({
        to: email,
        from: 'Charles Awuku <onboarding@resend.dev>', // Replace with your verified domain in Resend
        subject: 'Thank you for your message',
        html: autoReplyContent,
      });

      // Return success response
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send message. Please try again later.' });
    }
  } else {
    // Handle non-POST requests
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}