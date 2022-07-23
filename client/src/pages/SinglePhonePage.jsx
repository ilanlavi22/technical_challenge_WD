import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { singlePhone } from '../services/phones';

const SinglePhonePage = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState('');

  useEffect(() => {
    singlePhone(id)
      .then((data) => {
        setPhone(data);
      })
  }, [id])

  return (
    <div className='container'>
      <h1 className='page-title'>{phone.name}</h1>
      <div className='phone-card'>
        <div className='phone-img'><img src={`../assets/images/${phone.imageFileName}`} alt={phone.name} /></div>
        <div className='phone-info'>
          <h2 className='phone-name'>{phone.name}</h2>
          <div className='manufacturer'>
            <span>Manufacturer By: {phone.manufacturer}</span>
          </div>
          <div className='description'>
            <p>{phone.description}</p>
          </div>
          <Link to={`/phones`} className='button'>Back to Collection</Link>
        </div>
      </div>
    </div>
  );
}
export default SinglePhonePage;