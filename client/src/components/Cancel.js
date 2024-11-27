import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cancel = ({ totalprice, totalquantity, carts, makePayment }) => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className='row justify-content-center m-0'>
            <div className='col-md-8 mt-5 mb-5'>
                <div className='card'>
                    <div className="card-header bg-dark p-3">
                        <h5 className='text-white m-0'>Payment Calculation</h5>
                    </div>
                    <div className="card-body">
                        <table className='table table-responsive-sm'>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.imgdata} alt={item.dish} className='img-thumbnail' style={{ width: '50px' }} />
                                        </td>
                                        <td>{item.dish}</td>
                                        <td>₹ {item.price}</td>
                                        <td>{item.qnty}</td>
                                        <td>₹ {item.qnty * item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Total Items: <span className='text-primary'>{totalquantity}</span></h6>
                                <h6>Total Price: <span className='text-danger'>₹ {totalprice}</span></h6>
                            </div>
                            <div>
                                <button className='btn btn-danger mr-2' onClick={() => navigate('/')}>Cancel Payment</button>
                                <button className='btn btn-success' onClick={makePayment}>Proceed to Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cancel;
