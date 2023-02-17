function Header(props:any) {
    return (
        <p className='account' style={{ marginTop: 40 + 'px' }}>
            <span>👨‍⚖️ {props.account}</span>
            <span>💰 {props.balance}</span>
        </p>
    )
}
export default Header;
