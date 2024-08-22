'use client';
import ColorValuesDisplay from '@/components/ColorValuesDisplay';
import OpacityInputs from '@/components/OpacityInputs';
import { opacityToHex } from '@/util/functions';
import { useEffect, useState } from 'react';

export default function Home() {
  const [inputHex, setInputHex] = useState('FF7D2F');
  const [opacity, setOpacity] = useState(86);

  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const pastedText = event.clipboardData?.getData('text');
      if (!pastedText) return;
      const cleanedHex = pastedText.replace('#', '');
      if (cleanedHex.length === 6 && /^[0-9A-F]{6}$/i.test(cleanedHex)) {
        setInputHex(cleanedHex);
      }
    };

    window.addEventListener('paste', handlePaste);

    return () => {
      window.removeEventListener('paste', handlePaste);
    };
  }, [setInputHex]);

  const hexOpacValue = opacityToHex(opacity);
  const fullHex = `#${hexOpacValue}${inputHex}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-[30rem] bg-card-background border border-2 border-card-border p-6 pb-5 rounded-xl flex flex-col">
        <ColorValuesDisplay
          hexValue={inputHex}
          opacCode={hexOpacValue}
          fullHex={fullHex}
        />
        <OpacityInputs
          opacValue={opacity}
          setOpacity={setOpacity}
          fullHex={fullHex}
        />
      </div>
      <div className="text-center mt-9">
        <h1 className="text-muted">Add Opacity to Hex Color Codes</h1>
      </div>
    </main>
  );
}
