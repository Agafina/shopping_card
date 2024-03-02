import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem';

const Store = () => {
    return ( 
        <div>
            <Row md={2} xs={1} lg={1} className='g-3'>
                {
                    storeItems.map(item => (
                        <Col>
                            <StoreItem {...item} />
                        </Col>
                    ))
                }
            </Row>
        </div>
     );
}
 
export default Store;