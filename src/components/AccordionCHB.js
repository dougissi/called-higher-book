import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class AccordionCHB extends React.Component {
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

export default AccordionCHB;