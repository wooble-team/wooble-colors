import { black, blue100, blue200, blue300, gray100, gray200, gray300, gray400, gray500, gray600, green100, green200, green300,
	orange, purple100, purple200, red, white, yellow } from './colors';
import { Colors } from './types';

export const colors: Record<Colors, string> = {
	'black': black,
	'white': white,

	'gray100': gray100,
	'gray200': gray200,
	'gray300': gray300,
	'gray400': gray400,
	'gray500': gray500,
	'gray600': gray600,

	'red': red,
	'orange': orange,
	'yellow': yellow,

	'green100': green100,
	'green200': green200,
	'green300': green300,

	'blue100': blue100,
	'blue200': blue200,
	'blue300': blue300,

	'purple100': purple100,
	'purple200': purple200,
};

export const colorsVariants = Object.keys(colors) as Colors[];
