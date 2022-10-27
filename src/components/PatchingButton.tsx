export interface Patching {
  chunks: [];
  patchNum: number;
  setPatchNum: Function;
}

function PatchingButton({
  chunks,
  patchNum,
  setPatchNum,
}: Patching): JSX.Element {
  return (chunks.length - 1 !== patchNum && (
    <button
      aria-label="Show more countries"
      onClick={() => setPatchNum((prev: number) => prev + 1)}
      className="bg block w-1/3 h-12 mx-auto rounded-md shadow-md"
    >
      Show More
    </button>
  )) as JSX.Element;
}

export default PatchingButton;
