import React, { useState, useEffect } from 'react';

interface RitualTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RitualTimerModal: React.FC<RitualTimerModalProps> = ({ isOpen, onClose }) => {
  const [secondsLeft, setSecondsLeft] = useState(180); // 3 minutes default
  const [isActive, setIsActive] = useState(false);
  const totalSeconds = 180;

  useEffect(() => {
    let interval: any = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  if (!isOpen) return null;

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = ((totalSeconds - secondsLeft) / totalSeconds) * 100;

  const handleReset = () => {
    setIsActive(false);
    setSecondsLeft(180);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative bg-[#121614] text-[#f0f1f2] w-full max-w-md rounded-3xl shadow-2xl border border-[#274e3d] p-6 sm:p-8 text-center space-y-5 sm:space-y-6 max-h-[90vh] overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#1b4332] text-gray-400 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div>
          <span className="bg-[#cba72f]/20 text-[#ffe088] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Evening Infusion Ritual
          </span>
          <h3 className="font-serif text-2xl font-bold mt-2 text-[#c1ecd4]">
            3-Minute Botanical Infusion
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Allow herbs to release active bio-compounds into warm liquid while you breathe deeply.
          </p>
        </div>

        {/* Circular Timer Visual */}
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="80"
              className="text-[#1b4332]"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
            />
            <circle
              cx="96"
              cy="96"
              r="80"
              className="text-[#cba72f] transition-all duration-1000"
              strokeWidth="10"
              strokeDasharray={502}
              strokeDashoffset={502 - (502 * progressPercent) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-serif text-4xl font-bold tracking-tight text-white">
              {formatTime(secondsLeft)}
            </span>
            <span className="text-[10px] text-[#c1ecd4] font-medium uppercase mt-1">
              {secondsLeft === 0 ? 'Ritual Complete' : isActive ? 'Infusing...' : 'Paused'}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className="py-3 px-8 rounded-full bg-[#cba72f] text-[#241a00] font-bold text-sm hover:bg-[#ffe088] transition-colors shadow-lg flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">
              {isActive ? 'pause' : 'play_arrow'}
            </span>
            <span>{isActive ? 'Pause' : secondsLeft === 180 ? 'Begin Steep' : 'Resume'}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-3 rounded-full bg-[#1b4332] text-[#c1ecd4] hover:bg-[#274e3d] transition-colors"
            title="Reset timer"
          >
            <span className="material-symbols-outlined text-lg">restart_alt</span>
          </button>
        </div>

        <p className="text-[11px] text-gray-400 italic">
          "Let the gold ground you. Let the root restore you."
        </p>
      </div>
    </div>
  );
};