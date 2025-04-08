import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { name, email, phone, company, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { error: 'Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία' },
        { status: 400 }
      );
    }

    // Create subject line based on the selected service
    let subjectLine = '';
    switch (subject) {
      case 'seo':
        subjectLine = 'Ενδιαφέρον για SEO - Βελτιστοποίηση για Μηχανές Αναζήτησης';
        break;
      case 'google-ads':
        subjectLine = 'Ενδιαφέρον για Google Ads Management';
        break;
      case 'content':
        subjectLine = 'Ενδιαφέρον για Ιατρικό Content Writing';
        break;
      case 'website':
        subjectLine = 'Ενδιαφέρον για Κατασκευή Ιατρικής Ιστοσελίδας';
        break;
      case 'medical-web':
        subjectLine = 'Ενδιαφέρον για Ιατρικές Εφαρμογές & Λογισμικό';
        break;
      case 'medical-marketing':
        subjectLine = 'Ενδιαφέρον για Ολοκληρωμένο Ιατρικό Marketing';
        break;
      case 'social-media':
        subjectLine = 'Ενδιαφέρον για Social Media Management';
        break;
      default:
        subjectLine = 'Νέο μήνυμα από τη φόρμα επικοινωνίας';
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Doctor Digital <onboarding@resend.dev>',
      to: ['marketing@doctordigital.gr'],
      reply_to: email,
      subject: subjectLine,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #16a34a; margin-bottom: 16px;">Νέο μήνυμα από τη φόρμα επικοινωνίας</h2>
            <p style="margin-bottom: 8px;"><strong>Όνομα:</strong> ${name}</p>
            <p style="margin-bottom: 8px;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin-bottom: 8px;"><strong>Τηλέφωνο:</strong> ${phone}</p>` : ''}
            ${company ? `<p style="margin-bottom: 8px;"><strong>Εταιρεία/Ιατρείο:</strong> ${company}</p>` : ''}
            <p style="margin-bottom: 8px;"><strong>Υπηρεσία:</strong> ${subjectLine}</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="color: #374151; margin-bottom: 12px;">Μήνυμα:</h3>
            <div style="white-space: pre-wrap; color: #4b5563;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top: 24px; padding: 16px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280; text-align: center;">
            <p>Αυτό το email στάλθηκε από τη φόρμα επικοινωνίας του <a href="https://doctordigital.gr" style="color: #16a34a; text-decoration: none;">Doctor Digital</a>.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Σφάλμα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά.' },
      { status: 500 }
    );
  }
}
