// app/previred/ctrlPdf/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Add this to prevent static generation


export async function GET(request: NextRequest) {
    console.log(request)
  try {
    const pdfPath = path.join(process.cwd(), 'public', 'pdfs', 'sample1.pdf');
    const pdfBuffer = fs.readFileSync(pdfPath);

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="document.pdf"',
      },
    });
  } catch (error) {
    console.log(error)
    return new NextResponse('PDF not found', { status: 404 });
  }
}