// utils/navigateWithScroll.ts
import { useNavigate, useLocation } from 'react-router-dom';

export function useNavigateWithScroll() {
  const navigate = useNavigate();
  const location = useLocation();

  return (id: string) => {
    if (typeof window === 'undefined') return;

    const onIndexPage = location.pathname === '/';

    if (onIndexPage) {
      const el = document.querySelector(`#${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };
}
