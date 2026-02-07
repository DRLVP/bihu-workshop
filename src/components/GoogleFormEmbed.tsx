interface GoogleFormEmbedProps {
  formUrl: string;
}

export default function GoogleFormEmbed({ formUrl }: GoogleFormEmbedProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100">
        {/* Iframe Container */}
        <div className="relative w-full" style={{ paddingBottom: '120%', minHeight: '600px' }}>
          <iframe
            src={formUrl}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </div>

      {/* Fallback Link */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Having trouble viewing the form?{' '}
        <a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gamusa-red hover:text-gamusa-deep font-semibold hover:underline"
        >
          Open in new tab
        </a>
      </p>
    </div>
  );
}
