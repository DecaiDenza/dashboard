/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: String      = 'Dashboard'
    readonly VITE_APP_VERSION: String   = '0.0.1'
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}
  