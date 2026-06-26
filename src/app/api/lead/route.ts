import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // The Webhook URL should be configured in your environment variables
    // Format: http://n8n-ip:5678/webhook/your-webhook-id
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    
    if (webhookUrl) {
      // Forward the payload to n8n asynchronously
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }).catch(err => {
        console.error('Failed to forward lead to n8n:', err);
      });
    } else {
      console.warn('N8N_WEBHOOK_URL is not configured. Lead data was not forwarded.');
      console.log('Lead data:', body);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
