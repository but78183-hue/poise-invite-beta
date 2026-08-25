(() => {
  const supported = ["en", "zh-Hant", "fr", "ar", "ja", "ko"];
  const normalize = (value) => {
    if (!value) return null;
    const language = value.replace("_", "-").toLowerCase();
    if (language === "zh-hant" || language.startsWith("zh-")) return "zh-Hant";
    return supported.find((item) => language === item.toLowerCase() || language.startsWith(`${item.toLowerCase()}-`)) || null;
  };
  const params = new URLSearchParams(window.location.search);
  let storedLanguage = null;
  try {
    storedLanguage = normalize(window.localStorage.getItem("poise.site.language"));
  } catch (_) {
    // Language detection still works when storage is unavailable.
  }
  const browserLocale = navigator.languages?.[0] || navigator.language || "en";
  const language = normalize(params.get("lang")) || storedLanguage || normalize(browserLocale) || "en";
  const region = browserLocale.match(/[-_]([a-z]{2}|\d{3})\b/i)?.[1]?.toUpperCase() || "GLOBAL";

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.detectedLanguage = language;
  document.documentElement.dataset.audienceRegion = region;
})();
