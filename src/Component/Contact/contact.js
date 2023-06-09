import React, { useState , useEffect} from 'react'
import './contact.css'
import contact_img from '../../images/Contact/contact_img.svg'
import RingLoader from 'react-spinners/RingLoader'
export default function Contact() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [])
    return (
        <div>
            {
                loading ?
                    <div className='ring_loader'>
                        <RingLoader
                        color={'#d69136'}
                        loading={loading}
                        size={80}
                        />
                    </div>
                    :
                    <div>
                        <div className="contact_top_section">
                            <h1 className='contact_top_section_h1'>Contact Us</h1>
                            <h4 className='contact_top_section_h4'>Some informations about our restaurant</h4>
                        </div>
                        <div className="contact_main_part">
                            <div style={{ width: '100%' }} className="row">
                                <div style={{ paddingLeft: '100px', paddingRight: '0' }} className="col-4 contact_main_part_left_side">
                                    <div className="contact_img">
                                        <img className='mb-4' style={{ width: '130px' }} src={contact_img} alt="contact_img" />
                                    </div>
                                    <div className="restaurant_address">
                                        <h2 style={{ color: '#383C40', fontWeight: '100', fontSize: '23px', marginBottom: '0' }}>Soup Restaurant</h2>
                                        <address style={{ color: ' #BBC4C6 ' }}>Green Street 22, New York</address>
                                    </div>
                                    <hr />
                                    <div className="restaurant_info">
                                        <div className="restaurant_info_number">
                                            <h6>Phone:</h6>
                                            <span>+48 21200 2122 221</span>
                                        </div>
                                        <div className="restaurant_info_email">
                                            <h6>Email:</h6>
                                            <span>hello@example.com</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="contact_social">
                                        <h6 style={{ color: '#BBC4C6' }}>Follow Us!</h6>
                                        <div className="footer_social_icons mobile_social">
                                            <a href="https://www.youtube.com/" target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="https://www.youtube.com/" target='_blank'><i className="fa-brands fa-google"></i></a>
                                            <a href="https://www.youtube.com/" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                                            <a href="https://www.youtube.com/" target='_blank'><i className="fa-brands fa-youtube"></i></a>
                                            <a href="https://www.youtube.com/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8 contact_main_part_right_side" style={{ padding: '0 100px' }}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d638.7290497182101!2d49.818054998503!3d40.40166107468345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087830a385577%3A0xe4f33be1da579236!2sDestec!5e0!3m2!1sen!2saz!4v1682404000078!5m2!1sen!2saz" style={{ width: '100%' }} height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
