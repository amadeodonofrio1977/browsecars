import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
	fullHeight: Dimensions.get('window').height,
	fullWidth: Dimensions.get('window').width,
};

export const colors = {
	_00: '#FFF',
	_50: '#ECEFF1',
	_100: '#CFD8DC',
	_200: '#B0BEC5',
	_300: '#90A4AE',
	_400: '#78909C',
	_500: '#607D8B',
	_600: '#546E7A',
	_700: '#455A64',
	_800: '#37474F',
	_900: '#263238',
};

export const padding = {
	sm: 10,
	md: 20,
	lg: 30,
	xl: 40,
};

export const fonts = {
	sm: 12,
	md: 18,
	lg: 28,
};

const baseStyles = {
	container: {
		paddingTop: padding.lg,
		flex: 1,
		backgroundColor: colors._100,
	},
	header: {
		fontSize: fonts.lg,
		fontFamily: fonts.primary,
		backgroundColor: colors._900,
		color: colors._50,
		height: 20
	},
	headerTitleStyle: {
		color: colors._50,
		marginTop: -25,
	},
	backArrow: {
		color: colors._50,
		marginTop: -25,
		padding: 10,
		paddingRight: 0,
		marginRight: 0
	},
	section: {
		paddingBottom: padding.md,
		paddingHorizontal: padding.sm,
	},
	buttonContainer: {
		paddingHorizontal: padding.sm,
	},
	buttonPrimary: {
		backgroundColor: colors._700,
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderRadius: 15,
	},
	buttonPrimaryDisabled: {
		backgroundColor: 'grey',
		color: 'black',
	},
	intro: {
		paddingVertical: padding.sm,
		flexDirection: 'row',
	},
	picker: {
		borderStyle: 'solid',
		borderColor: colors._50,
		borderWidth: 1,
		borderStyle: 'solid',
		backgroundColor: colors._100,
		borderRadius: 5,
	},
	spinner: {
		marginHorizontal: padding.lg,
		marginVertical: padding.xl,
		flex: 1,
	},
	carTitle: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18,
	},
	carAttributes: {
		textAlign: 'center',
	},
	listItem: {
		flexDirection: 'row',
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: colors._200,
		backgroundColor: colors._50,
	},
	carListImageContainer: {
		width: 60,
		height: 60,
		marginLeft: 10,
	},
	carListImage: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'contain',
		borderRadius: 20,
	},
	carListName: {
		fontSize: 16,
		paddingLeft: 10,
		lineHeight: 50,
	},
	flexSpacer: {
		flex: 100,
	},
	carListArrow: {
		lineHeight: 50,
		height: 60,
		width: 25,
		color: colors._200,
	},
	detailContainer: {
		flex: 1,
		backgroundColor: colors._100,
		justifyContent: 'flex-start',
	},
	header2: {
		backgroundColor: colors._500,
		paddingHorizontal: 5,
		paddingVertical: 10,
		flexDirection: 'row',
	},
	header2Title: {
		fontWeight: 'bold',
		lineHeight: 30,
		color: colors._50,
		fontSize: 16,
	},
	carDetailImage: {
		top: 0,
		flex: 1,
		resizeMode: 'contain',
		maxWidth: '100%',
		marginBottom: 10,
	},
	carDetailInfo: {
		flex: 1,
	},
	carDetailItem: {
		height: 30,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: 5,
		backgroundColor: colors._50,
	},
	carDetailName: {
		lineHeight: 30,
		marginRight: 10,
	},
	carDetailValue: {
		lineHeight: 30,
	},
	bold: {
		fontWeight: 'bold',
	},
};

export default function createStyles(overrides = {}) {
	return StyleSheet.create({ ...baseStyles, ...overrides });
}
