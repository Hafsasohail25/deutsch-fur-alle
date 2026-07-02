import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-6 text-center">
      <span className="font-display text-7xl font-semibold text-forest">404</span>
      <h1 className="heading-md mt-4 text-ink">Page Not Found</h1>
      <p className="body-lg mt-3 max-w-sm">
        The page you're looking for doesn't exist. Let's get you back on track.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  );
}
