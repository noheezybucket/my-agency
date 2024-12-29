import React from 'react';

const AboutSection = () => {
    return (
        <section>
            <div className="section-width rounded-lg space-y-5">
                {/*<h2 className="section-title">*/}
                {/*    ABOUT US*/}
                {/*</h2>*/}

                <div className={'border-b border-neutral-700 pb-3'}>
                    <h2 className="section-title">
                        WE ARE DIGITAL ARTISANS !
                    </h2>
                    <p className={'font-thin text-justify text-lg'}>
                        We can help you elevate your brand.
                    </p>
                </div>

                <p className={' lg:text-2xl lg:leading-10 text-justify'}>
                    At <b className={'font-bold bg-white text-black'}>Digital Artisan Studio</b>, we’re passionate about crafting impactful digital experiences that set
                    brands apart.
                    With expertise spanning design, branding, social media management, and web & mobile development,
                    we offer a complete suite of services to help you achieve your business goals. Our team of creative
                    thinkers and tech experts brings a unique approach to each project, ensuring that every detail
                    aligns
                    with your brand vision. Whether you’re looking to refresh your visual identity, grow your social
                    media presence,
                    or develop a custom web or mobile solution, <b className={'font-bold bg-white text-black'}>Digital Artisan Studio</b> is here to make it happen. Let’s
                    bring your ideas to life and make
                    an impact together.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;