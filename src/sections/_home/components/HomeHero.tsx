import {useRef} from 'react';
// @mui
import {styled, alpha} from '@mui/material/styles';
import {Box, Container, Unstable_Grid2 as Grid} from '@mui/material';
// utils
import {bgGradient} from 'src/utils/cssStyles';
// hooks
import useResponsive from 'src/hooks/useResponsive';
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
// config
import {HEADER} from 'src/config-global';
// routes
// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({theme}) => ({
    // ...bgGradient({
    //     color: alpha(theme.palette.background.default, 0.9),
    //     imgUrl: '/assets/background/overlay_1.jpg',
    // }),
    background: '#FFFFFF',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
        height: `calc(100vh - ${HEADER.H_MAIN_DESKTOP}px)`,
    },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const isMdUp = useResponsive('up', 'md');

    const container = useBoundingClientRect(containerRef);

    const offsetLeft = container?.left;

    return (
        <StyledRoot>
            <Container sx={{height: 1}}>
                <Grid container alignItems="center" sx={{height: 1}}>
                    <Box
                        sx={{
                            maxWidth: 500,
                            position: 'static',
                            marginTop: '20%',
                            marginBottom: '10%'
                        }}
                    >
                        <Image
                            visibleByDefault
                            disabledEffect
                            alt="Infant Sleep"
                            src="/assets/images/home/logo_white.webp"
                        />
                    </Box>
                </Grid>
            </Container>

            {isMdUp && (
                <Box
                    sx={{
                        maxWidth: 800,
                        position: 'absolute',
                        bottom: {md: 0, lg: '-15%'},
                        right: {md: -110, lg: 0},
                        width: {md: `calc(100% - ${offsetLeft}px)`},
                    }}
                >
                    <Image
                        visibleByDefault
                        disabledEffect
                        alt="Jonathan Borba Photography"
                        src="/assets/images/home/jonathan-borba-unsplash.webp"
                    />
                </Box>
            )}
        </StyledRoot>
    );
}
