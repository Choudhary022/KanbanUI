import { Box, Typography, Card, CardHeader, CardContent } from "@mui/material";
import { CardContainer,StyledCard } from "./Styles";


const DashBoardContent = () => {
    

  return (
    <CardContainer >
      <StyledCard >
        <CardHeader title="What is Kanban Board?" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            The Kanban board is a visual project management tool that helps
            teams manage their workflow and tasks efficiently. It is inspired by
            the Kanban method, which originated in the manufacturing industry
            and was later adapted for software development and other knowledge
            work.
          </Typography>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardHeader title="Key Components of a Kanban Board" />
        <CardContent>
          <ul>
            <li>Columns</li>
            <li>Cards</li>
            <li>Visual Cues</li>
          </ul>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardHeader title="Columns" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            The board is divided into multiple columns representing the
            different stages of the workflow. Each column typically represents a
            specific status or step in the process.
          </Typography>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardHeader title="Cards" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Tasks, user stories, or work items are represented as cards on the
            board. Each card contains essential information about the task, such
            as a title, description, assignee, due date, etc
          </Typography>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardHeader title="Visual Cues" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Kanban boards use visual cues, like colors and icons, to represent
            different types of tasks or priority levels. This makes it easy to
            identify and prioritize tasks at a glance.
          </Typography>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardHeader title="Advantages of Kanban Board" />
        <CardContent>
          <ul>
            <li>Visualizing Workflow</li>
            <li>Improved Communication</li>
            <li>Visual Cues</li>
          </ul>
        </CardContent>
      </StyledCard>
    </CardContainer>
  );
};

export default DashBoardContent;


