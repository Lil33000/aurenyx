export default function ProjectPage({ params }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl text-goldSoft tracking-[0.2em] mb-6">
        Projet : {params.slug}
      </h1>
      <div className="aspect-video w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video feedback"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
