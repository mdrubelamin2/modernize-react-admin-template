import React from 'react';
import { Box, Grid } from '@mui/material';
import WeeklyStats from '@/components/dashboards/modern/WeeklyStats';
import YearlySales from '@/components/dashboards/ecommerce/YearlySales';
import PaymentGateways from '@/components/dashboards/ecommerce/PaymentGateways';
import WelcomeCard from '@/components/dashboards/ecommerce/WelcomeCard';
import Payment from '@/components/dashboards/ecommerce/Payment';
import SalesProfit from '@/components/dashboards/ecommerce/SalesProfit';
import RevenueUpdates from '@/components/dashboards/ecommerce/RevenueUpdates';
import SalesOverview from '@/components/dashboards/ecommerce/SalesOverview';
import TotalEarning from '@/components/dashboards/ecommerce/TotalEarning';
import ProductsSold from '@/components/dashboards/ecommerce/ProductsSold';
import MonthlyEarnings from '@/components/dashboards/ecommerce/MonthlyEarnings';
import ProductPerformances from '@/components/dashboards/ecommerce/ProductPerformances';
import RecentTransactions from '@/components/dashboards/ecommerce/RecentTransactions';

const Ecommerce = () => {
  return (
    <Box mt={3}>
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={12} lg={8}>
          <WelcomeCard />
        </Grid>

        {/* column */}
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Payment />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProductsSold />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <RevenueUpdates />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SalesOverview />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TotalEarning />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SalesProfit />
            </Grid>
            <Grid item xs={12}>
              <MonthlyEarnings />
            </Grid>
          </Grid>
        </Grid>
        {/* column */}
        <Grid item xs={12} sm={6} lg={4}>
          <WeeklyStats />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={4}>
          <YearlySales />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={4}>
          <PaymentGateways />
        </Grid>
        {/* column */}

        <Grid item xs={12} lg={4}>
          <RecentTransactions />
        </Grid>
        {/* column */}

        <Grid item xs={12} lg={8}>
          <ProductPerformances />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ecommerce;
