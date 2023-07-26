import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class AccordionResource extends React.Component {
    render() {
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={this.props.id}
                    id={this.props.id}
                >
                <Typography>{this.props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: "#f1f1f1"}}>
                <Typography style={{textAlign: "left"}}>
                    {this.props.content}
                </Typography>
                </AccordionDetails>
            </Accordion>
        )
    }
}

class Resources extends React.Component {
    
    render() {
        return (
            <div className='page-content'>
                <h2>Resources for Further Research on Sexual Purity ("Sticks")</h2>
                <main>
                    <p>For those who have read <em>Called Higher</em>, we pray that the Lord has sparked a new fire in your heart to pursue sexual purity, and we also pray that the content of the book has served as some of the much-needed kindling to help that fire grow. But kindling can only take you so far; you are going to need to gather some <strong>sticks</strong> if you want keep your flame burning long enough to cook anything worthwhile.</p>
                    <p>To help get you started, we have gathered some sticks for you here.</p>
                    
                    <h3>Sermons &amp; Articles</h3>
                    <ul>
                        <li>
                            <AccordionResource 
                                id="Chandler-sermon-resource" 
                                title="Matt Chandler: Is masturbation okay, even without pornography?" 
                                content=<span>Chandler, Matt. "<a href="https://vimeo.com/106221371" target="_blank" title="Matt Chandler Is masturbation OK (even without pornography)?" rel="noopener noreferrer">Is masturbation OK (even without pornography)?</a>" uploaded by David C Cook, 15 Sep. 2014, vimeo.com/106221371.</span>
                            />
                        </li>
                        <li>
                            <AccordionResource 
                                id="Piper-masturbation-sermon-resource" 
                                title="John Piper: Masturbation becomes the enemy of missions" 
                                content=<span>Piper, John. "<a href="https://www.desiringgod.org/articles/missions-and-masturbation" title="John Piper Missions and Masturbation" target="_blank" rel="noopener noreferrer">Missions and Masturbation</a>." <em>Desiring God</em>. 10 Sep. 1984, www. desiringgod.org/articles/missions-and-masturbation. Copyright Desiring God Foundation.</span>
                            />
                        </li>
                        <li>
                            <AccordionResource 
                                id="Piper-no-to-porn-sermon-resource" 
                                title=<span>John Piper: You <em>can</em> say no to porn. Let me prove it.</span>
                                content=<span>Piper, John. "<a href="https://www.desiringgod.org/messages/you-can-say-no-to-porn" target="_blank" title="John Piper You Can Say No to Porn: A Pleasure Greater Than Lust" rel="noopener noreferrer">You Can Say No to Porn: A Pleasure Greater Than Lust</a>.” <em>Desiring God</em>. 11 Feb. 2015, www.desiringgod.org/messages/you-can-say-no-to-porn. Accessed 4 Jan. 2016. Copyright Desiring God Foundation.</span>
                            />
                        </li>
                        <li>
                            <AccordionResource 
                                id="Platt-masturbation-not-gray-area-sermon-resource" 
                                title="David Platt: Masturbation is not a gray area"
                                content=<span>Platt, David. "<a href="https://vimeo.com/282292817#t=1h6m45s" target="_blank" rel="noopener noreferrer">Secret Church 15: Christ, Culture, and a Call to Action – Session 3</a>." <em>Radical</em>. 24 Apr. 2015. Sermon. radical.net/?session=christ-culture-and-a-call-to-action-session-3. Copyright David Platt. Courtesy of Radical. See 01:06:45 to 01:08:27.</span>
                            />
                        </li>
                        <li>
                            <AccordionResource 
                                id="Platt-porn-sex-trafficking-sermon-resource" 
                                title="David Platt: Pornography contributes to sex-trafficking"
                                content=<span>Same as above, from <a href="https://vimeo.com/282292817#t=1h18m47s" target="_blank" rel="noopener noreferrer">01:18:47 to 01:21:57</a></span>
                            />
                        </li>
                    </ul>
                    <h3>Videos & Documentaries</h3>
                    <ul>
                        <li>
                            <AccordionResource 
                                id="CNN-Toha-resource" 
                                title="CNN investigates child sex-trafficking in Cambodia (featuring Toha's story)"
                                content=<span>"<a href="https://www.cnn.com/videos/intl_tv-shows/2015/04/28/spc-freedom-project-every-day-in-cambodia.cnn" title="CNN Every Day in Cambodia" target="_blank" rel="noopener noreferrer">Every Day in Cambodia</a>." <em>CNN Freedom Project</em>, 14 Dec. 2013, www.cnn.com/videos/intl_tv-shows/2015/04/28/spc-freedom-project-every-day-in-cambodia.cnn.</span>
                            />
                        </li>
                        <li>
                            <AccordionResource 
                                id="Ted-Bundy-resource" 
                                title="Serial killer Ted Bundy warns about pornography as last act before execution"
                                content=<div>
                                    <span>Dobson, James. Interview with Ted Bundy. <em>Focus on the Family</em>, 23 Jan. 1989, www.focusonthefamily.com/media/social-issues/fatal-addiction-ted-bundys-final-interview.</span>
                                    <br />
                                    <br />
                                    <span>UPDATE: Original source above has been removed by Focus on the Family. See this <a href="https://www.youtube.com/watch?v=_r2XzTcVaW4">youtube video</a> for a recorded copy of the interview.</span>
                                </div>
                            />
                        </li>
                    </ul>
                    <h3>Books</h3>
                    <ul>
                        <li>
                            <AccordionResource 
                                id="EMB-marriage-resource" 
                                title="Does masturbation go away when I get married?"
                                content=<span>Arterburn, Stephen, and Fred Stoeker. <a href="https://www.amazon.com/dp/0307457990/ref=cm_sw_em_r_mt_dp_U_om46CbF0B5C1Y%20" target="_blank" title="Stephen Arterburn Fred Stoeker Every Young Man's Battle: Strategies for Victory in the Real World of Sexual Temptation" rel="noopener noreferrer"><em>Every Young Man's Battle: Strategies for Victory in the Real World of Sexual Temptation</em></a>. WaterBrook Press, 2002. See "Still Looking For A Sexual Nirvana?" on pp. 34-38.</span>
                            />
                        </li>
                        <li>
                            <AccordionResource 
                                id="Caine-Undaunted-resource" 
                                title="Three harrowing stories of sex-trafficking"
                                content=<span>Caine, Christine. <a href="https://www.amazon.com/dp/0310333873/ref=cm_sw_em_r_mt_dp_U_5246CbZQHQRF1" title="Christine Caine Undaunted: Daring to do what God calls you to do" target="_blank" rel="noopener noreferrer"><em>Undaunted: Daring to do what God calls you to do</em></a>. Zondervan, 2012. See "The <em>Schindler's List</em> Moment" on pp. 13-26</span>
                            />
                        </li>
                    </ul>
                    <h3>Bible</h3>
                    <ul>
                        <li>
                            <AccordionResource 
                                id="Bible-definitions-resource" 
                                title="Definitions"
                                content=<span><a href="https://www.blueletterbible.org/lang/Lexicon/Lexicon.cfm?Strongs=G4202&amp;t=NASB" target="_blank" title="sexual immorality porneia Blue Letter Bible" rel="noopener noreferrer">sexual immorality (<em>porneia</em>)</a>, <a href="https://www.blueletterbible.org/lang/Lexicon/Lexicon.cfm?strongs=G766&amp;t=NASB" target="_blank" title="sensuality aselgeia Blue Letter Bible" rel="noopener noreferrer">sensuality (<em>aselgeia</em>)</a>, <a href="https://www.blueletterbible.org/lang/Lexicon/Lexicon.cfm?strongs=G167&amp;t=NASB" target="_blank" title="impurity akatharsia Blue Letter Bible" rel="noopener noreferrer">impurity (<em>akatharsia</em>)</a></span>
                            />
                        </li>
                        <li>
                            <AccordionResource 
                                id="Bible-sexual-immorality-resource" 
                                title="Against Sexual Immorality"
                                content=<span><a href="https://www.biblegateway.com/passage/?search=matthew+5&amp;version=ESV" target="_blank" title="Matthew 5:27-30" rel="noopener noreferrer">Matthew 5:27-30</a>, <a href="https://www.biblegateway.com/passage/?search=ephesians+5&amp;version=ESV" title="Ephesians 5:3-7" target="_blank" rel="noopener noreferrer">Ephesians 5:3-7</a>, <a href="https://www.biblegateway.com/passage/?search=1+Thessalonians+4&amp;version=ESV" target="_blank" title="1 Thessalonians 4:3-8" rel="noopener noreferrer">1 Thessalonians 4:3-8</a>, <a href="https://www.biblegateway.com/passage/?search=galatians+5&amp;version=ESV" target="_blank" title="Galatians 5:19-23" rel="noopener noreferrer">Galatians 5:19-23</a>, <a href="https://www.biblegateway.com/passage/?search=1+corinthians+6&amp;version=ESV" target="_blank" title="1 Corinthians 6:12-20" rel="noopener noreferrer">1 Corinthians 6:12-20</a>, <a href="https://www.biblegateway.com/passage/?search=proverbs+5&amp;version=ESV" target="_blank" title="Proverbs 5" rel="noopener noreferrer">Proverbs 5</a>, <a href="https://www.biblegateway.com/passage/?search=job+31&amp;version=ESV" target="_blank" title="Job 31:1-12" rel="noopener noreferrer">Job 31:1-12</a>, <a href="https://www.biblegateway.com/passage/?search=colossians+3&amp;version=ESV" target="_blank" title="Colossians 3:1-11" rel="noopener noreferrer">Colossians 3:1-11</a></span>
                            />
                        </li>
                        <li>
                            <AccordionResource 
                                id="Bible-within-marriage-resource" 
                                title="Sexual Activity Blessed Within Marriage"
                                content=<span><a href="https://www.biblegateway.com/passage/?search=hebrews+13&amp;version=ESV" target="_blank" title="Hebrews 13:4" rel="noopener noreferrer">Hebrews 13:4</a>, <a href="https://www.biblegateway.com/passage/?search=1+corinthians+7&amp;version=ESV" target="_blank" title="1 Corinthians 7:1-5" rel="noopener noreferrer">1 Corinthians 7:1-5</a>, <a href="https://www.biblegateway.com/passage/?search=Song+of+Solomon+1&amp;version=ESV" target="_blank" title="Song of Solomon" rel="noopener noreferrer">Song of Solomon</a>, <a href="https://www.biblegateway.com/passage/?search=Deuteronomy+22&amp;version=ESV" target="_blank" title="Deuteronomy 22:13-21" rel="noopener noreferrer">Deuteronomy 22:13-21</a>, <a href="https://www.biblegateway.com/passage/?search=Proverbs+5&amp;version=ESV" target="_blank" title="Proverbs 5:15-23" rel="noopener noreferrer">Proverbs 5:15-23</a></span>
                            />
                        </li>
                    </ul>
                    <h3>Academic Research</h3>
                    <ul>
                        <li>
                            <AccordionResource 
                                id="research-porn-addictive-resource" 
                                title="Is pornography addictive?"
                                content=<span>Hilton, Donald L., Jr. “<a href="https://dx.doi.org/10.3402/snp.v3i0.20767" target="_blank" title="Donald Hilton Pornography addiction – A supranormal stimulus considered in the context of neuroplasticity" rel="noopener noreferrer">Pornography addiction – A supranormal stimulus considered in the context of neuroplasticity</a>." <em>Socioaffective Neuroscience &amp; Psychology</em>. vol. 3, no. 1, 2013, dx.doi.org/10.3402/snp.v3i0.20767.</span>
                            />
                        </li>
                        <li>
                            <AccordionResource 
                                id="research-Farley-resource" 
                                title="Is pornography connected to prostitution and trafficking?"
                                content=<span>Farley, Melissa. "<a href="http://prostitutionresearch.com/pornography-prostitution-trafficking-making-the-connections/" title="Melissa Farley Pornography, Prostitution, &; Trafficking: Making the Connections" target="_blank" rel="noopener noreferrer">Pornography, Prostitution, &amp; Trafficking: Making the Connections</a>." <em>Prostitution Research &amp; Education</em>, Aug. 2015, prostitution- research.com/wp-content/uploads/2015/07/Pornography-prostitution-trafficking.pdf.</span>
                            />
                        </li>
                        <li>
                            <AccordionResource 
                                id="research-US-sexual-behavior-resource" 
                                title="Sexual behavior in the United States"
                                content=<span>Herbenick, Debby, et al. "<a href="https://doi.org/10.1111/j.1743-6109.2010.02012.x" title="Debby Herbenick Sexual Behavior in the United States: Results from a National Probability Sample of Men and Women Ages 14-94" target="_blank" rel="noopener noreferrer">Sexual Behavior in the United States: Results from a National Probability Sample of Men and Women Ages 14–94</a>." <em>The Journal of Sexual Medicine</em>, vol. 7, supplement 5, 2010, pp. 255-265. doi.org/10.1111/j.1743-6109.2010.02012.x</span>
                            />
                        </li>
                    </ul>
                    <h3>Contrary Viewpoints on Masturbation</h3>
                    <ul>
                        <li>
                            <AccordionResource 
                                id="Dodson-not-much-to-do-with-God-resource" 
                                title="I don't believe it has much to do with your relationship with God"
                                content=<span>Dobson, James. <a href="https://www.amazon.com/dp/1414391331/ref=cm_sw_em_r_mt_dp_U_gfm7CbGANGCQ5" target="_blank" title="James Dobson Bringing Up Boys: Practical Advice and Encouragement for Those Shaping the Next Generation of Men" rel="noopener noreferrer"><em>Bringing Up Boys: Practical Advice and Encouragement for Those Shaping the Next Generation of Men</em></a>. Tyndale, 2001, pp. 78-80.</span>
                            />
                        </li>
                        <li>
                            <AccordionResource 
                                id="EMB-really-gray-zone-resource" 
                                title="Is masturbation in the gray zone?"
                                content=<span>Arterburn, Stephen, and Fred Stoeker. <a href="https://www.amazon.com/dp/0307457990/ref=cm_sw_em_r_mt_dp_U_om46CbF0B5C1Y" target="_blank" title="Stephen Arterburn Fred Stoeker Every Young Man’s Battle: Strategies for Victory in the Real World of Sexual Temptation" rel="noopener noreferrer"><em>Every Young Man’s Battle: Strategies for Victory in the Real World of Sexual Temptation</em></a>. WaterBrook Press, 2002. See "Welcome to the Gray Zone" on pp. 109-110.</span>
                            />
                        </li>
                    </ul>
                </main>
            </div>
        )
    }
}



export default Resources;