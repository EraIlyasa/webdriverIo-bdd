import data from '../../helpers/data';
import { pages } from '../../pages/pages';

/**
 * @param {String} pageName Set paramater for the current page
 */
export default async (pageName: string) => {
	if (pageName in pages) {
		data.currentPage = pageName;
		console.log('Current page: ' + data.currentPage);
	} else {
		throw new Error(`page "${pageName}" is not define in "pages.ts" file!`);
	}
};
