import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { db } = await import('@/lib/firebaseAdmin');
    const snapshot = await db.collection('leads').orderBy('createdAt', 'desc').get();
    
    const leads = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { db } = await import('@/lib/firebaseAdmin');
    const { id, status, notes } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 });
    }

    const leadRef = db.collection('leads').doc(id);
    const lead = await leadRef.get();

    if (!lead.exists) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    const updates: Record<string, unknown> = {};
    if (status !== undefined) updates.status = status;
    if (notes !== undefined) updates.notes = notes;

    await leadRef.update(updates);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update lead:", error);
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
  }
}
