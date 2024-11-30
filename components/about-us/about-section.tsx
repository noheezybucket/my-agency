import React from 'react';

const AboutSection = () => {
    return (
        <section>
            <div className="section-width rounded-lg space-y-5">
                {/*<h2 className="section-title">*/}
                {/*    ABOUT US*/}
                {/*</h2>*/}
                <p className={'text2xl lg:text-2xl font-thin lg:leading-10 text-justify'}>
                    At ZOOM!, we’re passionate about crafting impactful digital experiences that set brands apart.
                    With expertise spanning design, branding, social media management, and web & mobile development,
                    we offer a complete suite of services to help you achieve your business goals. Our team of creative
                    thinkers and tech experts brings a unique approach to each project, ensuring that every detail aligns
                    with your brand vision. Whether you’re looking to refresh your visual identity, grow your social media presence,
                    or develop a custom web or mobile solution, ZOOM! is here to make it happen. Let’s bring your ideas to life and make
                    an impact together.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;