import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from '../context/cart';
import { toast } from "react-hot-toast";

const ProductDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [cart, setCart] = useCart();

    // Initial product details
    useEffect(() => {
        if (params?.slug) getProduct();
    }, [params?.slug]);

    // Get product details
    const getProduct = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
            );
            setProduct(data?.product);
            getSimilarProduct(data?.product._id, data?.product.category._id);
        } catch (error) {
            console.log(error);
        }
    };

    // Get similar products
    const getSimilarProduct = async (pid, cid) => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`
            );
            setRelatedProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <div className="container" style={{ maxWidth: '1200px', margin: 'auto', padding: '20px' }}>
                <div className="row product-details" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div className="col-md-6" style={{ textAlign: 'center' }}>
                        <img
                            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                            alt={product.name}
                            style={{ maxHeight: '400px', maxWidth: '100%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                    <div className="col-md-6 product-details-info" style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Product Details</h1>
                        <hr />
                        <h6 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Name: <span style={{ fontWeight: 'normal' }}>{product.name}</span></h6>
                        <h6 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Description: <span style={{ fontWeight: 'normal' }}>{product.description}</span></h6>
                        <h6 style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                            Price: <span style={{ fontWeight: 'normal' }}>{product?.price?.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}</span>
                        </h6>
                        <h6 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Category: <span style={{ fontWeight: 'normal' }}>{product?.category?.name}</span></h6>
                        <button className="btn btn-secondary ms-1" style={{ width: '100%', backgroundColor: '#007bff', borderColor: '#007bff' }}>ADD TO CART</button>
                    </div>
                </div>
                <hr />
                <div className="row similar-products" style={{ marginTop: '20px' }}>
                    <h4 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Similar Products ➡️</h4>
                    {relatedProducts.length < 1 && (
                        <p className="text-center">No Similar Products found</p>
                    )}
                    <div className="d-flex flex-wrap" style={{ justifyContent: 'center' }}>
                        {relatedProducts?.map((p) => (
                            <div className="card m-2" key={p._id} style={{ width: '18rem', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                                <img
                                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                                    className="card-img-top"
                                    alt={p.name}
                                    style={{ height: '200px', objectFit: 'cover', borderBottom: '1px solid #ddd' }}
                                />
                                <div className="card-body">
                                    <div className="card-name-price" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                        <h5 className="card-title" style={{ fontWeight: 'bold' }}>{p.name}</h5>
                                        <h5 className="card-title card-price" style={{ color: '#28a745' }}>
                                            {p.price.toLocaleString("en-US", {
                                                style: "currency",
                                                currency: "USD",
                                            })}
                                        </h5>
                                    </div>
                                    <p className="card-text" style={{ marginBottom: '20px', color: '#555' }}>
                                        {p.description.substring(0, 60)}...
                                    </p>
                                    <div className="card-name-price" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <button
                                            className="btn btn-info ms-1"
                                            onClick={() => navigate(`/product/${p.slug}`)}
                                            style={{ backgroundColor: '#17a2b8', borderColor: '#17a2b8' }}
                                        >
                                            More Details
                                        </button>
                                        <button
                                            className="btn btn-dark ms-1"
                                            onClick={() => {
                                                setCart([...cart, p]);
                                                localStorage.setItem(
                                                    "cart",
                                                    JSON.stringify([...cart, p])
                                                );
                                                toast.success("Item Added to cart");
                                            }}
                                            style={{ backgroundColor: '#343a40', borderColor: '#343a40' }}
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;
