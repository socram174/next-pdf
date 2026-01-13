// app/previred/ctrlPdf/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // Get the PDF file from the public folder
    const pdfPath = path.join(process.cwd(), 'public', 'pdfs', 'sample1.pdf');
    const pdfBuffer = fs.readFileSync(pdfPath);

    // Return the PDF with appropriate headers
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="document.pdf"', // 'inline' shows in browser, 'attachment' downloads
      },
    });
  } catch (error) {
    return new NextResponse('PDF not found', { status: 404 });
  }
}