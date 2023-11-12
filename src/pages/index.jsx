import React from 'react';
import { useQuery } from 'react-query';
import SearchBar from '../components/SearchBar';

const IndexPage = () => {
    const fetchStatistics = async () => {
        const response = await fetch('https://cdn.statcdn.com/static/application/search_results.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    };

    const { data: statistics, isLoading, isError } = useQuery('statistics', fetchStatistics);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <SearchBar data={statistics.items} />
        </div>
    );
};

export default IndexPage;
