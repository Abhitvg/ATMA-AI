import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

async function scrapeWebsite(url: string) {
  try {
    const formattedUrl = url.startsWith('http') ? url : `https://${url}`;
    const response = await fetch(formattedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Remove scripts and styles
    $('script, style, nav, footer').remove();

    const title = $('title').text() || '';
    const description = $('meta[name="description"]').attr('content') || '';
    
    // Get text and clean it up, limit to 5000 chars to save tokens
    const textContent = $('body').text().replace(/\\s+/g, ' ').trim().substring(0, 5000);

    return { url: formattedUrl, title, description, textContent, status: 'success' };
  } catch (error: any) {
    console.error(`Error scraping ${url}:`, error);
    return { url, status: 'error', error: error.message };
  }
}

async function generateDemo(leadData: any) {
  const companyName = (leadData.title || 'Your Company').split('|')[0].trim();
  const url = leadData.url || '#';
  
  let hook = "Unlock the power of Enterprise AI";
  let features = [
    "24/7 Automated Customer Support",
    "Semantic Document Search & Analytics",
    "Custom Workflow Automation"
  ];

  if (process.env.OPENAI_API_KEY) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: 'system', content: 'You are a marketing AI. Given a company\'s website description, write a 1-sentence hook for an AI product tailored to them, and 3 specific AI features they would benefit from. Output JSON: {"hook": "...", "features": ["...", "...", "..."]}' },
            { role: 'user', content: `Company Name: ${companyName}\nDescription: ${leadData.description}\nContent: ${leadData.textContent.substring(0, 1000)}` }
          ],
          response_format: { type: 'json_object' }
        })
      });

      if (response.ok) {
        const aiData = await response.json();
        const parsed = JSON.parse(aiData.choices[0].message.content);
        hook = parsed.hook || hook;
        features = parsed.features || features;
      }
    } catch (e) {
      console.error("AI Generation failed:", e);
    }
  }

  // Simplified demo link for the CSV
  const demoLink = `https://demo.atma-ai.co.in/${companyName.replace(/\s+/g, '_').toLowerCase()}`;
  return { companyName, url, hook, features, demoLink };
}

async function generateOutreach(leadData: any, demoLink: string, companyName: string) {
  const url = leadData.url || '#';
  let email1 = `Hi {{first_name}},\n\nI noticed ${companyName} could benefit from Enterprise AI automation.\n\nMy team at Atma AI built a quick prototype specifically trained on your website (${url}):\n${demoLink}\n\nLet me know if you'd like to chat about how this could save your team hundreds of hours.\n\nBest,\nAbhishek`;
  let email2 = `Hi {{first_name}},\n\nJust floating this to the top of your inbox. Did you get a chance to check out the AI prototype we built for ${companyName}? (${demoLink})\n\nHappy to schedule a quick 10-min technical briefing if it looks interesting.\n\nBest,\nAbhishek`;

  if (process.env.OPENAI_API_KEY) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: 'user', content: `Write a cold email to the decision maker at ${companyName}.\nWebsite context: ${(leadData.description || '').substring(0, 500)}\nGoal: Get them to click this custom AI prototype demo link: ${demoLink}\nTone: Professional, direct, technical, short (under 100 words).\nSign off as Abhishek Singh, CEO at Atma AI.` }
          ]
        })
      });

      if (response.ok) {
        const aiData = await response.json();
        email1 = aiData.choices[0].message.content;
      }
    } catch (e) {
      console.error("AI Email Generation failed:", e);
    }
  }

  return { email1, email2 };
}

export async function POST(request: Request) {
  try {
    const { urls } = await request.json();
    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: 'Valid URLs array required' }, { status: 400 });
    }

    const campaignData = [];

    for (const url of urls) {
      // 1. Scrape
      const scraped = await scrapeWebsite(url);
      
      if (scraped.status === 'success') {
        // 2. Demo Gen
        const demo = await generateDemo(scraped);
        
        // 3. Outreach Gen
        const emails = await generateOutreach(scraped, demo.demoLink, demo.companyName);

        campaignData.push({
          Company: demo.companyName,
          Website: scraped.url,
          Demo_Link: demo.demoLink,
          Email_1: emails.email1,
          Email_2: emails.email2,
          // We can also return the generated demo HTML or features to show in the UI
          demoFeatures: demo.features,
          demoHook: demo.hook
        });
      } else {
        campaignData.push({
          Company: url,
          Website: url,
          Error: scraped.error
        });
      }
    }

    return NextResponse.json({ success: true, campaignData });

  } catch (error) {
    console.error("Campaign run failed:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
