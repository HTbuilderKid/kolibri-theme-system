# kolibri-theme-system
Accepted project submission for UI-design — Kolibri — Learning Equality

// Don't forget to update your README after a new commit--only if the descrition isn't clear enough of course! :) 
- Valerie, 06/05/26


## File: `src/core/themeTypes.ts`
**Comment near `ThemeDefinition`:**
This is the central contract of the entire theme system, so it is worth keeping this interface intentionally strict. Every new theme should pass through this shape instead of inventing local theme fields. If a future feature needs a new visual concept, prefer adding it here first, then letting defaults, validation, CSS generation, and adapters flow from this source of truth.
- Valerie, 06/08/26


## File: `src/core/themeDefaults.ts`
**Comment near `defaultTheme`:**
The default theme should be treated as both a usable theme and the fallback safety net for every partial custom theme. When adding new required tokens, add them here first. That keeps `createTheme()` reliable and prevents custom themes from breaking just because they only override a few values.
- Valerie, 06/12/26


## File: `src/core/mergeTheme.ts`
**Comment near `deepMergeValues`:**
This merge strategy intentionally deep-merges objects but replaces arrays. That is a good default for theme data because token groups should inherit safely, while asset lists or ordered values should stay explicit. If arrays ever need additive merging later, handle that as a deliberate special case instead of changing the global behavior.
- Valerie, 06/12/26


## File: `src/core/resolveTheme.ts`
**Comment near `TOKEN_REFERENCE_PATTERN`:**
Token references currently resolve only when the whole value is a reference, such as `{colors.blue.600}`. This keeps the resolver predictable and easy to validate. If the system later needs mixed strings like `1px solid {semantic.color.border}`, add that as a separate interpolation feature rather than weakening this simpler reference model.
- Valerie, 06/12/26


## File: `src/core/createTheme.ts`
**Comment near `createTheme`:**
This function is the public entry point for theme creation, so it should remain small and boring. The best long-term pattern is: merge first, validate, then resolve. Keeping those steps separate makes the system easier to test and makes future debugging much less painful.
- Valerie, 06/14/26


## File: `src/css/generateCssVariables.ts`
**Comment near `generateCssVariables`:**
This function deliberately exports primitives, semantic tokens, and component tokens, but not metadata, assets, or behavior. CSS variables should represent styling values used by the browser. Non-style theme configuration can stay available through JavaScript adapters instead of being pushed into the CSS layer.
- Valerie, 06/16/26


## File: `src/css/injectThemeStyle.ts`
**Comment near `injectThemeStyle`:**
This browser injector is intentionally small: it creates or updates one managed `<style>` element. That makes theme switching predictable and avoids style tag buildup. If server-side rendering is added later, prefer a separate `renderThemeStyleTag()` helper rather than making this DOM-specific function responsible for both browser and server behavior.
- Valerie, 06/18/26


## File: `src/themes/index.ts`
**Comment near `themes`:**
The theme registry should remain the single place where bundled themes are listed. This helps tests verify unique IDs, helps the playground build a theme switcher automatically, and prevents hidden themes from existing outside the public API.
- Valerie, 06/18/26
