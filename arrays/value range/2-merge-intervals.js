function mergeIntervals(intervals, newInterval) {
  let startIntervalIndex, endIntervalIndex;
  if (newInterval[0] > newInterval[1]) {
    newInterval.reverse();
  }
  intervals.forEach(([start, end], index) => {
    if (newInterval[0] >= start && newInterval[0] <= end) {
      startIntervalIndex = index;
    }
    if (newInterval[1] >= start && newInterval[1] <= end) {
      endIntervalIndex = index;
    }
  });
  if (startIntervalIndex === undefined && endIntervalIndex === undefined) {
    let start = 0;
    let end = intervals.length - 1;

    while (start < intervals.length && newInterval[0] > intervals[start][1])
      start++;
    while (end >= 0 && newInterval[1] < intervals[end][0]) end--;
    return [
      ...intervals.slice(0, start),
      newInterval,
      ...intervals.slice(end + 1),
    ];
  } else if (startIntervalIndex === undefined) {
    let start = 0;
    while (start < intervals.length && newInterval[0] > intervals[start][1])
      start++;

    return [
      ...intervals.slice(0, start),
      [newInterval[0], intervals[endIntervalIndex][1]],
      ...intervals.slice(endIntervalIndex + 1),
    ];
  } else if (endIntervalIndex === undefined) {
    let end = intervals.length - 1;
    while (end >= 0 && newInterval[1] < intervals[end][0]) end--;

    return [
      ...intervals.slice(0, startIntervalIndex),
      [intervals[startIntervalIndex][0], newInterval[1]],
      ...intervals.slice(end + 1),
    ];
  } else {
    return [
      ...intervals.slice(0, startIntervalIndex),
      [intervals[startIntervalIndex][0], intervals[endIntervalIndex][1]],
      ...intervals.slice(endIntervalIndex + 1),
    ];
  }
}

console.log(
  mergeIntervals(
    [
      [1, 2],
      [3, 6],
    ],
    [8, 10]
  )
);
