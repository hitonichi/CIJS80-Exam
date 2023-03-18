const LocationFinder = ({
    handleSubmit
}) => {
    return (
        <div className="form-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="text"
                    id="location"
                    placeholder="ENTER YOUR LOCATION"
                 />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    )
    
}

export default LocationFinder;