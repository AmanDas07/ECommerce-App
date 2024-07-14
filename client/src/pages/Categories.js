import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
    const categories = useCategory();
    return (
        <Layout title={"All Categories"}>
            <div className="container" style={{ marginTop: "100px" }}>
                <h1 className="text-center mb-5">Explore Our Categories</h1>
                <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    {categories.map((c) => (
                        <div className="col-md-4 col-sm-6" key={c._id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="card" style={{ width: '100%', maxWidth: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden', transition: 'transform 0.3s ease-in-out', textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9' }}>
                                <Link to={`/category/${c.slug}`} className="btn btn-primary" style={{ display: 'block', padding: '15px', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '1px', background: '#007bff', border: 'none', borderRadius: '5px', transition: 'background 0.3s ease' }}>
                                    {c.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Categories;
