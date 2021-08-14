module.exports = function reverse (n) {
        let nAbs = Math.abs(n);
		return Number(String(nAbs).split('').reverse().join(''));
  }
