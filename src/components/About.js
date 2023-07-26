import React from 'react';
import scf from '../images/finances/2023-01-30_StatementofCashFlows.jpg';
import pl1 from '../images/finances/2023-01-30_ProfitandLoss.jpg';
import pl2 from '../images/finances/2023-01-30_ProfitandLoss2.jpg';

class About extends React.Component {
    
    render() {
        return (
            <div className='page-content'>
                <h2>About</h2>
                <main>
                    <p style={{textAlign: "center"}}>
                        · <a href="#book">The Book</a> · <a href="#author">The Author</a> · <a href="#proceeds">The Proceeds</a> ·
                    </p>

                    <section id="book"><h3>The Book</h3></section>
                    <p>In our world today, there aren't many voices encouraging us to refrain from sexual relations outside of marriage. Even fewer voices are calling us to also refrain from pornography and masturbation. Nevertheless, some of us have concerns that simply won’t go away:</p>
                    <ul>
                        <li>Is watching pornography really okay?</li>
                        <li>Could masturbation actually be harmful for me?</li>
                        <li>Why can't I stop?</li>
                    </ul>
                    <p>In <em>Called Higher</em>, you will read the uncommon testimony of how God gave a regular college student named Doug freedom from both pornography and masturbation. He still has this gift of freedom after more than 10 years now, all without getting married. Being forever changed by the Lord's mercy, today Doug strives to point men and women everywhere to follow Jesus with everything, including abstaining from these hidden sexual activities.</p>
                    <p>His story is raw but real, for the stakes are higher than we might ever care to realize. But because of who the Lord is, not only is freedom possible, it's also incomparably better. Taste and see.</p>  

                    <section id="author"><h3>The Author</h3></section>
                    <p>Doug Issichopoulos grew up in a rural town in northern Illinois and spent the majority of his youth playing high-level soccer. He attended Stanford University in California, where he majored in mathematics and discovered a love for languages. He shamelessly listens for Spanish, Portuguese, French, and Greek everywhere he goes.</p>
                    <p>It was in college when Doug came to believe that Jesus Christ truly rose from the dead, and ever since then his life has been shaped by the desire to serve the Lord. After graduating, this desire took him to work in college ministry at Stanford, inner-city ministry in San Francisco, and in partnership with Christian organizations in Mexico, Honduras, Peru, Cambodia, and East Africa.</p>
                    <p>Nevertheless, one of the things that makes Doug so unique has to do with one of the ways in which he is most common. Through high school and into college, he was deeply entrenched in pornography and masturbation, along with every peer he ever knew. But by God’s incredible grace, he was given freedom from these activities as a 19-year-old college student. Moreover, he has been free for nine years and counting, all without getting married.</p>
                    <p>Doug Issichopoulos currently resides in Palo Alto, CA. <em>Called Higher</em> is his first book.</p>


                    <section id="proceeds"><h3>The Proceeds</h3></section>
                    <p>On the back cover of every <em>Called Higher book</em>, you will find a bold promise: <strong>All of the author's royalties and the publisher's surplus will be given to support select Christian ministries and organizations.</strong></p>
                    <p>While promises like these are admirable, they are difficult promises to keep. However, both Doug Issichopoulos and Promise Press are all about keeping their promises, seeing as the Lord has always kept his.</p>
                    <p>To that end, we will include detailed financial information here for both accountability and transparency. If you have any questions, don't hesitate to <a href="mailto:info@calledhigherbook.com">reach out.</a></p>
                    <p><strong>Updated: January, 30 2023</strong></p>
                    Books
                    <ul>
                        <li>Release Date: July 15, 2019</li>
                        <li>In Distribution (Print): 451</li>
                        <li>Sold (eBook): 51</li>
                        <li>Sold (Audiobook): 102</li>
                    </ul>

                    Author's Royalties
                    <ul>
                        <li>Contract: 10% of retail price of sold print books, 10% of eBook sales, 10% of audiobook sales</li>
                        <li>Donated: $600.09</li>
                        <li>Pending: $0 (donated more than earned)</li>
                    </ul>

                    Publisher's Quarterly Surpluses
                    <ul>
                        <li>Donated: $0</li>
                        <li>Pending: $0 (no surpluses to date)</li>
                    </ul>

                    <img src={scf} alt="Statement of Cash Flows" />
                    <img src={pl1} alt="Profit and Loss 1" />
                    <img src={pl2} alt="Profit and Loss 2" />
                </main>
            </div>
        )
    }
}



export default About;