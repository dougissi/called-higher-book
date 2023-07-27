import React from 'react';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';


class GridItemQL extends React.Component {
    render() {
        return (
            <Grid item xs={12} sm={12}>
                <Button variant="outlined" href={this.props.href} style={{textTransform: 'none'}}>
                    {this.props.text}
                </Button>
            </Grid>
        )
    }
}

class QuickLinks extends React.Component {
    
    render() {
        return (
            <div className='page-content'>
                <h2>QuickLinks</h2>
                <Grid container spacing={2}>
                    <GridItemQL
                        href="/"
                        text="CalledHigherBook.com"
                    />
                    <GridItemQL 
                            href="https://a.co/d/7u6MaXf" 
                            text="Amazon Listing" 
                        />
                    <GridItemQL 
                        href="https://amzn.to/2JZOodJ" 
                        text="Audible Audiobook" 
                    />
                    <GridItemQL 
                        href="https://books.apple.com/us/audiobook/called-higher-testimony-to-lords-power-in-our-fight/id1484873427?mt=11&at=1010l33as" 
                        text="Apple Audiobook" 
                    />
                    <GridItemQL 
                        href="/sticks" 
                        text="Sexual Purity Resources" 
                    />
                    <GridItemQL 
                        href="https://xxxchurch.com/men/what-happens-after-10-years-of-no-porn.html" 
                        text="My XXXChurch Blog Post: What Happens After 10 Years of No Porn?"
                    />
                    <GridItemQL 
                        href="https://www.youtube.com/watch?v=QuOCvKvrwI8&t=3972s" 
                        text="Kanye West Interview" 
                    />
                </Grid>
            </div>
        )
    }
}


export default QuickLinks;