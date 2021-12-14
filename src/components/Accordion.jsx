import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const AccordionStyled = styled((props) => <Accordion {...props} />)(({ theme }) => ({
  backgroundColor: '#143d99',
}));
const AccordionSummaryStyled = styled((props) => <AccordionSummary {...props} />)(({ theme }) => ({
  backgroundColor: '#143d99',

}));
const AccordionDetailsStyled = styled((props) => <AccordionDetails {...props} />)(({ theme }) => ({
  backgroundColor: '#f9f9f9',

}));

export { AccordionStyled, AccordionSummaryStyled, AccordionDetailsStyled };
