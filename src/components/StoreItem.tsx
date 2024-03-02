import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useState } from "react";


type storeItemProps ={
    id:number,
    price:number,
    name:string,
    imgUrl:string
}

const StoreItem:React.FC<storeItemProps>= ({id,price,name,imgUrl}) => {
    const [quantity ,setQuantity] = useState<number>(1);

    const handleAdd = () =>{
        setQuantity(quantity + 1);
    }
    return ( 
        <Card className="h-100">
            <Card.Img
            variant="top"
            src={imgUrl}
            height='300px'
    
            style={{objectFit:'cover'}}
            />
            <Card.Body className="d-flex , flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline">
                    <span className="fs-2">{name}</span>
                    <span className=" ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {   quantity === 0 ? (
                            <Button className="w-100">+ Add to Cart</Button>
                        ): <div className="d-flex align-items-center flex-column" style={{gap: '.5rem'}}>
                            
                            <div className="justify-content-center d-flex align-items-center"style={{gap: '.5rem'}}>
                            <Button>-</Button>
                            <div><span>{quantity} in cart</span></div>
                            <Button onClick={handleAdd}>+</Button>
                            </div>
                            <Button variant="danger" size="sm">remove</Button>
                        </div>
                        
                    }
                </div>
            </Card.Body>
        </Card>
     );
}
 
export default StoreItem;