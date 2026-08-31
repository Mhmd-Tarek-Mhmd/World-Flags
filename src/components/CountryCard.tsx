import { Country } from "../utils/types";

import CountryFlag from "./CountryFlag";

type Props = {
  country: Country;
};

export default function CountryCard(props: Props) {
  const { names, flag, population, region, capitals } = props?.country || {};

  return (
    <article className="bg shadow-md overflow-hidden rounded-md grid grid-rows-[320px,352px] md:grid-rows-[160px,176px]">
      <CountryFlag flag={flag} countryName={names?.official || names?.common} />

      <div className="px-[50px] md:px-[25px]">
        <h2 className="text-[2.16rem] md:text-[1.08rem] pt-[58px] pb-10 md:pt-[28px] md:pb-[14px] text-start">
          {names?.official}{" "}
          {names?.official === names?.common ? null : (
            <small>({names?.common})</small>
          )}
        </h2>

        <dl>
          <Item
            label="Population"
            val={population?.toLocaleString() || "Unknown"}
          />
          <Item label="Region" val={region || "Unknown"} />
          <Item label="Capital" val={capitals?.[0]?.name || "Unknown"} />
        </dl>
      </div>
    </article>
  );
}

const Item = (props: { label: string; val?: string | number }): JSX.Element => (
  <div className="flex gap-2 md:gap-1 mb-4 md:mb-2">
    <dt className="capitalize text-[1.725rem] md:text-sm">{props.label}: </dt>
    <dd className="font-light text-[1.7rem] md:text-[0.85rem]">
      {String(props.val ?? "Unknown")}
    </dd>
  </div>
);
