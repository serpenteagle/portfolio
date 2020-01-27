const calcOffsetFromCenter = element => {
  const rect = element.getBoundingClientRect();
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const ex = rect.left + rect.width / 2;
  const ey = rect.top + rect.height / 2;

  return [ex - cx, ey - cy];
};

export {
  calcOffsetFromCenter
};
