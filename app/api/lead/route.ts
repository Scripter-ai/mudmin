import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log('Received data for record in database:', data);

    const contactformData = {
        name: data.name,
        email: data.email,
        company: data.company,
        comments: data.comments,
        form: data.form,
      };

    const formData = await prisma.contactForm.create({
      data: contactformData,
    });

    // Make sure to return the correct response for an API route
    return new Response(JSON.stringify({ success: true, data: formData }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating record in database:', error);
    // Make sure to return the correct response for an API route
    return new Response(JSON.stringify({ success: false, error: 'Failed to create record in database' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
