import styles from './ContactForm.module.css';

const ContactForm = () => {
    return (
        <div className="bg-contactForm mt-5 rounded-custom px-5 py-7">
            <p>
                I am always open to discussing <strong> new projects, opportunities in tech world, partnerships </strong> and more so <strong> mentorship.</strong>
            </p>
            <form >
                <p className='py-4 border-b'>
                    <label htmlFor="">Name :</label>
                    <input className="bg-contactForm ps-2 ms-2" type="text" />
                </p>
                <p className='py-4 border-b'>
                    <label htmlFor="">Email :</label>
                    <input className="bg-contactForm ps-2 ms-2" type="text" />
                </p>
                <p className='py-4 border-b'> 
                    <label htmlFor="">Message :</label>
                    <input className="bg-contactForm ps-2 ms-2" type="text" />
                </p>
                <p>
                    <input className={`${styles.submitButton}` } type="submit" value="Submit" />
                </p>

            </form>
        </div>
    )
}

export default ContactForm