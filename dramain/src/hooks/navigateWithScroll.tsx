// utils/navigateWithScroll.ts
import { useRouter } from 'next/navigation';

export function navigateWithScroll(router: ReturnType<typeof useRouter>, id: string) {
  if (typeof window === 'undefined') return;

  const onIndexPage = window.location.pathname === '/';
  if (onIndexPage) {
    const el = document.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    router.push(`/#${id}`);
  }
}
