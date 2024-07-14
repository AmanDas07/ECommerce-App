import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
    return (
        <Layout title="Privacy Policy">
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="https://media.istockphoto.com/id/656497782/photo/privacy-button-on-keyboard.jpg?s=1024x1024&w=is&k=20&c=towAFCfhdWSrsIuEBZLaAUm6-Gvit20ccrCGFTXhkL4="
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p>
                        At [Ecommerce], we take your privacy and the security of your personal information seriously. This Privacy Policy outlines how we collect, use, and protect the data you provide to us while using our React-based e-commerce app.
                    </p>
                    <p>
                        We may collect certain personal information from you, such as your name, email address, shipping address, and payment details, in order to process your orders and provide you with a seamless shopping experience. Rest assured that we only collect the information necessary to fulfill your orders and enhance your experience on our app.
                    </p>

                </div>
            </div>
        </Layout>
    )
}

export default Policy