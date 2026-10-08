import React, { useState } from 'react';
import { AlertTriangle, Heart, X, ChevronRight } from 'lucide-react';

interface EmergencyBannerProps {
  onOpenDonate: (cause?: string) => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenDonate }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-amber-600 text-white px-4 py-2 text-xs sm:text-sm font-medium border-b border-amber-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="bg-amber-800 text-white font-bold text-[10px] uppercase px-1.5 py-0.5 rounded shrink-0 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" />
            Urgent Appeal
          </span>
          <p className="truncate">
            <strong className="font-semibold">Ramadan & Gaza Lifeline:</strong> Thousands of families require emergency food packs and clean water supplies right now.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenDonate('Gaza Urgent Food & Medical Lifeline')}
            className="flex items-center gap-1 bg-white text-amber-900 font-semibold px-2.5 py-1 rounded text-xs hover:bg-amber-50 transition-colors cursor-pointer"
          >
            <Heart className="w-3 h-3 fill-amber-900" />
            <span>Support Now</span>
            <ChevronRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="text-amber-100 hover:text-white transition-colors cursor-pointer p-0.5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
