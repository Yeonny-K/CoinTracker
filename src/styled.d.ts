// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    divColor: string;
    grayText: string;
  }

  export interface DarkTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    divColor: string;
    grayText: string;
  }

  export interface LightTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    divColor: string;
    grayText: string;
  }
}