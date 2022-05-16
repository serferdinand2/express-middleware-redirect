import { existsSync, readFileSync } from 'fs';

/**
 * Checks if the original URL is in the redirect data and redirects to the value if it is.
 * 
 * @name redirectMiddleware
 * @param {String|Object} redirectData - Object or path to JSON file containing redirect data.
 * @returns Function
 * @example
 * app.use(redirectMiddleware('./path/to/redirects.json'));
 */

const redirectMiddleware = (redirectData = {}) => {
	
	if (
		typeof redirectData === 'string'
		|| redirectData instanceof String 
		&& existsSync(redirectData)
	) {
		redirectData = JSON.parse(readFileSync(redirectData));
	}

	return (req, res, next) => {  
		if (req.originalUrl in redirectData) {
			const value = redirectData[req.originalUrl];
			return res.redirect (value);
		}
		next();
	};
};
export default redirectMiddleware;





