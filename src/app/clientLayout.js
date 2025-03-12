'use client';

import './globals.css';
import {useState, useEffect} from 'react';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import {Box, CssBaseline} from '@mui/material';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SideBar from '@/components/sideBar';
import {theme} from '@/config';
import {RouteProvider} from '@/context/route';
import AppLoader from '@/components/common/loader/appLoader';

export default function ClientLayout({children}) {
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hasLoaded = sessionStorage.getItem('hasLoaded');
            if (hasLoaded) {
                setLoading(false);
            } else {
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    sessionStorage.setItem('hasLoaded', 'true');
                }, 1000);
            }
        }
    }, []);
    return (
        <div className="layout-container">
            {loading ? (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100vh"
                >
                    <AppLoader />
                </Box>
            ) : (
                <RouteProvider>
                    <AppRouterCacheProvider>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <Header />
                            <Box sx={{display: 'flex'}}>
                                <SideBar />
                                {children}
                            </Box>
                            <Footer />
                        </ThemeProvider>
                    </AppRouterCacheProvider>
                </RouteProvider>
            )}
        </div>
    );
}
