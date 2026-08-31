import { useTheme } from "../hooks";

type Props = {
  flag?: {
    url_png?: string;
    url_svg?: string;
    description?: string;
  };
  countryName?: string;
  className?: string;
  usePicture?: boolean;
};

const getFallbackFlagSvg = (isDark: boolean): string => {
  const bgColor = isDark ? "#1e293b" : "#e5e7eb";
  const rectColor = isDark ? "#334155" : "#f3f4f6";
  const strokeColor = isDark ? "#64748b" : "#94a3b8";
  const textColor = isDark ? "#cbd5e1" : "#475569";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
      <rect width="640" height="400" fill="${bgColor}"/>
      <rect x="40" y="40" width="560" height="320" rx="18" fill="${rectColor}" stroke="${strokeColor}" stroke-width="8"/>
      <text x="320" y="205" text-anchor="middle" font-size="72" fill="${textColor}" font-family="Arial, sans-serif">🏳️</text>
      <text x="320" y="285" text-anchor="middle" font-size="28" fill="${textColor}" font-family="Arial, sans-serif">No Flag</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export default function CountryFlag({
  flag,
  countryName = "country",
  className = "w-full h-full object-cover",
}: Props) {
  const { isDark } = useTheme();
  const fallbackFlag = getFallbackFlagSvg(isDark);
  const currentFlagSvg = flag?.url_svg || fallbackFlag;
  const currentFlagPng = flag?.url_png || fallbackFlag;
  const alt = flag?.description || `Flag of ${countryName}`;

  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = getFallbackFlagSvg(isDark);
  };

  return (
    <picture>
      <source srcSet={currentFlagSvg} type="image/svg+xml" />
      <img
        alt={alt}
        src={currentFlagPng}
        className={className}
        onError={handleError}
      />
    </picture>
  );
}
