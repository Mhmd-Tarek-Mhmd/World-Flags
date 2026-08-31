import { Country } from "../utils/types";

import SvgIcon from "../components/SvgIcon";
import CountryFlag from "../components/CountryFlag";

type Props = {
  country: Country;
  onBack: () => void;
};

export default function CountryView(props: Props) {
  const { country, onBack } = props;
  const {
    names,
    flag,
    population,
    region,
    subregion,
    capitals,
    area,
    currencies,
    languages,
    tlds,
    codes,
    government_type,
    demonyms,
    calling_codes,
    cars,
    postal_code,
    memberships,
    leaders,
    links,
    timezones,
    continents,
    date,
    units,
  } = country || {};

  const officialName = names?.official || names?.common || "Unknown country";
  const commonName = names?.common || officialName;
  const capital = capitals?.[0]?.name || "Unknown";
  const currency = currencies?.[0];
  const languageList =
    languages
      ?.map((language) => language?.name || language?.native_name)
      .filter(Boolean) || [];

  const demonymList = Object.values(demonyms || {})
    .flatMap((entry: any) => Object.values(entry || {}))
    .filter(Boolean)
    .slice(0, 4);

  const membershipsList = memberships
    ? Object.entries(memberships)
        .filter(([, value]) => Boolean(value))
        .map(([key]) => key.replace(/_/g, " "))
    : [];

  const leaderNames =
    leaders?.map((leader: any) => leader?.name).filter(Boolean) || [];
  const leaderTitles =
    leaders?.map((leader: any) => leader?.title).filter(Boolean) || [];

  return (
    <>
      <button
        onClick={onBack}
        aria-label="Back to list"
        className="bg w-52 md:w-32 h-16 md:h-10 rounded-md shadow-xy-md flex justify-center items-center gap-[22px] md:gap-3 mb-6"
      >
        <SvgIcon className="scale-[1.4] md:scale-75">
          <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
        </SvgIcon>
        <span className="font-light">Back</span>
      </button>

      <article className="bg shadow-md overflow-hidden rounded-xl md:rounded-2xl">
        <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[minmax(0,500px)_1fr] lg:items-center">
          <div className="overflow-hidden rounded-xl shadow-sm bg-white/5">
            <CountryFlag
              flag={flag}
              countryName={officialName}
              className="h-[240px] w-full object-cover md:h-[320px]"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
                {codes?.alpha_2 || "Country"}
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                {officialName}
              </h1>
              <p className="text-xl md:text-2xl font-light text-slate-600 dark:text-slate-200">
                {commonName}
                {flag?.emoji ? ` ${flag.emoji}` : ""}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <InfoItem label="Capital" value={capital} />
              <InfoItem label="Region" value={region || "Unknown"} />
              <InfoItem label="Subregion" value={subregion || "Unknown"} />
              <InfoItem
                label="Population"
                value={population?.toLocaleString() || "Unknown"}
              />
              <InfoItem
                label="Area"
                value={
                  area?.kilometers
                    ? `${area.kilometers.toLocaleString()} km²`
                    : "Unknown"
                }
              />
              <InfoItem label="Domain" value={tlds?.[0] || "Unknown"} />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200/80 dark:border-slate-700 px-6 py-6 md:px-10 md:py-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <InfoBlock
              label="Languages"
              value={languageList.length ? languageList.join(", ") : "Unknown"}
            />
            <InfoBlock
              label="Currency"
              value={
                currency
                  ? `${currency.name || "Unknown"} (${currency.symbol || currency.code || ""})`
                  : "Unknown"
              }
            />
            <InfoBlock
              label="Government"
              value={government_type || "Unknown"}
            />
            <InfoBlock
              label="Timezones"
              value={timezones?.join(", ") || "Unknown"}
            />
            <InfoBlock
              label="Continent"
              value={continents?.join(", ") || "Unknown"}
            />
            <InfoBlock
              label="Demonyms"
              value={demonymList.length ? demonymList.join(", ") : "Unknown"}
            />
            <InfoBlock
              label="Calling codes"
              value={calling_codes?.join(", ") || "Unknown"}
            />
            <InfoBlock
              label="Driving side"
              value={cars?.driving_side || "Unknown"}
            />
            <InfoBlock
              label="Postal code"
              value={postal_code?.format || "Unknown"}
            />
            <InfoBlock
              label="Measurement"
              value={units?.measurement_system || "Unknown"}
            />
            <InfoBlock
              label="Week starts"
              value={date?.start_of_week || "Unknown"}
            />
            <InfoBlock
              label="Official site"
              value={
                links?.official ? (
                  <a
                    className="underline break-all"
                    href={links.official}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                ) : (
                  "Unknown"
                )
              }
            />
          </div>

          <div className="mt-8 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300">
                Leadership
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {leaderNames.length ? (
                  leaderNames.map((leaderName: string, index: number) => (
                    <span
                      key={`${leaderName}-${index}`}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {leaderName}
                      {leaderTitles[index] ? ` — ${leaderTitles[index]}` : ""}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-600 dark:text-slate-300">
                    Unknown
                  </span>
                )}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300">
                Memberships
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {membershipsList.length ? (
                  membershipsList.map((membership) => (
                    <span
                      key={membership}
                      className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700 dark:border-sky-700 dark:bg-sky-900/30 dark:text-sky-200"
                    >
                      {membership}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-600 dark:text-slate-300">
                    Unknown
                  </span>
                )}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300">
                Helpful links
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {links && Object.entries(links).length ? (
                  Object.entries(links).map(([label, href]) => (
                    <a
                      key={label}
                      href={String(href)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500"
                    >
                      {label.replace(/_/g, " ")}
                    </a>
                  ))
                ) : (
                  <span className="text-slate-600 dark:text-slate-300">
                    Unknown
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

type InfoItemProps = {
  label: string;
  value: string;
};

const InfoItem = ({ label, value }: InfoItemProps) => (
  <div className="rounded-lg border border-slate-200/80 bg-slate-50/60 p-3 dark:border-slate-700 dark:bg-slate-800/50">
    <dt className="text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300">
      {label}
    </dt>
    <dd className="mt-2 text-base font-semibold text-slate-800 dark:text-white md:text-lg">
      {value}
    </dd>
  </div>
);

type InfoBlockProps = {
  label: string;
  value: string | React.ReactNode;
};

const InfoBlock = ({ label, value }: InfoBlockProps) => (
  <div className="space-y-2">
    <dt className="text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300">
      {label}
    </dt>
    <dd className="text-base font-medium text-slate-800 dark:text-slate-100">
      {value}
    </dd>
  </div>
);
