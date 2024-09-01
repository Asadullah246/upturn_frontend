import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LockIcon from "@mui/icons-material/Lock";

export default function CourseAccordion({ course }) {
  return (
    <div>
      {course?.content?.map((c, index) => {
        if (index == 0) {
          return (
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <p className="grayishColor" style={{ fontWeight: 600 }}>
                  {c?.title}
                </p>
              </AccordionSummary>
              <AccordionDetails>
                {c?.videos?.map(v=>{
                  return (
                    <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "5px",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "5px",
                      }}
                    >
                      <PlayCircleOutlineIcon
                        style={{ fontSize: "1.1em", color: "#1976D2" }}
                      />
                      <p className="grayishColor" style={{ marginTop: "-3px" }}>
                       {v}
                      </p>
                    </div>
                    <div>
                      <LockIcon style={{ fontSize: "1.1em" }} />
                    </div>
                  </div>
                  )
                })}


              </AccordionDetails>
            </Accordion>
          );
        } else {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header" 
              >
                <p className="grayishColor" style={{ fontWeight: 600 }}>
               {c?.title}
                </p>
              </AccordionSummary>
              <AccordionDetails>
              {c?.videos?.map(v=>{
                  return (
                    <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "5px",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "5px",
                      }}
                    >
                      <PlayCircleOutlineIcon
                        style={{ fontSize: "1.1em", color: "#1976D2" }}
                      />
                      <p className="grayishColor" style={{ marginTop: "-3px" }}>
                       {v}
                      </p>
                    </div>
                    <div>
                      <LockIcon style={{ fontSize: "1.1em" }} />
                    </div>
                  </div>
                  )
                })}
              </AccordionDetails>
            </Accordion>
          );
        }
      })}
    </div>
  );
}
