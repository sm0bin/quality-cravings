import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
    const { name, image_url } = brand;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title block text-center">{name}</h2>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object,
};

export default BrandCard;