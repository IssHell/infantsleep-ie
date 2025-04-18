// _mock
import {_pricingHome} from 'src/_mock';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import {Box} from "@mui/material";
import PricingHome from '../../pricing/home';
import {
    HomeHero,
    HomeFAQs,
    HomeNewStart,
    HomeForDesigner,
    HomeCombination,
    HomeAdvertisement,
    HomeFeatureHighlights,
    HomeFlexibleComponents,
} from '../components';

// ----------------------------------------------------------------------

export default function HomeView() {
    return (
        <>
            <Box sx={{bgcolor: "#C08A64"}}>
                <ScrollProgress/>

                <HomeHero/>

                <HomeNewStart/>

                <HomeFlexibleComponents/>

                <HomeFeatureHighlights/>

                <HomeForDesigner/>

                <PricingHome plans={_pricingHome}/>

                <HomeFAQs/>

                <HomeCombination/>

                <HomeAdvertisement/>
            </Box>
        </>
    );
}
