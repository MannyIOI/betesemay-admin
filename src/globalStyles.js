import {createGlobalStyle} from 'styled-components'
export const theme = {
    gradient1: {
        backgroundColor: '#0499f2',
        backgroundImage: 'linear-gradient(315deg, #0499f2 0%, #26f596 74%)'
    },

    gradient2: {
        backgroundColor: '#06bcfb',
        backgroundImage: 'linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)'
    },

    neumorphic: {
        backgroundColor: '#E0E5EC',
        boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)'
    },

    neumorphicHover: {
        backgroundColor: '#E0E5EC',
        boxShadow: '14px 14px 20px rgb(163,177,198, 0.7), -14px -14px 20px rgba(255,255,255, 0.6)',
    },

    neumorphicConcave: {
        background: 'linear-gradient(340deg, rgba(0,0,0,0.1), rgba(255,255,255,1))',
    },
    neumorphicConvex: {
        background: 'linear-gradient(135deg, rgba(0,0,0,0.05), rgba(255,255,255,0.5));'
    },

    neumorphicActive: {
        backgroundColor: '#E0E5EC',
        boxShadow: 'inset 6px 6px 6px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.5)'
    },

    backgroundColor: "#E0E5EC",
    themeColor1: "#8C1071",
    themeColor2: "#587AAA",
    themeColor3: "#23CABE",
    themeColor4: "#1F88A7",
    themeColor4Light: "1F88A7",
    themeColor5: ""
}

export const GlobalStyle = createGlobalStyle`
    body{
        background: ${props => props.theme.backgroundColor}
    }
`