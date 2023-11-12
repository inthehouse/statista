import React, { Component } from 'react';

import axios from 'axios';

import SearchBar from '../components/SearchBar';

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statistics: [],
            isLoading: true,
        };
    }

    async componentDidMount() {
        await this.fetchStatistics('');
    }

    fetchStatistics = async () => {
        try {
            const response = await axios.get('https://cdn.statcdn.com/static/application/search_results.json');
            const data = response.data.items ? response.data.items : [];

            this.setState({
                statistics: data,
            });
        } catch (error) {
            console.error('Error fetching statistics:', error);
        }
    };

    render() {
        const { statistics } = this.state;
        return (
            <div className="container mx-auto p-4">
                <SearchBar data={statistics} />
            </div>
        );
    }
}

export default IndexPage;
