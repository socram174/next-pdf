'use client';

export default function Home() {


  return (
    <main style={{ padding: '2rem'}}>
      <h1>Open Random PDF</h1>
      <button
        onClick={ ()=>{window.open('/previred/ctrlPdf', '_blank', 'width=800,height=600')}}
        style={{
          padding: '10px 16px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        className="pdfBtn"
      >
        Open PDF
      </button>
    </main>
  );
}
