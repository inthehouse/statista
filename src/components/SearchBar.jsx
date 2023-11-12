import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import { useStatistic } from '../context/StatisticContext';

import { DocumentTextIcon } from '@heroicons/react/20/solid';

const SearchBar = ({ data }) => {
    const { setSelectedStatistic } = useStatistic();

    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isError, setIsError] = useState(false);

    const handleSearch = () => {
        setSearchResults([]);
        setIsError(false);
        const filteredStats = data.length > 0 ?
            data.filter(statistic => statistic.title.toLowerCase().includes(query.toLowerCase())) :
            [];
        filteredStats.length > 0 ? setSearchResults(filteredStats) : setIsError(true);
    };

    const handleClick = (statistic) => {
        setSelectedStatistic(statistic);
    };
    return (
        <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
            <div className="flex justify-center gap-4">
                <input
                    type="text"
                    placeholder="Search Statista"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="grid-cols-9 gap-4 block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button
                    onClick={handleSearch}
                    className="grid-cols-3 gap-4 block px-3.5 py-2 bg-blue-500 rounded-sm
                    text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:bg-blue-300"
                >
                    Search
                </button>
            </div>

            <ul className="divide-y divide-gray-100 text-left mt-4">
                {searchResults.map((statistic) => (
                    <Link onClick={() => handleClick(statistic)} to={`/detail`} className="text-blue-500">
                        <li key={statistic.identifier} className="flex justify-between gap-x-6 px-5 py-7 border my-3 bg-white rounded-sm hover:bg-gray-100">
                            <div className="flex min-w-0 gap-x-4 ">
                                <div className="min-w-0 flex-auto">
                                    <div className="mt-2 flex items-center text-xs leading-5 text-gray-500">
                                        <DocumentTextIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        {moment(statistic.date).format('DD MMMM YYYY')}
                                    </div>
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{statistic.title}</p>
                                </div>
                            </div>
                            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                {statistic.premium === 1 && (
                                    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                        Premium
                                    </span>
                                )}

                            </div>
                        </li>
                    </Link>
                ))
                }
                {isError && (
                    <li key="error" className="flex justify-center gap-x-6  text-sm px-5 py-7 my-3 rounded-sm hover:bg-gray-100">
                        No data found
                    </li>
                )}
            </ul>
        </div >
    );
};

export default SearchBar;
