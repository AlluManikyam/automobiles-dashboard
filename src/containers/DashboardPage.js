import React, { Component } from 'react';
import Header from '../components/Layouts/Header';
import Dashboard from '../components/Dashboard/Dashboard';
import Footer from '../components/Layouts/Footer';

class DashboardPage extends Component {

    render() {
        return (
            <div>
               <Header />
               <Dashboard />
               <Footer />
            </div>
          
        );
    }
}

export default DashboardPage;