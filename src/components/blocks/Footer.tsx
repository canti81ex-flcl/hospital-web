export default function Footer() {
    return (
      <footer className="fixed bottom-0 left-0 right-0 z-50 w-full border-t border-[rgb(var(--border-subtle))] bg-[rgb(var(--bg-elevated))] shadow-[var(--elevation-modal)]">
        <div className="mx-auto max-w-6xl px-[var(--spacing-6)] py-[var(--spacing-6)] text-[var(--font-size-sm)] text-[rgb(var(--fg-muted))]">
          © {new Date().getFullYear()} 온누리스마일안과. All rights reserved.
        </div>
      </footer>
    );
  }
  