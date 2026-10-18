import type { Priority } from '@/types';

export function PriorityBadge({ priority }: { priority: Priority }) {
  const map: Record<Priority, { cls: string; dot: string }> = {
    高: { cls: 'bg-red-50 text-red-700 border-red-200', dot: 'bg-red-500' },
    中: { cls: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
    低: { cls: 'bg-gray-100 text-gray-600 border-gray-200', dot: 'bg-gray-400' },
  };
  const m = map[priority];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full border ${m.cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${m.dot}`} />
      {priority}
    </span>
  );
}
