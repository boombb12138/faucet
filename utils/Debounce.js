export default function Debounce(callback, delay) {
  let timeoutId;

  const debouncedFn = (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
  debouncedFn.cancel = () => {
    clearTimeout(timeoutId);
  };
  return debouncedFn;
}
