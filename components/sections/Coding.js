import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardMedia,
    CardContent,
    Button,
    Container,
    Grid,
} from '@material-ui/core/';

import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

import { Title, UnderTitleBlack } from '../Builders';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    root: {
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        maxWidth: 500,
        marginLeft: 'auto',
        overflow: 'initial',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: spacing(2),
        [breakpoints.up('md')]: {
            flexDirection: 'row',
            paddingTop: spacing(2),
        },
    },
    media: {
        width: '88%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: spacing(-3),
        height: 0,
        paddingBottom: '48%',
        borderRadius: spacing(2),
        backgroundColor: '#fff',
        position: 'relative',
        [breakpoints.up('md')]: {
            width: '100%',
            marginLeft: spacing(-3),
            marginTop: 0,
            transform: 'translateX(-8px)',
        },
        '&:after': {
            content: '" "',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(147deg, #FFF 0%, #000 74%)',
            borderRadius: spacing(2), // 16
            opacity: 0.5,
        },
    },
    content: {
        padding: 24,
    },
    cta: {
        marginTop: 24,
        textTransform: 'initial',
    },
}));

export const Coding = React.memo(function BlogCard() {
    const styles = useStyles();

    const {
        button: buttonStyles,
        ...contentStyles
    } = useBlogTextInfoContentStyles();
    const shadowStyles = useOverShadowStyles();

    return (
        <Container fixed>
            <Grid container spacing={6}>
                <Grid item xs={12} fullWidth>
                    <UnderTitleBlack>Coding expirience</UnderTitleBlack>
                </Grid>
                <Grid item xs={6} fullWidth>
                    <Card className={cx(styles.root, shadowStyles.root)}>
                        <CardMedia
                            className={styles.media}
                            image={'/teknikfokus.jpg'}
                        />
                        <CardContent>
                            <TextInfoContent
                                classes={contentStyles}
                                overline={'MARS 2020'}
                                heading={'Teknikfokus website'}
                                body={
                                    'Coded teknikfokus website for 2020 as head of IT. Languages used are CSS, HTML and pure JavaScript.'
                                }
                            />
                            <Button
                                className={buttonStyles}
                                href='https://www.teknikfokus.se/'
                            >
                                Link to website
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} fullWidth>
                    <Card className={cx(styles.root, shadowStyles.root)}>
                        <CardMedia
                            className={styles.media}
                            image={'/helenhansson.png'}
                        />
                        <CardContent>
                            <TextInfoContent
                                classes={contentStyles}
                                overline={'JUNE 2020'}
                                heading={'Helen Hansson website'}
                                body={
                                    'Server side rendered website coded in JavaScript and HTML with E-mail form. Styled with Styled-components and Material UI.'
                                }
                            />
                            <Button
                                className={buttonStyles}
                                href='https://arvebratt.netlify.app/'
                            >
                                Link to website
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
});

export default Coding;
