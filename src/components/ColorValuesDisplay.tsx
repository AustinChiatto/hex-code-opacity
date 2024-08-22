import { handleCopy } from '@/util/functions';

type Props = {
  hexValue: string;
  opacCode: string;
  fullHex: string;
};

const ColorValuesDisplay = ({ hexValue, opacCode, fullHex }: Props) => {
  return (
    <section className="rounded-lg bg-background flex flex-1 items-center">
      <div
        className="h-12 w-2/5 rounded-lg"
        style={{ background: `#${hexValue}${opacCode}` }}
      ></div>
      <ul className="flex gap-3 flex-1 items-center justify-center">
        <li>
          <button
            className="text-lg"
            onClick={() => handleCopy(opacCode)}
          >
            <span className="text-muted"># </span>
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
