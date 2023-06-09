

const ClassesCart = ({ item }) => {
    const { name, image, description, price,
        availableSeats } = item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Image" className="w-full h-72" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <p>{price}</p>
                <p>Available Seat: {availableSeats}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCart;