function extract(arr, key) {
	return arr.reduce(function (acc, next) {
		acc.push(next[key]);
		return acc;
	}, []);
}

function vwlCnt(str) {
	const vowels = "aeiou";
	return str.split("").reduce(function (acc, next) {
		let lowerCased = next.toLowerCase();
		if (vowels.indexOf(lowerCased) !== -1) {
			if (acc[lowerCased]) {
				acc[lowerCased]++;
			} else {
				acc[lowerCased] = 1;
			}
		}
		return acc;
	}, {});
}

function KeyAndValue(arr, key, value) {
	return arr.reduce(function (acc, next, idx) {
		acc[idx][key] = value;
		return acc;
	}, arr);
}
