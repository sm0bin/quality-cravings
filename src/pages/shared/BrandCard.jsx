import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const { _id, name, imageUrl } = brand;
    return (
        <Link to={`/brands/${_id}`} className="card bg-base-100 shadow p-6 border hover:shadow-xl">
            <figure><img className='w-2/3' src={imageUrl} alt="Shoes" /></figure>
            <h2 className="font-semibold text-2xl mt-4 text-center">{name}</h2>
        </Link>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object,
};

export default BrandCard;