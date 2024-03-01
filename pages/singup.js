import React from 'react';
import TopScrolling from '../components/shared/ScrollToTop';
import SearchPopUp from '../components/shared/SearchPopUp';

const SingUp = () => {
    return (
        <div>
             <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    {/* logo and welcome */}
                    <div>
                        <h2 className='text-center'>CREATE YOUR FREE ACCOUNT</h2>
                    </div>
                    <div>
                        <div className="container mt-2">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row justify-content-center">
                                            <div>
                                                <form>
                                                    <div className="col-12 mb-3 ">
                                                        <label for="name" className="form-label">Full Name</label>
                                                        <input type="text" className="form-control shadow-sm p-2 mb-1 bg-body rounded" id="name" placeholder="Enter Your User Name" required/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="email" className="form-label">Email Address</label>
                                                        <input type="email" className="form-control shadow-sm p-2 mb-1 bg-body rounded" id="email" placeholder="Enter Your Email Address" required/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="number" className="form-label">Mobile Number</label>
                                                        <input type="number" className="form-control shadow-sm p-2 mb-1 bg-body rounded" id="number" placeholder="Enter Your Mobile Number" required/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="course_name" className="form-label">Course Name</label>
                                                        <input type="text" className="form-control shadow-sm p-2 mb-1 bg-body rounded" id="course_name" placeholder="Enter Your Course Name" required/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="col-md-6">
                                        <div className="row justify-content-center">
                                            <div>
                                                <form>
                                                    <div className="mb-3">
                                                        <label for="Password" className="form-label">Password</label>
                                                        <input type="password" className="form-control shadow-sm p-2 mb-1 bg-body rounded" id="Password" placeholder="Enter Your Password" required/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="Confirm_password" className="form-label">Confirm password</label>
                                                        <input type="password" className="form-control shadow-sm p-2 mb-1 bg-body rounded" id="Confirm_password" placeholder="Enter Your Confirm password" required/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="Transection_Number" className="form-label">Transection Number</label>
                                                        <input type="text" className="form-control shadow-sm p-2 mb-1 bg-body rounded" id="transection_number" placeholder="Enter Your transection" required/>
                                                    </div>
                                                    <div className="mb-3">
                                                        

                                                    {/* div */}
                                                    <div>
                                                    <label for="level">Payment Method</label>
                                                        <select id="level" name="level" className='pt-1 pb-1 ms-1'>
                                                        <option value="bkash">Bkash</option>
                                                        <option value="nagad">Nagad</option>
                                                        <option value="Rocket">Rocket</option>
                                                        </select>
                                                    </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <input className='mb-3' type="checkbox" name="vehicle1" value="Bike"/>
                                            <p className='ms-2'>I accept to the Terms & Conditions, and I agree to the terms of Privacy Policy.</p>
                                        </div>
                                        <div class="d-flex justify-content-center align-items-center mt-2 mb-5">
                                            <button type="submit" class="btn btn-warning">REGISTER</button>
                                        </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    {/* div for image */}
                   <div>
                        <h2 className='text-center'>HAVE AN ACCOUNT?</h2>
                   </div>

                    <div class="d-flex justify-content-center align-items-center mt-2 mb-5">
                        <button type="submit" class="btn btn-warning">LOG IN</button>
                    </div>
                    <div>
                        <img src="/pages/src/sign_up_image.png" alt=" image" />
                   </div>
                </div>
            </div>
        </div>
        <SearchPopUp />
        <TopScrolling />
        </div>
    );
};

export default SingUp;