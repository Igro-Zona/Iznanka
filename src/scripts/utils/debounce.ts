function debounce(fn: any, delay: any) {
	var timer: any;
	return function (this: any, ...args: any[]) {
		clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, args), delay);
	};
}

export default debounce;
