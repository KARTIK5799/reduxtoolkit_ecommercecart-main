import React from 'react';

const Success = () => {
    return (
        <div className="row justify-content-center m-0">
            <div className="col-md-8 mt-5 mb-5">
                <div className="card text-center">
                    <div className="card-header bg-success text-white">
                        <h4>Payment Successful!</h4>
                    </div>
                    <div className="card-body">
                        <i className="fa fa-check-circle text-success" style={{ fontSize: '4rem' }}></i>
                        <p className="mt-3">Thank you for your purchase. Your order has been successfully placed.</p>
                        <button className="btn btn-primary mt-3" onClick={() => window.location.href = '/'}>Go to Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;
