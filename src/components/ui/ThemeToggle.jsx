import { Coffee, Moon, Sun } from 'lucide-react';

import { useUI } from '../../lib/ui-context';

const ICONS = {
  light: Sun,
  dark: Moon,
  sepia: Coffee,
};

const LABELS = {
  light: '라이트 (베이지)',
  dark: '다크',
  sepia: '세피아',
};

function ThemeToggle() {
  const { theme, cycleTheme } = useUI();
  const Icon = ICONS[theme] || Sun;

  return (
    <button
      type="button"
      className="icon-button"
      onClick={cycleTheme}
      aria-label={`테마: ${LABELS[theme] || theme}. 클릭하여 변경`}
      title={`테마: ${LABELS[theme] || theme} · T 키로도 전환`}
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}

export default ThemeToggle;
