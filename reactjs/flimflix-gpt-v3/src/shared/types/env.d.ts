interface ImportMetaEnv {
  readonly VITE_DUMMY_JSON_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


export interface Genre{
    id: number;
    name: string;
}