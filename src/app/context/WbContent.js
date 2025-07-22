'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { GetWebsiteData } from '../api/WBGlobalDataApi/WbGlobalData';

// ✅ 1. Create context with meaningful name
const WebsiteContentContext = createContext();

// ✅ 2. Provider Component
export const WebsiteContentProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [websiteData, setWebsiteData] = useState(null);

    useEffect(() => {
        const fetchWebsiteData = async () => {
            try {
                const response = await GetWebsiteData();
                if(response){
                    setWebsiteData(response);
                }else{
                    setWebsiteData({});
                }
            } catch (error) {
                console.error("Error fetching website data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWebsiteData();
    }, []);

    return (
        <WebsiteContentContext.Provider value={{ websiteData, loading }}>
            {children}
        </WebsiteContentContext.Provider>
    );
};

// ✅ 3. Custom Hook for using the context
export const useWebsiteContent = () => useContext(WebsiteContentContext);
