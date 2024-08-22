'use client';

import { handleCopy } from '@/util/functions';
import { useEffect } from 'react';

type Props = {
  opacValue: number;
  fullHex: string;
  setOpacity: any; //todo: add type
};

const OpacityInputs = ({ opacValue, setOpacity, fullHex }: Props) => {
  const quickActions = Array.from({ length: 9 }, (_, i) => (i + 1) * 10);
  const displayValue = opacValue.toString().padStart(3, '0');

  const handleSlider = (e: any) => {
    const newOpacity = e.target.value;
    setOpacity(newOpacity);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key;
      if (key >= '1' && key <= '9') {
        const value = parseInt(key, 10) * 10;
        setOpacity(value);
        handleCopy(fullHex);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [setOpacity, fullHex]);

  return (
    <section className="flex-1 mt-9">
      <ul className="flex gap-2 flex-1 min-h-8">
        <li className="w-2/5 flex justify-between items-center">
          <h3 className="w-fit">Opacity</h3>
          <div className="relative bg-input-background rounded-md min-w-fit px-2 py-1">
            <div className="absolute left-2 top-1 transform font-mono pointer-events-none">
              {displayValue.split('').map((digit, index) => (
                <span
                  key={index}
                  className={digit === '0' && index < displayValue.length - opacValue.toString().length ? 'text-muted' : ''}
                >
                  {digit}
                </span>
              ))}
            </div>
            <input
              type="text"
              value={opacValue}
              onChange={(e) => setOpacity(e.target.value)}
              className="bg-transparent outline-none w-[3ch] text-right font-mono"
            />
          </div>
        </li>
        <li className="flex-1 bg-input-background rounded-md grid place-items-center overflow-hidden">
          <input
            type="range"
            min="0"
            max="100"
            value={opacValue}
            onChange={handleSlider}
            className="slider bg-transparent w-full h-full bg-input-background rounded-md grid place-items-center"
            style={{ '--opacValue': `${opacValue}%` } as React.CSSProperties}
          />
        </li>
      </ul>
      <div className="flex gap-2 mt-6 pt-3 border-border border-t">
        {quickActions.map((value, index) => (
          <button
            key={index}
            onMouseDown={() => setOpacity(value)}
            onMouseUp={() => handleCopy(fullHex)}
            className="flex-1 min-w-fit text-center text-muted hover:text-foreground hover:bg-input-background rounded-md px-2 py-1"
          >
            {value}
          </button>
        ))}
      </div>
    </section>
  );
};

export default OpacityInputs;
