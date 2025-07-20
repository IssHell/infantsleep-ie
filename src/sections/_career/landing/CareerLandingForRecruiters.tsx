// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography, Button, Unstable_Grid2 as Grid } from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

import amCover from "/images/home/adele-morris-unsplash.jpg";
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  // ...bgGradient({
  //   // color: alpha(theme.palette.grey[900], 0.8),
  //   color: 'common.white',
  //   imgUrl: '/assets/background/overlay_2.jpg',
  // }),
  background: theme.palette.primary.lighter,
  padding: theme.spacing(5, 0),
}));

// ----------------------------------------------------------------------

export default function CareerLandingForRecruiters() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Container>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          {isMdUp && (
              <Grid xs={12} md={4} lg={4} sx={{ minHeight: '600px'}}>
                <Image alt="Adele Morris Photography" src="/assets/images/home/adele-morris-unsplash.png" />
              </Grid>
          )}

          <Grid
            xs={12}
            md={7}
            lg={7}
            sx={{
              color: 'primary.dark',
              textAlign: { xs: 'center', md: 'justify' },
            }}
          >
            <Typography variant="h4">YOU’RE A BETTER MOM WITH SLEEP. </Typography>

            <Typography variant="h5" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
              You deserve to wake up feeling refreshed and energized, ready to soak up another day with your little one and community.
            </Typography>


            <Typography variant="h3" sx={{ mt: 3, mb: 5, opacity: 0.72 }}>
              You give 110%, and at the end of the day,
              you deserve to watch your baby drift off on the monitor
              as you pour a glass of orange wine, preparing to enjoy your evening.
            </Typography>

            <Button variant="contained" size="large" startIcon={<Iconify icon="carbon:document" />}>
              Yes Please!
            </Button>
          </Grid>

        </Grid>
      </Container>
    </StyledRoot>
  );
}
