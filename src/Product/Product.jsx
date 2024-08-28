import React from 'react';
import './Product.css';
// import Assets from './Assets';

export default function Product() {
    return (
        <div className='container'>
            <div className="head">
                <p>SHOP OUR PRODUCTS</p>
            </div>

            <div className="mid">
                <p>Most Popular Products</p>
            </div>

            <div className="main_section">
                <div className="ctr1" id='one'>
      
                    <img src="./Amarjit_images/hair piont brush.jpeg" alt="" />

                    <div className="one">
                        <p className='text'> Pin On Hair Brush </p>
                        <p className='text_price'>$ 130.00</p>
                    </div>

                </div>
                <div className="ctr1" id='two'>
                    <img src="./Amarjit_images/foam brush.jpg" alt="" />

                    <div className="one">

                        <p className='text'>Beard Combo Brush </p>
                        <p className='text_price'>$ 200.00</p>

                    </div>
                </div>

                <div className="ctr1" id='three'>
                    <img src="./Amarjit_images/hairbrush.jpeg" alt="" />
                    <div className="one">
                        <p className='text'>Mens Hair Combo </p>
                        <p className='text_price'>$ 150.00</p>
                    </div>
                </div>
               

            </div>

            <div className="ctr2">


                <div className="ctr1" id='one1'>
                    <img src="./Amarjit_images/combo.webp" alt="" />
                    <div className="one">
                    <p className='text'> Mens Blade </p>
                    <p className='text_price'>$ 300.00</p>
                    </div>
                </div>
                <div className="ctr1" id='two2'>
                    <img src="./Amarjit_images/trolly.jpeg" alt="" />
                    <div className="one">

                    <p className='text'>Massage Chair </p>
                    <p className='text_price'>$ 4000.00</p>
                    </div>
                </div>

                <div className="ctr1" id='three3'>
                    <img src="./Amarjit_images/stand.jpeg" alt="" />
                    <div className="one">

                    <p className='text'>Multipurpose Trolly </p>
                    <p className='text_price'>$ 1550.00</p>
                    </div>
                </div>
               

            </div>

            <div className="ctr3">


                <div className="ctr1" id='one11'>

                    <img src="./Amarjit_images/blade.jpeg" alt="" />
                    <div className="one">

                    <p className='text'> Nail Remiver Combo </p>
                    <p className='text_price'>$ 430.00</p>
                    </div>
                </div>
                <div className="ctr1" id='two22'>
                    <img src="./Amarjit_images/chair.jpg" alt="" />
                    <div className="one">

                    <p className='text'>Tray Stand </p>
                    <p className='text_price'>$ 800.00</p>
                    </div>
                </div>

                <div className="ctr1" id='three33'>
                    <img src="./Amarjit_images/chair1.webp" alt="" />
                    <div className="one">

                    <p className='text'>Multipurpose Trolly </p>
                    <p className='text_price'>$ 1150.00</p>
                    </div>

                </div>
               

            </div>

            

            <div className="ctr4">
            <div className="ctr1" id='four'>
                    <img src="./Amarjit_images/trimmer.webp" alt="" />
                    <div className="one">
                    <p className='text'> Mens Battery Razors </p>
                    <p className='text_price'>$ 800.00</p>
                    </div>
                </div>
            <div className="ctr1" id='four4'>
                    <img src="./Amarjit_images/nailremover.jpg" alt="" />
                    <div className="one">

                    <p className='text'> Multipurpose Trolly </p>
                    <p className='text_price'>$280.00</p>
                    </div>
                </div>


                <div className="ctr1" id='four44'>
                    <img src="./Amarjit_images/instrument table.jpg" alt="" />
                    <div className="one">

                    <p className='text'> Mens Combo Pack </p>
                    <p className='text_price'>$ 700.00</p>
                    </div>
                </div>



            </div>



            {/* <div className="head">
                <p>OUR PROFESSIONAL</p>
            </div>

            <div className="midend">
                <p>Meet The Team</p>
            </div> */}

        </div>
    )
}
