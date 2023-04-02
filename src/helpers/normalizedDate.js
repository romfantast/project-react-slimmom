function normalizedDate(dat) {
  const q = dat.split('-');

  let y = q[2];
  let m = q[1].padStart(2, '0');
  let d = q[0].padStart(2, '0');

  return y + '.' + m + '.' + d;
}

export default normalizedDate;
