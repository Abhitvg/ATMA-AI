import { NextResponse } from 'next/server';

function wrapHTML(title: string, subtitle: string, bodyContent: string, isLightHeader: boolean = false) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  body { font-family: 'Inter', sans-serif; color: #333; margin: 0; padding: 0; background: #e2e8f0; display: flex; justify-content: center; }
  .page { width: 800px; background: white; position: relative; padding-bottom: 40px; box-sizing: border-box; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin: 0 auto; overflow: hidden; }
  .header { background-color: #0f204b; color: white; display: flex; padding: 40px; position: relative; overflow: hidden; border-bottom-right-radius: 60px; margin-bottom: 40px; }
  .header-bg { position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.1; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px; }
  .header-left { flex: 1; z-index: 1; border-right: 1px solid rgba(255,255,255,0.2); padding-right: 20px; }
  .header-right { flex: 1.2; z-index: 1; padding-left: 40px; display: flex; flex-direction: column; justify-content: center; }
  .logo-area { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
  .logo-icon { width: 40px; height: 40px; object-fit: contain; }
  .company-name { font-size: 24px; font-weight: 700; letter-spacing: 1px; margin: 0; }
  .company-subtitle { font-size: 10px; color: #8ba0d8; letter-spacing: 2px; margin: 0; text-transform: uppercase; }
  .contact-list { list-style: none; padding: 0; margin: 0; font-size: 10px; color: #d0d9f0; }
  .contact-list li { margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
  .contact-icon { width: 14px; height: 14px; fill: currentColor; flex-shrink: 0; }
  
  .doc-title { font-size: 32px; font-weight: 700; margin: 0 0 10px 0; letter-spacing: -1px; text-transform: uppercase; }
  .doc-subtitle { font-size: 12px; margin: 0; line-height: 1.5; }
  .light-title { color: #fff; }
  .light-subtitle { color: #d0d9f0; }
  .dark-title { color: #0f204b; background: white; padding: 5px 15px; border-radius: 4px; display: inline-block; }
  .dark-subtitle { color: white; margin-top: 10px; }

  .content { padding: 0 40px; margin-bottom: 80px; }
  .section-title { color: #0f204b; font-size: 14px; font-weight: 700; margin-bottom: 15px; text-transform: uppercase; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; display: flex; align-items: center; gap: 10px; }
  .text-box { background: #f8fafc; border-left: 3px solid #2563eb; padding: 15px; border-radius: 0 8px 8px 0; margin-bottom: 20px; font-size: 12px; line-height: 1.6; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 20px; }
  
  table { border-collapse: collapse; margin-bottom: 20px; font-size: 11px; width: 100%; }
  th { background: #0f204b; color: white; text-align: left; padding: 10px; font-weight: 600; text-transform: uppercase; font-size: 10px; }
  td { padding: 12px 10px; border-bottom: 1px solid #e2e8f0; color: #475569; }
  
  .footer { background-color: #0f204b; color: white; padding: 20px 40px; position: absolute; bottom: 0; left: 0; right: 0; display: flex; justify-content: space-between; align-items: center; font-size: 10px; border-top-left-radius: 40px; border-top-right-radius: 40px; }
  .footer-left { display: flex; align-items: center; gap: 10px; }
  .footer-heart { color: #3b82f6; font-size: 16px; }
  .footer-socials { display: flex; gap: 10px; }
  .social-icon { width: 20px; height: 20px; border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
  
  h1, h2, h3 { color: #0f204b; margin-top: 0; }
  p, li { font-size: 12px; color: #475569; line-height: 1.6; }
  ul { padding-left: 20px; margin-top: 0; }
  
  .icon-circle { width: 30px; height: 30px; background: #0f204b; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; }
  .flex-item { display: flex; gap: 12px; margin-bottom: 15px; }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <div class="header-bg"></div>
    <div class="header-left">
      <div class="logo-area">
        <img src="/logos/atma-logo.svg" class="logo-icon" alt="ATMA Solutions Logo" />
        <div>
          <h2 class="company-name">ATMA</h2>
          <p class="company-subtitle">SOLUTIONS</p>
        </div>
      </div>
      <ul class="contact-list">
        <li><svg class="contact-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> A-2, Yadav Complex, A-block, Saket, New Delhi-110068</li>
        <li><svg class="contact-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> info@atma-ai.co.in</li>
        <li><svg class="contact-icon" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg> +91 98765-43210</li>
      </ul>
    </div>
    <div class="header-right">
      <h1 class="doc-title ${isLightHeader ? 'dark-title' : 'light-title'}">${title}</h1>
      <p class="doc-subtitle ${isLightHeader ? 'dark-subtitle' : 'light-subtitle'}">${subtitle}</p>
    </div>
  </div>
  
  <div class="content">
    ${bodyContent}
  </div>

  <div class="footer">
    <div class="footer-left">
      <span class="footer-heart">♥</span>
      <div>
        <strong>LET'S BUILD SOMETHING AMAZING TOGETHER.</strong>
        <br><span style="color:#8ba0d8">We turn ideas into powerful digital solutions that drive growth.</span>
      </div>
    </div>
    <div class="footer-socials">
      <div class="social-icon">in</div>
      <div class="social-icon">f</div>
      <div class="social-icon">ig</div>
      <div class="social-icon">x</div>
    </div>
  </div>
</div>
</body>
</html>`;
}

const templates: Record<string, (org: string, proj: string, date: string, amount: string) => string> = {
  'client-contract': (org, proj, date, amount) => wrapHTML(
    'CLIENT CONTRACT',
    'This Agreement is made between the Client and ATMA SOLUTIONS ("Agency") and sets forth the terms and conditions under which services will be provided.',
    `<div class="grid-2">
      <div class="text-box" style="margin: 0;">
        <h3 style="margin:0 0 5px 0; font-size:12px;">AGENCY INFORMATION</h3>
        <p style="margin:0;">Agency Name: ATMA SOLUTIONS<br>Address: A-2, Yadav Complex, A-block, Saket, New Delhi-110068<br>Email: info@atma-ai.co.in<br>Phone: +91 98765-43210</p>
      </div>
      <div class="text-box" style="margin: 0; border-left-color: #0f204b;">
        <h3 style="margin:0 0 5px 0; font-size:12px;">CLIENT INFORMATION</h3>
        <p style="margin:0;">Client Name: ${org}<br>Project: ${proj}<br>Date: ${date}</p>
      </div>
    </div>
    <table style="margin-top: 20px;">
      <tr><th style="width: 50px;">#</th><th style="width: 200px;">CLAUSE</th><th>DETAILS</th></tr>
      <tr><td>1</td><td><strong>SCOPE OF SERVICES</strong></td><td>The Agency agrees to provide AI development and software consulting as outlined in the proposal.</td></tr>
      <tr><td>2</td><td><strong>TERM</strong></td><td>This Agreement begins on ${date} and continues until project completion.</td></tr>
      <tr><td>3</td><td><strong>PAYMENT TERMS</strong></td><td>The Client agrees to pay the fees outlined in the Proposal. Invoices are due within 15 days.</td></tr>
      <tr><td>4</td><td><strong>CONFIDENTIALITY</strong></td><td>Both parties agree to keep confidential all non-public information shared during the term.</td></tr>
      <tr><td>5</td><td><strong>OWNERSHIP</strong></td><td>Upon full payment, all deliverables become the property of the Client.</td></tr>
    </table>
    <div class="grid-2" style="margin-top: 30px;">
      <div>
        <div style="border-top: 1px solid #0f204b; margin-top: 40px; padding-top: 10px; font-weight: bold;">FOR THE AGENCY</div>
        <p style="margin-top: 5px;">Signature: ______________________<br>Name: __________________________<br>Date: ___________________________</p>
      </div>
      <div>
        <div style="border-top: 1px solid #0f204b; margin-top: 40px; padding-top: 10px; font-weight: bold;">FOR THE CLIENT</div>
        <p style="margin-top: 5px;">Signature: ______________________<br>Name: __________________________<br>Date: ___________________________</p>
      </div>
    </div>`
  ),

  'welcome-msg': (org, proj, date, amount) => wrapHTML(
    'WELCOME TO THE TEAM!',
    'Thank you for choosing ATMA SOLUTIONS as your technology partner. We are excited to help you bring your ideas to life.',
    `<div class="grid-2">
      <div>
        <div class="section-title">WHAT TO EXPECT</div>
        <div class="flex-item"><div class="icon-circle">1</div><div><strong>STRATEGY-FIRST APPROACH</strong><br>We understand your goals and craft the right digital strategy for maximum impact.</div></div>
        <div class="flex-item"><div class="icon-circle">2</div><div><strong>CLEAN & SCALABLE DEVELOPMENT</strong><br>We build fast, secure, and scalable AI solutions focused on long-term growth.</div></div>
        <div class="flex-item"><div class="icon-circle">3</div><div><strong>ONGOING SUPPORT</strong><br>We're here after launch to support, maintain, and help you grow.</div></div>
      </div>
      <div>
        <div class="section-title">WHAT WE NEED FROM YOU</div>
        <div class="flex-item"><div class="icon-circle" style="background:#2563eb;">A</div><div><strong>REQUIREMENTS & PREFERENCES</strong><br>Provide your requirements, features, content, and any reference you like.</div></div>
        <div class="flex-item"><div class="icon-circle" style="background:#2563eb;">B</div><div><strong>CONTENT & ASSETS</strong><br>Share text, images, logos, documents, or any existing materials.</div></div>
        <div class="flex-item"><div class="icon-circle" style="background:#2563eb;">C</div><div><strong>TIMELY FEEDBACK</strong><br>Your feedback helps us stay on track and deliver the best results faster.</div></div>
      </div>
    </div>
    <div class="section-title" style="margin-top: 20px;">OUR PROCESS</div>
    <div class="grid-3" style="text-align: center;">
      <div><div class="icon-circle" style="margin: 0 auto 10px;">01</div><strong>DISCOVERY</strong><p>We learn about your business goals.</p></div>
      <div><div class="icon-circle" style="margin: 0 auto 10px;">02</div><strong>STRATEGY</strong><p>We map the right roadmap for you.</p></div>
      <div><div class="icon-circle" style="margin: 0 auto 10px;">03</div><strong>DEVELOPMENT</strong><p>We build secure and scalable solutions.</p></div>
    </div>`
  ),

  'kickoff-call': (org, proj, date, amount) => wrapHTML(
    'LET\'S CONNECT!',
    'We use Google Meet for our online meetings to collaborate, discuss, and move your project forward efficiently.',
    `<div class="grid-2">
      <div class="text-box" style="margin: 0; display:flex; align-items:center; gap: 10px;">
        <div class="icon-circle">📅</div>
        <div><strong>MEETING DATE</strong><br>${date}</div>
      </div>
      <div class="text-box" style="margin: 0; border-left-color: #0f204b; display:flex; align-items:center; gap: 10px;">
        <div class="icon-circle" style="background:#2563eb;">⏱</div>
        <div><strong>DURATION</strong><br>Typically 30-45 mins</div>
      </div>
    </div>
    <div class="grid-2" style="margin-top: 30px;">
      <div>
        <div class="section-title">PURPOSE OF THE MEETING</div>
        <p>The purpose of this meeting is to understand your vision, discuss project details, align expectations, and plan the next steps for a smooth collaboration.</p>
        <ul style="color: #475569; font-size: 12px; line-height: 1.6;">
          <li>Understand your goals and requirements</li>
          <li>Discuss project scope and deliverables</li>
          <li>Review timeline, milestones & process</li>
          <li>Answer questions and align expectations</li>
        </ul>
      </div>
      <div>
        <div class="section-title">MEETING AGENDA</div>
        <div class="flex-item"><div class="icon-circle" style="width:24px;height:24px;font-size:10px;">01</div><div><strong>INTRODUCTIONS</strong><br>Meet the team and get aligned.</div></div>
        <div class="flex-item"><div class="icon-circle" style="width:24px;height:24px;font-size:10px;">02</div><div><strong>PROJECT OVERVIEW</strong><br>Discuss your goals, vision & requirements.</div></div>
        <div class="flex-item"><div class="icon-circle" style="width:24px;height:24px;font-size:10px;">03</div><div><strong>SCOPE & TIMELINE</strong><br>Review key features, timeline & process.</div></div>
      </div>
    </div>`
  ),

  'invoice': (org, proj, date, amount, currency) => wrapHTML(
    'INVOICE',
    'Thank you for trusting us with your digital journey.',
    `<div class="grid-2">
      <div class="text-box" style="margin: 0; background: white; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h3 style="margin:0 0 5px 0; font-size:12px; color: #8ba0d8;">BILL TO:</h3>
        <p style="margin:0; font-weight: bold; color: #0f204b;">${org}</p>
        <p style="margin:0;">Project: ${proj}</p>
      </div>
      <div class="text-box" style="margin: 0; background: white; border: 1px solid #e2e8f0; border-radius: 8px; border-left-color: #2563eb;">
        <table style="margin: 0;">
          <tr><td style="padding: 2px 0; border: none; font-weight: bold;">INVOICE NO.</td><td style="padding: 2px 0; border: none; text-align: right;">INV-${Math.floor(Math.random() * 10000)}</td></tr>
          <tr><td style="padding: 2px 0; border: none; font-weight: bold;">DATE</td><td style="padding: 2px 0; border: none; text-align: right;">${date}</td></tr>
          <tr><td style="padding: 2px 0; border: none; font-weight: bold;">DUE DATE</td><td style="padding: 2px 0; border: none; text-align: right;">Upon Receipt</td></tr>
        </table>
      </div>
    </div>
    <table style="margin-top: 30px;">
      <tr><th style="width: 40px;">#</th><th>DESCRIPTION</th><th>DELIVERABLES</th><th style="text-align:center;">QTY</th><th style="text-align:right;">UNIT PRICE</th><th style="text-align:right;">AMOUNT</th></tr>
      <tr><td>01</td><td><strong>Project Milestone</strong></td><td>Professional Services for ${proj}</td><td style="text-align:center;">1</td><td style="text-align:right;">${currency}${amount}</td><td style="text-align:right;">${currency}${amount}</td></tr>
    </table>
    <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
      <div style="width: 300px; background: #f8fafc; padding: 20px; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;"><span>SUBTOTAL</span><strong>${currency}${amount}</strong></div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;"><span>TAX (0%)</span><strong>${currency}0.00</strong></div>
        <div style="display: flex; justify-content: space-between; font-size: 16px; color: #0f204b;"><span>TOTAL DUE</span><strong>${currency}${amount}</strong></div>
      </div>
    </div>`,
    true
  ),

  'thankyou-msg': (org, proj, date, amount, currency) => wrapHTML(
    'THANK YOU!',
    'We truly appreciate you.',
    `<div style="text-align: center; margin-bottom: 30px;">
      <p style="font-size: 16px;">We're grateful for the trust you've placed in us and excited to be part of your brand's growth journey.</p>
      <p style="font-weight: bold; color: #0f204b;">Let's achieve amazing things together!</p>
    </div>
    <div class="text-box" style="margin: 0 auto 30px auto; max-width: 600px; background: white; border: 1px solid #e2e8f0; border-left: 4px solid #2563eb;">
      <h3 style="margin-top:0;">Hi ${org},</h3>
      <p>Thank you so much for choosing ATMA SOLUTIONS as your digital technology partner. Your trust means the world to us. We're excited to collaborate, create impactful solutions, and help your brand grow and succeed.</p>
      <p>We look forward to delivering value, achieving goals, and building a long-term partnership that brings real results.</p>
      <p>With Appreciation,<br><strong>Your ATMA SOLUTIONS Team ♥</strong></p>
    </div>
    <div class="section-title" style="justify-content: center; margin-top: 40px;">WHY WE'RE EXCITED TO WORK WITH YOU</div>
    <div class="grid-3" style="text-align: center; margin-top: 20px;">
      <div><div class="icon-circle" style="margin: 0 auto 10px;">🎯</div><strong>Your Goals</strong><p>We align with your vision and ready to make it happen.</p></div>
      <div><div class="icon-circle" style="margin: 0 auto 10px; background:#2563eb;">🤝</div><strong>Your Trust</strong><p>The value the trust you've placed in us and don't take it for granted.</p></div>
      <div><div class="icon-circle" style="margin: 0 auto 10px;">📈</div><strong>Real Results</strong><p>We focus on what matters—growth, engagement, and results.</p></div>
    </div>`
  ),

  'mutual-nda': (org, proj, date, amount, currency) => wrapHTML('MUTUAL NDA', 'Non-Disclosure Agreement', `
    <div class="text-box"><strong>Effective Date:</strong> ${date}<br><strong>Between:</strong> ${org} ("Disclosing Party") and ATMA SOLUTIONS ("Receiving Party")<br><strong>Project Name:</strong> ${proj}</div>
    <div class="section-title">1. Purpose</div><p>The parties intend to explore a potential business relationship in connection with ${proj}.</p>
    <div class="section-title">2. Confidential Information</div><p>"Confidential Information" means any data or information that is proprietary to the Disclosing Party and not generally known to the public.</p>
    <div class="section-title">3. Obligations</div><p>The Receiving Party shall hold and maintain the Confidential Information in strictest confidence for the sole and exclusive benefit of the Disclosing Party.</p>
  `),
  'msa': (org, proj, date, amount, currency) => wrapHTML('MASTER SERVICE AGREEMENT', 'General Terms & Conditions', `
    <div class="text-box"><strong>Effective Date:</strong> ${date}<br><strong>Between:</strong> ATMA SOLUTIONS ("Provider") and ${org} ("Client")</div>
    <div class="section-title">1. Services</div><p>Provider will perform the services described in the statements of work ("SOWs") executed by the parties.</p>
    <div class="section-title">2. Payment</div><p>Client shall pay Provider the fees set forth in each SOW. Payments are due within 15 days of invoice date.</p>
    <div class="section-title">3. Intellectual Property</div><p>Upon full payment, Provider assigns to Client all rights to the deliverables.</p>
    <div class="section-title">4. Liability</div><p>Neither party shall be liable for any indirect, incidental, or consequential damages.</p>
    <div class="grid-2" style="margin-top: 30px;">
      <div><div style="border-top: 1px solid #0f204b; margin-top: 40px; padding-top: 10px; font-weight: bold;">PROVIDER</div><p>Signature: ______________________<br>Name: __________________________</p></div>
      <div><div style="border-top: 1px solid #0f204b; margin-top: 40px; padding-top: 10px; font-weight: bold;">CLIENT</div><p>Signature: ______________________<br>Name: __________________________</p></div>
    </div>`
  ),

  'offer-letter': (org, proj, date, amount, currency) => wrapHTML('OFFER LETTER', 'Employment Offer', `
    <div class="text-box"><strong>Date:</strong> ${date}<br><strong>To:</strong> ${org}<br><strong>Role:</strong> ${proj}</div>
    <p>Dear ${org},</p>
    <p>We are thrilled to offer you the position of ${proj} at ATMA SOLUTIONS. Your skills and experience will be an ideal fit for our team.</p>
    <table style="margin-top: 20px;">
      <tr><th>POSITION</th><td>${proj}</td></tr>
      <tr><th>START DATE</th><td>To be mutually agreed</td></tr>
      <tr><th>COMPENSATION</th><td>As per industry standards and mutual agreement.</td></tr>
      <tr><th>BENEFITS</th><td>Standard company benefits apply.</td></tr>
    </table>
    <p>Please review this offer and sign below to indicate your acceptance.</p>
    <div class="grid-2" style="margin-top: 30px;">
      <div><div style="border-top: 1px solid #0f204b; margin-top: 40px; padding-top: 10px; font-weight: bold;">ATMA SOLUTIONS</div><p>Signature: ______________________<br>Name: HR Director</p></div>
      <div><div style="border-top: 1px solid #0f204b; margin-top: 40px; padding-top: 10px; font-weight: bold;">CANDIDATE</div><p>Signature: ______________________<br>Name: ${org}</p></div>
    </div>`
  ),

  'hr-policies': (org, proj, date, amount, currency) => wrapHTML('HR POLICIES', 'Employee Handbook & Guidelines', `
    <div class="text-box"><strong>Company:</strong> ATMA SOLUTIONS<br><strong>Last Updated:</strong> ${date}</div>
    <div class="section-title">1. Code of Conduct</div><p>We expect all employees to conduct themselves professionally, respectfully, and ethically at all times.</p>
    <div class="section-title">2. Work Hours</div><p>Standard working hours are 9 AM to 6 PM, Monday to Friday. We support flexible arrangements when applicable.</p>
    <div class="section-title">3. Leave Policy</div><p>Employees are entitled to 20 days of paid leave annually, plus public holidays.</p>
    <div class="section-title">4. Diversity & Inclusion</div><p>ATMA SOLUTIONS is an equal opportunity employer committed to fostering an inclusive environment.</p>
  `),

  'terms-of-service': (org, proj, date, amount, currency) => wrapHTML('TERMS OF SERVICE', 'Website & Platform Usage', `
    <div class="text-box"><strong>Company:</strong> ATMA SOLUTIONS<br><strong>Effective Date:</strong> ${date}</div>
    <div class="section-title">1. Acceptance</div><p>By using our services, you agree to these terms.</p>
    <div class="section-title">2. User Responsibilities</div><p>You must provide accurate information and are responsible for safeguarding your account credentials.</p>
    <div class="section-title">3. Intellectual Property</div><p>All content and software provided by ATMA SOLUTIONS is protected by copyright and intellectual property laws.</p>
    <div class="section-title">4. Termination</div><p>We reserve the right to suspend or terminate access for violations of these terms.</p>
  `),

  'privacy-policy': (org, proj, date, amount, currency) => wrapHTML('PRIVACY POLICY', 'Data Collection & Usage', `
    <div class="text-box"><strong>Company:</strong> ATMA SOLUTIONS<br><strong>Effective Date:</strong> ${date}</div>
    <div class="section-title">1. Data We Collect</div><p>We collect personal information such as name, email address, and usage data to improve our services.</p>
    <div class="section-title">2. How We Use Data</div><p>Your data is used to provide, maintain, and improve our platform, and to communicate with you.</p>
    <div class="section-title">3. Data Sharing</div><p>We do not sell your personal data. We may share it with trusted third-party service providers under strict confidentiality.</p>
    <div class="section-title">4. Your Rights</div><p>You have the right to access, correct, or request deletion of your personal data.</p>
  `),

  'legal-compliance': (org, proj, date, amount, currency) => wrapHTML('LEGAL COMPLIANCE', 'Regulatory Guidelines', `
    <div class="text-box"><strong>Company:</strong> ATMA SOLUTIONS<br><strong>Prepared for:</strong> ${org}<br><strong>Date:</strong> ${date}</div>
    <div class="section-title">1. Data Protection</div><p>We adhere to applicable data protection laws, ensuring secure handling of sensitive information.</p>
    <div class="section-title">2. Anti-Bribery</div><p>ATMA SOLUTIONS maintains a strict zero-tolerance policy towards bribery and corruption.</p>
    <div class="section-title">3. Export Controls</div><p>Our products and services comply with all relevant export control regulations.</p>
    <div class="section-title">4. Audits & Reporting</div><p>We maintain comprehensive records and cooperate fully with regulatory audits.</p>
  `),
};

export async function POST(req: Request) {
  try {
    const { templateId, orgName, projectName, amount, currency, docDate } = await req.json();

    if (!templateId || !orgName || !projectName) {
      return NextResponse.json({ success: false, error: 'Missing required fields.' }, { status: 400 });
    }

    const generator = templates[templateId];
    if (!generator) {
      return NextResponse.json({ success: false, error: 'Template not found.' }, { status: 404 });
    }

    // Use provided docDate or today's date
    const dateStr = docDate || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const finalAmount = amount || '0';
    const finalCurrency = currency || '$';
    
    const content = generator(orgName, projectName, dateStr, finalAmount, finalCurrency);

    return NextResponse.json({ success: true, content });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
