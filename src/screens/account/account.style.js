import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    justifyContent: 'space-around',
    padding: 40,
  },

  containerLogo: {
    alignItems: "center",

  },

  logo: {
    width: 100,
    height: 23,
  },

  input: {
    backgroundColor: COLORS.gray5,
    padding: 10,
    borderRadius: 6,
    marginBottom:10,

  },

  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',


  },
  footerText: {
    color: COLORS.gray3,
  },

  footerLink: {
    color: COLORS.primary,
  },

}