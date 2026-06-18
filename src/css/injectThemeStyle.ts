import type { ThemeDefinition } from '../core/themeTypes';
import {
  generateThemeCss,
  type GenerateThemeCssOptions,
} from './generateCssVariables';

export interface InjectThemeStyleOptions extends GenerateThemeCssOptions {
  /**
   * The id used for the generated style element.
   */
  styleElementId?: string;

  /**
   * Optional CSP nonce.
   */
  nonce?: string;

  /**
   * Where to inject the style element.
   *
   * Defaults to document.head.
   */
  target?: Document | ShadowRoot | HTMLElement;
}

const DEFAULT_STYLE_ELEMENT_ID = 'kolibri-theme-system-style';

function getAvailableDocument(
  target?: Document | ShadowRoot | HTMLElement,
): Document {
  if (target && target.nodeType === Node.DOCUMENT_NODE) {
    return target as Document;
  }

  if (target && 'ownerDocument' in target && target.ownerDocument) {
    return target.ownerDocument;
  }

  if (typeof document !== 'undefined') {
    return document;
  }

  throw new Error(
    'Cannot inject theme styles because no document is available.',
  );
}

function getStyleContainer(
  documentRef: Document,
  target?: Document | ShadowRoot | HTMLElement,
): ShadowRoot | HTMLElement {
  if (!target || target.nodeType === Node.DOCUMENT_NODE) {
    return documentRef.head;
  }

  if (
    target.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
    target.nodeType === Node.ELEMENT_NODE
  ) {
    return target as ShadowRoot | HTMLElement;
  }

  return documentRef.head;
}

function findExistingStyleElement(
  container: ShadowRoot | HTMLElement,
  styleElementId: string,
): HTMLStyleElement | null {
  const styleElements = Array.from(container.querySelectorAll('style'));

  return (
    styleElements.find(styleElement => styleElement.id === styleElementId) ??
    null
  );
}

export function injectThemeStyle(
  theme: ThemeDefinition,
  options: InjectThemeStyleOptions = {},
): HTMLStyleElement {
  const {
    styleElementId = DEFAULT_STYLE_ELEMENT_ID,
    nonce,
    target,
  } = options;

  const documentRef = getAvailableDocument(target);
  const container = getStyleContainer(documentRef, target);

  let styleElement = findExistingStyleElement(container, styleElementId);

  if (!styleElement) {
    styleElement = documentRef.createElement('style');
    styleElement.id = styleElementId;
    container.appendChild(styleElement);
  }

  if (nonce) {
    styleElement.setAttribute('nonce', nonce);
  }

  styleElement.textContent = generateThemeCss(theme, options);

  return styleElement;
}

export function removeThemeStyle(
  options: Pick<InjectThemeStyleOptions, 'styleElementId' | 'target'> = {},
): void {
  const {
    styleElementId = DEFAULT_STYLE_ELEMENT_ID,
    target,
  } = options;

  const documentRef = getAvailableDocument(target);
  const container = getStyleContainer(documentRef, target);
  const styleElement = findExistingStyleElement(container, styleElementId);

  styleElement?.remove();
}
