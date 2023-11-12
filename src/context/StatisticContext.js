import React, { createContext, useContext, useState } from 'react';

const StatisticContext = createContext();

const StatisticProvider = ({ children }) => {
    const [selectedStatistic, setSelectedStatistic] = useState(null);

    return (
        <StatisticContext.Provider value={{ selectedStatistic, setSelectedStatistic }}>
            {children}
        </StatisticContext.Provider>
    );
};

const useStatistic = () => {
    const context = useContext(StatisticContext);
    if (!context) {
        throw new Error('useStatistic must be used within a StatisticProvider');
    }
    return context;
};

export { StatisticProvider, useStatistic };