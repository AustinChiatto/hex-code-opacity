'use client';
import ColorValuesDisplay from '@/components/ColorValuesDisplay';
import OpacityInputs from '@/components/OpacityInputs';
import { opacityToHex } from '@/util/functions';
import { useEffect, useState } from 'react';

export default function Home() {
  const [inputHex, setInputHex] = useState('FF7D2F');
  const [opacity, setOpacity] = useState(86);
  const [copied, setCopied] = useState<string>();
  const [hexActive, setHexActive] = useState<boolean>(false);
  const [isShaking, setIsShaking] = useState<boolean>(false);

  const handleCopy = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopied(value);
        setIsShaking(true);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  };

  useEffect(() => {
    if (isShaking) {
      const timer = setTimeout(() => {
        setIsShaking(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isShaking]);

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
  const fullHex = `${hexActive ? '#' : ''}${inputHex}${hexOpacValue}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-[30rem] bg-card-background border border-2 border-card-border p-6 pb-5 rounded-xl flex flex-col">
        <ColorValuesDisplay
          hexValue={inputHex}
          opacCode={hexOpacValue}
          fullHex={fullHex}
          handleCopy={handleCopy}
          setHexActive={setHexActive}
          hexActive={hexActive}
        />
        <OpacityInputs
          opacValue={opacity}
          setOpacity={setOpacity}
          fullHex={fullHex}
          handleCopy={handleCopy}
        />
      </div>
      <div className="text-center mt-9">
        {copied ? (
          <div
            className={`flex items-center gap-4 w-full px-3 pr-4 py-1 bg-card-background border border-2 border-card-border rounded-full ${
              isShaking ? 'shake' : ''
            }`}
          >
            <span className="block h-2 w-2 bg-success rounded-full"></span>
            <ul className="flex-1 flex gap-2 text-muted">
              <li>{copied}</li>
              <li>Copied!</li>
            </ul>
          </div>
        ) : (
          <p className="text-muted py-[0.375rem]">Add Opacity to Hex Color Codes</p>
        )}
      </div>
    </main>
  );
}
