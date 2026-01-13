import { redirect } from 'next/navigation';

export default function CtrlPdfPage() {
  // Redirect to the PDF in the public folder
  redirect('/pdfs/sample1.pdf');
}
