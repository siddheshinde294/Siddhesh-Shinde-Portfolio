# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service

1. After logging in, go to "Email Services" in the left sidebar
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the authentication steps
5. **Save the Service ID** - you'll need this later

## Step 3: Create Notification Email Template (for you)

1. Go to "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Choose "Blank Template"
4. Configure your template:

### Template Settings:
- **Template Name**: "Portfolio Contact Form Notification"
- **Subject**: "New Contact Form Submission from {{from_name}}"

### Email Content:
```
Hello {{to_name}},

You have received a new message from your portfolio contact form:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Phone:** {{from_phone}}
**Subject:** {{subject}}

**Message:**
{{message}}

---
This message was sent from your portfolio website.
Reply directly to this email to respond to {{from_name}}.
```

5. **Save the Template ID** - you'll need this later

## Step 4: Create Auto-Reply Email Template (for sender)

1. Go to "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Choose "Blank Template"
4. Configure your template:

### Template Settings:
- **Template Name**: "Portfolio Contact Form Auto-Reply"
- **Subject**: "Thank you for contacting Siddhesh Shinde"

### Email Content:
```
Dear {{to_name}},

Thank you for reaching out to me through my portfolio website!

I have received your message regarding "{{original_subject}}" and will get back to you as soon as possible.

**Your Message:**
{{original_message}}

**What happens next:**
- I'll review your message within 24 hours
- You'll receive a detailed response from me
- If it's urgent, you can also reach me directly at {{sender_email}}

**Best regards,**
{{sender_name}}
Software Developer & Data Analyst

---
This is an automated confirmation. Please do not reply to this email.
```

5. **Save the Template ID** - you'll need this later

## Step 5: Get API Keys

1. Go to "Account" → "API Keys" in the left sidebar
2. Copy your **Public Key**

## Step 6: Update Configuration

1. Open `config/emailjs.ts` in your project
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here', // From Step 2
  TEMPLATE_ID: 'your_notification_template_id_here', // From Step 3
  AUTO_REPLY_TEMPLATE_ID: 'your_auto_reply_template_id_here', // From Step 4
  PUBLIC_KEY: 'your_public_key_here', // From Step 5
};
```

## Step 7: Test the Integration

1. Run your development server: `npm run dev`
2. Go to the contact form
3. Fill out the form and submit
4. Check your email for the notification
5. Check the sender's email for the auto-reply
6. Check browser console for any errors

## Troubleshooting

### Common Issues:

1. **"Service not found" error**
   - Double-check your Service ID
   - Make sure the service is properly connected

2. **"Template not found" error**
   - Double-check your Template ID
   - Make sure the template is published

3. **"Invalid API key" error**
   - Double-check your Public Key
   - Make sure you're using the Public Key, not Private Key

4. **Email not received**
   - Check your spam folder
   - Verify your email service is working
   - Check EmailJS dashboard for delivery status

### EmailJS Limits:
- **Free Tier**: 200 emails per month
- **Paid Plans**: Start at $15/month for 1,000 emails

## Security Notes

- The Public Key is safe to use in frontend code
- Never share your Private Key
- EmailJS handles all security on their servers
- Your email credentials are encrypted and secure

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://community.emailjs.com/](https://community.emailjs.com/)
- Contact EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/) 