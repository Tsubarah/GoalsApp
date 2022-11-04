import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({ data }) {
  return (
    <div>
      <Accordion className='accordionWrapper'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>{data.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {data.value}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}