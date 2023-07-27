import React from 'react';
import AccordionCHB from './AccordionCHB';


class FAQ extends React.Component {
    
    render() {
        return (
            <div className='page-content'>
                <h2>FAQ</h2>
                <AccordionCHB 
                    id="recent-order-FAQ" 
                    title=<span>Can you help with a question I have about a <strong>recent order</strong>?</span>
                    content=<span>Absolutely! Please send us an email at <a href="mailto:store@calledhigherbook.com">store@calledhigherbook.com</a>, including any applicable photos of your order. We will get back to you as soon as possible, typically within one business day.</span>
                />
                <AccordionCHB 
                    id="shipping-FAQ" 
                    title=<span>What are <strong>typical shipping times</strong> and do <strong>ship worldwide</strong>?</span>
                    content=<div>
                        <p>Our goal is to process, package, and ship orders within one business day from when we receive an order. After an order is shipped, the time until delivery depends on the shipping service purchased during checkout. For reference, usually our most affordable shipping method within the continental US is via USPS Media Mail and takes 2-5 business days.</p>
                        <p>Yes, we ship worldwide, and you will find our rates during checkout.</p>
                    </div>
                />
                <AccordionCHB 
                    id="returns-FAQ" 
                    title=<span>What is your policy on <strong>returns and refunds</strong>?</span>
                    content=<span>If you are unhappy with your purchase for any reason, we will provide you with a full refund within 30 days from the date you received your order. Please send us an email at <a href="mailto:store@calledhigherbook.com">store@calledhigherbook.com</a>, including any applicable photos of your order. We will get back to you as soon as possible, typically within one business day.</span>
                />
                <AccordionCHB 
                    id="bulk-FAQ" 
                    title=<span>Can I make a <strong>bulk purchase</strong>?</span>
                    content=<span>Yes! The more the merrier. Please fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrB61HCza3Sw9KQmVkAxpZX8CQSzXuLgdUBx3Jy9s6sOtx0Q/viewform?usp=pp_url&entry.1366103193=Purchasing+in+Bulk">this form</a> to outline the type of purchase you are interested in.</span>
                />
                <AccordionCHB 
                    id="new-stick-FAQ" 
                    title=<span>Besides what you have already listed, did you know about this <strong>"sticks" resource</strong> I found?</span>
                    content=<span>We are in this battle together, and so we’d love to review your resource and see if it would be a good fit alongside the other resources we’ve gathered. To help us review your resource, it would be helpful for us if you filled out <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrB61HCza3Sw9KQmVkAxpZX8CQSzXuLgdUBx3Jy9s6sOtx0Q/viewform?usp=pp_url&entry.1366103193=%22Sticks%22+Resource+Suggestion">this form</a>.</span>
                />
                <AccordionCHB 
                    id="typo-FAQ" 
                    title=<span>Did you know about this <strong>typo / grammar error / broken link</strong> I found?</span>
                    content=<span>Maybe! Here is the <a href="https://docs.google.com/spreadsheets/d/17SPmEy7AR9weTvACEhFskRNjM-QRZ0moQCq5wA2vaFc/edit?usp=sharing">list of errors</a> of which we are currently aware. If the error that you have found is not part of this list, then please fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrB61HCza3Sw9KQmVkAxpZX8CQSzXuLgdUBx3Jy9s6sOtx0Q/viewform?usp=pp_url&entry.1366103193=Typo+/+Grammar+Error+/+Broken+Link">this form</a> to share it with us. Thanks for helping to make <em>Called Higher</em> better!</span>
                />
                <AccordionCHB 
                    id="Doug-speaking-FAQ" 
                    title=<span>Would Doug be willing to <strong>speak at an event</strong> we're hosting?</span>
                    content=<span>Doug Issichopoulos is just a regular guy, but the Lord has done a powerful work in his life. Doug loves to tell others about Him and what He has done. With that said, Doug's resources are limited, but he will prayerfully respond to all legitimate requests. To make a request, please fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrB61HCza3Sw9KQmVkAxpZX8CQSzXuLgdUBx3Jy9s6sOtx0Q/viewform?usp=pp_url&entry.1366103193=Author+Speaking+Request">form here.</a></span>
                />
                <AccordionCHB 
                    id="give-more-FAQ" 
                    title=<span>I admire your work and already have abook. How else can I <strong>support <em>Called Higher</em></strong>?</span>
                    content=<span>Doug Issichopoulos is just a regular guy, but the Lord has done a powerful work in his life. Doug loves to tell others about Him and what He has done. With that said, Doug's resources are limited, but he will prayerfully respond to all legitimate requests. To make a request, please fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrB61HCza3Sw9KQmVkAxpZX8CQSzXuLgdUBx3Jy9s6sOtx0Q/viewform?usp=pp_url&entry.1366103193=Author+Speaking+Request">form here.</a></span>
                />
                <AccordionCHB 
                    id="address-FAQ" 
                    title=<span>Do you have a <strong>physical mailing address</strong>?</span>
                    content=<span>Yes, here it is below<br/><br/>Promise Press LLC<br/>620 Mountain Home Road<br/>Woodside, CA 94062</span>
                />
                <AccordionCHB 
                    id="other-question-FAQ" 
                    title=<span>My question isn't found here. What's a good <strong>email address</strong> for you?</span>
                    content=<span><a href="mailto:info@calledhigherbook.com">info@calledhigherbook.com</a></span>
                />
            </div>
        )
    }
}



export default FAQ;