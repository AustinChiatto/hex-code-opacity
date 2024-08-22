type Props = {
  hexValue: string;
  opacCode: string;
  fullHex: string;
  handleCopy: any; //todo: set type
  setHexActive: any; //todo: set type
  hexActive: boolean;
};

const ColorValuesDisplay = ({ hexValue, opacCode, fullHex, handleCopy, setHexActive, hexActive }: Props) => {
  return (
    <section className="rounded-lg bg-background flex flex-1 items-center">
      <div
        className="h-12 w-2/5 rounded-lg transition-all duration-300"
        style={{ background: `#${hexValue}${opacCode}` }}
      ></div>
      <ul className="flex gap-3 flex-1 items-center justify-center">
        <li>
          <button
            className={`text-lg pr-3 ${hexActive ? 'text-foregroudn' : 'text-muted'}`}
            onClick={() => setHexActive((prevState: boolean) => !prevState)}
          >
            #
          </button>
          <button
            className="text-lg"
            onClick={() => handleCopy(opacCode)}
          >
            {opacCode}
          </button>
        </li>
        <li>
          <button
            className="text-lg"
            onClick={() => handleCopy(fullHex)}
          >
            {hexValue}
          </button>
        </li>
      </ul>
    </section>
  );
};

export default ColorValuesDisplay;
