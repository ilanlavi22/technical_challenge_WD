import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listPhones } from '../services/phones';
import truncate from '../utilities/truncate';

const PhonesPage = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    listPhones()
      .then((data) => {
        setPhones(data);
      });
  }, []);

  return (
    <div className='container'>
      <h1 className='page-title'>Our Phone Collection</h1>
      <div className='phone-card'>
        {phones.map((phone) => (
          <div className='phone-wrapper' key={phone.id}>
            <div className='phone-img'><img src={`../assets/images/${phone.imageFileName}`} alt={phone.name} /></div>
            <div className='phone-info'>
              <h2 className='phone-name'>{phone.name}</h2>
              <div className='manufacturer'>
                <span>Manufacturer By: {phone.manufacturer}</span>
              </div>
              <div className='description'>
                <p>{truncate(phone.description, 100)}...</p>
              </div>
              <Link to={`/phones/${phone.id}`} className='button'>More Details</Link>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default PhonesPage;