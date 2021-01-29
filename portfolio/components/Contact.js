const ContactComponent = (props) => {
    return (
        <div className='contact-page'>
            <h1 className='title primary-color'>
                Let's talk?
            </h1>
            <div className='contact-info'>
                <div className='user-image'>
                    <img alt='ME' src='/me.jpg' />
                </div>
                <div className='user-details'>
                    <p>Rohit Ranchhod</p>
                    <p>Contact: +27-82 848 8494</p>
                    <p>Email: ranchod.rohit61@gmail.completed</p>
                    <p className='profiles'>
                        <a
                            href='https://www.linkedin.com/in/rohit-ranchhod-04431370/'
                            target='_blank'
                            title='LinkedIn'
                            aria-label='linkedin'
                            rel='noopener noreferrer'
                        >
                            <img alt='linkedin' className='lin-logo' src='/lin-logo.png' />
                        </a>
                        <a
                            href='https://github.com/RankMonkey'
                            target='_blank'
                            title='GitHub'
                            aria-label='github'
                            rel='noopener noreferrer'
                        >
                            <img alt='github' className='ghub-logo' src='/github-logoo.png' />
                        </a>
                        

                    </p>
                </div>
            </div>
            <style jsx>{`
            .contact-info {
                display: flex;
                justify-content: center;
                margin-top: 2rem;
            }

            .user-image img {
                border-radius: 50%;
                height: 15rem;
                width: 15rem;
                margin: 0 auto;
            }

            .user-details {
                margin-left: 2rem;
            }

            .user-details p {
                margin: 0;
                margin-bottom: 10px;
                font-size: 1.5rem;
                line-height: 1.5;
            }
            .user-details .profiles {
                display: flex;
                align-items: center;
            }

            .user-details .profiles a {
                width: 3.5rem;
                height: 3.5rem;
                display: flex;
            }

            .ghub-logo,
            .tw-logo {
                border-radius: 50%;
            }

            .tw-logo img {
                display: block !important;
            }

            .lin-logo {
                transform: scaleX(1.8) scaleY(0.95);
            }

            .hrank-logo {
                transform: scale(1.5);
            }

            .resume {
                text-decoration: underline;
                color: var(--ternary-color);
            }
            @media(max-width: 600px) {
                .contact-info {
                    flex-direction: column;
                }
            }
            `}</style>
        </div>
    )
}

export default ContactComponent;