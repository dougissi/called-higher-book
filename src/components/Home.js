import '../App.css';
import React from 'react';
import { Grid } from '@mui/material';
import paperback from '../images/print-books/paperback.jpg';
import hardcover from '../images/print-books/hardcover.jpg';
import audioSample from '../audio/called_higher_retail_audio_sample.mp3';
import audible from '../images/audiobooks/audible.jpeg';
import appleBooks from '../images/audiobooks/apple-books.jpeg';
import kindle from '../images/ebooks/kindle.jpeg';
import googlePlay from '../images/ebooks/google-play.jpeg';
import nook from '../images/ebooks/nook.jpeg';
import kobo from '../images/ebooks/kobo.jpeg';

class ExternalLink extends React.Component {
    render() {
        return <a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.display}</a>
    }
}

class GridImageWithExternalLink extends React.Component {
    render() {
        return (
            <Grid item xs={12} sm={6}>
                <ExternalLink
                    link={this.props.link}
                    display=<img src={this.props.img} alt={this.props.text} width="100%" />
                />
                <br />
                <ExternalLink
                    link={this.props.link}
                    display={this.props.text}
                />
            </Grid>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <div className='page-content'>
                <h2>Called Higher</h2>
                <h3>A Testimony to the Lord's Power in Our Fight for Sexual Purity</h3>
                <main style={{textAlign: "center"}}>
                    <p>Discover how God gave a regular college student named Doug freedom from both pornography and masturbation for more than 10 years now, all without getting married. You very well may hear your story in Doug's, and we pray that it points one and all to the hope and power that only resides in Jesus.</p>
                    <p>
                        · <a href="#print">Print Books</a> · <a href="#audiobook">Audiobook</a> · <a href="#ebook">eBook</a> ·
                    </p>
                    <section id="print"><h3>Print Books</h3></section>
                    <Grid container spacing={2}>
                        <GridImageWithExternalLink
                            link="https://a.co/d/7u6MaXf"
                            img={paperback}
                            text="Paperback"
                        />
                        <GridImageWithExternalLink
                            link="https://a.co/d/31Ztja0"
                            img={hardcover}
                            text="Hardcover"
                        />
                    </Grid>

                    <section id="audiobook"><h3>Audiobook</h3></section>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <p>Audio Sample:</p>
                            <audio controls="controls" controlslist="nodownload"> <source src={audioSample} type="audio/mpeg"></source></audio>
                        </Grid>
                        <GridImageWithExternalLink 
                            link="https://amzn.to/2JZOodJ"
                            img={audible}
                            text="Audible"
                        />
                        <GridImageWithExternalLink 
                            link="https://books.apple.com/us/audiobook/called-higher-testimony-to-lords-power-in-our-fight/id1484873427?mt=11&at=1010l33as"
                            img={appleBooks}
                            text="Apple Books"
                        />
                    </Grid>
                   
                    <section id="ebook"><h3>eBook</h3></section>
                    <Grid container spacing={2}>
                        <GridImageWithExternalLink 
                            link="https://amzn.to/3bgQQZe"
                            img={kindle}
                            text="Kindle"
                        />
                        <GridImageWithExternalLink 
                            link="https://books.apple.com/us/book/called-higher/id1472711663?mt=11&at=1010l33as"
                            img={appleBooks}
                            text="Apple Books"
                        />
                        <GridImageWithExternalLink 
                            link="https://play.google.com/store/books/details?id=bDqlDwAAQBAJ"
                            img={googlePlay}
                            text="Google Play"
                        />
                        <GridImageWithExternalLink 
                            link="https://www.barnesandnoble.com/w/called-higher-doug-issichopoulos/1132328778?ean=2940163148288"
                            img={nook}
                            text="Nook"
                        />
                        <GridImageWithExternalLink 
                            link="https://www.kobo.com/us/en/ebook/called-higher"
                            img={kobo}
                            text="Kobo"
                        />
                    </Grid>
                </main>
            </div>
        )
    }

}

export default Home;
