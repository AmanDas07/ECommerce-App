import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={"About us - Ecommerce App"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="https://media.istockphoto.com/id/1219706975/photo/waiter-serving-social-networking.webp?s=1024x1024&w=is&k=20&c=S9HkadBrIagxssIKmfE0aYV0B6qoB6b0Pyup5wpwsuo="
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        Welcome to our e-commerce app! At [ecommerceapp], we are dedicated to providing you with a seamless online shopping experience. Our mission is to offer a wide range of high-quality products at competitive prices, delivered right to your doorstep. With a team of passionate individuals, we strive to ensure customer satisfaction by offering excellent customer service and secure payment options. Whether you're searching for the latest fashion trends, electronics, home decor, or health and beauty products, we've got you covered. Explore our user-friendly interface, easily navigate through our categories, and discover an extensive selection of products tailored to your needs. We believe in building long-lasting relationships with our customers, so your feedback is invaluable to us. Shop with confidence, knowing that we prioritize your privacy and strive for a safe and secure online shopping environment. Thank you for choosing [App Name] for all your shopping needs. Happy shopping!
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;