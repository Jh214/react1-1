
const ThemeContext = React.createContext('light')

function App(){
    return (
        <ThemeContext.provider value='dark'>
            <UserContext.Provider value='???'>
                <Toolbar />
            </UserContext.Provider>
        </ThemeContext.provider>
    )
}

function Toolbar(props){
    return (
        <div>
            <ThemeButton theme={props.theme} />
        </div>
    )
}

function ThemeButton(props){
    return (
        <ThemeContext.Consumer>
            {value => <Butoon theme={value} />}
        </ThemeContext.Consumer>
    )
}

// // ok
// useContext(MyContext)

// // 잘못된 사용법
// useContext(MyContext.Consumer)
// useContext(MyContext.Provider)