if ('performance' in window) {
  window.addEventListener('load', () => {
    const paintMetrics = performance.getEntriesByType('paint');

    if (paintMetrics !== undefined && paintMetrics.length > 0) {
      paintMetrics.forEach((paintMetric) => {
        console.log(`${paintMetric.name}: ${paintMetric.startTime}`);
      });
    }
  });
}
