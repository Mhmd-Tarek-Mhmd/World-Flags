export type Country = {
  [key: string]: any;
  uuid?: string;
  region?: string;
  subregion?: string;
  population?: number;
  capitals?: Record<string, any>[];
  names?: Record<string, any>;
  flag?: Record<string, any>;
  area?: Record<string, any>;
  currencies?: Record<string, any>[];
  languages?: Record<string, any>[];
  continents?: string[];
  tlds?: string[];
  timezones?: string[];
  codes?: Record<string, any>;
  links?: Record<string, any>;
  government_type?: string;
};
