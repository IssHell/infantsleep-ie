import {m} from 'framer-motion';
import {useState} from 'react';
// @mui
import {alpha, styled} from '@mui/material/styles';
import {
    Box,
    Button,
    Accordion,
    Container,
    Typography,
    AccordionDetails,
    AccordionSummary,
    Unstable_Grid2 as Grid,
} from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// assets
import {Pattern01} from 'src/assets/illustrations/pattern';
// components
import Iconify from 'src/components/iconify';
import {MotionViewport, varFade} from 'src/components/animate';
import {white} from "next/dist/lib/picocolors";

// ----------------------------------------------------------------------

const CONTENTS = [
    {
        question: `Sleep Magic`,
        answer: `No two families or babies are alike in their needs and dynamics. 
                We recognize the profound connection between the love you have for your baby, 
                their development, feeding relationships and sleep. 
                I’ve devoted the last five years to certifications, 
                training and continued education to create sleep solutions that take 
                into account these interconnected elements. 
                Through working with different children both in-person and virtually, 
                I’ve picked up on the nuances and flexibility of sleep coaching
                 that make sleep training successful. Alongside the basic principles of 
                 introducing independent sleep that stay relatively consistent, 
                 is room for each child to be met exactly where they are.`,
    },
    {
        question: 'Family-Focused Approach',
        answer: `I arrive with no agenda other than to welcome you into a safe coaching space
                and learn about your family’s ideal vision sleep. From there, 
                we do a deep dive into your capacity for change, the feeding relationship, 
                developmentally appropriate expectations, root causes of sleep symptoms, 
                sleep hygiene and best approaches to introduce independent sleep. 
                Our whole child, whole family, solution-based approach is unlike most 
                cookie-cutter providers.`,
    },
    {
        question: 'Cozy, On-Going Support',
        answer: `Coaching that offers a safe space for parents to seamlessly implement changes, 
              ask questions and be nurtured through the progress. This conscious care helps 
              families navigate the process with confidence, learning tools and skills along 
              the way that allow them to continue prioritizing sleep for years to come.`,
    }
];

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({theme}) => ({
    background: theme.palette.common.white,
}));

export default function HomeCalmCapable() {
    const isSmUp = useResponsive('up', 'sm');

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChangeExpanded =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <StyledRoot>
            <Container
                component={MotionViewport}
                sx={{
                    position: 'relative',
                    py: {xs: 2, md: 5},
                }}
            >
                <Grid container>
                    <Grid lg={6}
                        justifyContent="left"
                        sx={{
                            marginTop: '2%'
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: 'left',
                                px: {xs: 3, md: 8},
                                py: {xs: 6, md: 8},
                            }}
                        >

                            <m.div variants={varFade().inUp}>
                                <Typography variant="yellowTail" sx={{mt: 3, mb: 5, color: 'text.secondary'}}>
                                    Uninterrupted sleep allows you to feel
                                </Typography>
                            </m.div>

                            <m.div variants={varFade().inUp} style={{marginTop: '30px'}}>
                                <Typography variant="h2">Calm + Capable</Typography>
                            </m.div>

                            <m.div variants={varFade().inUp} style={{marginTop: '10px'}}>
                                <Typography variant="h6" sx={{mt: 3, mb: 5, color: 'primary.main'}}>
                                    You know that a full night’s rest is essential to the
                                    well-being and happiness of your family… here’s how
                                    we’ll get there:
                                </Typography>
                            </m.div>
                        </Box>
                    </Grid>

                    <Grid xs={12} md={6} lg={6} justifyContent="center">

                        <Box sx={{my: {xs: 8, md: 10}}}>
                            {CONTENTS.map((faq) => (
                                <m.div key={faq.question} variants={varFade().in}>
                                    <Accordion
                                        expanded={expanded === faq.question}
                                        onChange={handleChangeExpanded(faq.question)}
                                    >
                                        <AccordionSummary>
                                            <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                                                {faq.question}
                                            </Typography>

                                            <Iconify
                                                width={24}
                                                icon={expanded === faq.question ? 'carbon:chevron-up' : 'carbon:chevron-down'}
                                            />
                                        </AccordionSummary>

                                        <AccordionDetails>
                                            <Typography>{faq.answer}</Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </m.div>
                            ))}
                        </Box>

                    </Grid>
                </Grid>

                {isSmUp && (
                    <Pattern01
                        sx={{
                            top: 40,
                            left: 0,
                            right: 0,
                            zIndex: -1,
                            mx: 'auto',
                            maxWidth: 600,
                            maxHeight: 600,
                        }}
                    />
                )}
            </Container>
        </StyledRoot>
    );
}
