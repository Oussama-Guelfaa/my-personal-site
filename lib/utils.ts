// lib/utils.ts

/**
 * Utility functions for common operations in the application.
 *
 * This file contains helper functions such as string manipulation, formatting,
 * API interaction, and performance optimizations.
 *
 * @module utils
 */


/**
 * Formats a date string into a more readable format.
 * @param {string} dateString - The date string in YYYY-MM-DD format or any valid date string.
 * @returns {string} The formatted date, e.g., "January 1, 2024".
 * @example
 * ```typescript
 * const formattedDate = formatDate('2024-01-01');
 * console.log(formattedDate); // Output: "January 1, 2024"
 * ```
 */
export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }
  
  /**
   * Generates an excerpt from a given text.
   * @param {string} content - The full content from which to generate an excerpt.
   * @param {number} length - The maximum length of the excerpt.
   * @returns {string} The generated excerpt.
   */
  export function generateExcerpt(content: string, length: number = 150): string {
    if (content.length <= length) return content;
    return content.slice(0, length) + '...';
  }
  
  /**
   * Converts a string into a URL-friendly slug.
   * @param {string} text - The text to slugify.
   * @returns {string} The slugified string.
   */
  export function slugify(text: string): string {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-'); // Replace spaces and non-word characters with hyphens
  }
  
  /**
   * Capitalizes the first letter of each word in a string.
   * @param {string} text - The text to capitalize.
   * @returns {string} The capitalized string.
   */
  export function capitalize(text: string): string {
    return text.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  /**
   * Validates an email address using a regular expression.
   * @param {string} email - The email address to validate.
   * @returns {boolean} True if valid, false otherwise.
   */
  export function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
  
  /**
   * Debounces a function, ensuring it is called only after a certain period of inactivity.
   * Useful for performance optimization in event handlers.
   * @param {Function} func - The function to debounce.
   * @param {number} wait - The debounce delay in milliseconds.
   * @returns {Function} The debounced function.
   *  ```typescript
   * const debouncedSearch = debounce(() => console.log('Searching...'), 300);
   * window.addEventListener('input', debouncedSearch);
   * ```
   */
  export function debounce(func: Function, wait: number): (...args: any[]) => void {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  /**
   * Fetches data from an external API.
   * @param {string} url - The API endpoint URL.
   * @returns {Promise<any>} The fetched data.
   * @throws Will throw an error if the network request fails.
   */
  export async function fetchData(url: string): Promise<any> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`An error occurred while fetching data: ${response.statusText}`);
    }
    return response.json();
  }
  
  /**
   * Copies a given text to the clipboard.
   * @param {string} text - The text to copy.
   * @returns {Promise<void>}
   */
  export async function copyToClipboard(text: string): Promise<void> {
    if (navigator.clipboard && window.isSecureContext) {
      // Navigator clipboard API method'
      return navigator.clipboard.writeText(text);
    } else {
      // Fallback method
      const textArea = document.createElement('textarea');
      textArea.value = text;
      // Make the textarea out of viewport
      textArea.style.position = 'absolute';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((resolve, reject) => {
        document.execCommand('copy') ? resolve() : reject();
        textArea.remove();
      });
    }
  }
  
  /**
   * Retrieves a query parameter value from the URL.
   * @param {string} param - The name of the query parameter.
   * @returns {string | null} The value of the query parameter or null if not found.
   */
  export function getQueryParam(param: string): string | null {
    if (typeof window === 'undefined') return null;
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  /**
   * Checks if the current device is mobile based on the user agent.
   * @returns {boolean} True if mobile, false otherwise.
   */
  export function isMobile(): boolean {
    if (typeof navigator === 'undefined') return false;
    return /Mobi|Android/i.test(navigator.userAgent);
  }
  
  /**
   * Formats a number with commas as thousand separators.
   * @param {number} num - The number to format.
   * @returns {string} The formatted number.
   */
  export function formatNumber(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  /**
   * Converts a string to snake_case.
   * @param {string} text - The text to convert.
   * @returns {string} The snake_cased string.
   */
  export function toSnakeCase(text: string): string {
    return text
      .replace(/\W+/g, ' ')
      .split(' ')
      .map(word => word.toLowerCase())
      .join('_');
  }
  