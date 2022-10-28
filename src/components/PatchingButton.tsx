import { DataPatching, ele, num } from "../types";

interface Props extends DataPatching {}

function PatchingButton({
  chunks,
  isFilter,
  patchNum,
  setPatchNum,
}: Props): ele {
  return (chunks.length - 1 !== patchNum && !isFilter && (
    <button
      aria-label="Show more countries"
      onClick={(): void => setPatchNum((prev: num) => prev + 1)}
      className="bg block w-1/3 h-12 mx-auto rounded-md shadow-md"
    >
      Show More
    </button>
  )) as ele;
}

export default PatchingButton;
