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
    ...bgGradient({
        color: alpha(theme.palette.background.default, 0.9),
        imgUrl: '/assets/background/overlay_1.jpg',
    }),
    // background: hexToRgb('#C08A64'),
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
                {/* <Grid container columnSpacing={3} alignItems="center" sx={{height: 1}}> */}
                {/*    <Grid xs={12} md={5}> */}
                {/*        <Stack */}
                {/*            spacing={5} */}
                {/*            justifyContent="center" */}
                {/*            alignItems={{xs: 'center', md: 'flex-start'}} */}
                {/*            sx={{ */}
                {/*                py: 15, */}
                {/*                textAlign: {xs: 'center', md: 'left'}, */}
                {/*            }} */}
                {/*        > */}
                {/*            <Typography variant="h1"> */}
                {/*                <Box component="span" sx={{color: 'primary.main'}}> */}
                {/*                    {`INFANT SLEEP `} */}
                {/*                </Box> */}
                {/*                /!*Gentle Support for Families <br />and Growing Minds*!/ */}
                {/*            </Typography> */}

                {/*            <Typography sx={{color: 'text.secondary'}}> */}
                {/*                Gentle Support for Families and Growing Minds */}
                {/*            </Typography> */}

                {/*            /!*<Button*!/ */}
                {/*            /!*  color="inherit"*!/ */}
                {/*            /!*  size="large"*!/ */}
                {/*            /!*  variant="contained"*!/ */}
                {/*            /!*  endIcon={<Iconify icon="carbon:launch" />}*!/ */}
                {/*            /!*  target="_blank"*!/ */}
                {/*            /!*  rel="noopener"*!/ */}
                {/*            /!*  href={paths.figmaPreview}*!/ */}
                {/*            /!*>*!/ */}
                {/*            /!*  figma workspace*!/ */}
                {/*            /!*</Button>*!/ */}

                {/*            /!*<Stack spacing={3}>*!/ */}
                {/*            /!*    <Typography variant="overline">AVAILABLE FOR</Typography>*!/ */}
                {/*            /!*    <Stack direction="row" spacing={2.5}>*!/ */}
                {/*            /!*        {['js', 'ts', 'figma', 'cra', 'nextjs'].map((icon) => (*!/ */}
                {/*            /!*            <SvgColor*!/ */}
                {/*            /!*                key={icon}*!/ */}
                {/*            /!*                src={`/assets/icons/platforms/ic_${icon}.svg`}*!/ */}
                {/*            /!*                sx={{width: 24, height: 24}}*!/ */}
                {/*            /!*            />*!/ */}
                {/*            /!*        ))}*!/ */}
                {/*            /!*    </Stack>*!/ */}
                {/*            /!*</Stack>*!/ */}
                {/*        </Stack> */}
                {/*    </Grid> */}

                {/*    <Grid xs={12} md={7}> */}
                {/*        <Box ref={containerRef}/> */}
                {/*    </Grid> */}
                {/* </Grid> */}
            </Container>

            {isMdUp && (
                <Box
                    sx={{
                        maxWidth: 800,
                        position: 'absolute',
                        bottom: {md: 0, lg: '-15%'},
                        // top: {md: 0, lg: 0},
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
