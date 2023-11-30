const navButtons = () => {
    return(
        <div>
            <button onClick={() => navigate(-1)}> Back </button>

            <button onClick={() => navigate('/')}> Home </button>
        </div>
    )
}