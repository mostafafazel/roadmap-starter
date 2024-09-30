
// @ts-nocheck
import locale__Users_mostafa_Me_projects_roadmap_starter_locales_en_yml from "../locales/en.yml";
import locale__Users_mostafa_Me_projects_roadmap_starter_locales_fa_yml from "../locales/fa.yml";
import locale__Users_mostafa_Me_projects_roadmap_starter_locales_fr_yml from "../locales/fr.yml";
import locale__Users_mostafa_Me_projects_roadmap_starter_locales_jp_yml from "../locales/jp.yml";


export const localeCodes =  [
  "en",
  "fa",
  "fr",
  "jp"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en.yml", load: () => Promise.resolve(locale__Users_mostafa_Me_projects_roadmap_starter_locales_en_yml), cache: true }],
  "fa": [{ key: "../locales/fa.yml", load: () => Promise.resolve(locale__Users_mostafa_Me_projects_roadmap_starter_locales_fa_yml), cache: true }],
  "fr": [{ key: "../locales/fr.yml", load: () => Promise.resolve(locale__Users_mostafa_Me_projects_roadmap_starter_locales_fr_yml), cache: true }],
  "jp": [{ key: "../locales/jp.yml", load: () => Promise.resolve(locale__Users_mostafa_Me_projects_roadmap_starter_locales_jp_yml), cache: true }]
}

export const vueI18nConfigs = [
  () => import("../i18n.config.ts?hash=bffaebcb&config=1" /* webpackChunkName: "i18n_config_bffaebcb" */)
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "files": [
        "locales/en.yml"
      ]
    },
    {
      "code": "fa",
      "files": [
        "locales/fa.yml"
      ]
    },
    {
      "code": "fr",
      "files": [
        "locales/fr.yml"
      ]
    },
    {
      "code": "jp",
      "files": [
        "locales/jp.yml"
      ]
    }
  ],
  "defaultLocale": "fa",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": "locales",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "files": [
      {
        "path": "locales/en.yml"
      }
    ]
  },
  {
    "code": "fa",
    "files": [
      {
        "path": "locales/fa.yml"
      }
    ]
  },
  {
    "code": "fr",
    "files": [
      {
        "path": "locales/fr.yml"
      }
    ]
  },
  {
    "code": "jp",
    "files": [
      {
        "path": "locales/jp.yml"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
