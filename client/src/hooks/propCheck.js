const propCheck = (fn, defaultVal) => {
	try {
		return fn();
	} catch (e) {
		return defaultVal;
	}
};

export default propCheck;
