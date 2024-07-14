import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../context/auth'
import UserMenu from '../../components/Layout/UserMenu';
const Dashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout title={'Dashboard'}>

            <div className='row'>
                <div className='container-flui p-3 m-3'>
                    <div className='col-md-3'>
                        <UserMenu />
                    </div>
                    <div className='col-md-9'>
                        <h1>Your Profile</h1>
                    </div>
                    <div className='card w-75 p-3'>
                        <h3>{auth?.user?.name}</h3>
                        <h3>{auth?.user?.email}</h3>
                        <h3>{auth?.user?.address}</h3>

                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Dashboard