export default function Footer() {
    return (
      <footer className="fixed bottom-0 left-0 right-0 z-50 w-full border-t border-[rgb(var(--border))] bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white">
          © {new Date().getFullYear()} 서울 센트럴 병원. All rights reserved.
        </div>
      </footer>
    );
  }
  