import React from 'react';

import moment from 'moment';

import { useStatistic } from '../context/StatisticContext';

const DetailPage = () => {
    const { selectedStatistic } = useStatistic();

    return (
        <div className="isolate px-6 py-24 sm:py-32 lg:px-8 bg-white">
            <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">{selectedStatistic.title}</h2>
            <p className="text-center mt-4 text-sm text-gray-500">
                {selectedStatistic.subject}
            </p>
            <div className="mx-auto grid items-start max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pr-4 py-24 sm:pr-6 sm:py-32 lg:max-w-7xl lg:grid-cols-3 lg:pr-8">
                <div className="lg:col-span-2">
                    <p className="text-left text-gray-500 text-xs">
                        {moment(selectedStatistic.date).format('DD MMMM YYYY')}
                    </p>
                    <dd className="mt-4 text-left text-md text-gray-500">{selectedStatistic.description}</dd>
                </div>
                <div className="flex justify-end">
                    <img
                        src={selectedStatistic.image_url}
                        alt="stats"
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
