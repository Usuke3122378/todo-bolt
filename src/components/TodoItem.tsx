import { Check, Pencil, Trash2 } from 'lucide-react';
import type { Todo } from '@/types';
import { PriorityBadge } from './PriorityBadge';
import { DueBadge } from './DueBadge';
import { formatDate } from '@/utils/date';

interface Props {
  todo: Todo;
  busy: boolean;
  onToggle: (todo: Todo) => void;
  onEdit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

export function TodoItem({ todo, busy, onToggle, onEdit, onDelete }: Props) {
  return (
    <div
      className={`group bg-white rounded-xl border border-gray-200 p-4 transition-all hover:shadow-md hover:border-sky-200 ${
        todo.done ? 'opacity-60' : ''
      } ${busy ? 'pointer-events-none opacity-50' : ''}`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(todo)}
          className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${
            todo.done
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'border-gray-300 hover:border-emerald-400 bg-white'
          }`}
          aria-label={todo.done ? '未完了に戻す' : '完了にする'}
        >
          {todo.done && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h3
              className={`font-semibold text-gray-900 break-words leading-snug ${
                todo.done ? 'line-through text-gray-500' : ''
              }`}
            >
              {todo.title}
            </h3>
            <div className="flex items-center gap-1.5 shrink-0">
              <PriorityBadge priority={todo.priority} />
              {todo.due_date && <DueBadge due={todo.due_date} />}
            </div>
          </div>

          {todo.content && (
            <p
              className={`mt-1.5 text-sm text-gray-600 whitespace-pre-wrap break-words leading-relaxed ${
                todo.done ? 'line-through' : ''
              }`}
            >
              {todo.content}
            </p>
          )}

          {todo.due_date && (
            <p className="mt-2 text-xs text-gray-400">期日: {formatDate(todo.due_date)}</p>
          )}

          <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(todo)}
              className="inline-flex items-center gap-1 text-xs font-medium text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100 px-2.5 py-1 rounded-md transition-colors"
            >
              <Pencil className="w-3.5 h-3.5" />
              編集
            </button>
            <button
              onClick={() => onDelete(todo)}
              className="inline-flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-md transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              削除
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
