type Props = {
  hexValue: string;
  opacCode: string;
  fullHex: string;
  handleCopy: (value: string) => void;
  setHexActive: React.Dispatch<React.SetStateAction<boolean>>;
  hexActive: boolean;
};

const ColorValuesDisplay = ({ hexValue, opacCode, fullHex, handleCopy, setHexActive, hexActive }: Props) => {
  return (
    <section className="rounded-lg bg-background flex flex-1 items-center">
      <div
        className="h-12 w-2/5 rounded-lg"
        style={{ background: `#${hexValue}${opacCode}` }}
      ></div>
      <div className="flex gap-3 flex-1 items-center justify-center">
        <button
          className={`text-lg ${hexActive ? 'text-foregroudn' : 'text-muted'}`}
          onClick={() => setHexActive((prevState: boolean) => !prevState)}
        >
          #
        </button>
        <button
          className="text-lg"
          onClick={() => handleCopy(fullHex)}
        >
          {hexValue}
        </button>
        <button
          className="text-lg"
          onClick={() => handleCopy(opacCode)}
        >
          {opacCode}
        </button>
      </div>
    </section>
  );
};

export default ColorValuesDisplay;
